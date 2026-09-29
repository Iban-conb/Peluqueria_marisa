#!/bin/bash
# Empaqueta el código fuente completo del proyecto en un ZIP limpio
set -e

BASE=/home/z/my-project
STAGING=$BASE/.tmp-pack/PeluqueriaMarisa-fuente
ZIP_OUT=$BASE/download/PeluqueriaMarisa-codigo-fuente-1.1.0.zip

rm -rf "$BASE/.tmp-pack"
mkdir -p "$STAGING"

echo "[1/5] Copiando fuente (excluyendo .git, skills, download, upload, builds)..."
rsync -a \
  --exclude='.git' \
  --exclude='skills' \
  --exclude='download' \
  --exclude='upload' \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='out' \
  --exclude='build' \
  --exclude='dist' \
  --exclude='db' \
  --exclude='.tmp-pack' \
  --exclude='dev.log' \
  --exclude='server.log' \
  --exclude='*.pid' \
  "$BASE/" "$STAGING/"

echo "[2/5] Escribiendo LEEME-CODIGO-FUENTE.txt..."
cat > "$STAGING/LEEME-CODIGO-FUENTE.txt" << 'EOF'
================================================================
 PELUQUERÍA MARISA - CÓDIGO FUENTE COMPLETO (v1.1.0)
================================================================

Qué es este paquete
-------------------
Carpeta fuente completa de la aplicación de gestión de citas para
peluquería "Peluquería Marisa": PWA web + aplicación de escritorio
(Windows .exe / Linux .deb) con Verifactu integrado.

Fecha de empaquetado: 30/09/2026 (UTC+2)

Estructura del proyecto
-----------------------
src/app/            Aplicación Next.js 16 (páginas, API, estilos)
src/views/          Vistas: Agenda, Calendario, Clientes, Facturación,
                    Almacén, Configuración
src/components/     Componentes UI (modales, tarjetas, firma, PWA...)
src/state/          Estado global (store.tsx -> IndexedDB -> .sqlite)
src/lib/            Librerías clave:
                      - verifactu.ts        Comunicación con Verifactu (QR, huella)
                      - sqlite-export.ts    BD .sqlite real en el PC
                      - invoice-pdf.ts      PDF/ticket de facturas con QR
                      - clients-xlsx.ts     Import/Export clientes Excel
                      - drive-sync.ts       Sincronización con Google Drive
                      - indexeddb.ts        Persistencia local
src/app/api/verifactu/  Proxy API Verifactu (clave nunca en el navegador)
desktop/            App de escritorio Electron:
                      - main.js / preload.js / db.js
                      - installer.nsi (instalador Windows .exe)
                      - empaquetado .deb (Linux)
                      - app-server/ (servidor local embebido)
public/             PWA (manifest, service worker, iconos)
prisma/             Esquema de BD (schema.prisma)
scripts/            Utilidades (tests Verifactu/Excel/BD, instalador .exe)
.zscripts/          Supervisor del servidor de desarrollo
worklog.md          Registro de trabajo del proyecto

Qué NO incluye este paquete (y por qué)
---------------------------------------
- node_modules/     Se regenera con "bun install" o "npm install"
- .git/             Pesaba 240 MB (los instaladores .zip quedaron dentro
                    del historial). El historial de commits está en
                    GitHub (Iban-conb/Peluqueria_marisa) + copia local.
- download/         Los instaladores ya generados (.deb / .exe) se
                    entregaron como ZIPs aparte.
- skills/, upload/  Carpetas internas del entorno de desarrollo.

Cómo arrancar en tu PC (modo web/PWA)
-------------------------------------
1) Instala Node.js 20+ (o Bun) y Git.
2) En esta carpeta:
     bun install        (o: npm install)
3) Arranca en desarrollo:
     bun run dev        (o: npm run dev)
   -> Abre http://localhost:3000
4) Build de producción:
     bun run build && bun run start

Aplicación de escritorio (Windows / Linux)
------------------------------------------
La carpeta desktop/ contiene la app Electron con:
- BD .sqlite viva en el PC (autoguardado + importación automática)
- Sincronización con Google Drive
- installer.nsi para generar el .exe de Windows
- Empaquetado .deb para Linux
Los instaladores ya compilados (v1.1.0) se entregaron como
"PeluqueriaMarisa-1.1.0-instalador-windows.zip" y
"peluqueria-marisa-1.1.0-instalador-linux.zip".

Verifactu (facturas con QR)
---------------------------
Solo tienes que hacer una cosa:
  Configuración -> Verifactu -> pegar tu API key.
A partir de ese momento, al emitir una factura la app la envía
automáticamente, guarda huella/CSV y pinta el QR oficial en el
ticket/PDF. Incluye modo prueba y selector de proveedor
(verifacti / verifacturapi). La API key nunca se expone al
navegador: viaja por el proxy interno src/app/api/verifactu/.

Nota sobre .env
---------------
El archivo .env incluido trae una ruta de base de datos propia del
entorno de desarrollo original (DATABASE_URL). Puedes borrarlo o
ajustarlo en tu PC; la aplicación guarda los datos en IndexedDB +
.sqlite exportable, no depende de esa variable para funcionar.

================================================================
EOF

echo "[3/5] Verificando ficheros clave en el paquete..."
for f in src/lib/verifactu.ts src/state/store.tsx desktop/main.js desktop/installer.nsi \
         prisma/schema.prisma .env .gitignore .zscripts/dev.sh package.json bun.lock \
         public/sw.js LEEME-CODIGO-FUENTE.txt; do
  [ -f "$STAGING/$f" ] && echo "  OK  $f" || { echo "  FALTA $f"; exit 1; }
done

echo "[4/5] Creando ZIP..."
mkdir -p "$BASE/download"
rm -f "$ZIP_OUT"
cd "$BASE/.tmp-pack"
zip -r -9 -q "$ZIP_OUT" PeluqueriaMarisa-fuente

echo "[5/5] Verificación de integridad..."
unzip -t "$ZIP_OUT" > /dev/null && echo "  ZIP correcto"
echo "  Tamaño: $(du -h "$ZIP_OUT" | cut -f1)"
echo "  Ficheros: $(unzip -l "$ZIP_OUT" | tail -1 | awk '{print $2}')"
echo "  Commit fuente: $(cd "$BASE" && git log --oneline -1)"

cd "$BASE"
rm -rf "$BASE/.tmp-pack"
echo "LISTO: $ZIP_OUT"
