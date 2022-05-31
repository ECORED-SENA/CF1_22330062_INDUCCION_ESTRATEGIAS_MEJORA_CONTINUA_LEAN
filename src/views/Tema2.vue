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

    .tarjeta.bgr.p-4.p-md-4.mb-5
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

    .row.mb-4.align-items-center
      .col-md-6
        p.mb-4 Los sistemas de producción generalmente se catalogan conforme con la disposición de las maquinarias y áreas dentro de las fábricas manufactureras o por las particularidades generales del propio sistema. La decisión sobre el sistema de producción es dependiente de diversos componentes, entre ellos la diversidad de productos, los tipos de pedidos, volumen de ventas, incertidumbre en la demanda y la frecuencia en los pedidos, según Tejeda (2011).
      .col-md-6
        figure
          img(src='@/assets/curso/tema2/1.png', class='img-fluid')



    #t_2_2.titulo-segundo.color-acento-contenido.mb-4
      h2 2.2.	Variables y restricciones inherentes al proceso productivo. 

   
          
            
         
    

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
