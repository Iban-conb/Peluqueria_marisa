import fs from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Carpeta donde se instaló la aplicación (ver instalar-peluqueria.sh):
// ~/.local/share/peluqueria — el lanzador ejecuta server.js desde ahí,
// por lo que process.cwd() apunta a esa carpeta mientras la app está corriendo.
const APP_DIR = process.env.PELUQUERIA_APP_DIR || process.cwd();
const STATE_FILE = path.join(APP_DIR, ".update-state.json");
const LOG_FILE = path.join(APP_DIR, "update.log");

interface UpdateState {
  status: "idle" | "running" | "done" | "error";
  startedAt?: string;
  finishedAt?: string;
  message?: string;
}

function readState(): UpdateState {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf8")) as UpdateState;
  } catch {
    return { status: "idle" };
  }
}

function writeState(state: UpdateState) {
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
  } catch {
    // no se puede persistir el estado: se ignora
  }
}

function run(cmd: string, args: string[], timeoutMs: number): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile(
      cmd,
      args,
      { cwd: APP_DIR, timeout: timeoutMs, maxBuffer: 10 * 1024 * 1024 },
      (err, stdout, stderr) => {
        if (err) reject(new Error(`${cmd} ${args.join(" ")}: ${stderr || err.message}`));
        else resolve(stdout);
      }
    );
  });
}

async function performUpdate() {
  const log = (text: string) => {
    try {
      fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${text}\n`);
    } catch {
      // ignorar fallos de escritura del log
    }
  };
  writeState({ status: "running", startedAt: new Date().toISOString() });
  try {
    log(`Iniciando actualización en ${APP_DIR}`);
    await run("git", ["fetch", "origin", "main"], 5 * 60 * 1000);
    log("git fetch completado");
    await run("git", ["checkout", "main"], 60 * 1000);
    await run("git", ["reset", "--hard", "origin/main"], 60 * 1000);
    log("Código actualizado al último commit de origin/main");

    // Dependencias: solo si cambió el lockfile respecto a la versión anterior.
    let depsChanged = true;
    try {
      const out = await run(
        "git",
        ["diff", "--name-only", "HEAD@{1}", "HEAD", "--", "package.json", "bun.lock", "package-lock.json"],
        30 * 1000
      );
      depsChanged = out.trim().length > 0;
    } catch {
      depsChanged = true;
    }
    if (depsChanged) {
      log("Instalando dependencias...");
      try {
        await run("bun", ["install", "--frozen-lockfile"], 15 * 60 * 1000);
      } catch {
        await run("npm", ["install", "--no-audit", "--no-fund"], 15 * 60 * 1000);
      }
      log("Dependencias instaladas");
    } else {
      log("Las dependencias no han cambiado: se omite la instalación.");
    }

    log("Compilando la aplicación...");
    try {
      await run("bun", ["run", "build"], 20 * 60 * 1000);
    } catch {
      await run("npm", ["run", "build"], 20 * 60 * 1000);
    }
    log("Compilación terminada. Reiniciando el servicio...");

    // Matar el proceso actual: el lanzador/systemd relanza la aplicación con
    // la nueva versión compilada (la carpeta .next/standalone ya está actualizada).
    writeState({
      status: "done",
      startedAt: readState().startedAt,
      finishedAt: new Date().toISOString(),
      message: "Actualización completada. La aplicación se está reiniciando.",
    });
    setTimeout(() => {
      try {
        process.kill(process.pid, "SIGTERM");
      } catch {
        process.exit(0);
      }
    }, 1500);
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    log(`ERROR: ${message}`);
    writeState({
      status: "error",
      finishedAt: new Date().toISOString(),
      message,
    });
  }
}

export async function GET(request: Request) {
  const repoUrl = process.env.NEXT_PUBLIC_UPDATE_REPO_URL?.trim() || null;
  let remoteAhead = false;
  let localCommit: string | null = null;
  let remoteCommit: string | null = null;

  try {
    const url = new URL(request.url);
    const check = url.searchParams.get("check") === "1";
    localCommit = (await run("git", ["rev-parse", "--short", "HEAD"], 10_000)).trim();
    if (check) {
      await run("git", ["fetch", "--depth", "1", "origin", "main"], 30_000);
    }
    try {
      remoteCommit = (await run("git", ["rev-parse", "--short", "origin/main"], 10_000)).trim();
      remoteAhead = remoteCommit !== localCommit;
    } catch {
      remoteAhead = false;
    }
  } catch {
    // Sin repositorio git o sin conexión: la app sigue funcionando igual.
  }

  return NextResponse.json({
    repoUrl,
    localCommit,
    remoteCommit,
    remoteAhead,
    state: readState(),
    canUpdate: Boolean(repoUrl),
  });
}

export async function POST() {
  const state = readState();
  if (state.status === "running") {
    return NextResponse.json({ ok: false, message: "Ya hay una actualización en curso." });
  }
  if (!process.env.NEXT_PUBLIC_UPDATE_REPO_URL?.trim()) {
    return NextResponse.json({
      ok: false,
      message:
        "No se ha configurado el repositorio de actualizaciones. Añade NEXT_PUBLIC_UPDATE_REPO_URL en el servicio del cliente.",
    });
  }
  void performUpdate();
  return NextResponse.json({ ok: true, message: "Actualización iniciada." });
}
