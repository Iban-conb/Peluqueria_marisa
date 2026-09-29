/**
 * Prueba del export/import de clientes en Excel:
 * 1. genera un .xlsx con XLSX (como exportClientsXlsx),
 * 2. lo parsea con parseClientsFile,
 * 3. comprueba matching por ID, por teléfono (+34, espacios), altas,
 *    duplicados y filas sin nombre.
 * Ejecutar:  bun /home/z/my-project/scripts/test-clients-xlsx.ts
 */
import * as XLSX from "xlsx";
import { parseClientsFile } from "../src/lib/clients-xlsx";
import type { Client } from "../src/lib/types";

const clients: Client[] = [
  { id: "c-1", name: "María Fernández López", phone: "612 345 678", email: "maria@x.es", street: "C/ Olivo 14", zip: "28012", city: "Madrid", createdAt: "2024-09-12" },
  { id: "c-2", name: "Carmen Ruiz Delgado", phone: "655 210 987", email: "", street: "", zip: "", city: "Sevilla", createdAt: "2024-10-02" },
];

function fileFromRows(rows: (string | number)[][]): File {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, "Clientes");
  const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  return new File([out as unknown as BlobPart], "clientes.xlsx");
}

async function main() {
  const ok = (cond: boolean, what: string) => {
    if (!cond) throw new Error("FALLO: " + what);
    console.log("OK ", what);
  };
  let threw = "";

  // Caso 1: cambio por ID + alta nueva + fila sin nombre + duplicado
  const f1 = fileFromRows([
    ["ID", "Nombre", "Teléfono", "Correo", "Dirección", "CP", "Ciudad", "Cliente desde"],
    ["c-1", "María Fernández López", "612 345 678", "maria.nueva@x.es", "C/ Olivo 14, 3ºB", "", "", ""],
    ["", "Lucía Gómez", "+34 699 481 230", "", "", "08014", "Barcelona", "12/03/2025"],
    ["", "Ana Sin Teléfono", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "Repetida", "699481230", "", "", "", "", ""],
  ]);
  const p1 = await parseClientsFile(f1, clients);
  ok(p1.changes.length === 1, "1 cambio detectado");
  ok(p1.changes[0].clientId === "c-1", "cambio matchea por ID");
  ok(p1.changes[0].patch.email === "maria.nueva@x.es", "patch de correo");
  ok(p1.changes[0].patch.street === "C/ Olivo 14, 3ºB", "patch de dirección");
  ok(!("zip" in p1.changes[0].patch), "celda vacía no toca el CP");
  ok(p1.creates.length === 2, "2 altas nuevas");
  ok(p1.creates[0].phone === "+34 699 481 230", "teléfono con +34 se guarda tal cual");
  ok(p1.creates[0].createdAt === "2025-03-12", "fecha dd/mm/yyyy → ISO");
  ok(p1.skipped === 0, "las filas totalmente vacías no cuentan como omitidas");
  ok(p1.duplicates === 1, "teléfono repetido dentro del archivo omitido");

  // Caso 2: matcheo por teléfono aunque el ID no venga (formato distinto)
  // Un archivo idéntico a la cartera → aviso informativo «sin cambios»
  const f2 = fileFromRows([
    ["Nombre", "Teléfono", "Ciudad"],
    ["Carmen Ruiz Delgado", "655-210-987", "Sevilla"],
  ]);
  threw = "";
  try {
    await parseClientsFile(f2, clients);
  } catch (e) {
    threw = (e as Error).message;
  }
  ok(threw.includes("No se detectó ningún cambio"), "archivo idéntico → aviso de sin cambios");

  // Caso 3: cambio de teléfono con columna ID (flujo del export oficial)
  const f3 = fileFromRows([
    ["ID", "Nombre", "Teléfono"],
    ["c-2", "Carmen Ruiz Delgado", "655 000 111"],
  ]);
  const p3 = await parseClientsFile(f3, clients);
  ok(p3.changes.length === 1 && p3.changes[0].patch.phone === "655 000 111", "cambio de teléfono con ID");

  // Caso 3b: sin ID y con teléfono distinto → alta nueva (no hay forma de
  // reconocer a la persona; el Léeme avisa de no borrar la columna ID)
  const f3b = fileFromRows([
    ["Nombre", "Teléfono"],
    ["Carmen Ruiz Delgado", "655 000 111"],
  ]);
  const p3b = await parseClientsFile(f3b, clients);
  ok(p3b.creates.length === 1, "teléfono distinto sin ID → alta nueva");

  // Caso 4: cabecera con alias (sin ID, columnas desordenadas, mayúsculas)
  const f4 = fileFromRows([
    ["CIUDAD", "TEL", "NOMBRE COMPLETO", "Correo"],
    ["Valencia", "611 876 540", "Paula Navarro", "paula@x.es"],
  ]);
  const p4 = await parseClientsFile(f4, clients);
  ok(p4.creates.length === 1 && p4.creates[0].city === "Valencia", "alias reconocidos");

  // Caso 5: archivo sin columna Nombre → error claro
  const f5 = fileFromRows([["Foo"], ["bar"]]);
  threw = "";
  try {
    await parseClientsFile(f5, clients);
  } catch (e) {
    threw = (e as Error).message;
  }
  ok(threw.includes("cabecera"), "error claro sin columna Nombre");

  console.log("\nTODO CORRECTO");
}

main();
