"use client";

import { useState } from "react";
import type { Product, ProductCategory } from "../lib/types";
import { PRODUCT_CATEGORIES } from "../lib/types";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import Modal, { Field, inputCls } from "./aura-modal";

interface Props {
  preset: Product | null;
  onSaved?: (id: string) => void;
  onClose: () => void;
}

const CATEGORY_KEYS = Object.keys(PRODUCT_CATEGORIES) as ProductCategory[];

/** Acepta coma decimal («8,50») y punto («8.50»). */
function parseNum(v: string): number {
  const n = parseFloat(v.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

export default function ProductModal({ preset, onSaved, onClose }: Props) {
  const { addProduct, updateProduct } = useStore();
  const { toast } = useUI();

  const [name, setName] = useState(preset?.name ?? "");
  const [brand, setBrand] = useState(preset?.brand ?? "");
  const [category, setCategory] = useState<ProductCategory>(
    preset?.category ?? "cosmetica"
  );
  const [sku, setSku] = useState(preset?.sku ?? "");
  const [minStock, setMinStock] = useState(
    preset ? String(preset.minStock) : "2"
  );
  const [cost, setCost] = useState(preset ? String(preset.cost) : "");
  const [price, setPrice] = useState(
    preset && preset.price > 0 ? String(preset.price) : ""
  );
  const [supplier, setSupplier] = useState(preset?.supplier ?? "");
  const [notes, setNotes] = useState(preset?.notes ?? "");
  // Solo editable al crear; al editar el stock se gestiona con movimientos
  const [initialStock, setInitialStock] = useState("0");
  const [error, setError] = useState("");

  function save() {
    if (!name.trim()) {
      setError("El nombre del producto es obligatorio.");
      return;
    }
    const min = Math.max(0, Math.round(parseNum(minStock)));
    const costNum = parseNum(cost);
    const priceNum = parseNum(price);
    const data = {
      name: name.trim(),
      brand: brand.trim(),
      category,
      sku: sku.trim(),
      minStock: min,
      cost: costNum,
      price: priceNum,
      supplier: supplier.trim(),
      notes: notes.trim(),
    };

    if (preset) {
      updateProduct(preset.id, data);
      toast("Producto actualizado");
      onSaved?.(preset.id);
    } else {
      const stock = Math.max(0, Math.round(parseNum(initialStock)));
      const p = addProduct({ ...data, stock });
      toast(`Producto añadido: ${p.name.split(" ").slice(0, 3).join(" ")}`);
      onSaved?.(p.id);
    }
    onClose();
  }

  return (
    <Modal
      title={preset ? "Editar producto" : "Nuevo producto"}
      subtitle={
        preset
          ? "Los datos se actualizan en el almacén"
          : "Ficha del producto del salón"
      }
      onClose={onClose}
      z={60}
    >
      <div className="space-y-4">
        <Field label="Nombre del producto *">
          <input
            className={inputCls}
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="p. ej. Tinte nº 5 castaño chocolate"
            onKeyDown={(e) => e.key === "Enter" && save()}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Marca">
            <input
              className={inputCls}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="p. ej. L'Oréal"
              onKeyDown={(e) => e.key === "Enter" && save()}
            />
          </Field>
          <Field label="Referencia">
            <input
              className={inputCls}
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="p. ej. COL-005"
              onKeyDown={(e) => e.key === "Enter" && save()}
            />
          </Field>
        </div>
        <Field label="Categoría">
          <select
            className={inputCls}
            value={category}
            onChange={(e) => setCategory(e.target.value as ProductCategory)}
          >
            {CATEGORY_KEYS.map((k) => (
              <option key={k} value={k}>
                {PRODUCT_CATEGORIES[k].label}
              </option>
            ))}
          </select>
        </Field>

        {preset ? (
          <div className="flex items-center gap-2.5 rounded-lg bg-mint/60 border border-line px-3 py-2.5 anim-fade">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-soft">
              Stock actual
            </span>
            <span className="font-display font-bold num text-sm text-pine">
              {preset.stock} uds
            </span>
            <span className="text-[11px] text-soft leading-snug">
              — se modifica con entradas y salidas, no editando la ficha
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <Field label="Stock inicial" hint="Se registra como entrada">
              <input
                className={inputCls}
                value={initialStock}
                onChange={(e) => setInitialStock(e.target.value)}
                placeholder="0"
                inputMode="numeric"
                onKeyDown={(e) => e.key === "Enter" && save()}
              />
            </Field>
            <Field
              label="Aviso de stock bajo"
              hint="Unidades mínimas antes de avisar"
            >
              <input
                className={inputCls}
                value={minStock}
                onChange={(e) => setMinStock(e.target.value)}
                placeholder="2"
                inputMode="numeric"
                onKeyDown={(e) => e.key === "Enter" && save()}
              />
            </Field>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <Field label="Coste por unidad (€)">
            <input
              className={inputCls}
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="p. ej. 8,50"
              inputMode="decimal"
              onKeyDown={(e) => e.key === "Enter" && save()}
            />
          </Field>
          <Field label="Precio de venta (€)" hint="Vacío si es de uso interno">
            <input
              className={inputCls}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="p. ej. 22"
              inputMode="decimal"
              onKeyDown={(e) => e.key === "Enter" && save()}
            />
          </Field>
        </div>
        <Field label="Proveedor">
          <input
            className={inputCls}
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="p. ej. Peluter"
            onKeyDown={(e) => e.key === "Enter" && save()}
          />
        </Field>
        <Field label="Notas">
          <textarea
            className={`${inputCls} min-h-[64px] resize-none`}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Observaciones sobre el producto…"
          />
        </Field>

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
            className="flex-1 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm"
          >
            {preset ? "Guardar cambios" : "Añadir producto"}
          </button>
        </div>
      </div>
    </Modal>
  );
}
