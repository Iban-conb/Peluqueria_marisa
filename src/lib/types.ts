export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  street: string;
  zip: string;
  city: string;
  createdAt: string;
}

/** Datos identificativos y fiscales del salón.
 *  Se muestran por la aplicación y se usan en los textos legales. */
export interface SalonInfo {
  /** Nombre comercial visible en la app */
  name: string;
  /** Razón social (si difiere del nombre comercial) */
  fiscalName: string;
  nif: string;
  phone: string;
  email: string;
  street: string;
  zip: string;
  city: string;
  /** Configuración de la facturación verificable (VERI*FACTU) vía verifacti.com */
  verifactu?: VerifactuConfig;
}

/* ============================ VERIFACTU ============================ */

/** Configuración de VERI*FACTU (proveedores: verifacti.com o verifacturapi.com).
 *
 *  El usuario solo necesita darse de alta en el proveedor, registrar el
 *  NIF del salón y pegar aquí la API key que le genere: con ella el
 *  proveedor determina el NIF del emisor y el entorno (pruebas o
 *  producción), de modo que no hay que configurar nada más. */
export interface VerifactuConfig {
  /** Registro automático de facturas activado */
  activo: boolean;
  /** API key del proveedor (Authorization: Bearer) */
  apiKey: string;
  /** Proveedor del servicio de registro
   *  - verifacti: api.verifacti.com (API key por NIF)
   *  - verifacturapi: api.verifacturapi.com (multi-CIF, plan gratuito) */
  proveedor?: "verifacti" | "verifacturapi";
  /** Tipo de IVA ya incluido en los precios del salón (%, 21 por defecto).
   *  Se usa para desglosar base y cuota al registrar la factura. */
  tipoIva: number;
  /** NIF detectado al probar la conexión (informativo, solo lectura) */
  nifEmisor?: string;
  /** Entorno de la API key: «test» o «produccion» (informativo) */
  entorno?: string;
}

/** Datos que devuelve verifacti al registrar una factura.
 *  Se guardan junto a la factura para poder mostrar el QR y consultar
 *  el estado del registro en la AEAT. */
export interface VerifactuRecord {
  /** Identificador único del registro de facturación */
  uuid: string;
  /** Estado del registro: Pendiente → Correcto / AceptadaConErrores / … */
  estado: string;
  /** URL pública de verificación de la AEAT (contenido del QR) */
  url: string;
  /** Imagen del código QR en PNG base64 (sin el prefijo data:) */
  qr: string;
  /** Huella o hash SHA-256 del registro */
  huella: string;
  /** Fecha ISO del envío a Verifactu */
  enviadoEn: string;
  /** Tipo de factura enviado: F1 (completa) o F2 (simplificada) */
  tipoFactura?: string;
  /** Último error de envío (la factura no llegó a registrarse) */
  error?: string;
}

/** Registro de consentimiento informado (RGPD) firmado por el cliente.
 *  El PDF firmado se guarda en la propia base de datos como base64. */
export interface Consent {
  id: string;
  clientId: string;
  /** Fecha de firma ISO */
  signedAt: string;
  /** Versión del texto legal firmado */
  textVersion: number;
  /** ¿Aceptó recibir comunicaciones comerciales? */
  marketing: boolean;
  /** Nombre del cliente en el momento de la firma (snapshot) */
  clientName: string;
  /** Documento PDF firmado, codificado en base64 */
  pdfBase64: string;
}

export interface Service {
  id: string;
  name: string;
  duration: number; // minutos
  price: number; // euros
  color: string;
  /** Productos del almacén que consume este tratamiento (opcional). */
  products?: { productId: string; qty: number }[];
}

export type AppointmentStatus = "pendiente" | "confirmada" | "completada" | "cancelada";

export interface Appointment {
  id: string;
  clientId: string;
  date: string; // yyyy-mm-dd
  start: number; // minutos desde medianoche
  duration: number;
  status: AppointmentStatus;
  notes: string;
  serviceName: string;
  price: number;
  color: string;
  /** Servicio usado para crear la cita (para localizar sus productos incluidos). */
  serviceId?: string;
  /** Factura vinculada a esta cita, si ya se facturó. */
  invoiceId?: string;
  createdAt: string;
}

/** Máximo de citas simultáneas permitidas en la misma franja horaria
 *  (p. ej. dos profesionales atendiendo a la vez a las 10:00). */
export const MAX_SIMULTANEOUS_APPTS = 2;

/* ============================ FACTURACIÓN ============================ */

/** Línea de factura: el servicio de la cita o un producto (incluido o vendido). */
export interface InvoiceLine {
  kind: "servicio" | "producto";
  /** Solo en líneas de producto */
  productId?: string;
  name: string;
  qty: number;
  /** Precio unitario; los productos incluidos en el tratamiento van a 0 € */
  unitPrice: number;
  /** true si el producto venía incluido en el tratamiento (no se cobra) */
  included?: boolean;
}

/** Factura de una cita. El PDF firmado se guarda en base64 para poder
 *  volver a descargarlo sin regenerarlo. */
export interface Invoice {
  id: string;
  /** Número secuencial dentro del año */
  seq: number;
  year: number;
  /** Identificador completo, p. ej. «F2026-001» */
  number: string;
  appointmentId: string;
  clientId: string;
  /** Fecha de emisión ISO */
  date: string;
  lines: InvoiceLine[];
  /** Importe total facturado (servicio + ventas; los incluidos van a 0 €) */
  total: number;
  /** Documento PDF generado, codificado en base64 */
  pdfBase64: string;
  /** Registro VERI*FACTU (QR, huella, estado), si se envió a Verifactu */
  verifactu?: VerifactuRecord;
  createdAt: string;
}

/** Siguiente número de factura para el año en curso. */
export function nextInvoiceNumber(invoices: Invoice[]): {
  seq: number;
  year: number;
  number: string;
} {
  const year = new Date().getFullYear();
  const maxSeq = invoices
    .filter((i) => i.year === year)
    .reduce((m, i) => Math.max(m, i.seq), 0);
  const seq = maxSeq + 1;
  return { seq, year, number: `F${year}-${String(seq).padStart(3, "0")}` };
}

export interface Settings {
  openHour: number;
  closeHour: number;
  step: number; // minutos por hueco
  /** Días de la semana en los que el salón está abierto.
   *  0 = domingo, 1 = lunes, ..., 6 = sábado. */
  openDays: number[];
  /** Fechas concretas en las que el salón está cerrado
   *  (festivos, vacaciones, etc.). Formato YYYY-MM-DD. */
  closedDates: string[];
}

/* ============================ ALMACÉN ============================ */

/** Definición de una categoría de producto (configurable por el salón). */
export interface ProductCategoryDef {
  id: string;
  name: string;
  /** Color del texto y del fondo de la etiqueta */
  fg: string;
  bg: string;
}

/** Categorías por defecto (migración del modelo fijo anterior). */
export const DEFAULT_PRODUCT_CATEGORIES: ProductCategoryDef[] = [
  { id: "coloracion", name: "Coloración", fg: "#9a5a68", bg: "#f5dde3" },
  { id: "cosmetica", name: "Cosmética capilar", fg: "#46564f", bg: "#e5eae4" },
  { id: "herramientas", name: "Herramientas", fg: "#46564f", bg: "#ebe1e0" },
  { id: "consumibles", name: "Consumibles", fg: "#a16207", bg: "#f7ecd2" },
  { id: "venta", name: "Venta a cliente", fg: "#5a8a4a", bg: "#e1eed8" },
  { id: "otros", name: "Otros", fg: "#6b5050", bg: "#ebe1e0" },
];

/** Paleta cíclica para las categorías nuevas que cree el salón. */
export const CATEGORY_PALETTE: { fg: string; bg: string }[] = [
  { fg: "#3d6f8e", bg: "#ddeaf2" },
  { fg: "#8a5a3d", bg: "#f2e6dc" },
  { fg: "#5b3d8a", bg: "#e9e1f5" },
  { fg: "#46564f", bg: "#e5eae4" },
  { fg: "#a16207", bg: "#f7ecd2" },
  { fg: "#9a5a68", bg: "#f5dde3" },
  { fg: "#5a8a4a", bg: "#e1eed8" },
  { fg: "#6b5050", bg: "#ebe1e0" },
];

/** Localiza una categoría por id; si no existe, devuelve la primera
 *  disponible (o un gris neutro si el salón no tuviera ninguna). */
export function categoryById(
  categories: ProductCategoryDef[],
  id: string
): ProductCategoryDef {
  return (
    categories.find((c) => c.id === id) ??
    categories[0] ?? { id: "otros", name: "Otros", fg: "#6b5050", bg: "#ebe1e0" }
  );
}

/** Categoría de repliegue cuando se elimina una que tenía productos. */
export function fallbackCategoryId(
  categories: ProductCategoryDef[],
  excludeId?: string
): string | null {
  const rest = categories.filter((c) => c.id !== excludeId);
  if (!rest.length) return null;
  return rest.find((c) => c.id === "otros")?.id ?? rest[rest.length - 1].id;
}

/** Producto del almacén del salón. */
export interface Product {
  id: string;
  name: string;
  brand: string;
  /** Id de la categoría (ver DB.productCategories) */
  category: string;
  /** Referencia / código interno (opcional) */
  sku: string;
  /** Unidades disponibles actualmente */
  stock: number;
  /** Umbral a partir del cual se avisa de stock bajo */
  minStock: number;
  /** Precio de coste por unidad (€) */
  cost: number;
  /** Precio de venta por unidad (€); 0 si no se vende */
  price: number;
  supplier: string;
  notes: string;
  createdAt: string;
}

export type StockMovementType = "entrada" | "salida" | "ajuste";

/** Movimiento de stock: entrada (compra), salida (consumo) o ajuste. */
export interface StockMovement {
  id: string;
  productId: string;
  type: StockMovementType;
  /** Cantidad del movimiento (siempre positiva) */
  qty: number;
  /** Stock del producto tras registrar el movimiento */
  resultStock: number;
  /** Stock del producto antes del movimiento (movimientos nuevos; permite deshacer ajustes) */
  prevStock?: number;
  /** Motivo o comentario del movimiento */
  reason: string;
  /** Fecha y hora ISO del movimiento */
  date: string;
}

export interface DB {
  version: number;
  clients: Client[];
  appointments: Appointment[];
  services: Service[];
  consents: Consent[];
  products: Product[];
  movements: StockMovement[];
  invoices: Invoice[];
  /** Categorías de producto configurables */
  productCategories: ProductCategoryDef[];
  salon: SalonInfo;
  settings: Settings;
}

/** Datos por defecto del salón. */
export const DEFAULT_SALON: SalonInfo = {
  name: "Peluquería Marisa",
  fiscalName: "",
  nif: "",
  phone: "",
  email: "",
  street: "",
  zip: "",
  city: "",
};

/** Versión actual del texto del consentimiento RGPD. */
export const CONSENT_TEXT_VERSION = 3;

export const STATUS_META: Record<
  AppointmentStatus,
  { label: string; fg: string; bg: string }
> = {
  pendiente: { label: "Pendiente", fg: "#a16207", bg: "#f7ecd2" },
  confirmada: { label: "Confirmada", fg: "#1d7a46", bg: "#dcefe2" },
  completada: { label: "Completada", fg: "#46564f", bg: "#e5eae4" },
  cancelada: { label: "Cancelada", fg: "#b3364d", bg: "#f8e1e6" },
};

export const STATUS_ORDER: AppointmentStatus[] = [
  "pendiente",
  "confirmada",
  "completada",
  "cancelada",
];

export const SERVICE_COLORS = [
  "#2e6e4f",
  "#b3364d",
  "#96701f",
  "#0e7490",
  "#a16207",
  "#5b5bd6",
];

export const DEFAULT_SERVICES: Service[] = [
  { id: "srv-corte", name: "Corte y peinado", duration: 45, price: 22, color: "#2e6e4f" },
  { id: "srv-tinte", name: "Tinte raíz", duration: 60, price: 35, color: "#b3364d" },
  { id: "srv-mechas", name: "Mechas balayage", duration: 120, price: 85, color: "#96701f" },
  { id: "srv-peinado", name: "Peinado de evento", duration: 50, price: 30, color: "#0e7490" },
  { id: "srv-manicura", name: "Manicura semipermanente", duration: 40, price: 18, color: "#a16207" },
  { id: "srv-keratina", name: "Tratamiento de keratina", duration: 90, price: 60, color: "#5b5bd6" },
];

export const DEFAULT_SETTINGS: Settings = {
  openHour: 9,
  closeHour: 20,
  step: 30,
  openDays: [1, 2, 3, 4, 5, 6], // Lun-Sáb
  closedDates: [],
};

/** Normaliza un objeto cualquiera a VerifactuConfig (migraciones). */
export function normalizeVerifactu(raw: unknown): VerifactuConfig | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const v = raw as Partial<VerifactuConfig>;
  if (!v.apiKey) return undefined;
  return {
    activo: !!v.activo,
    apiKey: String(v.apiKey),
    proveedor:
      v.proveedor === "verifacturapi" ? "verifacturapi" : "verifacti",
    tipoIva:
      typeof v.tipoIva === "number" && v.tipoIva >= 0 ? v.tipoIva : 21,
    nifEmisor: typeof v.nifEmisor === "string" ? v.nifEmisor : undefined,
    entorno: typeof v.entorno === "string" ? v.entorno : undefined,
  };
}

/** Normaliza un objeto cualquiera a SalonInfo (migraciones). */
export function normalizeSalon(raw: unknown): SalonInfo {
  const s = (raw && typeof raw === "object" ? raw : {}) as Partial<SalonInfo>;
  const str = (v: unknown) => (typeof v === "string" ? v : "");
  return {
    name: str(s.name).trim() || DEFAULT_SALON.name,
    fiscalName: str(s.fiscalName),
    nif: str(s.nif),
    phone: str(s.phone),
    email: str(s.email),
    street: str(s.street),
    zip: str(s.zip),
    city: str(s.city),
    verifactu: normalizeVerifactu(s.verifactu),
  };
}

/** Dirección completa en una línea: «Calle X, 28012 Madrid». */
export function salonAddress(s: SalonInfo): string {
  return [s.street, [s.zip, s.city].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join(", ");
}

/** Nombres cortos de los días de la semana, indexados por getDay() (0=Dom). */
export const WEEKDAY_LABELS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
