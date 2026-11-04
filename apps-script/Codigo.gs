/*
  ============================================================
  DITUTTI · Script de la tarjeta de lealtad
  ============================================================
  Este código se pega en la hoja de Google:
    Extensiones → Apps Script → borra lo que haya → pega todo esto.
  La guía completa está en COMO_ACTUALIZAR.md (sección "Pantalla del equipo").

  Qué hace:
    - Recibe lo que manda la pantalla del equipo (equipo.html) y anota
      sellos y canjes en la pestaña "Lealtad".
    - Guarda nombre, correo y teléfono de los clientes (opcional) en OTRA hoja
      privada, "DiTutti · Clientes (privado)", que se crea sola en tu
      Google Drive. La hoja pública nunca tiene datos personales.
  ============================================================
*/

// ▼▼▼ CAMBIA ESTO: el PIN que tus papás escribirán una sola vez en su celular
const PIN = 'CAMBIA-ESTE-PIN';
// ▲▲▲

const SELLOS_POR_PREMIO = 5;
const PESTANA = 'Lealtad';
const MINUTOS_PARA_DESHACER = 15;

function doGet(e) {
  let r;
  try {
    const p = (e && e.parameter) || {};
    if (PIN === 'CAMBIA-ESTE-PIN') r = { ok: false, error: 'Falta cambiar el PIN en el script.' };
    else if (String(p.pin || '').trim() !== PIN) r = { ok: false, error: 'pin' };
    else r = atender(p);
  } catch (err) {
    r = { ok: false, error: String((err && err.message) || err) };
  }
  const cb = String(((e && e.parameter) || {}).callback || '');
  if (/^[A-Za-z_$][\w$]{0,60}$/.test(cb)) {
    // Respuesta JSONP: la pantalla del equipo la carga como <script>, sin problemas de permisos del navegador
    return ContentService.createTextOutput(cb + '(' + JSON.stringify(r) + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify(r)).setMimeType(ContentService.MimeType.JSON);
}

function atender(p) {
  const accion = String(p.accion || 'consulta');
  if (accion === 'ping') return { ok: true };

  const tarjeta = String(p.tarjeta || '').replace(/\D/g, '');
  if (!/^[1-9]\d{9}$/.test(tarjeta)) return { ok: false, error: 'Número de tarjeta no válido.' };

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const hoja = hojaLealtad();
    let res = resumen(hoja, tarjeta);

    if (accion === 'sello') {
      const n = Math.max(1, Math.min(20, parseInt(p.cantidad, 10) || 1));
      hoja.appendRow([formato(tarjeta), new Date(), 'sello', n, '']);
      res = resumen(hoja, tarjeta);
      res.hecho = n === 1 ? 'Sello agregado' : n + ' sellos agregados';
    } else if (accion === 'canje') {
      if (res.disponibles < 1) return Object.assign(res, { ok: false, error: 'Esta tarjeta no tiene premios disponibles.' });
      hoja.appendRow([formato(tarjeta), new Date(), 'canje', 1, '']);
      res = resumen(hoja, tarjeta);
      res.hecho = 'Premio canjeado';
    } else if (accion === 'deshacer') {
      if (!res.ultimaFila) return Object.assign(res, { ok: false, error: 'No hay nada que deshacer.' });
      const fecha = hoja.getRange(res.ultimaFila, 2).getValue();
      if (!(fecha instanceof Date) || Date.now() - fecha.getTime() > MINUTOS_PARA_DESHACER * 60000) {
        return Object.assign(res, { ok: false, error: 'Solo se puede deshacer en los primeros ' + MINUTOS_PARA_DESHACER + ' minutos. Borra la fila en la hoja.' });
      }
      hoja.deleteRow(res.ultimaFila);
      res = resumen(hoja, tarjeta);
      res.hecho = 'Se deshizo el último movimiento';
    } else if (accion === 'registro') {
      guardarCliente(tarjeta, {
        nombre: String(p.nombre || '').trim(),
        correo: String(p.correo || '').trim(),
        telefono: String(p.telefono || '').trim(),
        promociones: String(p.promociones || '').trim(),
      });
      res.hecho = 'Cliente guardado';
    }

    const cliente = buscarCliente(tarjeta);
    res.nombre = cliente ? cliente.nombre : '';
    res.telefono = cliente ? cliente.telefono : '';
    res.correo = cliente ? cliente.correo : '';
    res.promociones = cliente ? cliente.promociones : '';
    res.ok = true;
    delete res.ultimaFila;
    return res;
  } finally {
    lock.releaseLock();
  }
}

/* ---------- Hoja pública: Lealtad ---------- */
function hojaLealtad() {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  let hoja = libro.getSheetByName(PESTANA);
  if (!hoja) {
    hoja = libro.insertSheet(PESTANA);
    hoja.appendRow(['tarjeta', 'fecha', 'movimiento', 'cantidad', 'nota (opcional, sin datos personales)']);
    hoja.setFrozenRows(1);
    hoja.getRange('A:A').setNumberFormat('@');
  }
  return hoja;
}

function resumen(hoja, tarjeta) {
  const datos = hoja.getDataRange().getValues();
  const enc = datos[0].map(function (h) { return quitarAcentos(h); });
  const cT = enc.indexOf('tarjeta'), cM = enc.indexOf('movimiento'), cC = enc.indexOf('cantidad'), cF = enc.indexOf('fecha');
  let sellos = 0, canjes = 0, ultimaFila = 0, ultimoSello = null;
  for (let i = 1; i < datos.length; i++) {
    const f = datos[i];
    if (String(f[cT]).replace(/\D/g, '') !== tarjeta) continue;
    let n = cC >= 0 ? parseInt(f[cC], 10) : 1;
    if (!(n > 0)) n = 1;
    const m = quitarAcentos(cM >= 0 ? f[cM] : '');
    if (m.indexOf('canje') === 0 || m.indexOf('premio') === 0) canjes += n;
    else if (m === '' || m.indexOf('sello') === 0 || m.indexOf('compra') === 0) {
      sellos += n;
      if (cF >= 0 && f[cF] instanceof Date) ultimoSello = f[cF].toISOString();
    } else continue;
    ultimaFila = i + 1;
  }
  const ganados = Math.floor(sellos / SELLOS_POR_PREMIO);
  return {
    tarjeta: formato(tarjeta),
    sellos: sellos,
    enTarjeta: sellos % SELLOS_POR_PREMIO,
    meta: SELLOS_POR_PREMIO,
    ganados: ganados,
    canjeados: canjes,
    disponibles: Math.max(0, ganados - canjes),
    ultimoSello: ultimoSello,
    ultimaFila: ultimaFila,
  };
}

/* ---------- Hoja privada: Clientes ---------- */
function hojaClientes() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('HOJA_CLIENTES');
  let libro = null;
  if (id) { try { libro = SpreadsheetApp.openById(id); } catch (e) { libro = null; } }
  if (!libro) {
    libro = SpreadsheetApp.create('DiTutti · Clientes (privado)');
    const h = libro.getSheets()[0];
    h.setName('Clientes');
    h.appendRow(CAMPOS_CLIENTE);
    h.setFrozenRows(1);
    h.getRange('A:D').setNumberFormat('@');
    props.setProperty('HOJA_CLIENTES', libro.getId());
  }
  return libro.getSheets()[0];
}

// Columnas de la hoja privada. Se buscan por nombre de encabezado; si falta
// alguna (por ejemplo "correo" en hojas creadas antes), se agrega al final.
const CAMPOS_CLIENTE = ['tarjeta', 'nombre', 'correo', 'telefono', 'registro', 'promociones'];

function columnasClientes(hoja) {
  const ultima = Math.max(1, hoja.getLastColumn());
  const enc = hoja.getRange(1, 1, 1, ultima).getValues()[0].map(function (h) { return quitarAcentos(h); });
  const col = {};
  CAMPOS_CLIENTE.forEach(function (k) {
    let i = enc.indexOf(k);
    if (i < 0) {
      i = enc.length;
      enc.push(k);
      hoja.getRange(1, i + 1).setValue(k);
      if (k !== 'registro') hoja.getRange(2, i + 1, Math.max(1, hoja.getMaxRows() - 1), 1).setNumberFormat('@');
    }
    col[k] = i;
  });
  return col;
}

function buscarCliente(tarjeta) {
  const id = PropertiesService.getScriptProperties().getProperty('HOJA_CLIENTES');
  if (!id) return null;
  const hoja = hojaClientes();
  const col = columnasClientes(hoja);
  const datos = hoja.getDataRange().getValues();
  for (let i = 1; i < datos.length; i++) {
    if (String(datos[i][col.tarjeta]).replace(/\D/g, '') === tarjeta) {
      return {
        fila: i + 1,
        nombre: String(datos[i][col.nombre] || ''),
        correo: String(datos[i][col.correo] || ''),
        telefono: String(datos[i][col.telefono] || ''),
        promociones: String(datos[i][col.promociones] || ''),
      };
    }
  }
  return null;
}

function guardarCliente(tarjeta, d) {
  if (!d.nombre && !d.correo && !d.telefono && !d.promociones) return;
  const hoja = hojaClientes();
  const col = columnasClientes(hoja);
  const c = buscarCliente(tarjeta);
  if (c) {
    ['nombre', 'correo', 'telefono', 'promociones'].forEach(function (k) {
      if (d[k]) hoja.getRange(c.fila, col[k] + 1).setValue(d[k]);
    });
  } else {
    const fila = [];
    fila[col.tarjeta] = formato(tarjeta);
    fila[col.nombre] = d.nombre;
    fila[col.correo] = d.correo;
    fila[col.telefono] = d.telefono;
    fila[col.registro] = new Date();
    fila[col.promociones] = d.promociones;
    for (let i = 0; i < fila.length; i++) if (fila[i] === undefined) fila[i] = '';
    hoja.appendRow(fila);
  }
}

/* ---------- Utilidades ---------- */
function formato(d) { return d.slice(0, 3) + '-' + d.slice(3, 6) + '-' + d.slice(6); }
function quitarAcentos(s) {
  return String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase();
}

// Para probar desde el editor: selecciona "probar" arriba y toca ▶ Ejecutar.
// La primera vez Google pedirá permisos: acéptalos (es tu propio script).
function probar() {
  Logger.log(JSON.stringify(atender({ accion: 'consulta', tarjeta: '1234567890' })));
  hojaClientes();
  Logger.log('Hoja privada de clientes: ' + SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('HOJA_CLIENTES')).getUrl());
}
