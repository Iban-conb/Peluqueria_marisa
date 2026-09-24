"use client";

import { useMemo, useState } from "react";
import type { Product, StockMovementType } from "../lib/types";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import Modal, { Field, inputCls } from "./aura-modal";
import { IcStockIn, IcStockOut } from "./icons";

interface Props {
  product: Product;
  /** Tipo preseleccionado al abrir el modal */
  defaultType: Exclude<StockMovementType, "ajuste">;
  onClose: () => void;
}

const REASONS: Record<"entrada" | "salida", string[]> = {
  entrada: ["Compra a proveedor", "Devolución de cliente", "Regalo / muestrario", "Corrección de compra"],
  salida: ["Consumo interno", "Usado en citas", "Venta a cliente", "Producto caducado", "Rotura / deterioro"],
};

export default function MovementModal({ product, defaultType, onClose }: Props) {
  const { addStockMovement } = useStore();
  const { toast } = useUI();

  const [type, setType] = useState<"entrada" | "salida">(defaultType);
  const [qty, setQty] = useState("1");
  const [reason, setReason] = useState(REASONS[defaultType][0]);
  const [customReason, setCustomReason] = useState("");
  const [error, setError] = useState("");

  const qtyNum = Math.max(0, Math.round(parseFloat(qty.replace(",", ".")) || 0));
  const resultStock = useMemo(() => {
    if (type === "entrada") return product.stock + qtyNum;
    return product.stock - qtyNum;
  }, [product.stock, qtyNum, type]);

  const insufficient = type === "salida" && qtyNum > product.stock;
  const tooMuch = qtyNum <= 0;

  function save() {
    if (tooMuch) {
      setError("Indica una cantidad mayor que cero.");
      return;
    }
    if (insufficient) {
      setError(
        `Solo quedan ${product.stock} ${product.stock === 1 ? "unidad" : "unidades"} de este producto. No puedes retirar ${qtyNum}.`
      );
      return;
    }
    const finalReason = reason === "Otro motivo" ? customReason.trim() : reason;
    const mv = addStockMovement(product.id, type, qtyNum, finalReason || (type === "entrada" ? "Entrada de stock" : "Salida de stock"));
    if (!mv) {
      setError("No se pudo registrar el movimiento. Inténtalo de nuevo.");
      return;
    }
    toast(
      type === "entrada"
        ? `Entrada registrada: +${qtyNum} uds de ${product.name.split(" ").slice(0, 3).join(" ")}`
        : `Salida registrada: −${qtyNum} uds de ${product.name.split(" ").slice(0, 3).join(" ")}`,
      "ok"
    );
    onClose();
  }

  return (
    <Modal
      title={type === "entrada" ? "Entrada de stock" : "Salida de stock"}
      subtitle={product.name}
      onClose={onClose}
      z={60}
      maxW="max-w-md"
    >
      <div className="space-y-4">
        {/* selector de tipo */}
        <div className="grid grid-cols-2 gap-2">
          {(["entrada", "salida"] as const).map((t) => {
            const active = type === t;
            const isIn = t === "entrada";
            return (
              <button
                key={t}
                onClick={() => {
                  setType(t);
                  setReason(REASONS[t][0]);
                  setCustomReason("");
                  setError("");
                }}
                className={`flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-sm font-bold transition-all ${
                  active
                    ? isIn
                      ? "border-okfg/50 bg-oksoft text-okfg shadow-sm"
                      : "border-danger/40 bg-dangersoft text-danger shadow-sm"
                    : "border-linedark text-soft hover:bg-mint/60"
                }`}
              >
                {isIn ? <IcStockIn size={15} /> : <IcStockOut size={15} />}
                {isIn ? "Entrada" : "Salida"}
              </button>
            );
          })}
        </div>

        {/* resumen del producto */}
        <div className="flex items-center justify-between rounded-lg bg-paper/80 border border-line px-3 py-2.5 text-sm">
          <span className="text-soft">Stock actual</span>
          <span className="font-display font-bold num text-pine">{product.stock} uds</span>
        </div>

        <Field label="Cantidad *">
          <input
            className={`${inputCls} text-lg font-bold num text-center`}
            value={qty}
            autoFocus
            inputMode="numeric"
            onChange={(e) => {
              setQty(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && save()}
          />
          <div className="flex gap-1.5 mt-2">
            {[1, 2, 3, 5, 10].map((n) => (
              <button
                key={n}
                onClick={() => setQty(String(n))}
                className="flex-1 rounded-md border border-linedark bg-white/60 py-1 text-[11px] font-bold num text-soft hover:bg-mint hover:text-ink transition-colors"
              >
                {n}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Motivo">
          <select
            className={inputCls}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            {REASONS[type].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
            <option value="Otro motivo">Otro motivo…</option>
          </select>
        </Field>
        {reason === "Otro motivo" && (
          <Field label="Describe el motivo">
            <input
              className={inputCls}
              value={customReason}
              onChange={(e) => setCustomReason(e.target.value)}
              placeholder="p. ej. Regalo para la familia de…" 
              onKeyDown={(e) => e.key === "Enter" && save()}
            />
          </Field>
        )}

        {/* previsualización del resultado */}
        <div
          className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-sm anim-fade ${
            insufficient
              ? "border-danger/40 bg-dangersoft"
              : "border-line bg-mint/50"
          }`}
        >
          <span className="text-soft">Stock tras el movimiento</span>
          <span
            className={`font-display font-bold num ${
              insufficient ? "text-danger" : "text-pine"
            }`}
          >
            {resultStock} uds
          </span>
        </div>

        {error && (
          <p className="text-xs font-medium text-danger bg-dangersoft border border-danger/20 rounded-lg px-3 py-2 anim-fade">
            {error}
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
            onClick={save}
            disabled={insufficient || tooMuch}
            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-paper active:scale-[0.98] transition-all shadow-sm disabled:opacity-50 disabled:active:scale-100 ${
              type === "entrada"
                ? "bg-moss hover:bg-pine2"
                : "bg-danger hover:bg-[#8c2537]"
            }`}
          >
            {type === "entrada" ? "Registrar entrada" : "Registrar salida"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
