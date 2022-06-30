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
        titulo: 'Conceptos generales del <i>Lean manufacturing</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición del <i>Lean manufacturing</i>',
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
            titulo: 'Estructura del sistema <i>Lean</i>',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Beneficios de la implantación <i>Lean</i>',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Principios del sistema <i>Lean</i>',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Pensamiento <i>Lean</i>',
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
              'Conceptualización del sistema producción <i>Lean manufacturing</i>',
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
              'Tipos de mudas o desperdicios de la filosofía de la manufactura esbelta (<i>Lean</i>)',
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
            titulo: 'Causas posibles y acciones <i>Lean</i>',
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
      referencia:
        'Andreu, I. (2021). <i>Lean manufacturing</i>: ¿qué es y cuáles son sus principios?. ',
      link:
        'https://www.apd.es/lean-manufacturing-que-es/#:~:text=La%20filosof%C3%ADa%20Lean%20Manufacturing%2C%20tambi%C3%A9n,al%20proceso%20ni%20al%20cliente',
    },
    {
      referencia:
        'Alteco Consultores. (s.f.). Qué es un diagrama de flujo de proceso o flujograma. ',
      link: 'https://www.aiteco.com/diagrama-de-flujo/',
    },
    {
      referencia: 'Navarro, M. (2012). Técnicas de ventas. ',
      link:
        'https://www.aliat.click/BibliotecasDigitales/economico_administrativo/Tecnicas_de_venta.pdf',
    },
    {
      referencia:
        'Arenas, J. y Castro, A. (2021). Plan de intervención al proceso productivo en la empresa Industrias Alimenticias Carolina S.A.S. Universidad EAN Facultad de Administración, Finanzas y Ciencias Económicas Maestría en Administración de Empresas MBA. ',
    },
    {
      referencia:
        'González, F. (2007). Manufactura esbelta (<i>Lean manufacturing</i>). Principales herramientas. Revista Panorama Administrativo, 1(2). ',
    },
    {
      referencia:
        'LeanBox, (s.f.). <i>Lean manufacturing</i>. Un sistema de producción eficiente para series cortas y variadas. ',
      link: 'https://leanbox.es/que-hacemos/sistemas-de-produccion-lean/',
    },
    {
      referencia:
        'Olaya, M. y Romero, S. (2015). Desarrollo de manufactura esbelta en los procesos de la empresa Martinplast S.A.S. Universidad Libre Facultad de Ingeniería, Programa de Ingeniería Industrial. ',
    },
    {
      referencia:
        'Production Tools. (2021). 8 desperdicios en <i>Lean manufacturing.</i> ',
      link:
        'https://productiontools.es/lean/desperdicios-en-el-lean-manufacturing/',
    },
    {
      referencia: 'Quiroga, M. (2019). Proceso productivo. Economipedia. ',
      link: 'https://economipedia.com/definiciones/proceso-productivo.html',
    },
    {
      referencia:
        'Pérez, A. (2017). Economías de escala: Definición y tipos. OBS Business School. ',
      link:
        'https://www.obsbusiness.school/blog/economia-de-escala-definicion-y-tipos',
    },
    {
      referencia:
        'Ramírez, N., Mungaray, A., Ramírez, M. y Texis, M. (2010). Economías de escala y rendimientos crecientes. Una aplicación en microempresas mexicanas. Nueva Época, vol. XIX, (2), p. 213-230. Centro de Investigación y Docencia Económica, México. ',
      link: 'https://www.redalyc.org/pdf/323/32315831001.pdf',
    },
    {
      referencia:
        'Tejeda, A. (2011), Mejoras de <i>Lean manufacturing</i> en los sistemas productivos. Ciencia y Sociedad, vol. XXXVI, (2), p. 276-310 Instituto Tecnológico de Santo Domingo, Santo Domingo, República Dominicana.',
    },
  ],
  glosario: [
    {
      termino: 'Control visual',
      significado:
        'Herramienta del <i>Lean manufacturing</i> que hace evidente las desviaciones del estándar. Por medio de información visual como paneles, gráficos, esquemas o normas se hacen visibles los despilfarros, dando a conocer el estándar vigente en cada instante y haciendo más fácil la supervisión del cumplimiento del estándar.',
    },
    {
      termino: 'Defecto',
      significado:
        'Producto que se desvía de las especificaciones o no satisface las expectativas del comprador, incluyendo los puntos relativos a seguridad.',
    },
    {
      termino: 'Despilfarro',
      significado:
        'Acciones que consumen tiempo, recursos y espacio; sin embargo, no contribuyen a satisfacer las necesidades del cliente. En japonés, muda.',
    },
    {
      termino: 'Espera',
      significado:
        'Es uno de los “tipos de desperdicio”. El tiempo que los empleados consumen “esperando”, ya sea por falta de material o máquinas/procesos desequilibrados.',
    },
    {
      termino: 'Flujo continuo',
      significado:
        'Es el sistema de “mover uno, producir uno”. En su forma ideal las unidades de material avanzan progresivamente de operación en operación, adquiriendo valor sin esperas, ni defectos.',
    },
    {
      termino: '<i>Just in time</i>',
      significado:
        'Radica en producir los artículos necesarios en el instante preciso y en las cantidades debidas para satisfacer la demanda, combinando al mismo tiempo flexibilidad, calidad y coste.',
    },
    {
      termino: '<i>Kaizen</i>',
      significado:
        'Significa “cambio para mejorar”, de forma que no se trata solo de un programa de reducción de costes, sino que involucra una cultura de cambio constante para evolucionar hacia mejores prácticas, lo que se conoce comúnmente como “mejora continua”.',
    },
    {
      termino: 'Muda',
      significado:
        'Palabra japonesa que significa “desperdicio”. Una actividad que consume recursos, pero no genera valor.',
    },
    {
      termino: 'Sobreproducción',
      significado:
        'Es uno de los “tipos de desperdicio”. Ocurre cuando se fabrica más cantidad de producto de lo que se necesita.',
    },
  ],
  complementario: [
    {
      texto: 'SENA Antioquia. (2015). Qué es <i>Lean manufacturing</i> ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TcEYkfKjOCs',
    },
    {
      texto:
        'Piñero, A. (2019). Historia de Toyota su filosofía de calidad, los líderes y creadores del TPS o <i>Lean manufacturing</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CqXk3lWKAq8',
    },
    {
      texto:
        'Romero, D. and González, C. (2019). Demanda del cliente como cimiento de la manufactura esbelta en la industria láctea. CICAG Revista del Centro de Investigación de Ciencias Administrativas y Gerenciales, 17 (1), p. 76-96.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8287429',
    },
    {
      texto:
        'Rajadell, M. y Sánchez, J. (2010). <i>Lean manufacturing</i>: la evidencia de una necesidad. Ediciones Díaz de Santos.',
      tipo: 'Libro',
      link:
        'http://www.ebooks7-24.com.bdigital.sena.edu.co/stage.aspx?il=3883&pg=&ed=',
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
        nombre: 'May Stefanny González',
        cargo: 'Experta temática',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Gloria Lida Álzate Suarez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Corté',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional - Santander',
      },
    ],
    gestoresRepositorio: [
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
