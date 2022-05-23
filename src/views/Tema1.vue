<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos generales del Lean manufacturing

    figure.mb-4
      img(src='@/assets/curso/tema1/img1.jpg', class='img-fluid')

    .tarjeta.bgr.p-4.p-md-4.mb-5
      .row.justify-content-around.align-items-center
        .col-12.col-sm-12.col-md-12.mb-4.mb-md-0
          p El modelo de fabricación esbelta, conocido como Lean manufacturing permite a las empresas implementar modelos de organización y producción para que sean más competitivas en los mercados globales.<br><br/>Por esto, la manufactura esbelta es una filosofía de trabajo donde el personal de una empresa se involucra y define la forma de optimización y mejora de un sistema de producción, en el cual identifican y eliminan todo tipo de “desperdicios”, en especial esos procesos u ocupaciones que utilizan más recursos de los necesarios.
    separador    

    #t_1_1.titulo-segundo.color-acento-contenido.mb-4
      h2 1.1.	Definición del Lean manufacturing 

    .row.mb-4
      .col-12.col-md-12
        figure
          .video
            iframe(width="942" height="530" src="https://www.youtube.com/embed/oJRhtnimo6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    p.mb-4 El concepto de Lean manufacturing se refiere a la manufactura esbelta, este sistema nace en la primera mitad del Siglo XX y fue implementado en la gerencia de empresas como Toyota, en la que se creó una filosofía donde se promueve el mejoramiento continuo en los procesos de producción, con el objetivo de reducir costos y eliminar actividades que no agreguen valor. 

    .row 
      .col-md-4
        figure.mb-4
          img(src='@/assets/curso/tema1/img2.jpg', class='img-fluid' style="width: 420px")

      .col-md-8  
        p.mb-4 Por otro lado, este concepto de manufactura esbelta contempla no solo reducir costos en los procesos productivos, sino que además abarca las actividades de dirección, comercialización y financiación, eliminando las operaciones que son innecesarias y que no se requieren. Entonces, el principal objetivo de este sistema es el de minimizar el desperdicio (todo aquello que no agregue valor y por lo tanto, aquello por lo que el cliente no esté dispuesto a pagar). Cabe señalar que mediante la utilización de un grupo de “Herramientas y técnicas” que ayudan a la identificación y eliminación de desperdicios o defectos (mudas) permite reducir costos para la empresa entre las cuales se destacan: 
        .cajon.color-acento-contenido.p-4.mb-4.col-12
          p La herramienta y técnica de mejora continua (kaizen), metodologías de solución de problemas como 5 porqués y los sistemas a prueba de errores (poka yokes). En un segundo enfoque, se considera el “flujo de producción” (mura) a través del sistema y la reducción de desperdicios, de acuerdo con González (2007), los cuales aplican métodos para mejorar el flujo como son la producción nivelada (reducción de muri), kanban o la tabla de heijunka o de control de producción, conforme con la fuente citada.<br><br/>Por esto, la implementación de diferentes herramientas son claves para la competitividad de las empresas y su objetivo de competir con éxito en los mercados, por lo que se deben proyectar los siguientes objetivos, ver figura: 

    p.mb-5 Por esto, la implementación de diferentes herramientas son claves para la competitividad de las empresas y su objetivo de competir con éxito en los mercados, por lo que se deben proyectar los siguientes objetivos, ver figura: 

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 1
      span Estructura de una base de datos

    

    #t_1_2.titulo-segundo.color-acento-contenido.mb-4
      h2 1.2.	Orígenes y antecedentes 

    #t_1_3.titulo-segundo.color-acento-contenido.mb-4
      h2 1.3.	Estructura del sistema Lean

    #t_1_4.titulo-segundo.color-acento-contenido.mb-4
      h2 1.4.	Beneficios de la implantación Lean 

    #t_1_5.titulo-segundo.color-acento-contenido.mb-4
      h2 1.5.	Principios del sistema Lean 

    #t_1_6.titulo-segundo.color-acento-contenido.mb-4
      h2 1.6.	Pensamiento Lean

     
    
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
