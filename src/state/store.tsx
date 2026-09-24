"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type {
  Appointment,
  AppointmentStatus,
  Client,
  Consent,
  DB,
  Product,
  SalonInfo,
  Service,
  Settings,
  StockMovement,
  StockMovementType,
} from "../lib/types";
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
  setSettings: (patch: Partial<Settings>) => void;
  setSalon: (patch: Partial<SalonInfo>) => void;
  replaceAll: (db: DB) => void;
  wipeAll: () => void;
  clientById: (id: string) => Client | undefined;
}

const Ctx = createContext<StoreApi | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [db, setDb] = useState<DB>(freshDB);
  const [loading, setLoading] = useState(true);

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
      productById(id) {
        return db.products.find((p) => p.id === id);
      },
      setSettings(patch) {
        setDb((d) => ({ ...d, settings: { ...d.settings, ...patch } }));
      },
      setSalon(patch) {
        setDb((d) => ({ ...d, salon: { ...d.salon, ...patch } }));
      },
      replaceAll(next) {
        // Los archivos antiguos pueden no traer almacén: se rellena por defecto
        setDb({
          ...next,
          version: 1,
          products: Array.isArray(next.products) ? next.products : [],
          movements: Array.isArray(next.movements) ? next.movements : [],
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
