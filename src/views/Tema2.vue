<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de producción 

    #t_2_1.titulo-segundo.color-acento-contenido.mb-4
      h2 2.1.	Conceptualización del sistema producción Lean manufacturing

    #t_2_1.titulo-segundo.color-acento-contenido.mb-4
      h2 2.1.	Variables y restricciones inherentes al proceso productivo. 

   
          
            
         
    

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
