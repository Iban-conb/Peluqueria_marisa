# Instalador del PC del salón

Esta carpeta es la que debes copiar completa a un pendrive. En el ordenador
del salón, abre un terminal dentro de esta carpeta y ejecuta:

```bash
chmod +x instalar-peluqueria.sh
./instalar-peluqueria.sh
```

El instalador instalará las dependencias, compilará la aplicación y creará un
acceso directo llamado «Peluquería».

Requisitos del ordenador del salón:

- Linux con `curl`, `xdg-utils`, Node.js/npm o Bun.
- Conexión a Internet durante la primera instalación para descargar
  dependencias.

Esta carpeta no contiene la base de datos del ordenador actual, credenciales,
`.env`, `node_modules`, `.next`, GitHub/PWA ni archivos de desarrollo.
