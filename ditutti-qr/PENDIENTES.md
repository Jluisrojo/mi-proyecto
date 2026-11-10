# Pendientes — página del QR de DiTutti

Mientras falte un enlace, su botón **no se muestra** (no hay botones rotos).

| # | Qué falta | Dónde se pega | Estado actual |
|---|-----------|---------------|---------------|
| 1 | Enlace de Facebook de DiTutti | `index.html` → `CONFIG.facebook` (en el `<script>` del final) | Botón oculto |
| 2 | Número de WhatsApp: 52 + 10 dígitos, sin espacios ni signos (ej. `52XXXXXXXXXX`) | `index.html` → `CONFIG.whatsapp` | Botón oculto. El mensaje "Hola, vi su cartel y quiero más información" ya está listo. |
| 3 | Enlace exacto de Google Maps | `index.html` → el enlace dentro de `<footer class="ubicacion">` | Por ahora es una **búsqueda** de "Plaza Santa Mónica Mundo E" |
| 4 | Fotos para la carpeta `imagenes/` | Ver README → "Cambiar o agregar imágenes" | No se recibieron fotos. La tira de fotos está lista pero comentada en `index.html` (va entre la lista y las redes) |
| 5 | Confirmar la URL final | `index.html` → `og:url` y `og:image` | Puse `https://jluisrojo.github.io/ditutti-qr/`. Si el repositorio queda en otra cuenta, hay que cambiarla |
| 6 | Códigos de color de la marca | `estilos.css` → bloque `:root` al inicio | Colores propuestos (crema, café, morado, rosa, amarillo, salvia) |

> Nota sobre el WhatsApp: en tu otro proyecto (página de talleres) aparece el número `525559416472`. No lo usé porque aquí lo marcaste como pendiente; si es el mismo, solo pégalo en `CONFIG.whatsapp`.
