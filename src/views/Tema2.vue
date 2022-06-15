<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de producción 

    figure.mb-4(data-aos="fade-down")
      img(src='@/assets/curso/tema2/img1.jpg', class='img-fluid')

    .tarjeta.bgr.p-4.p-md-4(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-12.col-md-12.mb-4.mb-md-0
          p Son métodos en los que a partir de la selección de la materia prima y de una variedad de actividades y recursos como la compra de maquinaria, planeación de procesos, atención al cliente, ventas y control de manufactura se articulan para producir un producto. 
    separador 

    #t_2_1.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade-right")
      h2 2.1.	Conceptualización del sistema producción <i>Lean manufacturing</i>

    p.mb-5(data-aos="fade-right") Los sistemas de producción <i>Lean</i> buscan la mejora de la competitividad desde el método de identificación y supresión (o reducción) de los desperdicios de los materiales y de información, conforme a LeanBox (s.f.) son apoyados en el sistema de producción Toyota, perfeccionado por esta compañía a partir de los años 60 del Siglo XX y que actualmente se demostró ser el más eficaz para la fabricación de series cortas y variadas, según la fuente citada.
    
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-12(data-aos="fade-down")
        .bloque-texto-g.tema-2.color-acento-contenido.p-3.p-sm-4.p-md-5.position-relative
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema2/img2.jpg')})`}"
          )
            .imagen-superior.position-absolute(style='bottom:0px ; left: -0%' ): img(src='@/assets/curso/tema2/flota.png')
          .bloque-texto-g__texto.p-5
            p.mb-0 Cabe señalar que los sistemas de producción Lean tienen diferentes formas, tales como <i>Lean manufacturing</i>, producción precisa, producción esbelta, <i>just in time (JIT)</i> y <i>kaizen</i> o mejoramiento continuo, entre otras, como todo procedimiento se basa en unos principios (lógica) que se ponen en marcha mediante unas herramientas (acción) a través de una metodología (proceso de cambio), según afirma LeanBox (s.f.).

    .bg_grad-08
      .row.mb-4 
        .col-md-4(data-aos="zoom-in")
          img.p-2(src='@/assets/curso/tema2/vec1.svg' alt='AvatarTop')

      .row.mb-5.align-items-center(data-aos="fade-right")
        .col-md-6
          p.mb-4 Los sistemas de producción generalmente se catalogan conforme con la disposición de las maquinarias y áreas dentro de las fábricas manufactureras o por las particularidades generales del propio sistema. La decisión sobre el sistema de producción es dependiente de diversos componentes, entre ellos la diversidad de productos, los tipos de pedidos, volumen de ventas, incertidumbre en la demanda y la frecuencia en los pedidos, según Tejeda (2011).
          p Por su parte, Andreu (2021) en materia del <i>Lean manufacturing</i> indica que esta filosofía presenta cinco sistemas de producción, que se relacionan a continuación:
        .col-md-6
          figure
            img(src='@/assets/curso/tema2/1.png', class='img-fluid')
      br
      .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          h5 Figura 4
          span Sistemas de producción
      .row.mb-5.justify-content-center
        .col-lg-8.mb-5
          .row.justify-content-center(@mouseover="mostrarIndicador = false")
            .col-md-5.col-xl.mb-5.mb-xl-0.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/avatar1.svg' alt='AvatarTop')
                .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                  .indicador--click(v-if="mostrarIndicador")
                  h4 TQM (<i>Total quality management</i>)
                  .tarjeta-numerada__contenido
                    p.mb-0 Calidad total mediante la eficiencia y eficacia de la producción.

            .col-md-5.col-xl.mb-5.mb-xl-0.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/avatar2.svg' alt='AvatarTop')
                .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                  .indicador--click(v-if="mostrarIndicador")
                  h4 JIT (<i>Just in time</i> o justo a tiempo)
                  .tarjeta-numerada__contenido
                    p.mb-0 Respetar este sistema será producir solo a demanda.

            .col-md-5.col-xl.mb-5.mb-xl-0.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/avatar3.svg' alt='AvatarTop')
                .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                  .indicador--click(v-if="mostrarIndicador")
                  h4 <i>Kaizen</i>
                  .tarjeta-numerada__contenido
                    p.mb-0 El sistema que asegura la mejora continua.
        
        .col-lg-6.mb-5
          .row.justify-content-center(@mouseover="mostrarIndicador = false")
            .col-md-5.col-xl.mb-5.mb-xl-0.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/avatar4.svg' alt='AvatarTop')
                .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                  .indicador--click(v-if="mostrarIndicador")
                  h4 TOC (Teoría de las restricciones o de las limitaciones)
                  .tarjeta-numerada__contenido
                    p.mb-0 Se basa en encontrar el cuello de botella para marcar el ritmo productivo de la cadena.

            .col-md-5.col-xl.mb-5.mb-xl-0.mb-5
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/avatar5.svg' alt='AvatarTop')
                .tarjeta-numerada.text-center.tarjeta_t5.p-4.shadow.ind--click_tarjetas(data-aos="fade-right")
                  .indicador--click(v-if="mostrarIndicador")
                  h4 Reingeniería de procesos
                  .tarjeta-numerada__contenido
                    p.mb-0 Perfecciona la mejora a gran escala.

      .row.mb-4(data-aos="fade-left")
        .col-md-5(data-aos="zoom-in")
          img.p-2(src='@/assets/curso/tema2/vec2.svg' alt='AvatarTop')

      .row.mb-5(data-aos="fade-left")
        .col-md-6
          figure.mb-3
            img(src='@/assets/curso/tema2/2.png', class='img-fluid')
        .col-md-6
          p Depende de varias características en cuanto a la disponibilidad de la maquinaria dispuesta en los procesos productivos de las fábricas. Asimismo, de varios factores, diversidad de productos, tipos de pedidos, volumen de ventas y frecuencia en los pedidos. 
          .tarjeta.bgr2.p-2.p-md-3
            .row.justify-content-around.align-items-center
              .col-12.col-sm-12.col-md-12.mb-3.mb-md-0
                p Los sistemas productivos pueden clasificarse según la estructura de los procesos y dependen de la disponibilidad de la maquinaria involucrada en la producción. También de otros factores como variedad de productos, tipos de pedidos, volumen de ventas y frecuencia en la toma de pedidos; de acuerdo con esto se presenta la clasificación del sistema de producción:
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
        h5 Figura 5
        span Clasificación del sistema de producción
    .row.mb-5(data-aos="fade-right")
      .col-md-12
        figure
          img(src='@/assets/curso/tema2/fig.svg')
    p.mb-4.text-center(data-aos="fade-right") Nota. Adaptado de Tejeda (2011). https://www.redalyc.org/pdf/870/87019757005.pdf 

    .row.mb-4(data-aos="zoom-in") 
      .col-md-4
        img.p-2(src='@/assets/curso/tema2/vec3.svg' alt='AvatarTop')

    .row.mb-5(data-aos="zoom-in")
      .col-md-6
        p Según Quiroga (2019) “el proceso productivo es el conjunto de tareas y procedimientos requeridos que realiza una empresa para efectuar la elaboración de bienes y servicios”, dicho de otro modo, es una serie de operaciones y procesos necesarios que se realizan de forma planificada y sucesiva para lograr la elaboración de productos. 
        .tarjeta.bgr2.p-2.p-md-3.mb-4
          .row.justify-content-around.align-items-center
            .col-12.col-sm-12.col-md-12.mb-3.mb-md-0
              p Por su parte, las etapas del proceso productivo se describen mediante el flujo de procesos, aplicando una diagramación de procesos para comprender cómo se están desarrollando las actividades utilizando una simbología para cada una de ellas. Esto se puede ver explicado en la siguiente figura:
      .col-md-6
        figure
          img(src='@/assets/curso/tema2/3.png', class='img-fluid')
      
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in")
      h5 Figura 6
      span Simbología para la diagramación del flujo de procesos
    
    .fraja.mb-0(data-aos="zoom-in")
    .tabla-editada2.mb-2(data-aos="zoom-in")
      table
        thead
          tr.text-center
            th.text-center.p-4 SÍMBOLO
            th.text-center.p-4 SIGNIFICADO
            th.text-center.p-4 SIGNIFICADO
            th.text-center.p-4 SIGNIFICADO
        tbody
          tr.p-5(style='background-color: #F6F6F6')
            td.align-items-center.justify-content-center
              figure.p-4
                img(src='@/assets/curso/tema2/4.png', class='img-fluid' style="width: 130px")
            td.text-center <b>Terminal:</b> indica el inicio o la terminación del flujo del proceso.
            td.align-items-center.justify-content-center
              figure.p-5
                img(src='@/assets/curso/tema2/9.png', class='img-fluid' style="width: 100px")
            td.text-center <b>Actividad:</b> representa la actividad llevada a cabo en el proceso.
          tr.p-5
            td.text-center
              figure.p-4
                img(src='@/assets/curso/tema2/5.png', class='img-fluid' style="width: 113px")
            td.text-center <b>Decisión:</b> señala un punto en el flujo donde se produce una bifurcación del tipo  “sí”-”no”.
            td.text-center
              figure.p-5
                img(src='@/assets/curso/tema2/10.png', class='img-fluid' style="width: 113px")
            td.text-center <b>Documento:</b> documento utilizado en el proceso.
          tr.p-5(style='background-color: #F6F6F6')
            td.text-center
              figure.p-4
                img(src='@/assets/curso/tema2/6.png', class='img-fluid' style="width: 113px")
            td.text-center <b>Multidocumento:</b> refiere un conjunto de documentos, por ejemplo, un expediente.
            td.text-center
              figure.p-5
                img(src='@/assets/curso/tema2/11.png', class='img-fluid' style="width: 93px")
            td.text-center <b>Inspección/firma:</b> aplicado en aquellas acciones que requieren de supervisión.
          tr.p-5
            td.text-center
              figure.p-4
                img(src='@/assets/curso/tema2/7.png', class='img-fluid' style="width: 125px")
            td.text-center <b>Conector de un proceso:</b> conexión o enlace con otro proceso, en el que continúa el diagrama de flujo, por ejemplo, un subproceso.
            td.text-center
              figure.p-5
                img(src='@/assets/curso/tema2/12.png', class='img-fluid' style="width: 92px")
            td.text-center <b>Archivo:</b> se utiliza para reflejar la acción de archivo de un documento o expediente.
          tr.p-5(style='background-color: #F6F6F6')
            td.text-center
              figure.p-4
                img(src='@/assets/curso/tema2/8.png', class='img-fluid' style="width: 112px")
            td.text-center <b>Base de datos:</b> empleada para representar la grabación de datos.
            td.text-center
              figure.p-5
                img(src='@/assets/curso/tema2/13.png', class='img-fluid' style="width: 130px")
            td.text-center <b>Línea de flujo:</b> indica el sentido del flujo del proceso.      

    p.mb-2.text-center(data-aos="zoom-in") Nota. Adaptado de Tejeda (2011). https://www.redalyc.org/pdf/870/87019757005.pdf 
    separador 

    .bg_grad-07
      #t_2_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade-right")
        h2 2.2.	Variables y restricciones inherentes al proceso productivo

      p.mb-4(data-aos="fade-right") Conforme lo señala Quintero (2016) las variables críticas del proceso poseen interacción directa con las variables críticas del producto, por lo cual cobra trascendencia el categorizar su grado de criticidad con el propósito de conceptualizar el tipo y nivel de control de todas estas variables, así: 
            
      .row.mb-5(data-aos="zoom-in")
        .col-md-6.col-12.mb-4
          .tarjeta.bgr3.p-4.p-md-4
            .row.justify-content-around.align-items-center
              .col-12.col-sm-12.col-md-12.mb-4.mb-md-0
                ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    span <b>Variables críticas primarias:</b> se debe realizar un control oportuno de las variables que generan impacto en cada punto del proceso
                  li
                    i.fas.fa-circle
                    span <b>Variables críticas secundarias:</b> analizar la relación de las variables identificadas en las zonas de control, para evitar que algunos criterios queden identificados como variables críticas primarias.
                  li
                    i.fas.fa-circle
                    span <b>Variable crítica del proceso:</b> lograr estabilidad en las variables del producto, controlando e inspeccionando el proceso en cada punto. 

                  li
                    i.fas.fa-circle
                    span <b>Variable crítica de producto:</b> estas variables solo se pueden inspeccionar con criterios de aceptación o rechazo, no es un defecto, es la condición o parte del producto en la que puede haber variabilidad en su condición estética o funcional.
                  
        .col-md-6.col-12.mb-4    
          .tarjeta.bgr3.p-4.p-md-4
            .row.justify-content-around.align-items-center
              .col-12.col-sm-12.col-md-12.mb-4.mb-md-0
                ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    span <b>Criterio de control:</b> se refiere a la norma o especificación técnica que se debe cumplir.
                  li
                    i.fas.fa-circle
                    span <b>Tipo de control:</b> se refiere a la forma o medio que se utilizará para el control, por ejemplo, gráficos de precontrol, seguimiento con registro puntual en libros, entre otros. 
                  li
                    i.fas.fa-circle
                    span <b>Grado de control:</b> se refiere a la exigencia y rigurosidad impuesta en el control, por ejemplo, medir los criterios de intervalo de exigencia, entre otros.
              .col-md-2.col-7
                figure.f
                  img(src='@/assets/curso/tema2/vec4.svg', class='img-fluid')

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
