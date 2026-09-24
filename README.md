# Peluquería Marisa

Proyecto completo de la agenda de Peluquería Marisa.

- La aplicación principal está en la raíz y se ejecuta como servidor Next.js.
- `pwa/` contiene la versión estática preparada para GitHub Pages.
- `instalacion/` contiene los recursos de instalación local.
- `prisma/` y `db/` corresponden a la persistencia local. La base de datos real
  no se publica en GitHub.

La publicación de GitHub Pages usa el workflow de `.github/workflows/` y
compila la aplicación de `pwa/`.
