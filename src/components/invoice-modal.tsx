"use client";

/**
 * Modal de facturación de una cita.
 *
 * Muestra:
 *  - La línea del servicio realizado (precio de la cita).
 *  - Los productos incluidos en el tratamiento (a 0 €, solo descontarán stock).
 *  - Un selector para añadir más productos como venta al cliente (a su PVP).
 *
 * Al confirmar: genera el PDF, guarda la factura, descuenta el almacén
 * (incluidos + vendidos) y marca la cita como completada y facturada.
 */

import { useMemo, useState } from "react";
import type { Appointment, InvoiceLine, VerifactuRecord } from "../lib/types";
import { nextInvoiceNumber } from "../lib/types";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import { buildInvoicePdf, downloadInvoicePdf } from "../lib/invoice-pdf";
import { verifactuActivo, verifactuCrearFactura } from "../lib/verifactu";
import { bytesToBase64 } from "../lib/consent-pdf";
import Modal, { inputCls } from "./aura-modal";
import { IcAlert, IcBox, IcCheck, IcMinus, IcPlus, IcX } from "./icons";

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

/** Línea de venta extra en construcción. */
interface ExtraLine {
  productId: string;
  qty: number;
}

export default function InvoiceModal({
  appt,
  onClose,
  onInvoiced,
}: {
  appt: Appointment;
  onClose: () => void;
  /** Se llama tras emitir la factura (para cerrar también el modal de cita). */
  onInvoiced: () => void;
}) {
  const { db, clientById, invoiceAppointment } = useStore();
  const { toast } = useUI();

  const client = clientById(appt.clientId);
  // Las citas antiguas no guardan serviceId: localizamos el tratamiento por nombre
  const service =
    db.services.find((s) => s.id === appt.serviceId) ??
    db.services.find((s) => s.name === appt.serviceName);

  const [extras, setExtras] = useState<ExtraLine[]>([]);
  const [pick, setPick] = useState("");
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState("");
  /** Productos incluidos que el usuario quitó SOLO de esta factura
   *  (p. ej. sin stock o porque no se usaron): no se descontarán ni
   *  aparecerán en el ticket. El tratamiento no se modifica. */
  const [excluded, setExcluded] = useState<Set<string>>(new Set());

  /* Productos incluidos en el tratamiento (vivos, no snapshot), menos
     los que el usuario quitó para esta factura. */
  const included = useMemo(() => {
    const items: { productId: string; name: string; qty: number }[] = [];
    for (const it of service?.products ?? []) {
      if (excluded.has(it.productId)) continue;
      const p = db.products.find((x) => x.id === it.productId);
      if (p && it.qty > 0)
        items.push({ productId: p.id, name: p.name, qty: it.qty });
    }
    return items;
  }, [service, db.products, excluded]);

  /* Consumo total por producto (incluidos + extras) frente al stock real. */
  const stockUse = useMemo(() => {
    const use = new Map<string, number>();
    for (const it of included)
      use.set(it.productId, (use.get(it.productId) ?? 0) + it.qty);
    for (const ex of extras)
      use.set(ex.productId, (use.get(ex.productId) ?? 0) + ex.qty);
    return use;
  }, [included, extras]);

  /** true si algún producto se quedaría sin stock suficiente. */
  const shortage = useMemo(() => {
    for (const [pid, qty] of stockUse) {
      const p = db.products.find((x) => x.id === pid);
      if (p && qty > p.stock) return { name: p.name, stock: p.stock, need: qty };
    }
    return null;
  }, [stockUse, db.products]);

  const lines: InvoiceLine[] = useMemo(() => {
    const out: InvoiceLine[] = [
      {
        kind: "servicio",
        name: appt.serviceName,
        qty: 1,
        unitPrice: appt.price,
      },
    ];
    for (const it of included)
      out.push({
        kind: "producto",
        productId: it.productId,
        name: it.name,
        qty: it.qty,
        unitPrice: 0,
        included: true,
      });
    for (const ex of extras) {
      const p = db.products.find((x) => x.id === ex.productId);
      if (!p) continue;
      out.push({
        kind: "producto",
        productId: p.id,
        name: p.name,
        qty: ex.qty,
        unitPrice: p.price,
      });
    }
    return out;
  }, [appt, included, extras, db.products]);

  const total = useMemo(
    () =>
      Math.round(
        lines.reduce((s, l) => s + l.qty * l.unitPrice, 0) * 100
      ) / 100,
    [lines]
  );

  const addable = db.products.filter(
    (p) => !extras.some((e) => e.productId === p.id)
  );

  function addExtra(id: string) {
    if (!id) return;
    setExtras((xs) => [...xs, { productId: id, qty: 1 }]);
    setPick("");
    setError("");
  }

  function bumpExtra(id: string, delta: number) {
    setExtras((xs) =>
      xs
        .map((e) =>
          e.productId === id
            ? { ...e, qty: Math.max(0, Math.min(99, e.qty + delta)) }
            : e
        )
        .filter((e) => e.qty > 0)
    );
  }

  async function confirmInvoice() {
    if (shortage) {
      setError(
        `Stock insuficiente de «${shortage.name}»: hay ${shortage.stock} ud${shortage.stock === 1 ? "" : "s"} y se necesitan ${shortage.need}.`
      );
      return;
    }
    setBuilding(true);
    try {
      const { seq, year, number } = nextInvoiceNumber(db.invoices);
      const vf = verifactuActivo(db.salon);

      // VERI*FACTU: primero se registra la factura (devuelve el QR) para
      // que quede impreso en el PDF del ticket. Si falla, la factura se
      // emite igualmente y se puede reintentar desde Facturación.
      let record: VerifactuRecord | undefined;
      let vfError = "";
      if (vf) {
        try {
          const draft = {
            number,
            date: new Date().toISOString(),
            lines,
            total,
          };
          record = await verifactuCrearFactura(draft, vf, `fact-${appt.id}-${year}-${seq}`);
        } catch (e) {
          vfError = e instanceof Error ? e.message : String(e);
        }
      }

      const pdfBytes = await buildInvoicePdf(
        {
          number,
          date: new Date().toISOString(),
          lines,
          total,
        },
        client,
        db.salon,
        record
      );
      const inv = invoiceAppointment({
        appointmentId: appt.id,
        seq,
        year,
        number,
        lines,
        pdfBase64: bytesToBase64(pdfBytes),
        verifactu: record,
      });
      if (!inv) {
        setError("No se pudo facturar: la cita no existe o ya está facturada.");
        return;
      }
      if (vfError) {
        toast(
          `Factura ${inv.number} emitida, pero NO se registró en Verifactu: ${vfError}`, "err",
          { label: "Entendido", run: () => {} }
        );
      } else if (record) {
        toast(
          `Factura ${inv.number} emitida y registrada en Verifactu · ${eur.format(inv.total)}`, "ok",
          {
            label: "Descargar",
            run: () => {
              if (!downloadInvoicePdf(inv))
                toast("No se encontró el PDF de la factura", "err");
            },
          }
        );
      } else {
        toast(`Factura ${inv.number} emitida · ${eur.format(inv.total)}`, "ok", {
          label: "Descargar",
          run: () => {
            if (!downloadInvoicePdf(inv))
              toast("No se encontró el PDF de la factura", "err");
          },
        });
      }
      onInvoiced();
    } catch (e) {
      console.error(e);
      setError("Error al generar el PDF de la factura. Inténtalo de nuevo.");
    } finally {
      setBuilding(false);
    }
  }

  const verifactuOn = verifactuActivo(db.salon) != null;

  return (
    <Modal
      title="Facturar cita"
      subtitle={`${client?.name ?? "Cliente"} · ${appt.serviceName} · ${appt.date.split("-").reverse().join("/")}`}
      onClose={onClose}
      z={62}
      maxW="max-w-lg"
    >
      <div className="space-y-4">
        {/* Servicio realizado */}
        <div className="rounded-xl border border-line bg-mint/40 px-3.5 py-3">
          <div className="flex items-center gap-2.5">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: appt.color }}
            />
            <span className="text-sm font-bold text-ink min-w-0 truncate">
              {appt.serviceName}
            </span>
            <span className="ml-auto text-sm font-display font-bold text-pine num">
              {eur.format(appt.price)}
            </span>
          </div>
        </div>

        {/* Productos incluidos en el tratamiento */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-soft mb-1.5">
            Incluidos en el tratamiento
          </p>
          {included.length === 0 && excluded.size === 0 ? (
            <p className="text-xs text-faint px-1 py-1.5">
              Este tratamiento no tiene productos definidos. Puedes asignárselos
              en Ajustes → Tratamientos.
            </p>
          ) : (
            <div className="space-y-1.5">
              {included.map((it) => {
                const p = db.products.find((x) => x.id === it.productId);
                const lack = it.qty > (p?.stock ?? 0);
                return (
                  <div
                    key={it.productId}
                    className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 ${lack ? "border-danger/40 bg-dangersoft/50" : "border-line bg-card"}`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-mint text-moss flex items-center justify-center shrink-0">
                      <IcBox size={13} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-ink truncate">
                        {it.name}
                      </span>
                      <span
                        className={`block text-[11px] num ${lack ? "text-danger font-bold" : "text-faint"}`}
                      >
                        {it.qty} ud{it.qty === 1 ? "" : "s"} · stock {p?.stock ?? 0}
                        {lack && " · ¡insuficiente!"}
                      </span>
                    </span>
                    <span className="text-xs font-bold text-moss num shrink-0 rounded-full bg-mint px-2.5 py-1">
                      Incluido
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setExcluded((s) => new Set(s).add(it.productId))
                      }
                      className="p-1 rounded text-faint hover:text-danger hover:bg-dangersoft transition-colors shrink-0"
                      title="No usar este producto en esta factura: no se descontará del almacén ni aparecerá en el ticket"
                      aria-label={`Quitar ${it.name} de esta factura`}
                    >
                      <IcX size={13} />
                    </button>
                  </div>
                );
              })}
              {excluded.size > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-faint">
                    Quitados de esta factura:
                  </span>
                  {[...(service?.products ?? [])]
                    .filter((it) => excluded.has(it.productId))
                    .map((it) => {
                      const p = db.products.find((x) => x.id === it.productId);
                      if (!p) return null;
                      return (
                        <button
                          key={it.productId}
                          type="button"
                          onClick={() =>
                            setExcluded((s) => {
                              const n = new Set(s);
                              n.delete(it.productId);
                              return n;
                            })
                          }
                          className="inline-flex items-center gap-1 rounded-full border border-dashed border-linedark px-2 py-0.5 text-[10px] font-bold text-faint hover:text-ink hover:bg-mint transition-colors"
                          title="Volver a incluir en esta factura"
                        >
                          <IcPlus size={9} /> {p.name}
                        </button>
                      );
                    })}
                </div>
              )}
              {included.length > 0 && (
                <p className="text-[11px] text-faint px-1">
                  Descontarán del almacén automáticamente sin coste para el cliente.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Venta extra de productos */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-soft mb-1.5">
            Venta de productos al cliente
          </p>
          {extras.length > 0 && (
            <div className="space-y-1.5 mb-2">
              {extras.map((ex) => {
                const p = db.products.find((x) => x.id === ex.productId);
                if (!p) return null;
                const totalUse = stockUse.get(p.id) ?? 0;
                const lack = totalUse > p.stock;
                return (
                  <div
                    key={ex.productId}
                    className="flex items-center gap-2 rounded-lg border border-line bg-card px-3 py-2"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-ink truncate">
                        {p.name}
                      </span>
                      <span
                        className={`block text-[11px] num ${lack ? "text-danger font-bold" : "text-faint"}`}
                      >
                        {eur.format(p.price)} / ud · stock {p.stock}
                        {lack && " · ¡insuficiente!"}
                      </span>
                    </span>
                    <div className="flex items-center rounded-lg border border-linedark overflow-hidden shrink-0">
                      <button
                        type="button"
                        onClick={() => bumpExtra(p.id, -1)}
                        className="px-2 py-1.5 text-soft hover:bg-mint hover:text-ink transition-colors"
                        aria-label={`Quitar una unidad de ${p.name}`}
                      >
                        <IcMinus size={13} />
                      </button>
                      <span className="w-7 text-center text-sm font-bold num">
                        {ex.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => bumpExtra(p.id, 1)}
                        className={`px-2 py-1.5 transition-colors font-bold ${
                          lack
                            ? "text-danger hover:bg-dangersoft"
                            : "text-soft hover:bg-mint hover:text-ink"
                        }`}
                        aria-label={`Añadir una unidad de ${p.name}`}
                      >
                        <IcPlus size={13} />
                      </button>
                    </div>
                    <span className="w-16 text-right text-sm font-display font-bold text-pine num shrink-0">
                      {eur.format(p.price * ex.qty)}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setExtras((xs) =>
                          xs.filter((e) => e.productId !== p.id)
                        )
                      }
                      className="p-1 rounded text-faint hover:text-danger hover:bg-dangersoft transition-colors shrink-0"
                      aria-label={`Quitar ${p.name} de la venta`}
                    >
                      <IcX size={13} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          <select
            className={inputCls}
            value={pick}
            onChange={(e) => addExtra(e.target.value)}
          >
            <option value="">
              + Añadir producto a la venta…
            </option>
            {addable.map((p) => (
              <option key={p.id} value={p.id} disabled={p.stock <= 0}>
                {p.name}
                {p.brand ? ` · ${p.brand}` : ""} · {eur.format(p.price)} · stock{" "}
                {p.stock}
                {p.stock <= 0 ? " (agotado)" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Total */}
        <div className="flex items-center gap-3 rounded-xl bg-pine text-paper px-4 py-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-paper/70">
            Total a cobrar
          </span>
          <span className="ml-auto font-display font-extrabold text-2xl num">
            {eur.format(total)}
          </span>
        </div>

        {error && (
          <p className="flex items-start gap-2 text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade">
            <IcAlert size={14} className="shrink-0 mt-0.5" />
            {error}
          </p>
        )}

        {/* Aviso proactivo: por qué está bloqueada la emisión */}
        {shortage && !building && (
          <p className="flex items-start gap-2 text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade">
            <IcAlert size={14} className="shrink-0 mt-0.5" />
            <span>
              <b>No se puede emitir todavía:</b> stock insuficiente de «
              {shortage.name}» (hay {shortage.stock} ud{shortage.stock === 1 ? "" : "s"}
              {" "}y la factura necesita {shortage.need}). Quita el producto de esta
              factura con la × o repón stock en Almacén.
            </span>
          </p>
        )}

        <div className="flex gap-2 pt-1">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={confirmInvoice}
            disabled={building || !!shortage}
            title={
              shortage
                ? `Stock insuficiente de «${shortage.name}»`
                : "Emite el ticket, descuenta el almacén y marca la cita como completada"
            }
            className="flex-[1.4] rounded-lg bg-moss text-paper px-4 py-2.5 text-sm font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm disabled:opacity-50 disabled:pointer-events-none inline-flex items-center justify-center gap-2"
          >
            {building
              ? verifactuOn
                ? "Registrando en Verifactu…"
                : "Generando PDF…"
              : (
                <>
                  <IcCheck size={16} /> Emitir factura
                </>
              )}
          </button>
        </div>
        <p className="text-[11px] text-faint text-center -mt-1">
          Al emitir la factura la cita pasará a <b>Completada</b> y se descontarán
          los productos del almacén.
          {verifactuOn && " La factura se registrará automáticamente en Verifactu (VERI*FACTU)."}
        </p>
      </div>
    </Modal>
  );
}
