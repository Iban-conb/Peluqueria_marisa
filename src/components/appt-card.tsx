"use client";

/**
 * Tarjeta de cita UNIFICADA — la misma anatomía en la agenda (línea de
 * tiempo y modo lista) y en el panel del día del calendario:
 *
 *   Fila A · chip con hora + duración del tratamiento · avatar · nombre · precio · estado
 *   Fila B · servicio · teléfono · facturar / facturada
 *   Fila C · notas (solo cuando hay espacio de sobra)
 *
 * La densidad decide qué filas se muestran según el espacio disponible;
 * los tamaños de fuente y la jerarquía NO cambian entre densidades, de
 * modo que una cita de 30 min y una de 120 min se leen igual de bien.
 * Así las fichas cortas nunca pierden el chip ni el nombre, y las largas
 * no se "inflan" con textos gigantes.
 */

import type { Appointment } from "../lib/types";
import { STATUS_META } from "../lib/types";
import { minutesToLabel } from "../lib/date-utils";
import { useStore } from "../state/store";
import { Avatar } from "../views/clients-view";
import { IcEuro, IcPhone } from "./icons";

export type ApptDensity = "nano" | "compact" | "full" | "row";

/**
 * Densidad adecuada para una ficha de `h` píxeles de alto (timeline).
 * - nano    (< 34 px): una línea — chip + nombre + estado.
 * - compact (34–51 px): dos líneas — se añade servicio · precio · facturar.
 * - full    (≥ 52 px): ficha completa con avatar, teléfono y notas si caben.
 */
export function densityForHeight(h: number): ApptDensity {
  if (h < 34) return "nano";
  if (h < 52) return "compact";
  return "full";
}

/** Chip redondeado de estado (los colores salen de STATUS_META). */
export function ApptStatusChip({
  status,
  tiny,
}: {
  status: Appointment["status"];
  tiny?: boolean;
}) {
  const m = STATUS_META[status];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 rounded-full font-bold uppercase tracking-wide ${
        tiny ? "text-[9px] px-1.5 py-px" : "text-[10px] px-2 py-0.5"
      }`}
      style={{ background: m.bg, color: m.fg }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: m.fg }} />
      {m.label}
    </span>
  );
}

export default function ApptCard({
  appt,
  density,
  onEdit,
  onInvoice,
  actions,
  showNotes,
  className = "",
}: {
  appt: Appointment;
  density: ApptDensity;
  /** Clic en la tarjeta (abre la ficha de la cita). */
  onEdit?: () => void;
  /** Botón € rápido de facturar; si falta, no se muestra. */
  onInvoice?: () => void;
  /** Acciones extra (lista de agenda); se sitúan a la derecha, fuera del clic de edición. */
  actions?: React.ReactNode;
  /** Forzar la fila de notas en densidad full (timeline la activa si sobra altura). */
  showNotes?: boolean;
  className?: string;
}) {
  const { clientById } = useStore();
  const cancelled = appt.status === "cancelada";
  const invoiced = Boolean(appt.invoiceId);
  const meta = STATUS_META[appt.status];
  const col = appt.color;

  const client = clientById(appt.clientId);
  const clientName = client?.name ?? "Cliente eliminado";
  const phone = client?.phone?.trim();

  const tooltip = `${minutesToLabel(appt.start)} – ${minutesToLabel(appt.start + appt.duration)} · ${clientName}${
    phone ? ` · ${phone}` : ""
  } · ${appt.serviceName} · ${appt.price} € · ${meta.label}${appt.notes ? ` · ${appt.notes}` : ""}`;

  const pad =
    density === "row"
      ? "px-3 py-2.5"
      : density === "full"
        ? "px-2.5 py-1.5"
        : density === "compact"
          ? "px-2 py-[2px]"
          : "px-1.5 py-0";

  const showNotesRow =
    appt.notes && (density === "row" || (density === "full" && showNotes));

  return (
    <div
      role={onEdit ? "button" : undefined}
      tabIndex={onEdit ? 0 : undefined}
      onKeyDown={
        onEdit
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onEdit();
              }
            }
          : undefined
      }
      onClick={onEdit}
      title={tooltip}
      className={`group relative flex min-w-0 cursor-pointer items-center gap-2 overflow-hidden rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-md ${pad} ${
        density === "row" ? "rounded-2xl" : ""
      } ${cancelled ? "opacity-55" : ""} ${className}`}
      style={{
        border: `1px solid ${col}2e`,
        borderLeft: `3px solid ${col}`,
        background: `linear-gradient(120deg, ${col}22, ${col}0a)`,
      }}
    >
      {/* ——— contenido principal ——— */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-[3px]">
        {/* Fila A: chip hora+duración · avatar · nombre · precio · estado */}
        <div className="flex min-w-0 items-center gap-1.5">
          <span
            className="inline-flex shrink-0 items-center rounded-md border bg-paper/85 py-[2px] pl-1.5 pr-1.5 font-extrabold num leading-none shadow-sm"
            style={{
              borderColor: `${col}45`,
              /* Mezclado con ink: conserva el color del servicio y garantiza
                 contraste tanto en tema claro como en el tema noche. */
              color: `color-mix(in srgb, ${col} 55%, var(--color-ink) 45%)`,
            }}
          >
            <span className={density === "nano" || density === "compact" ? "text-[10px]" : "text-[11px]"}>
              {minutesToLabel(appt.start)}
            </span>
            <span
              className={`ml-1 font-bold opacity-70 ${
                density === "nano" || density === "compact" ? "text-[9px]" : "text-[10px]"
              }`}
            >
              {density === "nano" || density === "compact" ? (
                <>
                  {/* En móvil la duración se abrevia para dejar sitio al nombre */}
                  <span className="sm:hidden">{appt.duration}m</span>
                  <span className="hidden sm:inline">{appt.duration} min</span>
                </>
              ) : (
                <>{appt.duration} min</>
              )}
            </span>
          </span>

          {(density === "full" || density === "row") && (
            <span className="hidden shrink-0 sm:inline-flex">
              <Avatar name={clientName} size={density === "row" ? 30 : 22} />
            </span>
          )}

          <span
            className={`min-w-0 flex-1 truncate font-bold tracking-tight text-ink ${
              density === "row" ? "text-sm" : "text-[13px]"
            } ${cancelled ? "line-through text-soft" : ""}`}
          >
            {clientName}
          </span>

          {(density === "full" || density === "row") && (
            <span
              className={`hidden shrink-0 num text-xs font-bold sm:inline ${
                cancelled ? "line-through text-faint" : "text-ink/85"
              }`}
            >
              {appt.price} €
            </span>
          )}

          {/* Estado: pill en escritorio; punto de color en móvil para
              dejar el ancho al nombre (tooltip + modal dan el detalle). */}
          <span
            className="w-1.5 h-1.5 shrink-0 rounded-full sm:hidden"
            style={{ background: meta.fg }}
            title={meta.label}
          />
          <span className="hidden shrink-0 sm:inline-flex">
            <ApptStatusChip status={appt.status} tiny />
          </span>
        </div>

        {/* Fila B: servicio · teléfono · precio (compact) · facturar/facturada */}
        {density !== "nano" && (
          <div className="flex min-w-0 items-center gap-1.5">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full" style={{ background: col }} />
            <span className="min-w-0 flex-1 truncate text-[11px] leading-none text-soft">
              {appt.serviceName}
            </span>
            {(density === "full" || density === "row") && (
              /* En móvil el precio baja de la fila A a esta fila */
              <span
                className={`shrink-0 num text-[11px] font-bold leading-none sm:hidden ${
                  cancelled ? "line-through text-faint" : "text-ink/85"
                }`}
              >
                {appt.price} €
              </span>
            )}
            {density === "compact" && (
              <span
                className={`shrink-0 num text-[11px] leading-none font-bold ${
                  cancelled ? "line-through text-faint" : "text-ink/85"
                }`}
              >
                {appt.price} €
              </span>
            )}
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                title={`Llamar a ${clientName}: ${phone}`}
                aria-label={`Llamar a ${clientName}: ${phone}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex shrink-0 items-center gap-0.5 text-[11px] font-bold leading-none text-moss hover:opacity-75 hover:underline num"
              >
                <IcPhone size={11} />
                {(density === "row" || density === "full") && (
                  <span className="hidden sm:inline">{phone}</span>
                )}
              </a>
            )}
            {invoiced ? (
              <span
                title="Cita facturada"
                className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-mint px-1.5 py-px text-[9px] font-bold leading-none text-moss"
              >
                <IcEuro size={9} />
                {(density === "row" || density === "full") && (
                  <span className="hidden sm:inline">Facturada</span>
                )}
              </span>
            ) : (
              onInvoice &&
              !cancelled && (
                <button
                  title="Facturar cita"
                  aria-label={`Facturar cita de ${clientName}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onInvoice();
                  }}
                  className="inline-flex shrink-0 items-center rounded-full p-1 text-moss transition-colors hover:bg-mint hover:text-pine active:scale-90"
                >
                  <IcEuro size={density === "row" ? 15 : 12} />
                </button>
              )
            )}
          </div>
        )}

        {/* Fila C: notas (solo con espacio de sobra) */}
        {showNotesRow && (
          <p className="min-w-0 truncate pl-3 text-[11px] italic leading-none text-faint">
            “{appt.notes}”
          </p>
        )}
      </div>

      {/* ——— acciones extra (modo lista) ——— */}
      {actions && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex shrink-0 items-center gap-0.5 self-stretch border-l border-line/70 pl-1.5"
        >
          {actions}
        </div>
      )}
    </div>
  );
}
