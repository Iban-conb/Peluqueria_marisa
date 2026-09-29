/**
 * Puente seguro entre la app (renderer) y la base de datos del PC.
 * Expone window.desktopDB — ver src/lib/indexeddb.ts (DesktopBridge).
 */

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktopDB", {
  /** Lee la base del archivo .sqlite del PC; null si no existe aún. */
  read: () => ipcRenderer.invoke("db:read"),
  /** Guarda la base (JSON en texto). Sin bloqueo: el proceso principal
   *  agrupa escrituras y vuelca a disco de forma atómica. */
  write: (json) => ipcRenderer.send("db:write", json),
  /** Elimina el archivo de datos del PC. */
  wipe: () => ipcRenderer.invoke("db:wipe"),
  /** Ruta completa del archivo de datos en el disco. */
  path: () => ipcRenderer.invoke("db:path"),
  isDesktop: true,
});
