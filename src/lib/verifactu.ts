/**
 * Cliente VERI*FACTU (proveedor: verifacti.com).
 *
 * La app solo necesita que el salón pegue su API key en Ajustes:
 * el NIF del emisor y el entorno (pruebas/producción) quedan
 * determinados por esa API key en el proveedor.
 *
 * Todas las llamadas pasan por /api/verifactu (ruta interna del
 * servidor) que reenvía la petición a api.verifacti.com con la
 * cabecera Authorization: Bearer — así evitamos restricciones CORS
 * y funciona igual en el navegador y en la app de escritorio.
 *
 * Documentación: https://www.verifacti.com/docs
 *   POST /verifactu/create   → { uuid, estado, url, qr, huella }
 *   GET  /verifactu/health   → { estado, nif, entorno }
 *   GET  /verifactu/status   → estado del registro por uuid
 */

import type {
  InvoiceLine,
  SalonInfo,
  VerifactuConfig,
  VerifactuRecord,
} from "./types";

const API_BASE = "https://api.verifacti.com/verifactu";

/** true si hay API key y el registro automático está activado. */
export function verifactuActivo(salon: SalonInfo): VerifactuConfig | null {
  const v = salon.verifactu;
  if (!v || !v.activo || !v.apiKey.trim()) return null;
  return v;
}

/** true si la integración está configurada (con o sin activar). */
export function verifactuConfigurada(salon: SalonInfo): boolean {
  return !!salon.verifactu?.apiKey.trim();
}

/* ---------- llamadas a través del proxy interno ---------- */

export interface VerifactuHealth {
  estado: string;
  nif?: string;
  entorno?: string;
}

async function callVerifactu<T>(
  endpoint: "health" | "create" | "estado",
  args: {
    apiKey: string;
    proveedor?: "verifacti" | "verifacturapi";
    payload?: unknown;
    uuid?: string;
    idempotencyKey?: string;
  }
): Promise<T> {
  const res = await fetch("/api/verifactu", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoint, ...args }),
  });
  let body: { ok?: boolean; data?: T; error?: string } = {};
  try {
    body = await res.json();
  } catch {
    /* respuesta no JSON */
  }
  if (!res.ok || !body.ok) {
    throw new Error(
      body.error || `Error ${res.status} al comunicarse con Verifactu.`
    );
  }
  return body.data as T;
}

/** Comprueba la API key (Ajustes → Probar conexión). */
export function verifactuHealth(
  apiKey: string,
  proveedor: "verifacti" | "verifacturapi" = "verifacti"
): Promise<VerifactuHealth> {
  return callVerifactu<VerifactuHealth>("health", { apiKey, proveedor });
}

/** Consulta el estado de un registro de facturación ya enviado. */
export function verifactuEstadoRegistro(
  apiKey: string,
  uuid: string,
  proveedor: "verifacti" | "verifacturapi" = "verifacti"
): Promise<VerifactuRecord & { codigo_error?: string; mensaje_error?: string }> {
  return callVerifactu("estado", { apiKey, uuid, proveedor });
}

/* ---------- construcción del payload de factura ---------- */

interface PayloadInput {
  number: string;
  date: string; // ISO
  lines: InvoiceLine[];
  total: number;
}

/** Fecha en formato dd-mm-aaaa exigido por la API. */
function fechaEs(iso: string): string {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}-${mm}-${d.getFullYear()}`;
}

function hoyEs(): string {
  return fechaEs(new Date().toISOString());
}

/** Importes con 2 decimales como string ("242.00"), formato AEAT. */
function money(n: number): string {
  return (Math.round(n * 100) / 100).toFixed(2);
}

/**
 * Compone el cuerpo de la llamada POST /verifactu/create.
 *
 * Reglas aplicadas:
 *  - serie vacía; numero = identificador de la app («F2026-001»).
 *  - tipo_factura F2 (factura simplificada, sin identificación fiscal
 *    del destinatario): es el ticket habitual de peluquería. La app no
 *    guarda NIF de clientes, así que no procede la F1.
 *  - Los precios del salón incluyen IVA: se desglosa base y cuota con
 *    el tipo configurado (21 % por defecto) en una única línea agregada.
 *  - Si la factura no es de hoy se marca incidencia "S" (registro
 *    fuera de tiempo: sistema no disponible en el momento de emisión).
 *  - Idempotency-Key = id de la factura: reintentos seguros.
 */
export function buildVerifactuPayload(
  input: PayloadInput,
  config: VerifactuConfig
): Record<string, unknown> {
  const rate = Math.min(Math.max(config.tipoIva || 0, 0), 100);
  const total = Math.round(input.total * 100) / 100;
  // Base y cuota a partir del total con IVA incluido:
  // base = total / (1 + rate/100) · cuota = total - base
  const base = Math.round((total / (1 + rate / 100)) * 100) / 100;
  const cuota = Math.round((total - base) * 100) / 100;

  const linea: Record<string, unknown> = {
    base_imponible: money(base),
    tipo_impositivo: String(rate),
    cuota_repercutida: money(cuota),
    impuesto: "01", // IVA
    calificacion_operacion: "S1", // sujeta y no exenta
  };
  if (rate === 0) {
    // Sin IVA: operación exenta (E1 — operaciones interiores exentas)
    linea.tipo_impositivo = "0";
    linea.operacion_exenta = "E1";
    delete linea.calificacion_operacion;
  }

  const descripcion =
    input.lines
      .filter((l) => l.kind === "servicio")
      .map((l) => l.name)
      .filter(Boolean)
      .join(" + ")
      .trim() || "Servicios de peluquería";

  const payload: Record<string, unknown> = {
    serie: "",
    numero: input.number,
    fecha_expedicion: fechaEs(input.date),
    tipo_factura: "F2",
    descripcion,
    lineas: [linea],
    importe_total: money(total),
  };

  if (fechaEs(input.date) !== hoyEs()) payload.incidencia = "S";

  return payload;
}

/**
 * Payload para verifacturapi.com (POST /api/v1/verifactu/create).
 *
 * Diferencias con verifacti:
 *  - fecha en formato yyyy-mm-dd y importes como números.
 *  - F2 (simplificada) SIN bloque customer: los tickets del salón no
 *    identifican al destinatario.
 *  - items[] con el precio final (IVA incluido) y el tax_rate: el
 *    proveedor calcula base y cuota para el desglose AEAT.
 *  - IVA 0 → exención con el campo exemption «E1» y SIN tax_rate ni
 *    operation_qualification (así lo exige su documentación).
 */
export function buildVerifacturapiPayload(
  input: PayloadInput,
  config: VerifactuConfig,
  externalReference?: string
): Record<string, unknown> {
  const rate = Math.min(Math.max(config.tipoIva || 0, 0), 100);
  const total = Math.round(input.total * 100) / 100;

  const item: Record<string, unknown> = {
    quantity: 1,
    // Precio con IVA incluido: el proveedor deriva base y cuota
    unit_price: total,
    aeat_code: "01", // IVA
    regime_key: "01", // régimen general
  };
  if (rate > 0) {
    item.tax_rate = rate;
    item.operation_qualification = "S1"; // sujeta y no exenta
  } else {
    item.exemption = "E1"; // exenta art. 20 (operaciones interiores)
  }

  const descripcion =
    input.lines
      .filter((l) => l.kind === "servicio")
      .map((l) => l.name)
      .filter(Boolean)
      .join(" + ")
      .trim() || "Servicios de peluquería";

  const payload: Record<string, unknown> = {
    series: "",
    number: input.number,
    issue_date: input.date.slice(0, 10), // yyyy-mm-dd
    invoice_type: "F2",
    description: descripcion,
    currency: "EUR",
    items: [item],
  };
  if (externalReference)
    payload.external_reference = externalReference.slice(0, 64);

  return payload;
}

/** Envía la factura a Verifactu y devuelve el registro (QR incluido). */
export async function verifactuCrearFactura(
  input: PayloadInput,
  config: VerifactuConfig,
  idempotencyKey: string
): Promise<VerifactuRecord> {
  const esVrapi = config.proveedor === "verifacturapi";
  const payload = esVrapi
    ? buildVerifacturapiPayload(input, config, idempotencyKey)
    : buildVerifactuPayload(input, config);
  const data = await callVerifactu<Record<string, unknown>>("create", {
    apiKey: config.apiKey,
    proveedor: config.proveedor ?? "verifacti",
    payload,
    ...(esVrapi ? {} : { idempotencyKey }),
  });

  // Mapeo defensivo: ambos proveedores se normalizan en el proxy, pero
  // cubrimos también nombres alternativos por si el proveedor cambia.
  const qrRaw =
    (typeof data.qr === "string" && data.qr) ||
    (typeof data.qr_image === "string" && data.qr_image) ||
    "";
  const urlRaw =
    (typeof data.url === "string" && data.url) ||
    (typeof data.verification_url === "string" && data.verification_url) ||
    (/^https?:\/\//i.test(qrRaw) ? qrRaw : "");

  return {
    uuid: (data.uuid as string) ?? (data.invoice_uuid as string) ?? "",
    estado: (data.estado as string) || (data.status as string) || "Pendiente",
    url: urlRaw,
    qr: qrRaw.replace(/^data:image\/[a-z]+;base64,/, ""),
    huella: (data.huella as string) ?? (data.fingerprint as string) ?? "",
    enviadoEn: new Date().toISOString(),
    tipoFactura: "F2",
  };
}

/** data URL lista para <img src=…> con el QR devuelto por verifacti. */
export function verifactuQrDataUrl(record: VerifactuRecord): string | null {
  if (!record.qr) return null;
  return `data:image/png;base64,${record.qr}`;
}

/** Etiqueta legible para el estado del registro. */
export function verifactuEstadoLabel(estado: string): {
  label: string;
  ok: boolean;
} {
  switch (estado) {
    case "Pendiente":
      return { label: "Pendiente AEAT", ok: false };
    case "Correcto":
    case "Correcta":
      return { label: "Registrada", ok: true };
    case "AceptadaConErrores":
      return { label: "Aceptada con errores", ok: false };
    case "Anulada":
      return { label: "Anulada", ok: false };
    default:
      return { label: estado || "—", ok: false };
  }
}
