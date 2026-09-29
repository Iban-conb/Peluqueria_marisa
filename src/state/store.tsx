"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type {
  Appointment,
  AppointmentStatus,
  Client,
  Consent,
  DB,
  Invoice,
  InvoiceLine,
  Product,
  ProductCategoryDef,
  SalonInfo,
  Service,
  Settings,
  StockMovement,
  StockMovementType,
  VerifactuRecord,
} from "../lib/types";
import { CATEGORY_PALETTE, fallbackCategoryId } from "../lib/types";
import { norm } from "../lib/date-utils";
import { freshDB, loadDB, saveDB, uid } from "../lib/indexeddb";

interface StoreApi {
  db: DB;
  loading: boolean;
  addClient: (data: Omit<Client, "id" | "createdAt">) => Client;
  updateClient: (id: string, patch: Partial<Client>) => void;
  deleteClient: (id: string) => void;
  addConsent: (data: Omit<Consent, "id">) => Consent;
  deleteConsent: (id: string) => void;
  consentsOf: (clientId: string) => Consent[];
  addAppointment: (data: Omit<Appointment, "id" | "createdAt">) => Appointment;
  updateAppointment: (id: string, patch: Partial<Appointment>) => void;
  deleteAppointment: (id: string) => void;
  setAppointmentStatus: (id: string, status: AppointmentStatus) => void;
  addService: (data: Omit<Service, "id">) => Service;
  updateService: (id: string, patch: Partial<Service>) => void;
  deleteService: (id: string) => void;
  addProduct: (data: Omit<Product, "id" | "createdAt">) => Product;
  updateProduct: (id: string, patch: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  /** Crea una categoría nueva con color de la paleta. Devuelve null si
   *  el nombre está vacío o ya existe otra con el mismo nombre. */
  addProductCategory: (name: string) => ProductCategoryDef | null;
  renameProductCategory: (id: string, name: string) => boolean;
  /** Elimina una categoría; sus productos pasan a la de repliegue
   *  («Otros» si existe). Devuelve false si es la última que queda. */
  deleteProductCategory: (id: string) => boolean;
  /** Registra un movimiento de stock y actualiza el stock del producto.
   *  Devuelve null si la operación no es válida (p. ej. salida sin stock). */
  addStockMovement: (
    productId: string,
    type: StockMovementType,
    qty: number,
    reason: string
  ) => StockMovement | null;
  movementsOf: (productId: string) => StockMovement[];
  productById: (id: string) => Product | undefined;
  /** Deshace un movimiento: elimina el registro y devuelve el stock al valor previo.
   *  Devuelve false si el movimiento no existe o deshacerlo dejaría el stock en negativo. */
  undoStockMovement: (movementId: string) => boolean;
  setSettings: (patch: Partial<Settings>) => void;
  setSalon: (patch: Partial<SalonInfo>) => void;
  /** Factura una cita de forma atómica: guarda la factura, descuenta del
   *  almacén los productos consumidos/vendidos y completa la cita.
   *  Devuelve null si la cita no existe o ya está facturada. */
  invoiceAppointment: (input: {
    appointmentId: string;
    seq: number;
    year: number;
    number: string;
    lines: InvoiceLine[];
    pdfBase64: string;
    /** Registro VERI*FACTU obtenido justo antes de emitir (opcional) */
    verifactu?: VerifactuRecord;
  }) => Invoice | null;
  /** Adjunta o actualiza el registro VERI*FACTU de una factura ya emitida
   *  (reintentos de envío, consulta de estado) y, si se entrega un PDF
   *  nuevo, lo sustituye (p. ej. para incluir el QR de Verifactu). */
  attachVerifactu: (
    invoiceId: string,
    record: VerifactuRecord | null,
    newPdfBase64?: string
  ) => void;
  /** Aplica una importación de almacén (Excel) de forma atómica:
   *  actualiza campos, registra ajustes de stock y crea productos nuevos. */
  applyStockImport: (input: {
    updates: { id: string; patch: Partial<Product>; newStock?: number }[];
    creates: Omit<Product, "id" | "createdAt">[];
  }) => { updated: number; created: number };
  /** Aplica una importación de clientes (Excel) de forma atómica:
   *  actualiza campos de fichas existentes y crea clientes nuevos. */
  applyClientsImport: (input: {
    updates: { id: string; patch: Partial<Client> }[];
    creates: Omit<Client, "id">[];
  }) => { updated: number; created: number };
  invoiceById: (id: string) => Invoice | undefined;
  replaceAll: (db: DB) => void;
  wipeAll: () => void;
  clientById: (id: string) => Client | undefined;
}

const Ctx = createContext<StoreApi | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [db, setDb] = useState<DB>(freshDB);
  const [loading, setLoading] = useState(true);
  // Espejo del último db confirmado: permite que funciones como undoStockMovement
  // lean el estado actual aunque se invoquen desde cierres de renders anteriores
  // (p. ej. la acción "Deshacer" de un toast). Se sincroniza tras cada commit.
  const dbRef = useRef<DB>(db);
  useEffect(() => {
    dbRef.current = db;
  }, [db]);

  // Cargar DB al montar
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const loaded = await loadDB();
      if (!cancelled) {
        setDb(loaded);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Guardar DB al cambiar
  useEffect(() => {
    if (loading) return;
    saveDB(db);
  }, [db, loading]);

  const api = useMemo<StoreApi>(
    () => ({
      db,
      loading,
      addClient(data) {
        const client: Client = {
          ...data,
          id: uid(),
          createdAt: new Date().toISOString(),
        };
        setDb((d) => ({ ...d, clients: [...d.clients, client] }));
        return client;
      },
      updateClient(id, patch) {
        setDb((d) => ({
          ...d,
          clients: d.clients.map((c) =>
            c.id === id ? { ...c, ...patch } : c
          ),
        }));
      },
      deleteClient(id) {
        setDb((d) => ({
          ...d,
          clients: d.clients.filter((c) => c.id !== id),
          appointments: d.appointments.filter((a) => a.clientId !== id),
          consents: d.consents.filter((c) => c.clientId !== id),
        }));
      },
      addConsent(data) {
        const consent: Consent = { ...data, id: uid() };
        setDb((d) => ({ ...d, consents: [...d.consents, consent] }));
        return consent;
      },
      deleteConsent(id) {
        setDb((d) => ({
          ...d,
          consents: d.consents.filter((c) => c.id !== id),
        }));
      },
      consentsOf(clientId) {
        return db.consents
          .filter((c) => c.clientId === clientId)
          .sort((a, b) => b.signedAt.localeCompare(a.signedAt));
      },
      addAppointment(data) {
        const appt: Appointment = {
          ...data,
          id: uid(),
          createdAt: new Date().toISOString(),
        };
        setDb((d) => ({ ...d, appointments: [...d.appointments, appt] }));
        return appt;
      },
      updateAppointment(id, patch) {
        setDb((d) => ({
          ...d,
          appointments: d.appointments.map((a) =>
            a.id === id ? { ...a, ...patch } : a
          ),
        }));
      },
      deleteAppointment(id) {
        setDb((d) => ({
          ...d,
          appointments: d.appointments.filter((a) => a.id !== id),
        }));
      },
      setAppointmentStatus(id, status) {
        setDb((d) => ({
          ...d,
          appointments: d.appointments.map((a) =>
            a.id === id ? { ...a, status } : a
          ),
        }));
      },
      addService(data) {
        const service: Service = { ...data, id: uid() };
        setDb((d) => ({ ...d, services: [...d.services, service] }));
        return service;
      },
      updateService(id, patch) {
        setDb((d) => ({
          ...d,
          services: d.services.map((s) =>
            s.id === id ? { ...s, ...patch } : s
          ),
        }));
      },
      deleteService(id) {
        setDb((d) => ({
          ...d,
          services: d.services.filter((s) => s.id !== id),
        }));
      },
      addProduct(data) {
        const product: Product = {
          ...data,
          id: uid(),
          createdAt: new Date().toISOString(),
        };
        // Actualización atómica: producto + movimiento de stock inicial
        setDb((d) => {
          const next: DB = { ...d, products: [...d.products, product] };
          if (product.stock > 0) {
            next.movements = [
              ...next.movements,
              {
                id: uid(),
                productId: product.id,
                type: "entrada",
                qty: product.stock,
                resultStock: product.stock,
                reason: "Stock inicial",
                date: new Date().toISOString(),
              },
            ];
          }
          return next;
        });
        return product;
      },
      updateProduct(id, patch) {
        setDb((d) => ({
          ...d,
          products: d.products.map((p) =>
            p.id === id ? { ...p, ...patch } : p
          ),
        }));
      },
      deleteProduct(id) {
        setDb((d) => ({
          ...d,
          products: d.products.filter((p) => p.id !== id),
          movements: d.movements.filter((m) => m.productId !== id),
        }));
      },
      addProductCategory(name) {
        const clean = name.trim();
        if (!clean) return null;
        const exists = db.productCategories.some(
          (c) => norm(c.name) === norm(clean)
        );
        if (exists) return null;
        const color =
          CATEGORY_PALETTE[
            db.productCategories.length % CATEGORY_PALETTE.length
          ];
        const cat: ProductCategoryDef = {
          id: uid(),
          name: clean,
          fg: color.fg,
          bg: color.bg,
        };
        setDb((d) => ({
          ...d,
          productCategories: [...d.productCategories, cat],
        }));
        return cat;
      },
      renameProductCategory(id, name) {
        const clean = name.trim();
        if (!clean) return false;
        const dup = db.productCategories.some(
          (c) => c.id !== id && norm(c.name) === norm(clean)
        );
        if (dup) return false;
        setDb((d) => ({
          ...d,
          productCategories: d.productCategories.map((c) =>
            c.id === id ? { ...c, name: clean } : c
          ),
        }));
        return true;
      },
      deleteProductCategory(id) {
        if (db.productCategories.length <= 1) return false;
        const target = fallbackCategoryId(db.productCategories, id);
        if (!target) return false;
        setDb((d) => ({
          ...d,
          productCategories: d.productCategories.filter((c) => c.id !== id),
          products: d.products.map((p) =>
            p.category === id ? { ...p, category: target } : p
          ),
        }));
        return true;
      },
      addStockMovement(productId, type, qty, reason) {
        const product = db.products.find((p) => p.id === productId);
        if (!product) return null;
        const q = Math.max(0, Math.round(qty));
        if (q <= 0) return null;
        let delta = 0;
        if (type === "entrada") delta = q;
        else if (type === "salida") {
          if (q > product.stock) return null; // no hay stock suficiente
          delta = -q;
        } else {
          // ajuste: qty es el stock final absoluto
          delta = q - product.stock;
        }
        const resultStock = product.stock + delta;
        const movement: StockMovement = {
          id: uid(),
          productId,
          type,
          qty: type === "ajuste" ? Math.abs(delta) : q,
          resultStock,
          prevStock: product.stock,
          reason: reason.trim(),
          date: new Date().toISOString(),
        };
        setDb((d) => ({
          ...d,
          movements: [...d.movements, movement],
          products: d.products.map((p) =>
            p.id === productId ? { ...p, stock: resultStock } : p
          ),
        }));
        return movement;
      },
      movementsOf(productId) {
        return db.movements
          .filter((m) => m.productId === productId)
          .sort((a, b) => b.date.localeCompare(a.date));
      },
      undoStockMovement(movementId) {
        const latest = dbRef.current;
        const mv = latest.movements.find((m) => m.id === movementId);
        if (!mv) return false;
        const product = latest.products.find((p) => p.id === mv.productId);
        if (!product) return false;
        // delta = efecto del movimiento sobre el stock (positivo sube, negativo baja)
        let delta: number;
        if (mv.type === "entrada") delta = mv.qty;
        else if (mv.type === "salida") delta = -mv.qty;
        else if (typeof mv.prevStock === "number")
          delta = mv.resultStock - mv.prevStock;
        else return false; // ajuste antiguo sin stock previo registrado: no reversible
        const restored = product.stock - delta;
        if (restored < 0) return false; // ya se consumió lo entrado: no se puede deshacer
        setDb((d) => ({
          ...d,
          movements: d.movements.filter((m) => m.id !== movementId),
          products: d.products.map((p) =>
            p.id === product.id ? { ...p, stock: restored } : p
          ),
        }));
        return true;
      },
      productById(id) {
        return db.products.find((p) => p.id === id);
      },
      setSettings(patch) {
        setDb((d) => ({ ...d, settings: { ...d.settings, ...patch } }));
      },
      setSalon(patch) {
        setDb((d) => ({ ...d, salon: { ...d.salon, ...patch } }));
      },
      invoiceAppointment(input) {
        const appt = db.appointments.find((a) => a.id === input.appointmentId);
        if (!appt || appt.invoiceId) return null;
        const now = new Date();
        const invoice: Invoice = {
          id: uid(),
          seq: input.seq,
          year: input.year,
          number: input.number,
          appointmentId: appt.id,
          clientId: appt.clientId,
          date: now.toISOString(),
          lines: input.lines,
          total:
            Math.round(
              input.lines.reduce((s, l) => s + l.qty * l.unitPrice, 0) * 100
            ) / 100,
          pdfBase64: input.pdfBase64,
          verifactu: input.verifactu,
          createdAt: now.toISOString(),
        };
        const who = db.clients.find((c) => c.id === appt.clientId)?.name ?? "cliente";
        const when = appt.date.split("-").reverse().join("/");
        setDb((d) => {
          // Movimientos de stock por cada línea de producto (incluidos y ventas)
          const newMovements: StockMovement[] = [];
          const stockUpdates = new Map<string, number>();
          for (const l of input.lines) {
            if (l.kind !== "producto" || !l.productId || l.qty <= 0) continue;
            const prod = d.products.find((p) => p.id === l.productId);
            if (!prod) continue;
            const prev = stockUpdates.get(prod.id) ?? prod.stock;
            const result = prev - l.qty;
            stockUpdates.set(prod.id, result);
            newMovements.push({
              id: uid(),
              productId: prod.id,
              type: "salida",
              qty: l.qty,
              resultStock: result,
              prevStock: prev,
              reason: l.included
                ? `Consumo en cita · ${who} (${when})`
                : `Venta en cita · ${who} (${when})`,
              date: now.toISOString(),
            });
          }
          return {
            ...d,
            invoices: [...d.invoices, invoice],
            movements: [...d.movements, ...newMovements],
            products: d.products.map((p) =>
              stockUpdates.has(p.id) ? { ...p, stock: stockUpdates.get(p.id)! } : p
            ),
            appointments: d.appointments.map((a) =>
              a.id === appt.id
                ? { ...a, status: "completada" as AppointmentStatus, invoiceId: invoice.id }
                : a
            ),
          };
        });
        return invoice;
      },
      attachVerifactu(invoiceId, record, newPdfBase64) {
        setDb((d) => ({
          ...d,
          invoices: d.invoices.map((i) =>
            i.id === invoiceId
              ? {
                  ...i,
                  verifactu: record ?? undefined,
                  pdfBase64: newPdfBase64 || i.pdfBase64,
                }
              : i
          ),
        }));
      },
      applyStockImport(input) {
        let updated = 0;
        let created = 0;
        setDb((d) => {
          const now = new Date().toISOString();
          const movements = [...d.movements];
          // Actualizaciones de productos existentes
          const products = d.products.map((p) => {
            const u = input.updates.find((x) => x.id === p.id);
            if (!u) return p;
            updated++;
            const next = { ...p, ...u.patch };
            if (typeof u.newStock === "number" && u.newStock !== p.stock) {
              movements.push({
                id: uid(),
                productId: p.id,
                type: "ajuste",
                qty: Math.abs(u.newStock - p.stock),
                resultStock: u.newStock,
                prevStock: p.stock,
                reason: "Importación de Excel",
                date: now,
              });
              next.stock = u.newStock;
            }
            return next;
          });
          // Altas nuevas de productos
          const added = input.creates.map((c) => {
            created++;
            const prod: Product = { ...c, id: uid(), createdAt: now };
            if (prod.stock > 0) {
              movements.push({
                id: uid(),
                productId: prod.id,
                type: "entrada",
                qty: prod.stock,
                resultStock: prod.stock,
                reason: "Stock inicial (importación)",
                date: now,
              });
            }
            return prod;
          });
          return { ...d, products: [...products, ...added], movements };
        });
        return { updated, created };
      },
      applyClientsImport(input) {
        let updated = 0;
        let created = 0;
        setDb((d) => {
          const now = new Date().toISOString();
          // Actualizaciones de clientes existentes
          const clients = d.clients.map((c) => {
            const u = input.updates.find((x) => x.id === c.id);
            if (!u) return c;
            updated++;
            return { ...c, ...u.patch };
          });
          // Altas nuevas de clientes
          const added = input.creates.map((c) => {
            created++;
            const client: Client = {
              ...c,
              id: uid(),
              createdAt: c.createdAt || now,
            };
            return client;
          });
          return { ...d, clients: [...clients, ...added] };
        });
        return { updated, created };
      },
      invoiceById(id) {
        return db.invoices.find((i) => i.id === id);
      },
      replaceAll(next) {
        // Los archivos antiguos pueden no traer almacén: se rellena por defecto
        setDb({
          ...next,
          version: 1,
          products: Array.isArray(next.products) ? next.products : [],
          movements: Array.isArray(next.movements) ? next.movements : [],
          invoices: Array.isArray(next.invoices) ? next.invoices : [],
        });
      },
      wipeAll() {
        setDb(freshDB());
      },
      clientById(id) {
        return db.clients.find((c) => c.id === id);
      },
    }),
    [db, loading]
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useStore(): StoreApi {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore fuera de StoreProvider");
  return ctx;
}
