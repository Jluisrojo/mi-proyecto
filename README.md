# Ditutti · Cursos y talleres

Página con los cursos y talleres del mes: horarios, descripción, precio y lugares disponibles. La gente aparta escribiendo por WhatsApp.

## Cómo actualizarla

Todo se edita en **`cursos.js`**:

- **`whatsapp`**: tu número con código de país, sin espacios (ej. `5215512345678`).
- **`mes`**: el texto del encabezado.
- **`cursos`**: la lista de actividades. Cuando alguien te confirme por WhatsApp, súmale 1 a `apartados` en ese curso. La página calcula los lugares que quedan y muestra **Agotado** cuando se llena (el botón cambia a "Avísame si se libera").

Para cambiar de mes, reemplaza los cursos de la lista. Las actividades de un solo día ya pasadas se ocultan solas.

## Publicarla

Son archivos estáticos (`index.html` + `cursos.js`). Puedes activar GitHub Pages en este repositorio (Settings → Pages → rama principal) o subirlos a cualquier hosting.
