#!/usr/bin/env bash
set -Eeuo pipefail

APP_NAME="Peluquería"
APP_ID="peluqueria"
SOURCE_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
INSTALL_DIR="${XDG_DATA_HOME:-$HOME/.local/share}/$APP_ID"
BIN_DIR="${HOME}/.local/bin"
APPLICATIONS_DIR="${XDG_DATA_HOME:-$HOME/.local/share}/applications"
DESKTOP_DIR="$(xdg-user-dir DESKTOP 2>/dev/null || true)"
DESKTOP_DIR="${DESKTOP_DIR:-$HOME/Desktop}"

log() { printf '\n[%s] %s\n' "$APP_NAME" "$*"; }
fail() { printf '\nERROR: %s\n' "$*" >&2; exit 1; }

cleanup_on_error() {
  printf '\nLa instalación no ha terminado. Revisa el mensaje anterior.\n' >&2
  read -r -p 'Pulsa Enter para cerrar...' || true
}
trap cleanup_on_error ERR

command -v xdg-open >/dev/null 2>&1 || fail "No se encontró xdg-open. Instala xdg-utils y vuelve a intentarlo."
command -v curl >/dev/null 2>&1 || fail "No se encontró curl. Instálalo y vuelve a intentarlo."

if command -v bun >/dev/null 2>&1; then
  PACKAGE_INSTALL_CMD="bun install --frozen-lockfile"
  BUILD_CMD="bun run build"
  RUNTIME_BIN="$(command -v bun)"
elif command -v node >/dev/null 2>&1 && command -v npm >/dev/null 2>&1; then
  PACKAGE_INSTALL_CMD="npm install"
  BUILD_CMD="npm run build"
  RUNTIME_BIN="$(command -v node)"
else
  cat <<'EOF'

No se ha encontrado Bun ni Node.js/npm, necesarios para instalar esta aplicación.
Instala Node.js desde https://nodejs.org/ y vuelve a ejecutar este archivo.
EOF
  read -r -p 'Pulsa Enter para cerrar...' || true
  exit 1
fi

[[ -f "$SOURCE_DIR/package.json" ]] || fail "package.json no está junto al instalador."
[[ -f "$SOURCE_DIR/bun.lock" ]] || fail "bun.lock no está junto al instalador."

log "Preparando la carpeta de instalación..."
mkdir -p "$INSTALL_DIR" "$BIN_DIR" "$APPLICATIONS_DIR" "$DESKTOP_DIR"

log "Copiando los archivos de la aplicación..."
tar --exclude='./.git' --exclude='./.next' --exclude='./node_modules' \
    --exclude='./peluqueria' --exclude='./pwa' --exclude='./prescindibles' \
    --exclude='./download' --exclude='./upload' --exclude='./workspace' \
    --exclude='./tests' --exclude='./*.log' --exclude='./.env' \
    -cf - -C "$SOURCE_DIR" . | tar -xf - -C "$INSTALL_DIR"

log "Instalando dependencias (puede tardar unos minutos)..."
(cd "$INSTALL_DIR" && $PACKAGE_INSTALL_CMD)

log "Construyendo la aplicación..."
(cd "$INSTALL_DIR" && $BUILD_CMD)

cat > "$BIN_DIR/$APP_ID" <<EOF
#!/usr/bin/env bash
set -Eeuo pipefail
APP_DIR="$INSTALL_DIR"
RUNTIME_BIN="$RUNTIME_BIN"
PORT="\${PELUQUERIA_PORT:-3000}"
PID_FILE="\${XDG_RUNTIME_DIR:-/tmp}/peluqueria-\${USER}.pid"
LOG_FILE="\${XDG_STATE_HOME:-$HOME/.local/state}/peluqueria/server.log"
mkdir -p "\$(dirname "\$LOG_FILE")"

if [[ -f "\$PID_FILE" ]] && kill -0 "\$(cat "\$PID_FILE")" 2>/dev/null; then
  xdg-open "http://127.0.0.1:\$PORT" >/dev/null 2>&1 &
  exit 0
fi

cd "\$APP_DIR"
NODE_ENV=production PORT="\$PORT" nohup "\$RUNTIME_BIN" .next/standalone/server.js >"\$LOG_FILE" 2>&1 &
echo "\$!" > "\$PID_FILE"
for _ in {1..30}; do
  if curl -fsS "http://127.0.0.1:\$PORT" >/dev/null 2>&1; then break; fi
  sleep 0.5
done
xdg-open "http://127.0.0.1:\$PORT" >/dev/null 2>&1 &
EOF
chmod +x "$BIN_DIR/$APP_ID"

cat > "$APPLICATIONS_DIR/$APP_ID.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=$APP_NAME
Comment=Gestión de la peluquería
Exec=$BIN_DIR/$APP_ID
Icon=$INSTALL_DIR/public/icon-peluqueria-marisa.svg
Terminal=false
Categories=Office;
StartupNotify=true
EOF
chmod +x "$APPLICATIONS_DIR/$APP_ID.desktop"

cp "$APPLICATIONS_DIR/$APP_ID.desktop" "$DESKTOP_DIR/$APP_ID.desktop"
chmod +x "$DESKTOP_DIR/$APP_ID.desktop"

log "Instalación terminada correctamente."
printf 'Acceso directo creado en: %s\n' "$DESKTOP_DIR/$APP_ID.desktop"
printf 'También puedes encontrar la aplicación en el menú de aplicaciones.\n'
printf 'Abriendo %s...\n' "$APP_NAME"
"$BIN_DIR/$APP_ID"
