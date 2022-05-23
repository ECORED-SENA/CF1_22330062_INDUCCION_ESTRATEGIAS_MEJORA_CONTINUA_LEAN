export default {
  global: {
    componenteFormativo: 'Manufactura esbelta y mudas del proceso',
    descripcionCurso:
      'Este componente se centra en la interpretación de los principios de manufactura esbelta de acuerdo con los requerimientos del sector productivo y en la diferenciación de las mudas en el proceso con base a los principios de manufactura esbelta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos generales del Lean manufacturing',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición del Lean manufacturing',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Orígenes y antecedentes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estructura del sistema Lean',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Beneficios de la implantación Lean',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Principios del sistema Lean',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Pensamiento Lean',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Conceptualización del sistema producción Lean manufacturing',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Variables y restricciones inherentes al proceso productivo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conceptos de desperdicios (mudas)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Tipos de mudas o desperdicios de la filosofía de la manufactura esbelta (Lean)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características de los desperdicios',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Causas posibles y acciones Lean',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Ardila, E. (1984), Técnicas de ventas: objeciones. SENA.',
    },
    {
      referencia:
        'Código de Comercio de Colombia. (1974). Definición de empresa.',
      link:
        'https://www.camarabaq.org.co/wp-content/uploads/2021/03/CodigodeComercio-2.pdf',
    },
    {
      referencia: 'Navarro, M. (2012). Técnicas de ventas. ',
      link:
        'https://www.aliat.click/BibliotecasDigitales/economico_administrativo/Tecnicas_de_venta.pdf',
    },
    {
      referencia:
        'Viña. A. (2005). Atención y servicio al cliente con nuevas tecnologías de información y comunicación. SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/2345',
    },
  ],
  glosario: [
    {
      termino: 'Actitud',
      significado:
        'Valoraciones favorables o desfavorables, opiniones y tendencias que sistemáticamente presenta una persona respecto a un objeto o idea.',
    },
    {
      termino: 'Bases de datos',
      significado:
        'Conjunto de datos relacionados con un determinado aspecto de un negocio que se almacena sistemáticamente para un uso específico.',
    },
    {
      termino: 'BI',
      significado:
        'Sigla alusiva a la inteligencia de negocios (business intelligence). Es el conjunto de aplicaciones, herramientas, análisis y conocimientos que permiten a la empresa conocer información oportuna para la toma de decisiones de negocio.',
    },
    {
      termino: '<em>Billing</em>',
      significado:
        'Es el término acuñado a nivel técnico para hacer relación a los sistemas de información, cuya finalidad es la facturación.',
    },
    {
      termino: 'Moda',
      significado:
        'hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer.',
    },
    {
      termino: 'Cliente',
      significado:
        'Es el centro de la estrategia de la empresa. Representa a la persona o empresa que adquiere los bienes y servicios.',
    },
    {
      termino: 'CRM',
      significado:
        'Sigla alusiva a la Administración de las Relaciones con los Clientes <em>(Customer Relationship Management).</em> Como sistema de información permiten tener consolidada, organizada y disponible la información de los clientes.',
    },
    {
      termino: 'Empatía',
      significado:
        'Principio básico necesario para la interacción con clientes, consiste en ponerse en el lugar del otro, sin perder la objetividad.',
    },
    {
      termino: 'Empresa',
      significado: 'Estructura económica sobre la cual funciona la economía.',
    },
    {
      termino: 'ERP',
      significado:
        'Sigla asociada al sistema de planificación de recursos empresariales <em>(enterprise resource planning).</em> A nivel de sistema de información permite que la empresa tenga sistematizados varios procesos.',
    },
    {
      termino: 'Objeciones',
      significado:
        'Mecanismos utilizados por los clientes para ahondar en el proceso de ventas, ya sea para conocer y validar información o para desistir de la transacción.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'Grado en el que el desempeño percibido de un producto o servicio coincide con las expectativas del comprador.',
    },
    {
      termino: 'Servicio',
      significado:
        'Es la combinación de varias cualidades (intangibles) como desempeño, esfuerzo, atención y otros tangibles como un trato amable, un obsequio, los muebles de la sala de recibo, entre otros.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'Conjunto de aplicaciones que permiten administrar información de interés para las empresas.',
    },
    {
      termino: 'Valor',
      significado:
        'Asignación monetaria que da un cliente a un producto en función de la necesidad que satisface o de la usabilidad que representa.',
    },
  ],
  complementario: [
    {
      texto: 'SENA. (2022). Misión y Visión del SENA. SENA. ',
      tipo: 'Articulo',
      link: 'https://www.sena.edu.co/es-co/sena/Paginas/misionVision.aspx',
    },
    {
      texto:
        'Resolución 01726 de 2014. [Servicio Nacional de Aprendizaje]. Por la cual se adopta la Política Institucional para Atención de las personas con discapacidad. Agosto 12 de 2014.',
      tipo: 'Resolución',
      link:
        'https://normograma.sena.edu.co/normograma/docs/resolucion_sena_1726_2014.htm',
    },
    {
      texto:
        'Acuerdo 010 de 2016. [Servicio Nacional de Aprendizaje]. Por medio del cual se adopta la política de Atención con Enfoque Pluralista y Diferencial en el SENA. Diciembre 20 de 2016.',
      tipo: 'Acuerdo',
      link:
        'https://normograma.sena.edu.co/normograma/docs/acuerdo_sena_0010_2016.htm',
    },
    {
      texto:
        'GraphEverywhere. (2022). Tipos de bases de datos. Clasificación por contenido y modelo.',
      tipo: 'Artículo',
      link:
        'https://www.grapheverywhere.com/tipos-bases-de-datos-clasificacion/',
    },
    {
      texto:
        'Ley 1755 de 2015 de Colombia. Por medio de la cual se regula el Derecho Fundamental de Petición y se sustituye un título del Código de Procedimiento Administrativo y de lo Contencioso Administrativo. Diciembre 30 de 2015.',
      tipo: 'Ley',
      descarga: '/downloads/L-1755-2015.pdf',
    },
    {
      texto:
        'Diccionario de la Real Academia de la Lengua Española. Término objeción.',
      tipo: 'Diccionario en línea',
      link: 'https://dle.rae.es/objeci%C3%B3n',
    },
    {
      texto: 'Navarro, M. (2012). Técnicas de ventas.',
      tipo: 'Libro digital',
      link: '/downloads/Tecnicas_de_venta.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Diana Carolina Jaramillo Rojas',
        cargo: 'Experta temática',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios Regional - Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo ',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
