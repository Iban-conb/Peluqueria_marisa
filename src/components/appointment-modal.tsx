"use client";

import { useMemo, useState } from "react";
import type { Appointment, AppointmentStatus, Client } from "../lib/types";
import { MAX_SIMULTANEOUS_APPTS, STATUS_META, STATUS_ORDER } from "../lib/types";
import { isDayOpen, minutesToLabel, norm, rangeLabel, todayKey } from "../lib/date-utils";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import Modal, { Field, inputCls } from "./aura-modal";
import InvoiceModal from "./invoice-modal";
import { downloadInvoicePdf } from "../lib/invoice-pdf";
import { IcBox, IcChevronL, IcEuro, IcFileText, IcPhone, IcTrash, IcUserPlus, IcX } from "./icons";

export interface ApptPreset {
  appt?: Appointment;
  clientId?: string;
  date?: string;
  start?: number;
}

/** Pico de citas simultáneas dentro de la franja [s, e) considerando `list`.
 *  Se evalúan los instantes de corte (inicios/fines solapados) para detectar
 *  cuántas citas coincidirían a la vez con la nueva. */
function peakConcurrency(list: Appointment[], s: number, e: number): number {
  const pts = new Set<number>([s]);
  for (const a of list) {
    if (a.start < e && s < a.start + a.duration) {
      pts.add(Math.max(a.start, s));
      pts.add(Math.min(a.start + a.duration, e));
    }
  }
  let peak = 0;
  for (const p of pts) {
    peak = Math.max(
      peak,
      list.filter((a) => a.start <= p && p < a.start + a.duration).length
    );
  }
  return peak;
}

function ClientPicker({
  clients,
  value,
  onChange,
  onNew,
}: {
  clients: Client[];
  value: string;
  onChange: (id: string) => void;
  onNew: () => void;
}) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  /** true cuando el usuario pidió explícitamente cambiar el cliente elegido. */
  const [changing, setChanging] = useState(false);
  const sel = clients.find((c) => c.id === value);
  const filtered = clients.filter((c) => norm(`${c.name} ${c.phone} ${c.city}`).includes(norm(q)));

  /* Ficha limpia: con cliente ya elegido mostramos una tarjeta estática;
     el desplegable solo aparece si el usuario pulsa «Cambiar». */
  if (sel && !changing) {
    const phone = sel.phone?.trim();
    return (
      <div className="flex items-center gap-3 rounded-lg border border-moss/25 bg-mint/50 pl-2.5 pr-2 py-2">
        <span className="w-9 h-9 rounded-full bg-moss/15 text-pine flex items-center justify-center font-display font-bold text-sm shrink-0">
          {sel.name.trim().charAt(0).toUpperCase() || "·"}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-ink truncate leading-tight">{sel.name}</p>
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-soft num hover:text-pine transition-colors inline-flex items-center gap-1"
            >
              <IcPhone size={11} /> {phone}
            </a>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            setChanging(true);
            setQ("");
          }}
          className="rounded-lg border border-linedark bg-card px-2.5 py-1.5 text-xs font-bold text-soft hover:text-ink hover:bg-mint transition-colors shrink-0"
        >
          Cambiar
        </button>
        <button
          type="button"
          onClick={() => {
            onChange("");
            setChanging(false);
          }}
          className="p-1.5 rounded-lg text-faint hover:text-danger hover:bg-dangersoft transition-colors shrink-0"
          title="Quitar selección"
          aria-label="Quitar cliente seleccionado"
        >
          <IcX size={14} />
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {sel && (
        <button
          type="button"
          onClick={() => {
            onChange("");
            setChanging(false);
          }}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-faint hover:text-ink transition-colors"
          title="Quitar selección"
        >
          <IcChevronL size={14} />
        </button>
      )}
      <input
        className={`${inputCls} ${sel ? "pl-8" : ""}`}
        placeholder={sel ? sel.name : "Buscar por nombre o teléfono…"}
        value={open ? q : sel?.name ?? ""}
        onChange={(e) => setQ(e.target.value)}
        onFocus={() => {
          setOpen(true);
          setQ("");
        }}
        onBlur={() =>
          setTimeout(() => {
            setOpen(false);
            setChanging(false);
          }, 140)
        }
      />
      {open && (
        <div className="absolute z-10 mt-1.5 w-full max-h-56 overflow-y-auto rounded-lg border border-linedark bg-card shadow-xl anim-fade">
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              onNew();
            }}
            className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-moss hover:bg-mint/70 border-b border-line transition-colors"
          >
            <IcUserPlus size={16} /> Nuevo cliente…
          </button>
          {filtered.length === 0 && <p className="px-3 py-3 text-sm text-faint">Sin resultados para «{q}»</p>}
          {filtered.map((c) => (
            <button
              key={c.id}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                onChange(c.id);
                setOpen(false);
                setChanging(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-mint/70 transition-colors flex items-center justify-between gap-2 ${
                c.id === value ? "bg-mint" : ""
              }`}
            >
              <span className="font-medium truncate">{c.name}</span>
              <span className="text-xs text-faint num shrink-0">{c.phone}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AppointmentModal({ preset, onClose }: { preset: ApptPreset; onClose: () => void }) {
  const { db, addAppointment, updateAppointment, deleteAppointment, clientById } = useStore();
  const { toast, confirm, openClient } = useUI();
  const editing = preset.appt;

  const openMin = db.settings.openHour * 60;
  const closeMin = db.settings.closeHour * 60;
  const step = db.settings.step;

  const [clientId, setClientId] = useState(editing?.clientId ?? preset.clientId ?? "");
  const [serviceId, setServiceId] = useState(() =>
    editing
      ? db.services.find((s) => s.name === editing.serviceName)?.id ?? db.services[0]?.id ?? ""
      : db.services[0]?.id ?? ""
  );
  const [date, setDate] = useState(editing?.date ?? preset.date ?? todayKey());
  const [start, setStart] = useState(editing?.start ?? preset.start ?? openMin);
  const [duration, setDuration] = useState(editing?.duration ?? db.services[0]?.duration ?? 45);
  const [status, setStatus] = useState<AppointmentStatus>(editing?.status ?? "confirmada");
  const [notes, setNotes] = useState(editing?.notes ?? "");
  const [error, setError] = useState("");
  const [invoicing, setInvoicing] = useState(false);

  const service = db.services.find((s) => s.id === serviceId);
  const invoice = editing?.invoiceId ? db.invoices.find((i) => i.id === editing.invoiceId) : undefined;

  /* Aviso en vivo de simultaneidad en la franja elegida (máx. 2 a la vez). */
  const simult = useMemo(() => {
    const others = db.appointments.filter(
      (a) =>
        a.id !== editing?.id &&
        a.date === date &&
        a.status !== "cancelada" &&
        start < a.start + a.duration &&
        a.start < start + duration
    );
    const peak = peakConcurrency(others, start, start + duration);
    return { others, peak, full: peak >= MAX_SIMULTANEOUS_APPTS };
  }, [db.appointments, date, start, duration, editing?.id]);
  const simultNames = simult.others
    .slice(0, 2)
    .map(
      (a) =>
        `${clientById(a.clientId)?.name.split(" ")[0] ?? "cliente"} (${rangeLabel(a.start, a.duration)})`
    )
    .join(" y ");

  const slots = useMemo(() => {
    const out: number[] = [];
    for (let m = openMin; m < closeMin; m += step) out.push(m);
    return out;
  }, [openMin, closeMin, step]);

  function changeService(id: string) {
    setServiceId(id);
    const s = db.services.find((x) => x.id === id);
    if (s) setDuration(s.duration);
  }

  function save() {
    if (!clientId) {
      setError("Selecciona un cliente para la cita.");
      return;
    }
    if (!service) {
      setError("Selecciona un servicio.");
      return;
    }
    if (
      !isDayOpen(date, db.settings.openDays, db.settings.closedDates)
    ) {
      setError(
        "El salón está cerrado ese día (festivo o día no laboral). Elige otra fecha."
      );
      return;
    }
    const others = db.appointments.filter(
      (a) =>
        a.id !== editing?.id &&
        a.date === date &&
        a.status !== "cancelada" &&
        start < a.start + a.duration &&
        a.start < start + duration
    );
    const peak = peakConcurrency(others, start, start + duration);
    if (peak >= MAX_SIMULTANEOUS_APPTS) {
      setError(
        `La franja de las ${minutesToLabel(start)} ya tiene ${MAX_SIMULTANEOUS_APPTS} citas a la vez${simultNames ? ` (${simultNames})` : ""}. Es el máximo simultáneo: elige otra hora.`
      );
      return;
    }
    const data = {
      clientId,
      date,
      start,
      duration,
      status,
      notes: notes.trim(),
      serviceName: service.name,
      serviceId: service.id,
      price: service.price,
      color: service.color,
    };
    if (editing) {
      updateAppointment(editing.id, data);
      toast("Cita actualizada");
    } else {
      addAppointment(data);
      const who = clientById(clientId)?.name.split(" ")[0] ?? "";
      toast(`Cita creada · ${who} a las ${minutesToLabel(start)}`);
    }
    onClose();
  }

  async function remove() {
    const who = clientById(editing!.clientId)?.name ?? "este cliente";
    const ok = await confirm({
      title: "Eliminar cita",
      message: `¿Seguro que quieres eliminar la cita de ${who} del día ${date}? Esta acción no se puede deshacer.`,
      confirmLabel: "Eliminar",
      danger: true,
    });
    if (!ok) return;
    deleteAppointment(editing!.id);
    toast("Cita eliminada", "info");
    onClose();
  }

  return (
    <Modal
      title={editing ? "Editar cita" : "Nueva cita"}
      subtitle={editing ? `Creada el ${editing.createdAt.slice(0, 10)}` : "Reserva un hueco en la agenda"}
      onClose={onClose}
      z={50}
    >
      <div className="space-y-4">
        <Field label="Cliente *">
          <ClientPicker
            clients={db.clients}
            value={clientId}
            onChange={(id) => {
              setClientId(id);
              setError("");
            }}
            onNew={() =>
              openClient(null, (id) => {
                setClientId(id);
                setError("");
              })
            }
          />
        </Field>

        <Field label="Servicio">
          <select className={inputCls} value={serviceId} onChange={(e) => changeService(e.target.value)}>
            {db.services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} · {s.duration} min · {s.price} €
              </option>
            ))}
          </select>
        </Field>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Field
            label="Fecha"
            hint={
              isDayOpen(date, db.settings.openDays, db.settings.closedDates)
                ? undefined
                : "⚠ El salón está cerrado ese día"
            }
          >
            <input
              type="date"
              className={`${inputCls} ${
                !isDayOpen(date, db.settings.openDays, db.settings.closedDates)
                  ? "border-danger ring-2 ring-danger/20"
                  : ""
              }`}
              value={date}
              onChange={(e) => e.target.value && setDate(e.target.value)}
            />
          </Field>
          <Field label="Hora">
            <select className={inputCls} value={start} onChange={(e) => setStart(Number(e.target.value))}>
              {slots.map((m) => (
                <option key={m} value={m}>
                  {minutesToLabel(m)}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Duración" hint={`Termina a las ${minutesToLabel(start + duration)}`}>
            <div className="flex items-center rounded-lg border border-linedark bg-white/70 overflow-hidden">
              <button
                type="button"
                onClick={() => setDuration((d) => Math.max(15, d - 15))}
                className="px-3 py-2 text-soft hover:bg-mint hover:text-ink transition-colors font-bold"
                aria-label="Restar 15 minutos"
              >
                −
              </button>
              <span className="flex-1 text-center text-sm font-semibold num">{duration} min</span>
              <button
                type="button"
                onClick={() => setDuration((d) => Math.min(360, d + 15))}
                className="px-3 py-2 text-soft hover:bg-mint hover:text-ink transition-colors font-bold"
                aria-label="Sumar 15 minutos"
              >
                +
              </button>
            </div>
          </Field>
        </div>

        {simult.others.length > 0 && (
          <p
            className={`text-[11px] rounded-lg px-3 py-2 border anim-fade ${
              simult.full
                ? "border-danger/25 bg-dangersoft text-danger"
                : "border-warnfg/25 bg-warnsoft text-warnfg"
            }`}
          >
            {simult.full
              ? `Franja completa: ya hay ${MAX_SIMULTANEOUS_APPTS} citas a la vez (${simultNames}). Elige otra hora para esta cita.`
              : `Cita simultánea: se reservará junto a ${simultNames}. Máximo ${MAX_SIMULTANEOUS_APPTS} citas a la vez por franja.`}
          </p>
        )}

        <Field label="Estado">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {STATUS_ORDER.map((s) => {
              const meta = STATUS_META[s];
              const active = status === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStatus(s)}
                  className="rounded-lg px-2 py-2 text-xs font-semibold border transition-all active:scale-[0.97]"
                  style={
                    active
                      ? { background: meta.bg, color: meta.fg, borderColor: meta.fg, boxShadow: "0 1px 0 rgba(0,0,0,0.04)" }
                      : { background: "transparent", color: "#5f6d65", borderColor: "#c6cfc0" }
                  }
                >
                  {meta.label}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Notas">
          <input
            className={inputCls}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="p. ej. mechas tonos caramelo, alérgica a amoniaco…"
          />
        </Field>

        {service && (
          <div className="flex items-center gap-2.5 rounded-lg bg-mint/60 border border-line px-3 py-2.5 text-sm">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: service.color }} />
            <span className="font-medium">{service.name}</span>
            <span className="ml-auto num font-display font-bold text-pine">{service.price} €</span>
          </div>
        )}

        {service && service.products && service.products.length > 0 && (
          <div className="rounded-lg border border-line bg-card px-3 py-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-faint mb-1">
              Productos que consume el tratamiento
            </p>
            <ul className="space-y-0.5">
              {service.products.map((it) => {
                const p = db.products.find((x) => x.id === it.productId);
                if (!p) return null;
                return (
                  <li key={it.productId} className="text-xs text-soft flex items-center gap-1.5">
                    <IcBox size={11} className="text-moss shrink-0" />
                    <span className="truncate">{p.name}</span>
                    <span className="num text-faint shrink-0">× {it.qty}</span>
                  </li>
                );
              })}
            </ul>
            <p className="text-[10px] text-faint mt-1">
              Se descontarán del almacén al facturar la cita.
            </p>
          </div>
        )}

        {error && (
          <p className="text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade">
            {error}
          </p>
        )}

        {/* Factura ya emitida */}
        {invoice && (
          <div className="rounded-lg border border-moss/30 bg-mint/60 px-3.5 py-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-moss text-paper flex items-center justify-center shrink-0">
                <IcEuro size={15} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-ink leading-tight">
                  Facturada · {invoice.number}
                </p>
                <p className="text-xs text-soft num">
                  {invoice.total.toFixed(2)} € · {invoice.date.slice(0, 10).split("-").reverse().join("/")}
                </p>
              </div>
              <button
                onClick={() => {
                  if (!downloadInvoicePdf(invoice))
                    toast("No se encontró el PDF de la factura", "err");
                }}
                className="inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm shrink-0"
              >
                <IcFileText size={14} /> PDF
              </button>
            </div>
          </div>
        )}

        <div className="flex gap-2 pt-1">
          {editing && (
            <button
              onClick={remove}
              className="rounded-lg border border-danger/30 text-danger px-3 py-2.5 text-sm font-semibold hover:bg-dangersoft transition-colors"
              title="Eliminar cita"
            >
              <IcTrash size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors"
          >
            Cancelar
          </button>
          {editing && !invoice && status !== "cancelada" ? (
            <button
              onClick={() => setInvoicing(true)}
              className="flex-1 rounded-lg bg-moss text-paper px-4 py-2.5 text-sm font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm inline-flex items-center justify-center gap-1.5"
            >
              <IcEuro size={15} /> Facturar
            </button>
          ) : (
            <button
              onClick={save}
              className="flex-1 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm"
            >
              {editing ? "Guardar cambios" : "Crear cita"}
            </button>
          )}
        </div>

        {editing && !invoice && status !== "cancelada" && (
          <button
            onClick={save}
            className="w-full rounded-lg border border-linedark px-4 py-2 text-xs font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors"
          >
            Guardar cambios sin facturar
          </button>
        )}
      </div>

      {invoicing && editing && (
        <InvoiceModal
          appt={editing}
          onClose={() => setInvoicing(false)}
          onInvoiced={() => {
            setInvoicing(false);
            onClose();
          }}
        />
      )}
    </Modal>
  );
}
