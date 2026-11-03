# Cómo actualizar la página de DiTutti

Página pública: https://jluisrojo.github.io/mi-proyecto/
Calendario (link directo): https://jluisrojo.github.io/mi-proyecto/#calendario

El calendario se arma solo con las mismas actividades de la hoja: no hay que actualizarlo por separado.

Hoja de Google (aquí se hace casi todo):
https://docs.google.com/spreadsheets/d/1zMaG2-Dm_awilaKPbXlIIOCWKvrQwhiPxT6BT1dVgoM/edit

---

## 1. Anotar un apartado (lo de todos los días)

No se necesita ninguna IA ni tocar código.

1. Abre la hoja → pestaña **Apartados**.
2. Agrega una fila: `actividad` · `fecha` (AAAA-MM-DD) · `horario` (solo en Pinta tu Tote Bag) · `lugares`.
3. Recarga la página en 1 o 2 minutos: los lugares ya bajaron.

Si alguien cancela, borra su fila. **No escribas nombres ni teléfonos**: la hoja es visible para quien tenga el enlace.

## 1b. Tarjeta de lealtad (cada 5 compras: café, smoothie o mini hotcakes gratis)

Página para clientes: https://jluisrojo.github.io/mi-proyecto/lealtad.html

**El cliente** abre ese enlace, toca *Crear mi tarjeta gratis* y la guarda en su celular (Agregar a inicio, o enviándosela por WhatsApp). Su tarjeta tiene un QR y un número como `480-518-6627`.

**En caja, en cada compra:**

1. El cliente muestra su tarjeta.
2. Abre la hoja → pestaña **Lealtad** → agrega una fila:
   `tarjeta` = el número (con o sin guiones) · `fecha` · `movimiento` = `sello`.
   Si compró varias cosas y quieres dar más de un sello, pon el número en `cantidad` (vacío = 1).
3. En 1 o 2 minutos el sello aparece en su tarjeta (puede tocar *Actualizar sellos*).

**Cuando canjea su premio:** cuando la tarjeta diga *Premios disponibles: 1* o más, entrégale su café, smoothie o mini hotcakes y agrega una fila con `movimiento` = `canje`.

La página hace las cuentas sola: cada 5 sellos = 1 premio; los canjes se restan de los premios disponibles.

- **No escribas nombres ni teléfonos** en esta pestaña: la hoja es visible para quien tenga el enlace.
- Para borrar un sello que se puso por error, borra esa fila.
- Para cambiar cuántos sellos se necesitan, los premios o los términos: `cursos.js`, sección `lealtad`.
- Si un cliente pierde su tarjeta pero recuerda o tiene su número, en la página puede tocar *Ya tengo tarjeta* y escribirlo.

## 2. Agregar un taller o curso nuevo

También desde la hoja, pestaña **Actividades**: llena una fila nueva. La pestaña **Instrucciones** explica cada columna.

- Curso de un solo día: `repeticion` = `fechas` y pon la fecha en `fechas_extra`.
- Curso con varias fechas sueltas: `repeticion` = `fechas` y en `fechas_extra` todas separadas por coma.
- Algo que se repite: `cada_n_dias`, `semanal` o `primer_dia_del_mes`.
- Mismo taller con horarios distintos según el día: una fila por fecha con **exactamente el mismo nombre**; en la página se juntan en una sola tarjeta.
- Para ocultarlo sin borrarlo: `mostrar` = `NO`.
- Si aún no tienes un dato, escribe `POR_CONFIRMAR`: no se muestra en la página.

Truco: copia una fila parecida (por ejemplo la de Punch Needle), pégala abajo y cambia los datos.

## 3. Cambiar el diseño o algo que la hoja no cubre (con ChatGPT u otra IA)

Los archivos de la página están en https://github.com/Jluisrojo/mi-proyecto

- `index.html`: diseño y funcionamiento de la página.
- `cursos.js`: número de WhatsApp, ubicación, enlace a la hoja y datos de respaldo.
- `lealtad.html`: la tarjeta de lealtad.
- `qrcode.js`: genera el QR de la tarjeta (no se edita).
- `logo-ditutti.png`: el logo.

Pasos:

1. En GitHub abre el archivo, toca el ícono de **copiar** (Copy raw file).
2. Pégalo en ChatGPT con este mensaje:

   > Este es el archivo `index.html` de la página de talleres de mi tienda DiTutti (página estática en GitHub Pages que lee una hoja de Google Sheets). Quiero este cambio: **[describe el cambio]**. No cambies nada más. Mantén el diseño mobile-first y todo en español. Devuélveme el archivo COMPLETO listo para pegar.

3. En GitHub, abre el mismo archivo → lápiz ✏️ → borra todo → pega lo que te dio ChatGPT → **Commit changes**.
4. Revisa la página en 1 o 2 minutos. Si algo se rompió, en GitHub entra a **History** del archivo, abre la versión anterior y vuelve a pegarla.

## 4. Si la página dejó de mostrar los talleres de la hoja

- Revisa que la hoja siga compartida como **"Cualquier persona con el enlace → Lector"**.
- No cambies los nombres de las pestañas (`Actividades`, `Apartados`) ni los encabezados de la primera fila.
- Si la hoja falla, la página muestra los datos de respaldo de `cursos.js` (pueden estar desactualizados).
