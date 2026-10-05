# Invitación digital · Yeiber & Gixy

Sitio estático de una sola página, sin backend ni dependencias de pago. Está listo para Vercel.

## Archivos

- `index.html`: secciones, textos, enlaces y estructura accesible.
- `style.css`: paleta, tipografías, diseño adaptable y animaciones suaves.
- `script.js`: cuenta regresiva con hora de Ecuador y aparición de secciones.

## Abrir localmente

Abre `index.html` en un navegador. Para una vista local más parecida a producción, puedes usar la extensión Live Server de Visual Studio Code. No hay instalación ni compilación.

## Publicar en Vercel

1. Crea un repositorio nuevo en GitHub y sube estos tres archivos a la raíz del repositorio.
2. Entra a [vercel.com](https://vercel.com), inicia sesión y elige **Add New… → Project**.
3. Importa el repositorio de GitHub que acabas de crear.
4. Vercel detectará el sitio estático. Deja **Framework Preset** en **Other**; no configures comando de build ni directorio de salida.
5. Pulsa **Deploy**. Al terminar, Vercel mostrará el enlace público. Cada cambio que subas a la rama principal volverá a desplegarse automáticamente.

No se necesita dominio, backend, tarjeta ni variable de entorno para publicar esta versión.

## Personalización

- Cambiar nombres, textos, fecha, lugar y enlaces: edita `index.html`.
- Cambiar la fecha del contador: edita `eventTime` en `script.js`. La fecha actual corresponde a 22 de noviembre de 2026 a las 4:00 PM en Ecuador (21:00 UTC).
- Cambiar colores: edita las variables de `:root` al inicio de `style.css`.
- Cambiar tipografías: actualiza el enlace de Google Fonts en `index.html` y las variables `--serif` / `--sans` en `style.css`.
- Añadir una imagen: coloca el archivo en esta carpeta y añade una etiqueta `<img>` en `index.html`; usa texto `alt` descriptivo.

Los botones de confirmación ya abren WhatsApp con los números de Ecuador y el mensaje solicitado. El mapa abre en una pestaña nueva.
