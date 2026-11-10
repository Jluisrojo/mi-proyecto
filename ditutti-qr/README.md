# DiTutti · Página del QR

Página de una sola pantalla para quien escanea el QR de los carteles. Son 2 archivos y una carpeta:

- `index.html`: textos, enlaces y el pequeño script de configuración.
- `estilos.css`: colores, tipografías y diseño.
- `imagenes/`: logo, favicon, imagen para compartir (`og-ditutti.jpg`) y fotos.

Lo que falta por completar está en **[PENDIENTES.md](PENDIENTES.md)**.

## Cambiar textos
Abre `index.html` y busca el texto que quieras cambiar (ej. "Sí, te están"). Cámbialo entre las etiquetas, sin borrar los `<` `>`.
Las palabras "a mano" (en morado) están dentro de `<span class="mano">…</span>`.
Para el texto que aparece al compartir en WhatsApp/Facebook, cambia `og:title` y `og:description` en el `<head>`.

## Cambiar el número de WhatsApp (y Facebook)
Al final de `index.html` está esto:

```js
var CONFIG = {
  facebook: "",          // ej. "https://www.facebook.com/tu-pagina"
  whatsapp: "",          // 52 + 10 dígitos, ej. "52XXXXXXXXXX"
  mensajeWhatsapp: "Hola, vi su cartel y quiero más información"
};
```

Pega el dato entre las comillas y guarda. El botón aparece solo cuando el dato es válido; si lo dejas vacío, el botón se oculta.

## Cambiar colores
Al inicio de `estilos.css`, en el bloque `:root`, cambia los códigos (ej. `--morado: #5E3B7D;`). Toda la página se actualiza.
Si cambias el color de un botón, cuida que el texto blanco se lea bien (fondo oscuro).

## Cambiar o agregar imágenes
1. Convierte cada foto a WebP de máximo ~200 KB y 1200 px. Opciones:
   - Sin instalar nada: [squoosh.app](https://squoosh.app) → formato WebP, calidad ~75, ancho 1200.
   - Con ImageMagick: `magick foto.jpg -resize 1200x1200\> -quality 75 imagenes/foto-1.webp`
2. Guárdalas en `imagenes/` como `foto-1.webp`, `foto-2.webp`, `foto-3.webp`.
3. En `index.html`, busca el comentario `IMÁGENES`, borra las líneas `<!--` y `-->` que lo envuelven y escribe en cada `alt="…"` qué se ve en la foto (ej. "Mesa con velas y jabones artesanales").

Logo: reemplaza `imagenes/logo-ditutti.webp` (mismo nombre). Favicon: `favicon-48.png` y `apple-touch-icon.png`.

## Estadísticas de visitas
En el `<head>` hay un comentario `<!-- ANALÍTICA -->`: pega ahí el script que te dé tu servicio de estadísticas.

## Publicar con GitHub Pages
Repositorio → **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**. En 1–2 minutos queda en `https://TU-USUARIO.github.io/ditutti-qr/`.
