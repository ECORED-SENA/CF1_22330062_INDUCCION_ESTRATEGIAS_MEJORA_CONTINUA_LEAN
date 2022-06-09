<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.color-white
      h1 Introducción
    
    .bg_grad-01(data-aos="fade-down")
      p.mb-3.mb-md-5 Se da la bienvenida al estudio del componente formativo <b>“Manufactura esbelta y mudas del proceso”</b>. Para comenzar, se invita a explorar el recurso que se muestra a continuación: 

    
      .row(data-aos="fade-down")
        .col-12.col-md-12
          figure
            .video
              iframe(width="942" height="530" src="https://www.youtube.com/embed/oJRhtnimo6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
