/**
 * Genera los iconos del empaquetado de escritorio a partir del SVG de la app.
 * - desktop/assets/icon.png       512×512 (Linux/AppImage/deb + ventana)
 * - desktop/assets/512x512.png    copia con nombre estándar de electron-builder
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = "/home/z/my-project";
const SVG = path.join(ROOT, "public", "icon-peluqueria-marisa.svg");
const OUT = path.join(ROOT, "desktop", "assets");

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const svg = fs.readFileSync(SVG);
  await sharp(svg, { density: 384 })
    .resize(512, 512)
    .png()
    .toFile(path.join(OUT, "icon.png"));
  await sharp(svg, { density: 384 })
    .resize(512, 512)
    .png()
    .toFile(path.join(OUT, "512x512.png"));
  console.log("iconos generados en", OUT);
})();
