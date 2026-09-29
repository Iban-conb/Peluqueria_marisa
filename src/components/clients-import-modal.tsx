"use client";

/**
 * Modal de importación de clientes desde Excel (.xlsx) o CSV.
 *
 * Dos pasos:
 *  1. Elegir archivo → parseClientsFile() calcula la vista previa de cambios.
 *  2. Revisar cambios (datos, altas) y confirmar → applyClientsImport().
 */

import { useRef, useState } from "react";
import type { ClientImportPreview } from "../lib/clients-xlsx";
import { parseClientsFile } from "../lib/clients-xlsx";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import Modal from "./aura-modal";
import { IcAlert, IcCheck, IcPlus, IcUpload, IcUsers, IcX } from "./icons";

const FIELD_LABELS: Record<string, string> = {
  name: "Nombre",
  phone: "Teléfono",
  email: "Correo",
  street: "Dirección",
  zip: "CP",
  city: "Ciudad",
};

export default function ClientsImportModal({ onClose }: { onClose: () => void }) {
  const { db, applyClientsImport } = useStore();
  const { toast } = useUI();
  const fileRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState<ClientImportPreview | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function chooseFile(f: File | undefined) {
    if (!f) return;
    setFileName(f.name);
    setError("");
    setPreview(null);
    setBusy(true);
    try {
      const p = await parseClientsFile(f, db.clients);
      setPreview(p);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "No se pudo leer el archivo. Comprueba que es un .xlsx o CSV válido."
      );
    } finally {
      setBusy(false);
    }
  }

  function apply() {
    if (!preview) return;
    const res = applyClientsImport({
      updates: preview.changes.map((c) => ({
        id: c.clientId,
        patch: { ...c.patch },
      })),
      creates: preview.creates.map((c) => ({ ...c })),
    });
    toast(
      `Clientes actualizados: ${res.updated} ${
        res.updated === 1 ? "ficha modificada" : "fichas modificadas"
      }${res.created ? ` · ${res.created} alta${res.created === 1 ? " nueva" : "s nuevas"}` : ""}`,
      "ok"
    );
    onClose();
  }

  return (
    <Modal
      title="Importar clientes desde Excel"
      subtitle="Sube el archivo exportado por la app con tus cambios"
      onClose={onClose}
      maxW="max-w-xl"
    >
      <div className="space-y-4">
        {/* paso 1: archivo */}
        <div
          className={`rounded-xl border-2 border-dashed px-4 py-5 text-center transition-colors ${
            preview ? "border-moss/50 bg-mint/40" : "border-linedark bg-card/60"
          }`}
        >
          <input
            ref={fileRef}
            type="file"
            accept=".xlsx,.xls,.csv"
            className="hidden"
            onChange={(e) => {
              chooseFile(e.target.files?.[0]);
              e.target.value = "";
            }}
          />
          {busy ? (
            <p className="text-sm font-semibold text-soft">
              Leyendo {fileName}…
            </p>
          ) : preview ? (
            <button
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center gap-2 text-sm font-bold text-moss hover:underline"
            >
              <IcCheck size={16} /> {fileName} — toca para cambiar de archivo
            </button>
          ) : (
            <>
              <button
                onClick={() => fileRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm"
              >
                <IcUpload size={16} /> Elegir archivo Excel o CSV
              </button>
              <p className="text-[11px] text-faint mt-2">
                Usa la misma plantilla que genera «Excel»: la columna ID (o el
                teléfono) vincula cada fila con su cliente.
              </p>
            </>
          )}
        </div>

        {error && (
          <p className="flex items-start gap-2 text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade">
            <IcAlert size={14} className="shrink-0 mt-0.5" />
            {error}
          </p>
        )}

        {/* paso 2: vista previa */}
        {preview && (
          <>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-mint text-moss px-2.5 py-1 font-bold num">
                {preview.changes.length}{" "}
                {preview.changes.length === 1
                  ? "cliente a actualizar"
                  : "clientes a actualizar"}
              </span>
              {preview.creates.length > 0 && (
                <span className="rounded-full bg-pine/10 text-pine px-2.5 py-1 font-bold num">
                  {preview.creates.length}{" "}
                  {preview.creates.length === 1 ? "alta nueva" : "altas nuevas"}
                </span>
              )}
              {preview.skipped > 0 && (
                <span className="rounded-full bg-warnsoft text-warnfg px-2.5 py-1 font-bold num">
                  {preview.skipped} filas sin nombre (omitidas)
                </span>
              )}
              {preview.duplicates > 0 && (
                <span className="rounded-full bg-warnsoft text-warnfg px-2.5 py-1 font-bold num">
                  {preview.duplicates} teléfonos repetidos (omitidos)
                </span>
              )}
            </div>

            <div className="max-h-72 overflow-y-auto rounded-xl border border-line divide-y divide-line">
              {preview.changes.map((c) => (
                <div key={c.clientId} className="px-3 py-2 bg-card">
                  <p className="text-sm font-bold text-ink truncate">{c.name}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
                    {Object.entries(c.patch).map(([k, v]) => (
                      <span key={k} className="text-[11px] text-soft num">
                        {FIELD_LABELS[k] ?? k}: → {String(v)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {preview.creates.map((c, i) => (
                <div key={`new-${i}`} className="px-3 py-2 bg-mint/30">
                  <p className="text-sm font-bold text-ink truncate flex items-center gap-1.5">
                    <IcPlus size={12} className="text-moss shrink-0" />
                    {c.name}
                    {c.phone && (
                      <span className="text-faint font-medium num">
                        · {c.phone}
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-soft num truncate">
                    {[
                      c.city,
                      c.email,
                      c.street,
                      c.zip,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 rounded-lg border border-linedark px-4 py-2.5 text-sm font-semibold text-soft hover:bg-mint/60 hover:text-ink transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={apply}
                className="flex-[1.4] rounded-lg bg-moss text-paper px-4 py-2.5 text-sm font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm inline-flex items-center justify-center gap-2"
              >
                <IcUsers size={16} /> Aplicar cambios
              </button>
            </div>
          </>
        )}

        {!preview && !error && !busy && (
          <div className="rounded-lg bg-card border border-line px-3.5 py-3 text-xs text-soft leading-relaxed">
            <p className="font-bold text-ink mb-1 flex items-center gap-1.5">
              <IcAlert size={13} className="text-warnfg" /> Cómo funciona
            </p>
            <ol className="list-decimal ml-4 space-y-0.5">
              <li>Exporta la cartera con «Excel» y edita lo que necesites.</li>
              <li>
                Añade clientes nuevos con filas nuevas (al menos el{" "}
                <b>Nombre</b>).
              </li>
              <li>Sube aquí el archivo: verás un resumen antes de aplicar nada.</li>
            </ol>
            <p className="mt-1.5 text-faint flex items-center gap-1">
              <IcX size={11} className="text-danger" />
              Las citas y facturas de cada cliente no se tocan.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
