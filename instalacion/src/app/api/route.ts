import fs from "node:fs";
import http from "node:http";
import https, { type Server as HttpsServer } from "node:https";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const HTTPS_PORT = 3443;
const CERT_DIR = path.join(os.tmpdir(), "peluqueria-marisa-https");
let temporaryServer: HttpsServer | null = null;
let shutdownTimer: NodeJS.Timeout | null = null;

function lanAddress(): string {
  const addresses = Object.values(os.networkInterfaces())
    .flatMap((items) => items ?? [])
    .filter((item) => item.family === "IPv4" && !item.internal)
    .map((item) => item.address);
  return addresses.find((ip) => /^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(ip)) ?? addresses[0] ?? "127.0.0.1";
}

function certificateFor(ip: string) {
  fs.mkdirSync(CERT_DIR, { recursive: true });
  const keyFile = path.join(CERT_DIR, `${ip}.key.pem`);
  const certFile = path.join(CERT_DIR, `${ip}.cert.pem`);
  if (!fs.existsSync(keyFile) || !fs.existsSync(certFile)) {
    execFileSync("openssl", ["req", "-x509", "-newkey", "rsa:2048", "-nodes", "-keyout", keyFile, "-out", certFile, "-days", "2", "-subj", "/CN=Peluqueria Marisa local", "-addext", `subjectAltName=IP:${ip}`], { stdio: "ignore" });
  }
  return { key: fs.readFileSync(keyFile), cert: fs.readFileSync(certFile) };
}

function startTemporaryHttps(ip: string, appPort: number) {
  if (temporaryServer?.listening) return;
  temporaryServer = https.createServer(certificateFor(ip), (req, res) => {
    const upstream = http.request({ hostname: "127.0.0.1", port: appPort, path: req.url, method: req.method, headers: { ...req.headers, host: `127.0.0.1:${appPort}` } }, (response) => {
      res.writeHead(response.statusCode ?? 502, response.headers);
      response.pipe(res);
    });
    upstream.on("error", () => {
      if (!res.headersSent) res.writeHead(502);
      res.end("No se pudo conectar con la aplicación local.");
    });
    req.pipe(upstream);
  });
  temporaryServer.listen(HTTPS_PORT, "0.0.0.0");
  shutdownTimer = setTimeout(() => {
    temporaryServer?.close();
    temporaryServer = null;
    shutdownTimer = null;
  }, 30 * 60 * 1000);
  shutdownTimer.unref();
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const ip = lanAddress();
  const appPort = Number(requestUrl.port || 3000);
  let httpsUrl: string | null = null;
  try {
    startTemporaryHttps(ip, appPort);
    httpsUrl = `https://${ip}:${HTTPS_PORT}/`;
  } catch {
    // Se devuelve la dirección HTTP como alternativa informativa.
  }
  return NextResponse.json({ url: `http://${ip}:${appPort}/`, httpsUrl });
}
