module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:child_process [external] (node:child_process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:child_process", () => require("node:child_process"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/update/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$child_process__$5b$external$5d$__$28$node$3a$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:child_process [external] (node:child_process, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
;
const dynamic = "force-dynamic";
const runtime = "nodejs";
// Carpeta donde se instaló la aplicación (ver instalar-peluqueria.sh):
// ~/.local/share/peluqueria — el lanzador ejecuta server.js desde ahí,
// por lo que process.cwd() apunta a esa carpeta mientras la app está corriendo.
const APP_DIR = process.env.PELUQUERIA_APP_DIR || process.cwd();
const STATE_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(APP_DIR, ".update-state.json");
const LOG_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(APP_DIR, "update.log");
function readState() {
    try {
        return JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(STATE_FILE, "utf8"));
    } catch  {
        return {
            status: "idle"
        };
    }
}
function writeState(state) {
    try {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
    } catch  {
    // no se puede persistir el estado: se ignora
    }
}
function run(cmd, args, timeoutMs) {
    return new Promise((resolve, reject)=>{
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$child_process__$5b$external$5d$__$28$node$3a$child_process$2c$__cjs$29$__["execFile"])(cmd, args, {
            cwd: APP_DIR,
            timeout: timeoutMs,
            maxBuffer: 10 * 1024 * 1024
        }, (err, stdout, stderr)=>{
            if (err) reject(new Error(`${cmd} ${args.join(" ")}: ${stderr || err.message}`));
            else resolve(stdout);
        });
    });
}
async function performUpdate() {
    const log = (text)=>{
        try {
            __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${text}\n`);
        } catch  {
        // ignorar fallos de escritura del log
        }
    };
    writeState({
        status: "running",
        startedAt: new Date().toISOString()
    });
    try {
        log(`Iniciando actualización en ${APP_DIR}`);
        await run("git", [
            "fetch",
            "origin",
            "main"
        ], 5 * 60 * 1000);
        log("git fetch completado");
        await run("git", [
            "checkout",
            "main"
        ], 60 * 1000);
        await run("git", [
            "reset",
            "--hard",
            "origin/main"
        ], 60 * 1000);
        log("Código actualizado al último commit de origin/main");
        // Dependencias: solo si cambió el lockfile respecto a la versión anterior.
        let depsChanged = true;
        try {
            const out = await run("git", [
                "diff",
                "--name-only",
                "HEAD@{1}",
                "HEAD",
                "--",
                "package.json",
                "bun.lock",
                "package-lock.json"
            ], 30 * 1000);
            depsChanged = out.trim().length > 0;
        } catch  {
            depsChanged = true;
        }
        if (depsChanged) {
            log("Instalando dependencias...");
            try {
                await run("bun", [
                    "install",
                    "--frozen-lockfile"
                ], 15 * 60 * 1000);
            } catch  {
                await run("npm", [
                    "install",
                    "--no-audit",
                    "--no-fund"
                ], 15 * 60 * 1000);
            }
            log("Dependencias instaladas");
        } else {
            log("Las dependencias no han cambiado: se omite la instalación.");
        }
        log("Compilando la aplicación...");
        try {
            await run("bun", [
                "run",
                "build"
            ], 20 * 60 * 1000);
        } catch  {
            await run("npm", [
                "run",
                "build"
            ], 20 * 60 * 1000);
        }
        log("Compilación terminada. Reiniciando el servicio...");
        // Matar el proceso actual: el lanzador/systemd relanza la aplicación con
        // la nueva versión compilada (la carpeta .next/standalone ya está actualizada).
        writeState({
            status: "done",
            startedAt: readState().startedAt,
            finishedAt: new Date().toISOString(),
            message: "Actualización completada. La aplicación se está reiniciando."
        });
        setTimeout(()=>{
            try {
                process.kill(process.pid, "SIGTERM");
            } catch  {
                process.exit(0);
            }
        }, 1500);
    } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        log(`ERROR: ${message}`);
        writeState({
            status: "error",
            finishedAt: new Date().toISOString(),
            message
        });
    }
}
async function GET(request) {
    const repoUrl = ("TURBOPACK compile-time value", "https://github.com/tuusuario/peluqueria-marisa.git")?.trim() || null;
    let remoteAhead = false;
    let localCommit = null;
    let remoteCommit = null;
    try {
        const url = new URL(request.url);
        const check = url.searchParams.get("check") === "1";
        localCommit = (await run("git", [
            "rev-parse",
            "--short",
            "HEAD"
        ], 10_000)).trim();
        if (check) {
            await run("git", [
                "fetch",
                "--depth",
                "1",
                "origin",
                "main"
            ], 30_000);
        }
        try {
            remoteCommit = (await run("git", [
                "rev-parse",
                "--short",
                "origin/main"
            ], 10_000)).trim();
            remoteAhead = remoteCommit !== localCommit;
        } catch  {
            remoteAhead = false;
        }
    } catch  {
    // Sin repositorio git o sin conexión: la app sigue funcionando igual.
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        repoUrl,
        localCommit,
        remoteCommit,
        remoteAhead,
        state: readState(),
        canUpdate: Boolean(repoUrl)
    });
}
async function POST() {
    const state = readState();
    if (state.status === "running") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: "Ya hay una actualización en curso."
        });
    }
    if (!("TURBOPACK compile-time value", "https://github.com/tuusuario/peluqueria-marisa.git")?.trim()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: "No se ha configurado el repositorio de actualizaciones. Añade NEXT_PUBLIC_UPDATE_REPO_URL en el servicio del cliente."
        });
    }
    void performUpdate();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true,
        message: "Actualización iniciada."
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0xda_5k._.js.map