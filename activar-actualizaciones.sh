#!/usr/bin/env bash
# Activar en el PC del cliente: convierte la carpeta instalada en una copia
# de GitHub y crea un servicio systemd que relanza la app automáticamente
# tras cada actualización remota.
#
# Uso:   ./activar-actualizaciones.sh <URL-del-repositorio>
# Ej.:   ./activar-actualizaciones.sh https://github.com/tuusuario/peluqueria-marisa.git
set -Eeuo pipefail

REPO_URL="${1:-}"
[[ -n "$REPO_URL" ]] || { echo "Uso: $0 <URL-del-repositorio>" >&2; exit 1; }

APP_ID="peluqueria"
INSTALL_DIR="${XDG_DATA_HOME:-$HOME/.local/share}/$APP_ID"
BIN_DIR="$HOME/.local/bin"
SYSTEMD_DIR="$HOME/.config/systemd/user"
SERVICE_FILE="$SYSTEMD_DIR/$APP_ID.service"
PORT="${PELUQUERIA_PORT:-3000}"

[[ -d "$INSTALL_DIR/package.json" || -f "$INSTALL_DIR/package.json" ]] || {
  echo "ERROR: la aplicación no está instalada en $INSTALL_DIR. Ejecuta primero instalar-peluqueria.sh." >&2
  exit 1
}
command -v git >/dev/null 2>&1 || { echo "ERROR: instala git antes de continuar." >&2; exit 1; }

echo "[1/4] Convirtiendo la carpeta instalada en una copia del repositorio..."
cd "$INSTALL_DIR"
if [[ ! -d .git ]]; then
  git init -b main
  git remote add origin "$REPO_URL"
else
  git remote set-url origin "$REPO_URL"
fi
git fetch --depth 1 origin main
git reset --hard origin/main
git update-ref refs/remotes/origin/main HEAD 2>/dev/null || true

echo "[2/4] Parando la instancia actual (si estaba abierta)..."
pkill -f ".next/standalone/server.js" 2>/dev/null || true
rm -f "${XDG_RUNTIME_DIR:-/tmp}/peluqueria-${USER}.pid" 2>/dev/null || true
rm -f "$INSTALL_DIR/.update-state.json" 2>/dev/null || true

echo "[3/4] Creando el servicio systemd (relanza la app tras actualizar)..."
mkdir -p "$SYSTEMD_DIR"
RUNTIME_BIN="$(command -v bun || command -v node)"
cat > "$SERVICE_FILE" <<EOF
[Unit]
Description=Peluquería Marisa (servidor local)

[Service]
WorkingDirectory=$INSTALL_DIR
Environment=NODE_ENV=production
Environment=PORT=$PORT
Environment=PELUQUERIA_APP_DIR=$INSTALL_DIR
Environment=NEXT_PUBLIC_UPDATE_REPO_URL=$REPO_URL
ExecStart=$RUNTIME_BIN $INSTALL_DIR/.next/standalone/server.js
Restart=on-failure
RestartSec=2

[Install]
WantedBy=default.target
EOF
systemctl --user daemon-reload
systemctl --user enable --now "$APP_ID.service"

echo "[4/4] Manteniendo systemd activo aunque cierres la sesión..."
loginctl enable-linger "$(whoami)" 2>/dev/null || true

cat <<EOF

✅ Actualizaciones remotas activadas.

La aplicación corre ahora como servicio de usuario ($APP_ID.service).
Cuando publiques cambios en GitHub, al cliente le aparecerá el icono
«Actualizar» en la barra superior; al pulsarlo, la app se descargará la
nueva versión, se recompilará y se reiniciará sola.

Para comprobar el estado:  systemctl --user status $APP_ID
Log de la app:             journalctl --user -u $APP_ID -f
Log de actualizaciones:    $INSTALL_DIR/update.log
EOF
