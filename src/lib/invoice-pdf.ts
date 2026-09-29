/**
 * Factura SIMPLIFICADA tipo ticket (80 mm, pdf-lib).
 *
 * Formato de TPV: cabecera del salón, nº y fecha, cliente, líneas
 * (servicio + productos vendidos + productos incluidos a 0 €), total
 * con desglose y pie. Altura dinámica según el número de líneas.
 *
 * Las facturas ya emitidas guardan su PDF en base64 (inmutable), por lo
 * que este formato solo afecta a las facturas nuevas.
 */

import type { Client, Invoice, SalonInfo, VerifactuRecord } from "./types";
import { base64ToBytes } from "./consent-pdf";

/** Descarga el PDF de una factura ya guardada (almacenado en base64). */
export function downloadInvoicePdf(invoice: Invoice): boolean {
  if (!invoice.pdfBase64) return false;
  try {
    const bytes = base64ToBytes(invoice.pdfBase64);
    const blob = new Blob([bytes as unknown as BlobPart], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `factura-${invoice.number}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
    return true;
  } catch {
    return false;
  }
}

function sanitizePdf(text: string): string {
  return text
    .replace(/[\u2018\u2019\u201B]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2026/g, "...")
    .replace(/\u00A0/g, " ")
    .replace(/[^\u0000-\u00FF\u2013\u2014\u20AC\u2022]/g, "");
}

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

/**
 * Genera el PDF tipo ticket de la factura. Se llama antes de guardar la
 * factura para almacenar el documento junto a sus datos (inmutable).
 * Si se entrega el registro VERI*FACTU, el ticket incluye el código QR
 * de verificación de la AEAT (obligatorio en VERI*FACTU).
 */
export async function buildInvoicePdf(
  invoice: Pick<Invoice, "number" | "date" | "lines" | "total">,
  client: Client | undefined,
  salon: SalonInfo,
  verifactu?: VerifactuRecord
): Promise<Uint8Array> {
  const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");

  /* ---------- paleta ---------- */
  const INK = rgb(0.18, 0.15, 0.16);
  const SOFT = rgb(0.42, 0.34, 0.37);
  const FAINT = rgb(0.62, 0.53, 0.56);
  const LINE = rgb(0.78, 0.7, 0.73);
  const PINE = rgb(0.55, 0.29, 0.39);
  const MOSS = rgb(0.27, 0.51, 0.36);

  /* ---------- documento y fuentes monoespaciadas (look TPV) ---------- */
  const doc = await PDFDocument.create();
  doc.setTitle(`Factura simplificada ${sanitizePdf(invoice.number)} - ${sanitizePdf(salon.name)}`);
  doc.setAuthor(sanitizePdf(salon.fiscalName || salon.name));
  doc.setCreator(`${sanitizePdf(salon.name)} · Gestión de citas`);
  const font = await doc.embedFont(StandardFonts.Courier);
  const fontBold = await doc.embedFont(StandardFonts.CourierBold);

  /* ---------- medidas ---------- */
  const W = 226.77; // 80 mm
  const M = 12;
  const innerW = W - M * 2;
  const LH_NAME = 9; // línea de nombre de concepto
  const LH_AMT = 10.5; // línea de cantidad / importe

  /* ---------- textos de cabecera ---------- */
  const fiscalLine = salon.nif
    ? `${salon.fiscalName && salon.fiscalName !== salon.name ? salon.fiscalName + " · " : ""}NIF/CIF ${salon.nif}`
    : salon.fiscalName && salon.fiscalName !== salon.name
      ? salon.fiscalName
      : "";
  const addrLine = [salon.street, [salon.zip, salon.city].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join(", ");
  const contactLine = [salon.phone, salon.email].filter(Boolean).join(" · ");

  const dt = new Date(invoice.date);
  const dateTxt = dt.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const timeTxt = dt.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });

  const hasIncluded = invoice.lines.some((l) => l.included);
  const servTotal = invoice.lines
    .filter((l) => l.kind === "servicio")
    .reduce((s, l) => s + l.qty * l.unitPrice, 0);
  const prodTotal = Math.max(0, invoice.total - servTotal);

  /* ---------- bloque VERI*FACTU (QR) ---------- */
  const vfQrB64 = verifactu?.qr
    ? verifactu.qr.replace(/^data:image\/png;base64,/, "")
    : "";
  const QR_SIZE = 44;
  const vfBlockH = vfQrB64
    ? QR_SIZE + 4 /* margen */ + 8 /* rótulo */ + 11 /* huella + aire */
    : 0;
  let vfPng: Awaited<ReturnType<typeof doc.embedPng>> | null = null;
  if (vfQrB64) {
    try {
      vfPng = await doc.embedPng(base64ToBytes(vfQrB64));
    } catch {
      // QR corrupto o formato inesperado: el ticket sale sin QR pero válido
      vfPng = null;
    }
  }

  /* ---------- altura total del ticket ---------- */
  const h =
    16 + // margen superior
    14 + // nombre del salón
    (fiscalLine ? 9 : 0) +
    (addrLine ? 9 : 0) +
    (contactLine ? 9 : 0) +
    11 + // doble separador
    11 + // rótulo FACTURA SIMPLIFICADA
    13 + // número
    9 + // fecha y hora
    (client ? 11 : 0) +
    (client?.phone?.trim() ? 8 : 0) +
    10 + // separador
    invoice.lines.reduce((s, l) => s + LH_NAME + LH_AMT, 0) +
    10 + // separador
    22 + // TOTAL
    8 + // desglose
    (hasIncluded ? 14 : 0) +
    10 + // separador
    vfBlockH + // QR VERI*FACTU (si procede)
    10 + // separador
    10 + // «Gracias por su visita»
    9 + // pie 1
    9 + // pie 2
    14; // margen inferior

  const page = doc.addPage([W, h]);
  let y = h - 16;

  /* ---------- helpers de dibujo ---------- */
  const sanitize = sanitizePdf;
  const width = (t: string, size: number, f = font) => f.widthOfTextAtSize(sanitize(t), size);
  const centerX = (t: string, size: number, f = font) => (W - width(t, size, f)) / 2;
  const rightX = (t: string, size: number, f = font) => W - M - width(t, size, f);
  const draw = (text: string, x: number, yy: number, size: number, f = font, color = INK) =>
    page.drawText(sanitize(text), { x, y: yy, size, font: f, color });
  const clip = (text: string, maxW: number, size: number, f = font): string => {
    let t = sanitize(text);
    if (f.widthOfTextAtSize(t, size) <= maxW) return t;
    while (t.length > 1 && f.widthOfTextAtSize(t + ".", size) > maxW) t = t.slice(0, -1);
    return t + ".";
  };

  const sep = (double = false) => {
    page.drawLine({
      start: { x: M, y },
      end: { x: W - M, y },
      thickness: double ? 1.2 : 0.6,
      color: LINE,
      dashArray: double ? undefined : [2, 2],
    });
    if (double)
      page.drawLine({
        start: { x: M, y: y - 2.2 },
        end: { x: W - M, y: y - 2.2 },
        thickness: 1.2,
        color: LINE,
      });
    y -= double ? 11 : 10;
  };

  /* ---------- cabecera del salón ---------- */
  const salonName = clip(salon.name, innerW, 12, fontBold);
  draw(salonName, centerX(salonName, 12, fontBold), y - 10, 12, fontBold, PINE);
  y -= 14;
  for (const line of [fiscalLine, addrLine, contactLine]) {
    if (!line) continue;
    const t = clip(line, innerW, 7);
    draw(t, centerX(t, 7), y - 6.5, 7, font, SOFT);
    y -= 9;
  }
  sep(true);

  /* ---------- rótulo, número y fecha ---------- */
  draw("FACTURA SIMPLIFICADA", centerX("FACTURA SIMPLIFICADA", 8.5, fontBold), y - 7.5, 8.5, fontBold, INK);
  y -= 11;
  draw(invoice.number, M, y - 9.5, 11, fontBold, PINE);
  y -= 13;
  draw(`${dateTxt}  ${timeTxt}`, M, y - 6.5, 7.5, font, SOFT);
  y -= 9;

  /* ---------- cliente ---------- */
  if (client) {
    draw(clip(client.name, innerW, 8.5, fontBold), M, y - 8, 8.5, fontBold, INK);
    y -= 11;
    if (client.phone?.trim()) {
      draw(clip(client.phone, innerW, 7), M, y - 5.5, 7, font, SOFT);
      y -= 8;
    }
  }
  sep();

  /* ---------- líneas ---------- */
  for (const l of invoice.lines) {
    const isServ = l.kind === "servicio";
    const nameF = isServ ? fontBold : font;
    draw(clip(l.name, innerW, 7.5, nameF), M, y - 6.5, 7.5, nameF, isServ ? INK : SOFT);
    y -= LH_NAME;

    const left = l.included
      ? `${l.qty} ud${l.qty === 1 ? "" : "s"}`
      : `${l.qty} × ${eur.format(l.unitPrice)}`;
    draw(left, M, y - 7, 7.5, font, SOFT);
    const amt = l.included ? "Incluido" : eur.format(l.qty * l.unitPrice);
    draw(amt, rightX(amt, 8, fontBold), y - 7, 8, fontBold, l.included ? MOSS : INK);
    y -= LH_AMT;
  }
  sep();

  /* ---------- total con desglose ---------- */
  draw("TOTAL", M, y - 11, 10, fontBold, INK);
  const totalTxt = eur.format(invoice.total);
  draw(totalTxt, rightX(totalTxt, 14, fontBold), y - 13, 14, fontBold, PINE);
  y -= 22;
  const desc = `Servicios ${eur.format(servTotal)} · Productos ${eur.format(prodTotal)}`;
  draw(clip(desc, innerW, 6.5), M, y - 5.5, 6.5, font, SOFT);
  y -= 8;
  if (hasIncluded) {
    draw(
      clip("Los productos «Incluido» forman parte del tratamiento y no se cobran.", innerW, 6),
      M,
      y - 5,
      6,
      font,
      FAINT
    );
    y -= 14;
  }
  sep();

  /* ---------- QR VERI*FACTU ---------- */
  if (vfPng) {
    page.drawImage(vfPng, {
      x: (W - QR_SIZE) / 2,
      y: y - QR_SIZE - 2,
      width: QR_SIZE,
      height: QR_SIZE,
    });
    y -= QR_SIZE + 4;
    const vfLabel = "VERI*FACTU · Factura registrada";
    draw(clip(vfLabel, innerW, 6.5, fontBold), centerX(vfLabel, 6.5, fontBold), y - 5, 6.5, fontBold, MOSS);
    y -= 8;
    const huella = verifactu?.huella || "";
    const vfFoot = huella
      ? clip(`Huella ${huella.slice(0, 26)}…`, innerW, 5)
      : clip(`Verifícala en ${verifactu?.url ?? ""}`.slice(0, 60), innerW, 5);
    draw(vfFoot, centerX(vfFoot, 5), y - 4.5, 5, font, FAINT);
    y -= 7 + 4;
  }

  /* ---------- pie ---------- */
  draw("Gracias por su visita", centerX("Gracias por su visita", 8, fontBold), y - 6.5, 8, fontBold, SOFT);
  y -= 10;
  const foot1 = clip(`Documento generado electrónicamente por ${salon.name}`, innerW, 6);
  draw(foot1, centerX(foot1, 6), y - 5, 6, font, FAINT);
  y -= 9;
  const foot2 = `${dateTxt} · ${invoice.number}`;
  draw(foot2, centerX(foot2, 6), y - 5, 6, font, FAINT);

  return doc.save();
}
