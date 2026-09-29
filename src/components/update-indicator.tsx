"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useUI } from "@/state/ui";

interface UpdateState {
  status: "idle" | "running" | "done" | "error";
  startedAt?: string;
  finishedAt?: string;
  message?: string;
}

interface UpdateInfo {
  repoUrl: string | null;
  localCommit: string | null;
  remoteCommit: string | null;
  remoteAhead: boolean;
  state: UpdateState;
  canUpdate: boolean;
}

const CHECK_INTERVAL_MS = 10 * 60 * 1000; // comprobación periódica cada 10 min

function IcRefresh({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" />
    </svg>
  );
}

export default function UpdateIndicator() {
  const { toast, confirm } = useUI();
  const [info, setInfo] = useState<UpdateInfo | null>(null);
  const [updating, setUpdating] = useState(false);
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const updatingRef = useRef(false);

  const fetchStatus = useCallback(async (checkRemote: boolean) => {
    try {
      const res = await fetch(`/api/update${checkRemote ? "?check=1" : ""}`, { cache: "no-store" });
      if (!res.ok) return;
      const data = (await res.json()) as UpdateInfo;
      setInfo(data);
      if (updatingRef.current && data.state.status === "running") {
        // sigue en curso
      } else if (updatingRef.current && data.state.status === "done") {
        updatingRef.current = false;
        setUpdating(false);
        toast("Aplicación actualizada. Recargando…", "ok");
        window.setTimeout(() => window.location.reload(), 4000);
      } else if (updatingRef.current && data.state.status === "error") {
        updatingRef.current = false;
        setUpdating(false);
        toast(`La actualización falló: ${data.state.message ?? "error desconocido"}`, "err");
      }
    } catch {
      // sin conexión con el servidor local: ignorar
    }
  }, [toast]);

  useEffect(() => {
    fetchStatus(true);
    const interval = setInterval(() => {
      if (!updatingRef.current) fetchStatus(true);
    }, CHECK_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  // Mientras se actualiza, consultar el estado con frecuencia.
  useEffect(() => {
    if (!updating) {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
      return;
    }
    pollingRef.current = setInterval(() => fetchStatus(false), 5000);
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [updating, fetchStatus]);

  const available = Boolean(info?.canUpdate && info.remoteAhead && info.state.status !== "running");

  const startUpdate = async () => {
    if (!info) return;
    const ok = await confirm({
      title: "Actualizar la aplicación",
      message:
        "Se descargará e instalará la última versión disponible. La aplicación se cerrará y volverá a abrirse automáticamente en unos minutos. Los datos de las clientas no se modifican.",
      confirmLabel: "Actualizar ahora",
    });
    if (!ok) return;
    try {
      const res = await fetch("/api/update", { method: "POST" });
      const data = await res.json();
      if (data.ok) {
        updatingRef.current = true;
        setUpdating(true);
        toast("Actualización iniciada. No cierres la aplicación.", "info");
      } else {
        toast(data.message ?? "No se pudo iniciar la actualización.", "err");
      }
    } catch {
      toast("No se pudo contactar con el servidor de la aplicación.", "err");
    }
  };

  if (!info?.canUpdate) return null;

  if (updating || info.state.status === "running") {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 text-paper/80 px-3 py-1.5 text-[11px] font-bold"
        title="Actualizando la aplicación…"
      >
        <span className="animate-spin">
          <IcRefresh size={13} />
        </span>
        <span className="hidden sm:inline">Actualizando…</span>
      </span>
    );
  }

  if (!available) return null;

  return (
    <button
      onClick={startUpdate}
      className="relative inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-pine px-3 py-1.5 text-[11px] font-bold hover:bg-amber-300 active:scale-[0.97] transition-all shadow"
      title={`Nueva versión disponible (${info.localCommit ?? "?"} → ${info.remoteCommit ?? "?"})`}
    >
      <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
      </span>
      <IcRefresh size={13} />
      <span className="hidden sm:inline">Actualizar</span>
    </button>
  );
}
