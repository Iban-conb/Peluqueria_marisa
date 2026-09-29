"use client";

/**
 * Vista de Clientes rediseñada: directorio visual + ficha premium.
 *
 * - Listado en rejilla de tarjetas con avatar degradado, contacto y
 *   métricas rápidas (nº de citas, facturado, próxima visita).
 * - Ordenación por nombre, nº de citas o importe facturado.
 * - Ficha del cliente con héroe degradado, acciones rápidas (llamar,
 *   WhatsApp, editar, eliminar), KPIs (citas, facturado, última y
 *   próxima visita), datos de contacto, preferencias, historial en
 *   línea de tiempo y consentimientos RGPD con visor y descarga.
 */

import { useEffect, useMemo, useState } from "react";
import type { Appointment, Client, Consent } from "../lib/types";
import { fmtShortDate, minutesToLabel, norm, todayKey } from "../lib/date-utils";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import StatusPill from "../components/status-pill";
import ConsentModal from "../components/consent-modal";
import ConsentViewer from "../components/consent-viewer";
import ClientsImportModal from "../components/clients-import-modal";
import { exportClientsXlsx } from "../lib/clients-xlsx";
import { consentToObjectUrl } from "../lib/consent-pdf";
import {
  IcCalendar,
  IcClock,
  IcDownload,
  IcEuro,
  IcFileText,
  IcHistory,
  IcMail,
  IcPencil,
  IcPenNib,
  IcPhone,
  IcPin,
  IcPlus,
  IcScissors,
  IcSearch,
  IcShieldCheck,
  IcSparkle,
  IcTrash,
  IcUpload,
  IcUserPlus,
  IcUsers,
  IcWhatsapp,
  IcX,
} from "../components/icons";

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}
function hueOf(name: string): number {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) % 360;
  return h;
}

/** Avatar circular con degradado determinista a partir del nombre. */
export function Avatar({
  name,
  size = 40,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const h = hueOf(name);
  return (
    <span
      className={`rounded-full flex items-center justify-center font-display font-bold text-white shrink-0 select-none shadow-sm ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `linear-gradient(135deg, hsl(${h} 45% 48%), hsl(${h} 50% 30%))`,
      }}
    >
      {initials(name)}
    </span>
  );
}

/** Enlace de WhatsApp a partir del teléfono (asume prefijo español). */
function waHref(phone: string): string {
  const d = phone.replace(/\D/g, "");
  if (!d) return "";
  return `https://wa.me/${d.startsWith("34") && d.length > 9 ? d : `34${d}`}`;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-faint">
      {children}
    </h4>
  );
}

interface ClientStats {
  count: number;
  last?: Appointment;
  next?: Appointment;
}

type Sort = "nombre" | "citas" | "gasto";

const SORTS: { id: Sort; label: string }[] = [
  { id: "nombre", label: "Nombre" },
  { id: "citas", label: "Citas" },
  { id: "gasto", label: "Facturado" },
];

export default function ClientsView() {
  const { db, deleteClient, clientById, deleteConsent } = useStore();
  const { toast, confirm, openAppointment, openClient } = useUI();
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<Sort>("nombre");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tab, setTab] = useState<"historial" | "consentimientos">("historial");
  const [consentFor, setConsentFor] = useState<Client | null>(null);
  const [viewConsent, setViewConsent] = useState<Consent | null>(null);
  const [importOpen, setImportOpen] = useState(false);
  const today = todayKey();

  /* Estadísticas por cliente: nº de citas, última y próxima visita */
  const stats = useMemo(() => {
    const m = new Map<string, ClientStats>();
    for (const c of db.clients) m.set(c.id, { count: 0 });
    for (const a of db.appointments) {
      const s = m.get(a.clientId);
      if (!s) continue;
      s.count++;
      const isPast =
        a.date < today ||
        (a.date === today &&
          a.start + a.duration <
            new Date().getHours() * 60 + new Date().getMinutes());
      if (!isPast && a.status !== "cancelada") {
        if (!s.next || a.date < s.next.date || (a.date === s.next.date && a.start < s.next.start))
          s.next = a;
      }
      if (isPast || a.status === "completada") {
        if (!s.last || a.date > s.last.date || (a.date === s.last.date && a.start > s.last.start))
          s.last = a;
      }
    }
    return m;
  }, [db.appointments, db.clients, today]);

  /* Importe facturado y nº de facturas por cliente */
  const spend = useMemo(() => {
    const m = new Map<string, { total: number; count: number }>();
    for (const i of db.invoices) {
      const e = m.get(i.clientId) ?? { total: 0, count: 0 };
      e.total += i.total;
      e.count++;
      m.set(i.clientId, e);
    }
    return m;
  }, [db.invoices]);

  const clients = useMemo(() => {
    const term = norm(q.trim());
    const list = db.clients.filter((c) =>
      !term || norm(`${c.name} ${c.phone} ${c.email} ${c.city} ${c.street} ${c.zip}`).includes(term)
    );
    return list.sort((a, b) => {
      if (sort === "citas") {
        const d = (stats.get(b.id)?.count ?? 0) - (stats.get(a.id)?.count ?? 0);
        if (d !== 0) return d;
      }
      if (sort === "gasto") {
        const d = (spend.get(b.id)?.total ?? 0) - (spend.get(a.id)?.total ?? 0);
        if (d !== 0) return d;
      }
      return a.name.localeCompare(b.name, "es");
    });
  }, [db.clients, q, sort, stats, spend]);

  const selected = selectedId ? clientById(selectedId) : undefined;
  const selectedAppts = useMemo(
    () =>
      selected
        ? db.appointments
            .filter((a) => a.clientId === selected.id)
            .sort(
              (x, y) =>
                (y.date + String(y.start).padStart(4, "0")).localeCompare(
                  x.date + String(x.start).padStart(4, "0")
                )
            )
        : [],
    [db.appointments, selected]
  );

  const clientConsents = useMemo(
    () =>
      selected
        ? db.consents
            .filter((c) => c.clientId === selected.id)
            .sort((a, b) => b.signedAt.localeCompare(a.signedAt))
        : [],
    [db.consents, selected]
  );

  /* Servicio favorito (más repetido, ignorando canceladas) */
  const favourite = useMemo(() => {
    if (!selected) return null;
    const counts = new Map<string, number>();
    for (const a of selectedAppts) {
      if (a.status === "cancelada") continue;
      counts.set(a.serviceName, (counts.get(a.serviceName) ?? 0) + 1);
    }
    const best = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
    return best ? { name: best[0], count: best[1] } : null;
  }, [selected, selectedAppts]);

  /* Cerrar con Escape + bloquear scroll del fondo */
  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selectedId]);

  function selectClient(id: string) {
    setSelectedId(id);
    setTab("historial");
  }

  async function removeClient(c: Client) {
    const n = stats.get(c.id)?.count ?? 0;
    const nc = db.consents.filter((x) => x.clientId === c.id).length;
    const ok = await confirm({
      title: "Eliminar cliente",
      message:
        n > 0
          ? `Se eliminará a ${c.name}, sus ${n} ${n === 1 ? "cita registrada" : "citas registradas"}${nc > 0 ? ` y ${nc} ${nc === 1 ? "consentimiento firmado" : "consentimientos firmados"}` : ""}. ¿Continuar?`
          : `¿Seguro que quieres eliminar a ${c.name}?`,
      confirmLabel: "Eliminar",
      danger: true,
    });
    if (!ok) return;
    deleteClient(c.id);
    setSelectedId(null);
    toast("Cliente eliminado", "info");
  }

  async function removeConsent(c: Consent) {
    const ok = await confirm({
      title: "Eliminar consentimiento",
      message:
        "Se borrará el consentimiento firmado y su PDF de la base de datos. Esta acción no se puede deshacer. ¿Continuar?",
      confirmLabel: "Eliminar",
      danger: true,
    });
    if (!ok) return;
    deleteConsent(c.id);
    if (viewConsent?.id === c.id) setViewConsent(null);
    toast("Consentimiento eliminado", "info");
  }

  function downloadConsent(c: Consent) {
    try {
      const url = consentToObjectUrl(c.pdfBase64);
      const a = document.createElement("a");
      a.href = url;
      a.download = `consentimiento-${c.clientName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}-${c.signedAt.slice(0, 10)}.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    } catch {
      toast("No se pudo descargar el PDF", "err");
    }
  }

  function openConsentInBrowser(c: Consent) {
    const popup = window.open("about:blank", "_blank");
    if (!popup) {
      setViewConsent(c);
      toast("El navegador ha bloqueado la nueva pestaña. Usa el visor integrado.", "info");
      return;
    }
    try {
      const url = consentToObjectUrl(c.pdfBase64);
      popup.location.href = url;
      window.setTimeout(() => URL.revokeObjectURL(url), 10 * 60 * 1000);
    } catch {
      popup.close();
      toast("No se pudo abrir el PDF", "err");
    }
  }

  const fmtConsentDate = (iso: string) =>
    new Date(iso).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  /* ============ Datos de la ficha abierta ============ */
  const selStats = selected ? stats.get(selected.id) : undefined;
  const selSpend = selected ? spend.get(selected.id) : undefined;
  const selNext = selStats?.next;
  const selLast = selStats?.last;

  const kpis: { icon: typeof IcCalendar; bg: string; fg: string; v: string; l: string }[] = [
    {
      icon: IcCalendar,
      bg: "bg-mint",
      fg: "text-moss",
      v: String(selStats?.count ?? 0),
      l: selStats?.count === 1 ? "cita total" : "citas totales",
    },
    {
      icon: IcEuro,
      bg: "bg-goldsoft",
      fg: "text-golddeep",
      v: eur.format(selSpend?.total ?? 0),
      l: selSpend?.count === 1 ? "factura emitida" : "facturas emitidas",
    },
    {
      icon: IcHistory,
      bg: "bg-slatesoft",
      fg: "text-slatefg",
      v: selLast ? fmtShortDate(selLast.date) : "—",
      l: "última visita",
    },
    {
      icon: IcClock,
      bg: "bg-warnsoft",
      fg: "text-warnfg",
      v: selNext ? fmtShortDate(selNext.date) : "—",
      l: "próxima cita",
    },
  ];

  return (
    <div className="space-y-4">
      {consentFor && (
        <ConsentModal client={consentFor} onClose={() => setConsentFor(null)} />
      )}
      {viewConsent && (
        <ConsentViewer
          consent={viewConsent}
          onClose={() => setViewConsent(null)}
        />
      )}

      {/* ==================== CABECERA ==================== */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="min-w-0 flex-1">
          <h1 className="font-display font-extrabold text-2xl sm:text-[28px] leading-tight text-ink">
            Clientes
          </h1>
          <p className="text-sm text-soft mt-0.5">
            {db.clients.length} {db.clients.length === 1 ? "cliente" : "clientes"} en tu base de datos
          </p>
        </div>
        <div className="relative w-full sm:w-64 order-3 sm:order-none">
          <IcSearch size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar nombre, teléfono, ciudad…"
            className="w-full rounded-lg border border-linedark bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-moss focus:ring-2 focus:ring-moss/25 transition-shadow placeholder:text-faint shadow-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              exportClientsXlsx(db.clients);
              toast("Excel de clientes descargado", "ok");
            }}
            title="Descargar la cartera de clientes en Excel"
            className="inline-flex items-center gap-1.5 rounded-lg border border-linedark bg-card px-3 py-2 text-xs font-bold text-soft hover:bg-mint/60 hover:text-ink active:scale-[0.98] transition-all shadow-sm"
          >
            <IcDownload size={15} /> Excel
          </button>
          <button
            onClick={() => setImportOpen(true)}
            title="Importar clientes desde un archivo Excel"
            className="inline-flex items-center gap-1.5 rounded-lg border border-linedark bg-card px-3 py-2 text-xs font-bold text-soft hover:bg-mint/60 hover:text-ink active:scale-[0.98] transition-all shadow-sm"
          >
            <IcUpload size={15} /> Importar
          </button>
          <button
            onClick={() => openClient()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm"
          >
            <IcUserPlus size={15} /> Nuevo cliente
          </button>
        </div>
      </div>

      {importOpen && (
        <ClientsImportModal onClose={() => setImportOpen(false)} />
      )}

      {/* ==================== LISTADO EN TARJETAS ==================== */}
      {clients.length === 0 && db.clients.length === 0 && (
        <div className="rounded-2xl border border-dashed border-linedark bg-card/60 py-16 text-center anim-rise">
          <span className="inline-flex w-16 h-16 rounded-2xl bg-mint text-moss items-center justify-center mb-4 rotate-3">
            <IcUsers size={30} />
          </span>
          <p className="font-display font-bold text-lg text-ink">Aún no hay clientes</p>
          <p className="text-sm text-soft mb-5">Añade tu primer cliente con nombre, dirección y teléfono.</p>
          <button
            onClick={() => openClient()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 transition-colors shadow-sm"
          >
            <IcUserPlus size={16} /> Añadir cliente
          </button>
        </div>
      )}
      {clients.length === 0 && db.clients.length > 0 && (
        <div className="rounded-2xl border border-dashed border-linedark bg-card/60 py-12 text-center anim-fade">
          <p className="font-display font-bold text-ink">Sin resultados para «{q}»</p>
          <p className="text-sm text-soft">Prueba con otro nombre o número de teléfono.</p>
        </div>
      )}

      {clients.length > 0 && (
        <>
          {/* ordenación */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-faint">Ordenar por</span>
            <div className="flex rounded-lg border border-line bg-card p-0.5 shadow-sm">
              {SORTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSort(s.id)}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${
                    sort === s.id ? "bg-pine text-paper shadow-sm" : "text-soft hover:text-ink"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3 items-stretch">
            {clients.map((c, i) => {
              const s = stats.get(c.id);
              const sp = spend.get(c.id);
              const active = c.id === selectedId;
              return (
                <button
                  key={c.id}
                  onClick={() => selectClient(c.id)}
                  className={`anim-rise group flex flex-col rounded-2xl border p-3.5 text-left transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                    active
                      ? "border-moss bg-mint/40 shadow-sm ring-1 ring-moss/40"
                      : "border-line bg-card shadow-sm hover:border-linedark"
                  }`}
                  style={{ animationDelay: `${Math.min(i, 12) * 35}ms` }}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className="relative shrink-0">
                      <Avatar name={c.name} size={46} />
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-pine ring-2 ring-card" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-bold text-ink truncate group-hover:text-pine transition-colors">
                        {c.name}
                      </span>
                      <span className="block text-xs text-soft truncate num">
                        {c.phone || "—"}
                        {c.city ? ` · ${c.city}` : ""}
                      </span>
                    </span>
                  </span>
                  <span className="mt-3 flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-mint text-moss text-[10px] font-bold px-2 py-0.5 num">
                      <IcCalendar size={10} /> {s?.count ?? 0} {(s?.count ?? 0) === 1 ? "cita" : "citas"}
                    </span>
                    {(sp?.total ?? 0) > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-goldsoft text-golddeep text-[10px] font-bold px-2 py-0.5 num">
                        <IcEuro size={10} /> {eur.format(sp!.total)}
                      </span>
                    )}
                    {s?.next && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-linedark text-soft text-[10px] font-bold px-2 py-0.5 num">
                        <IcClock size={10} /> {fmtShortDate(s.next.date)} {minutesToLabel(s.next.start)}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* ==================== FICHA DEL CLIENTE ==================== */}
      <div
        className={
          selected
            ? "fixed inset-0 z-[100] flex items-start justify-center px-2 pt-20 pb-6 sm:px-6 sm:pt-24"
            : "hidden"
        }
      >
        {selected && (
          <>
            <button
              type="button"
              aria-label="Cerrar ficha del cliente"
              className="absolute inset-0 bg-pine/45 backdrop-blur-[2px] anim-fade cursor-default"
              onClick={() => setSelectedId(null)}
              tabIndex={-1}
            />
            <div className="relative w-full max-w-5xl max-h-[calc(100dvh-6.5rem)] sm:max-h-[calc(100dvh-7.5rem)] flex flex-col rounded-3xl border border-line bg-card shadow-2xl anim-pop overflow-hidden">
              {/* ---- héroe ---- */}
              <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-pine via-pine2 to-golddeep px-4 sm:px-6 pt-5 pb-5">
                <span className="absolute -top-16 -right-12 w-56 h-56 rounded-full bg-white/10" />
                <span className="absolute top-10 right-28 w-24 h-24 rounded-full bg-white/8" />
                <IcScissors
                  size={120}
                  className="absolute -bottom-5 right-3 text-white/10 -rotate-[18deg] pointer-events-none"
                />
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-3.5 right-3.5 z-10 p-1.5 rounded-full bg-white/12 text-paper/90 hover:bg-white/25 hover:text-paper transition-colors"
                  aria-label="Cerrar ficha"
                >
                  <IcX size={16} />
                </button>

                <div className="relative flex items-center gap-4 flex-wrap pr-8">
                  <span className="rounded-full ring-4 ring-white/25 shadow-lg">
                    <Avatar name={selected.name} size={64} />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display font-extrabold text-xl sm:text-2xl text-paper leading-tight truncate max-w-[46ch]">
                      {selected.name}
                    </h2>
                    <div className="flex items-center gap-1.5 flex-wrap mt-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/15 text-paper/95 text-[11px] font-semibold px-2.5 py-1 backdrop-blur-sm">
                        <IcSparkle size={11} /> Cliente desde {fmtShortDate(selected.createdAt.slice(0, 10))}
                      </span>
                      {clientConsents.length > 0 ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/15 text-paper/95 text-[11px] font-semibold px-2.5 py-1 backdrop-blur-sm">
                          <IcShieldCheck size={11} /> RGPD firmado
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-warnsoft/95 text-warnfg text-[11px] font-bold px-2.5 py-1">
                          <IcShieldCheck size={11} /> RGPD pendiente
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap ml-auto">
                    <a
                      href={`tel:${selected.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-paper text-pine px-3.5 py-2.5 text-xs font-bold shadow-md hover:bg-white active:scale-[0.97] transition-all"
                    >
                      <IcPhone size={14} /> Llamar
                    </a>
                    {waHref(selected.phone) && (
                      <a
                        href={waHref(selected.phone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 border border-white/25 text-paper px-3 py-2.5 text-xs font-bold backdrop-blur-sm hover:bg-white/25 active:scale-[0.97] transition-all"
                      >
                        <IcWhatsapp size={14} /> WhatsApp
                      </a>
                    )}
                    <button
                      onClick={() => openClient(selected)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 border border-white/25 text-paper px-3 py-2.5 text-xs font-bold backdrop-blur-sm hover:bg-white/25 active:scale-[0.97] transition-all"
                    >
                      <IcPencil size={14} /> Editar
                    </button>
                    <button
                      onClick={() => removeClient(selected)}
                      className="inline-flex items-center justify-center rounded-xl bg-white/15 border border-white/25 text-paper p-2.5 backdrop-blur-sm hover:bg-dangersoft hover:text-danger hover:border-dangersoft active:scale-[0.97] transition-all"
                      title="Eliminar cliente"
                      aria-label="Eliminar cliente"
                    >
                      <IcTrash size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* ---- KPIs ---- */}
              <div className="shrink-0 grid grid-cols-2 sm:grid-cols-4 gap-2.5 px-4 sm:px-6 py-4 bg-paper/60 border-b border-line">
                {kpis.map((k, i) => (
                  <div
                    key={k.l}
                    className="flex items-center gap-3 rounded-2xl border border-line bg-card p-3 shadow-sm anim-rise"
                    style={{ animationDelay: `${i * 45}ms` }}
                  >
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${k.bg} ${k.fg}`}>
                      <k.icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display font-extrabold text-[15px] num leading-none text-ink truncate">
                        {k.v}
                      </span>
                      <span className="block text-[10px] text-soft mt-1 leading-none">{k.l}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* ---- cuerpo ---- */}
              <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6 grid lg:grid-cols-5 gap-5 items-start">
                {/* columna izquierda */}
                <div className="lg:col-span-2 min-w-0 space-y-4">
                  <section className="rounded-2xl border border-line bg-card p-4 shadow-sm">
                    <SectionTitle>Datos de contacto</SectionTitle>
                    <div className="mt-3 space-y-1">
                      <a
                        href={`tel:${selected.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 rounded-xl px-2 py-2 -mx-1 transition-colors hover:bg-mint/60"
                      >
                        <span className="w-9 h-9 rounded-xl bg-mint text-moss flex items-center justify-center shrink-0">
                          <IcPhone size={16} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[10px] font-bold uppercase tracking-wide text-faint">Teléfono</span>
                          <span className="block text-sm font-semibold num text-ink">{selected.phone || "—"}</span>
                        </span>
                      </a>
                      {selected.email && (
                        <a
                          href={`mailto:${selected.email}`}
                          className="flex items-center gap-3 rounded-xl px-2 py-2 -mx-1 transition-colors hover:bg-mint/60"
                        >
                          <span className="w-9 h-9 rounded-xl bg-goldsoft text-golddeep flex items-center justify-center shrink-0">
                            <IcMail size={16} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[10px] font-bold uppercase tracking-wide text-faint">Correo</span>
                            <span className="block text-sm font-semibold text-ink break-all">{selected.email}</span>
                          </span>
                        </a>
                      )}
                      <div className="flex items-start gap-3 rounded-xl px-2 py-2 -mx-1">
                        <span className="w-9 h-9 rounded-xl bg-slatesoft text-slatefg flex items-center justify-center shrink-0">
                          <IcPin size={16} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[10px] font-bold uppercase tracking-wide text-faint">Dirección</span>
                          <span className="block text-sm text-soft leading-snug">
                            {selected.street || "Sin dirección registrada"}
                            {(selected.zip || selected.city) && (
                              <>
                                <br />
                                {[selected.zip, selected.city].filter(Boolean).join(" · ")}
                              </>
                            )}
                          </span>
                        </span>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-2xl border border-line bg-card p-4 shadow-sm">
                    <SectionTitle>Preferencias</SectionTitle>
                    {favourite || selSpend?.count ? (
                      <div className="mt-3 space-y-2.5">
                        {favourite && (
                          <div className="flex items-center gap-3">
                            <span className="w-9 h-9 rounded-xl bg-mint text-moss flex items-center justify-center shrink-0">
                              <IcSparkle size={16} />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[10px] font-bold uppercase tracking-wide text-faint">Servicio favorito</span>
                              <span className="block text-sm font-semibold text-ink truncate">
                                {favourite.name}{" "}
                                <span className="text-[11px] font-bold text-moss num">
                                  · {favourite.count}×
                                </span>
                              </span>
                            </span>
                          </div>
                        )}
                        {selSpend?.count ? (
                          <div className="flex items-center gap-3">
                            <span className="w-9 h-9 rounded-xl bg-goldsoft text-golddeep flex items-center justify-center shrink-0">
                              <IcEuro size={16} />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[10px] font-bold uppercase tracking-wide text-faint">Gasto medio por factura</span>
                              <span className="block text-sm font-semibold num text-ink">
                                {eur.format(selSpend.total / selSpend.count)}
                              </span>
                            </span>
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <p className="text-xs text-soft mt-2.5">
                        Aún sin visitas registradas: las preferencias se calcularán
                        cuando {selected.name.split(" ")[0]} tenga citas completadas.
                      </p>
                    )}
                  </section>

                  <button
                    onClick={() => openAppointment({ clientId: selected.id })}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-pine text-paper px-3 py-3 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-md"
                  >
                    <IcPlus size={15} /> Nueva cita para {selected.name.split(" ")[0]}
                  </button>
                </div>

                {/* columna derecha: historial + consentimientos */}
                <div className="lg:col-span-3 min-w-0 space-y-3">
                  <div className="flex rounded-xl border border-line bg-paper/70 p-1 gap-1">
                    <button
                      onClick={() => setTab("historial")}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-2 sm:px-3 py-2 text-[11px] sm:text-xs font-bold transition-all ${
                        tab === "historial" ? "bg-pine text-paper shadow-sm" : "text-soft hover:text-ink"
                      }`}
                    >
                      <IcHistory size={14} /> Historial ({selectedAppts.length})
                    </button>
                    <button
                      onClick={() => setTab("consentimientos")}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-2 sm:px-3 py-2 text-[11px] sm:text-xs font-bold transition-all ${
                        tab === "consentimientos" ? "bg-pine text-paper shadow-sm" : "text-soft hover:text-ink"
                      }`}
                    >
                      <IcShieldCheck size={14} /> <span className="truncate">Consentimientos ({clientConsents.length})</span>
                    </button>
                  </div>

                  {tab === "historial" ? (
                    selectedAppts.length === 0 ? (
                      <div className="rounded-2xl border border-dashed border-linedark bg-paper/50 py-10 text-center">
                        <span className="inline-flex w-12 h-12 rounded-2xl bg-mint text-moss items-center justify-center mb-3">
                          <IcHistory size={22} />
                        </span>
                        <p className="font-display font-bold text-ink">Sin citas todavía</p>
                        <p className="text-xs text-soft mt-1 mb-4">
                          Cuando {selected.name.split(" ")[0]} tenga citas aparecerán aquí.
                        </p>
                        <button
                          onClick={() => openAppointment({ clientId: selected.id })}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 transition-colors shadow-sm"
                        >
                          <IcPlus size={13} /> Crear la primera cita
                        </button>
                      </div>
                    ) : (
                      <div className="relative max-h-[44dvh] overflow-y-auto pr-1.5 rounded-xl">
                        <span className="absolute left-[10px] top-3 bottom-3 w-px bg-linedark/70" />
                        <div className="space-y-1">
                          {selectedAppts.map((a) => (
                            <button
                              key={a.id}
                              onClick={() => openAppointment({ appt: a })}
                              className="group relative w-full flex items-center gap-2 sm:gap-3 rounded-xl pl-6 sm:pl-8 pr-2.5 py-2 text-left hover:bg-mint/50 transition-colors"
                            >
                              <span
                                className="absolute left-[4px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ring-4 ring-card shrink-0"
                                style={{ background: a.color }}
                              />
                              <span className="w-[60px] sm:w-[76px] shrink-0">
                                <span className="block text-xs font-bold num text-ink leading-tight">
                                  {fmtShortDate(a.date)}
                                </span>
                                <span className="block text-[10px] text-faint num">
                                  {minutesToLabel(a.start)}
                                </span>
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block text-sm font-semibold text-ink truncate">
                                  {a.serviceName}
                                </span>
                                {a.notes && (
                                  <span className="block text-[11px] text-soft truncate">{a.notes}</span>
                                )}
                                <span className="sm:hidden block text-[11px] font-bold num text-soft mt-0.5">
                                  {a.status !== "cancelada" ? eur.format(a.price) : ""}
                                </span>
                              </span>
                              {a.invoiceId && (
                                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-mint text-moss text-[10px] font-bold px-2 py-0.5 shrink-0">
                                  <IcEuro size={10} /> Facturada
                                </span>
                              )}
                              <span className="hidden sm:block text-sm font-bold num text-ink w-[62px] text-right shrink-0">
                                {a.status !== "cancelada" ? eur.format(a.price) : ""}
                              </span>
                              <StatusPill status={a.status} />
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="space-y-2.5">
                      <button
                        onClick={() => setConsentFor(selected)}
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-pine text-paper px-3 py-2.5 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm"
                      >
                        <IcPenNib size={14} /> Nueva firma / renovar
                      </button>
                      {clientConsents.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-moss/50 bg-mint/40 px-4 py-6 text-center">
                          <span className="inline-flex w-11 h-11 rounded-2xl bg-mint text-moss items-center justify-center mb-2.5">
                            <IcShieldCheck size={20} />
                          </span>
                          <p className="text-xs font-bold text-moss">Sin consentimiento firmado</p>
                          <p className="text-[11px] text-soft mt-1 leading-relaxed max-w-[42ch] mx-auto">
                            El cliente debe firmar el consentimiento de tratamiento
                            de datos en la pantalla táctil del salón.
                          </p>
                        </div>
                      ) : (
                        clientConsents.map((c, i) => (
                          <div
                            key={c.id}
                            className="flex items-center gap-3 rounded-2xl border border-line bg-card px-3 py-2.5 shadow-sm"
                          >
                            <span className="w-9 h-9 rounded-xl bg-mint text-moss flex items-center justify-center shrink-0">
                              <IcShieldCheck size={16} />
                            </span>
                            <span className="flex-1 min-w-0">
                              <span className="block text-xs font-bold text-ink">
                                {fmtConsentDate(c.signedAt)}
                                {i === 0 && (
                                  <span className="ml-1.5 text-[9px] font-bold uppercase tracking-wide text-moss bg-mint rounded-full px-1.5 py-0.5">
                                    vigente
                                  </span>
                                )}
                              </span>
                              <span className="block text-[10px] text-faint truncate">
                                {c.marketing
                                  ? "Acepta comunicaciones comerciales"
                                  : "Sin comunicaciones comerciales"}{" "}
                                · PDF guardado
                              </span>
                            </span>
                            <button
                              onClick={() => openConsentInBrowser(c)}
                              className="p-2 rounded-lg text-soft hover:text-ink hover:bg-mint transition-colors shrink-0"
                              title="Ver PDF del consentimiento"
                            >
                              <IcFileText size={14} />
                            </button>
                            <button
                              onClick={() => downloadConsent(c)}
                              className="p-2 rounded-lg text-soft hover:text-ink hover:bg-mint transition-colors shrink-0"
                              title="Descargar PDF"
                            >
                              <IcDownload size={14} />
                            </button>
                            <button
                              onClick={() => removeConsent(c)}
                              className="p-2 rounded-lg text-soft hover:text-danger hover:bg-dangersoft transition-colors shrink-0"
                              title="Eliminar consentimiento"
                            >
                              <IcTrash size={14} />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
