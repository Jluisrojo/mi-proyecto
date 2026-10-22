/*
  ============================================================
  DITUTTI · Cursos y talleres del mes
  ============================================================
  Este es el ÚNICO archivo que necesitas editar.

  ▸ Cada vez que alguien aparte por WhatsApp, súmale 1 a "apartados"
    del curso correspondiente. La página calcula sola los lugares
    disponibles y, cuando se llena, muestra "Agotado".
  ▸ Para agregar un curso, copia un bloque { ... } completo y cambia
    sus datos. Para quitarlo, bórralo.
  ▸ Fechas en formato "AAAA-MM-DD" y horas en formato 24 h "HH:MM".
  ============================================================
*/

window.DITUTTI = {
  // Número de WhatsApp con código de país, sin espacios ni signos (52 = México)
  whatsapp: "5210000000000",

  // Mes que se muestra en el encabezado
  mes: "Noviembre 2026",

  cursos: [
    {
      id: "pasta-fresca",
      tipo: "Taller",
      nombre: "Pasta fresca hecha a mano",
      fecha: "2026-11-07",
      inicio: "11:00",
      fin: "14:00",
      descripcion:
        "Aprende a hacer masa de huevo, tagliatelle y ravioles rellenos desde cero. Incluye ingredientes, delantal y degustación al final.",
      precio: 850,
      cupo: 12,
      apartados: 7,
    },
    {
      id: "ceramica-basica",
      tipo: "Curso",
      nombre: "Cerámica básica (4 sesiones)",
      fecha: "2026-11-04",
      inicio: "18:00",
      fin: "20:00",
      sesiones: "Miércoles 4, 11, 18 y 25 de noviembre",
      descripcion:
        "Técnicas de pellizco, churro y placa para crear tus propias piezas. Incluye barro, esmaltes y dos quemas.",
      precio: 2400,
      cupo: 8,
      apartados: 8,
    },
    {
      id: "acuarela",
      tipo: "Taller",
      nombre: "Acuarela botánica",
      fecha: "2026-11-14",
      inicio: "10:00",
      fin: "13:00",
      descripcion:
        "Pinta hojas y flores con técnicas de húmedo sobre húmedo y capas. Ideal para principiantes; te prestamos todo el material.",
      precio: 650,
      cupo: 10,
      apartados: 3,
    },
    {
      id: "cafe-de-especialidad",
      tipo: "Taller",
      nombre: "Métodos de café de especialidad",
      fecha: "2026-11-21",
      inicio: "17:00",
      fin: "19:00",
      descripcion:
        "V60, Chemex, prensa francesa y AeroPress: aprende a preparar cada método y a catar las diferencias.",
      precio: 550,
      cupo: 10,
      apartados: 9,
    },
    {
      id: "bordado",
      tipo: "Curso",
      nombre: "Bordado mexicano (3 sesiones)",
      fecha: "2026-11-10",
      inicio: "18:30",
      fin: "20:30",
      sesiones: "Martes 10, 17 y 24 de noviembre",
      descripcion:
        "Puntadas tradicionales, transferencia de diseños y acabados. Te llevas un bastidor terminado y tu kit de hilos.",
      precio: 1500,
      cupo: 10,
      apartados: 4,
    },
  ],
};
