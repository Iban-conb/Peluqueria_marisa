/**
 * Exportación e importación del almacén en Excel (.xlsx).
 *
 * - Exportar: libro con la hoja «Almacén» (una fila por producto) y una
 *   hoja «Léeme» con las instrucciones para actualizar el stock.
 * - Importar: lee el archivo, reconoce las columnas por su cabecera y
 *   empareja cada fila con el producto correspondiente por ID (columna
 *   ID del propio export) o por nombre + marca. Devuelve una vista
 *   previa de cambios para que el usuario la confirme antes de aplicar.
 */

import * as XLSX from "xlsx";
import type { Product, ProductCategoryDef } from "./types";
import { categoryById, fallbackCategoryId } from "./types";
import { norm } from "./date-utils";

const HEADERS = [
  "ID",
  "Producto",
  "Marca",
  "Categoría",
  "Ref/SKU",
  "Stock",
  "Stock mínimo",
  "Coste (€)",
  "PVP (€)",
  "Proveedor",
  "Notas",
] as const;

function categoryLabel(p: Product, categories: ProductCategoryDef[]): string {
  return categoryById(categories, p.category).name;
}

/** Dispara la descarga del inventario completo como .xlsx. */
export function exportStockXlsx(
  products: Product[],
  categories: ProductCategoryDef[]
): void {
  const wb = XLSX.utils.book_new();

  const aoa: (string | number)[][] = [
    [...HEADERS],
    ...products.map((p) => [
      p.id,
      p.name,
      p.brand,
      categoryLabel(p, categories),
      p.sku,
      p.stock,
      p.minStock,
      p.cost,
      p.price,
      p.supplier,
      p.notes,
    ]),
  ];
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [
    { wch: 20 }, // ID
    { wch: 34 }, // Producto
    { wch: 14 }, // Marca
    { wch: 18 }, // Categoría
    { wch: 10 }, // SKU
    { wch: 8 }, // Stock
    { wch: 12 }, // Mínimo
    { wch: 10 }, // Coste
    { wch: 10 }, // PVP
    { wch: 14 }, // Proveedor
    { wch: 32 }, // Notas
  ];
  XLSX.utils.book_append_sheet(wb, ws, "Almacén");

  const readme = [
    ["Cómo actualizar el stock desde este archivo"],
    [],
    ["1. No borres ni reordenes la columna ID: es la que vincula cada fila con tu producto."],
    ["2. Edita la columna Stock con las unidades reales que hay en el almacén."],
    ["3. Si quieres, ajusta también Stock mínimo, Coste, PVP, Proveedor o Notas."],
    ["4. Guarda el archivo (mismo formato .xlsx) y vuelve a la app: botón «Importar Excel»."],
    ["5. Revisa el resumen de cambios que te muestra la app y confirma."],
    [],
    ["Las filas nuevas (sin ID) se pueden añadir como productos nuevos: rellena al menos Producto y Stock."],
    ["Los productos que borres del archivo no se eliminan del almacén; solo se actualizan los que aparecen."],
  ];
  const wsRm = XLSX.utils.aoa_to_sheet(readme);
  wsRm["!cols"] = [{ wch: 110 }];
  XLSX.utils.book_append_sheet(wb, wsRm, "Léeme");

  const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const blob = new Blob([out as unknown as BlobPart], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `almacen-${new Date().toISOString().slice(0, 10)}.xlsx`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ------------------------------------------------------------------ */
/* Importación                                                         */
/* ------------------------------------------------------------------ */

/** Cambio sobre un producto existente. */
export interface StockImportChange {
  productId: string;
  name: string;
  /** Campos a actualizar (sin stock) */
  patch: Partial<Product>;
  stockFrom?: number;
  stockTo?: number;
}

/** Producto nuevo detectado en el archivo. */
export interface StockImportNew {
  name: string;
  brand: string;
  category: string;
  sku: string;
  stock: number;
  minStock: number;
  cost: number;
  price: number;
  supplier: string;
  notes: string;
}

export interface StockImportPreview {
  changes: StockImportChange[];
  creates: StockImportNew[];
  /** Filas ignoradas (sin nombre o sin datos utilizables) */
  skipped: number;
}

const HEADER_ALIASES: Record<string, keyof RowMap> = {
  id: "id",
  producto: "name",
  nombre: "name",
  marca: "brand",
  "categoría": "category",
  categoria: "category",
  "ref/sku": "sku",
  ref: "sku",
  sku: "sku",
  stock: "stock",
  "stock mínimo": "minStock",
  "stock minimo": "minStock",
  minimo: "minStock",
  "coste (€)": "cost",
  coste: "cost",
  "pvp (€)": "price",
  pvp: "price",
  precio: "price",
  proveedor: "supplier",
  notas: "notes",
};

interface RowMap {
  id: number;
  name: number;
  brand: number;
  category: number;
  sku: number;
  stock: number;
  minStock: number;
  cost: number;
  price: number;
  supplier: number;
  notes: number;
}

/** Convierte «8,5» / "8.5" / 8.5 → 8.5; texto no numérico → NaN. */
function toNum(v: unknown): number {
  if (typeof v === "number") return v;
  if (typeof v !== "string") return NaN;
  const s = v.replace(/\s/g, "").replace(",", ".");
  if (!s || !/^-?\d+(\.\d+)?$/.test(s)) return NaN;
  return Number(s);
}

function categoryFromLabel(
  label: string,
  categories: ProductCategoryDef[]
): string {
  const clean = norm(label).trim();
  const byLabel = categories.find((c) => norm(c.name) === clean);
  if (byLabel) return byLabel.id;
  const byId = categories.find((c) => norm(c.id) === clean);
  if (byId) return byId.id;
  return fallbackCategoryId(categories) ?? "otros";
}

/**
 * Lee un .xlsx/.csv exportado por la propia app (o compatible) y calcula
 * la vista previa de cambios respecto al almacén actual.
 */
export async function parseStockFile(
  file: File,
  products: Product[],
  categories: ProductCategoryDef[]
): Promise<StockImportPreview> {
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(new Uint8Array(buf), { type: "array" });
  const sheetName =
    wb.SheetNames.find((n) => norm(n) === "almacen") ?? wb.SheetNames[0];
  if (!sheetName) throw new Error("El archivo no tiene hojas de datos.");
  const ws = wb.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json<unknown[]>(ws, {
    header: 1,
    blankrows: false,
    defval: "",
  });
  if (rows.length < 2)
    throw new Error("El archivo no contiene filas de productos.");

  // Localizar la fila de cabeceras (la primera con una celda reconocible)
  let headerIdx = -1;
  let map: Partial<RowMap> = {};
  for (let r = 0; r < Math.min(rows.length, 8); r++) {
    const cells = (rows[r] ?? []).map((c) =>
      String(c ?? "")
        .trim()
        .toLowerCase()
    );
    const m: Partial<RowMap> = {};
    cells.forEach((cell, idx) => {
      const key = HEADER_ALIASES[cell];
      if (key && m[key] === undefined) m[key] = idx;
    });
    if (m.name !== undefined || m.id !== undefined) {
      headerIdx = r;
      map = m;
      break;
    }
  }
  if (headerIdx === -1)
    throw new Error(
      "No se reconoció la cabecera: la primera columna debe llamarse «Producto» (o contener la columna «ID» del export)."
    );
  const col = (k: keyof RowMap): number | undefined => map[k];

  const byId = new Map(products.map((p) => [p.id, p]));
  const byKey = new Map(
    products.map((p) => [`${norm(p.name)}|${norm(p.brand)}`, p])
  );

  const preview: StockImportPreview = {
    changes: [],
    creates: [],
    skipped: 0,
  };

  for (let r = headerIdx + 1; r < rows.length; r++) {
    const row = rows[r] ?? [];
    const get = (k: keyof RowMap): unknown => {
      const idx = col(k);
      return idx === undefined ? undefined : row[idx];
    };
    const name = String(get("name") ?? "").trim();
    const rawId = String(get("id") ?? "").trim();
    if (!name && !rawId) continue; // fila vacía
    if (!name) {
      preview.skipped++;
      continue;
    }
    const brand = String(get("brand") ?? "").trim();
    const stockNum = toNum(get("stock"));
    const minNum = toNum(get("minStock"));
    const costNum = toNum(get("cost"));
    const priceNum = toNum(get("price"));
    const supplier = String(get("supplier") ?? "").trim();
    const notes = String(get("notes") ?? "").trim();
    const sku = String(get("sku") ?? "").trim();
    const catRaw = String(get("category") ?? "").trim();

    const existing = (rawId && byId.get(rawId)) || byKey.get(`${norm(name)}|${norm(brand)}`);

    if (!existing) {
      // Fila nueva: requerimos al menos nombre
      preview.creates.push({
        name,
        brand,
        category: catRaw ? categoryFromLabel(catRaw, categories) : fallbackCategoryId(categories) ?? "otros",
        sku,
        stock: Number.isFinite(stockNum) ? Math.max(0, Math.round(stockNum)) : 0,
        minStock: Number.isFinite(minNum) ? Math.max(0, Math.round(minNum)) : 0,
        cost: Number.isFinite(costNum) ? Math.max(0, costNum) : 0,
        price: Number.isFinite(priceNum) ? Math.max(0, priceNum) : 0,
        supplier,
        notes,
      });
      continue;
    }

    const patch: Partial<Product> = {};
    if (brand && brand !== existing.brand) patch.brand = brand;
    if (catRaw && categoryFromLabel(catRaw, categories) !== existing.category)
      patch.category = categoryFromLabel(catRaw, categories);
    if (sku && sku !== existing.sku) patch.sku = sku;
    if (Number.isFinite(minNum) && Math.round(minNum) !== existing.minStock)
      patch.minStock = Math.max(0, Math.round(minNum));
    if (Number.isFinite(costNum) && costNum !== existing.cost)
      patch.cost = Math.max(0, costNum);
    if (Number.isFinite(priceNum) && priceNum !== existing.price)
      patch.price = Math.max(0, priceNum);
    if (supplier && supplier !== existing.supplier) patch.supplier = supplier;
    if (notes && notes !== existing.notes) patch.notes = notes;

    const change: StockImportChange = {
      productId: existing.id,
      name: existing.name,
      patch,
    };
    if (Number.isFinite(stockNum) && Math.round(stockNum) !== existing.stock) {
      change.stockFrom = existing.stock;
      change.stockTo = Math.max(0, Math.round(stockNum));
    }
    if (Object.keys(patch).length > 0 || change.stockTo !== undefined)
      preview.changes.push(change);
  }

  if (preview.changes.length === 0 && preview.creates.length === 0)
    throw new Error(
      "No se detectó ningún cambio: el archivo coincide con el almacén actual o no tiene datos válidos."
    );

  return preview;
}
