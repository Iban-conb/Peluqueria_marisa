# Cambios · sesión del 30 de septiembre de 2026

Resumen de todo lo que se hizo sobre Peluquería Marisa en esta sesión: qué se
encontró, por qué se cambió y cómo se comprobó.

Todos los cambios están en `main` salvo indicación contraria.

---

## 1. El README describía una persistencia que no existía

### Qué se encontró

El `README.md` afirmaba:

> `prisma/` y `db/` corresponden a la persistencia local.

Era **falso por partida doble**:

- `prisma/schema.prisma` era el esquema por defecto del generador de shadcn.
  Declaraba los modelos `User` y `Post`, que la aplicación no tiene, y pedía
  una variable `DATABASE_URL` que el proyecto nunca define. Ningún fichero en
  `src/` o `desktop/` lo importaba.
- **`db/` no existe.** No hay ese directorio en el repositorio.

El daño no era teórico: como `.gitignore` oculta `*.sqlite` y `*.db`, la
documentación hacía creer que las copias de datos del salón estaban respaldadas
en el repositorio. No lo estaban, en ninguna parte.

### Qué se hizo

Se reescribió la sección de persistencia con lo que ocurre de verdad:

| Entorno | Almacenamiento | Ubicación |
| --- | --- | --- |
| Navegador / PWA | IndexedDB (vía `idb`) | Base `salon-aura-db` |
| Escritorio (Electron) | SQLite real (vía `sql.js`) | `peluqueria-marisa.sqlite` en la carpeta de datos de la app |
| Copia de seguridad | SQLite portable | Ajustes → Base de datos local → Exportar |

Se añadió además una advertencia honesta sobre cómo resuelve conflictos la
sincronización con Google Drive (ver más abajo, punto 5).

---

## 2. Prisma eliminado

`grep -rn "prisma" src/ desktop/` no devuelve ninguna importación. Se retiró:

- `prisma/schema.prisma` (borrado)
- `prisma` y `@prisma/client` de `package.json`
- los cuatro scripts `db:push`, `db:generate`, `db:migrate` y `db:reset`

**Resultado:** 858 → 829 paquetes instalados.

**Esto no cambia la base de datos del salón.** Prisma nunca la tocó: la
persistencia la gestionan `src/lib/indexeddb.ts` (navegador) y `desktop/db.js`
(escritorio). Prisma exigía además un proceso Node de servidor, incompatible con
una app que tiene que funcionar sin servidor y sin conexión en el PC del salón.

### Nota sobre `package-lock.json`

No se regeneró. **No hace falta:** se comprobó que `npm ci` y `npm install`
funcionan los dos con el lockfile tal como está; npm se limita a podar prisma.
Regenerarlo sigue siendo opcional para dejar el árbol limpio.

---

## 3. El listado del almacén: de tarjeta a fila de tabla

Este fue el trabajo principal, en dos rondas.

### 3.1 Primera ronda: quitar el hueco vacío (descartada)

La tarjeta original era una fila de tres columnas: icono, texto y control de
stock. La columna de texto era `flex-1`, de modo que se estiraba a unos **500 px
para 53 px de contenido** (medido en el navegador). De ahí el hueco vacío en el
centro.

La primera solución fue repartir los datos en cinco columnas etiquetadas
(Categoría, Referencia, Proveedor, Coste, Venta) a todo el ancho. **Resolvió el
hueco, pero no la densidad:** cada producto seguía ocupando unos 160 px.

**Se descartó porque con mucho stock la lista se vuelve interminable.** Una
tarjeta por producto no escala.

### 3.2 Segunda ronda: fila de tabla (la que está en `main`)

Se rehízo como una fila compacta por producto, en `src/views/warehouse-view.tsx`.

| | Antes | Ahora |
| --- | --- | --- |
| Alto por producto | ~160 px | ~48 px |
| Productos visibles sin scroll | 4 | 8 |

Decisiones de diseño:

- **Filtrado de estado en el borde izquierdo.** Una barra de 3 px: roja =
  agotado, ámbar = stock bajo, gris = normal. Permite recorrer la columna de un
  vistazo sin leer. Antes el estado era solo un texto que había que buscar.
- **Precios en columna.** Coste y Venta tienen ancho fijo, así que se comparan
  bajando el ojo por la columna.
- **Ficha bajo el nombre.** Categoría, referencia y proveedor van en una línea
  pequeña bajo el nombre, en lugar de ocupar tres columnas de ancho fijo.
- **La categoría se codifica por color** en el icono, sin columna propia.
- **Sin numeración decorativa** (01, 02, 03): la lista no es una secuencia, es
  un inventario.

### Lo que se movió de sitio

- **Registrar entrada/salida con cantidad y motivo** (antes botones visibles en
  cada tarjeta) y el **historial de movimientos** pasan a la fila desplegable,
  que se abre con la flecha de la izquierda.
- En **móvil**, editar y eliminar también están en la fila desplegada: en la
  fila no caben sin desbordar.

### Lo que no ha cambiado

Ninguna función se ha perdido: ajuste rápido de una unidad, entrada, salida,
historial, deshacer, editar, eliminar, buscador, filtros, lista de compra
sugerida y exportaciones a Excel y PDF.

### Un error que hubo que corregir

La primera versión de la fila metía diez columnas de ancho fijo. El panel del
listado mide unos 890 px, así que el nombre del producto quedaba aplastado a
**una sola letra** ("G.", "M.") y las cabeceras se solapaban. Se rehízo el
presupuesto de columnas: siete elementos fijos (unos 400 px) y el nombre se
queda con el resto. Es la razón por la que la ficha va bajo el nombre y no en
columnas propias.

---

## 4. Cabecera del almacén en móvil

No estaba en el encargo original, pero estaba justo al lado y era un desastre:
el subtítulo "8 productos · inventario valorado en 456,60 €" se comprimía a
**una palabra por línea** al competir con los botones por el ancho (`flex-1` con
`min-w-0` sobre un `flex-wrap`).

Se hizo que el bloque de título ocupe su propia línea por debajo de `sm`.

---

## 5. Hallazgo: ya había respaldos automáticos

Leyendo `desktop/db.js` para otra cosa se descubrió que el sistema de copia de
seguridad **ya existía y no estaba documentado en ninguna parte**:

- Al escribir la base, se guarda una copia diaria como
  `peluqueria-AAAA-MM-DD.sqlite` en una carpeta `backups` junto al fichero.
- **Se conservan automáticamente las 7 últimas.**

O sea: una semana de historial, sin configurar nada. Para un negocio que factura
es exactamente lo que hace falta, y era un secreto.

### El punto flaco que sí conviene conocer

La sincronización con Google Drive (Ajustes → Sincronización) resuelve los
conflictos por *última escritura gana*, **sin merge**. Si dos dispositivos
modifican el mismo registro sin verse, al sincronizar se conserva la versión más
reciente y **la otra se descarta sin aviso**.

No se ha tocado. Es un cambio de diseño de producto, no un arreglo, y merece una
decisión consciente antes de implementarlo.

---

## 6. Cómo se comprobó

Cada cambio se verificó ejecutando la aplicación de verdad, no leyendo el código:

- `npm ci` desde cero → 829 paquetes, 0 errores
- `npm run build` → correcto, mismas cuatro rutas
- `npx tsc --noEmit` → sin errores en los ficheros tocados
- `npm run lint` → 17 errores, **idénticos a los de `main`**, ninguno en
  `warehouse-view.tsx`. Son preexistentes.
- Recorrido con navegador real a **1440 px, 820 px y 390 px**: sin scroll
  horizontal y sin desbordes
- Los ficheros se subieron con el mismo hash de blob que la copia local, es
  decir **byte a byte idénticos**

---

## Resumen de commits

| Commit | Qué hace |
| --- | --- |
| `14bdc83` | PR #4 · README real y retirada de Prisma |
| `63c2d05` | PR #5 · Tarjeta del almacén en tres filas *(superada por la siguiente)* |
| — | PR #6 · Listado del almacén como fila de tabla + este documento |

## Deuda técnica conocida

Pendientes que se detectaron pero **no** se han tocado, para no mezclarlos:

1. **`desktop/app-server/package.json`** es una copia literal del `package.json`
   raíz: mismo nombre, mismas dependencias. Se empaqueta dentro del `.exe`. Hay
   que decidir si sobra.
2. **`typescript.ignoreBuildErrors: true`** en `next.config.ts`. Los errores de
   tipos no paran el build; se descubren en producción. Ponerlo a `false` y
   arreglar lo que salga.
3. **`saveDB` sin debounce** (`src/state/store.tsx`). Cada cambio de estado
   reescribe la base entera; en escritorio eso significa reconstruir el
   `.sqlite` completo en cada clic. Con muchos productos se notará.
4. **Conflicto de Drive sin merge** (punto 5).
5. **Doble lockfile** (`bun.lock` y `package-lock.json`), con
   `instalar-peluqueria.sh` exigiendo bun y el build de Windows usando npm.
6. **`xlsx` como dependencia de URL externa** (`cdn.sheetjs.com`). Si esa URL
   cambia, `npm install` se rompe en el PC del salón.
7. **Favicon 404** en todas las vistas.
