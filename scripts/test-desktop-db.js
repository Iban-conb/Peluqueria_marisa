/**
 * Prueba del puente de base de datos de escritorio (desktop/db.js):
 * DB JSON → .sqlite en disco → DB JSON, comparando el contenido clave.
 * Ejecutar:  bun /home/z/my-project/scripts/test-desktop-db.js
 */
const fs = require("fs");
const path = require("path");
const os = require("os");
const dbio = require("/home/z/my-project/desktop/db.js");

const PDF_B64 = Buffer.from("%PDF-1.4 prueba de factura").toString("base64");

const sample = {
  version: 1,
  salon: {
    name: "Peluquería Marisa",
    fiscalName: "Marisa García S.L.",
    nif: "12345678Z",
    phone: "600 000 000",
    email: "hola@peluqueriamarisa.es",
    street: "Calle Falsa 123",
    zip: "28001",
    city: "Madrid",
    verifactu: {
      activo: true,
      apiKey: "clave-de-prueba-abc123",
      tipoIva: 21,
      nifEmisor: "12345678Z",
      entorno: "test",
    },
  },
  clients: [
    { id: "c-1", name: "María Fernández", phone: "612 345 678", email: "m@x.es", street: "C/ Olivo 14", zip: "28012", city: "Madrid", createdAt: "2024-09-12" },
    { id: "c-2", name: "Carmen Ruiz", phone: "655 210 987", email: "", street: "", zip: "", city: "Sevilla", createdAt: "2024-10-02" },
  ],
  services: [
    { id: "s-1", name: "Corte", duration: 45, price: 22, color: "#2e6e4f", products: [{ productId: "p-1", qty: 1 }] },
  ],
  appointments: [
    { id: "a-1", clientId: "c-1", date: "2026-09-29", start: 600, duration: 45, status: "confirmada", notes: "puntas", serviceName: "Corte", price: 22, color: "#2e6e4f", serviceId: "s-1", invoiceId: "", createdAt: "2026-09-29" },
  ],
  invoices: [
    { id: "i-1", seq: 1, year: 2026, number: "F2026-001", appointmentId: "a-1", clientId: "c-1", date: "2026-09-29", lines: [{ kind: "servicio", name: "Corte", qty: 1, price: 22 }], total: 22, pdfBase64: PDF_B64, verifactu: { uuid: "uuid-123", estado: "Pendiente", url: "https://www2.aeat.es/ValidarQR?x=1", qr: "iVBORw0KGgo=", huella: "ABCDEF0123456789", enviadoEn: "2026-09-29T10:00:05.000Z", tipoFactura: "F2" }, createdAt: "2026-09-29T10:00:00.000Z" },
  ],
  consents: [
    { id: "cn-1", clientId: "c-1", signedAt: "2026-09-29T09:00:00.000Z", textVersion: 1, marketing: true, clientName: "María Fernández", pdfBase64: PDF_B64 },
  ],
  products: [
    { id: "p-1", name: "Tinte nº5", brand: "L'Oréal", category: "coloracion", sku: "COL-005", stock: 4, minStock: 3, cost: 8.5, price: 0, supplier: "Peluter", notes: "", createdAt: "2025-01-10" },
  ],
  movements: [
    { id: "m-1", productId: "p-1", type: "salida", qty: 1, resultStock: 3, prevStock: 4, reason: "Consumo en cita", date: "2026-09-29T10:00:00.000Z" },
  ],
  productCategories: [
    { id: "coloracion", name: "Coloración", fg: "#7c2d12", bg: "#fde68a" },
  ],
  settings: { openHour: 9, closeHour: 20, step: 15, openDays: [1, 2, 3, 4, 5, 6], closedDates: [] },
};

(async () => {
  const tmp = path.join(os.tmpdir(), "peluqueria-test-" + Date.now() + ".sqlite");
  try {
    // 1. JSON → sqlite binario → archivo
    const bytes = await dbio.dbToSqlite(JSON.stringify(sample));
    dbio.writeDbFileAtomic(tmp, Buffer.from(bytes));
    if (!fs.existsSync(tmp)) throw new Error("el archivo no se escribió");
    console.log("OK  archivo escrito:", fs.statSync(tmp).size, "bytes");

    // 2. archivo → DB JSON
    const back = await dbio.sqliteToDb(dbio.readDbFile(tmp));

    // 3. comparaciones
    const eq = (a, b, what) => {
      const ja = JSON.stringify(a);
      const jb = JSON.stringify(b);
      if (ja !== jb) throw new Error(`${what}: ${ja} != ${jb}`);
      console.log("OK ", what);
    };
    eq(back.clients, sample.clients, "clients (2)");
    eq(back.services[0].products, sample.services[0].products, "services.products");
    eq(back.appointments, sample.appointments, "appointments");
    if (back.invoices[0].pdfBase64 !== PDF_B64) throw new Error("pdf factura");
    console.log("OK  invoices.pdf (base64 intacto)");
    eq(back.invoices[0].verifactu, sample.invoices[0].verifactu, "invoices.verifactu (QR/uuid/huella)");
    eq(back.salon.verifactu, sample.salon.verifactu, "salon.verifactu (API key/IVA)");
    if (back.consents[0].pdfBase64 !== PDF_B64) throw new Error("pdf consentimiento");
    console.log("OK  consents.pdf (base64 intacto)");
    if (back.consents[0].marketing !== true) throw new Error("consents.marketing");
    eq(back.products, sample.products, "products");
    eq(back.movements, sample.movements, "movements (con prevStock)");
    eq(back.productCategories, sample.productCategories, "productCategories");
    if (back.salon.nif !== "12345678Z") throw new Error("salon");
    console.log("OK  salon");

    // 4. tolerancia: archivo viejo sin invoices/consents/salon
    const minimal = { clients: sample.clients, appointments: sample.appointments, services: [{ id: "s-1", name: "Corte", duration: 45, price: 22 }] };
    const bytes2 = await dbio.dbToSqlite(minimal);
    const back2 = await dbio.sqliteToDb(bytes2);
    if (back2.clients.length !== 2) throw new Error("minimal clients");
    if (back2.invoices.length !== 0) throw new Error("minimal invoices debe ser []");
    if (back2.consents.length !== 0) throw new Error("minimal consents debe ser []");
    console.log("OK  tolerancia a bases antiguas (sin tablas nuevas)");

    // 4b. tolerancia verifactu: factura sin registro y salón sin config
    const sinVf = {
      clients: sample.clients,
      appointments: sample.appointments,
      invoices: [{ id: "i-2", seq: 1, year: 2026, number: "F2026-001", appointmentId: "a-1", clientId: "c-1", date: "2026-09-29", lines: [], total: 10, createdAt: "2026-09-29" }],
      salon: { name: "Salón sin verifactu", nif: "X" },
    };
    const back3 = await dbio.sqliteToDb(await dbio.dbToSqlite(sinVf));
    if (back3.invoices[0].verifactu !== undefined) throw new Error("verifactu debe ser undefined");
    if (back3.salon.verifactu !== undefined) throw new Error("salon.verifactu debe ser undefined");
    console.log("OK  tolerancia sin datos verifactu");

    // 5. borrado
    dbio.deleteDbFile(tmp);
    if (fs.existsSync(tmp)) throw new Error("no se borró");
    console.log("OK  deleteDbFile");

    console.log("\nTODO CORRECTO");
  } catch (e) {
    console.error("FALLO:", e.message);
    process.exit(1);
  }
})();
