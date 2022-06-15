<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos generales del <i>Lean manufacturing</i>

    figure.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/tema1/img1.jpg', class='img-fluid')

    .tarjeta.bgr.p-4.p-md-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-12.col-md-12.mb-4.mb-md-0
          p El modelo de fabricación esbelta, conocido como <i>Lean manufacturing</i> permite a las empresas implementar modelos de organización y producción para que sean más competitivas en los mercados globales.<br><br/>Por esto, la manufactura esbelta es una filosofía de trabajo donde el personal de una empresa se involucra y define la forma de optimización y mejora de un sistema de producción, en el cual identifican y eliminan todo tipo de “desperdicios”, en especial esos procesos u ocupaciones que utilizan más recursos de los necesarios.
    separador    

    #t_1_1.titulo-segundo.color-acento-contenido.mb-4
      h2 1.1.	Definición del <i>Lean manufacturing</i>

    .row.mb-4(data-aos="fade-left")
      .col-12.col-md-12
        figure
          .video
            iframe(width="942" height="530" src="https://www.youtube.com/embed/pTgSyydCva8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4(data-aos="fade-up") El concepto de <i>lean manufacturing</i> se refiere a la manufactura esbelta, este sistema nace en la primera mitad del siglo XX y fue implementado en la gerencia de empresas como Toyota, en la que se creó una filosofía donde se promueve el mejoramiento continuo en los procesos de producción, con el objetivo de reducir costos y eliminar actividades que no agreguen valor. 

    .row(data-aos="fade-up")
      .col-md-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img2.jpg', class='img-fluid' style="width: 420px")

      .col-md-8  
        p.mb-4 Por otro lado, este concepto de manufactura esbelta contempla no solo reducir costos en los procesos productivos, sino que además abarca las actividades de dirección, comercialización y financiación, eliminando las operaciones que son innecesarias y que no se requieren. Entonces, el principal objetivo de este sistema es el de minimizar el desperdicio (todo aquello que no agregue valor y por lo tanto, aquello por lo que el cliente no esté dispuesto a pagar). Cabe señalar que mediante la utilización de un grupo de “herramientas y técnicas” que ayudan a la identificación y eliminación de desperdicios o defectos (mudas) permite reducir costos para la empresa entre las cuales se destacan: 
        .cajon.color-acento-contenido.p-4.mb-4.col-12
          p La herramienta y técnica de mejora continua (<i>kaizen</i>), metodologías de solución de problemas como 5 porqués y los sistemas a prueba de errores (<i>poka yokes</i>). En un segundo enfoque, se considera el “flujo de producción” (<i>mura</i>) a través del sistema y la reducción de desperdicios, de acuerdo con González (2007), los cuales aplican métodos para mejorar el flujo como son la producción nivelada (reducción de <i>muri</i>), <i>kanban</i> o la tabla de heijunka o de control de producción, conforme con la fuente citada.<br><br/>Por esto, la implementación de diferentes herramientas son claves para la competitividad de las empresas y su objetivo de competir con éxito en los mercados, por lo que se deben proyectar los siguientes objetivos, ver figura: 

    p.mb-5(data-aos="fade-up") Por esto, la implementación de diferentes herramientas son claves para la competitividad de las empresas y su objetivo de competir con éxito en los mercados, por lo que se deben proyectar los siguientes objetivos, ver figura: 

    .bg_grad-02
      .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-up")
        h5 Figura 1
        span <i>Objetivos de la gestión del Lean manufacturing</i>

      .row.justify-content-center(data-aos="fade-up")
        .col-md-8 
          figure.mb-4
            img(src='@/assets/curso/tema1/fig1.png', class='img-fluid')
        p.mb-4.text-center Nota. Información tomada del Fondo Social Europeo (2022). 
    separador     
        
    .bg_grad-03        
      #t_1_2.titulo-segundo.color-acento-contenido.mb-4
        h2 1.2.	Orígenes y antecedentes 

      .row.justify-content-center.align-items-center.mt-5.mb-5      
        .col-lg-12(data-aos="fade-down")
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
            .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img3.jpg')})`}")
            .bloque-texto-g__texto.p-4
              p(data-aos="fade-down").mb-0 El <i>lean manufacturing</i> es un grupo de filosofías administrativas e industriales procedentes de Japón, que se inició en el año 1976, según Olaya y Romero (2015), los Japoneses Eiji Toyoda y Taichi Ohno, de la Toyota Motors Company utilizaron el concepto de <i>lean manufacturing</i>, el cual se basa en técnicas para mejorar, optimizar y maximizar las oportunidades de mejora que se presenten dentro de los procesos. El término <i>lean</i> fue acuñado por un grupo de estudio del Massachusetts Institute of Technology para analizar en el nivel mundial los métodos de manufactura de las empresas de la industria automotriz. Lo anterior conforme a Wilches, Cabarcas, Lucuara y González (2013).

    p.mb-5(data-aos="fade-up") Sabiendo lo anterior, a continuación, se invita a revisar los principales autores que dieron origen al sistema de producción <i>lean manufacturing</i>, sus aportes en este concepto y su utilidad en el sector industrial: 

    .row.justify-content-center.align-items-center(data-aos="fade-up")
      .col-md-10
        LineaTiempoB.color-acento-contenido.mb-5.p-5(:datos="datosLineaTiempoB")(style='background-color: #F6F6F6')
    separador 

    #t_1_3.titulo-segundo.color-acento-contenido.mb-4
      h2 1.3.	Estructura del sistema <i>lean</i>

    .row.mb-5(data-aos="fade-left")
      .col-md-7
        p.mb-4 El sistema <i>lean</i> contempla un alto compromiso en la cultura empresarial de las organizaciones que decidan implementarlos. En estas condiciones es difícil hacer un esquema sencillo que refleje los diversos pilares, fundamentos, principios, técnicas y procesos que contempla y, que no constantemente son homogéneos, teniendo presente que se manejan técnicas y conceptos que varían según la fuente consultada.
        .cajon.color-acento-contenido.p-4.mb-4.col-12
          p Se invita a revisar el siguiente esquema que representa la filosofía del <i>lean manufacturing</i>, sus técnicas y herramientas, se representa en el siguiente gráfico utilizando una estructura en forma de una casa: 
      .col-md-5
        figure.mb-4
            img(src='@/assets/curso/tema1/img4.jpg', class='img-fluid')
    
    .bg_grad-04
      .row(data-aos="fade-down")
        .col-md-7
          figure.mb-2
            img(src='@/assets/curso/tema1/fig2.svg', class='img-fluid' style="width: 706px")
        .col-md-5
          figure.mb-2.py-5
            img(src='@/assets/curso/tema1/1.png', class='img-fluid' style="width: 515px")

    p.mb-4(data-aos="fade-down") De acuerdo con la estructura anterior, se revisarán las herramientas y técnicas empleadas en el sistema de manufactura esbelta y su funcionalidad dentro de los procesos productivos de las empresas; estas se presentan a continuación:

    .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-down")
        .col-lg-12(data-aos="fade-down")
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
            .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img5.jpg')})`}")
            .bloque-texto-g__texto.p-4
              h5(data-aos="fade-down") Herramientas y técnicas de la manufactura esbelta<br><br/>
              p Las empresas de diferentes sectores materializan la implementación del <i>Lean manufacturing</i> mediante la aplicación de una gran variedad de técnicas, que son muy diferentes entre sí. Estas técnicas se pueden implementar de forma independiente o conjunta y son utilizadas en herramientas de diagnóstico, operativa y de seguimiento. 
    
    p.mb-4(data-aos="fade-down") Vea las diferentes herramientas y técnicas que se implementan en los sistemas productivos. Se invita a revisar y comprender su uso y aplicabilidad en las empresas:

    .d-flex.flex-wrap.mb-5(data-aos="fade-down")
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.linea-tiempo-1
          .row(numero="1" titulo="Herramientas de diagnóstico") 
            p <b>Técnica VSM-Mapeo</b> - mapeo del flujo de valor
            p comprende el flujo para que un producto o servicio llegue al comprador
          
          .row(numero="2" titulo="Herramienta de seguimiento") 
            h5 Técnica gestión visual 
            p Conjunto de técnicas de control y comunicación visual que ayudan a la estandarización de procesos y políticas, atractivos a la vista y fáciles de entender.
            h5 Técnica KPIs
            p Indicadores claves de desempeño

          .row(numero="3" titulo="Herramientas operativas") 
            h5 Técnica 5S técnica 5S 
            p Utilizadas para la mejora de las condiciones de trabajo en la empresa, a través de una excelente organización, orden y limpieza en el puesto de trabajo.
            h5 Técnica <i>YIDOKA</i>
            p Es la automatización con toque humano.
            h5 Técnica <i>POKA YOKE</i>
            p Es una técnica para evitar los simples errores humanos en el trabajo.
            h5 Técnica <i>KAIZEN</i>
            p La búsqueda incesante de mejores niveles de desempeño en materia de calidad, costos, tiempos de respuesta, velocidad de ciclos, productividad, seguridad y flexibilidad, entre otros.


      .col-lg-5.order-1.order-lg-2.px-0.px-lg-4.mx-auto
        img(src="@/assets/curso/tema1/img6.jpg" style="max-width: 505px").mx-auto.mb-4.mb-lg-0

    .bg_grad-05
      .row.align-items-center.mb-4
        .col-md-6(data-aos="fade-right")
          figure.mb-2.py-5
            img(src='@/assets/curso/tema1/2.png', class='img-fluid' style="width: 515px")
        .col-md-6(data-aos="fade-left")
          p.mb-4 Por otro lado, hay que resaltar la técnica con enfoque kaizen, término japonés que significa “cambio para mejorar”. Se basa en dos pilares fundamentales que son los equipos de trabajo y la mejora de los procesos productivos, para lograr la aplicación de esta técnica es importante contar con la integración de diferentes áreas de la empresa con sus colaboradores o talento humano disponible.
          .bloque-texto-b.color-primario.p-2.pb-xl-5.cajon-comillas-color.mx-auto.mb-4(style="color: #D2E1F1")
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0 “Trabajo en equipo: los resultados positivos de la aplicación, las distintas herramientas y técnicas que da <em>lean</em> no son alcanzables si no se cuenta con un factor fundamental: el trabajo en grupo”
              i.fas.fa-quote-right.float-end
          p.mb-4 A continuación, se presenta en la figura los aspectos fundamentales que deben tener presente las empresas para implementar una técnica con enfoque <i>kaizen</i>: 

      .titulo-sexto.color-acento-contenido.mb-5
          h5 Figura 2
          span Equipo de trabajo

      .row.justify-content-center.mb-2(data-aos="fade-down")
        .col-md-7.mb-4
          figure
            img(src='@/assets/curso/tema1/fig3.svg', class='img-fluid')
        .col-md-5
          .tarjeta.bgr4.p-4.p-md-4.mb-5
            .row.justify-content-around.align-items-center
              .col-12.col-sm-12.col-md-12.mb-4.mb-md-0
                p Los equipos de trabajo son un valor fundamental en la cultura de las organizaciones que conducen a la excelencia en las operaciones basadas principalmente en la motivación y comprensión de las necesidades de sus colaboradores. Es importante motivar y cultivar el liderazgo y el trabajo en equipo, para proyectar un plan y de esta forma conservar interacciones duraderas, estratégicas y beneficiosas con consumidores, proveedores y grupos de interés.
    separador 

    #t_1_4.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade-right")
      h2 1.4.	Beneficios de la implantación <i>Lean</i>

    p.mb-4(data-aos="fade-right") En este momento un gran número de empresas está descubriendo los beneficios que esta metodología de <i>Lean manufacturing</i> brinda al enfocarse en generar valor mediante la atracción del cliente, en la mejora del producto y de los procesos productivos. Por esto se centra en la eliminación de residuos en etapas de transporte, inventario, movimientos, espera, sobreproducción y deterioro. El impacto que estas etapas ocasionan está direccionada a los costos de producción y todas las actividades que no aportan valor añadido al producto final.<br><br/>¿Sabe cuáles son los beneficios que obtienen las empresas que implementan el <i>Lean manufacturing</i>? Pues son los siguientes:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 3
          span Beneficios de la implementación <i>Lean</i> en las empresas
    .row.justify-content-center(data-aos="fade-left")
        .col-md-12
          figure.mb-4
            img(src='@/assets/curso/tema1/fig4.svg', class='img-fluid')
    separador 

    .bg_grad-06
      #t_1_5.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade-right")
        h2 1.5.	Principios del sistema <i>Lean</i>
      .row(data-aos="fade-right")
        p.mb-4 El <i>lean manufacturing</i> se fundamenta en principios que contribuyen a obtener resultados excelentes en el tiempo adecuado y el lugar indicado, siempre con la mejor calidad posible. Pero ¿cuántos y cuáles son esos principios? Son 5 principios del sistema <i>Lean manufacturing</i> y su importancia en la filosofía de las empresas se describe a continuación: 
      
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-4
          h5 5 Principios del sistema <i>Lean manufacturing</i>  

      .row(data-aos="fade-down")
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .col-md-11.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop')
              .tarjeta.color-primario.tema-1
                .p-4
                  h4.text-center 1. Generar valor
                  p.text-center El valor está en lograr resolver o satisfacer la necesidad del cliente y que esté dispuesto a pagar por el producto o servicio entregado, eliminando todas esas actividades o procesos que no aportan valor y que se consideran como mudas o desperdicios.  

          .col-md-11.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/7.svg' alt='AvatarTop')
              .tarjeta.color-primario.tema-1
                .p-4
                  h4.text-center 2. Entender la cadena de valor
                  p.text-center Se debe tener claridad de las actividades que generan valor, con el fin de ofrecer al cliente lo que pide. El objetivo es identificar los cuellos de botella que ocasionan desperdicios. 

          .col-md-11.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop')
              .tarjeta.color-primario.tema-1
                .p-4
                  h4.text-center 3. Flujo de trabajo continuo
                  p.text-center Se debe evitar los cuellos de botella y las interrupciones,  esto se logra si se divide en grupos pequeños de trabajo.  

          .col-md-11.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop')
              .tarjeta.color-primario.tema-1
                .p-4
                  h4.text-center 4. Creación sistema de trabajo específico
                  p.text-center Se busca optimizar los procesos y recursos de los equipos de trabajo, haciéndolos mucho más rápido y con menos esfuerzo.

          .col-md-11.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop')
              .tarjeta.color-primario.tema-1
                .p-4
                  h4.text-center 5. Mejora continua
                  p.text-center Se debe comprometer y asegurarse de que los empleados participen en la mejora continua de los procesos de la empresa.

      .row
        p.mb-4 Como complemento se invita a revisar el siguiente video que permitirá conceptualizar los principios del sistema <i>Lean</i> en la empresa:
    
      .row(data-aos="fade-right")
        .col-12.col-md-12
          figure
            .video
              iframe(width="942" height="530" src="https://www.youtube.com/embed/zkapUh4jVVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_1_6.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade-right")
      h2 1.6.	Pensamiento <i>Lean</i>

    p.mb-4(data-aos="fade-right") Apunta hacia la reducción de costos que se logra a través de las economías de escala, desafío que implica elevar los niveles de productividad y competitividad, dado que la reducción de los costos unitarios depende del incremento de la capacidad productiva en una planta manufacturera; es por ello que las empresas tratan de optimizar sus escalas de producción en el punto donde el costo unitario es mínimo, conforme lo señalan Ramírez, Mungaray, Ramírez y Texis (2010). Esta reflexión determina el pensamiento <I>lean</I>  que involucra el mejoramiento continuo de los procesos productivos.

    .row.justify-content-center.align-items-center.mt-5.mb-4(data-aos="fade-right")
        .col-lg-12(data-aos="fade-down")
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
            .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img7.jpg')})`}")
            .bloque-texto-g__texto.p-4
              p(data-aos="fade-down").mb-0 El reto del pensamiento <i>lean</i> implica mejorar la capacidad para generar economías de crecimiento donde los costos asociados a la cadena de producción disminuyan en la medida que aumente el número de productos que se fabrican en un tiempo determinado, esto debe reflejarse en los costos aumentando los rendimientos y creando unas competencias empresariales. 
    
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '1878',
        texto:
          '<b>Frederick Winslow Taylor</b><br><br/> Pionero en el desarrollo del concepto de manufactura esbelta, inició las primeras bases de la organización de la producción mediante la aplicación del método científico a los procesos, tiempos, equipos, personas y movimientos.',
        icono: require('@/assets/curso/tema1/1.svg'),
      },
      {
        titulo: '1890',
        texto:
          '<b>Sakichi Toyoda</b><br><br/>Permitió separar el hombre de la máquina.<br>Un solo operario podría supervisar varias máquinas.<br>Mejora en la productividad.',
        icono: require('@/assets/curso/tema1/2.svg'),
      },
      {
        titulo: '1908',
        texto:
          '<b>Henry Ford</b><br><br/>Introducción de las primeras cadenas de automóviles, haciendo uso intensivo de la normalización de productos, utilización de máquinas para tareas elementales, especialización del trabajo y la formación especializada.',
        icono: require('@/assets/curso/tema1/3.svg'),
      },
      {
        titulo: '1940',
        texto:
          '<b>Taiicho Ohno</b><br><br/>Permitió separar el hombre de la máquina.<br>Un solo operario podría supervisar varias máquinas.<br>Mejora en la productividad.',
        icono: require('@/assets/curso/tema1/4.svg'),
      },
      {
        titulo: '1950',
        texto:
          '<b>Henry Ford</b><br><br/>Estudia la teoría científica de Taylor y el estudio de tiempos y movimientos de los Gilbreth.<br>Transforma las operaciones productivas en flujos continuos para entregar al cliente lo que requería, disminuyendo los tiempos de preparación.<br>Al amparo del Jit se fueron creando otras técnicas como Kanban, Jidoka, Poka –Joke.',
        icono: require('@/assets/curso/tema1/5.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
