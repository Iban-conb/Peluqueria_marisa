#!/bin/bash
# Compila el instalador .exe de Peluquería Marisa con el makensis nativo
# de Linux que electron-builder deja en ~/.cache/electron-builder/nsis.
# Sin wine: NSIS 3 es multiplataforma y los plugins se incrustan, no se
# ejecutan, en tiempo de compilación.
set -e
cd /home/z/my-project/desktop

NSIS_DIR="$HOME/.cache/electron-builder/nsis/nsis-3.0.4.1"
MAKENSIS="$NSIS_DIR/linux/makensis"

if [ ! -x "$MAKENSIS" ]; then
  echo "ERROR: no se encuentra makensis en $MAKENSIS" >&2
  exit 1
fi

# makensis espera el .nsi en UTF-8 con BOM (nombres con acentos)
python3 - << 'EOF'
data = open("installer.nsi", "r", encoding="utf-8").read()
if not data.startswith("﻿"):
    open("installer.nsi", "w", encoding="utf-8-sig").write(data)
print("BOM ok")
EOF

"$MAKENSIS" -V2 installer.nsi

echo "--- resultado ---"
ls -la dist/PeluqueriaMarisa-Setup-*.exe
