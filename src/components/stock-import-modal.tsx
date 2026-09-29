"use client";

/**
 * Modal de importación de almacén desde Excel (.xlsx) o CSV.
 *
 * Dos pasos:
 *  1. Elegir archivo → parseStockFile() calcula la vista previa de cambios.
 *  2. Revisar cambios (stock, campos, altas) y confirmar → applyStockImport().
 */

import { useRef, useState } from "react";
import type { StockImportPreview } from "../lib/stock-xlsx";
import { parseStockFile } from "../lib/stock-xlsx";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import Modal, { inputCls } from "./aura-modal";
import { IcAlert, IcBox, IcCheck, IcPlus, IcUpload, IcX } from "./icons";

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const FIELD_LABELS: Record<string, string> = {
  brand: "Marca",
  category: "Categoría",
  sku: "Ref/SKU",
  minStock: "Stock mínimo",
  cost: "Coste",
  price: "PVP",
  supplier: "Proveedor",
  notes: "Notas",
};

export default function StockImportModal({ onClose }: { onClose: () => void }) {
  const { db, applyStockImport } = useStore();
  const { toast } = useUI();
  const fileRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState<StockImportPreview | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function chooseFile(f: File | undefined) {
    if (!f) return;
    setFileName(f.name);
    setError("");
    setPreview(null);
    setBusy(true);
    try {
      const p = await parseStockFile(f, db.products, db.productCategories);
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
    const res = applyStockImport({
      updates: preview.changes.map((c) => ({
        id: c.productId,
        patch: c.patch,
        newStock: c.stockTo,
      })),
      creates: preview.creates.map((c) => ({ ...c })),
    });
    toast(
      `Almacén actualizado: ${res.updated} ${
        res.updated === 1 ? "producto modificado" : "productos modificados"
      }${res.created ? ` · ${res.created} nuevo${res.created === 1 ? "" : "s"}` : ""}`,
      "ok"
    );
    onClose();
  }

  return (
    <Modal
      title="Actualizar almacén desde Excel"
      subtitle="Sube el archivo exportado por la app con el stock real contado"
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
                Usa la misma plantilla que genera «Exportar Excel»: la columna
                ID vincula cada fila con su producto.
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
                  ? "producto a actualizar"
                  : "productos a actualizar"}
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
            </div>

            <div className="max-h-72 overflow-y-auto rounded-xl border border-line divide-y divide-line">
              {preview.changes.map((c) => (
                <div key={c.productId} className="px-3 py-2 bg-card">
                  <p className="text-sm font-bold text-ink truncate">{c.name}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
                    {c.stockTo !== undefined && (
                      <span className="text-[11px] num font-bold text-moss">
                        Stock: {c.stockFrom} → {c.stockTo}
                      </span>
                    )}
                    {Object.entries(c.patch).map(([k, v]) => (
                      <span key={k} className="text-[11px] text-soft num">
                        {FIELD_LABELS[k] ?? k}: →{" "}
                        {k === "cost" || k === "price"
                          ? eur.format(Number(v))
                          : String(v)}
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
                    {c.brand && (
                      <span className="text-faint font-medium">· {c.brand}</span>
                    )}
                  </p>
                  <p className="text-[11px] text-soft num">
                    Stock {c.stock} · mín. {c.minStock} · coste{" "}
                    {eur.format(c.cost)} · PVP {eur.format(c.price)}
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
                <IcBox size={16} /> Aplicar cambios
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
              <li>Exporta el almacén con «Excel» y cuenta lo que hay físicamente.</li>
              <li>Edita la columna <b>Stock</b> (y lo que quieras) en el archivo.</li>
              <li>Sube aquí el archivo: verás un resumen antes de aplicar nada.</li>
            </ol>
            <p className="mt-1.5 text-faint">
              Cada ajuste queda registrado en el historial de movimientos.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
