"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { Product, StockMovement } from "../lib/types";
import { categoryById } from "../lib/types";
import { useStore } from "../state/store";
import { useUI } from "../state/ui";
import ProductModal from "../components/product-modal";
import MovementModal from "../components/movement-modal";
import StockImportModal from "../components/stock-import-modal";
import CategoryManagerModal from "../components/category-manager-modal";
import { exportStockXlsx } from "../lib/stock-xlsx";
import { exportStockPdf } from "../lib/stock-pdf";
import {
  IcAlert,
  IcBox,
  IcCart,
  IcCopy,
  IcCog,
  IcDownload,
  IcFileText,
  IcHistory,
  IcMinus,
  IcPencil,
  IcPlus,
  IcSearch,
  IcStockIn,
  IcStockOut,
  IcTrash,
  IcUpload,
  IcX,
} from "../components/icons";

type StockState = "ok" | "bajo" | "agotado";
type EstadoFiltro = "todos" | "alertas" | "agotados";

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

/** Unidades sugeridas para pedir de un producto con stock bajo. */
function sugerido(p: Product): number {
  return Math.max(1, p.minStock - p.stock);
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
  const {
    db,
    deleteProduct,
    productById,
    addStockMovement,
    undoStockMovement,
    movementsOf,
  } = useStore();
  const { toast, confirm } = useUI();

  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | "todas">("todas");
  const [estado, setEstado] = useState<EstadoFiltro>("todos");
  const [editing, setEditing] = useState<Product | null>(null);
  const [creating, setCreating] = useState(false);
  const [moving, setMoving] = useState<{
    product: Product;
    type: "entrada" | "salida";
    qty?: number;
  } | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);
  const [managingCats, setManagingCats] = useState(false);

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
    () =>
      products
        .filter((p) => stockState(p) !== "ok")
        .sort((a, b) => {
          const rank = { agotado: 0, bajo: 1 } as const;
          const r = rank[stockState(a)] - rank[stockState(b)];
          if (r !== 0) return r;
          return a.name.localeCompare(b.name, "es");
        }),
    [products]
  );

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    const cats = db.productCategories;
    return products
      .filter((p) => {
        if (cat !== "todas" && p.category !== cat) return false;
        const s = stockState(p);
        if (estado === "alertas" && s === "ok") return false;
        if (estado === "agotados" && s !== "agotado") return false;
        if (!term) return true;
        const hay = `${p.name} ${p.brand} ${p.sku} ${p.supplier} ${categoryById(cats, p.category).name}`.toLowerCase();
        return hay.includes(term);
      })
      .sort((a, b) => {
        // agotados y bajos primero, luego alfabético
        const rank = { agotado: 0, bajo: 1, ok: 2 } as const;
        const r = rank[stockState(a)] - rank[stockState(b)];
        if (r !== 0) return r;
        return a.name.localeCompare(b.name, "es");
      });
  }, [products, q, cat, estado, db.productCategories]);

  const recentMovements = useMemo(
    () =>
      [...db.movements]
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 14),
    [db.movements]
  );

  /** Ajuste rápido ±1 desde la tarjeta: un toque, sin formulario. */
  function quickAdjust(p: Product, type: "entrada" | "salida") {
    const mv = addStockMovement(
      p.id,
      type,
      1,
      type === "entrada" ? "Reposición rápida" : "Consumo interno"
    );
    if (!mv) {
      toast(
        type === "salida"
          ? `Sin stock de «${p.name}».`
          : "No se pudo registrar el movimiento.",
        "err"
      );
      return;
    }
    toast(
      type === "entrada"
        ? `Entrada rápida: +1 ud de ${p.name}`
        : `Salida rápida: −1 ud de ${p.name}`,
      "ok",
      {
        label: "Deshacer",
        run: () => {
          if (undoStockMovement(mv.id)) toast("Movimiento deshecho", "info");
          else toast("No se puede deshacer: el stock ya cambió", "err");
        },
      }
    );
  }

  /** Repone TODOS los productos bajos/agotados hasta su mínimo. */
  async function reponerTodo() {
    const targets = lowProducts.filter((p) => p.minStock - p.stock > 0);
    if (!targets.length) {
      toast("No hay nada pendiente de reponer", "info");
      return;
    }
    const totalUds = targets.reduce((s, p) => s + (p.minStock - p.stock), 0);
    const ok = await confirm({
      title: "Reponer almacén",
      message: `Se registrarán entradas de ${totalUds} ${totalUds === 1 ? "unidad" : "unidades"} repartidas entre ${targets.length} ${targets.length === 1 ? "producto" : "productos"} hasta alcanzar su stock mínimo. ¿Continuar?`,
      confirmLabel: "Reponer todo",
    });
    if (!ok) return;
    const ids: string[] = [];
    let added = 0;
    for (const p of targets) {
      const mv = addStockMovement(
        p.id,
        "entrada",
        p.minStock - p.stock,
        "Reposición de almacén"
      );
      if (mv) {
        ids.push(mv.id);
        added += mv.qty;
      }
    }
    if (!added) {
      toast("No se pudo registrar la reposición", "err");
      return;
    }
    toast(
      `Almacén repuesto: +${added} uds en ${ids.length} ${ids.length === 1 ? "producto" : "productos"}`,
      "ok",
      {
        label: "Deshacer",
        run: () => {
          let n = 0;
          for (const id of ids) if (undoStockMovement(id)) n++;
          toast(
            n
              ? `${n} ${n === 1 ? "movimiento deshecho" : "movimientos deshechos"}`
              : "No se pudo deshacer: el stock ya cambió",
            n ? "info" : "err"
          );
        },
      }
    );
  }

  /** Copia la lista de compra al portapapeles para enviarla al proveedor. */
  async function copiarPedido() {
    if (!lowProducts.length) return;
    const lineas = lowProducts.map(
      (p) =>
        `· ${sugerido(p)} uds · ${p.name}${p.brand ? ` (${p.brand})` : ""}${
          p.supplier ? ` — ${p.supplier}` : ""
        }`
    );
    const texto = `Pedido Peluquería Marisa — ${new Date().toLocaleDateString(
      "es-ES",
      { day: "numeric", month: "long", year: "numeric" }
    )}\n${lineas.join("\n")}`;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(texto);
      } else {
        // Fallback para contextos no seguros (p. ej. HTTP en red local)
        const ta = document.createElement("textarea");
        ta.value = texto;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      toast("Lista de compra copiada al portapapeles", "ok");
    } catch {
      toast("No se pudo copiar automáticamente", "err");
    }
  }

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
    if (expanded === p.id) setExpanded(null);
    toast("Producto eliminado", "info");
  }

  /** Descarga el inventario en Excel. */
  function doExportXlsx() {
    if (!products.length) {
      toast("No hay productos que exportar", "info");
      return;
    }
    exportStockXlsx(products, categories);
    toast("Excel de inventario descargado", "ok");
  }

  /** Descarga el informe del inventario en PDF. */
  async function doExportPdf() {
    if (!products.length) {
      toast("No hay productos que imprimir", "info");
      return;
    }
    try {
      await exportStockPdf(products, db.salon, categories);
      toast("PDF del inventario descargado", "ok");
    } catch {
      toast("No se pudo generar el PDF", "err");
    }
  }

  const categories = db.productCategories;
  const activeFilters =
    (cat !== "todas" ? 1 : 0) + (estado !== "todos" ? 1 : 0);

  const estadoChips: { key: EstadoFiltro; label: string; icon?: ReactNode }[] = [
    { key: "todos", label: "Todos" },
    {
      key: "alertas",
      label: "Reponer",
      icon: <IcAlert size={11} />,
    },
    { key: "agotados", label: "Agotados", icon: <IcX size={11} /> },
  ];

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
        <div className="flex items-center gap-1.5 order-2 sm:order-none">
          <button
            onClick={doExportXlsx}
            className="inline-flex items-center gap-1.5 rounded-lg border border-linedark bg-card px-2.5 py-2 text-xs font-bold text-soft hover:bg-mint hover:text-ink active:scale-[0.98] transition-all shadow-sm"
            title="Descargar el inventario en Excel (.xlsx)"
          >
            <IcFileText size={15} /> <span className="hidden md:inline">Excel</span>
          </button>
          <button
            onClick={doExportPdf}
            className="inline-flex items-center gap-1.5 rounded-lg border border-linedark bg-card px-2.5 py-2 text-xs font-bold text-soft hover:bg-mint hover:text-ink active:scale-[0.98] transition-all shadow-sm"
            title="Imprimir el inventario en PDF"
          >
            <IcDownload size={15} /> <span className="hidden md:inline">PDF</span>
          </button>
          <button
            onClick={() => setImporting(true)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-linedark bg-card px-2.5 py-2 text-xs font-bold text-soft hover:bg-mint hover:text-ink active:scale-[0.98] transition-all shadow-sm"
            title="Actualizar el stock desde un Excel"
          >
            <IcUpload size={15} /> <span className="hidden md:inline">Importar</span>
          </button>
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
          onClick={() => setEstado(estado === "alertas" ? "todos" : "alertas")}
          className={`w-full flex items-center gap-2.5 rounded-xl border px-4 py-3 text-left transition-all hover:shadow-sm ${
            estado === "alertas"
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

      {/* filtros: estado + categoría */}
      <div className="flex flex-wrap items-center gap-1.5">
        {estadoChips.map((ch) => {
          const active = estado === ch.key;
          return (
            <button
              key={ch.key}
              onClick={() => setEstado(active ? "todos" : ch.key)}
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-bold transition-colors ${
                active
                  ? "bg-pine text-paper shadow-sm"
                  : "bg-card border border-linedark text-soft hover:bg-mint/60"
              }`}
            >
              {ch.icon}
              {ch.label}
            </button>
          );
        })}
        <span className="w-px h-5 bg-linedark/60 mx-0.5" aria-hidden />
        {categories.map((k) => (
          <button
            key={k.id}
            onClick={() => setCat(cat === k.id ? "todas" : k.id)}
            className={`rounded-full px-3 py-1.5 text-[11px] font-bold transition-colors ${
              cat === k.id
                ? "text-paper shadow-sm"
                : "bg-card border border-linedark text-soft hover:bg-mint/60"
            }`}
            style={
              cat === k.id
                ? { background: k.fg, borderColor: k.fg }
                : undefined
            }
          >
            {k.name}
          </button>
        ))}
        <button
          onClick={() => setManagingCats(true)}
          className="inline-flex items-center gap-1 rounded-full border border-dashed border-linedark px-2.5 py-1.5 text-[11px] font-bold text-faint hover:text-ink hover:bg-mint transition-colors"
          title="Configurar las categorías del almacén"
        >
          <IcCog size={11} /> Categorías
        </button>
        {activeFilters > 0 && (
          <button
            onClick={() => {
              setCat("todas");
              setEstado("todos");
            }}
            className="inline-flex items-center gap-1 rounded-full bg-mint text-moss px-2.5 py-1.5 text-[11px] font-bold hover:bg-moss/15 transition-colors"
          >
            <IcX size={11} /> Quitar filtros
          </button>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-5 items-start">
        {/* listado de productos: tabla delimitada con buscador */}
        <div className="lg:col-span-2 min-w-0 rounded-xl border border-line bg-card shadow-sm overflow-hidden flex flex-col">
          {/* barra de la tabla: filtro de texto + contador */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-line bg-mint/30 shrink-0">
            <IcSearch size={15} className="text-faint shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filtrar por nombre, marca, referencia o proveedor…"
              className="flex-1 min-w-0 bg-transparent text-sm text-ink placeholder:text-faint outline-none"
              aria-label="Filtrar productos"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="text-faint hover:text-ink transition-colors shrink-0"
                aria-label="Limpiar filtro"
              >
                <IcX size={14} />
              </button>
            )}
            <span className="shrink-0 text-[11px] font-bold num text-faint bg-paper border border-line rounded-full px-2 py-0.5">
              {filtered.length}/{products.length}
            </span>
          </div>

          {/* cuerpo con scroll delimitado */}
          <div className="overflow-y-auto max-h-[62dvh] lg:max-h-[68dvh] p-2 space-y-2">
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
          {filtered.length === 0 && products.length > 0 && q && (
            <div className="rounded-xl border border-dashed border-linedark bg-card/60 py-12 text-center anim-fade">
              <p className="font-display font-bold text-ink">
                Sin resultados para «{q}»
              </p>
              <p className="text-sm text-soft">
                Prueba con otro nombre, marca o categoría.
              </p>
            </div>
          )}
          {filtered.length === 0 && products.length > 0 && !q && (
            <div className="rounded-xl border border-dashed border-linedark bg-card/60 py-12 text-center anim-fade">
              <p className="font-display font-bold text-ink">
                Nada que mostrar con estos filtros
              </p>
              <button
                onClick={() => {
                  setCat("todas");
                  setEstado("todos");
                  setQ("");
                }}
                className="mt-2 inline-flex items-center gap-1 rounded-lg bg-mint text-moss px-3 py-1.5 text-xs font-bold hover:bg-moss/15 transition-colors"
              >
                <IcX size={12} /> Quitar filtros
              </button>
            </div>
          )}
          {filtered.map((p, i) => {
            const st = stockState(p);
            const meta = STATE_META[st];
            const catMeta = categoryById(categories, p.category);
            const hasSalePrice = p.price > 0;
            const isOpen = expanded === p.id;
            const historial = isOpen ? movementsOf(p.id).slice(0, 6) : [];
            const pct =
              p.minStock > 0
                ? Math.min(
                    100,
                    Math.round((p.stock / Math.max(1, p.minStock * 2)) * 100)
                  )
                : null;
            return (
              <div
                key={p.id}
                className={`anim-rise rounded-xl border p-3.5 bg-card shadow-sm transition-all hover:shadow-md ${
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
                        {catMeta.name}
                      </span>
                      {p.sku && <span className="num">ref. {p.sku}</span>}
                      {p.supplier && <span>{p.supplier}</span>}
                    </p>
                    <p className="text-[11px] mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 num">
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
                    </p>
                  </div>

                  {/* control rápido de stock */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <div className="flex items-stretch rounded-lg border border-linedark bg-paper overflow-hidden shadow-sm">
                      <button
                        onClick={() => quickAdjust(p, "salida")}
                        disabled={p.stock <= 0}
                        className={`w-9 flex items-center justify-center transition-colors ${
                          p.stock > 0
                            ? "text-danger hover:bg-dangersoft active:bg-danger/20"
                            : "text-faint/50 cursor-not-allowed"
                        }`}
                        title={
                          p.stock > 0
                            ? "Consumir 1 unidad (salida rápida)"
                            : "Sin stock disponible"
                        }
                        aria-label={`Restar una unidad de ${p.name}`}
                      >
                        <IcMinus size={14} />
                      </button>
                      <span className="px-2 min-w-[54px] text-center flex flex-col justify-center border-x border-linedark/60 bg-card">
                        <span className="font-display font-bold num text-lg leading-none text-ink">
                          {p.stock}
                        </span>
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-faint mt-0.5">
                          uds
                        </span>
                      </span>
                      <button
                        onClick={() => quickAdjust(p, "entrada")}
                        className="w-9 flex items-center justify-center text-okfg hover:bg-oksoft active:bg-okfg/20 transition-colors"
                        title="Añadir 1 unidad (entrada rápida)"
                        aria-label={`Sumar una unidad de ${p.name}`}
                      >
                        <IcPlus size={14} />
                      </button>
                    </div>
                    <span
                      className="rounded-full px-2 py-0.5 text-[9px] font-bold num leading-none"
                      style={{ color: meta.fg, background: meta.bg }}
                    >
                      {meta.label}
                      {p.minStock > 0 && ` · mín. ${p.minStock}`}
                    </span>
                    {pct !== null && (
                      <span className="w-28 h-1.5 rounded-full bg-linedark/40 overflow-hidden block">
                        <span
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${pct}%`,
                            background:
                              st === "agotado"
                                ? "#9c2b3e"
                                : st === "bajo"
                                ? "#d9a23d"
                                : "#7ba05b",
                          }}
                        />
                      </span>
                    )}
                  </div>
                </div>

                {/* fila de acciones secundarias */}
                <div className="mt-2.5 pt-2 border-t border-line/70 flex items-center gap-1 flex-wrap">
                  <button
                    onClick={() => setMoving({ product: p, type: "entrada" })}
                    className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-[11px] font-bold text-okfg hover:bg-oksoft transition-colors"
                    title="Registrar entrada con cantidad y motivo"
                  >
                    <IcStockIn size={13} /> Entrada…
                  </button>
                  <button
                    onClick={() => setMoving({ product: p, type: "salida" })}
                    className={`inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-[11px] font-bold transition-colors ${
                      p.stock > 0
                        ? "text-danger hover:bg-dangersoft"
                        : "text-faint/60 cursor-not-allowed"
                    }`}
                    disabled={p.stock <= 0}
                    title="Registrar salida con cantidad y motivo"
                  >
                    <IcStockOut size={13} /> Salida…
                  </button>
                  <span className="flex-1" />
                  <button
                    onClick={() => setExpanded(isOpen ? null : p.id)}
                    className={`inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-[11px] font-bold transition-colors ${
                      isOpen
                        ? "bg-mint text-moss"
                        : "text-soft hover:text-ink hover:bg-mint"
                    }`}
                    title="Ver historial del producto"
                  >
                    <IcHistory size={13} /> Historial
                  </button>
                  <button
                    onClick={() => setEditing(p)}
                    className="p-1.5 rounded-md text-soft hover:text-ink hover:bg-mint transition-colors"
                    title="Editar producto"
                  >
                    <IcPencil size={14} />
                  </button>
                  <button
                    onClick={() => removeProduct(p)}
                    className="p-1.5 rounded-md text-soft hover:text-danger hover:bg-dangersoft transition-colors"
                    title="Eliminar producto"
                  >
                    <IcTrash size={14} />
                  </button>
                </div>

                {/* historial inline del producto */}
                {isOpen && (
                  <div className="mt-2 pt-2 border-t border-line/70 anim-fade">
                    <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-faint mb-1.5">
                      Últimos movimientos de este producto
                    </p>
                    {historial.length === 0 ? (
                      <p className="text-xs text-soft py-1">
                        Todavía no hay movimientos registrados.
                      </p>
                    ) : (
                      <div className="space-y-0.5">
                        {historial.map((m) => {
                          const mm = MOVEMENT_META[m.type];
                          return (
                            <div
                              key={m.id}
                              className="flex items-center gap-2 rounded-md px-1.5 py-1 hover:bg-mint/40 transition-colors"
                            >
                              <span
                                className="w-5 h-5 rounded flex items-center justify-center text-[11px] font-bold shrink-0"
                                style={{ color: mm.fg, background: mm.bg }}
                              >
                                {mm.sign}
                              </span>
                              <span className="min-w-0 flex-1 text-[11px] text-ink truncate">
                                {m.reason || mm.label}
                              </span>
                              <span className="text-[10px] text-faint shrink-0 num">
                                {fmtWhen(m.date)}
                              </span>
                              <span
                                className="text-[10px] font-bold num shrink-0 rounded-full px-1.5 py-0.5"
                                style={{ color: mm.fg, background: mm.bg }}
                              >
                                {mm.sign}
                                {m.qty}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          </div>{/* /cuerpo con scroll */}
        </div>

        {/* panel lateral */}
        <div className="space-y-3 min-w-0">
          {/* lista de compra accionable */}
          {lowProducts.length > 0 && (
            <div className="rounded-xl border border-warnfg/25 bg-card shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-warnsoft/70 flex items-center gap-2">
                <IcCart size={15} className="text-warnfg" />
                <p className="text-xs font-bold text-warnfg flex-1">
                  Lista de compra sugerida
                </p>
                <span className="text-[10px] font-bold text-warnfg bg-warnsoft rounded-full px-2 py-0.5 num">
                  {lowProducts.length}
                </span>
              </div>
              <div className="p-2.5 space-y-1">
                {lowProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-mint/50 transition-colors"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold text-ink truncate">
                        {p.name}
                      </span>
                      <span className="block text-[10px] text-faint">
                        {p.supplier
                          ? p.supplier
                          : `${stockState(p) === "agotado" ? "agotado" : "quedan"} ${p.stock} / mín. ${p.minStock}`}
                      </span>
                    </span>
                    <span className="text-[10px] font-bold num text-warnfg bg-warnsoft rounded-full px-2 py-0.5 shrink-0">
                      pedir {sugerido(p)}
                    </span>
                    <button
                      onClick={() =>
                        setMoving({
                          product: p,
                          type: "entrada",
                          qty: sugerido(p),
                        })
                      }
                      className="shrink-0 rounded-md border border-warnfg/30 bg-warnsoft text-warnfg px-2 py-1 text-[10px] font-bold hover:bg-warnfg/15 transition-colors"
                      title={`Registrar entrada de ${sugerido(p)} uds`}
                    >
                      Reponer
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-1.5 p-2.5 pt-0">
                <button
                  onClick={copiarPedido}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-linedark bg-card px-3 py-2 text-[11px] font-bold text-soft hover:bg-mint hover:text-ink transition-colors"
                >
                  <IcCopy size={13} /> Copiar pedido
                </button>
                <button
                  onClick={reponerTodo}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-warnfg text-paper px-3 py-2 text-[11px] font-bold hover:bg-[#8a5410] active:scale-[0.98] transition-all shadow-sm"
                >
                  <IcStockIn size={13} /> Reponer todo
                </button>
              </div>
            </div>
          )}

          {/* últimos movimientos */}
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
          defaultQty={moving.qty}
          onClose={() => setMoving(null)}
        />
      )}
      {importing && (
        <StockImportModal onClose={() => setImporting(false)} />
      )}
      {managingCats && (
        <CategoryManagerModal onClose={() => setManagingCats(false)} />
      )}
    </div>
  );
}
