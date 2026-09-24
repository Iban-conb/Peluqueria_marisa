#!/usr/bin/env bash
# dev.sh — supervisor del servidor de desarrollo Next.js para Peluquería Marisa
# Mantenido en /home/z/my-project/.zscripts/dev.sh (patrón estándar del entorno)

set -u

PROJECT_DIR="/home/z/my-project"
cd "$PROJECT_DIR"

export DATABASE_URL="${DATABASE_URL:-file:${PROJECT_DIR}/db/custom.db}"
export NPM_CONFIG_REGISTRY="${NPM_CONFIG_REGISTRY:-}"

log() {
  printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

# Instalar dependencias si faltan
if [ ! -d "$PROJECT_DIR/node_modules" ]; then
  log "node_modules no existe, ejecutando bun install..."
  bun install
fi

# Liberar el puerto 3000 si quedó ocupado por un proceso previo
if command -v fuser >/dev/null 2>&1; then
  fuser -k 3000/tcp >/dev/null 2>&1 || true
  sleep 1
fi

log "Arrancando servidor de desarrollo (bun run dev) en puerto 3000..."
# Bucle de reintentos: si el dev server cae, se relanza automáticamente.
while true; do
  bun run dev
  code=$?
  log "El servidor salió con código $code; relanzando en 3 segundos..."
  sleep 3
done
