/**
 * Exportación e importación de clientes en Excel (.xlsx).
 *
 * - Exportar: libro con la hoja «Clientes» (una fila por cliente) y una
 *   hoja «Léeme» con las instrucciones para editar los datos.
 * - Importar: lee el archivo, reconoce las columnas por su cabecera y
 *   empareja cada fila con el cliente correspondiente por ID (columna
 *   ID del propio export) o por teléfono (comparando solo dígitos, de
 *   modo que «655 210 987» y «+34 655210987» sean el mismo). Devuelve
 *   una vista previa de cambios para confirmar antes de aplicar.
 */

import * as XLSX from "xlsx";
import type { Client } from "./types";
import { norm } from "./date-utils";

const HEADERS = [
  "ID",
  "Nombre",
  "Teléfono",
  "Correo",
  "Dirección",
  "CP",
  "Ciudad",
  "Cliente desde",
] as const;

/** Fecha de Excel (nº de serie) o Date → «YYYY-MM-DD»; texto → se respeta. */
function toDateOnly(v: unknown): string {
  if (typeof v === "number" && Number.isFinite(v) && v > 20000 && v < 80000) {
    // Serie de fechas de Excel (1900): convertimos a ISO
    const ms = Math.round((v - 25569) * 86400 * 1000);
    return new Date(ms).toISOString().slice(0, 10);
  }
  if (v instanceof Date && !isNaN(v.getTime())) {
    return v.toISOString().slice(0, 10);
  }
  const s = String(v ?? "").trim();
  // dd/mm/yyyy o dd-mm-yyyy
  const m = s.match(/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4})$/);
  if (m) {
    const [, d, mo, y] = m;
    return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }
  const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return iso[0];
  return s;
}

/** Solo dígitos; con 10+ dígitos nos quedamos con los 9 últimos
 *  (así «+34 655 210 987» coincide con «655 210 987»). */
function phoneKey(s: string): string {
  const digits = s.replace(/\D+/g, "");
  if (digits.length > 9) return digits.slice(-9);
  return digits;
}

/** Dispara la descarga de la cartera completa de clientes como .xlsx. */
export function exportClientsXlsx(clients: Client[]): void {
  const wb = XLSX.utils.book_new();

  const sorted = [...clients].sort((a, b) =>
    a.name.localeCompare(b.name, "es")
  );
  const aoa: (string | number)[][] = [
    [...HEADERS],
    ...sorted.map((c) => [
      c.id,
      c.name,
      c.phone,
      c.email || "",
      c.street || "",
      c.zip || "",
      c.city || "",
      toDateOnly(c.createdAt),
    ]),
  ];
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [
    { wch: 22 }, // ID
    { wch: 30 }, // Nombre
    { wch: 16 }, // Teléfono
    { wch: 28 }, // Correo
    { wch: 30 }, // Dirección
    { wch: 8 }, // CP
    { wch: 16 }, // Ciudad
    { wch: 14 }, // Cliente desde
  ];
  XLSX.utils.book_append_sheet(wb, ws, "Clientes");

  const readme = [
    ["Cómo actualizar los clientes desde este archivo"],
    [],
    ["1. No borres ni reordenes la columna ID: es la que vincula cada fila con tu cliente."],
    ["2. Si un cliente no tiene ID (fila nueva), la app lo dará de alta: rellena al menos Nombre."],
    ["3. Si el cliente ya existe y no tiene ID, se le encuentra por el Teléfono (solo dígitos)."],
    ["4. Edita Nombre, Teléfono, Correo, Dirección, CP o Ciudad a placer."],
    ["5. Guarda el archivo (mismo formato .xlsx) y vuelve a la app: botón «Importar»."],
    ["6. Revisa el resumen de cambios que te muestra la app y confirma."],
    [],
    ["Una celda vacía no borra el dato que ya tenía el cliente: solo se actualizan las celdas rellenas."],
    ["Las filas que borres del archivo no eliminan clientes de la app; solo se actualizan los que aparecen."],
    ["Si el mismo teléfono aparece dos veces en el archivo, solo se tiene en cuenta la primera fila."],
  ];
  const wsRm = XLSX.utils.aoa_to_sheet(readme);
  wsRm["!cols"] = [{ wch: 110 }];
  XLSX.utils.book_append_sheet(wb, wsRm, "Léeme");

  const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const blob = new Blob([out as unknown as BlobPart], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `clientes-${new Date().toISOString().slice(0, 10)}.xlsx`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ------------------------------------------------------------------ */
/* Importación                                                         */
/* ------------------------------------------------------------------ */

/** Cambio sobre un cliente existente. */
export interface ClientImportChange {
  clientId: string;
  name: string;
  /** Campos a actualizar (solo los que vienen rellenos y distintos) */
  patch: Partial<Client>;
}

/** Cliente nuevo detectado en el archivo. */
export interface ClientImportNew {
  name: string;
  phone: string;
  email: string;
  street: string;
  zip: string;
  city: string;
  createdAt: string;
}

export interface ClientImportPreview {
  changes: ClientImportChange[];
  creates: ClientImportNew[];
  /** Filas ignoradas (sin nombre) */
  skipped: number;
  /** Filas repetidas por teléfono dentro del propio archivo */
  duplicates: number;
}

const HEADER_ALIASES: Record<string, keyof RowMap> = {
  id: "id",
  nombre: "name",
  "nombre completo": "name",
  name: "name",
  "teléfono": "phone",
  telefono: "phone",
  tel: "phone",
  móvil: "phone",
  movil: "phone",
  correo: "email",
  email: "email",
  "e-mail": "email",
  direccion: "street",
  dirección: "street",
  calle: "street",
  cp: "zip",
  "código postal": "zip",
  "codigo postal": "zip",
  ciudad: "city",
  población: "city",
  poblacion: "city",
  "cliente desde": "createdAt",
  alta: "createdAt",
};

interface RowMap {
  id: number;
  name: number;
  phone: number;
  email: number;
  street: number;
  zip: number;
  city: number;
  createdAt: number;
}

/**
 * Lee un .xlsx/.csv exportado por la propia app (o compatible) y calcula
 * la vista previa de cambios respecto a la cartera de clientes actual.
 */
export async function parseClientsFile(
  file: File,
  clients: Client[]
): Promise<ClientImportPreview> {
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(new Uint8Array(buf), { type: "array" });
  const sheetName =
    wb.SheetNames.find((n) => norm(n) === "clientes") ?? wb.SheetNames[0];
  if (!sheetName) throw new Error("El archivo no tiene hojas de datos.");
  const ws = wb.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json<unknown[]>(ws, {
    header: 1,
    blankrows: false,
    defval: "",
  });
  if (rows.length < 2)
    throw new Error("El archivo no contiene filas de clientes.");

  // Localizar la fila de cabeceras (la primera con una celda reconocible)
  let headerIdx = -1;
  let map: Partial<RowMap> = {};
  for (let r = 0; r < Math.min(rows.length, 8); r++) {
    const cells = (rows[r] ?? []).map((c) =>
      String(c ?? "")
        .trim()
        .toLowerCase()
    );
    const m: Partial<RowMap> = {};
    cells.forEach((cell, idx) => {
      const key = HEADER_ALIASES[cell];
      if (key && m[key] === undefined) m[key] = idx;
    });
    if (m.name !== undefined) {
      headerIdx = r;
      map = m;
      break;
    }
  }
  if (headerIdx === -1)
    throw new Error(
      "No se reconoció la cabecera: el archivo debe tener una columna «Nombre»."
    );
  const col = (k: keyof RowMap): number | undefined => map[k];

  const byId = new Map(clients.map((c) => [c.id, c]));
  const byPhone = new Map<string, Client>();
  for (const c of clients) {
    const k = phoneKey(c.phone);
    if (k) byPhone.set(k, c);
  }
  const seenPhones = new Set<string>();

  const preview: ClientImportPreview = {
    changes: [],
    creates: [],
    skipped: 0,
    duplicates: 0,
  };

  for (let r = headerIdx + 1; r < rows.length; r++) {
    const row = rows[r] ?? [];
    const get = (k: keyof RowMap): unknown => {
      const idx = col(k);
      return idx === undefined ? undefined : row[idx];
    };
    const name = String(get("name") ?? "").trim();
    const rawId = String(get("id") ?? "").trim();
    if (!name && !rawId) continue; // fila vacía
    if (!name) {
      preview.skipped++;
      continue;
    }
    const phone = String(get("phone") ?? "").trim();
    const email = String(get("email") ?? "").trim();
    const street = String(get("street") ?? "").trim();
    const zip = String(get("zip") ?? "").trim();
    const city = String(get("city") ?? "").trim();
    const createdRaw = get("createdAt");

    const pKey = phoneKey(phone);
    if (pKey && seenPhones.has(pKey)) {
      preview.duplicates++;
      continue;
    }
    if (pKey) seenPhones.add(pKey);

    const existing =
      (rawId && byId.get(rawId)) || (pKey && byPhone.get(pKey)) || undefined;

    if (!existing) {
      // Cliente nuevo: exigimos al menos nombre
      preview.creates.push({
        name,
        phone,
        email,
        street,
        zip,
        city,
        createdAt: toDateOnly(createdRaw) || new Date().toISOString(),
      });
      continue;
    }

    // Solo se actualizan celdas rellenas y distintas del valor actual
    // (el teléfono se compara por dígitos: «655-210-987» == «655 210 987»)
    const patch: Partial<Client> = {};
    if (name !== existing.name) patch.name = name;
    if (phone && phoneKey(phone) !== phoneKey(existing.phone || ""))
      patch.phone = phone;
    if (email && email !== (existing.email || "")) patch.email = email;
    if (street && street !== (existing.street || "")) patch.street = street;
    if (zip && zip !== (existing.zip || "")) patch.zip = zip;
    if (city && city !== (existing.city || "")) patch.city = city;

    if (Object.keys(patch).length > 0)
      preview.changes.push({
        clientId: existing.id,
        name: existing.name,
        patch,
      });
  }

  if (preview.changes.length === 0 && preview.creates.length === 0)
    throw new Error(
      "No se detectó ningún cambio: el archivo coincide con la cartera actual o no tiene datos válidos."
    );

  return preview;
}
