# Peluquería Marisa · v1.1.0

Proyecto completo de la agenda de Peluquería Marisa.

- La aplicación principal está en la raíz y se ejecuta como servidor Next.js.
- `instalar-peluqueria.sh` prepara una instalación local de producción.
- La aplicación Windows se actualiza mediante `electron-updater` desde GitHub Releases.
- `activar-actualizaciones.sh` conserva el actualizador basado en Git para Linux.

Para publicar una actualización de Windows, incrementa la versión en ambos
`package.json`, genera el instalador con `npm run dist:win` dentro de `desktop/`
y sube el instalador y los archivos de actualización a una GitHub Release.

## Dónde se guardan los datos

La aplicación es *local-first*: **no hay servidor de base de datos**. Los datos
viven en el dispositivo donde se usa la app y nunca salen de él salvo cuando el
salón decide sincronizar.

| Entorno | Almacenamiento | Dónde está |
| --- | --- | --- |
| Navegador / PWA (móvil, tablet) | **IndexedDB** (`idb`) | Base `salon-aura-db` en el navegador |
| Escritorio (Electron, PC del salón) | **SQLite real** (`sql.js`) | Archivo `.sqlite` en la carpeta de datos de la aplicación |
| Copia de seguridad | SQLite portable | Ajustes → Base de datos local → Exportar |

En modo escritorio el puente `window.desktopDB` tiene prioridad sobre IndexedDB,
de modo que ambos formatos guardan exactamente la misma estructura.

**Dónde NO están los datos:** ni en `prisma/` ni en `db/` — no existen como
directorios con datos. Antes de v1.2.0 ambos aparecían en este README y era
falso: apuntaban a restos del generador de proyectos de shadcn que la aplicación
nunca usó. La base de datos no está en el repositorio y no se publica en GitHub;
las copias se generan desde la propia aplicación.

## Copias de seguridad

El único archivo que hay que guardar es el `.sqlite` que exporta
Ajustes → Base de datos local. Se puede abrir con cualquier visor de SQLite
(DBeaver, DB Browser for SQLite) y se puede copiar a un pendrive o a Google
Drive tal cual. La sincronización con Google Drive que hay en Ajustes sube
exactamente ese mismo archivo.

## Sincronización y conflictos

Ajustes → Sincronización con Google Drive mantiene una réplica del archivo
`.sqlite` en Drive. La resolución de conflictos es *última escritura gana*:
cuando dos dispositivos han modificado el mismo registro sin verse, **al
sincronizar se conserva la versión más reciente y la otra se descarta sin
aviso**. Para un salón con varios dispositivos trabajando a la vez, conviene
saber esto antes de confiarle datos que no se puedan recuperar.

## El listado del almacén

El inventario se muestra como una **fila por producto**, no como tarjetas: con
muchas referencias, una tarjeta por producto hace la lista interminable.

Para leer la lista de un vistazo:

- **La franja de color del borde izquierdo** indica el estado de cada producto:
  roja = agotado, ámbar = stock bajo, gris = normal. Se puede recorrer la
  columna entera sin leer.
- **Coste y Venta son columnas de ancho fijo**, así que los precios se comparan
  bajando el ojo.
- **Bajo el nombre** aparece la categoría, la referencia y el proveedor, en
  una línea pequeña.
- El color del cuadrado de la izquierda es el de la categoría del producto.

### Registrar movimientos

- **Salida o entrada de una unidad**: los botones `−` y `+` de la fila. Basta
  un toque, y sale aviso con opción de **deshacer**.
- **Entrada o salida de varias unidades, o con motivo**: pulsa la flecha `›` de
  la izquierda para desplegar la fila. Ahí están también el historial de
  movimientos y, en móvil, editar y eliminar.

## Copias de seguridad automáticas

No hay que configurar nada. Cada vez que se guarda la base, la aplicación copia
el `.sqlite` a una carpeta `backups` junto a él con la fecha del día, y **se
conservan automáticamente las 7 copias más recientes**.

Aun así, conviene exportar una copia de vez en cuando desde
Ajustes → Base de datos local y guardarla fuera del PC.

## Documentación de la sesión

El detalle de los cambios del 30 de septiembre de 2026, con el antes y el
después de cada decisión, está en [`CAMBIOS-SESION-2026-09-30.md`](CAMBIOS-SESION-2026-09-30.md).
