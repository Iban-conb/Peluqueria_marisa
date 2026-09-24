"use client";

import { useMemo, useState } from "react";
import type { Product, ProductCategory, StockMovement } from "../lib/types";
import { PRODUCT_CATEGORIES } from "../lib/types";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import ProductModal from "../components/product-modal";
import MovementModal from "../components/movement-modal";
import {
  IcAlert,
  IcBox,
  IcHistory,
  IcPencil,
  IcPlus,
  IcSearch,
  IcStockIn,
  IcStockOut,
  IcTrash,
  IcX,
} from "../components/icons";

type StockState = "ok" | "bajo" | "agotado";

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

function stockState(p: Product): StockState {
  if (p.stock <= 0) return "agotado";
  if (p.stock <= p.minStock) return "bajo";
  return "ok";
}

const STATE_META: Record<StockState, { label: string; fg: string; bg: string }> = {
  ok: { label: "En stock", fg: "#5a8a4a", bg: "#e1eed8" },
  bajo: { label: "Stock bajo", fg: "#a16207", bg: "#f7ecd2" },
  agotado: { label: "Agotado", fg: "#9c2b3e", bg: "#f8dde2" },
};

const MOVEMENT_META: Record<
  StockMovement["type"],
  { label: string; fg: string; bg: string; sign: string }
> = {
  entrada: { label: "Entrada", fg: "#5a8a4a", bg: "#e1eed8", sign: "+" },
  salida: { label: "Salida", fg: "#9c2b3e", bg: "#f8dde2", sign: "−" },
  ajuste: { label: "Ajuste", fg: "#a16207", bg: "#f7ecd2", sign: "±" },
};

function fmtWhen(iso: string): string {
  const d = new Date(iso);
  const day = d.toLocaleDateString("es-ES", { day: "numeric", month: "short" });
  const time = d.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${day} · ${time}`;
}

export default function WarehouseView() {
  const { db, deleteProduct, productById } = useStore();
  const { toast, confirm } = useUI();

  const [q, setQ] = useState("");
  const [cat, setCat] = useState<ProductCategory | "todas">("todas");
  const [onlyAlerts, setOnlyAlerts] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [creating, setCreating] = useState(false);
  const [moving, setMoving] = useState<{
    product: Product;
    type: "entrada" | "salida";
  } | null>(null);

  const products = db.products;

  const stats = useMemo(() => {
    let total = 0;
    let value = 0;
    let low = 0;
    let out = 0;
    for (const p of products) {
      total++;
      value += p.stock * p.cost;
      const s = stockState(p);
      if (s === "bajo") low++;
      if (s === "agotado") out++;
    }
    return { total, value, low, out };
  }, [products]);

  const lowProducts = useMemo(
    () => products.filter((p) => stockState(p) !== "ok").sort((a, b) => a.stock - b.stock),
    [products]
  );

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products
      .filter((p) => {
        if (cat !== "todas" && p.category !== cat) return false;
        if (onlyAlerts && stockState(p) === "ok") return false;
        if (!term) return true;
        const hay = `${p.name} ${p.brand} ${p.sku} ${p.supplier} ${PRODUCT_CATEGORIES[p.category].label}`.toLowerCase();
        return hay.includes(term);
      })
      .sort((a, b) => {
        // agotados y bajos primero, luego alfabético
        const rank = { agotado: 0, bajo: 1, ok: 2 } as const;
        const r = rank[stockState(a)] - rank[stockState(b)];
        if (r !== 0) return r;
        return a.name.localeCompare(b.name, "es");
      });
  }, [products, q, cat, onlyAlerts]);

  const recentMovements = useMemo(
    () =>
      [...db.movements]
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 14),
    [db.movements]
  );

  async function removeProduct(p: Product) {
    const n = db.movements.filter((m) => m.productId === p.id).length;
    const ok = await confirm({
      title: "Eliminar producto",
      message: n
        ? `Se eliminará «${p.name}» y sus ${n} ${n === 1 ? "movimiento registrado" : "movimientos registrados"}. ¿Continuar?`
        : `¿Seguro que quieres eliminar «${p.name}» del almacén?`,
      confirmLabel: "Eliminar",
      danger: true,
    });
    if (!ok) return;
    deleteProduct(p.id);
    toast("Producto eliminado", "info");
  }

  const categoryKeys = Object.keys(PRODUCT_CATEGORIES) as ProductCategory[];
  const activeFilters = (cat !== "todas" ? 1 : 0) + (onlyAlerts ? 1 : 0);

  return (
    <div className="space-y-4">
      {/* cabecera */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="min-w-0 flex-1">
          <h1 className="font-display font-extrabold text-2xl sm:text-[28px] leading-tight text-ink">
            Almacén
          </h1>
          <p className="text-sm text-soft mt-0.5">
            {products.length}{" "}
            {products.length === 1 ? "producto" : "productos"} · inventario
            valorado en {eur.format(stats.value)}
          </p>
        </div>
        <div className="relative w-full sm:w-72 order-3 sm:order-none">
          <IcSearch
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-faint"
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar producto, marca, proveedor…"
            className="w-full rounded-lg border border-linedark bg-card pl-9 pr-9 py-2 text-sm outline-none focus:border-moss focus:ring-2 focus:ring-moss/25 transition-shadow placeholder:text-faint shadow-sm"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-faint hover:text-ink"
              aria-label="Limpiar búsqueda"
            >
              <IcX size={14} />
            </button>
          )}
        </div>
        <button
          onClick={() => setCreating(true)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-3.5 py-2 text-xs font-bold hover:bg-pine2 active:scale-[0.98] transition-all shadow-sm"
        >
          <IcPlus size={15} /> Nuevo producto
        </button>
      </div>

      {/* cifras del almacén */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          {
            v: String(stats.total),
            l: "referencias",
            fg: "text-pine",
            bg: "bg-card",
            icon: <IcBox size={16} />,
          },
          {
            v: eur.format(stats.value),
            l: "valor a coste",
            fg: "text-pine",
            bg: "bg-card",
            icon: <span className="text-sm font-bold num">€</span>,
          },
          {
            v: String(stats.low),
            l: "con stock bajo",
            fg: stats.low ? "text-warnfg" : "text-soft",
            bg: "bg-card",
            icon: <IcAlert size={16} />,
          },
          {
            v: String(stats.out),
            l: "agotados",
            fg: stats.out ? "text-danger" : "text-soft",
            bg: "bg-card",
            icon: <IcX size={16} />,
          },
        ].map((c) => (
          <div
            key={c.l}
            className={`rounded-xl border border-line ${c.bg} shadow-sm px-4 py-3 flex items-center gap-3`}
          >
            <span
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                stats.low && c.l === "con stock bajo"
                  ? "bg-warnsoft text-warnfg"
                  : stats.out && c.l === "agotados"
                  ? "bg-dangersoft text-danger"
                  : "bg-mint text-moss"
              }`}
            >
              {c.icon}
            </span>
            <span className="min-w-0">
              <span
                className={`block font-display font-bold text-lg leading-none num truncate ${c.fg}`}
              >
                {c.v}
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-faint mt-1">
                {c.l}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* aviso de reposición */}
      {stats.low + stats.out > 0 && (
        <button
          onClick={() => setOnlyAlerts((v) => !v)}
          className={`w-full flex items-center gap-2.5 rounded-xl border px-4 py-3 text-left transition-all hover:shadow-sm ${
            onlyAlerts
              ? "border-moss/50 bg-mint/70 ring-1 ring-moss/30"
              : "border-warnsoft bg-warnsoft/60 hover:bg-warnsoft"
          }`}
        >
          <span className="w-8 h-8 rounded-lg bg-warnsoft text-warnfg border border-warnfg/20 flex items-center justify-center shrink-0">
            <IcAlert size={15} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-bold text-ink">
              {stats.out
                ? `${stats.out} ${stats.out === 1 ? "producto agotado" : "productos agotados"}`
                : `${stats.low} ${stats.low === 1 ? "producto" : "productos"} con stock bajo`}
              {stats.low > 0 && stats.out > 0 && ` y ${stats.low} con stock bajo`}
              — toca para revisarlos
            </span>
            <span className="block text-xs text-soft mt-0.5">
              Revisa las existencias y prepara el pedido al proveedor.
            </span>
          </span>
        </button>
      )}

      {/* filtros de categoría */}
      <div className="flex flex-wrap items-center gap-1.5">
        <button
          onClick={() => {
            setCat("todas");
            setOnlyAlerts(false);
          }}
          className={`rounded-full px-3 py-1.5 text-[11px] font-bold transition-colors ${
            !activeFilters
              ? "bg-pine text-paper shadow-sm"
              : "bg-card border border-linedark text-soft hover:bg-mint/60"
          }`}
        >
          Todos
        </button>
        {categoryKeys.map((k) => (
          <button
            key={k}
            onClick={() => setCat(cat === k ? "todas" : k)}
            className={`rounded-full px-3 py-1.5 text-[11px] font-bold transition-colors ${
              cat === k
                ? "bg-pine text-paper shadow-sm"
                : "bg-card border border-linedark text-soft hover:bg-mint/60"
            }`}
          >
            {PRODUCT_CATEGORIES[k].label}
          </button>
        ))}
        {activeFilters > 0 && (
          <button
            onClick={() => {
              setCat("todas");
              setOnlyAlerts(false);
            }}
            className="inline-flex items-center gap-1 rounded-full bg-mint text-moss px-2.5 py-1.5 text-[11px] font-bold hover:bg-moss/15 transition-colors"
          >
            <IcX size={11} /> Quitar filtros
          </button>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-5 items-start">
        {/* listado de productos */}
        <div className="lg:col-span-2 min-w-0 space-y-2">
          {filtered.length === 0 && products.length === 0 && (
            <div className="rounded-xl border border-dashed border-linedark bg-card/60 py-16 text-center anim-rise">
              <span className="inline-flex w-14 h-14 rounded-full bg-mint text-moss items-center justify-center mb-3">
                <IcBox size={26} />
              </span>
              <p className="font-display font-bold text-lg text-ink">
                El almacén está vacío
              </p>
              <p className="text-sm text-soft mb-4">
                Da de alta tintes, cosmética y consumibles para controlar el
                stock del salón.
              </p>
              <button
                onClick={() => setCreating(true)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-pine text-paper px-4 py-2.5 text-sm font-semibold hover:bg-pine2 transition-colors shadow-sm"
              >
                <IcPlus size={16} /> Añadir producto
              </button>
            </div>
          )}
          {filtered.length === 0 && products.length > 0 && (
            <div className="rounded-xl border border-dashed border-linedark bg-card/60 py-12 text-center anim-fade">
              <p className="font-display font-bold text-ink">
                Sin resultados para «{q}»
              </p>
              <p className="text-sm text-soft">
                Prueba con otro nombre, marca o categoría.
              </p>
            </div>
          )}
          {filtered.map((p, i) => {
            const st = stockState(p);
            const meta = STATE_META[st];
            const catMeta = PRODUCT_CATEGORIES[p.category];
            const hasSalePrice = p.price > 0;
            return (
              <div
                key={p.id}
                className={`anim-rise rounded-xl border p-3.5 bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-px ${
                  st === "agotado"
                    ? "border-danger/30"
                    : st === "bajo"
                    ? "border-warnfg/30"
                    : "border-line"
                }`}
                style={{ animationDelay: `${Math.min(i, 10) * 40}ms` }}
              >
                <div className="flex items-start gap-3">
                  {/* caja */}
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: catMeta.bg, color: catMeta.fg }}
                  >
                    <IcBox size={19} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-ink truncate leading-tight">
                      {p.name}
                      {p.brand && (
                        <span className="text-soft font-normal"> · {p.brand}</span>
                      )}
                    </p>
                    <p className="text-[11px] text-soft mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                        style={{ color: catMeta.fg, background: catMeta.bg }}
                      >
                        {catMeta.label}
                      </span>
                      {p.sku && <span className="num">ref. {p.sku}</span>}
                      {p.supplier && <span>{p.supplier}</span>}
                    </p>
                    <p className="text-[11px] mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 num">
                      {p.cost > 0 && (
                        <span className="text-faint">
                          coste {eur.format(p.cost)}
                        </span>
                      )}
                      {hasSalePrice && (
                        <span className="font-bold text-moss">
                          venta {eur.format(p.price)}
                        </span>
                      )}
                      {p.notes && (
                        <span className="text-faint not-italic italic">
                          {p.notes}
                        </span>
                      )}
                    </p>
                  </div>

                  {/* stock + acciones */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold num leading-none"
                      style={{ color: meta.fg, background: meta.bg }}
                    >
                      {p.stock} uds · {meta.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setMoving({ product: p, type: "entrada" })}
                        className="inline-flex items-center gap-1 rounded-lg bg-oksoft text-okfg border border-okfg/30 px-2.5 py-1.5 text-[11px] font-bold hover:bg-okfg/15 transition-colors"
                        title="Registrar entrada de stock"
                      >
                        <IcStockIn size={13} /> Entrada
                      </button>
                      <button
                        onClick={() => setMoving({ product: p, type: "salida" })}
                        className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition-colors ${
                          p.stock > 0
                            ? "bg-dangersoft text-danger border-danger/30 hover:bg-danger/15"
                            : "bg-paper/60 text-faint border-linedark cursor-not-allowed"
                        }`}
                        disabled={p.stock <= 0}
                        title={
                          p.stock > 0
                            ? "Registrar salida de stock"
                            : "Sin stock disponible"
                        }
                      >
                        <IcStockOut size={13} /> Salida
                      </button>
                      <button
                        onClick={() => setEditing(p)}
                        className="p-1.5 rounded-lg text-soft hover:text-ink hover:bg-mint transition-colors"
                        title="Editar producto"
                      >
                        <IcPencil size={14} />
                      </button>
                      <button
                        onClick={() => removeProduct(p)}
                        className="p-1.5 rounded-lg text-soft hover:text-danger hover:bg-dangersoft transition-colors"
                        title="Eliminar producto"
                      >
                        <IcTrash size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* panel lateral: movimientos */}
        <div className="space-y-3 min-w-0">
          <div className="rounded-xl border border-line bg-card shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 bg-pine px-4 py-3">
              <span className="w-7 h-7 rounded-lg bg-moss/40 text-paper flex items-center justify-center">
                <IcHistory size={15} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold text-paper leading-tight">
                  Últimos movimientos
                </p>
                <p className="text-[10px] text-paper/60">
                  {db.movements.length}{" "}
                  {db.movements.length === 1
                    ? "registro"
                    : "registros"}{" "}
                  en total
                </p>
              </div>
            </div>
            <div className="max-h-[420px] overflow-y-auto p-2.5 space-y-1">
              {recentMovements.length === 0 && (
                <p className="text-xs text-soft text-center py-6">
                  Todavía no hay movimientos registrados.
                  <br />
                  Registra entradas y salidas para llevar el historial.
                </p>
              )}
              {recentMovements.map((m) => {
                const p = productById(m.productId);
                const mm = MOVEMENT_META[m.type];
                return (
                  <div
                    key={m.id}
                    className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-mint/50 transition-colors"
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-bold"
                      style={{ color: mm.fg, background: mm.bg }}
                    >
                      {mm.sign}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold text-ink truncate">
                        {p?.name ?? "Producto eliminado"}
                      </span>
                      <span className="block text-[10px] text-faint truncate">
                        {m.reason || mm.label} · {fmtWhen(m.date)}
                      </span>
                    </span>
                    <span
                      className="text-[11px] font-bold num shrink-0 rounded-full px-2 py-0.5"
                      style={{ color: mm.fg, background: mm.bg }}
                    >
                      {mm.sign}
                      {m.qty} uds
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* panel de reposición */}
          {lowProducts.length > 0 && (
            <div className="rounded-xl border border-warnfg/25 bg-card shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-warnsoft/70 flex items-center gap-2">
                <IcAlert size={15} className="text-warnfg" />
                <p className="text-xs font-bold text-warnfg">
                  Lista de compra sugerida
                </p>
              </div>
              <div className="p-2.5 space-y-1">
                {lowProducts.slice(0, 8).map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-mint/50 transition-colors"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold text-ink truncate">
                        {p.name}
                      </span>
                      {p.supplier && (
                        <span className="block text-[10px] text-faint">
                          {p.supplier}
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] font-bold num text-warnfg bg-warnsoft rounded-full px-2 py-0.5 shrink-0">
                      quedan {p.stock} / mín. {p.minStock}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* modales */}
      {creating && (
        <ProductModal
          preset={null}
          onClose={() => setCreating(false)}
        />
      )}
      {editing && (
        <ProductModal preset={editing} onClose={() => setEditing(null)} />
      )}
      {moving && (
        <MovementModal
          product={moving.product}
          defaultType={moving.type}
          onClose={() => setMoving(null)}
        />
      )}
    </div>
  );
}
