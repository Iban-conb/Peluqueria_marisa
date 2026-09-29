# Peluquería Marisa · v1.1.0

Proyecto completo de la agenda de Peluquería Marisa.

- La aplicación principal está en la raíz y se ejecuta como servidor Next.js.
- `prisma/` y `db/` corresponden a la persistencia local. La base de datos real
  no se publica en GitHub.
- `instalar-peluqueria.sh` prepara una instalación local de producción.
- La aplicación Windows se actualiza mediante `electron-updater` desde GitHub Releases.
- `activar-actualizaciones.sh` conserva el actualizador basado en Git para Linux.

Para publicar una actualización de Windows, incrementa la versión en ambos
`package.json`, genera el instalador con `npm run dist:win` dentro de `desktop/`
y sube el instalador y los archivos de actualización a una GitHub Release.
