"use client";

/**
 * Vista de Facturación: listado de todas las facturas emitidas.
 *
 * - Resumen del periodo (total, nº de facturas, ticket medio).
 * - Filtros rápidos (Hoy / Este mes / Todo) y buscador por nº, cliente
 *   o concepto.
 * - Cada factura se muestra como ticket simplificado; al pulsarla se
 *   abre el detalle y permite volver a descargar el PDF.
 */

import { useMemo, useState } from "react";
import type { Invoice } from "../lib/types";
import { norm } from "../lib/date-utils";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import {
  buildInvoicePdf,
  downloadInvoicePdf,
} from "../lib/invoice-pdf";
import {
  verifactuActivo,
  verifactuCrearFactura,
  verifactuEstadoLabel,
  verifactuEstadoRegistro,
  verifactuQrDataUrl,
} from "../lib/verifactu";
import { bytesToBase64 } from "../lib/consent-pdf";
import Modal from "../components/aura-modal";
import {
  IcCheck,
  IcEuro,
  IcFileText,
  IcSearch,
  IcSparkle,
  IcX,
} from "../components/icons";

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

type Range = "hoy" | "mes" | "todo";

const RANGES: { id: Range; label: string }[] = [
  { id: "hoy", label: "Hoy" },
  { id: "mes", label: "Este mes" },
  { id: "todo", label: "Todo" },
];

function fmtDT(iso: string): string {
  const d = new Date(iso);
  return `${d.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" })} · ${d.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}`;
}

/** Resumen de conceptos de la factura para la tarjeta. */
function linesSummary(inv: Invoice): string {
  const serv = inv.lines.filter((l) => l.kind === "servicio");
  const sold = inv.lines.filter((l) => l.kind === "producto" && !l.included);
  const incl = inv.lines.filter((l) => l.included);
  const bits: string[] = [];
  if (serv.length) bits.push(serv.map((l) => l.name).join(" + "));
  if (sold.length) bits.push(`${sold.reduce((s, l) => s + l.qty, 0)} producto${sold.reduce((s, l) => s + l.qty, 0) === 1 ? "" : "s"} vendido${sold.reduce((s, l) => s + l.qty, 0) === 1 ? "" : "s"}`);
  if (incl.length) bits.push(`${incl.reduce((s, l) => s + l.qty, 0)} incluido${incl.reduce((s, l) => s + l.qty, 0) === 1 ? "" : "s"}`);
  return bits.join(" · ") || "Sin conceptos";
}

/** Etiqueta y color del estado VERI*FACTU de una factura. */
function vfBadge(inv: Invoice): { label: string; fg: string; bg: string } | null {
  if (inv.verifactu && !inv.verifactu.error) {
    const { label, ok } = verifactuEstadoLabel(inv.verifactu.estado);
    return ok
      ? { label: `Verifactu · ${label}`, fg: "#5a8a4a", bg: "#e1eed8" }
      : { label: `Verifactu · ${label}`, fg: "#a16207", bg: "#f7ecd2" };
  }
  if (inv.verifactu?.error)
    return { label: "Verifactu · Error", fg: "#b3364d", bg: "#f8e1e6" };
  return null;
}

export default function InvoicesView() {
  const { db, clientById } = useStore();
  const { toast } = useUI();
  const [range, setRange] = useState<Range>("mes");
  const [q, setQ] = useState("");
  const [detail, setDetail] = useState<Invoice | null>(null);

  const invoices = useMemo(() => {
    const now = new Date();
    const from =
      range === "hoy"
        ? new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
        : range === "mes"
          ? new Date(now.getFullYear(), now.getMonth(), 1).getTime()
          : 0;
    return db.invoices
      .filter((i) => new Date(i.date).getTime() >= from)
      .filter((i) => {
        if (!q.trim()) return true;
        const c = clientById(i.clientId);
        const hay = norm(`${i.number} ${c?.name ?? ""} ${i.lines.map((l) => l.name).join(" ")}`);
        return hay.includes(norm(q));
      })
      .sort((a, b) => b.date.localeCompare(a.date) || b.seq - a.seq);
  }, [db.invoices, range, q, clientById]);

  const total = invoices.reduce((s, i) => s + i.total, 0);
  const avg = invoices.length ? total / invoices.length : 0;

  return (
    <div className="space-y-4">
      {/* cabecera */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display font-extrabold text-2xl sm:text-[28px] leading-tight text-ink">
            Facturación
          </h1>
          <p className="text-sm text-soft mt-0.5">
            Facturas simplificadas emitidas por el salón
          </p>
        </div>
      </div>

      {/* resumen del periodo */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="rounded-xl border border-line bg-card p-3.5 shadow-sm anim-rise">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-faint">Facturado</p>
          <p className="font-display font-extrabold text-xl sm:text-2xl num text-pine mt-1 leading-none">
            {eur.format(total)}
          </p>
        </div>
        <div className="rounded-xl border border-line bg-card p-3.5 shadow-sm anim-rise" style={{ animationDelay: "50ms" }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-faint">Facturas</p>
          <p className="font-display font-extrabold text-xl sm:text-2xl num text-ink mt-1 leading-none">
            {invoices.length}
          </p>
        </div>
        <div className="rounded-xl border border-line bg-card p-3.5 shadow-sm anim-rise" style={{ animationDelay: "100ms" }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-faint">Ticket medio</p>
          <p className="font-display font-extrabold text-xl sm:text-2xl num text-moss mt-1 leading-none">
            {eur.format(avg)}
          </p>
        </div>
      </div>

      {/* filtros */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-lg border border-line bg-card p-0.5 shadow-sm">
          {RANGES.map((r) => (
            <button
              key={r.id}
              onClick={() => setRange(r.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                range === r.id ? "bg-pine text-paper shadow" : "text-soft hover:text-ink"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
        <div className="relative flex-1 min-w-[180px] max-w-xs">
          <IcSearch size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-faint" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar nº, cliente o concepto…"
            className="w-full rounded-lg border border-linedark bg-white/70 pl-8 pr-3 py-2 text-sm text-ink placeholder:text-faint outline-none transition-shadow focus:border-moss focus:ring-2 focus:ring-moss/25"
          />
        </div>
      </div>

      {/* listado de tickets */}
      {invoices.length === 0 ? (
        <div className="rounded-xl border border-dashed border-linedark bg-card/60 py-14 text-center anim-rise">
          <span className="inline-flex w-12 h-12 rounded-full bg-mint text-moss items-center justify-center mb-2">
            <IcEuro size={22} />
          </span>
          <p className="font-display font-bold text-lg text-ink">
            {db.invoices.length === 0 ? "Todavía no hay facturas" : "Sin resultados"}
          </p>
          <p className="text-sm text-soft max-w-xs mx-auto">
            {db.invoices.length === 0
              ? "Cuando factures una cita desde la Agenda aparecerá aquí su ticket."
              : "Prueba con otro periodo o busca por otro término."}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {invoices.map((inv, i) => {
            const c = clientById(inv.clientId);
            const badge = vfBadge(inv);
            return (
              <div
                key={inv.id}
                className="anim-rise flex items-center gap-3 rounded-xl border border-line bg-card p-3 shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
              >
                <span className="w-9 h-9 rounded-lg bg-mint text-moss flex items-center justify-center shrink-0">
                  <IcEuro size={16} />
                </span>
                <button className="min-w-0 flex-1 text-left" onClick={() => setDetail(inv)}>
                  <p className="text-sm font-bold text-ink truncate leading-tight">
                    <span className="num text-pine">{inv.number}</span>
                    <span className="text-faint font-medium num"> · {fmtDT(inv.date)}</span>
                  </p>
                  <p className="text-xs text-soft truncate">
                    {c?.name ?? "Cliente eliminado"} — {linesSummary(inv)}
                  </p>
                  {badge && (
                    <span
                      className="inline-block mt-1 rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{ color: badge.fg, background: badge.bg }}
                    >
                      {badge.label}
                    </span>
                  )}
                </button>
                <span className="font-display font-bold text-base num text-ink shrink-0">
                  {eur.format(inv.total)}
                </span>
                <button
                  title="Descargar PDF del ticket"
                  aria-label={`Descargar PDF de ${inv.number}`}
                  onClick={() => {
                    if (!downloadInvoicePdf(inv))
                      toast("No se encontró el PDF de la factura", "err");
                  }}
                  className="p-2 rounded-lg text-soft hover:text-pine hover:bg-mint transition-colors shrink-0"
                >
                  <IcFileText size={16} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* detalle tipo ticket */}
      {detail && <TicketDetail invoice={detail} onClose={() => setDetail(null)} />}
    </div>
  );
}

/* ---------- detalle de factura (estilo ticket) ---------- */
function TicketDetail({ invoice: initial, onClose }: { invoice: Invoice; onClose: () => void }) {
  const { db, clientById, invoiceById, attachVerifactu } = useStore();
  const { toast } = useUI();
  // Factura viva del store: los registros Verifactu llegan tras un reenvío
  // y aquí se muestran sin cerrar el modal.
  const invoice = invoiceById(initial.id) ?? initial;
  const c = clientById(invoice.clientId);
  const salon = db.salon;
  const vfConfig = verifactuActivo(salon);
  const [busy, setBusy] = useState<"" | "registrar" | "estado">("");

  const servTotal = invoice.lines
    .filter((l) => l.kind === "servicio")
    .reduce((s, l) => s + l.qty * l.unitPrice, 0);
  const prodTotal = Math.max(0, invoice.total - servTotal);
  const hasIncluded = invoice.lines.some((l) => l.included);
  const vf = invoice.verifactu;
  const qrSrc = vf ? verifactuQrDataUrl(vf) : null;

  /** Registra (o reintenta) la factura en Verifactu y regenera el PDF
   *  con el QR. No toca importes ni conceptos: solo añade el registro. */
  async function registrarEnVerifactu() {
    if (!vfConfig || busy) return;
    setBusy("registrar");
    try {
      const record = await verifactuCrearFactura(
        { number: invoice.number, date: invoice.date, lines: invoice.lines, total: invoice.total },
        vfConfig,
        invoice.id
      );
      const pdf = await buildInvoicePdf(invoice, c, salon, record);
      attachVerifactu(invoice.id, record, bytesToBase64(pdf));
      toast(`Factura ${invoice.number} registrada en Verifactu`, "ok");
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      attachVerifactu(invoice.id, {
        uuid: "",
        estado: "Error",
        url: "",
        qr: "",
        huella: "",
        enviadoEn: new Date().toISOString(),
        error: msg,
      });
      toast(msg, "err");
    } finally {
      setBusy("");
    }
  }

  /** Consulta en verifacti el estado actual del registro (Pendiente → Correcto…). */
  async function consultarEstado() {
    if (!vfConfig || !vf?.uuid || busy) return;
    setBusy("estado");
    try {
      const st = await verifactuEstadoRegistro(vfConfig.apiKey, vf.uuid);
      attachVerifactu(invoice.id, { ...vf, estado: st.estado || vf.estado });
      toast(`Estado Verifactu: ${verifactuEstadoLabel(st.estado || "").label}`, "info");
    } catch (e) {
      toast(e instanceof Error ? e.message : String(e), "err");
    } finally {
      setBusy("");
    }
  }

  return (
    <Modal title={`Factura ${invoice.number}`} subtitle="Factura simplificada · ticket" onClose={onClose} maxW="max-w-md">
      <div className="space-y-4">
        {/* el ticket */}
        <div className="rounded-xl border border-dashed border-linedark bg-paper px-4 py-4 font-mono text-[12px] leading-relaxed text-ink">
          {/* salón */}
          <p className="text-center font-bold text-[13px] tracking-tight text-pine">{salon.name}</p>
          {(salon.nif || salon.fiscalName) && (
            <p className="text-center text-[10px] text-soft truncate">
              {[salon.fiscalName !== salon.name ? salon.fiscalName : "", salon.nif ? `NIF/CIF ${salon.nif}` : ""].filter(Boolean).join(" · ")}
            </p>
          )}
          {(salon.street || salon.city) && (
            <p className="text-center text-[10px] text-soft truncate">
              {[salon.street, [salon.zip, salon.city].filter(Boolean).join(" ")].filter(Boolean).join(", ")}
            </p>
          )}
          {(salon.phone || salon.email) && (
            <p className="text-center text-[10px] text-soft truncate">
              {[salon.phone, salon.email].filter(Boolean).join(" · ")}
            </p>
          )}

          <div className="border-t-2 border-b-2 border-dashed border-linedark my-2.5 py-1 text-center font-bold text-[10px] tracking-[0.15em]">
            FACTURA SIMPLIFICADA
          </div>

          <div className="flex justify-between gap-2">
            <span className="font-bold num text-pine">{invoice.number}</span>
            <span className="text-[10px] num text-soft">{fmtDT(invoice.date)}</span>
          </div>
          {c && <p className="font-bold truncate mt-1">{c.name}</p>}
          {c?.phone && <p className="text-[10px] text-soft num">{c.phone}</p>}

          <div className="border-t border-dashed border-line my-2" />

          {/* líneas */}
          <div className="space-y-1.5">
            {invoice.lines.map((l, i) => (
              <div key={i}>
                <p className={`truncate ${l.kind === "servicio" ? "font-bold" : ""}`}>{l.name}</p>
                <div className="flex justify-between gap-2 text-[11px]">
                  <span className={l.included ? "text-soft" : "text-soft"}>
                    {l.included ? `${l.qty} ud${l.qty === 1 ? "" : "s"}` : `${l.qty} × ${eur.format(l.unitPrice)}`}
                  </span>
                  <span className={`font-bold num ${l.included ? "text-moss" : ""}`}>
                    {l.included ? "Incluido" : eur.format(l.qty * l.unitPrice)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-line my-2" />

          <div className="flex justify-between items-end">
            <span className="font-bold">TOTAL</span>
            <span className="font-bold text-[16px] num text-pine">{eur.format(invoice.total)}</span>
          </div>
          <p className="text-[10px] text-soft text-right">
            Servicios {eur.format(servTotal)} · Productos {eur.format(prodTotal)}
          </p>
          {hasIncluded && (
            <p className="text-[9px] text-faint mt-1.5 leading-snug">
              Los productos «Incluido» forman parte del tratamiento y no se cobran.
            </p>
          )}

          <div className="border-t border-dashed border-line my-2" />
          <p className="text-center text-[10px] font-bold text-soft">Gracias por su visita</p>
          <p className="text-center text-[9px] text-faint">
            Documento generado electrónicamente · {invoice.number}
          </p>
        </div>

        {/* bloque VERI*FACTU */}
        {vf ? (
          <div className="rounded-xl border border-line bg-card p-3.5 anim-fade">
            <div className="flex items-start gap-3.5">
              {qrSrc ? (
                <img
                  src={qrSrc}
                  alt={`Código QR de verificación de la factura ${invoice.number}`}
                  className="w-[88px] h-[88px] rounded-lg border border-line bg-white p-1.5 shrink-0"
                />
              ) : (
                <span className="w-[88px] h-[88px] rounded-lg border border-dashed border-linedark bg-mint/30 text-moss flex items-center justify-center text-center text-[10px] font-bold leading-tight shrink-0">
                  Sin QR disponible
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
                  <IcCheck size={14} className="text-moss" />
                  VERI*FACTU
                </p>
                <p className="text-[11px] text-soft mt-1">
                  Estado: <b>{verifactuEstadoLabel(vf.estado).label}</b>
                  <span className="num"> · enviado {new Date(vf.enviadoEn).toLocaleDateString("es-ES")}</span>
                </p>
                {vf.tipoFactura && (
                  <p className="text-[11px] text-faint num">
                    Tipo {vf.tipoFactura} · huella <span className="truncate">{vf.huella.slice(0, 18)}…</span>
                  </p>
                )}
                {vf.url && (
                  <a
                    href={vf.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-1.5 text-[11px] font-bold text-pine underline underline-offset-2 hover:text-pine2"
                  >
                    Verificar en la AEAT ↗
                  </a>
                )}
                {vfConfig && vf.uuid && (
                  <button
                    type="button"
                    onClick={consultarEstado}
                    disabled={busy !== ""}
                    className="mt-2 rounded-lg border border-linedark px-2.5 py-1 text-[11px] font-semibold text-soft hover:bg-mint hover:text-ink transition-colors disabled:opacity-50"
                  >
                    {busy === "estado" ? "Consultando…" : "Consultar estado"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-linedark bg-mint/30 p-3.5 anim-fade">
            <p className="text-[12px] text-soft">
              Esta factura no está registrada en Verifactu (VERI*FACTU).
            </p>
            {vfConfig ? (
              <button
                type="button"
                onClick={registrarEnVerifactu}
                disabled={busy !== ""}
                className="mt-2 rounded-lg bg-moss text-paper px-3 py-1.5 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {busy === "registrar" ? "Registrando…" : "Registrar en Verifactu"}
              </button>
            ) : (
              <p className="text-[11px] text-faint mt-1">
                Activa la facturación verificable en Ajustes → Facturación Verifactu.
              </p>
            )}
          </div>
        )}

        <p className="flex items-center justify-center gap-1.5 text-[11px] text-faint">
          <IcSparkle size={12} className="text-moss" />
          Cita vinculada · PDF guardado con la factura
        </p>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <IcX size={15} /> Cerrar
          </button>
          <button
            onClick={() => {
              if (!downloadInvoicePdf(invoice))
                toast("No se encontró el PDF de la factura", "err");
            }}
            className="flex-1 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm inline-flex items-center justify-center gap-1.5"
          >
            <IcFileText size={15} /> Descargar PDF
          </button>
        </div>
      </div>
    </Modal>
  );
}
