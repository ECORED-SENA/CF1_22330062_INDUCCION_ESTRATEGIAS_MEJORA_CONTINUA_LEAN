<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de producción 

    figure.mb-4
      img(src='@/assets/curso/tema2/img1.jpg', class='img-fluid')

    .tarjeta.bgr.p-4.p-md-4
      .row.justify-content-around.align-items-center
        .col-12.col-sm-12.col-md-12.mb-4.mb-md-0
          p Son métodos en los que a partir de la selección de la materia prima y de una variedad de actividades y recursos como la compra de maquinaria, planeación de procesos, atención al cliente, ventas y control de manufactura se articulan para producir un producto. 
    separador 

    #t_2_1.titulo-segundo.color-acento-contenido.mb-4
      h2 2.1.	Conceptualización del sistema producción Lean manufacturing

    p.mb-0 Los sistemas de producción Lean buscan la mejora de la competitividad desde el método de identificación y supresión (o reducción) de los desperdicios de los materiales y de información, conforme a LeanBox (s.f.) son apoyados en el sistema de producción Toyota, perfeccionado por esta compañía a partir de los años 60 del Siglo XX y que actualmente se demostró ser el más eficaz para la fabricación de series cortas y variadas, según la fuente citada.
    .row.justify-content-center.align-items-center.mt-5.mb-4
      .col-lg-12(data-aos="fade-down")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
          .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img2.jpg')})`}")
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down").mb-0 Cabe señalar que los sistemas de producción Lean tienen diferentes formas, tales como Lean manufacturing, producción precisa, producción esbelta, just in time (JIT) y kaizen o mejoramiento continuo, entre otras, como todo procedimiento se basa en unos principios (lógica) que se ponen en marcha mediante unas herramientas (acción) a través de una metodología (proceso de cambio), según afirma LeanBox (s.f.).
    
    .row.mb-4 
      .col-md-4(data-aos="zoom-in")
        img.p-2(src='@/assets/curso/tema2/vec1.svg' alt='AvatarTop')

    .row.mb-5.align-items-center
      .col-md-6
        p.mb-4 Los sistemas de producción generalmente se catalogan conforme con la disposición de las maquinarias y áreas dentro de las fábricas manufactureras o por las particularidades generales del propio sistema. La decisión sobre el sistema de producción es dependiente de diversos componentes, entre ellos la diversidad de productos, los tipos de pedidos, volumen de ventas, incertidumbre en la demanda y la frecuencia en los pedidos, según Tejeda (2011).
      .col-md-6
        figure
          img(src='@/assets/curso/tema2/1.png', class='img-fluid')
    br
    .titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 4
        span Sistemas de producción
    .row.mb-5.justify-content-center
      .col-lg-10.mb-5
        .row.justify-content-center(@mouseover="mostrarIndicador = false")
          .col-md-5.col-xl.mb-5.mb-xl-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/avatar1.svg' alt='AvatarTop')
              .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                .indicador--click(v-if="mostrarIndicador")
                h4 TQM (Total quality management)
                .tarjeta-numerada__contenido
                  p.mb-0 calidad total mediante la eficiencia y eficacia de la producción.

          .col-md-5.col-xl.mb-5.mb-xl-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/avatar2.svg' alt='AvatarTop')
              .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                .indicador--click(v-if="mostrarIndicador")
                h4 JIT (Just in time o justo a tiempo)
                .tarjeta-numerada__contenido
                  p.mb-0 respetar este sistema será producir solo a demanda.

          .col-md-5.col-xl.mb-5.mb-xl-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/avatar3.svg' alt='AvatarTop')
              .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                .indicador--click(v-if="mostrarIndicador")
                h4 Kaizen
                .tarjeta-numerada__contenido
                  p.mb-0 el sistema que asegura la mejora continua.
      
      .col-lg-8.mb-4
        .row.justify-content-center(@mouseover="mostrarIndicador = false")
          .col-md-5.col-xl.mb-5.mb-xl-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/avatar4.svg' alt='AvatarTop')
              .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                .indicador--click(v-if="mostrarIndicador")
                h4 TOC (Teoría de las restricciones o de las limitaciones)
                .tarjeta-numerada__contenido
                  p.mb-0 se basa en encontrar el cuello de botella para marcar el ritmo productivo de la cadena.

          .col-md-5.col-xl.mb-5.mb-xl-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/avatar5.svg' alt='AvatarTop')
              .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                .indicador--click(v-if="mostrarIndicador")
                h4 JIT (Just in time o justo a tiempo)
                .tarjeta-numerada__contenido
                  p.mb-0 respetar este sistema será producir solo a demanda.

    .row.mb-4 
      .col-md-5(data-aos="zoom-in")
        img.p-2(src='@/assets/curso/tema2/vec2.svg' alt='AvatarTop')

    .row.mb-5
      .col-md-6
        figure
          img(src='@/assets/curso/tema2/2.png', class='img-fluid')
      .col-md-6
        p Depende de varias características en cuanto a la disponibilidad de la maquinaria dispuesta en los procesos productivos de las fábricas. Asimismo, de varios factores, diversidad de productos, tipos de pedidos, volumen de ventas y frecuencia en los pedidos. 
        .tarjeta.bgr2.p-2.p-md-3
          .row.justify-content-around.align-items-center
            .col-12.col-sm-12.col-md-12.mb-3.mb-md-0
              p Los sistemas productivos pueden clasificarse según la estructura de los procesos y dependen de la disponibilidad de la maquinaria involucrada en la producción. También de otros factores como variedad de productos, tipos de pedidos, volumen de ventas y frecuencia en la toma de pedidos; de acuerdo con esto se presenta la clasificación del sistema de producción:
    .titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 5
        span Clasificación del sistema de producción
    .row.mb-5
      .col-md-12
        figure
          img(src='@/assets/curso/tema2/fig.svg')
    p.mb-4.text-center Nota. Adaptado de Tejeda (2011). https://www.redalyc.org/pdf/870/87019757005.pdf 

    .row.mb-4 
      .col-md-4(data-aos="zoom-in")
        img.p-2(src='@/assets/curso/tema2/vec3.svg' alt='AvatarTop')

    .row.mb-5
      .col-md-6
        p Según Quiroga (2019) “el proceso productivo es el conjunto de tareas y procedimientos requeridos que realiza una empresa para efectuar la elaboración de bienes y servicios”, dicho de otro modo, es una serie de operaciones y procesos necesarios que se realizan de forma planificada y sucesiva para lograr la elaboración de productos. 
        .tarjeta.bgr2.p-2.p-md-3
          .row.justify-content-around.align-items-center
            .col-12.col-sm-12.col-md-12.mb-3.mb-md-0
              p Por su parte, las etapas del proceso productivo se describen mediante el flujo de procesos, aplicando una diagramación de procesos para comprender cómo se están desarrollando las actividades utilizando una simbología para cada una de ellas. Esto se puede ver explicado en la siguiente figura:
      .col-md-6
        figure
          img(src='@/assets/curso/tema2/3.png', class='img-fluid')
      
    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 6
      span Simbología para la diagramación del flujo de procesos
    
    #t_2_2.titulo-segundo.color-acento-contenido.mb-4
      h2 2.2.	Variables y restricciones inherentes al proceso productivo


          
            
         
    

</template>

<script>
export default {
  name: 'Tema2',
  components: {
    ///
  },
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
