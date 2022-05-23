<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conceptos de desperdicios (mudas) 

    #t_3_1.titulo-segundo.color-acento-contenido.mb-4
      h2 3.1.	Tipos de mudas o desperdicios de la filosofía de la manufactura esbelta (Lean) 
    
    #t_3_2.titulo-segundo.color-acento-contenido.mb-4
      h2 3.2.	Características de los desperdicios}

    #t_3_3.titulo-segundo.color-acento-contenido.mb-4
      h2 3.3.	Causas posibles y acciones Lean

</template>

<script>
export default {
  name: 'Tema3',
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
