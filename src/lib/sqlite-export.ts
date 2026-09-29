import initSqlJs, { type Database, type SqlJsStatic } from "sql.js";
import type {
  Appointment,
  Client,
  Consent,
  DB,
  Invoice,
  InvoiceLine,
  Product,
  ProductCategoryDef,
  SalonInfo,
  Service,
  StockMovement,
} from "./types";
import {
  CONSENT_TEXT_VERSION,
  normalizeSalon,
  DEFAULT_SALON,
} from "./types";
import { base64ToBytes, bytesToBase64 } from "./consent-pdf";

let SQL: SqlJsStatic | null = null;

async function getSQL(): Promise<SqlJsStatic> {
  if (SQL) return SQL;
  SQL = await initSqlJs({
    locateFile: (file: string) =>
      `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.14.0/${file}`,
  });
  return SQL;
}

/**
 * Construye una base de datos SQLite en memoria para Peluquería Marisa
 * y vuelca todos los datos (incluidos los consentimientos con su PDF).
 * Devuelve un Blob descargable.
 */
export async function exportToSQLiteBlob(db: DB): Promise<Blob> {
  const sql = await getSQL();
  const sqlite = new sql.Database();

  sqlite.run(`
    CREATE TABLE clients (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL DEFAULT '',
      street TEXT,
      zip TEXT,
      city TEXT,
      createdAt TEXT NOT NULL
    );
    CREATE INDEX idx_clients_name ON clients(name);
    CREATE INDEX idx_clients_phone ON clients(phone);
    CREATE INDEX idx_clients_email ON clients(email);

    CREATE TABLE services (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      duration INTEGER NOT NULL,
      price REAL NOT NULL,
      color TEXT,
      products TEXT NOT NULL DEFAULT '[]'
    );

    CREATE TABLE appointments (
      id TEXT PRIMARY KEY,
      clientId TEXT NOT NULL,
      date TEXT NOT NULL,
      start INTEGER NOT NULL,
      duration INTEGER NOT NULL,
      status TEXT NOT NULL,
      notes TEXT,
      serviceName TEXT NOT NULL,
      price REAL NOT NULL,
      color TEXT,
      serviceId TEXT NOT NULL DEFAULT '',
      invoiceId TEXT NOT NULL DEFAULT '',
      createdAt TEXT NOT NULL,
      FOREIGN KEY (clientId) REFERENCES clients(id) ON DELETE CASCADE
    );
    CREATE INDEX idx_appointments_date ON appointments(date);
    CREATE INDEX idx_appointments_clientId ON appointments(clientId);

    CREATE TABLE invoices (
      id TEXT PRIMARY KEY,
      seq INTEGER NOT NULL,
      year INTEGER NOT NULL,
      number TEXT NOT NULL,
      appointmentId TEXT NOT NULL,
      clientId TEXT NOT NULL,
      date TEXT NOT NULL,
      lines TEXT NOT NULL DEFAULT '[]',
      total REAL NOT NULL DEFAULT 0,
      pdf BLOB,
      verifactu TEXT,
      createdAt TEXT NOT NULL
    );
    CREATE INDEX idx_invoices_clientId ON invoices(clientId);
    CREATE INDEX idx_invoices_appt ON invoices(appointmentId);

    CREATE TABLE consents (
      id TEXT PRIMARY KEY,
      clientId TEXT NOT NULL,
      signedAt TEXT NOT NULL,
      textVersion INTEGER NOT NULL DEFAULT ${CONSENT_TEXT_VERSION},
      marketing INTEGER NOT NULL DEFAULT 0,
      clientName TEXT NOT NULL DEFAULT '',
      pdf BLOB,
      FOREIGN KEY (clientId) REFERENCES clients(id) ON DELETE CASCADE
    );
    CREATE INDEX idx_consents_clientId ON consents(clientId);

    CREATE TABLE salon (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      name TEXT NOT NULL DEFAULT '',
      fiscalName TEXT NOT NULL DEFAULT '',
      nif TEXT NOT NULL DEFAULT '',
      phone TEXT NOT NULL DEFAULT '',
      email TEXT NOT NULL DEFAULT '',
      street TEXT NOT NULL DEFAULT '',
      zip TEXT NOT NULL DEFAULT '',
      city TEXT NOT NULL DEFAULT '',
      verifactu TEXT
    );

    CREATE TABLE products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      brand TEXT NOT NULL DEFAULT '',
      category TEXT NOT NULL DEFAULT 'otros',
      sku TEXT NOT NULL DEFAULT '',
      stock INTEGER NOT NULL DEFAULT 0,
      minStock INTEGER NOT NULL DEFAULT 0,
      cost REAL NOT NULL DEFAULT 0,
      price REAL NOT NULL DEFAULT 0,
      supplier TEXT NOT NULL DEFAULT '',
      notes TEXT NOT NULL DEFAULT '',
      createdAt TEXT NOT NULL DEFAULT ''
    );
    CREATE INDEX idx_products_name ON products(name);

    CREATE TABLE product_categories (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      fg TEXT NOT NULL DEFAULT '#6b5050',
      bg TEXT NOT NULL DEFAULT '#ebe1e0'
    );

    CREATE TABLE movements (
      id TEXT PRIMARY KEY,
      productId TEXT NOT NULL,
      type TEXT NOT NULL,
      qty INTEGER NOT NULL,
      resultStock INTEGER NOT NULL DEFAULT 0,
      reason TEXT NOT NULL DEFAULT '',
      date TEXT NOT NULL,
      FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE
    );
    CREATE INDEX idx_movements_productId ON movements(productId);
    CREATE INDEX idx_movements_date ON movements(date);
  `);

  const insertSalon = sqlite.prepare(
    `INSERT INTO salon (id, name, fiscalName, nif, phone, email, street, zip, city, verifactu) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  );
  insertSalon.run([
    db.salon?.name || DEFAULT_SALON.name,
    db.salon?.fiscalName || "",
    db.salon?.nif || "",
    db.salon?.phone || "",
    db.salon?.email || "",
    db.salon?.street || "",
    db.salon?.zip || "",
    db.salon?.city || "",
    db.salon?.verifactu ? JSON.stringify(db.salon.verifactu) : null,
  ]);
  insertSalon.free();

  const insertClient = sqlite.prepare(
    `INSERT INTO clients (id, name, phone, email, street, zip, city, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  );
  for (const c of db.clients) {
    insertClient.run([
      c.id,
      c.name,
      c.phone,
      c.email || "",
      c.street || "",
      c.zip || "",
      c.city || "",
      c.createdAt,
    ]);
  }
  insertClient.free();

  const insertService = sqlite.prepare(
    `INSERT INTO services (id, name, duration, price, color, products) VALUES (?, ?, ?, ?, ?, ?)`
  );
  for (const s of db.services) {
    insertService.run([
      s.id,
      s.name,
      s.duration,
      s.price,
      s.color,
      JSON.stringify(s.products ?? []),
    ]);
  }
  insertService.free();

  const insertAppt = sqlite.prepare(
    `INSERT INTO appointments (id, clientId, date, start, duration, status, notes, serviceName, price, color, serviceId, invoiceId, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  );
  for (const a of db.appointments) {
    insertAppt.run([
      a.id,
      a.clientId,
      a.date,
      a.start,
      a.duration,
      a.status,
      a.notes || "",
      a.serviceName,
      a.price,
      a.color,
      a.serviceId || "",
      a.invoiceId || "",
      a.createdAt,
    ]);
  }
  insertAppt.free();

  const insertInvoice = sqlite.prepare(
    `INSERT INTO invoices (id, seq, year, number, appointmentId, clientId, date, lines, total, pdf, verifactu, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  );
  for (const i of db.invoices ?? []) {
    insertInvoice.run([
      i.id,
      i.seq,
      i.year,
      i.number,
      i.appointmentId,
      i.clientId,
      i.date,
      JSON.stringify(i.lines),
      i.total,
      i.pdfBase64 ? base64ToBytes(i.pdfBase64) : new Uint8Array(0),
      i.verifactu ? JSON.stringify(i.verifactu) : null,
      i.createdAt,
    ]);
  }
  insertInvoice.free();

  const insertConsent = sqlite.prepare(
    `INSERT INTO consents (id, clientId, signedAt, textVersion, marketing, clientName, pdf) VALUES (?, ?, ?, ?, ?, ?, ?)`
  );
  for (const c of db.consents) {
    insertConsent.run([
      c.id,
      c.clientId,
      c.signedAt,
      c.textVersion ?? CONSENT_TEXT_VERSION,
      c.marketing ? 1 : 0,
      c.clientName || "",
      c.pdfBase64 ? base64ToBytes(c.pdfBase64) : new Uint8Array(0),
    ]);
  }
  insertConsent.free();

  const insertCategory = sqlite.prepare(
    `INSERT INTO product_categories (id, name, fg, bg) VALUES (?, ?, ?, ?)`
  );
  for (const c of db.productCategories ?? []) {
    insertCategory.run([c.id, c.name, c.fg, c.bg]);
  }
  insertCategory.free();

  const insertProduct = sqlite.prepare(
    `INSERT INTO products (id, name, brand, category, sku, stock, minStock, cost, price, supplier, notes, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  );
  for (const p of db.products) {
    insertProduct.run([
      p.id,
      p.name,
      p.brand || "",
      p.category || "otros",
      p.sku || "",
      p.stock ?? 0,
      p.minStock ?? 0,
      p.cost ?? 0,
      p.price ?? 0,
      p.supplier || "",
      p.notes || "",
      p.createdAt || "",
    ]);
  }
  insertProduct.free();

  const insertMovement = sqlite.prepare(
    `INSERT INTO movements (id, productId, type, qty, resultStock, reason, date) VALUES (?, ?, ?, ?, ?, ?, ?)`
  );
  for (const m of db.movements) {
    insertMovement.run([
      m.id,
      m.productId,
      m.type,
      m.qty,
      m.resultStock ?? 0,
      m.reason || "",
      m.date,
    ]);
  }
  insertMovement.free();

  const binary = sqlite.export();
  sqlite.close();
  return new Blob([binary as unknown as BlobPart], {
    type: "application/x-sqlite3",
  });
}

/**
 * Lee un archivo .sqlite exportado y devuelve los datos en formato DB.
 * Compatible con archivos antiguos (sin email, consents ni salon).
 */
export async function importFromSQLiteBlob(
  file: File
): Promise<{
  clients: Client[];
  appointments: Appointment[];
  services: Service[];
  consents: Consent[];
  salon?: SalonInfo;
  products: Product[];
  movements: StockMovement[];
  invoices: Invoice[];
  productCategories?: ProductCategoryDef[];
}> {
  const sql = await getSQL();
  const buffer = await file.arrayBuffer();
  const sqlite = new sql.Database(new Uint8Array(buffer));

  try {
    const clients = queryAll<Client>(sqlite, "SELECT * FROM clients").map(
      (c) => ({ ...c, email: typeof c.email === "string" ? c.email : "" })
    );
    // Los servicios pueden traer la lista de productos incluidos (JSON)
    const services: Service[] = queryAll<RawServiceRow>(
      sqlite,
      "SELECT * FROM services"
    ).map((s) => {
      const products = parseServiceProducts(s.products);
      return {
        id: s.id,
        name: s.name,
        duration: Number(s.duration) || 0,
        price: Number(s.price) || 0,
        color: s.color ?? "#2e6e4f",
        ...(products ? { products } : {}),
      };
    });
    const appointments = queryAll<Appointment>(
      sqlite,
      "SELECT * FROM appointments"
    );

    // La tabla consents puede no existir en copias antiguas
    let consents: Consent[] = [];
    try {
      consents = queryAll<RawConsentRow>(sqlite, "SELECT * FROM consents").map(
        rowToConsent
      );
    } catch {
      consents = [];
    }

    // La tabla salon puede no existir en copias antiguas
    let salon: SalonInfo | undefined;
    try {
      const rows = queryAll<Record<string, unknown>>(
        sqlite,
        "SELECT * FROM salon WHERE id = 1"
      );
      if (rows.length > 0) {
        // La columna verifactu (JSON) puede no existir en copias antiguas
        const r = rows[0] as Record<string, unknown>;
        salon = normalizeSalon({
          ...r,
          verifactu: parseMaybeJson(r.verifactu),
        });
      }
    } catch {
      salon = undefined;
    }

    // Las tablas del almacén pueden no existir en copias antiguas
    let products: Product[] = [];
    let movements: StockMovement[] = [];
    try {
      products = queryAll<Product>(sqlite, "SELECT * FROM products").map(
        (p) => ({
          ...p,
          stock: Number(p.stock) || 0,
          minStock: Number(p.minStock) || 0,
          cost: Number(p.cost) || 0,
          price: Number(p.price) || 0,
        })
      );
    } catch {
      products = [];
    }
    try {
      movements = queryAll<StockMovement>(sqlite, "SELECT * FROM movements").map(
        (m) => ({
          ...m,
          qty: Number(m.qty) || 0,
          resultStock: Number(m.resultStock) || 0,
        })
      );
    } catch {
      movements = [];
    }

    // La tabla invoices puede no existir en copias antiguas
    let invoices: Invoice[] = [];
    try {
      invoices = queryAll<RawInvoiceRow>(sqlite, "SELECT * FROM invoices").map(
        rowToInvoice
      );
    } catch {
      invoices = [];
    }

    // La tabla product_categories puede no existir en copias antiguas
    let productCategories: ProductCategoryDef[] | undefined;
    try {
      productCategories = queryAll<ProductCategoryDef>(
        sqlite,
        "SELECT * FROM product_categories"
      );
    } catch {
      productCategories = undefined;
    }

    return {
      clients,
      appointments,
      services,
      consents,
      salon,
      products,
      movements,
      invoices,
      productCategories,
    };
  } finally {
    sqlite.close();
  }
}

interface RawConsentRow {
  id: string;
  clientId: string;
  signedAt: string;
  textVersion?: number;
  marketing?: number;
  clientName?: string;
  pdf?: Uint8Array;
}

interface RawServiceRow {
  id: string;
  name: string;
  duration: number;
  price: number;
  color?: string;
  products?: string;
}

interface RawInvoiceRow {
  id: string;
  seq: number;
  year: number;
  number: string;
  appointmentId: string;
  clientId: string;
  date: string;
  lines?: string;
  total?: number;
  pdf?: Uint8Array;
  verifactu?: string | null;
  createdAt: string;
}

/** Convierte una celda JSON de SQLite en objeto (o undefined). */
function parseMaybeJson(raw: unknown): unknown {
  if (typeof raw !== "string" || !raw) return undefined;
  try {
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

function parseServiceProducts(raw: unknown):
  | { productId: string; qty: number }[]
  | undefined {
  if (typeof raw !== "string" || !raw) return undefined;
  try {
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return undefined;
    return arr
      .filter(
        (x: Record<string, unknown>) =>
          typeof x?.productId === "string" && Number(x?.qty) > 0
      )
      .map((x: Record<string, unknown>) => ({
        productId: String(x.productId),
        qty: Number(x.qty),
      }));
  } catch {
    return undefined;
  }
}

function rowToInvoice(r: RawInvoiceRow): Invoice {
  let lines: InvoiceLine[] = [];
  try {
    const parsed = JSON.parse(r.lines || "[]");
    if (Array.isArray(parsed)) lines = parsed as InvoiceLine[];
  } catch {
    lines = [];
  }
  return {
    id: r.id,
    seq: Number(r.seq) || 1,
    year: Number(r.year) || new Date().getFullYear(),
    number: r.number || `F${r.year}-${r.seq}`,
    appointmentId: r.appointmentId,
    clientId: r.clientId,
    date: r.date,
    lines,
    total: Number(r.total) || 0,
    pdfBase64:
      r.pdf && r.pdf instanceof Uint8Array && r.pdf.length
        ? bytesToBase64(r.pdf)
        : "",
    verifactu: parseMaybeJson(r.verifactu) as Invoice["verifactu"],
    createdAt: r.createdAt,
  };
}

function rowToConsent(r: RawConsentRow): Consent {
  return {
    id: r.id,
    clientId: r.clientId,
    signedAt: r.signedAt,
    textVersion: typeof r.textVersion === "number" ? r.textVersion : 1,
    marketing: !!r.marketing,
    clientName: r.clientName || "",
    pdfBase64:
      r.pdf && r.pdf instanceof Uint8Array && r.pdf.length
        ? bytesToBase64(r.pdf)
        : "",
  };
}

function queryAll<T>(db: Database, sql: string): T[] {
  const result = db.exec(sql);
  if (result.length === 0) return [];
  const { columns, values } = result[0];
  return values.map((row) => {
    const obj: Record<string, unknown> = {};
    columns.forEach((col, i) => {
      obj[col] = row[i];
    });
    return obj as unknown as T;
  });
}
