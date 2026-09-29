/**
 * Prueba unitaria Verifactu (proveedores verifacti y verifacturapi):
 * 1. buildVerifactuPayload (verifacti): desglose de IVA, fechas, F2 e incidencia.
 * 2. buildVerifacturapiPayload: items con IVA incluido y exención E1.
 * 3. verifactuCrearFactura: mapeo de respuestas de ambos proveedores (fetch simulado).
 * 4. buildInvoicePdf con registro Verifactu: PDF válido con QR incrustado.
 * Ejecutar:  bun /home/z/my-project/scripts/test-verifactu.ts
 */
import {
  buildVerifactuPayload,
  buildVerifacturapiPayload,
  verifactuCrearFactura,
  verifactuEstadoLabel,
} from "../src/lib/verifactu";
import { buildInvoicePdf } from "../src/lib/invoice-pdf";
import type { VerifactuRecord } from "../src/lib/types";

/* PNG 1x1 válido para incrustar como QR de prueba */
const QR_PNG_B64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

const cfg = { activo: true, apiKey: "k", tipoIva: 21 };
const lines = [
  { kind: "servicio" as const, name: "Corte y peinado", qty: 1, unitPrice: 22 },
  { kind: "producto" as const, name: "Champú", qty: 2, unitPrice: 8 },
];

let fails = 0;
function check(cond: boolean, what: string) {
  if (!cond) {
    console.error("FALLO:", what);
    fails++;
  } else {
    console.log("OK ", what);
  }
}

/* ---------- 1. payload ---------- */
const p = buildVerifactuPayload(
  { number: "F2026-001", date: new Date().toISOString(), lines, total: 38 },
  cfg
);
check(p.tipo_factura === "F2", "tipo_factura F2");
check(p.serie === "" && p.numero === "F2026-001", "serie vacía + numero");
check(p.importe_total === "38.00", `importe_total 38.00 (got ${p.importe_total})`);
const linea = (p.lineas as Record<string, string>[])[0];
// base = 38/1.21 = 31.4049… → 31.40 ; cuota = 38 - 31.40 = 6.60
check(linea.base_imponible === "31.40", `base 31.40 (got ${linea.base_imponible})`);
check(linea.cuota_repercutida === "6.60", `cuota 6.60 (got ${linea.cuota_repercutida})`);
check(linea.tipo_impositivo === "21", "tipo_impositivo 21");
check(p.incidencia === undefined, "factura de hoy sin incidencia");

// factura antigua → incidencia S
const ayer = new Date(Date.now() - 86400_000).toISOString();
const pOld = buildVerifactuPayload(
  { number: "F2026-001", date: ayer, lines, total: 38 },
  cfg
);
check(pOld.incidencia === "S", "factura antigua con incidencia S");

// IVA 0 → exenta E1
const p0 = buildVerifactuPayload(
  { number: "F2026-002", date: new Date().toISOString(), lines, total: 38 },
  { activo: true, apiKey: "k", tipoIva: 0 }
);
const linea0 = (p0.lineas as Record<string, string>[])[0];
check(linea0.operacion_exenta === "E1" && linea0.tipo_impositivo === "0", "IVA 0 → exenta E1");
check(p0.importe_total === "38.00" && linea0.base_imponible === "38.00", "exenta: base = total");

// descripción con el nombre del servicio
check(String(p.descripcion).includes("Corte y peinado"), "descripcion incluye el servicio");

/* ---------- 2. payload verifacturapi ---------- */
const pv = buildVerifacturapiPayload(
  { number: "F2026-001", date: "2026-09-29T10:00:00.000Z", lines, total: 38 },
  { activo: true, apiKey: "k", proveedor: "verifacturapi", tipoIva: 21 },
  "fact-abc-1"
);
check(pv.invoice_type === "F2", "vrapi: tipo F2");
check(pv.series === "" && pv.number === "F2026-001", "vrapi: serie vacía + número");
check(pv.issue_date === "2026-09-29", `vrapi: fecha yyyy-mm-dd (got ${pv.issue_date})`);
check(pv.currency === "EUR", "vrapi: moneda EUR");
const itemV = (pv.items as Record<string, unknown>[])[0];
check(itemV.unit_price === 38, `vrapi: unit_price = total con IVA (got ${itemV.unit_price})`);
check(itemV.tax_rate === 21 && itemV.operation_qualification === "S1", "vrapi: tax_rate 21 + S1");
check(itemV.aeat_code === "01" && itemV.regime_key === "01", "vrapi: códigos AEAT 01");
check(!("customer" in pv), "vrapi: F2 sin bloque customer");
check(pv.external_reference === "fact-abc-1", "vrapi: external_reference");

const pv0 = buildVerifacturapiPayload(
  { number: "F2026-002", date: "2026-09-29T10:00:00.000Z", lines, total: 38 },
  { activo: true, apiKey: "k", proveedor: "verifacturapi", tipoIva: 0 }
);
const item0 = (pv0.items as Record<string, unknown>[])[0];
check(
  item0.exemption === "E1" && !("tax_rate" in item0) && !("operation_qualification" in item0),
  "vrapi: IVA 0 → exemption E1 sin tax_rate ni S1"
);

/* ---------- 3. mapeo de respuestas (fetch simulado) ---------- */
const QR_PNG = "iVBORw0KGgoAAAANSUhEUg==";
const realFetch = globalThis.fetch;
async function withMockFetch(mock: (url: string, init?: RequestInit) => Response | Promise<Response>, fn: () => Promise<void>) {
  globalThis.fetch = (async (url: any, init?: any) => mock(String(url), init)) as typeof fetch;
  try {
    await fn();
  } finally {
    globalThis.fetch = realFetch;
  }
}

// verifacti: respuesta directa con qr base64
await withMockFetch(
  () =>
    Response.json(
      { ok: true, data: { uuid: "u-1", estado: "Pendiente", url: "https://aeat/x", qr: QR_PNG, huella: "H1" } },
      { status: 200 }
    ),
  async () => {
    const r = await verifactuCrearFactura(
      { number: "F2026-001", date: new Date().toISOString(), lines, total: 38 },
      { activo: true, apiKey: "k", proveedor: "verifacti", tipoIva: 21 },
      "fact-1"
    );
    check(r.uuid === "u-1" && r.estado === "Pendiente", "mapeo verifacti: uuid/estado");
    check(r.qr === QR_PNG && r.huella === "H1", "mapeo verifacti: qr/huella");
    check(r.url === "https://aeat/x", "mapeo verifacti: url");
  }
);

// verifacturapi: qr como data URI + url alternativa
await withMockFetch(
  () =>
    Response.json(
      { ok: true, data: { uuid: "u-2", status: "register", qr: `data:image/png;base64,${QR_PNG}` } },
      { status: 200 }
    ),
  async () => {
    const r = await verifactuCrearFactura(
      { number: "F2026-001", date: new Date().toISOString(), lines, total: 38 },
      { activo: true, apiKey: "k", proveedor: "verifacturapi", tipoIva: 21 },
      "fact-2"
    );
    check(r.uuid === "u-2" && r.qr === QR_PNG, "mapeo verifacturapi: uuid y data URI → base64");
  }
);

// error 401 del proveedor → el proxy lo normaliza a mensaje amable
await withMockFetch(
  () =>
    Response.json(
      {
        ok: false,
        error:
          "La API key de Verifacturapi no es válida o está desactivada. Revísala en Ajustes.",
      },
      { status: 502 }
    ),
  async () => {
    let msg = "";
    try {
      await verifactuCrearFactura(
        { number: "F2026-001", date: new Date().toISOString(), lines, total: 38 },
        { activo: true, apiKey: "k", proveedor: "verifacturapi", tipoIva: 21 },
        "fact-3"
      );
    } catch (e) {
      msg = e instanceof Error ? e.message : String(e);
    }
    check(
      msg.includes("API key de Verifacturapi no es válida"),
      `error 401 verifacturapi → mensaje amable (got: ${msg.slice(0, 60)})`
    );
  }
);

/* ---------- 4. etiquetas de estado ---------- */
check(verifactuEstadoLabel("Correcto").ok, "estado Correcto → ok");
check(!verifactuEstadoLabel("Pendiente").ok, "estado Pendiente → no ok");

/* ---------- 5. PDF con QR ---------- */
const record: VerifactuRecord = {
  uuid: "uuid-1",
  estado: "Pendiente",
  url: "https://www2.aeat.es/ValidarQR?x=1",
  qr: QR_PNG_B64.replace(/^.*base64,/, ""),
  huella: "ABCDEF0123456789ABCDEF0123456789",
  enviadoEn: new Date().toISOString(),
  tipoFactura: "F2",
};
const salon = {
  name: "Peluquería Marisa",
  fiscalName: "",
  nif: "12345678Z",
  phone: "600 000 000",
  email: "",
  street: "Calle Falsa 123",
  zip: "28001",
  city: "Madrid",
};
const pdf = await buildInvoicePdf(
  { number: "F2026-001", date: new Date().toISOString(), lines, total: 38 },
  { id: "c-1", name: "María", phone: "612", email: "", street: "", zip: "", city: "", createdAt: "" },
  salon,
  record
);
const head = Buffer.from(pdf.slice(0, 5)).toString();
check(head === "%PDF-", "PDF con QR genera cabecera %PDF");
check(pdf.length > 2000, `PDF con QR no vacío (${pdf.length} bytes)`);

// sin registro → PDF normal también válido
const pdf2 = await buildInvoicePdf(
  { number: "F2026-002", date: new Date().toISOString(), lines, total: 38 },
  undefined,
  salon
);
check(Buffer.from(pdf2.slice(0, 5)).toString() === "%PDF-", "PDF sin registro Verifactu OK");

// QR corrupto → no debe lanzar
const pdf3 = await buildInvoicePdf(
  { number: "F2026-003", date: new Date().toISOString(), lines, total: 38 },
  undefined,
  salon,
  { ...record, qr: "NO-ES-UN-PNG" }
);
check(Buffer.from(pdf3.slice(0, 5)).toString() === "%PDF-", "PDF con QR corrupto no falla (sale sin QR)");

console.log(fails === 0 ? "\nTODO CORRECTO" : `\n${fails} FALLOS`);
process.exit(fails === 0 ? 0 : 1);
