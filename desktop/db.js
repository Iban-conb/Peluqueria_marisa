/**
 * Persistencia de la base de datos de Peluquería Marisa en un archivo
 * .sqlite REAL en el disco del PC (proceso principal de Electron).
 *
 * El esquema y la serialización son EXACTAMENTE los mismos que los del
 * export/import de la app (src/lib/sqlite-export.ts): el archivo que
 * vive en el PC es idéntico a los que genera Ajustes → Exportar, de modo
 * que se puede copiar a otro equipo, subir a Drive o abrir con cualquier
 * visor SQLite.
 */

const path = require("path");
const fs = require("fs");

let SQL = null;

async function getSQL() {
  if (SQL) return SQL;
  const initSqlJs = require("sql.js");
  SQL = await initSqlJs({
    locateFile: (file) => require.resolve("sql.js/dist/" + file),
  });
  return SQL;
}

/* ---------- DB (JSON) → archivo SQLite ---------- */

function dbToSqlite(db) {
  const d = typeof db === "string" ? JSON.parse(db) : db;
  return getSQL().then((SQL) => {
    const sqlite = new SQL.Database();

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
        textVersion INTEGER NOT NULL DEFAULT 1,
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
        name TEXT,
        fg TEXT NOT NULL DEFAULT '#6b5050',
        bg TEXT NOT NULL DEFAULT '#ebe1e0'
      );

      CREATE TABLE movements (
        id TEXT PRIMARY KEY,
        productId TEXT NOT NULL,
        type TEXT NOT NULL,
        qty INTEGER NOT NULL,
        resultStock INTEGER NOT NULL DEFAULT 0,
        prevStock INTEGER,
        reason TEXT NOT NULL DEFAULT '',
        date TEXT NOT NULL,
        FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE
      );
      CREATE INDEX idx_movements_productId ON movements(productId);
      CREATE INDEX idx_movements_date ON movements(date);
    `);

    const insert = (sql, rows) => {
      if (!rows || rows.length === 0) return;
      const st = sqlite.prepare(sql);
      for (const r of rows) st.run(r);
      st.free();
    };

    insert(
      `INSERT INTO salon (id, name, fiscalName, nif, phone, email, street, zip, city, verifactu) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [[
        d.salon?.name || "Peluquería Marisa",
        d.salon?.fiscalName || "",
        d.salon?.nif || "",
        d.salon?.phone || "",
        d.salon?.email || "",
        d.salon?.street || "",
        d.salon?.zip || "",
        d.salon?.city || "",
        d.salon?.verifactu ? JSON.stringify(d.salon.verifactu) : null,
      ]]
    );

    insert(
      `INSERT INTO clients (id, name, phone, email, street, zip, city, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      (d.clients || []).map((c) => [
        c.id, c.name, c.phone || "", c.email || "",
        c.street || "", c.zip || "", c.city || "",
        c.createdAt || "",
      ])
    );

    insert(
      `INSERT INTO services (id, name, duration, price, color, products) VALUES (?, ?, ?, ?, ?, ?)`,
      (d.services || []).map((s) => [
        s.id, s.name, s.duration || 0, s.price || 0, s.color || null,
        JSON.stringify(s.products || []),
      ])
    );

    insert(
      `INSERT INTO appointments (id, clientId, date, start, duration, status, notes, serviceName, price, color, serviceId, invoiceId, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      (d.appointments || []).map((a) => [
        a.id, a.clientId, a.date, a.start || 0, a.duration || 0,
        a.status || "pendiente", a.notes || "", a.serviceName || "",
        a.price || 0, a.color || null, a.serviceId || "",
        a.invoiceId || "", a.createdAt || "",
      ])
    );

    insert(
      `INSERT INTO invoices (id, seq, year, number, appointmentId, clientId, date, lines, total, pdf, verifactu, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      (d.invoices || []).map((i) => [
        i.id, i.seq || 1, i.year || 0, i.number || "",
        i.appointmentId || "", i.clientId || "", i.date || "",
        JSON.stringify(i.lines || []), i.total || 0,
        i.pdfBase64 ? Buffer.from(i.pdfBase64, "base64") : Buffer.alloc(0),
        i.verifactu ? JSON.stringify(i.verifactu) : null,
        i.createdAt || "",
      ])
    );

    insert(
      `INSERT INTO consents (id, clientId, signedAt, textVersion, marketing, clientName, pdf) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      (d.consents || []).map((c) => [
        c.id, c.clientId, c.signedAt || "",
        typeof c.textVersion === "number" ? c.textVersion : 1,
        c.marketing ? 1 : 0, c.clientName || "",
        c.pdfBase64 ? Buffer.from(c.pdfBase64, "base64") : Buffer.alloc(0),
      ])
    );

    insert(
      `INSERT INTO product_categories (id, name, fg, bg) VALUES (?, ?, ?, ?)`,
      (d.productCategories || []).map((c) => [
        c.id, c.name || "", c.fg || "#6b5050", c.bg || "#ebe1e0",
      ])
    );

    insert(
      `INSERT INTO products (id, name, brand, category, sku, stock, minStock, cost, price, supplier, notes, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      (d.products || []).map((p) => [
        p.id, p.name, p.brand || "", p.category || "otros", p.sku || "",
        p.stock ?? 0, p.minStock ?? 0, p.cost ?? 0, p.price ?? 0,
        p.supplier || "", p.notes || "", p.createdAt || "",
      ])
    );

    insert(
      `INSERT INTO movements (id, productId, type, qty, resultStock, prevStock, reason, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      (d.movements || []).map((m) => [
        m.id, m.productId, m.type, m.qty || 0, m.resultStock ?? 0,
        typeof m.prevStock === "number" ? m.prevStock : null,
        m.reason || "", m.date || "",
      ])
    );

    const binary = sqlite.export();
    sqlite.close();
    return binary;
  });
}

/* ---------- archivo SQLite → DB (JSON) ---------- */

function queryAll(sqlite, sql) {
  const result = sqlite.exec(sql);
  if (result.length === 0) return [];
  const { columns, values } = result[0];
  return values.map((row) => {
    const obj = {};
    columns.forEach((col, i) => (obj[col] = row[i]));
    return obj;
  });
}

function parseServiceProducts(raw) {
  if (typeof raw !== "string" || !raw) return undefined;
  try {
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return undefined;
    return arr
      .filter((x) => typeof x?.productId === "string" && Number(x?.qty) > 0)
      .map((x) => ({ productId: String(x.productId), qty: Number(x.qty) }));
  } catch {
    return undefined;
  }
}

function tryQuery(sqlite, sql) {
  try {
    return queryAll(sqlite, sql);
  } catch {
    return [];
  }
}

function sqliteToDb(bytes) {
  return getSQL().then((SQL) => {
    const sqlite = new SQL.Database(new Uint8Array(bytes));

    const clients = tryQuery(sqlite, "SELECT * FROM clients").map((c) => ({
      ...c,
      email: typeof c.email === "string" ? c.email : "",
    }));

    const services = tryQuery(sqlite, "SELECT * FROM services").map((s) => {
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

    const appointments = tryQuery(sqlite, "SELECT * FROM appointments");

    const consents = tryQuery(sqlite, "SELECT * FROM consents").map((r) => ({
      id: r.id,
      clientId: r.clientId,
      signedAt: r.signedAt,
      textVersion: typeof r.textVersion === "number" ? r.textVersion : 1,
      marketing: !!r.marketing,
      clientName: r.clientName || "",
      pdfBase64:
        r.pdf && r.pdf.length ? Buffer.from(r.pdf).toString("base64") : "",
    }));

    let salon;
    const salonRows = tryQuery(sqlite, "SELECT * FROM salon WHERE id = 1");
    if (salonRows.length > 0) {
      const s = salonRows[0];
      // La columna verifactu (JSON) puede no existir en archivos antiguos
      let verifactu;
      if (typeof s.verifactu === "string" && s.verifactu) {
        try { verifactu = JSON.parse(s.verifactu); } catch { verifactu = undefined; }
      }
      salon = {
        name: s.name || "Peluquería Marisa",
        fiscalName: s.fiscalName || "",
        nif: s.nif || "",
        phone: s.phone || "",
        email: s.email || "",
        street: s.street || "",
        zip: s.zip || "",
        city: s.city || "",
        ...(verifactu ? { verifactu } : {}),
      };
    }

    const products = tryQuery(sqlite, "SELECT * FROM products").map((p) => ({
      ...p,
      stock: Number(p.stock) || 0,
      minStock: Number(p.minStock) || 0,
      cost: Number(p.cost) || 0,
      price: Number(p.price) || 0,
    }));

    const movements = tryQuery(sqlite, "SELECT * FROM movements").map((m) => ({
      ...m,
      qty: Number(m.qty) || 0,
      resultStock: Number(m.resultStock) || 0,
      ...(typeof m.prevStock === "number" ? { prevStock: m.prevStock } : {}),
    }));

    const invoices = tryQuery(sqlite, "SELECT * FROM invoices").map((r) => {
      let lines = [];
      try {
        const parsed = JSON.parse(r.lines || "[]");
        if (Array.isArray(parsed)) lines = parsed;
      } catch {
        lines = [];
      }
      let verifactu;
      if (typeof r.verifactu === "string" && r.verifactu) {
        try { verifactu = JSON.parse(r.verifactu); } catch { verifactu = undefined; }
      }
      return {
        id: r.id,
        seq: Number(r.seq) || 1,
        year: Number(r.year) || new Date().getFullYear(),
        number: r.number || "",
        appointmentId: r.appointmentId || "",
        clientId: r.clientId || "",
        date: r.date || "",
        lines,
        total: Number(r.total) || 0,
        pdfBase64:
          r.pdf && r.pdf.length ? Buffer.from(r.pdf).toString("base64") : "",
        ...(verifactu ? { verifactu } : {}),
        createdAt: r.createdAt || "",
      };
    });

    const productCategories = tryQuery(
      sqlite,
      "SELECT * FROM product_categories"
    ).map((c) => ({
      id: c.id,
      name: c.name || "",
      fg: c.fg || "#6b5050",
      bg: c.bg || "#ebe1e0",
    }));

    sqlite.close();

    return {
      version: 1,
      clients,
      appointments,
      services,
      consents,
      salon,
      products,
      movements,
      invoices,
      ...(productCategories.length ? { productCategories } : {}),
    };
  });
}

/* ---------- Archivo en disco (atómico + respaldo diario) ---------- */

function readDbFile(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath);
}

function writeDbFileAtomic(filePath, bytes) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  const tmp = filePath + ".tmp";
  fs.writeFileSync(tmp, bytes);
  // Respaldo diario: una copia por día, se conservan las 7 últimas
  try {
    const today = new Date().toISOString().slice(0, 10);
    const backupDir = path.join(dir, "backups");
    const marker = path.join(backupDir, ".last-" + today);
    if (fs.existsSync(filePath) && !fs.existsSync(marker)) {
      fs.mkdirSync(backupDir, { recursive: true });
      fs.copyFileSync(
        filePath,
        path.join(backupDir, "peluqueria-" + today + ".sqlite")
      );
      fs.writeFileSync(marker, "");
      const old = fs
        .readdirSync(backupDir)
        .filter((f) => f.startsWith("peluqueria-") && f.endsWith(".sqlite"))
        .sort()
        .slice(0, -7);
      for (const f of old) fs.unlinkSync(path.join(backupDir, f));
    }
  } catch {
    /* el respaldo es best-effort; nunca bloquea el guardado */
  }
  fs.renameSync(tmp, filePath);
}

function deleteDbFile(filePath) {
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch {
    /* ignore */
  }
  try {
    if (fs.existsSync(filePath + ".tmp")) fs.unlinkSync(filePath + ".tmp");
  } catch {
    /* ignore */
  }
}

module.exports = {
  dbToSqlite,
  sqliteToDb,
  readDbFile,
  writeDbFileAtomic,
  deleteDbFile,
};
