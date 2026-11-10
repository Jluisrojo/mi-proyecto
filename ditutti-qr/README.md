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
  facebook: "https://www.facebook.com/share/19fk6n8yzA/",
  whatsapp: "525559416472",   // 52 + 10 dígitos, sin espacios
  mensajeWhatsapp: "Hola, vi su cartel y quiero más información"
};
```

Cambia el dato entre las comillas y guarda. Si dejas un dato vacío (`""`), su botón se oculta.

## Cambiar colores
Al inicio de `estilos.css`, en el bloque `:root`, cambia los códigos: `--blanco`, `--beige`, `--cafe` y `--morado` (ej. `--morado: #5A3E85;`). Toda la página se actualiza.
El botón de WhatsApp lleva texto blanco sobre `--morado`: usa un morado oscuro para que se lea bien.

## Cambiar o agregar imágenes
Las fotos están en `imagenes/` y aparecen en una tira que se desliza con el dedo, entre la lista y las redes.

1. Convierte la foto a WebP, de máximo ~200 KB (las actuales miden 420×525 px y pesan 15–45 KB):
   - Sin instalar nada: en [squoosh.app](https://squoosh.app) elige formato WebP, calidad ~70 y ancho 420.
   - Con ImageMagick: `magick foto.jpg -resize 420x525^ -gravity center -extent 420x525 -quality 66 imagenes/nombre.webp`
2. **Cambiar una foto:** guárdala con el mismo nombre que la anterior (ej. `velas-flores.webp`) y actualiza su `alt` en `index.html`.
3. **Agregar una foto:** en `index.html`, dentro de `<section class="fotos">`, copia una línea `<img …>` y cambia el nombre del archivo y el `alt` (describe qué se ve en la foto).
4. **Quitar una foto:** borra su línea `<img …>`.

Logo: reemplaza `imagenes/logo-ditutti.webp` (mismo nombre). Favicon: `favicon-48.png` y `apple-touch-icon.png`.

## Estadísticas de visitas
En el `<head>` hay un comentario `<!-- ANALÍTICA -->`: pega ahí el script que te dé tu servicio de estadísticas.

## Publicar con GitHub Pages
Repositorio → **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**. En 1–2 minutos queda en `https://TU-USUARIO.github.io/ditutti-qr/`.
