"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Appointment } from "../lib/types";
import { STATUS_META } from "../lib/types";
import {
  addDaysKey,
  capitalize,
  fmtDayNum,
  fmtLong,
  fmtShortDate,
  fmtWeekday,
  inLabel,
  isDayOpen,
  minutesToLabel,
  nowMinutes,
  startOfWeekKey,
  todayKey,
} from "../lib/date-utils";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import { Avatar } from "./clients-view";
import {
  IcBan,
  IcCalendar,
  IcCheck,
  IcChevronL,
  IcChevronR,
  IcClock,
  IcEuro,
  IcGrid,
  IcList,
  IcPencil,
  IcPlus,
  IcRotate,
  IcSparkle,
  IcTrash,
  IcUsers,
} from "../components/icons";
import ApptCard, { densityForHeight } from "../components/appt-card";

// Altura en píxeles de una hora en la línea de tiempo. Subida de 64 a 80
// para que las citas de 30 min tengan sitio real a dos líneas con el chip
// de hora + duración, sin comprimir las citas cortas.
const PXH = 80;

const eur0 = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/* ---------- disposición de citas solapadas en columnas ---------- */
function layoutItems(items: Appointment[]) {
  const sorted = [...items].sort((x, y) => x.start - y.start || y.duration - x.duration);
  const clusters: Appointment[][] = [];
  let cur: Appointment[] = [];
  let curEnd = -1;
  for (const a of sorted) {
    if (cur.length && a.start >= curEnd) {
      clusters.push(cur);
      cur = [];
      curEnd = -1;
    }
    cur.push(a);
    curEnd = Math.max(curEnd, a.start + a.duration);
  }
  if (cur.length) clusters.push(cur);

  const out: { a: Appointment; col: number; cols: number }[] = [];
  for (const cl of clusters) {
    const colEnds: number[] = [];
    const placed = cl.map((a) => {
      let col = colEnds.findIndex((end) => end <= a.start);
      if (col === -1) {
        col = colEnds.length;
        colEnds.push(a.start + a.duration);
      } else {
        colEnds[col] = a.start + a.duration;
      }
      return { a, col, cols: 0 };
    });
    placed.forEach((p) => (p.cols = colEnds.length));
    out.push(...placed);
  }
  return out;
}

/* ---------- franja semanal ---------- */
function WeekStrip({ selected, onSelect }: { selected: string; onSelect: (k: string) => void }) {
  const { db } = useStore();
  const weekStart = startOfWeekKey(selected);
  const days = Array.from({ length: 7 }, (_, i) => addDaysKey(weekStart, i));
  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const a of db.appointments) m.set(a.date, (m.get(a.date) ?? 0) + 1);
    return m;
  }, [db.appointments]);
  const tKey = todayKey();

  return (
    <div className="flex items-stretch gap-1 rounded-2xl border border-line bg-card p-1.5 shadow-sm">
      <button
        onClick={() => onSelect(addDaysKey(weekStart, -7))}
        className="px-1.5 sm:px-2 rounded-xl text-soft hover:bg-mint hover:text-ink active:scale-95 transition-all"
        aria-label="Semana anterior"
      >
        <IcChevronL size={18} />
      </button>
      <div className="grid grid-cols-7 flex-1 gap-1">
        {days.map((k) => {
          const sel = k === selected;
          const today = k === tKey;
          const closed = !isDayOpen(k, db.settings.openDays, db.settings.closedDates);
          const n = counts.get(k) ?? 0;
          return (
            <button
              key={k}
              onClick={() => onSelect(k)}
              className={`relative rounded-xl py-1.5 sm:py-2 flex flex-col items-center gap-0.5 transition-all active:scale-[0.97] ${
                sel
                  ? closed
                    ? "bg-gradient-to-br from-danger to-danger/80 text-paper shadow-md"
                    : "bg-gradient-to-br from-pine to-pine2 text-paper shadow-md"
                  : closed
                    ? "bg-dangersoft/70 text-danger hover:bg-dangersoft"
                    : today
                      ? "bg-mint/50 hover:bg-mint"
                      : "hover:bg-mint/60"
              }`}
              aria-label={`${fmtWeekday(k)} ${fmtDayNum(k)}${closed ? ", salón cerrado" : ""}`}
            >
              {closed && (
                <span
                  className={`absolute right-0.5 sm:right-1 top-1 flex items-center gap-0.5 rounded-full px-1 py-px text-[7px] font-extrabold uppercase tracking-wide ${sel ? "bg-paper/20 text-paper" : "bg-danger/15 text-danger"}`}
                >
                  <IcBan size={8} /> <span className="hidden sm:inline">cerrado</span>
                </span>
              )}
              <span
                className={`text-[10px] font-semibold uppercase tracking-wide ${sel ? "text-paper/70" : closed ? "text-danger/70" : "text-faint"}`}
              >
                {fmtWeekday(k)}
              </span>
              <span
                className={`font-display font-bold text-base sm:text-lg leading-none num ${today && !sel && !closed ? "text-moss" : ""}`}
              >
                {fmtDayNum(k)}
              </span>
              <span className="h-1 flex items-center">
                {n > 0 && (
                  <span
                    className={`min-w-[14px] h-[14px] px-0.5 rounded-full text-[9px] font-bold flex items-center justify-center num ${sel ? "bg-paper/25 text-paper" : closed ? "bg-danger text-paper" : "bg-moss/15 text-moss"}`}
                  >
                    {n}
                  </span>
                )}
                {today && n === 0 && (
                  <span className={`w-1.5 h-1.5 rounded-full ${closed ? "bg-danger" : "bg-moss"}`} />
                )}
              </span>
            </button>
          );
        })}
      </div>
      <button
        onClick={() => onSelect(addDaysKey(weekStart, 7))}
        className="px-1.5 sm:px-2 rounded-xl text-soft hover:bg-mint hover:text-ink active:scale-95 transition-all"
        aria-label="Semana siguiente"
      >
        <IcChevronR size={18} />
      </button>
    </div>
  );
}

/* ---------- KPI del héroe ---------- */
function HeroKpi({
  icon,
  value,
  label,
  bar,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  bar?: number;
}) {
  return (
    <div className="rounded-xl bg-paper/12 border border-paper/15 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 min-w-0">
      <div className="flex items-center gap-1 text-paper/75">
        {icon}
        <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider truncate">
          {label}
        </span>
      </div>
      <p className="font-display font-extrabold text-sm sm:text-xl leading-tight num text-paper mt-0.5 truncate">
        {value}
      </p>
      {bar !== undefined ? (
        <div className="h-1 rounded-full bg-paper/20 mt-1 overflow-hidden">
          <div
            className="h-full rounded-full bg-paper/85 transition-all duration-700"
            style={{ width: `${bar}%` }}
          />
        </div>
      ) : (
        <div className="h-1 mt-1" />
      )}
    </div>
  );
}

/* ---------- héroe del día ---------- */
function DayHero({
  selected,
  isToday,
  items,
  onToday,
}: {
  selected: string;
  isToday: boolean;
  items: Appointment[];
  onToday: () => void;
}) {
  const { db } = useStore();
  const active = items.filter((a) => a.status !== "cancelada");
  const income = active.reduce((s, a) => s + a.price, 0);
  const busyMin = active.reduce((s, a) => s + a.duration, 0);
  const totalMin = (db.settings.closeHour - db.settings.openHour) * 60;
  const occupancy = Math.min(100, Math.round((busyMin / totalMin) * 100));

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pine via-pine2 to-golddeep px-4 sm:px-6 py-4 sm:py-5 shadow-lg anim-rise text-paper">
      {/* decoración */}
      <div className="pointer-events-none absolute -top-14 -right-10 w-48 h-48 rounded-full border border-paper/15" />
      <div className="pointer-events-none absolute top-10 -left-10 w-32 h-32 rounded-full border border-paper/10" />
      <div className="pointer-events-none absolute -bottom-8 right-16 w-28 h-28 rounded-full bg-paper/10 blur-2xl" />
      <IcCalendar
        size={104}
        className="pointer-events-none absolute -right-3 -bottom-5 text-paper/10"
      />

      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            {isToday && (
              <span className="inline-flex items-center gap-1 rounded-full bg-paper/20 backdrop-blur-sm px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-paper">
                <IcSparkle size={10} /> hoy
              </span>
            )}
            {!isToday && (
              <span className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-paper/60">
                agenda del salón
              </span>
            )}
            {!isToday && (
              <button
                onClick={onToday}
                className="inline-flex items-center rounded-full bg-paper/15 hover:bg-paper/25 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-paper transition-colors active:scale-95"
              >
                volver a hoy
              </button>
            )}
          </div>
          <h1 className="font-display font-extrabold text-xl sm:text-[26px] leading-tight mt-1 first-letter:uppercase">
            {fmtLong(selected)}
          </h1>
          <p className="text-[11px] sm:text-xs text-paper/75 mt-0.5 num">
            {items.length === 0
              ? "Ninguna cita registrada"
              : `${items.length} ${items.length === 1 ? "cita" : "citas"} · ${capitalize(fmtShortDate(selected))}`}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full sm:w-auto sm:shrink-0">
          <HeroKpi
            icon={<IcUsers size={11} />}
            value={String(active.length)}
            label="activas"
          />
          <HeroKpi icon={<IcEuro size={11} />} value={eur0.format(income)} label="estimado" />
          <HeroKpi
            icon={<IcClock size={11} />}
            value={`${occupancy}%`}
            label="ocupación"
            bar={occupancy}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- línea de tiempo ---------- */
function Timeline({
  dayKey,
  items,
  onSlot,
  onEdit,
  onNew,
}: {
  dayKey: string;
  items: Appointment[];
  onSlot: (start: number) => void;
  onEdit: (a: Appointment) => void;
  onNew: () => void;
}) {
  const { db } = useStore();
  const { openInvoice } = useUI();
  const { openHour, closeHour, step } = db.settings;
  const openMin = openHour * 60;
  const closeMin = closeHour * 60;
  const H = (closeHour - openHour) * PXH;
  const nowMin = nowMinutes();
  const isToday = dayKey === todayKey();
  const placed = layoutItems(items);
  const areaRef = useRef<HTMLDivElement>(null);

  function handleClick(e: React.MouseEvent) {
    const r = areaRef.current?.getBoundingClientRect();
    if (!r) return;
    const y = e.clientY - r.top;
    const mins = openMin + Math.floor((y / PXH) * 60 / step) * step;
    if (mins >= openMin && mins <= closeMin - step) onSlot(mins);
  }

  return (
    <div className="flex rounded-2xl border border-line bg-card overflow-hidden shadow-sm anim-rise">
      {/* gutter de horas */}
      <div
        className="relative w-12 sm:w-14 shrink-0 border-r border-line bg-gradient-to-b from-mint/40 via-transparent to-transparent select-none"
        style={{ height: H }}
      >
        {Array.from({ length: closeHour - openHour + 1 }, (_, i) => openHour + i).map((h, i) => (
          <span
            key={h}
            className="absolute right-2 text-[10px] sm:text-[11px] font-semibold text-faint num"
            style={{ top: i * PXH + (i === 0 ? 4 : -7) }}
          >
            {h}:00
          </span>
        ))}
        {isToday && nowMin >= openMin && nowMin <= closeMin && (
          <span
            className="absolute right-1.5 text-[9px] font-bold uppercase text-moss bg-mint rounded px-1 py-px"
            style={{ top: ((nowMin - openMin) / 60) * PXH - 8 }}
          >
            ahora
          </span>
        )}
      </div>

      {/* zona de citas */}
      <div
        ref={areaRef}
        className="relative flex-1 cursor-copy"
        style={{ height: H }}
        onClick={handleClick}
        title="Haz clic en un hueco para crear una cita"
      >
        {Array.from({ length: closeHour - openHour + 1 }, (_, i) => (
          <div key={`h${i}`} className="absolute left-0 right-0 border-t border-line" style={{ top: i * PXH }} />
        ))}
        {Array.from({ length: closeHour - openHour }, (_, i) => (
          <div
            key={`m${i}`}
            className="absolute left-0 right-0 border-t border-dashed border-line/70"
            style={{ top: i * PXH + PXH / 2 }}
          />
        ))}

        {placed.map(({ a, col, cols }) => {
          const top = ((a.start - openMin) / 60) * PXH;
          const h = (a.duration / 60) * PXH;
          // La tarjeta casi llena su franja; el mínimo garantiza que incluso
          // una cita de 15 min muestre chip + nombre sin pisar a la vecina.
          const cardH = Math.max(h - 2, 20);
          return (
            <div
              key={a.id}
              className="absolute"
              style={{
                top: top + 2,
                height: cardH,
                left: `calc(${(col / cols) * 100}% + 5px)`,
                width: `calc(${100 / cols}% - 10px)`,
                zIndex: 10 + col,
              }}
            >
              <ApptCard
                appt={a}
                density={densityForHeight(cardH)}
                showNotes={h >= 92}
                onEdit={() => onEdit(a)}
                onInvoice={
                  a.status !== "cancelada" && !a.invoiceId ? () => openInvoice(a) : undefined
                }
              />
            </div>
          );
        })}

        {/* línea de ahora */}
        {isToday && nowMin >= openMin && nowMin <= closeMin && (
          <div
            className="absolute left-0 right-0 z-30 pointer-events-none"
            style={{ top: ((nowMin - openMin) / 60) * PXH }}
          >
            <div className="h-[2px] bg-moss shadow-[0_0_8px_rgba(184,108,138,0.7)]" />
            <span className="absolute -left-1 -top-[3.5px] w-2 h-2 rounded-full bg-moss pulse-gold" />
          </div>
        )}

        {items.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center anim-fade">
              <span className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-mint to-goldsoft text-pine items-center justify-center mb-2 shadow-sm">
                <IcCalendar size={24} />
              </span>
              <p className="font-display font-bold text-lg text-ink">Día libre</p>
              <p className="text-sm text-soft mb-3">Haz clic en cualquier hueco para añadir una cita</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNew();
                }}
                className="pointer-events-auto inline-flex items-center gap-1.5 rounded-xl bg-pine text-paper px-4 py-2 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-md"
              >
                <IcPlus size={15} /> Añadir la primera cita
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- modo lista ---------- */
function DayList({ items, onEdit }: { items: Appointment[]; onEdit: (a: Appointment) => void }) {
  const { clientById, setAppointmentStatus, deleteAppointment } = useStore();
  const { toast, confirm, openInvoice } = useUI();

  async function remove(a: Appointment) {
    const ok = await confirm({
      title: "Eliminar cita",
      message: `¿Eliminar la cita de ${clientById(a.clientId)?.name ?? "cliente"} a las ${minutesToLabel(a.start)}?`,
      confirmLabel: "Eliminar",
      danger: true,
    });
    if (ok) {
      deleteAppointment(a.id);
      toast("Cita eliminada", "info");
    }
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-linedark/60 bg-card/60 py-14 text-center anim-rise">
        <span className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-mint to-goldsoft text-pine items-center justify-center mb-3 shadow-sm">
          <IcCalendar size={24} />
        </span>
        <p className="font-display font-bold text-lg text-ink">Sin citas este día</p>
        <p className="text-sm text-soft">Cambia de día en la franja superior o crea una cita nueva.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {items.map((a, i) => (
        <div key={a.id} className="anim-rise" style={{ animationDelay: `${i * 40}ms` }}>
          <ApptCard
            appt={a}
            density="row"
            onEdit={() => onEdit(a)}
            actions={
              <>
                {a.status !== "cancelada" && !a.invoiceId && (
                  <button
                    title="Facturar cita"
                    onClick={() => openInvoice(a)}
                    className="p-1.5 rounded-lg text-soft hover:text-moss hover:bg-mint transition-colors active:scale-90"
                  >
                    <IcEuro size={16} />
                  </button>
                )}
                {(a.status === "pendiente" || a.status === "confirmada") && (
                  <>
                    <button
                      title="Marcar completada"
                      onClick={() => {
                        setAppointmentStatus(a.id, "completada");
                        toast("Cita completada");
                      }}
                      className="p-1.5 rounded-lg text-soft hover:text-moss hover:bg-oksoft transition-colors active:scale-90"
                    >
                      <IcCheck size={16} />
                    </button>
                    <button
                      title="Cancelar cita"
                      onClick={() => {
                        setAppointmentStatus(a.id, "cancelada");
                        toast("Cita cancelada", "info");
                      }}
                      className="p-1.5 rounded-lg text-soft hover:text-danger hover:bg-dangersoft transition-colors active:scale-90"
                    >
                      <IcBan size={16} />
                    </button>
                  </>
                )}
                {(a.status === "completada" || a.status === "cancelada") && (
                  <button
                    title="Reabrir como pendiente"
                    onClick={() => {
                      setAppointmentStatus(a.id, "pendiente");
                      toast("Cita reabierta", "info");
                    }}
                    className="p-1.5 rounded-lg text-soft hover:text-warnfg hover:bg-warnsoft transition-colors active:scale-90"
                  >
                    <IcRotate size={16} />
                  </button>
                )}
                <button
                  title="Editar"
                  onClick={() => onEdit(a)}
                  className="p-1.5 rounded-lg text-soft hover:text-ink hover:bg-mint transition-colors active:scale-90"
                >
                  <IcPencil size={15} />
                </button>
                <button
                  title="Eliminar"
                  onClick={() => remove(a)}
                  className="p-1.5 rounded-lg text-soft hover:text-danger hover:bg-dangersoft transition-colors active:scale-90"
                >
                  <IcTrash size={15} />
                </button>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
}

/* ---------- panel lateral ---------- */
function SidePanel({ dayKey, items, onEdit, defaultStart }: { dayKey: string; items: Appointment[]; onEdit: (a: Appointment) => void; defaultStart: number }) {
  const { db, clientById } = useStore();
  const { openAppointment } = useUI();
  const nowMin = nowMinutes();
  const isToday = dayKey === todayKey();

  const upcoming = (isToday ? items.filter((a) => a.start + a.duration >= nowMin) : items)
    .filter((a) => a.status !== "cancelada")
    .sort((x, y) => x.start - y.start)
    .slice(0, 4);

  const byStatus = (["pendiente", "confirmada", "completada", "cancelada"] as const)
    .map((s) => ({ s, n: items.filter((a) => a.status === s).length }))
    .filter((x) => x.n > 0);
  const total = items.length;

  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-line bg-card p-4 shadow-sm anim-rise">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-faint mb-2.5">
          {isToday ? "Lo que viene" : "Citas del día"}
        </h3>
        {upcoming.length === 0 ? (
          <p className="text-sm text-faint py-2">Nada pendiente por aquí.</p>
        ) : (
          <div className="space-y-0.5">
            {upcoming.map((a) => {
              const c = clientById(a.clientId);
              const clientName = c?.name ?? "Cliente";
              return (
                <button
                  key={a.id}
                  onClick={() => onEdit(a)}
                  className="w-full flex items-center gap-2.5 rounded-xl px-2 py-1.5 hover:bg-mint/70 transition-colors text-left group"
                >
                  <Avatar name={clientName} size={30} />
                  <span
                    className="font-display font-bold text-sm num w-11 shrink-0"
                    style={{ color: a.color }}
                  >
                    {minutesToLabel(a.start)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold truncate group-hover:text-pine transition-colors">
                      {clientName}
                    </span>
                    <span className="block text-[11px] text-faint truncate">{a.serviceName}</span>
                  </span>
                  {isToday && a.status !== "completada" && (
                    <span className="text-[10px] font-bold text-moss bg-mint rounded-full px-2 py-0.5 num shrink-0">
                      {inLabel(a.start - nowMin)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-line bg-card p-4 shadow-sm anim-rise" style={{ animationDelay: "60ms" }}>
        <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-faint mb-2.5">Estado del día</h3>
        {byStatus.length === 0 ? (
          <p className="text-sm text-faint py-1">Todavía sin citas.</p>
        ) : (
          <div className="space-y-2">
            {byStatus.map(({ s, n }) => {
              const m = STATUS_META[s];
              const pct = Math.round((n / total) * 100);
              return (
                <div key={s}>
                  <div className="flex items-center gap-1.5 text-xs mb-1">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: m.fg }} />
                    <span className="text-soft font-medium">{m.label}</span>
                    <span className="ml-auto num font-bold text-ink">{n}</span>
                    <span className="text-faint num text-[10px] w-8 text-right">{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-line overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, background: m.fg }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <button
        onClick={() => openAppointment({ date: dayKey, start: defaultStart })}
        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-moss text-paper font-display font-bold text-sm px-4 py-3 hover:bg-pine2 active:scale-[0.98] transition-all shadow-md anim-rise"
        style={{ animationDelay: "120ms" }}
      >
        <IcPlus size={17} /> Nueva cita
      </button>
    </div>
  );
}

/* ---------- vista principal ---------- */
export default function AgendaView({ initialDay }: { initialDay?: string }) {
  const { db } = useStore();
  const { openAppointment } = useUI();
  const [selected, setSelected] = useState(initialDay ?? todayKey());
  const [mode, setMode] = useState<"agenda" | "lista">("agenda");
  const [, setTick] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setTick((x) => x + 1), 30_000);
    return () => window.clearInterval(t);
  }, []);

  const dayItems = useMemo(
    () => db.appointments.filter((a) => a.date === selected).sort((x, y) => x.start - y.start || y.duration - x.duration),
    [db.appointments, selected]
  );

  const isToday = selected === todayKey();
  const isClosed = !isDayOpen(selected, db.settings.openDays, db.settings.closedDates);
  const nextSlot = (() => {
    const base = isToday ? nowMinutes() + 5 : db.settings.openHour * 60;
    const step = db.settings.step;
    return Math.min(Math.max(Math.ceil(base / step) * step, db.settings.openHour * 60), db.settings.closeHour * 60 - step);
  })();

  const newDefault = () => openAppointment({ date: selected, start: nextSlot });
  const onSlot = (start: number) => openAppointment({ date: selected, start });
  const onEdit = (a: Appointment) => openAppointment({ appt: a });

  return (
    <div className="space-y-3.5">
      <DayHero selected={selected} isToday={isToday} items={dayItems} onToday={() => setSelected(todayKey())} />

      <WeekStrip selected={selected} onSelect={setSelected} />

      {isClosed && (
        <div className="flex items-center gap-2.5 rounded-2xl border border-danger/25 bg-dangersoft px-3.5 py-2.5 text-danger anim-fade">
          <span className="w-7 h-7 rounded-full bg-danger/15 flex items-center justify-center shrink-0">
            <IcBan size={14} />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-wide">Salón cerrado</p>
            <p className="text-[11px] text-danger/80">Este día está marcado como no laborable.</p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <div className="flex rounded-xl border border-line bg-card p-1 shadow-sm">
          <button
            onClick={() => setMode("agenda")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-bold transition-all active:scale-[0.97] ${
              mode === "agenda"
                ? "bg-gradient-to-br from-pine to-pine2 text-paper shadow-sm"
                : "text-soft hover:text-ink hover:bg-mint/60"
            }`}
          >
            <IcGrid size={14} /> Agenda
          </button>
          <button
            onClick={() => setMode("lista")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-bold transition-all active:scale-[0.97] ${
              mode === "lista"
                ? "bg-gradient-to-br from-pine to-pine2 text-paper shadow-sm"
                : "text-soft hover:text-ink hover:bg-mint/60"
            }`}
          >
            <IcList size={14} /> Lista
          </button>
        </div>
        <button
          onClick={newDefault}
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-moss text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm"
        >
          <IcPlus size={15} /> Nueva cita
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-4 items-start">
        <div className="min-w-0">
          {mode === "agenda" ? (
            <Timeline dayKey={selected} items={dayItems} onSlot={onSlot} onEdit={onEdit} onNew={newDefault} />
          ) : (
            <DayList items={dayItems} onEdit={onEdit} />
          )}
          <p className="text-[11px] text-faint mt-2 hidden lg:flex items-center gap-1.5">
            <IcSparkle size={12} className="text-moss" />
            Consejo: haz clic en un hueco libre de la agenda para crear una cita a esa hora.
          </p>
        </div>
        <SidePanel dayKey={selected} items={dayItems} onEdit={onEdit} defaultStart={nextSlot} />
      </div>
    </div>
  );
}
