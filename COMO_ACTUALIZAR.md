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

- Tarjeta para clientes: https://jluisrojo.github.io/mi-proyecto/lealtad.html
- Pantalla para el equipo (escanear y sumar sellos): https://jluisrojo.github.io/mi-proyecto/equipo.html
- Cartel para imprimir y poner en el mostrador: https://jluisrojo.github.io/mi-proyecto/cartel.html

### Cómo se usa en caja

1. **El cliente** (la primera vez) escanea el QR del cartel, toca *Crear mi tarjeta gratis* y la guarda en su celular.
2. **En cada compra** el cliente enseña su tarjeta. En el celular del equipo, en `equipo.html`, la cámara lee el QR.
3. Se toca **Sumar sello** (con − / + se pueden dar varios). Se anota solo en la hoja y aparece en la tarjeta del cliente en 1 o 2 minutos.
4. Cuando la pantalla dice **"Tiene 1 premio"**, se entrega el café, smoothie o mini hotcakes y se toca **Canjear premio**.
5. Si se equivocaron, **Deshacer** borra el último movimiento (dentro de 15 minutos).
6. Opcional: en *Anotar datos del cliente* se guarda su nombre, correo y teléfono en una hoja **privada** (se abre solo cuando la tarjeta aún no tiene datos).

### Cómo encuentra el cliente su tarjeta cada vez

- **En el mismo celular, se abre sola.** La página recuerda su número: basta con abrir el enlace de su tarjeta o volver a escanear el QR del cartel.
- **Lo más seguro: mandársela por WhatsApp.** Al anotar su teléfono en la pantalla del equipo, toca **Enviarle su tarjeta por WhatsApp**: le llega un mensaje con el enlace de SU tarjeta. Cada vez que venga, la abre desde ese chat.
- **Si la pierde o cambia de celular:** busca su nombre o teléfono en la hoja privada de clientes, copia su número de tarjeta, escanea o escribe ese número en la pantalla del equipo y reenvíasela por WhatsApp. También puede escribir el número en *Ya tengo tarjeta*.
- No debe crear una tarjeta nueva: perdería los sellos de la anterior.

### Aviso de privacidad

Página: https://jluisrojo.github.io/mi-proyecto/aviso-privacidad.html (enlazada desde la tarjeta y desde la pantalla del equipo).

- Llena en `cursos.js` → `lealtad.privacidad` el nombre legal del responsable, el domicilio completo y, si quieres, un correo de contacto. Mientras digan `POR_CONFIRMAR`, el aviso muestra "DiTutti Concept Store" y la ubicación general.
- Antes de anotar datos, pregúntale al cliente si está de acuerdo y si acepta promociones. La casilla *Acepta recibir promociones* queda guardada en la columna `promociones` de la hoja privada (`sí` / `no`).
- Si un cliente escribe **BAJA**, cambia su `promociones` a `no` (o desmarca la casilla al escanearlo). Si pide borrar sus datos, borra su fila de la hoja privada; su tarjeta y sellos siguen funcionando.
- Es un aviso general. Si el negocio crece o usas los datos para algo más, conviene que lo revise un abogado.

### Instalar el script (una sola vez, ~5 minutos)

La pantalla del equipo necesita un pequeño script de Google que escribe en la hoja. Es gratis.

1. Abre la hoja de Google → menú **Extensiones → Apps Script**.
2. Borra lo que aparezca y pega TODO el contenido de [`apps-script/Codigo.gs`](apps-script/Codigo.gs) (en GitHub, botón *Copy raw file*).
3. En la línea `const PIN = 'CAMBIA-ESTE-PIN';` cambia `CAMBIA-ESTE-PIN` por un PIN que solo sepa el equipo (por ejemplo `ditutti2026`). Guarda (💾).
4. Arriba, elige la función **probar** y toca **▶ Ejecutar**. Google pedirá permisos: *Revisar permisos* → tu cuenta → *Configuración avanzada* → *Ir a … (no seguro)* → *Permitir*. (Dice "no seguro" solo porque el script es tuyo y no está verificado por Google.) Esto crea en tu Drive la hoja privada **"DiTutti · Clientes (privado)"**.
5. Toca **Implementar → Nueva implementación** → engrane ⚙️ → **Aplicación web**:
   - *Ejecutar como*: **Yo**
   - *Quién tiene acceso*: **Cualquier usuario**
   Toca **Implementar** y copia la **URL de la aplicación web** (termina en `/exec`).
6. En el celular de cada persona del equipo abre `equipo.html`, pega esa URL y el PIN → *Guardar y empezar*. Se queda guardado en ese celular.
   - Para pasarlo a otro celular: en *Ajustes* → *Enviar esta configuración a otro celular por WhatsApp*.
   - Tip: en ese celular, *Agregar a la pantalla principal* para abrirla como app.

Si cambias el código del script después: **Implementar → Administrar implementaciones → ✏️ → Versión: nueva versión → Implementar** (así la URL no cambia).

### Datos y privacidad

- La pestaña **Lealtad** (pública) solo guarda número de tarjeta, fecha y movimiento. **No escribas nombres ni teléfonos ahí.**
- Nombres, correos y teléfonos van a la hoja privada **"DiTutti · Clientes (privado)"** en tu Drive. Ahí ves quiénes son tus clientes; puedes cruzarla con la pestaña Lealtad por número de tarjeta.
- Sin el PIN nadie puede agregar sellos aunque encuentre `equipo.html`.
- También se puede anotar a mano: agrega una fila en la pestaña Lealtad con `tarjeta`, `fecha` y `movimiento` = `sello` o `canje` (`cantidad` vacío = 1).
- Si un cliente pierde su tarjeta pero tiene su número (o lo buscas por nombre en la hoja privada), en `lealtad.html` puede tocar *Ya tengo tarjeta* y escribirlo.
- Para cambiar cuántos sellos se necesitan: `cursos.js` (sección `lealtad`) **y** `SELLOS_POR_PREMIO` en el script.

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
- `equipo.html`: pantalla del equipo para escanear y sumar sellos.
- `cartel.html`: cartel imprimible con el QR de la tarjeta.
- `aviso-privacidad.html`: aviso de privacidad de la tarjeta.
- `apps-script/Codigo.gs`: script de Google que anota los sellos.
- `qrcode.js`, `jsqr.js`: crean y leen los QR (no se editan).
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
