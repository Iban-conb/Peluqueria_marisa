---
Task ID: salon-aura-calendar-redesign
Agent: main
Task: Reordenar top bar a Agenda/Calendario/Clientes/Ajustes y rediseñar vista Calendario siguiendo las capturas del usuario.

Work Log:
- Analizadas las 2 capturas del usuario con VLM (z-ai vision)
- Diseño objetivo identificado: header verde pine con logo dorado y pestañas tipo pill, cuadrícula mensual con dots de estado + badge contador, KPIs arriba, panel inferior "DÍA SELECCIONADO" con tarjetas verticales de cada cita
- Reordenado src/app/page.tsx: TABS ahora es [Agenda, Calendario, Clientes, Ajustes] (antes era Calendario primero)
- Tab inicial por defecto cambia a "agenda" (la más usada en día a día)
- Reescrito por completo src/views/month-calendar-view.tsx:
  - Cabecera: nombre del mes en grande + subtítulo "CALENDARIO COMPLETO" + navegación (Mes anterior / Hoy / Mes siguiente) en un pill contenedor
  - KPIs: 3 tarjetas con Citas activas, Completadas e Ingresos del mes (este último destacado en dorado golddeep)
  - Cuadrícula mensual 7x6:
    - Cada día tiene: número (hoy en círculo dorado), badge contador arriba derecha (nº citas), dots de estado abajo (1 dot por cita, hasta 6 visibles + "+N")
    - Dots de colores según STATUS_META: pendiente=#D97706, confirmada=#059669, completada=#374151, cancelada=#DB2777
    - Día seleccionado: borde verde moss + fondo mint claro + ring inset
    - Días cerrados: fondo atenuado, número tachado, etiqueta "CERRADO"
    - Festivos: etiqueta "FESTIVO" roja
    - Días fuera del mes: opacity-50
  - Leyenda inferior con dots coloreados + etiquetas (Pendiente / Confirmada / Completada / Cancelada)
  - Panel "DÍA SELECCIONADO":
    - Cabecera con etiqueta uppercase + fecha larga ("Sábado, 22 de Agosto")
    - Badge con número de citas
    - Lista de tarjetas verticales por cita: franja lateral de color del servicio, rango horario, StatusPill, nombre, servicio · precio, notas en cursiva
    - Estado vacío amigable: icono sparkle dorado + mensaje
  - Botones de acción: "Abrir agenda del día" (primario pine) y "+ Nueva cita este día" (secundario con borde dashed, deshabilitado si el día está cerrado)
- ESLint: 0 errores, 0 warnings
- Verificación con Agent Browser:
  - Top bar muestra "Agenda / Calendario / Clientes / Ajustes" en el orden correcto
  - Tab Agenda activa por defecto al cargar
  - Vista Calendario carga con: cabecera "Agosto de 2026" + "CALENDARIO COMPLETO"
  - KPIs: "8 CITAS ACTIVAS" / "2 COMPLETADAS" / "286 € INGRESOS DEL MES" (en dorado)
  - Cuadrícula muestra todos los días con: número, badge contador, dots de estado, etiquetas CERRADO/FESTIVO
  - Día 25 seleccionable, al pulsarlo el panel inferior se actualiza a "Martes, 25 de Agosto - 1 CITA - Elena Vidal Prats - Corte y peinado · 22 € - Confirmada"
  - Botón "Abrir agenda del día" abre el modal con fecha preseleccionada 2026-08-25
  - Botón "+ Nueva cita este día" también abre el modal con la fecha correcta
  - Sin errores en consola

Stage Summary:
- Top bar reordenado: Agenda / Calendario / Clientes / Ajustes
- Calendario rediseñado según capturas del usuario: KPIs + cuadrícula con dots + panel día seleccionado
- Sistema de dots de estado en cada celda (hasta 6) + badge contador
- Panel inferior muestra las citas del día seleccionado con tarjetas verticales estilo Aura
- Botones de acción: abrir agenda del día + nueva cita (este último respeta días cerrados)
- Capturas: download/0[1-3]-*.png

---
Task ID: salon-aura-email-rgpd-consent
Agent: main
Task: Añadir correo electrónico a los datos de cliente + apartado de consentimiento informado RGPD con firma táctil y PDF guardado en base de datos.

Work Log:
- Extraído el workspace subido (tar) y restaurado el proyecto Salón Aura (Next.js 16, local-first con IndexedDB) en la raíz del entorno
- Inicializado entorno fullstack + instalada dependencia pdf-lib 1.17.1 (generación de PDF en cliente)
- Email del cliente:
  - types.ts: Client.email + tipo Consent (id, clientId, signedAt, textVersion, marketing, clientName, pdfBase64) + DB.consents + CONSENT_TEXT_VERSION
  - indexeddb.ts: migración normalize() para clientes antiguos sin email y DBs sin consents; seeds con email; freshDB/seedDB con consents:[]
  - client-modal.tsx: campo "Correo electrónico" con validación de formato
  - clients-view.tsx: email en ficha con enlace mailto, incluido en el buscador
- Consentimiento RGPD:
  - lib/consent-pdf.ts (nuevo): 7 cláusulas RGPD/LOPDGDD (responsable, finalidad, legitimación, destinatarios, conservación, derechos ARSOPL+AEPD, procedencia), generador PDF A4 con pdf-lib: cabecera marca Salón Aura, datos del cliente, cláusulas con wrapText, aceptaciones con casillas, firma PNG embebida (recortada al bounding box), paginación automática; helpers bytesToBase64/base64ToBytes/consentToObjectUrl; sanitización WinAnsi para acentos
  - components/signature-pad.tsx (nuevo): canvas con Pointer Events + setPointerCapture + touch-action:none (firma con dedo en móvil sin scroll), HiDPI, botón borrar, export PNG recortado
  - components/consent-modal.tsx (nuevo): aviso "entrega el teléfono al cliente", texto legal scrollable, checkbox obligatorio + opcional marketing, firma, botón "Firmar y guardar" (deshabilitado hasta casilla+firma), spinner durante generación
  - components/consent-viewer.tsx (nuevo): visor modal con iframe blob URL + descarga con nombre de archivo legible
  - clients-view.tsx: sección "PROTECCIÓN DE DATOS (RGPD)" con badge Firmado/Pendiente, historial de consentimientos (badge "vigente" en el más reciente), botones ver/descargar/eliminar por consentimiento, "Nueva firma / renovar"
  - store.tsx: addConsent/deleteConsent/consentsOf + borrado en cascada al eliminar cliente
- Backups y sync:
  - sqlite-export.ts: columna email en clients (+índice), tabla consents con PDF como BLOB; import tolerante con archivos antiguos (sin email/consents)
  - settings-view.tsx: import JSON/SQLite restauran consents (parseConsents con validación), dbVersion incluye nº de consentimientos (dispara auto-push a Drive), mensajes de borrado actualizados
  - use-drive-sync.ts: pull() restaura consents
- Fix de un bug propio durante pruebas (drawText con orden de parámetros inconsistente: pasaba y donde iba el size -> font numérico), detectado vía consola del navegador y corregido
- Fix de errores TS preexistentes (settings {}, BlobPart, window.google narrowing)
- Iconos nuevos: IcMail, IcShieldCheck, IcFileText, IcPenNib
- Verificación con Agent Browser (desktop 1280x800 + iPhone 14):
  - Ficha de cliente muestra email con mailto; búsqueda por email filtra
  - Modal nuevo/editar cliente con email + validación ("El correo electrónico no parece válido")
  - Flujo completo de firma: abrir modal -> marcar casillas -> dibujar firma (PointerEvents táctiles) -> "Firmar y guardar" -> PDF generado y guardado
  - PDF válido (%PDF-1.7, 2 páginas, 9KB): cabecera Salón Aura, datos del cliente, cláusulas, aceptaciones, firma embebida; verificado analizando streams del PDF y visualmente con VLM
  - Visor PDF embebido funciona (iframe + thumbnails) + botón descarga
  - Historial: segunda firma con "Nueva firma / renovar" -> 2 consentimientos con badge vigente; eliminar con confirmación
  - Persistencia: recarga mantiene consentimientos (IndexedDB + mirror localStorage verificado)
  - Roundtrip SQLite: export -> tabla consents con BLOB de 9099 bytes y emails correctos; reimportación -> "SQLite importado: 9 clientes, 9 citas y 1 consentimientos" y PDF importado visible en visor
  - 0 errores de consola/página; ESLint 0/0; tsc 0 errores en src/
- Capturas en download/: cliente-detalle-rgpd.png, rgpd-firmado.png, visor-pdf-consentimiento.png, movil-ficha-rgpd.png, movil-modal-firma.png, movil-rgpd-historial.png, consentimiento-maria.pdf (muestra)

Stage Summary:
- Clientes: nuevo campo correo electrónico (validado, buscable, con mailto) con migración automática de datos antiguos
- RGPD: apartado completo de consentimiento informado por cliente; texto legal RGPD/LOPDGDD; firma manuscrita con la pantalla táctil del teléfono (Pointer Events, sin scroll accidental); PDF A4 firmado generado con pdf-lib y guardado en la base de datos (IndexedDB); visor y descarga; historial con re-firma y borrado con confirmación
- Los consentimientos viajan en todas las rutas de backup/sync: JSON, SQLite (BLOB) y Google Drive

---
Task ID: salon-marisa-datos-salon-pdf-1pag-barberpole
Agent: main
Task: Rebranding a Peluquería Marisa: apartado "Datos del salón" en Ajustes (datos fiscales reales usados en la app y en los textos legales), PDF del consentimiento en UNA sola página, e icono de poste de peluquero 💈 en el diseño.

Work Log:
- Datos del salón:
  - types.ts: SalonInfo (name, fiscalName, nif, phone, email, street, zip, city), DEFAULT_SALON (Peluquería Marisa), normalizeSalon(), salonAddress(), DB.salon, CONSENT_TEXT_VERSION=2
  - indexeddb.ts: salon en freshDB/seedDB/normalize (migración de bases antiguas)
  - store.tsx: setSalon(patch)
  - settings-view.tsx: nueva sección "Datos del salón" (primera de Ajustes) con nombre comercial/fiscal, NIF/CIF, teléfono, email, dirección, CP y ciudad; validación + botón Guardar datos; toast de confirmación
  - page.tsx: cabecera y pie usan db.salon.name (título de la pestaña del navegador dinámico vía useEffect)
  - layout.tsx + manifest.webmanifest + icon-aura.svg: rebranding estático a "Peluquería Marisa" + icono PWA rediseñado con poste de peluquero
- PDF en una página:
  - consent-pdf.ts reescrito: layout compacto A4 (margen 40, cláusulas a 7.7pt con leading 9.6, datos del cliente en 2 columnas, casillas de verificación dibujadas, bloque de firma de 62pt) diseñado para caber íntegro en UNA página, con salvaguarda que fija el bloque de firma sobre el pie si el contenido creciera
  - Cabecera del PDF con poste de peluquero dibujado en vector (bola dorada + cuerpo blanco + 3 franjas diagonales roja/azul/roja) + nombre del salón + línea fiscal completa (razón social · NIF/CIF · dirección · tel · email)
  - Cláusulas dinámicas: getConsentClauses(salon) — cláusulas 1 (responsable) y 6 (derechos) con datos fiscales reales; aceptación y pie personalizados
  - consent-modal.tsx: cláusulas y casilla de aceptación con el nombre real del salón
- Icono 💈:
  - icons.tsx: IcBarberPole (SVG con clipPath + useId, franjas rojas/azules sobre poste blanco y bola superior) — usado en cabecera de la app, sección de Ajustes y PWA; versión vectorial en el PDF
- Backups/sync:
  - sqlite-export.ts: tabla salon (1 fila) en export; import la lee si existe (compatible con archivos antiguos)
  - use-drive-sync.ts pull y settings-view imports: restauran salon del SQLite o conservan el local; JSON backup lo incluye vía normalizeSalon
- Fix TS: checkbox inline en buildConsentPdf (tipado PDFPage), import SalonInfo en indexeddb
- Verificación con Agent Browser (desktop + iPhone 14) + pypdf + VLM:
  - Cabecera muestra "Peluquería Marisa" con poste de peluquero (confirmado por VLM); título de pestaña dinámico
  - Sección "Datos del salón": rellenada con datos de prueba (Marisa López García, NIF 12345678Z, Calle Real 24, 41001 Sevilla, tel y email) → guardado + persistencia en localStorage/IndexedDB verificada
  - Modal de consentimiento: cláusulas con NIF y domicilio real; casilla "por Peluquería Marisa"
  - PDF generado: pypdf confirma 1 página exacta con TODO el contenido (cabecera con pole+nombre+línea fiscal, 7 cláusulas, aceptaciones, firma manuscrita al final, lugar/fecha, NIF, pie v2); VLM confirma "1/1" en el visor, pole visible, sin superposiciones
  - Export SQLite: tabla salon con todos los datos + consentimiento PDF de 9129 bytes (1 página)
  - 0 errores de consola/página; ESLint 0/0; tsc 0 errores en src/
- Capturas en download/: marisia-cabecera.png, ajustes-datos-salon.png, pdf-consentimiento-1pagina.png, consentimiento-marisa-1pag.pdf, movil-cabecera-marisa.png, movil-ajustes-salon.png

Stage Summary:
- Ajustes → "Datos del salón": nombre comercial (cabecera de la app, título del navegador, PWA) y datos fiscales reales que alimentan las cláusulas RGPD y el PDF del consentimiento
- PDF del consentimiento rediseñado: TODO en una sola página A4 (antes la firma saltaba a la segunda hoja) con cabecera corporativa (poste + nombre + línea fiscal), cláusulas compactas, aceptaciones con casillas y firma al pie
- Icono distintivo 💈 (poste de peluquero con franjas rojas/azules) integrado en: cabecera de la app, sección de Ajustes, cabecera del PDF y icono de la PWA
- Los datos del salón viajan en JSON, SQLite (nueva tabla salon) y sincronización con Drive

---
Task ID: salon-marisa-rosa-calendario-laboral-movil
Agent: main
Task: Tema rosa por defecto + icono PWA rosa + tema noche negro-rosa + reordenar Ajustes + calendario laboral (importar festivos de PDF / exportar calendario PDF formato oficial) + mejorar vista PWA móvil.

Work Log:
- Análisis del PDF adjunto (calendario-laboral-portrait-Ibi-2026.pdf) con PyMuPDF: 12 meses en 3x4, cabeceras de mes en barra roja, festivos con casilla completa en rojo/verde/azul y número blanco; 14 festivos
- Tema rosa por defecto:
  - globals.css: @theme y :root con la paleta rosa (antes aura/verde); .theme-aura pasa a ser clase alternativa
  - theme.tsx: default "rosa" en readStoredTheme/Provider/initScript; THEMES reordenado (Rosa primero) y Noche reetiquetada "Negro y rosa"
- Icono PWA rosa: icon-aura.svg con fondo #8C4A64, contorno y destellos rosa; manifest theme_color #8c4a64 y background #faf3f1; viewport themeColor en layout.tsx
- Tema Noche negro-rosa: paleta reescrita (paper #0d0a0c, header negro #191317 con matiz rosa, acentos rosa #d98aa6, texto #f2dce3, overlays rosados)
- Orden de Ajustes: Apariencia → Datos del salón → Horario → Servicios → Calendario laboral (nuevo) → Drive → Datos locales
- Calendario laboral:
  - lib/calendar-pdf.ts (nuevo):
    - importHolidaysFromPdf(): pdf.js 3.11.174 desde CDN (carga diferida), extrae textos con posiciones, detecta año, localiza las 12 cabeceras de mes, clustering de columnas/filas por huecos, fila asignada por cabecera más cercana POR ENCIMA (coords PDF), render de la página a canvas y muestreo de un anillo de píxeles alrededor de cada número de día: casilla saturada en color = festivo; validación de fecha real
    - exportCalendarPdf(): pdf-lib, A4 vertical con formato del calendario adjunto: título "Calendario {año}" + nombre y datos del salón, 12 meses en 3x4 con cabecera rosa (#8c4a64), cabeceras L M X J V S D, fines de semana sombreados, festivos con LA CASILLA COMPLETA en #b3364d y número blanco, leyenda inferior con muestras + listado de días marcados y pie con datos del salón
  - settings-view.tsx: sección "Calendario laboral" (tras Servicios): importar con spinner, modal de vista previa con chips por festivo (verde=ya existente, rojo=nuevo) y acciones Añadir/Reemplazar {año}/Cancelar; exportar con selector de año (años presentes + actual) y descarga calendario-laboral-{año}.pdf
- Vista PWA móvil mejorada (no requerir zoom):
  - globals.css: capa de legibilidad en <640px que sube los tamaños mínimos (text-[8..11.5px]→10-13px, text-xs→13.5px, text-sm→15px) + .calendar-daynum (círculo 28px, 14px)
  - month-calendar-view.tsx: clase calendar-daynum en el número del día; etiqueta Festivo/Cerrado convertida en icono compacto en móvil (IcBan/IcSparkle) para que no se corte, texto completo en escritorio
- Verificación con Agent Browser + VLM + pypdf:
  - Tema rosa por defecto aplicado al resetear localStorage (header rgb(140,74,100)); VLM confirma paleta rosa
  - Tema Noche: header negro #191317, acentos rosa #d98aa6, VLM confirma
  - Orden de secciones verificado: Apariencia → Datos del salón → Horario → Servicios → Calendario laboral → Drive → Base de datos → Instalación
  - IMPORT del PDF real de Ibi: detecta año 2026 y los 14 festivos EXACTOS (1/6 ene, 19 mar, 3/6 abr, 1 may, 24 jun, 15 ago, 11/14 sep, 9/12 oct, 8/25 dic); modal de preview correcto; "Añadir festivos" → 14 closedDates; "Reemplazar 2026" → sin duplicados
  - EXPORT del calendario: PDF 1 página con 12 meses 3x4, cabeceras rosa, festivos casilla completa roja con número blanco, fines de semana sombreados, leyenda con los 14 días listados (VLM confirma formato); descarga correcta
  - Vista Calendario de la app muestra los festivos importados (FESTIVO el 15 ago + domingos CERRADO)
  - Móvil (iPhone 14): fuentes verificadas por CSS (daynum 14px/28px, text-xs 13.5px); VLM confirma legibilidad sin zoom y etiquetas ya no se cortan; agenda móvil ok
  - 0 errores de página/consola (un error HMR transitorio durante la edición se resolvió solo); ESLint 0/0; tsc 0 errores en src/
- Capturas en download/: tema-rosa-default.png, tema-noche-negro-rosa.png, import-calendario-preview.png, calendario-exportado.png, calendario-festivos-importados.png, movil-calendario-final.png, movil-agenda-final.png, final-rosa-calendario.png

Stage Summary:
- Tema por defecto rosa; icono PWA con fondo rosa; tema Noche ahora negro con acentos rosa
- Ajustes reordenados: Apariencia / Datos del salón / Horario / Servicios / resto
- Calendario laboral completo: importación de festivos desde PDF oficial (detección de casillas coloreadas con pdf.js + análisis de píxeles, probada con el calendario real de Ibi 2026: 14/14 festivos) y exportación a PDF con el formato del calendario adjunto (12 meses 3x4, festivos con casilla completa en color, leyenda)
- PWA móvil legible sin zoom: capa global de tamaños mínimos + iconos compactos en el calendario
