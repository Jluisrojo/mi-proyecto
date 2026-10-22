# DiTutti · Talleres y experiencias

Página (optimizada para celular) con los talleres y experiencias de DiTutti Concept Store: fechas, horarios, precio y lugares disponibles. La gente aparta escribiendo por WhatsApp (55 5941 6472).

## Cómo actualizarla

Todo se edita en **`cursos.js`** (las instrucciones están al inicio del archivo):

- **Fechas automáticas**: cada actividad tiene una `recurrencia` (cada 14 días, días de la semana o primer miércoles del mes). Las fechas pasadas se ocultan solas y la tarjeta pasa a la siguiente fecha.
- **Apartados**: se anotan por fecha (y por horario si hay varios) en `apartadosPorFecha`:
  - `{ "2026-11-14": 8 }` → Punch Needle del 14 de nov con 8 apartados.
  - `{ "2026-11-23": { "11:00": 3, "12:00": 7 } }` → Pinta tu Tote Bag por horario.
  Cuando se llena una fecha u horario, se muestra **AGOTADO** solo ahí y el botón cambia a "Avísame si se libera".
- **Fechas sin actividad**: agrégalas a `fechasBloqueadas`. **Fechas extra**: en `fechasEspeciales`.
- **Datos pendientes**: lo que diga `"POR_CONFIRMAR"` no se muestra en la página.

## Publicarla

Son archivos estáticos (`index.html`, `cursos.js`, `logo-ditutti.png`). Puedes activar GitHub Pages en este repositorio (Settings → Pages → rama principal) o subirlos a cualquier hosting.
