/**
 * Proceso principal de Peluquería Marisa (aplicación de escritorio).
 *
 * - Arranca el servidor Next.js (output standalone) como proceso hijo.
 * - Abre una ventana propia (sin navegador).
 * - La base de datos vive en un archivo .sqlite REAL en la carpeta de
 *   datos del usuario (userData/peluqueria-marisa.sqlite) con guardado
 *   atómico y un respaldo diario automático (backups/, últimas 7 copias).
 * - El preload expone window.desktopDB para que la app lea/escriba.
 */

const {
  app,
  BrowserWindow,
  ipcMain,
  shell,
  Menu,
} = require("electron");
const path = require("path");
const http = require("http");
const { spawn } = require("child_process");
const dbio = require("./db");
const { autoUpdater } = require("electron-updater");

/* ------------------ configuración ------------------ */

const START_PORT = 3456;
const DATA_FILE_NAME = "peluqueria-marisa.sqlite";
const FLUSH_MS = 600;

let mainWindow = null;
let serverChild = null;
let serverPort = 0;

function dataFile() {
  return path.join(app.getPath("userData"), DATA_FILE_NAME);
}

/* ------------------ guardado en disco ------------------ */

let pendingJson = null;
let flushTimer = null;
let flushing = false;

function scheduleFlush() {
  if (flushTimer) clearTimeout(flushTimer);
  flushTimer = setTimeout(flushNow, FLUSH_MS);
}

async function flushNow() {
  if (flushTimer) {
    clearTimeout(flushTimer);
    flushTimer = null;
  }
  if (pendingJson === null || flushing) return;
  flushing = true;
  const json = pendingJson;
  pendingJson = null;
  try {
    if (json === "") {
      // señal de borrado
      dbio.deleteDbFile(dataFile());
    } else {
      const bytes = await dbio.dbToSqlite(json);
      dbio.writeDbFileAtomic(dataFile(), Buffer.from(bytes));
    }
  } catch (err) {
    console.error("[db] error al guardar:", err);
  } finally {
    flushing = false;
    // Si llegaron cambios mientras escribíamos, volvemos a programar
    if (pendingJson !== null) scheduleFlush();
  }
}

/* ------------------ servidor Next.js ------------------ */

function serverDir() {
  if (app.isPackaged) {
    return path.join(process.resourcesPath, "app-server");
  }
  return path.join(__dirname, "app-server");
}

function portInUse(port) {
  return new Promise((resolve) => {
    const req = http.get(
      { host: "127.0.0.1", port, path: "/", timeout: 400 },
      () => resolve(true)
    );
    req.on("error", () => resolve(false));
    req.on("timeout", () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function pickPort() {
  // Google OAuth necesita un origen estable. No cambiamos de puerto entre
  // ejecuciones: el Client ID se registra para http://127.0.0.1:3456.
  if (await portInUse(START_PORT)) {
    throw new Error(`El puerto local ${START_PORT} ya está ocupado.`);
  }
  return START_PORT;
}

function startServer(port) {
  const entry = path.join(serverDir(), "server.js");
  serverChild = spawn(process.execPath, [entry], {
    cwd: serverDir(),
    env: {
      ...process.env,
      ELECTRON_RUN_AS_NODE: "1",
      NODE_ENV: "production",
      HOSTNAME: "127.0.0.1",
      PORT: String(port),
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  serverChild.stdout.on("data", () => {});
  serverChild.stderr.on("data", (d) => {
    console.error("[server]", String(d).trim());
  });
  serverChild.on("exit", (code) => {
    console.error("[server] salió con código", code);
    serverChild = null;
  });
  return serverChild;
}

function waitForServer(port, timeoutMs = 30000) {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      const req = http.get(
        { host: "127.0.0.1", port, path: "/", timeout: 1500 },
        (res) => {
          res.resume();
          resolve();
        }
      );
      req.on("error", () => retry());
      req.on("timeout", () => {
        req.destroy();
        retry();
      });
      function retry() {
        if (Date.now() - started > timeoutMs) {
          reject(new Error("El servidor no arrancó a tiempo"));
          return;
        }
        setTimeout(tick, 350);
      }
    };
    tick();
  });
}

/* ------------------ ventana ------------------ */

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1360,
    height: 860,
    minWidth: 420,
    minHeight: 560,
    title: "Peluquería Marisa",
    backgroundColor: "#f4f1ea",
    autoHideMenuBar: true,
    icon: path.join(__dirname, "assets", "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      spellcheck: false,
    },
  });

  // Sin barra de menú propia (la app ya trae la suya dentro)
  Menu.setApplicationMenu(null);

  // Enlaces externos (WhatsApp, tel:, http) → navegador/teléfono del sistema.
  // EXCEPCIÓN: el OAuth de Google (Drive) se abre DENTRO de la app como
  // ventana emergente para que el flujo de Google entregue el token en la
  // misma sesión y la sincronización funcione en escritorio.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https:\/\/accounts\.google\.[a-z.]+\//.test(url)) {
      return {
        action: "allow",
        overrideBrowserWindowOptions: {
          width: 500,
          height: 660,
          autoHideMenuBar: true,
          title: "Conectar con Google",
        },
      };
    }
    if (/^(https?:|tel:|mailto:)/.test(url)) shell.openExternal(url);
    return { action: "deny" };
  });
  mainWindow.webContents.on("will-navigate", (e, url) => {
    const here = `http://127.0.0.1:${serverPort}`;
    if (!url.startsWith(here)) {
      e.preventDefault();
      if (/^(https?:|tel:|mailto:)/.test(url)) shell.openExternal(url);
    }
  });

  mainWindow.loadURL(`http://127.0.0.1:${serverPort}`);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

function configureUpdates() {
  // Las actualizaciones de Windows se publican como GitHub Releases. No se
  // descarga nada automáticamente: el instalador se ofrece al usuario y
  // conserva la carpeta userData, donde vive la base SQLite.
  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.on("update-available", () => {
    autoUpdater.downloadUpdate().catch((err) =>
      console.error("[updates] no se pudo descargar la actualización:", err)
    );
  });
  autoUpdater.on("error", (err) =>
    console.error("[updates] error:", err)
  );
  setTimeout(() => {
    autoUpdater.checkForUpdates().catch((err) =>
      console.error("[updates] no se pudo comprobar:", err)
    );
  }, 10_000);
}

/* ------------------ ciclo de vida ------------------ */

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(async () => {
    serverPort = await pickPort();
    startServer(serverPort);
    try {
      await waitForServer(serverPort);
    } catch (err) {
      console.error(err);
    }
    createWindow();
    configureUpdates();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
}

app.on("window-all-closed", () => {
  app.quit();
});

app.on("before-quit", () => {
  // Volcar el último estado pendiente y parar el servidor
  flushNow();
  if (serverChild) {
    try {
      serverChild.kill();
    } catch {
      /* ignore */
    }
    serverChild = null;
  }
});

/* ------------------ IPC: puente de base de datos ------------------ */

ipcMain.on("db:write", (_e, json) => {
  pendingJson = json;
  scheduleFlush();
});

ipcMain.handle("db:read", async () => {
  const bytes = dbio.readDbFile(dataFile());
  if (!bytes) return null;
  try {
    return await dbio.sqliteToDb(bytes);
  } catch (err) {
    console.error("[db] archivo ilegible:", err);
    return null;
  }
});

ipcMain.handle("db:wipe", async () => {
  pendingJson = "";
  await flushNow();
  dbio.deleteDbFile(dataFile());
  return true;
});

ipcMain.handle("db:path", () => dataFile());
