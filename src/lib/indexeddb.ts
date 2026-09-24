import { openDB, type DBSchema, type IDBPDatabase } from "idb";
import type {
  Appointment,
  Client,
  Consent,
  DB,
  Product,
  SalonInfo,
  Service,
  Settings,
  StockMovement,
  StockMovementType,
} from "./types";
import {
  DEFAULT_SALON,
  DEFAULT_SERVICES,
  DEFAULT_SETTINGS,
  normalizeSalon,
} from "./types";
import { addDaysKey, todayKey } from "./date-utils";

const DB_NAME = "salon-aura-db";
const DB_VERSION = 1;
const STORAGE_KEY = "salon-aura-db-v1";

interface AuraDB extends DBSchema {
  state: {
    key: string;
    value: DB;
  };
}

let dbPromise: Promise<IDBPDatabase<AuraDB>> | null = null;

function getDB() {
  if (typeof window === "undefined") {
    throw new Error("IndexedDB solo está disponible en el navegador");
  }
  if (!dbPromise) {
    dbPromise = openDB<AuraDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("state")) {
          db.createObjectStore("state");
        }
      },
    });
  }
  return dbPromise;
}

export function uid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto)
    return crypto.randomUUID();
  return `id-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 9)}`;
}

/* ---------- seed inicial ---------- */

const SEED_CLIENTS: Client[] = [
  { id: "c-maria", name: "María Fernández López", phone: "612 345 678", email: "maria.fernandez@example.com", street: "Calle del Olivo 14, 3ºB", zip: "28012", city: "Madrid", createdAt: "2024-09-12" },
  { id: "c-carmen", name: "Carmen Ruiz Delgado", phone: "655 210 987", email: "carmen.ruiz@example.com", street: "Av. de la Constitución 48", zip: "41001", city: "Sevilla", createdAt: "2024-10-02" },
  { id: "c-lucia", name: "Lucía Gómez Navarro", phone: "699 481 230", email: "lucia.gomez@example.com", street: "Carrer de Sants 92", zip: "08014", city: "Barcelona", createdAt: "2024-11-20" },
  { id: "c-antonio", name: "Antonio Mora Vega", phone: "622 903 114", email: "antonio.mora@example.com", street: "Calle Larios 5, 1ºA", zip: "29005", city: "Málaga", createdAt: "2025-01-15" },
  { id: "c-isabel", name: "Isabel Castro Rey", phone: "688 154 762", email: "isabel.castro@example.com", street: "Rúa do Franco 21", zip: "15702", city: "Santiago de Compostela", createdAt: "2025-02-08" },
  { id: "c-paula", name: "Paula Navarro Sanz", phone: "611 876 540", email: "paula.navarro@example.com", street: "Calle Mayor 33, bajo", zip: "46001", city: "Valencia", createdAt: "2025-03-27" },
  { id: "c-elena", name: "Elena Vidal Prats", phone: "677 320 459", email: "elena.vidal@example.com", street: "Paseo de Zorrilla 101", zip: "47007", city: "Valladolid", createdAt: "2025-05-19" },
  { id: "c-rocio", name: "Rocío Blanco Torres", phone: "633 587 201", email: "rocio.blanco@example.com", street: "Calle San Vicente 8, 4ºC", zip: "03002", city: "Alicante", createdAt: "2025-06-30" },
];

function seedAppointments(): Appointment[] {
  const today = todayKey();
  const mk = (
    id: string,
    clientId: string,
    date: string,
    start: number,
    duration: number,
    status: Appointment["status"],
    serviceName: string,
    price: number,
    color: string,
    notes = ""
  ): Appointment => ({
    id,
    clientId,
    date,
    start,
    duration,
    status,
    notes,
    serviceName,
    price,
    color,
    createdAt: date,
  });

  return [
    mk("a-1", "c-maria", today, 600, 45, "confirmada", "Corte y peinado", 22, "#2e6e4f", "Como siempre, puntas"),
    mk("a-2", "c-lucia", today, 690, 120, "pendiente", "Mechas balayage", 85, "#96701f", "Tonos caramelo"),
    mk("a-3", "c-carmen", today, 1020, 60, "confirmada", "Tinte raíz", 35, "#b3364d"),
    mk("a-4", "c-paula", addDaysKey(today, 1), 630, 40, "pendiente", "Manicura semipermanente", 18, "#a16207"),
    mk("a-5", "c-antonio", addDaysKey(today, 1), 720, 45, "pendiente", "Corte y peinado", 22, "#2e6e4f"),
    mk("a-6", "c-elena", addDaysKey(today, 3), 750, 45, "confirmada", "Corte y peinado", 22, "#2e6e4f"),
    mk("a-7", "c-isabel", addDaysKey(today, -1), 660, 90, "completada", "Tratamiento de keratina", 60, "#5b5bd6"),
    mk("a-8", "c-rocio", addDaysKey(today, -1), 1080, 50, "cancelada", "Peinado de evento", 30, "#0e7490", "Avisó con antelación"),
    mk("a-9", "c-maria", addDaysKey(today, -6), 600, 45, "completada", "Corte y peinado", 22, "#2e6e4f"),
  ];
}

export function freshDB(): DB {
  return {
    version: 1,
    clients: [],
    appointments: [],
    services: DEFAULT_SERVICES.map((s) => ({ ...s })),
    consents: [],
    products: [],
    movements: [],
    salon: { ...DEFAULT_SALON },
    settings: { ...DEFAULT_SETTINGS },
  };
}

const SEED_PRODUCTS: Product[] = [
  { id: "p-tinte5", name: "Tinte nº 5 castaño chocolate", brand: "L'Oréal", category: "coloracion", sku: "COL-005", stock: 4, minStock: 3, cost: 8.5, price: 0, supplier: "Peluter", notes: "El más usado en tinte de raíz", createdAt: "2025-01-10" },
  { id: "p-oxi20", name: "Oxidante 20 vol", brand: "Wella", category: "coloracion", sku: "COL-020", stock: 7, minStock: 4, cost: 5.2, price: 0, supplier: "Peluter", notes: "", createdAt: "2025-01-10" },
  { id: "p-polodec", name: "Polvo decolorante", brand: "Schwarzkopf", category: "coloracion", sku: "COL-100", stock: 2, minStock: 2, cost: 14.9, price: 0, supplier: "Peluter", notes: "", createdAt: "2025-01-10" },
  { id: "p-champu", name: "Champú hidratante 300 ml", brand: "Kérastase", category: "venta", sku: "VEN-001", stock: 6, minStock: 3, cost: 12.4, price: 22, supplier: "BeautyPro", notes: "Expositor junto a caja", createdAt: "2025-01-12" },
  { id: "p-mascarilla", name: "Mascarilla reparadora 200 ml", brand: "Kérastase", category: "venta", sku: "VEN-002", stock: 3, minStock: 2, cost: 15.1, price: 26, supplier: "BeautyPro", notes: "", createdAt: "2025-01-12" },
  { id: "p-aceite", name: "Aceite de argán 100 ml", brand: "Moroccanoil", category: "venta", sku: "VEN-003", stock: 5, minStock: 2, cost: 18, price: 32, supplier: "BeautyPro", notes: "", createdAt: "2025-02-03" },
  { id: "p-laca", name: "Laca fijación fuerte 400 ml", brand: "Schwarzkopf", category: "cosmetica", sku: "COS-040", stock: 4, minStock: 2, cost: 6.3, price: 0, supplier: "Peluter", notes: "", createdAt: "2025-02-03" },
  { id: "p-espuma", name: "Espuma de peinado 300 ml", brand: "Wella", category: "cosmetica", sku: "COS-030", stock: 2, minStock: 3, cost: 5.8, price: 0, supplier: "Peluter", notes: "", createdAt: "2025-02-03" },
  { id: "p-aluminio", name: "Papel de aluminio para mechas", brand: "Genérico", category: "consumibles", sku: "CON-001", stock: 2, minStock: 2, cost: 9.5, price: 0, supplier: "Peluter", notes: "Rollo 100 m", createdAt: "2025-01-10" },
  { id: "p-guantes", name: "Guantes de nitrilo talla M", brand: "Genérico", category: "consumibles", sku: "CON-002", stock: 0, minStock: 1, cost: 4.9, price: 0, supplier: "Peluter", notes: "Caja 100 unidades", createdAt: "2025-01-10" },
  { id: "p-tijeras", name: "Tijeras de corte profesional 5,5\"", brand: "Kasho", category: "herramientas", sku: "HER-001", stock: 2, minStock: 1, cost: 145, price: 0, supplier: "", notes: "Afilar cada año", createdAt: "2024-11-05" },
  { id: "p-secador", name: "Secador ionterápico 2200 W", brand: "Parlux", category: "herramientas", sku: "HER-002", stock: 2, minStock: 1, cost: 95, price: 0, supplier: "", notes: "", createdAt: "2024-11-05" },
];

function seedMovements(products: Product[]): StockMovement[] {
  const now = new Date();
  const iso = (daysAgo: number, h: number) => {
    const d = new Date(now);
    d.setDate(d.getDate() - daysAgo);
    d.setHours(h, 0, 0, 0);
    return d.toISOString();
  };
  const mk = (
    id: string,
    productId: string,
    type: StockMovementType,
    qty: number,
    resultStock: number,
    reason: string,
    date: string
  ): StockMovement => ({ id, productId, type, qty, resultStock, reason, date });

  return [
    mk("m-1", "p-guantes", "salida", 2, 0, "Consumo interno", iso(2, 11)),
    mk("m-2", "p-champu", "salida", 1, 6, "Venta a cliente", iso(2, 13)),
    mk("m-3", "p-tinte5", "salida", 2, 4, "Usado en citas", iso(1, 10)),
    mk("m-4", "p-aluminio", "salida", 1, 2, "Usado en citas", iso(1, 16)),
    mk("m-5", "p-laca", "entrada", 3, 4, "Compra a Peluter", iso(1, 18)),
  ];
}

export function seedDB(): DB {
  const products = SEED_PRODUCTS.map((s) => ({ ...s }));
  return {
    version: 1,
    clients: SEED_CLIENTS,
    appointments: seedAppointments(),
    services: DEFAULT_SERVICES.map((s) => ({ ...s })),
    consents: [],
    products,
    movements: seedMovements(products),
    salon: { ...DEFAULT_SALON },
    settings: { ...DEFAULT_SETTINGS },
  };
}

/* ---------- carga / guardado ---------- */

export async function loadDB(): Promise<DB> {
  // 1. Intentar leer de IndexedDB
  try {
    const db = await getDB();
    const stored = await db.get("state", "main");
    if (stored) return normalize(stored);
  } catch {
    /* fallback abajo */
  }

  // 2. Migrar desde localStorage si existe
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const norm = normalize(parsed);
      await saveDB(norm);
      return norm;
    }
  } catch {
    /* ignore */
  }

  // 3. Sembrar base inicial
  const seeded = seedDB();
  await saveDB(seeded);
  return seeded;
}

export async function saveDB(db: DB): Promise<void> {
  try {
    const idb = await getDB();
    await idb.put("state", db, "main");
    // Mantener localStorage como mirror para accesos rápidos / migración
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch {
      /* sin espacio */
    }
  } catch {
    // Sin IndexedDB: guardar solo en localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch {
      /* sin almacenamiento */
    }
  }
}

export async function wipeAllData(): Promise<void> {
  try {
    const idb = await getDB();
    await idb.delete("state", "main");
  } catch {
    /* ignore */
  }
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

function normalize(parsed: unknown): DB {
  if (!parsed || typeof parsed !== "object") return seedDB();
  const p = parsed as Partial<DB>;
  if (!Array.isArray(p.clients) || !Array.isArray(p.appointments)) {
    return seedDB();
  }
  const settings: Partial<Settings> = p.settings || {};
  return {
    version: 1,
    // Migración: clientes antiguos sin correo electrónico
    clients: p.clients.map((c) => ({ ...c, email: typeof c.email === "string" ? c.email : "" })),
    appointments: p.appointments,
    services:
      Array.isArray(p.services) && p.services.length
        ? p.services
        : DEFAULT_SERVICES.map((s) => ({ ...s })),
    consents: Array.isArray(p.consents) ? (p.consents as Consent[]) : [],
    // Migración: bases antiguas sin almacén — se siembran productos de ejemplo
    products:
      Array.isArray(p.products) && p.products.length
        ? (p.products as Product[])
        : SEED_PRODUCTS.map((s) => ({ ...s })),
    movements: Array.isArray(p.movements) ? (p.movements as StockMovement[]) : [],
    // Migración: bases antiguas sin datos del salón
    salon: normalizeSalon(p.salon),
    settings: {
      openHour: typeof settings.openHour === "number" ? settings.openHour : DEFAULT_SETTINGS.openHour,
      closeHour: typeof settings.closeHour === "number" ? settings.closeHour : DEFAULT_SETTINGS.closeHour,
      step: typeof settings.step === "number" ? settings.step : DEFAULT_SETTINGS.step,
      openDays: Array.isArray(settings.openDays) ? settings.openDays : DEFAULT_SETTINGS.openDays,
      closedDates: Array.isArray(settings.closedDates) ? settings.closedDates : DEFAULT_SETTINGS.closedDates,
    },
  };
}

export function dbSizeKB(db: DB): string {
  try {
    return (JSON.stringify(db).length / 1024).toFixed(1);
  } catch {
    return "0";
  }
}

// Re-exportar tipos usados por la capa SQLite
export type {
  Appointment,
  Client,
  Consent,
  DB,
  Product,
  SalonInfo,
  Service,
  Settings,
  StockMovement,
};
