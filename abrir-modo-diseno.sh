#!/usr/bin/env bash
set -Eeuo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Se necesita Node.js y npm para abrir la aplicación."
  read -r -p "Pulsa Enter para cerrar..." || true
  exit 1
fi

if [[ ! -x node_modules/.bin/next ]]; then
  echo "Instalando dependencias para el modo de diseño..."
  npm install --fetch-timeout=120000 --fetch-retries=3
fi

if curl -fsS http://127.0.0.1:3000 >/dev/null 2>&1; then
  xdg-open http://127.0.0.1:3000 >/dev/null 2>&1 &
  exit 0
fi

echo "Abriendo la aplicación en modo de diseño..."
npm run dev &
DEV_PID=$!
trap 'kill "$DEV_PID" 2>/dev/null || true' EXIT INT TERM

for _ in {1..30}; do
  if curl -fsS http://127.0.0.1:3000 >/dev/null 2>&1; then
    xdg-open http://127.0.0.1:3000 >/dev/null 2>&1 &
    break
  fi
  sleep 1
done

wait "$DEV_PID"
