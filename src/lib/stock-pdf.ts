/**
 * Informe de inventario del almacén en PDF (A4 vertical, pdf-lib).
 * Tabla con todos los productos, su estado de stock y el valor a coste,
 * con las filas de stock bajo/agotado resaltadas.
 */

import type { Product, ProductCategoryDef, SalonInfo } from "./types";
import { categoryById } from "./types";

function sanitizePdf(text: string): string {
  return text
    .replace(/[\u2018\u2019\u201B]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2026/g, "...")
    .replace(/\u00A0/g, " ")
    .replace(/[^\u0000-\u00FF\u2013\u2014\u20AC\u2022]/g, "");
}

type StockState = "ok" | "bajo" | "agotado";

function stateOf(p: Product): StockState {
  if (p.stock <= 0) return "agotado";
  if (p.stock <= p.minStock) return "bajo";
  return "ok";
}

function stateLabel(s: StockState): string {
  return s === "ok" ? "En stock" : s === "bajo" ? "Stock bajo" : "Agotado";
}

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

/** Genera el informe y dispara su descarga como «almacen-YYYY-MM-DD.pdf». */
export async function exportStockPdf(
  products: Product[],
  salon: SalonInfo,
  categories: ProductCategoryDef[]
): Promise<void> {
  const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");

  const doc = await PDFDocument.create();
  doc.setTitle(`Inventario del almacén - ${sanitizePdf(salon.name)}`);
  doc.setAuthor(sanitizePdf(salon.fiscalName || salon.name));
  doc.setCreator(`${sanitizePdf(salon.name)} · Gestión de citas`);

  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);

  // Paleta del app
  const cPine = rgb(0x8c / 255, 0x4a / 255, 0x64 / 255);
  const cInk = rgb(0x2f / 255, 0x24 / 255, 0x28 / 255);
  const cSoft = rgb(0x7a / 255, 0x55 / 255, 0x60 / 255);
  const cFaint = rgb(0xa9 / 255, 0x8a / 255, 0x93 / 255);
  const cLine = rgb(0xe0 / 255, 0xc2 / 255, 0xc8 / 255);
  const cWarn = rgb(0xa1 / 255, 0x62 / 255, 0x07 / 255);
  const cWarnBg = rgb(0xf7 / 255, 0xec / 255, 0xd2 / 255);
  const cDanger = rgb(0x9c / 255, 0x2b / 255, 0x3e / 255);
  const cDangerBg = rgb(0xf8 / 255, 0xdd / 255, 0xe2 / 255);
  const cOk = rgb(0x5a / 255, 0x8a / 255, 0x4a / 255);
  const cZebra = rgb(0xfb / 255, 0xf7 / 255, 0xf8 / 255);
  const cWhite = rgb(1, 1, 1);

  const W = 595.28;
  const H = 841.89;
  const M = 40;
  const PAGE_BOTTOM = M + 56;

  // Columnas: Producto | Categoría | Stock | Mín | Coste | Valor | Estado
  const COLS: {
    w: number;
    label: string;
    align?: "right";
  }[] = [
    { w: 168, label: "Producto" },
    { w: 92, label: "Categoría" },
    { w: 44, label: "Stock", align: "right" },
    { w: 36, label: "Mín", align: "right" },
    { w: 60, label: "Coste", align: "right" },
    { w: 66, label: "Valor", align: "right" },
    { w: 89, label: "Estado" },
  ];
  const TABLE_W = COLS.reduce((s, c) => s + c.w, 0);
  const colX = (i: number): number =>
    M + COLS.slice(0, i).reduce((s, c) => s + c.w, 0);

  // Orden: agotados → bajos → ok; alfabético
  const rank = { agotado: 0, bajo: 1, ok: 2 } as const;
  const list = [...products].sort((a, b) => {
    const r = rank[stateOf(a)] - rank[stateOf(b)];
    if (r !== 0) return r;
    return a.name.localeCompare(b.name, "es");
  });

  const stats = list.reduce(
    (acc, p) => {
      acc.value += p.stock * p.cost;
      const s = stateOf(p);
      if (s === "bajo") acc.low++;
      if (s === "agotado") acc.out++;
      return acc;
    },
    { value: 0, low: 0, out: 0 }
  );

  const page = doc.addPage([W, H]);
  // Página activa: los saltos de página la van reasignando
  let cur = page;
  let y = H - M;

  const draw = (
    text: string,
    x: number,
    yy: number,
    size: number,
    f: typeof font,
    color = cInk
  ) => cur.drawText(sanitizePdf(text), { x, y: yy, size, font: f, color });

  /* --- Cabecera (solo primera página) --- */
  draw("Inventario del almacén", M, y - 18, 20, fontBold, cPine);
  const fecha = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const rightInfo = sanitizePdf(salon.name);
  draw(rightInfo, W - M - font.widthOfTextAtSize(rightInfo, 9), y - 12, 9, fontBold, cSoft);
  const bits = [
    salon.nif ? `NIF/CIF ${salon.nif}` : "",
    [salon.street, [salon.zip, salon.city].filter(Boolean).join(" ")].filter(Boolean).join(", "),
    salon.phone,
  ]
    .filter(Boolean)
    .join(" · ");
  if (bits) {
    const b = sanitizePdf(bits);
    draw(b, W - M - font.widthOfTextAtSize(b, 7), y - 24, 7, font, cFaint);
  }
  y -= 34;
  draw(`Listado de existencias a ${fecha}.`, M, y, 8.5, font, cSoft);
  y -= 13;
  draw(
    `${list.length} ${list.length === 1 ? "referencia" : "referencias"} · valor a coste ${eur.format(stats.value)} · ${stats.low} con stock bajo · ${stats.out} agotados`,
    M,
    y,
    8.5,
    fontBold,
    cSoft
  );
  y -= 18;

  /* --- Tabla --- */
  const rowH = 18;
  const headerH = 17;

  const drawHeader = () => {
    cur.drawRectangle({ x: M, y: y - headerH, width: TABLE_W, height: headerH, color: cPine });
    COLS.forEach((c, i) => {
      const tw = fontBold.widthOfTextAtSize(c.label, 7.5);
      const tx = c.align === "right" ? colX(i) + c.w - tw - 6 : colX(i) + 6;
      draw(c.label, tx, y - headerH + 5, 7.5, fontBold, cWhite);
    });
    y -= headerH;
  };

  const clip = (text: string, maxW: number, size: number): string => {
    let t = sanitizePdf(text);
    if (font.widthOfTextAtSize(t, size) <= maxW) return t;
    while (t.length > 1 && font.widthOfTextAtSize(t + "…", size) > maxW)
      t = t.slice(0, -1);
    return t + "…";
  };

  const drawRow = (p: Product, zebra: boolean) => {
    const s = stateOf(p);
    if (zebra)
      cur.drawRectangle({ x: M, y: y - rowH, width: TABLE_W, height: rowH, color: cZebra });
    if (s === "agotado")
      cur.drawRectangle({ x: M, y: y - rowH, width: TABLE_W, height: rowH, color: cDangerBg });
    else if (s === "bajo")
      cur.drawRectangle({ x: M, y: y - rowH, width: TABLE_W, height: rowH, color: cWarnBg });
    cur.drawLine({
      start: { x: M, y: y - rowH },
      end: { x: M + TABLE_W, y: y - rowH },
      thickness: 0.4,
      color: cLine,
    });

    const stateColor = s === "ok" ? cOk : s === "bajo" ? cWarn : cDanger;
    const cell = (i: number, text: string, f: typeof font, color: typeof cInk, size = 7.5) => {
      const c = COLS[i];
      const maxW = c.w - 12;
      const t = clip(text, maxW, size);
      const tx = c.align === "right" ? colX(i) + c.w - font.widthOfTextAtSize(t, size) - 6 : colX(i) + 6;
      draw(t, tx, y - rowH + 5.5, size, f, color);
    };

    cell(0, p.name, fontBold, cInk);
    cell(1, categoryById(categories, p.category).name, font, cSoft);
    cell(2, String(p.stock), fontBold, stateColor, 8);
    cell(3, String(p.minStock), font, cFaint);
    cell(4, p.cost ? eur.format(p.cost) : "—", font, cSoft);
    cell(5, eur.format(p.stock * p.cost), font, cInk);
    cell(6, stateLabel(s), fontBold, stateColor);
    y -= rowH;
  };

  drawHeader();
  list.forEach((p, i) => {
    if (y - rowH < PAGE_BOTTOM) {
      cur = doc.addPage([W, H]);
      y = H - M;
      drawHeader();
    }
    drawRow(p, i % 2 === 1);
  });

  /* --- Pie (última página) --- */
  cur.drawLine({
    start: { x: M, y: M + 26 },
    end: { x: W - M, y: M + 26 },
    thickness: 0.8,
    color: cLine,
  });
  draw(
    `Documento generado electrónicamente por ${salon.fiscalName || salon.name} · ${new Date().toLocaleDateString("es-ES")}`,
    M,
    M + 14,
    6.5,
    font,
    cFaint
  );

  // Descarga
  const bytes = await doc.save();
  const blob = new Blob([bytes as unknown as BlobPart], {
    type: "application/pdf",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `almacen-${new Date().toISOString().slice(0, 10)}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
}
