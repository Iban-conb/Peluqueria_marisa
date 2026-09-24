# Actualizaciones remotas (PC del cliente)

Con este sistema, cuando subes una nueva versión a GitHub, al cliente le aparece
un icono **«Actualizar»** con un punto rojo en la barra superior de la aplicación.
Al pulsarlo, su PC descarga la nueva versión desde GitHub, se recompila y se
reinicia solo. Los datos de las clientas no se tocan (se guardan en el navegador).

## Qué necesitas tú (el que publica los cambios)

1. Subir cada versión al repositorio **en la rama `main`** de GitHub:
   ```bash
   git add .
   git commit -m "Versión 0.2.2: nuevos cambios"
   git push origin main
   ```
2. Que el repositorio sea **público** (lo más simple) o privado con credenciales
   configuradas en el PC del cliente (`git config credential.helper store` o token PAT).

## Qué necesitas hacer una sola vez en el PC del cliente

1. Instalar la aplicación normalmente con `instalar-peluqueria.sh`.
2. Copiar `activar-actualizaciones.sh` dentro de la carpeta instalada
   (`~/.local/share/peluqueria`) y ejecutarlo con la URL del repositorio:
   ```bash
   cd ~/.local/share/peluqueria
   bash activar-actualizaciones.sh https://github.com/tuusuario/peluqueria-marisa.git
   ```
   Esto:
   - convierte la carpeta instalada en una copia de GitHub (rama `main`),
   - crea un servicio de usuario `peluqueria.service` (systemd) que mantiene la
     app abierta y **la relanza automáticamente tras cada actualización**,
   - define las variables `NEXT_PUBLIC_UPDATE_REPO_URL` (activa el icono de
     actualización) y `PELUQUERIA_APP_DIR`.

A partir de ahí no hay que tocar nada más: la app comprueba si hay versión nueva
al abrirla y cada 10 minutos.

## Flujo de una actualización

1. Publicas cambios → push a `main` en GitHub.
2. En el PC del cliente aparece el icono ámbar «Actualizar» (punto rojo pulsante).
3. El cliente pulsa → confirma el aviso → la app hace:
   `git fetch + reset --hard origin/main` → instala dependencias (solo si
   cambiaron) → `npm/bun run build` → se reinicia sola con la nueva versión.
4. El navegador del cliente recarga automáticamente la interfaz nueva.

Mientras se actualiza se muestra «Actualizando…» y el progreso queda registrado
en `~/.local/share/peluqueria/update.log`.

## Cómo desactivarlo

Basta con quitar la variable `NEXT_PUBLIC_UPDATE_REPO_URL` del servicio
(`~/.config/systemd/user/peluqueria.service`) y ejecutar
`systemctl --user daemon-reload && systemctl --user restart peluqueria`.
Sin esa variable el icono nunca aparece y la app funciona igual que antes.

## Notas técnicas

- Endpoint: `GET /api/update` (estado y detección de nueva versión),
  `POST /api/update` (lanzar la actualización).
- La detección compara el commit local con `origin/main` tras un `git fetch`.
- Recomendado para instalaciones Linux locales (las que usa este proyecto);
  no aplica a la versión publicada en GitHub Pages (`pwa/`).
