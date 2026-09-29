/**
 * Proxy interno hacia las APIs de Verifactu (VERI*FACTU).
 *
 * Soporta dos proveedores (el usuario elige en Ajustes):
 *  - verifacti    → https://api.verifacti.com/verifactu
 *  - verifacturapi → https://api.verifacturapi.com/api/v1/verifactu
 *
 * La app llama a esta ruta y el servidor reenvía la petición añadiendo
 * la cabecera `Authorization: Bearer <API_KEY>`. Así el navegador o la
 * app de escritorio no hablan directamente con el proveedor (sin
 * problemas de CORS) y la autenticación queda en un único punto. La
 * API key viaja en el cuerpo desde la app (vive en la configuración del
 * salón) y nunca se registra en logs.
 *
 * La respuesta se normaliza SIEMPRE a la forma interna:
 *   health  → { estado, nif?, entorno? }
 *   create  → { uuid, estado, url, qr(base64 PNG), huella }
 *   estado  → { estado, uuid?, ... }
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Proveedor = "verifacti" | "verifacturapi";
type Endpoint = "health" | "create" | "estado";

interface ProxyBody {
  endpoint?: Endpoint;
  proveedor?: Proveedor;
  apiKey?: string;
  payload?: unknown;
  uuid?: string;
  idempotencyKey?: string;
}

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

/* ---------- helpers de normalización ---------- */

/** Convierte cualquier forma de QR (base64, data URI o URL de imagen)
 *  en PNG base64 puro, listo para <img> y para el PDF. */
async function normalizeQr(raw: unknown): Promise<string> {
  if (!raw || typeof raw !== "string") return "";
  const s = raw.trim();
  if (s.startsWith("data:image")) return s.split(",")[1] ?? "";
  if (/^https?:\/\//i.test(s)) {
    // ¿Es una URL de imagen? → la descargamos y devolvemos base64
    try {
      const r = await fetch(s, { signal: AbortSignal.timeout(15_000) });
      const type = r.headers.get("content-type") || "";
      if (r.ok && type.includes("image")) {
        const buf = Buffer.from(await r.arrayBuffer());
        return buf.toString("base64");
      }
    } catch {
      /* no es descargable */
    }
    return ""; // era una URL de verificación, no una imagen
  }
  return s;
}

/** Estado AEAT → etiqueta normalizada de la app. */
function normalizeEstado(raw: unknown): string {
  const s = String(raw ?? "").trim();
  if (!s) return "Pendiente";
  const low = s.toLowerCase().replace(/[_\s-]/g, "");
  if (low === "correcto" || low === "correcta" || low === "register")
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  if (low.startsWith("aceptadaconerrores")) return "AceptadaConErrores";
  if (low === "anulada" || low === "cancel") return "Anulada";
  if (low === "noencontrado" || low === "noencontrada") return "No encontrada";
  return s;
}

/** Extrae el primer mensaje de error útil de una respuesta del proveedor. */
function extractError(data: unknown, fallback: string): string {
  if (data && typeof data === "object") {
    const d = data as Record<string, unknown>;
    if (typeof d.error === "string") return d.error;
    if (d.error && typeof d.error === "object") {
      const e = d.error as Record<string, unknown>;
      if (typeof e.message === "string") return e.message;
    }
    if (typeof d.message === "string") return d.message;
    if (d.errors && typeof d.errors === "object") {
      // Laravel: { errors: { campo: ["msg", ...] } }
      const first = Object.values(d.errors as Record<string, unknown>)[0];
      if (Array.isArray(first) && typeof first[0] === "string") return first[0];
    }
  }
  return fallback;
}

/* ---------- peticiones upstream ---------- */

async function callUpstream(
  url: string,
  method: "GET" | "POST",
  headers: Record<string, string>,
  bodyOut?: string
): Promise<{ status: number; json: unknown }> {
  const res = await fetch(url, {
    method,
    headers,
    body: bodyOut,
    signal: AbortSignal.timeout(25_000),
    cache: "no-store",
  });
  const text = await res.text();
  let json: unknown = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }
  return { status: res.status, json };
}

/* ---------- verifacti ---------- */

async function verifactiCall(
  endpoint: Endpoint,
  apiKey: string,
  body: ProxyBody
): Promise<NextResponse> {
  const base = "https://api.verifacti.com/verifactu";
  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    Accept: "application/json",
  };
  let url: string;
  let method: "GET" | "POST";
  let bodyOut: string | undefined;

  if (endpoint === "health") {
    url = `${base}/health`;
    method = "GET";
  } else if (endpoint === "estado") {
    const uuid = (body.uuid || "").trim();
    if (!uuid) return jsonError("Falta el identificador del registro (uuid).");
    url = `${base}/status?uuid=${encodeURIComponent(uuid)}`;
    method = "GET";
  } else {
    url = `${base}/create`;
    method = "POST";
    headers["Content-Type"] = "application/json";
    if (body.idempotencyKey)
      headers["Idempotency-Key"] = String(body.idempotencyKey).slice(0, 255);
    bodyOut = JSON.stringify(body.payload ?? {});
  }

  const { status, json } = await callUpstream(url, method, headers, bodyOut);
  const d = (json ?? {}) as Record<string, unknown>;

  if (status >= 400) {
    const detail = (typeof d.error === "string" && d.error) || (typeof d.message === "string" && d.message) || "";
    let friendly = `Verifactu respondió con error ${status}.`;
    if (status === 401 || status === 403)
      friendly =
        "La API key de Verifactu no es válida o está desactivada. Revísala en Ajustes.";
    else if (status === 400 && detail)
      friendly = `Verifactu rechazó la factura: ${detail}`;
    else if (status === 409)
      friendly =
        "El registro anterior con esta clave sigue procesándose; reintenta en unos segundos.";
    else if (status === 422)
      friendly =
        "Conflicto de idempotencia: ya se envió esta factura con datos distintos.";
    else if (status === 500)
      friendly = "Error en el servidor de Verifactu; reintenta en unos instantes.";
    else if (detail) friendly = `Error de Verifactu: ${detail}`;
    return NextResponse.json({ ok: false, error: friendly }, { status: 502 });
  }

  if (endpoint === "health") {
    return NextResponse.json({
      ok: true,
      data: {
        estado: d.estado || "OK",
        nif: typeof d.nif === "string" ? d.nif : undefined,
        entorno: typeof d.entorno === "string" ? d.entorno : undefined,
      },
    });
  }

  if (endpoint === "estado") {
    return NextResponse.json({
      ok: true,
      data: {
        uuid: body.uuid,
        estado: normalizeEstado(d.estado ?? d.estado_registro),
        url: typeof d.url === "string" ? d.url : undefined,
        huella: typeof d.huella === "string" ? d.huella : undefined,
      },
    });
  }

  // create → { uuid, estado, url, qr, huella }
  return NextResponse.json({
    ok: true,
    data: {
      uuid: d.uuid ?? "",
      estado: normalizeEstado(d.estado ?? "Pendiente"),
      url: d.url ?? "",
      qr: await normalizeQr(d.qr),
      huella: d.huella ?? "",
    },
  });
}

/* ---------- verifacturapi ---------- */

const VRAPI_BASE = "https://api.verifacturapi.com/api/v1";

async function verifacturapiCall(
  endpoint: Endpoint,
  apiKey: string,
  body: ProxyBody
): Promise<NextResponse> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    Accept: "application/json",
  };
  let url: string;
  let method: "GET" | "POST";
  let bodyOut: string | undefined;

  if (endpoint === "health") {
    url = `${VRAPI_BASE}/verifactu/test-connection`;
    method = "GET";
  } else if (endpoint === "estado") {
    const uuid = (body.uuid || "").trim();
    if (!uuid) return jsonError("Falta el identificador del registro (uuid).");
    url = `${VRAPI_BASE}/verifactu/invoices/${encodeURIComponent(uuid)}/status`;
    method = "GET";
  } else {
    url = `${VRAPI_BASE}/verifactu/create`;
    method = "POST";
    headers["Content-Type"] = "application/json";
    bodyOut = JSON.stringify(body.payload ?? {});
  }

  const { status, json } = await callUpstream(url, method, headers, bodyOut);

  if (status >= 400) {
    const fallback = `Verifacturapi respondió con error ${status}.`;
    const detail = extractError(json, fallback);
    let friendly = detail;
    if (status === 401 || status === 403)
      friendly =
        "La API key de Verifacturapi no es válida o está desactivada. Revísala en Ajustes.";
    else if (status === 422)
      friendly = `Verifacturapi rechazó los datos: ${detail}`;
    else if (status === 429)
      friendly =
        "Has superado el límite de peticiones del plan de Verifacturapi; reintenta en un minuto.";
    return NextResponse.json({ ok: false, error: friendly }, { status: 502 });
  }

  const envelope = (json ?? {}) as Record<string, unknown>;
  const okFlag = envelope.ok !== false;

  if (endpoint === "health") {
    // { ok, details: { environment: sandbox|production, ... }, error }
    const details = (envelope.details ?? {}) as Record<string, unknown>;
    const okConn = okFlag && !envelope.error;
    return NextResponse.json({
      ok: true,
      data: {
        estado: okConn ? "OK" : "ERROR",
        nif: undefined, // verifacturapi no devuelve el NIF en test-connection
        entorno:
          details.environment === "sandbox"
            ? "test"
            : details.environment === "production"
              ? "produccion"
              : undefined,
      },
    });
  }

  if (!okFlag) {
    return NextResponse.json(
      { ok: false, error: extractError(envelope, "Verifacturapi devolvió un error.") },
      { status: 502 }
    );
  }

  const d = (envelope.data ?? {}) as Record<string, unknown>;

  if (endpoint === "estado") {
    // { ok, data: { found, uuid, aeat_status, aeat_csv, local_status, ... } }
    return NextResponse.json({
      ok: true,
      data: {
        uuid: d.uuid ?? body.uuid,
        estado: d.found === false ? "No encontrada" : normalizeEstado(d.aeat_status ?? d.local_status),
        url: undefined,
        huella: undefined,
      },
    });
  }

  // create → data puede traer uuid/qr/huella/url con nombres varios
  const qrRaw =
    (d.qr as string) ?? (d.qr_image as string) ?? (d.qrBase64 as string) ?? "";
  const urlRaw =
    (d.url as string) ??
    (d.verification_url as string) ??
    (/^https?:\/\//i.test(String(qrRaw)) ? String(qrRaw) : "");

  return NextResponse.json({
    ok: true,
    data: {
      uuid: d.uuid ?? d.invoice_uuid ?? "",
      estado: normalizeEstado(d.status ?? d.local_status ?? d.estado ?? "Pendiente"),
      url: urlRaw,
      qr: await normalizeQr(qrRaw),
      huella: d.huella ?? d.fingerprint ?? "",
    },
  });
}

/* ---------- ruta ---------- */

export async function POST(req: NextRequest) {
  let body: ProxyBody;
  try {
    body = await req.json();
  } catch {
    return jsonError("Petición incorrecta.");
  }

  const apiKey = (body.apiKey || "").trim();
  if (!apiKey) {
    return jsonError(
      "Falta la API key del proveedor de Verifactu. Configúrala en Ajustes → Facturación Verifactu."
    );
  }

  try {
    if (body.proveedor === "verifacturapi")
      return await verifacturapiCall(body.endpoint ?? "create", apiKey, body);
    return await verifactiCall(body.endpoint ?? "create", apiKey, body);
  } catch (err) {
    const msg =
      err instanceof Error && err.name === "TimeoutError"
        ? "La conexión con el proveedor de Verifactu ha tardado demasiado. Comprueba tu conexión a internet y reintenta."
        : "No se pudo conectar con el proveedor de Verifactu. Comprueba tu conexión a internet y reintenta.";
    return NextResponse.json({ ok: false, error: msg }, { status: 502 });
  }
}
