
---
Task ID: 6
Agent: Super Z (principal)
Task: Mejorar la función de Almacén para el día a día (más intuitiva y rápida)

Work Log:
- AVISO: el sandbox se reinició OTRA VEZ (proyecto vacío, .git sustituido por plantilla). Restaurado de nuevo desde GitHub (clone → raíz), bun install, .zscripts/dev.sh recreado y lanzado vía init-fullstack.sh oficial. HTTP 200 estable.
- Analizada la vista actual; fricciones detectadas: consumir producto exigía modal completo, lista de compra no accionable, sin atajos ni historial por producto, filtros de estado escondidos.
- Implementado:
  * Steppers ±1 en cada tarjeta (entrada/salida instantánea con motivo por defecto) + toast con botón Deshacer.
  * ui.tsx: toast() acepta action {label, run}; botón clicable (añadido pointer-events-auto que faltaba).
  * store.tsx: undoStockMovement con dbRef espejo (useEffect) para leer estado fresco desde cierres antiguos; StockMovement.prevStock nuevo para reversar ajustes.
  * Lista de compra: Reponer por artículo (modal con cantidad sugerida), Reponer todo (confirmación + deshacer global) y Copiar pedido (clipboard con fallback execCommand para HTTP inseguro).
  * Chips de estado Todos/Reponer/Agotados + categorías; historial inline por producto; barra de nivel de stock; mensaje vacío con quitar filtros.
  * movement-modal: prop defaultQty para cantidades preseleccionadas.
- Bugs encontrados y corregidos durante pruebas: (1) toasts no clicables por pointer-events-none del contenedor; (2) undo devolvía false por cierre obsoleto de db → dbRef; (3) lint react-hooks/refs prohibía escribir ref en render → movido a useEffect.
- Pruebas headless: ±1 con deshacer en ambas direcciones, filtro Reponer (4 productos), historial inline, Reponer todo (Espuma 2→3, Guantes 0→1; diálogo con resumen exacto), reponer individual con qty preseleccionada, sin errores de consola. Lint limpio.
- Capturas: download/almacen-v2-final.png, almacen-mejorado-desktop.png, almacen-mejorado-movil.png.
- Commit local 30080dd listo para push (se requiere token nuevo: los anteriores se recomendaron revocar).

Stage Summary:
- Almacén v2: gestión diaria con un toque (consumo, reposición total, pedido al proveedor) manteniendo el diseño del app.
- Pendiente (Task 6): push a GitHub cuando el usuario facilite token con permiso de escritura (o lo suba él); su sistema de actualizaciones remotas lo distribuirá al dispositivo del salón.

---
Task ID: 7
Agent: Super Z (principal)
Task: Arreglar visualización de la aplicación (servidor caído)

Work Log:
- Usuario reporta: "No se puede visualizar la aplicación". curl a :3000 devolvía 000.
- Causa: sandbox reiniciado de nuevo → node_modules desaparecido → "next: command not found" en dev.log.
- Solución: bun install (837 paquetes) + relanzar .zscripts/dev.sh. HTTP 200 en 58ms estable.
- Verificado: la home renderiza Agenda/Almacén/Tratamientos/Peluquería Marisa correctamente.

Stage Summary:
- Servidor restaurado y estable. Pendiente: implementar las 4 funcionalidades (Excel/PDF almacén, agenda facturar, tratamientos→productos, venta de productos al facturar).


---
Task ID: 8
Agent: Super Z (principal)
Task: Almacén Excel/PDF + facturación de agenda + tratamientos→productos + venta en factura

Work Log:
- Descubrimiento clave: una sesión anterior (capturada en commits auto del sandbox) ya dejó hecha la CAPA DE DATOS completa: types.ts (Service.products, Invoice, InvoiceLine, nextInvoiceNumber), store.tsx (invoiceAppointment atómico con descuento de stock, applyStockImport), stock-xlsx.ts (export/import), stock-pdf.ts, invoice-pdf.ts, indexeddb con invoices, sqlite-export con tabla invoices. Faltaba TODA la UI.
- Implementado en esta sesión (UI):
  * src/components/invoice-modal.tsx (NUEVO): facturación de cita con servicio, productos incluidos a 0 € (chips «Incluido»), selector de venta extra con steppers y PVP, total, bloqueo si stock insuficiente (incluidos+vendidos), genera PDF y llama a invoiceAppointment; toast con botón «Descargar».
  * src/components/stock-import-modal.tsx (NUEVO): importación Excel/CSV en 2 pasos (archivo → vista previa de cambios/altas → aplicar), usa parseStockFile + applyStockImport.
  * appointment-modal.tsx: botón «Facturar» prominente (cita no facturada no cancelada), tarjeta de factura ya emitida con nº/total/fecha + botón PDF, guarda serviceId en nuevas citas, muestra productos que consume el tratamiento, fallback «Guardar cambios sin facturar».
  * settings-view.tsx ServiceModal: sección «Productos que incluye» (picker + steppers de cantidad), badge de nº de productos en la lista de servicios.
  * warehouse-view.tsx: toolbar con botones Excel / PDF / Importar; wiring de exportadores y modal de importación.
  * agenda-view.tsx: badge «Facturada» (IcEuro) en tarjetas del timeline (compacta y alta) y en modo lista.
  * sqlite-export.ts: fix de tipos en import (color fallback + products opcional en Service[]).
- Bug encontrado en pruebas: citas antiguas sin serviceId no encontraban los productos incluidos del tratamiento → fallback por serviceName en invoice-modal.
- Pruebas browser headless (todo verificado, sin errores de consola):
  1. Excel + PDF descargados (almacen-2026-09-28.xlsx/.pdf en Descargas).
  2. Import: Excel modificado con 3 cambios + 1 alta → preview exacta («Stock: 5 → 9», PVP 29,50 €, alta Laca violeta) → aplicado → stocks correctos e historial con «Importación de Excel».
  3. Tratamiento «Tinte raíz» con Tinte×1, Oxidante×1, Guantes×1 → al facturar cita de Carmen aparecen como «Incluido».
  4. Stock insuficiente de Guantes (0 uds) → «Emitir factura» bloqueado con aviso.
  5. Reposición +1 de Guantes → factura emitida: total 57,00 € (35 servicio + 22 champú venta), cita → Completada, badge Facturada, stocks descontados (Tinte 4→3, Oxidante 7→6, Champú 6→5, Guantes 1→0), movimientos «Consumo en cita» y «Venta en cita» registrados, PDF descargable desde la tarjeta de factura.
- tsc limpio (solo errores preexistentes en skills/), eslint limpio.
- Commit local c51da0e. PENDIENTE PUSH: se necesita token nuevo (los anteriores se filtraron y se recomendó revocarlos).

Stage Summary:
- Las 4 funcionalidades pedidas están operativas de extremo a extremo. Ejemplos: download/almacen-test-import.xlsx (plantilla de ejemplo), test-factura-modal.png, test-agenda-facturada.png.

---
Task ID: 9
Agent: Super Z (principal)
Task: Ficha de cita limpia + facturar desde agenda + sección Facturación con ticket

Work Log:
- Problemas reportados: (1) al abrir cualquier ficha de cita el desplegable de cliente salía activo tapando la vista; (2) no se podía facturar desde la vista de agenda (solo en lista); (3) faltaba una sección para ver todas las facturas con formato simplificado tipo ticket.
- Causa raíz (1): ClientPicker con autoFocus + onFocus que abría el dropdown al montar el modal. Fix: eliminado autoFocus; con cliente seleccionado se muestra tarjeta limpia (avatar + nombre + teléfono + botones Cambiar/Quitar); el buscador solo se abre a petición; al difuminar sin elegir vuelve a la tarjeta.
- Fix (2): openInvoice(appt) global en ui.tsx que monta InvoiceModal standalone (z por debajo de confirm). Botones rápidos € en tarjetas del timeline (compactas: icono; altas: chip «Facturar») y en modo lista (icono en fila de acciones), siempre que la cita no esté facturada ni cancelada.
- Fix (3): nueva vista src/views/invoices-view.tsx + pestaña «Facturas» (6 tabs, grid-cols-6 en móvil): resumen del periodo (facturado/nº facturas/ticket medio), filtros Hoy/Este mes/Todo, buscador por nº/cliente/concepto, listado de facturas con descarga directa de PDF y modal de detalle estilo ticket en pantalla.
- invoice-pdf.ts reescrito: factura simplificada tipo ticket de 80 mm (226.77pt, Courier/Courier-Bold), altura dinámica, cabecera del salón, rótulo FACTURA SIMPLIFICADA, nº+fecha+hora, cliente, líneas (servicio en negrita, incluidos «Incluido» en verde, vendidos con precio), TOTAL + desglose Servicios/Productos, nota de incluidos y pie. Las facturas antiguas conservan su PDF A4 original (pdfBase64 inmutable).
- Pruebas browser headless (sin errores de consola): ficha limpia en edición (Carmen) y nueva cita; botón Cambiar abre buscador; facturación end-to-end desde tarjeta de agenda: stock insuficiente bloquea (Guantes 0) → entrada +1 en Almacén → factura F2026-001 emitida (22,00 €, guantes incluidos descontados → stock 0) → cita COMPLETADA con badge €; vista Facturación muestra la factura con total/ticket medio correctos; detalle tipo ticket con Descargar PDF.
- scripts/test-ticket-pdf.ts (bun + pdf-lib): valida PDF ticket real → 1 página, 80.0 mm de ancho, 117.7 mm alto; resultado en download/ticket-ejemplo.pdf.
- tsc y eslint limpios. Commit local 0421502. Capturas: test-ficha-limpia.png, test-ticket-detalle.png, test-agenda-facturada-badge.png, test-facturas-listado.png.

Stage Summary:
- Las 3 fricciones resueltas: fichas limpias en todas las vistas, facturación con un toque desde cualquier tarjeta de la agenda y sección Facturación completa con tickets simplificados (pantalla + PDF 80mm).
- Pendiente: push a GitHub cuando el usuario facilite token nuevo (los anteriores se recomendaron revocar).

---
Task ID: 10
Agent: Super Z (principal)
Task: Botón facturar bloqueado + citas completadas automáticas + almacén (tabla delimitada, buscador, categorías configurables)

Work Log:
- Diagnóstico «no puedo facturar»: invoiceAppointment ya marca la cita como «completada» automáticamente (store.tsx) — lo que fallaba era la UX: «Emitir factura» se deshabilitaba por stock insuficiente de un producto incluido SIN explicar el motivo.
- invoice-modal: (1) aviso proactivo rojo con producto, uds disponibles y necesarias; (2) cada producto incluido tiene una × para quitarlo SOLO de esa factura (no se descuenta stock ni aparece en el ticket; el tratamiento no se modifica) y chips «Quitados de esta factura» para recuperarlos; (3) nota fija «Al emitir, la cita pasará a Completada…».
- Categorías configurables: types.ts cambia ProductCategory (unión fija) por ProductCategoryDef {id,name,fg,bg} con DEFAULT_PRODUCT_CATEGORIES y CATEGORY_PALETTE; Product.category: string; DB.productCategories. Migración en normalize() de indexeddb (siembra las 6 clásicas + reasigna productos con id desconocido) y en freshDB/seedDB.
- store: addProductCategory (dedup por nombre, color de paleta), renameProductCategory, deleteProductCategory (productos → «Otros»).
- category-manager-modal (NUEVO): lista con renombrado inline, contador de productos por categoría, eliminación con confirmación, alta con input.
- warehouse-view: listado dentro de contenedor delimitado (max-h 62/68dvh, scroll interno) con barra superior: filtro de texto (nombre/marca/ref/proveedor/categoría) + contador visibles/total; buscador suelto de la cabecera eliminado; chips de categorías dinámicos (color propio al activarse) + botón «Categorías».
- product-modal: desplegable desde db.productCategories con pista «Se configura en Almacén → Categorías». stock-xlsx/stock-pdf/stock-import-modal: firma con categories (etiqueta por categoryById; import matchea por nombre). sqlite-export: tabla product_categories nueva (export+import); drive-sync y ajustes (JSON y SQLite) propagan productCategories con fallback a las locales/por defecto.
- Pruebas browser (0 errores consola): filtro «polvo» → 1/12; gestor: añadir «Uñas» → chip visible → renombrar a «Manicura» → eliminar con confirmación; factura Lucía (Guantes stock 0): aviso visible → quitar Guantes → Emitir habilitada → emitida F2026-001 (85 €, «2 incluidos»), cita COMPLETADA con badge, Polvo 2→1 descontado, Guantes sin descontar.
- tsc y eslint limpios. Commit 028f636. Capturas: almacen-tabla-buscador.png, test-factura-desbloqueada.png, almacen-stock-despues.png.

Stage Summary:
- Facturar ya no bloquea en silencio: explica el motivo y permite quitar incluidos de esa factura; la cita sigue pasando a Completada sola.
- Almacén con tabla delimitada, buscador integrado y categorías gestionables por el salón (persistidas y viajando en backups).
- Pendiente: push a GitHub cuando haya token nuevo.

---
Task ID: 11
Agent: Super Z (principal)
Task: Rediseño de la vista de ficha de clientes (aspecto vistoso y moderno)

Work Log:
- Rediseño completo de src/views/clients-view.tsx:
  * Listado: rejilla de tarjetas (1/2/3 columnas según ancho) con avatar degradado, punto indicador, teléfono·ciudad y chips de métricas (nº de citas, facturado en € con datos de invoices, próxima cita con fecha y hora). Ordenación nueva por Nombre / Citas / Facturado (empates → alfabético).
  * Ficha (modal): héroe con degradado pine→golddeep, círculos decorativos y marca de agua de tijeras; avatar 64px con anillo; chips «Cliente desde …» y RGPD (firmado/pendiente); acciones rápidas Llamar (tel:), WhatsApp (wa.me con prefijo 34), Editar y Eliminar (estilo glass).
  * KPIs en fila (2×2 en móvil): citas totales, facturado (suma de invoices del cliente, etiqueta singular/plural), última visita y próxima cita, con iconos en círculos de color.
  * Cuerpo a 2 columnas (lg 2/5+3/5): «Datos de contacto» (tel/correo/dirección con iconos), «Preferencias» (servicio favorito más repetido ×N + gasto medio por factura) y CTA «Nueva cita para {nombre}».
  * Columna derecha con pestañas Historial (N) / Consentimientos (N): historial en línea de tiempo (punto con color del servicio, línea vertical, fecha+hora, servicio, notas, precio, badge «Facturada», StatusPill, clic abre la cita) y pestaña de consentimientos con botón de firma, vacío ilustrado y acciones ver/descargar/eliminar.
- Cierre con Escape y bloqueo de scroll del fondo; icono IcWhatsapp nuevo en icons.tsx (trazo oficial relleno).
- Bugs visuales corregidos en pruebas: desbordamiento horizontal de las columnas del grid en móvil (min-w-0), texto de pestaña «Consentimientos» cortado (px/texto responsivos) y precio del historial visible en móvil (bajo el servicio; en escritorio a la derecha).
- Pruebas browser headless (0 errores de consola): listado con orden Facturado (Lucía 85 € primera tras emitir factura real desde agenda), ficha de Lucía con KPI 85,00 €/factura emitida, badge Facturada y cita COMPLETADA (regresión del flujo de facturación OK), pestaña consentimientos con vacío, fichas de Carmen y María, vistas Agenda y Facturas sin regresión, escritorio 1440px y móvil 390px.
- tsc y eslint limpios. Capturas: clientes-redesign-lista.png, clientes-redesign-ficha.png, clientes-redesign-ficha2.png, clientes-redesign-ficha-kpi.png, clientes-redesign-orden-gasto.png, clientes-redesign-movil-lista.png, clientes-redesign-movil-final3.png, clientes-redesign-desktop-final.png.

Stage Summary:
- La vista de Clientes estrena diseño moderno: tarjetas visuales con métricas, ficha premium con héroe degradado, KPIs económicos, contacto accionable (llamada/WhatsApp), preferencias del cliente, historial en timeline y consentimientos RGPD. Toda la funcionalidad anterior se conserva.
- Pendiente: push a GitHub cuando haya token nuevo.

---
Task ID: 12
Agent: Super Z (principal)
Task: Bajar la ficha de cliente (tapada por el topbar) + rediseño moderno de la vista de Calendario

Work Log:
- Ficha de cliente: el overlay estaba en pt-8/pt-12 (32/48px) y el topbar mide 64px → quedaba medio oculta. Ahora pt-20 (móvil) / pt-24 (escritorio) con max-h recalculada (100dvh-6.5rem / -7.5rem); la ficha aparece íntegra bajo el topbar en ambos tamaños.
- Rediseño de month-calendar-view.tsx (misma funcionalidad completa):
  * Héroe del mes con degradado pine→golddeep, círculos decorativos, marca de agua de calendario y navegación glass (‹ Hoy ›).
  * KPIs con iconos en círculos de color: citas activas, completadas (con barra de progreso completadas/activas) e ingresos del mes (formato € sin céntimos para que no se trunque). En móvil se apilan icono+valor y la etiqueta ocupa el ancho completo.
  * Cuadrícula mensual: hoy con círculo degradado pine→golddeep, día seleccionado con fondo menta y anillo, fines de semana con tinte suave, días cerrados/festivos con fondo rojo suave y etiqueta (icono en móvil, texto en escritorio), badge contador con estilo según hoy/selección, puntos de estado alineados con los colores de STATUS_META (antes usaban otra paleta), fundido anim-fade al cambiar de mes (key año-mes).
  * Panel del día: cabecera con chips (total € del día, nº de citas, aviso Cerrado/Festivo), tarjetas de cita enriquecidas con barra de color del servicio, bloque de hora+duración, avatar del cliente, badge «Facturada», servicio·teléfono, notas en cursiva, StatusPill y precio (tachados si cancelada); acciones «Abrir agenda del día» y «Nueva cita este día» (deshabilitado en días cerrados) conservadas.
- Corregidos en pruebas: error de tipos fmtMonth(fromKey(...)) → fmtMonth(clave); desbordes de KPI en móvil reestructurando el componente Kpi.
- Pruebas browser headless (0 errores de consola): escritorio 1440px (héroe, KPIs 264 €/7 activas/3 completadas, rejilla con domingos CERRADO, hoy 28 seleccionado con 3 citas y total 142 €, tarjetas con avatar y badge Facturada, navegación a octubre recalcula KPIs), móvil 390px (KPIs legibles, rejilla compacta, ficha bajo el topbar).
- tsc y eslint limpios. Capturas: calendario-redesign-desktop.png, calendario-redesign-panel.png, calendario-redesign-octubre.png, calendario-movil-final.png, ficha-posicion-desktop.png, ficha-posicion-movil.png.

Stage Summary:
- La ficha de cliente ya no queda tapada por el topbar y la vista de Calendario estrena diseño moderno (héroe, KPIs con progreso, rejilla premium y panel del día enriquecido) conservando el 100% de sus funciones.
- Pendiente: push a GitHub cuando haya token nuevo.

---
Task ID: 13
Agent: Super Z (principal)
Task: Rediseño premium de la vista de Agenda sin perder funcionalidades (cuidando las fichas de citas cortas)

Work Log:
- Rediseño completo de src/views/agenda-view.tsx alineado con el lenguaje visual de Clientes y Calendario:
  * Héroe del día: degradado pine→pine2→golddeep con círculos decorativos, marca de agua de calendario, chip HOY / botón glass «volver a hoy» y 3 KPIs en cristal (citas activas, estimado €, ocupación con mini-barra; ocupación/cifras movidas del panel lateral al héroe, visibles también en móvil).
  * Franja semanal premium: día seleccionado con degradado, hoy con tinte menta, días cerrados con sello (icono en móvil, texto en escritorio), contadores de citas.
  * Toolbar con toggle Agenda/Lista segmentado con degradado y botón «Nueva cita».
  * Timeline: tarjetas con degradado del color del servicio y borde 3px; fichas altas (>60 min) con avatar del cliente y precio en la línea de servicio; línea de «ahora» y estado vacío rediseñados; gutter con degradado sutil.
  * Modo Lista: tarjetas redondeadas con avatar (escritorio), hora en color del servicio y todas las acciones conservadas.
  * Panel lateral: «Lo que viene» con avatares y chips «en X min» + tarjeta NUEVA «Estado del día» (recuento y % por estado con barras) + CTA.
- Cuidado con las citas cortas (≤60 min), la línea compacta conserva su lógica de alturas (PXH 64, mínimo 22px, umbrales h≥52/h≥78 intactos) y se mejoro la robustez:
  * El nombre ahora tiene prioridad (flex-1): en móvil ya no desaparece (antes se comprimía a 0 y solo se veía teléfono y estado).
  * Teléfono reducido a icono en móvil (<640px) y servicio oculto en pantallas estrechas (visible ≥sm con tope 38%); título tooltip conserva todos los datos.
  * Chips «Facturada»/«Facturar» de fichas altas pasan a solo icono en móvil para no cortarse.
  * Modo Lista en móvil con flex-wrap (min-w 150px en el contenido) para que nombre y acciones no se pisen.
- Pruebas browser headless (0 errores de consola tras recarga): escritorio 1440px (héroe con KPIs 3 activas/142 €/34%, tarjetas compactas de 45-60 min y alta de 120 min con avatar y precio), creación y eliminación de cita de prueba de 40 min a las 15:30 (ficha compacta correcta, KPIs y franja semanal actualizándose en vivo), modo Lista, navegación de semanas, «volver a hoy», regreso Calendario→«Abrir agenda del día», modo oscuro y móvil 390px sin desbordes (nombre siempre visible).
- tsc y eslint limpios. Capturas: agenda-redesign-desktop.png, agenda-redesign-lista.png, agenda-cita-corta-40min.png, agenda-redesign-movil2.png, agenda-movil-lista2.png, agenda-modo-oscuro.png, agenda-redesign-final.png.

Stage Summary:
- La vista de Agenda estrena diseño premium (héroe con KPIs del día, tarjetas con degradados y avatares, estado del día por barras) conservando el 100% de las funciones, y las fichas de citas cortas ahora se leen mejor que antes en móvil (nombre prioritario, teléfono como icono).
- Pendiente: push a GitHub cuando haya token nuevo.

---
Task ID: 14
Agent: Super Z (principal)
Task: Unificar las tarjetas de citas (agenda + calendario) y permitir 2 citas simultáneas por franja

Work Log:
- Petición: tarjetas de cita distintas en agenda y calendario; pequeñas sin datos, grandes con texto enorme; panel del calendario amontonado y con tarjetas vacías; añadir la posibilidad de dos citas por franja horaria.
- NUEVO src/components/appt-card.tsx: tarjeta de cita UNIFICADA con anatomía constante en agenda (timeline y lista) y calendario:
  * Fila A: chip con hora + duración del tratamiento (fondo paper/85, borde y texto del color del servicio con color-mix para contraste en tema noche) · avatar · nombre · precio · estado.
  * Fila B: servicio · teléfono (tel:) · precio (compacto/móvil) · botón € facturar o badge Facturada.
  * Fila C: notas solo cuando sobra espacio.
  * Densidades por altura (densityForHeight): nano <34px (1 línea), compact 34-51px (2 líneas), full ≥52px; densidad row (auto) para lista y calendario. Los tamaños de fuente NO cambian entre densidades: las tarjetas grandes ya no agrandan el texto y las cortas no pierden el chip ni el nombre.
  * Responsive: en móvil el estado pasa a punto de color (pill en sm+), el precio baja a la fila B, el avatar se oculta y la duración se abrevia («45m») para que el nombre SIEMPRE sea visible incluso a media anchura con 2 columnas.
- agenda-view.tsx: Timeline y DayList reescritos sobre ApptCard; PXH 64→80 (citas de 30 min con sitio real a 2 líneas, citas de 15 min con mínimo 20px sin pisarse); elimina StatusChip local y todo el markup duplicado; el modo Lista conserva TODAS las acciones (facturar, completar, cancelar, reabrir, editar, eliminar) dentro de la tarjeta.
- month-calendar-view.tsx: DayApptCard sustituida por ApptCard (density row) en rejilla md:grid-cols-2 — desaparece el hueco vacío de las tarjetas y el amontonamiento; añade botón € de facturación rápida desde el calendario.
- appointment-modal.tsx: antes se bloqueaba CUALQUIER solape; ahora se permite hasta MAX_SIMULTANEOUS_APPTS = 2 (types.ts) mediante peakConcurrency() (instantes de corte del solape); aviso en vivo ámbar «Cita simultánea: se reservará junto a X (rango). Máximo 2…» y rojo «Franja completa…» cuando ya hay 2; error explicativo al intentar la 3.ª.
- Contraste tema noche: teléfono text-pine (casi negro en noche) → text-moss; texto del chip con color-mix(col, ink) legible en ambos temas.
- Pruebas browser headless (0 errores de consola): escritorio 1440 con las 4 densidades visibles (15/30/45/60/120 min); 2 citas simultáneas 16:00 lado a lado (Isabel + Paula); 3.ª cita bloqueada con aviso rojo y error al guardar; aviso ámbar de simultaneidad en el modal; modo Lista con acciones; calendario escritorio (2 columnas) y móvil 390px (1 columna, nombres completos); modo oscuro legible; facturar desde tarjeta abre el modal (bloqueo por stock conservado); citas de prueba eliminadas → día restaurado (3 citas, 142 €).
- tsc y eslint limpios. Capturas: t13-agenda-desktop.png, t13-dos-simultaneas.png, t13-cita-15min.png, t13-calendario-panel.png, t13-movil-agenda3.png, t13-movil-calendario.png, t13-lista-desktop.png, t13-oscuro-v2.png, t13-calendario-unificado.png.

Stage Summary:
- Un solo diseño de tarjeta de cita en toda la app (agenda timeline, lista y calendario) con el chip de hora+duración como identidad: compacto, legible y sin datos que desaparecen en móvil.
- Hasta 2 citas simultáneas por franja horaria con avisos claros en el modal; la agenda las muestra en columnas paralelas.
- Pendiente: push a GitHub cuando haya token nuevo (revocar los anteriores).

---
Task ID: 20-consult
Agent: Super Z (principal)
Task: Consulta del usuario sobre almacenamiento (IndexedDB vs BD local) y app instalable

Work Log:
- SANDBOX REINICIADO: el worklog solo llega al Task 14 y ha perdido las entradas 15-19-b; carpetas desktop/ y download/ ya no contienen los instaladores v1.0.0 ni los ZIP (el usuario conserva los suyos). La raíz conserva LEEME-ACTUALIZACIONES.md, LEEME-INSTALACION-LINUX.txt, instalar-peluqueria.sh y activar-actualizaciones.sh. Para reempaquetar habrá que reconstruir desktop/ desde cero.
- Revisado src/lib/indexeddb.ts: saveDB() escribe TODO el objeto DB en IndexedDB (salon-aura-db/state/main) + espejo JSON en localStorage (salon-aura-db-v1, ~5 MB máx, fallo silencioso «sin espacio»). loadDB() con migración localStorage→IndexedDB→seed.
- Revisado src/lib/sqlite-export.ts: exportToSQLiteBlob() genera .sqlite REAL (tablas clients/services/appointments/invoices/consents/salon/products/product_categories/movements) desde el estado en memoria; importFromSQLiteBlob() lee de vuelta con tolerancia a copias antiguas.
- Ajustes muestra el tamaño con dbSizeKB (settings-view.tsx línea 1395).
- Respondida la consulta: exportación válida, cuota IndexedDB = gigas, punto débil = espejo localStorage; propuesta: quitar espejo + .sqlite en disco para escritorio + reempaquetado 1.1.0 con Excel de clientes.

---
Task ID: 20-limpieza
Agent: Super Z (principal)
Task: Limpiar el proyecto (eliminar imágenes y artefactos de prueba)

Work Log:
- Eliminados 61 artefactos de prueba de download/ (60 capturas PNG, almacen-test-import.xlsx, ticket-ejemplo.pdf); queda solo el README del panel.
- Eliminados scripts/test-import-xlsx.js y scripts/test-ticket-pdf.ts (tests puntuales ya validados) y vaciado tool-results/.
- upload/ y public/ revisados: limpios (solo iconos/manifest/sw de la app).
- bun install (node_modules faltaba tras el reinicio del sandbox) y servidor relanzado → HTTP 200.
- Commit local 490fd7b.

Stage Summary:
- Proyecto limpio: sin capturas ni artefactos de prueba; download/ vacío listo para los entregables del 1.1.0. App operativa.

---
Task ID: 21
Agent: Super Z (principal)
Task: Verifactu (VERI*FACTU) completo con dos proveedores + reempaquetado 1.1.0 (.exe y .deb)

Work Log:
- SANDBOX REINICIADO de nuevo: worklog perdido tras Task 20-limpieza, pero desktop/ sobrevivió en un auto-commit del sandbox (v1.1.0 pre-Verifactu con puente de BD en disco ya montado). clients-xlsx (import/export Excel de clientes) ya estaba hecho.
- Estudiada la API de verifacti.com (docs → endpoints /verifactu/create, /health, /status): auth Bearer, fecha dd-mm-aaaa, respuesta con qr (PNG base64), uuid, url, huella.
- Estudiada la API de verifacturapi.com a petición del usuario (más barata: 0 €/50 facturas al mes, luego 9,99 €/mes por CIF): OpenAPI en verifacturapi.com/openapi.yaml, base real https://api.verifacturapi.com/api/v1 (el spec decía http://verifacturapi.com y da 404; el host correcto se confirmó probando: Bearer + Accept JSON, 401 "Unauthenticated" con clave falsa). F2 = omitir bloque customer; items con quantity/unit_price/tax_rate/aeat_code/regime_key; IVA 0 → exemption "E1" SIN tax_rate ni S1 (lo avisan expresamente); su demo muestra factura.qr. unit_price se envía CON IVA incluido (precios del salón); si el proveedor esperara precio sin IVA es un cambio de 1 línea en buildVerifacturapiPayload.
- Implementación en la app (multi-proveedor, selector en Ajustes):
  * types.ts: VerifactuConfig {activo, apiKey, proveedor: verifacti|verifacturapi, tipoIva, nifEmisor?, entorno?}; VerifactuRecord {uuid, estado, url, qr, huella, enviadoEn, tipoFactura, error?}; Invoice.verifactu?; SalonInfo.verifactu?; normalizeVerifactu (por defecto verifacti para bases antiguas).
  * src/lib/verifactu.ts: payload verifacti (línea agregada, base/cuota como string, incidencia S en facturas de días anteriores) y payload verifacturapi (unit_price con IVA incluido, external_reference); mapeo defensivo de respuestas (qr como base64/dataURI/URL).
  * src/app/api/verifactu/route.ts (NUEVO): proxy servidor → proveedores (sin CORS, igual en PWA y escritorio), normaliza health/create/estado a forma interna y descarga el QR si el proveedor devuelve URL de imagen; errores traducidos a mensajes claros en español (401, 400, 409/422 idempotencia, 429, 500).
  * store.tsx: invoiceAppointment acepta verifactu; nueva acción attachVerifactu (registro + PDF regenerado).
  * invoice-modal.tsx: al emitir, envía a Verifactu ANTES de generar el PDF (el QR queda impreso); si falla, la factura se emite igual con toast de error y se puede reintentar desde Facturación.
  * invoice-pdf.ts: bloque QR VERI*FACTU en el ticket 80 mm (QR 44pt + rótulo + huella); QR corrupto no rompe el PDF.
  * invoices-view.tsx: insignia de estado Verifactu en el listado; detalle con QR, estado, huella, enlace «Verificar en la AEAT», botones Registrar/Reintentar y Consultar estado.
  * settings-view.tsx: sección «Facturación Verifactu» con selector de proveedor (verifacturapi: plan gratuito destacado; verifacti), API key con mostrar/ocultar, IVA (21/10/4/0), Probar conexión (muestra NIF/entorno si el proveedor lo da), interruptor de registro automático. SalonSection conserva siempre la config Verifactu viva.
- Persistencia: columnas verifactu TEXT en invoices y salon en sqlite-export.ts Y desktop/db.js (esquemas gemelos), con tolerancia a copias antiguas. scripts/test-desktop-db.js ampliado (round-trip con verifactu + tolerancia) → TODO CORRECTO.
- Fix colateral: hidratación del reloj de la cabecera (page.tsx) — ahora se monta en el cliente; consola sin avisos.
- Verificación: tsc 0 errores (fuera de skills/), eslint limpio, test unitario test-verifactu.ts TODO CORRECTO (payloads de ambos proveedores, exención E1, mapeo de respuestas, PDF con QR, QR corrupto). Proxy probado en vivo contra AMBAS APIs reales (401 con clave falsa → mensajes amables). Navegador: sección Ajustes, selector de proveedor, flujo completo de facturación con clave falsa (factura emitida + cita Completada aunque Verifactu falle), mock de éxito (QR visible, estado Pendiente→Registrada persistente tras recarga).
- Empaquetado 1.1.0: bun run build + app-server reensamblado (77 MB). deb regenerado (89 MB). El .exe requería wine (no disponible, sin sudo) → instalador NSIS propio (desktop/installer.nsi) compilado con el makensis nativo de Linux de la caché de electron-builder: actualización in situ (ejecuta el desinstalador de la v1.0.0 en silencio conservando datos), accesos directos, desinstalador, arranque al terminar (103 MB). desktop/package.json: solo targets nsis+deb (AppImage retirado), versión 1.1.0; main.js permite popups OAuth de Google dentro de la app (Drive en escritorio).
- Entrega en download/: PeluqueriaMarisa-1.1.0-instalador-windows.zip y peluqueria-marisa-1.1.0-instalador-linux.zip (zip -0, verificados con unzip -t) + LEEME-INSTALACION-1.1.0.txt + LEEME-VERIFACTU.txt. Versión raíz subida a 1.1.0.
- PENDIENTES: el .exe y el .deb 1.1.0 deben probarse en Windows/Linux reales (el .exe compila con NSIS propio en vez de electron-builder: primera versión con este método); unit_price con IVA incluido en verifacturapi por confirmar con su primer envío real; push a GitHub cuando haya token nuevo.

Stage Summary:
- VERI*FACTU de extremo a extremo con el proveedor que elija el salón (solo pega su API key): envío automático al facturar, QR de la AEAT impreso en el ticket, reintentos y consulta de estado. Base de datos .sqlite viva en el PC con respaldos. Entregados instaladores .exe y .deb v1.1.0 con LEEME de instalación y de Verifactu.
