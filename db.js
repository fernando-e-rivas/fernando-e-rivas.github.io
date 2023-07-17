class Location {
  constructor(name="", alias="", lat=null, lon=null) {
    this.name = name;
    this.alias = alias;
    this.lat = lat;
    this.lon = lon;
  }
}

const skill = {
  autocad: "Autocad",
  word: "Microsoft Word",
  excel: "Microsoft Excel",
  powerPoint: "Microsoft Powerpoint",
}

const location = {
  minerd: new Location(
    "Ministerio de Educación de la República Dominicana",
    "MINERD",
    18.4609793,
    -69.9117334
  ),
  jce: new Location(
    "Junta Central Electoral",
    "JCE",
    18.4461085,
    -69.9846247
  ),
  perezMorales: new Location(
    "Arq. Pérez Morales & Asocs",
    null,
    18.4771156,
    -69.9432694
  ),
  incocomsa: new Location(
    "",
    "INCOCOMSA",
    null,
    null,
  ),
  roa: new Location(
    "Roa & Asocs. Edificio Santanita",
    "",
    18.484127,
    -69.9265328,
  ),
  sercitec: new Location(
    "",
    "SERCITEC",
    18.4703488,
    -69.9444506
  ),
  isc: new Location(
    "",
    "ISC (Division Westinghouse)",
    18.4739986,
    -69.9603906,
  ),
  marina: new Location(
    "Marina de Guerra",
    18.4470377,
    -69.9236394,
  )
}



const data = {
  name: "Fernando",
  name_middle: "Euclides",
  name_family: "Rivas",
  dob: "9/03/1964",
  phone: "809-653-4124",
  title: "Arquitecto",
  summary: [
    "Aplicar y expandir mis conocimientos, produciendo resultados sólidos, especialmente en el área de Diseño, Planificación, Supervisión y Construcción.  Manejo cuidadoso de la puntualidad y los plazos, así como la relación entre los diversos integrantes de un equipo, buscando siempre la excelencia en los resultados.",
    "Interactuar, orientar, planificar y coordinar con diversos profesionales para la integración a la obra civil de manera que haya resultados óptimos."
  ],
  skills: [
    skill.autocad,
    skill.word,
    skill.powerPoint,
    skill.excel,
    "softwares para mantenimiento y uso interno del computador",
    "Utilitarios de Recuperación y Optimización de Disco",
  ],
  experience: [
    {
      start_date: "04/2011",
      end_date: "",
      title: "Supervisor Nacional",
      location: location.minerd,
      description: [
        "Colaborador en Departamento de Diseño y Normas.",
      ],
    },
    {
      start_date: "04/2011",
      end_date: "",
      title: "Encargado Supervisión y Diseño",
      location: location.minerd,
      description: [
        "Remodelación y adaptación edificio de usos múltiples (2017-2020) (Centro odontológico para 15 unidades, incluyendo 2 áreas de cirugía, Servicios de atención emocional, Salón multiusos, salón del Consejo, Oficinas administrativas, Salas de espera, Ascensor para discapacitados, Baños público de apoyo a las diferentes áreas, incluyendo para discapacitados, Cocinas-comedor, Monitoreo de equipos digital, Sistema de tratamiento de agua por Osmosis).",
        "Calle Pedro Henríquez Ureña # 73, Plaza Aurora (2 pisos encima laboratorio Amadita)"
      ],
    },
    {
      start_date: "2020",
      end_date: "2023",
      title: "",
      location: new Location(),
      description: [
        "Diseño y ejecución edificio 3 niveles con supervisión y licencia de todos los procesos por Obras Publicas, 1 apartamento 1er nivel con 2 parqueos, 2 apartamentos por piso en 2do y 3er nivel con 1 parqueo por apartamento, área recreativa común en azotea.",
      ],
    },
    {
      start_date: "02/2007",
      end_date: "01/2011",
      title: "Coordinador Unidad Especial de Remodelación de Oficialías",
      location: location.jce,
      description: [
        "Coordinación, Administración, Supervisión, Diseño y Construcción de Múltiples organismos relacionados con las Actividades propias de esta Institución.",
        "Colaboración en Diseño Modelos Tipo (Palacios Electorales) Grande, Mediano y Pequeño para ser localizados en diversos puntos de la Geografía Nacional.",
        "Remodelación de Locales para adecuarlos a los nuevos requerimientos de la Institución.  (Diseño y ejecución Oficialías de la 1ra, 2da y 3ra Circunscripción del D.N., Centro de Servicios Azua y Santo Domingo Este, Dirección de Inspectoría JCE, Área de Ingeniería JCE, Colaboración en equipo para Auditorio Cesar Estrella Sadhala y anexos, Baños Públicos en 1ro, 2do y 3er Nivel Sede Central JCE.",
        "Diseño y Supervisión Juntas Electorales y Oficialías en: Santiago, Cotuí, San Francisco de Macorís, La Romana, Guaymate, San José de los Llanos, Duvergé.",
        "Diseño y Supervisión Centros de Servicio en: Santiago, San Francisco de Macorís, La Romana.",
        "Diseño Junta Electoral en las Terrenas.",
      ],
    },
    {
      start_date: "04/1994",
      end_date: "02/2007",
      title: "",
      location: location.perezMorales,
      description: [
        "Colaborador en gran diversidad de Proyectos (Residencias y Torres)",
        "Colaboración y Presentación Aeropuerto Internacional de la Romana",
        "Miembro Equipo Ganador Concurso para la Remodelación del Recinto Metropolitano",
        "Pontificia Universidad Católica Madre y Maestra (PUCMM)",
        "Encargado Actualización permanente para dibujo de Planos a través de varios Softwares, especialmente AutoCad.",
        "Colaboración y Presentación en múltiples Proyectos Residenciales, Tanto grandes Residencias.",
        "(Familia González-Corripio, Perelló, Lama, Bisonó, Jean Montás, Vargas Maldonado, Rodríguez Robledo, Iglesias Cabrera, Sued, etc., Así como Villas en Casa de Campo (Sr. Francisco García, etc.), Samaná (Sr. Zovko, Sra. Poinard).",
        "Colaboración y Presentación de Torres de Apartamentos:  Tramontana, Mediterráneo, Paseo del Parque, del Conservatorio, Monticello, TorreBlanca, El Cambaral, Terrazas del Paseo, etc.",
        "Colaboración y Presentación Proyectos de orden recreativo e institucional, Como son:  Parque de Diversiones Arcadas, Iglesia en el sector de Los Guandules, Hotel Gran Bahía (Samaná)",
        "Hotel Santana Beach (Una porción), Proyecto Turístico CapCana (Una Porción), Tienda Novoteks (Av. Roberto Pastoriza), Tienda Mary (en av. Roberto Pastoriza) A la par, Trabajos como Colaborador con la Arq. Carolina Vilorio, en varias Torres y grandes Residencias.",
      ],
    },
    {
      start_date: "1994",
      end_date: "1996",
      title: "Encargado Departamento de Dibujo",
      location: location.incocomsa,
      description: [
        "Encargado de Taller de Dibujo Computarizado.",
        "Colaboración y Presentación Torre Serena (Av. Anacaona)."
      ],
    },
    {
      start_date: "1993",
      end_date: "1994",
      title: "Colaborador Arq. Líbrael Guzmán, (Encargado de Taller)",
      location: location.roa,
      description: [
        "Dibujante y Perfeccionamiento Software AutoCad."
      ],
    },
    {
      start_date: "1992",
      end_date: "1993",
      title: "Dibujante",
      location: location.sercitec,
      description: [
        "Dibujante en gran variedad de Proyectos (Palacio de Justicia de Santiago)."
      ],
    },
    {
      start_date: "1990",
      end_date: "1992",
      title: "Dibujante",
      location: location.isc,
      description: [
        "Dibujante Planos Catastrales para diversos Condados en U.S.A., con diversos Softwares (String y Microstation) ",
      ],
    },
    {
      start_date: "1985",
      end_date: "1990",
      title: "Dibujante",
      location: location.marina,
      description: [
        "Miembro del Departamento de Cartografía en el Instituto Cartográfico Militar (ICM), Técnico y Formador de Personal, laborando en la confección de Cartas Náuticas de diversos puertos de la Costa Dominicana (Sans Souci, Puerto Viejo de Azua, Bahía de Luperón, etc.), Así como Hojas Topográficas a Escala 1:50,000 de todo el territorio Nacional, Mapas de Ciudades en diversas Provincias del País (Sto. Dgo, Santiago, La Romana y La Vega.)",
      ],
    },
    {
      start_date: "1975",
      end_date: "1981",
      title: "Bachiller en Ciencias y Letras",
      location: new Location("Liceo Experimental Altagracia Amelia Ricart Calventi", "UASD"),
      description: [],
    },
    {
      start_date: "1996",
      end_date: "1996",
      title: "Ingles Básico y Avanzado",
      location: new Location("Instituto Cultural Dominico-Americano", "ICDA"),
      description: [],
    },
    {
      start_date: "1983",
      end_date: "1989",
      title: "Arquitecto",
      location: new Location("Universidad Autónoma de Santo Domingo", "UASD"),
      description: [],
    },
    {
      start_date: "1989",
      end_date: "1989",
      title: "Técnico Cartógrafo",
      location: new Location("Escuela Cartográfica del DMA-IAGS, Fort Clayton, Panamá"),
      description: [
        "Mejor puntuación de la clase"
      ],
    },
  ],
  references: [
    {
      name: "Lic. Lorenza Bencosme",
      position: "Directora Regional, Zona Metropolitana Oeste, Banco de Reservas",
      tel: "809-604-4763",
    },
    {
      name: "Lic. Euri Cabral",
      position: "Comunicador, Economista, Escritor.",
      tel: "809-803-5474",
    },
    {
      name: "Lic. Yuri Rodriguez",
      position: "Exdirector de INABIMA",
      tel: "829-979-0167",
    },
  ]
}