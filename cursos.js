/*
  ============================================================
  DITUTTI · Talleres y experiencias
  ============================================================
  ▸ Lo normal es editar la HOJA DE GOOGLE (ver "hojaGoogle" abajo):
    ahí se agregan actividades y se anotan los apartados.
    Este archivo es el RESPALDO por si la hoja no se puede leer, y
    guarda el número de WhatsApp y la ubicación.

  ▸ Las fechas se generan solas a partir de la "recurrencia" de cada
    actividad. Las fechas pasadas se ocultan automáticamente.

  ▸ APARTADOS: cuando alguien confirme por WhatsApp, anótalo en
    "apartadosPorFecha" de esa actividad:

      - Actividad con UN horario por día (Punch Needle, Paint Date...):
          apartadosPorFecha: { "2026-11-14": 8, "2026-11-28": 4 }

      - Actividad con VARIOS horarios por día (Pinta tu Tote Bag):
          apartadosPorFecha: { "2026-11-23": { "11:00": 3, "12:00": 7 } }

    Si una fecha u horario no aparece, se considera con 0 apartados.
    Cuando se llena, la página muestra AGOTADO solo en esa fecha/horario.

  ▸ Fechas "AAAA-MM-DD"; horas en formato 24 h "HH:MM".

  ▸ Cualquier dato que todavía no esté definido se deja como
    "POR_CONFIRMAR". La página NO lo muestra como dato real.

  ▸ Tipos de recurrencia:
      { tipo: "intervalo", fechaInicial: "AAAA-MM-DD", intervaloDias: 14 }
      { tipo: "semanal", fechaInicial: "AAAA-MM-DD", diasSemana: [1, 2, 3, 4] }
          (0 = domingo, 1 = lunes, ... 6 = sábado)
      { tipo: "primerDiaDelMes", fechaInicial: "AAAA-MM-DD", diaSemana: 3 }
          (ej. 3 = primer miércoles de cada mes)

  ▸ fechasBloqueadas: fechas en que NO habrá actividad (se saltan).
  ▸ fechasEspeciales: fechas extra fuera de la recurrencia.
  ▸ cupo: número de lugares por fecha/horario; null = sin límite.
  ▸ precio: número en MXN; 0 = "Gratis".
  ============================================================
*/

window.DITUTTI = {
  // Hoja de Google Sheets de donde la página lee las actividades y los
  // apartados. Si la hoja no se puede leer, se usan los datos de abajo
  // como respaldo. Para dejar de usar la hoja, pon: hojaGoogle: ""
  hojaGoogle: "1zMaG2-Dm_awilaKPbXlIIOCWKvrQwhiPxT6BT1dVgoM",

  // WhatsApp de DiTutti (55 5941 6472) con código de país, sin espacios
  whatsapp: "525559416472",
  whatsappVisible: "55 5941 6472",

  ubicacion: "DiTutti Concept Store · Zona Satélite, Estado de México",

  actividades: [
    {
      id: "punch-needle",
      nombre: "Punch Needle",
      tipo: "Taller",
      precio: 500,
      nivel: "Principiantes. No se requiere experiencia en bordado, costura o Punch Needle.",
      cupo: 10, // por fecha
      duracionMinutos: 180,
      horarios: ["11:00"],
      recurrencia: { tipo: "intervalo", fechaInicial: "2026-11-14", intervaloDias: 14 },
      fechasAMostrar: 8,
      fechasBloqueadas: [],
      fechasEspeciales: [],
      descripcion: [
        "Es una experiencia creativa para principiantes donde cada participante aprende desde cero la técnica de Punch Needle y crea una pieza textil que posteriormente se coloca en una tote bag de manta.",
        "El Punch Needle es una técnica de bordado con aguja especial que permite crear diseños con textura utilizando estambre. No se necesita experiencia previa.",
        "La experiencia está pensada como una actividad relajada y diferente para hacer en Satélite. Llegas con tu diseño previamente trazado para aprovechar el tiempo del taller directamente aprendiendo y creando.",
        "Al hacer tu reserva, indícanos qué diseño quieres para dejarlo trazado con anticipación.",
      ],
      incluye: [
        "Tote bag de manta",
        "Tela y materiales necesarios para trabajar",
        "Estambres de diferentes colores",
        "Uso de bastidor",
        "Uso de aguja Punch Needle durante el taller",
        "Diseño previamente trazado",
        "Explicación paso a paso",
        "Acompañamiento durante todo el proceso",
        "Tote bag terminada para llevar a casa",
      ],
      aviso:
        "El bastidor y la aguja Punch Needle son herramientas utilizadas durante el taller y NO forman parte de los materiales que te llevas a casa.",
      politicaCancelacion:
        "Las cancelaciones o cambios deben solicitarse con mínimo 3 días de anticipación. Después de ese plazo, el pago no es reembolsable porque los materiales y el diseño se preparan previamente para cada participante.",
      mostrarUbicacion: true,
      estacionamiento: true,
      pedirDiseno: true,
      apartadosPorFecha: {},
    },

    {
      id: "paint-date",
      nombre: "Paint Date",
      tipo: "Taller",
      precio: 500,
      nivel: "POR_CONFIRMAR",
      cupo: "POR_CONFIRMAR",
      duracionMinutos: "POR_CONFIRMAR",
      horarios: "POR_CONFIRMAR", // ej. ["17:00"] cuando se defina
      recurrencia: { tipo: "intervalo", fechaInicial: "2026-11-07", intervaloDias: 14 },
      fechasAMostrar: 8,
      fechasBloqueadas: [],
      fechasEspeciales: [],
      descripcion: "POR_CONFIRMAR",
      incluye: "POR_CONFIRMAR",
      politicaCancelacion:
        "Las cancelaciones o cambios deben solicitarse con mínimo 3 días de anticipación. Después de ese plazo, el pago no es reembolsable.",
      mostrarUbicacion: false,
      estacionamiento: false,
      pedirDiseno: false,
      // Mientras falten horario y cupo, la tarjeta se muestra como
      // "por confirmar" y el botón solo pide informes (no aparta).
      // Pon false para ocultarla por completo.
      visible: true,
      apartadosPorFecha: {},
    },

    {
      id: "lectura-tarot",
      nombre: "Lectura de Tarot",
      tipo: "Experiencia",
      precio: 0, // Gratis
      nivel: "POR_CONFIRMAR",
      cupo: null, // sin límite
      duracionMinutos: 60,
      horarios: ["16:00"],
      recurrencia: { tipo: "primerDiaDelMes", fechaInicial: "2026-11-01", diaSemana: 3 },
      fechasAMostrar: 6,
      fechasBloqueadas: [],
      fechasEspeciales: [],
      descripcion: ["Lectura de Tarot."],
      incluye: ["Lectura de Tarot"],
      politicaCancelacion: "En caso de cancelar, avisar con mínimo 1 día de anticipación.",
      mostrarUbicacion: false,
      estacionamiento: false,
      pedirDiseno: false,
      apartadosPorFecha: {},
    },

    {
      id: "pinta-tu-tote-bag",
      nombre: "Pinta tu Tote Bag",
      tipo: "Taller",
      precio: 250,
      nivel: "POR_CONFIRMAR",
      cupo: 10, // por horario
      duracionMinutos: 60,
      horarios: ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
      recurrencia: { tipo: "semanal", fechaInicial: "2026-11-01", diasSemana: [1, 2, 3, 4] },
      fechasAMostrar: 16,
      fechasBloqueadas: [],
      fechasEspeciales: [],
      descripcion: [
        "Ven, elige un diseño y pinta tu tote bag con materiales acrílicos para textil.",
        "Hay varios diseños disponibles y pueden cambiar dependiendo de la temporada. No necesitas reservar diseño: lo eliges al llegar a DiTutti.",
      ],
      incluye: [
        "Tote bag",
        "Materiales para pintar",
        "Pinturas acrílicas para textil",
        "Elección de diseño disponible",
      ],
      politicaCancelacion: "Las cancelaciones o cambios deben solicitarse con mínimo 1 día de anticipación.",
      mostrarUbicacion: true,
      estacionamiento: true,
      pedirDiseno: false,
      apartadosPorFecha: {},
    },
  ],
};
