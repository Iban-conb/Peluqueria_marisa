"use client";

/**
 * Vista de Calendario rediseñada: héroe del mes con navegación, KPIs con
 * iconos y barra de progreso, cuadrícula mensual premium (hoy con degradado,
 * días cerrados/festivos distinguidos, puntos de estado por cita) y panel
 * del día seleccionado con tarjetas de cita enriquecidas.
 *
 * Mantiene toda la funcionalidad: cambiar de mes, volver a hoy, selección
 * de día, estados de las citas, cierre por festivo, apertura de la agenda
 * del día y creación de una cita nueva en la fecha elegida.
 */

import { useMemo, useState } from "react";
import type { Appointment, AppointmentStatus } from "../lib/types";
import { STATUS_META } from "../lib/types";
import {
  capitalize,
  fmtDayNum,
  fmtLong,
  fmtMonth,
  fromKey,
  getMonthMatrix,
  isDayOpen,
  minutesToLabel,
  todayKey,
} from "../lib/date-utils";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import ApptCard from "../components/appt-card";
import {
  IcBan,
  IcCalendar,
  IcCheck,
  IcChevronL,
  IcChevronR,
  IcEuro,
  IcPlus,
  IcSparkle,
} from "../components/icons";

const WEEK_HEADERS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

/* ---------- KPI con icono ---------- */
function Kpi({
  icon: Icon,
  bg,
  fg,
  value,
  label,
  bar,
  delay = 0,
}: {
  icon: typeof IcCalendar;
  bg: string;
  fg: string;
  value: string | number;
  label: string;
  /** Porcentaje opcional para la barra de progreso bajo la etiqueta */
  bar?: number;
  delay?: number;
}) {
  return (
    <div
      className="rounded-2xl border border-line bg-card p-2.5 sm:p-3 shadow-sm anim-rise"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="flex items-center gap-2 sm:gap-3 min-w-0">
        <span className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${bg} ${fg}`}>
          <Icon size={18} />
        </span>
        <span className="min-w-0 flex-1 font-display font-extrabold text-base sm:text-lg leading-none num text-ink truncate">
          {value}
        </span>
      </span>
      <span className="block text-[10px] text-soft mt-1.5 leading-none">{label}</span>
      {typeof bar === "number" && (
        <span className="block h-1 rounded-full bg-mint mt-1.5 overflow-hidden">
          <span
            className="block h-full rounded-full bg-moss transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(0, bar))}%` }}
          />
        </span>
      )}
    </div>
  );
}

/* ---------- vista ---------- */
export default function MonthCalendarView({
  onOpenAgenda,
}: {
  onOpenAgenda: (day: string) => void;
}) {
  const { db } = useStore();
  const { openAppointment, openInvoice } = useUI();

  const today = todayKey();
  const initial = fromKey(today);
  const [year, setYear] = useState(initial.getFullYear());
  const [month, setMonth] = useState(initial.getMonth());
  const [selectedDay, setSelectedDay] = useState<string>(today);

  const weeks = useMemo(() => getMonthMatrix(year, month), [year, month]);

  // Mapa fecha -> citas
  const byDate = useMemo(() => {
    const m = new Map<string, Appointment[]>();
    for (const a of db.appointments) {
      const list = m.get(a.date) || [];
      list.push(a);
      m.set(a.date, list);
    }
    m.forEach((list) =>
      list.sort((x, y) => x.start - y.start || y.duration - x.duration)
    );
    return m;
  }, [db.appointments]);

  // KPIs del mes visible
  const monthStats = useMemo(() => {
    const monthPrefix = `${year}-${String(month + 1).padStart(2, "0")}-`;
    const inMonth = db.appointments.filter((a) => a.date.startsWith(monthPrefix));
    const active = inMonth.filter((a) => a.status !== "cancelada");
    const completed = inMonth.filter((a) => a.status === "completada");
    const income = active.reduce((s, a) => s + a.price, 0);
    return {
      total: inMonth.length,
      active: active.length,
      completed: completed.length,
      income,
    };
  }, [db.appointments, year, month]);

  // Citas del día seleccionado
  const selectedAppts = byDate.get(selectedDay) || [];
  const dayTotal = selectedAppts
    .filter((a) => a.status !== "cancelada")
    .reduce((s, a) => s + a.price, 0);
  const selectedOpen = isDayOpen(
    selectedDay,
    db.settings.openDays,
    db.settings.closedDates
  );
  const selectedFestive = db.settings.closedDates.includes(selectedDay);

  function prevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else setMonth((m) => m - 1);
  }
  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else setMonth((m) => m + 1);
  }
  function goToday() {
    const t = new Date();
    setYear(t.getFullYear());
    setMonth(t.getMonth());
    setSelectedDay(todayKey());
  }

  function handleDayClick(key: string) {
    setSelectedDay(key);
  }

  function openDayAgenda() {
    onOpenAgenda(selectedDay);
  }

  return (
    <div className="space-y-4">
      {/* ==================== HÉROE DEL MES ==================== */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pine via-pine2 to-golddeep px-4 sm:px-6 py-5 shadow-lg anim-rise">
        <span className="absolute -top-14 -right-10 w-48 h-48 rounded-full bg-white/10" />
        <span className="absolute top-8 right-24 w-20 h-20 rounded-full bg-white/8" />
        <IcCalendar
          size={110}
          className="absolute -bottom-4 right-4 text-white/10 -rotate-12 pointer-events-none"
        />
        <div className="relative flex flex-wrap items-center gap-3 pr-14 sm:pr-0">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-paper/60">
              Calendario
            </p>
            <h1 className="font-display font-extrabold text-2xl sm:text-[28px] leading-tight text-paper capitalize truncate">
              {capitalize(fmtMonth(`${year}-${String(month + 1).padStart(2, "0")}-01`))}
            </h1>
          </div>
          <div className="flex items-center gap-1 rounded-xl bg-white/15 border border-white/25 p-1 backdrop-blur-sm ml-auto shadow-sm">
            <button
              onClick={prevMonth}
              className="p-2 rounded-lg text-paper/90 hover:bg-white/25 hover:text-paper transition-colors"
              aria-label="Mes anterior"
            >
              <IcChevronL size={16} />
            </button>
            <button
              onClick={goToday}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-paper/90 hover:text-paper hover:bg-white/25 rounded-lg transition-colors"
            >
              Hoy
            </button>
            <button
              onClick={nextMonth}
              className="p-2 rounded-lg text-paper/90 hover:bg-white/25 hover:text-paper transition-colors"
              aria-label="Mes siguiente"
            >
              <IcChevronR size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ==================== KPIs DEL MES ==================== */}
      <div className="grid grid-cols-3 gap-2.5">
        <Kpi
          icon={IcCalendar}
          bg="bg-mint"
          fg="text-moss"
          value={monthStats.active}
          label={monthStats.active === 1 ? "cita activa" : "citas activas"}
          delay={0}
        />
        <Kpi
          icon={IcCheck}
          bg="bg-oksoft"
          fg="text-okfg"
          value={monthStats.completed}
          label={monthStats.completed === 1 ? "completada" : "completadas"}
          bar={monthStats.active ? (monthStats.completed / monthStats.active) * 100 : 0}
          delay={50}
        />
        <Kpi
          icon={IcEuro}
          bg="bg-goldsoft"
          fg="text-golddeep"
          value={eur.format(monthStats.income)}
          label="ingresos del mes"
          delay={100}
        />
      </div>

      {/* ==================== CUADRÍCULA MENSUAL ==================== */}
      <div className="rounded-2xl border border-line bg-card shadow-sm overflow-hidden anim-rise">
        {/* Cabecera días */}
        <div className="grid grid-cols-7 border-b border-line bg-paper/70">
          {WEEK_HEADERS.map((d, i) => (
            <div
              key={d}
              className={`px-1 py-2 text-center text-[10px] sm:text-xs font-bold uppercase tracking-wide text-faint ${
                i >= 5 ? "bg-mint/30" : ""
              }`}
            >
              <span className="hidden sm:inline">{d}</span>
              <span className="sm:hidden">{d.charAt(0)}</span>
            </div>
          ))}
        </div>

        {/* Cuadrícula (con fundido al cambiar de mes) */}
        <div key={`${year}-${month}`} className="grid grid-cols-7 grid-rows-6 anim-fade">
          {weeks.flat().map(({ key, date, inMonth }) => {
            const isToday = key === today;
            const isSelected = key === selectedDay;
            const isOpen = isDayOpen(
              key,
              db.settings.openDays,
              db.settings.closedDates
            );
            const dayAppts = byDate.get(key) || [];
            const isFestive = db.settings.closedDates.includes(key);
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;

            return (
              <button
                key={key}
                type="button"
                onClick={() => handleDayClick(key)}
                className={`relative min-h-[78px] sm:min-h-[104px] p-1.5 sm:p-2 text-left align-top border-b border-r border-line transition-all last:border-r-0 ${
                  isSelected
                    ? "bg-mint/60 ring-2 ring-inset ring-moss z-10"
                    : isOpen
                    ? `hover:bg-mint/40 cursor-pointer ${isWeekend && inMonth ? "bg-paper/40" : ""}`
                    : "bg-dangersoft/25 cursor-not-allowed"
                } ${!inMonth ? "opacity-40" : ""} ${isToday && !isSelected ? "bg-goldsoft/30" : ""}`}
              >
                {/* Número del día */}
                <div className="flex items-start justify-between mb-1">
                  <span
                    className={`calendar-daynum text-xs sm:text-sm font-bold inline-flex items-center justify-center w-6 h-6 rounded-full num transition-transform group-hover:scale-105 ${
                      isToday
                        ? "bg-gradient-to-br from-pine to-golddeep text-paper shadow-sm"
                        : !isOpen
                        ? "text-faint line-through"
                        : isSelected
                        ? "bg-pine text-paper"
                        : "text-ink"
                    }`}
                  >
                    {fmtDayNum(key)}
                  </span>
                  {/* Badge contador */}
                  {dayAppts.length > 0 && (
                    <span
                      className={`min-w-[16px] h-4 px-1 rounded-full text-[9px] font-bold inline-flex items-center justify-center num shadow-sm ${
                        isSelected
                          ? "bg-pine text-paper"
                          : isToday
                          ? "bg-golddeep text-paper"
                          : "bg-moss/15 text-moss"
                      }`}
                    >
                      {dayAppts.length}
                    </span>
                  )}
                </div>

                {/* Etiqueta festivo/cerrado */}
                {!isOpen && inMonth && (
                  <>
                    {/* Móvil: icono compacto (la etiqueta no cabe) */}
                    <span
                      className="sm:hidden inline-flex w-[18px] h-[18px] rounded items-center justify-center text-danger/80 bg-dangersoft/70"
                      title={isFestive ? "Festivo" : "Cerrado"}
                    >
                      {isFestive ? <IcSparkle size={10} /> : <IcBan size={10} />}
                    </span>
                    {/* Escritorio: etiqueta de texto */}
                    <span className="hidden sm:inline text-[9px] font-bold uppercase tracking-wide text-danger/70 bg-dangersoft/70 px-1.5 py-0.5 rounded">
                      {isFestive ? "Festivo" : "Cerrado"}
                    </span>
                  </>
                )}

                {/* Dots de estado (hasta 6) */}
                {isOpen && dayAppts.length > 0 && (
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center gap-1 flex-wrap">
                    {dayAppts.slice(0, 6).map((a) => (
                      <span
                        key={a.id}
                        className="w-1.5 h-1.5 rounded-full ring-1 ring-black/5"
                        style={{ background: STATUS_META[a.status].fg }}
                        title={`${minutesToLabel(a.start)} · ${a.serviceName} · ${STATUS_META[a.status].label}`}
                      />
                    ))}
                    {dayAppts.length > 6 && (
                      <span className="text-[8px] text-faint num">
                        +{dayAppts.length - 6}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Leyenda */}
        <div className="border-t border-line bg-paper/70 px-3 py-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px]">
          {(Object.keys(STATUS_META) as AppointmentStatus[]).map((s) => (
            <span key={s} className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full ring-1 ring-black/5"
                style={{ background: STATUS_META[s].fg }}
              />
              <span className="text-soft font-medium">{STATUS_META[s].label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ==================== PANEL DEL DÍA ==================== */}
      <div className="rounded-2xl border border-line bg-card shadow-sm overflow-hidden anim-rise">
        <header className="px-4 py-3.5 border-b border-line bg-paper/70 flex items-center justify-between gap-3 flex-wrap">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-faint">
              Día seleccionado
            </p>
            <p className="font-display font-bold text-base sm:text-lg text-ink capitalize truncate mt-0.5">
              {capitalize(fmtLong(selectedDay))}
            </p>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap shrink-0">
            {!selectedOpen && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide bg-dangersoft text-danger rounded-full px-2 py-1">
                <IcBan size={10} /> {selectedFestive ? "Festivo" : "Cerrado"}
              </span>
            )}
            {dayTotal > 0 && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide bg-goldsoft text-golddeep rounded-full px-2 py-1 num">
                <IcEuro size={10} /> {eur.format(dayTotal)}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide bg-mint text-moss rounded-full px-2 py-1 num">
              {selectedAppts.length} {selectedAppts.length === 1 ? "cita" : "citas"}
            </span>
          </div>
        </header>

        <div className="p-3 sm:p-4 space-y-2">
          {selectedAppts.length === 0 ? (
            <div className="py-8 text-center">
              <span className="inline-flex w-14 h-14 rounded-2xl bg-mint text-moss items-center justify-center mb-3 rotate-3">
                <IcSparkle size={24} />
              </span>
              <p className="font-display font-bold text-base text-ink">
                Sin citas este día
              </p>
              <p className="text-sm text-soft mt-0.5">
                {selectedOpen
                  ? `Añade una cita para el ${capitalize(fmtLong(selectedDay))}.`
                  : "El salón está cerrado en esta fecha."}
              </p>
            </div>
          ) : (
            /* Tarjetas unificadas (mismo diseño que la agenda); en pantallas
               anchas a 2 columnas para aprovechar el espacio sin tarjetas vacías. */
            <div className="grid gap-2 md:grid-cols-2">
              {selectedAppts.map((a) => (
                <ApptCard
                  key={a.id}
                  appt={a}
                  density="row"
                  className="anim-rise"
                  onEdit={() => openAppointment({ appt: a })}
                  onInvoice={
                    a.status !== "cancelada" && !a.invoiceId
                      ? () => openInvoice(a)
                      : undefined
                  }
                />
              ))}
            </div>
          )}

          {/* Botones de acción */}
          <div className="pt-2 space-y-2">
            <button
              onClick={openDayAgenda}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-pine text-paper px-4 py-2.5 text-sm font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-md"
            >
              <IcCalendar size={16} /> Abrir agenda del día
            </button>
            <button
              onClick={() =>
                openAppointment({
                  date: selectedDay,
                  start: db.settings.openHour * 60,
                })
              }
              disabled={!selectedOpen}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-linedark text-moss px-4 py-2.5 text-sm font-bold hover:bg-mint hover:border-moss/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IcPlus size={16} /> Nueva cita este día
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
