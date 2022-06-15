<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conceptos de desperdicios (mudas) 


    figure.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/tema3/1.jpg', class='img-fluid')
    .row.align-items-center(data-aos="zoom-in")
      .col-md-6.mb-4
        .tarjeta.bgr.p-4.p-md-4
          .row.justify-content-around.align-items-center
            .col-12.col-sm-12.col-md-12.mb-4.mb-md-0
              p Las empresas se pueden enfrentar constantemente a una serie de errores cometidos en las actividades de sus colaboradores y en los procesos productivos, lo que ocasiona que se pierda potencial y generen desperdicio que puede afectar la productividad y competitividad de la organización.
      .col-md-6
        .bloque-texto-b.color-secundario.cajon-comillas-color.col-xl-12.mx-auto
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #35B5D5")
            h2.mb-0 Muda es todo ‘desperdicio’ u ‘obstáculo’, aquello que no aporta ‘valor añadido’, que no está organizado con lo que el cliente está dispuesto a pagar.             
            i.fas.fa-quote-right.float-end(style="color: #35B5D5")
    separador 

    #t_3_1.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade-right")
      h2 3.1.	Tipos de mudas o desperdicios de la filosofía de la manufactura esbelta (<i>Lean</i>) 

    p.mb-4(data-aos="fade-right") Según González Correa (2007), citado por Quiñones y Rojas (2020) este concepto de mudas es utilizado en el TPS (sistema de producción Toyota) que permite identificar los desperdicios que deben ser eliminados, estos son:   

    .row.mb-4(data-aos="zoom-in")
      .col-12.col-md-12
        figure
          .video
            iframe(width="942" height="530" src="https://www.youtube.com/embed/oJRhtnimo6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador 

    #t_3_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade-right")
      h2 3.2.	Características de los desperdicios
    
    p.mb-4(data-aos="fade-right") Se presentan en las diferentes actividades o procesos que desarrolla la empresa y estas se fundamentan en el concepto de “muda” que es una expresión japonesa que hace referencia a la torpeza, inercia, residuos y despilfarro en la cadena productiva.<br><br/>Partiendo de la definición de muda que se desarrolló inicialmente en el <i>Lean manufacturing</i> se presenta a continuación, los tipos de desperdicios con sus características y particularidades que se dan en los diferentes procesos productivos del sector industrial. 

    .fraja2.mb-0(data-aos="zoom-in")
    .tabla-editada3.mb-4(data-aos="zoom-in")
      table
        thead
          tr.text-center
            th.text-center.p-4 Muda
            th.text-center.p-4 Definición
            th.text-center.p-4 Características
        tbody
          tr(style='background-color: #F6F6F6')
            td.text-center.p-0.mb-0
              figure
                img(src='@/assets/curso/tema3/2.jpg', class='img-fluid')
            td.px-md-4.px-3 Ocurre una vez que se fabrica más cantidad del producto del que es necesario, además se da una vez que el equipamiento que se ha adquirido o diseñado cuenta con unas prestaciones descomunales.<br><br/>Al no cumplir con los requerimientos de producción, se generan desperdicios sobrecargando los procesos productivos y encareciendo el producto final.
            td.px-md-4.px-3
              ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle.fa-xs
                    span Gran cantidad de <i>stock</i>.
                  li
                    i.fas.fa-circle.fa-xs
                    span Maquinaria obsoleta.
                  li
                    i.fas.fa-circle.fa-xs
                    span Falta de planeación en la producción.
                  li
                    i.fas.fa-circle.fa-xs
                    span Volúmenes de lotes de fabricación.
          tr
            td.text-center.p-0.mb-0  
              figure
                img(src='@/assets/curso/tema3/3.jpg', class='img-fluid')
            td.px-md-4.px-3 Este desperdicio se deriva de un exceso de trayecto en medio de las máquinas de una línea de producción; tales movimientos involucran una ralentización del proceso, y agregan al stock un peligro de deterioro a medida que tiene lugar el traslado. Ocurre una vez que la localización de los diferentes puntos de la cadena es deficiente.
            td.px-md-4.px-3
              ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle.fa-xs
                    span Difícil manipulación de carga de contenedores por sus dimensiones y peso.
                  li
                    i.fas.fa-circle.fa-xs
                    span Desproporción de operaciones de movimiento y manipulación de materiales.
          tr(style='background-color: #F6F6F6')
            td.text-center.p-0.mb-0 
              figure
                img(src='@/assets/curso/tema3/4.jpg', class='img-fluid')
            td.px-md-4.px-3 La muda por tiempo de espera se muestra en los tiempos muertos entre fases de la cadena que evidencian niveles desiguales de la carga de trabajo.<br><br/>Se hace visible una vez que se detecta que unos operarios están saturados, mientras que otros apenas poseen trabajo.<br><br/>Este tipo de desperdicio se puede presentar por alguna de las siguientes situaciones: daños en alguna pieza en los procesos productivos, demoras en aprobaciones por parte del supervisor, falta de materia prima y planeación del trabajo.
            td.px-md-4.px-3
              ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle.fa-xs
                    span Pérdida de tiempo del operario, ya que esta espera a que la maquinaria termine.
                  li
                    i.fas.fa-circle.fa-xs
                    span Tiempo destinado a ejecutar reprocesos.
                  li
                    i.fas.fa-circle.fa-xs
                    span Tiempo para ejecutar otras tareas indirectas.
                  li
                    i.fas.fa-circle.fa-xs
                    span Tiempo de espera entre un operario y otro.
                  li
                    i.fas.fa-circle.fa-xs
                    span Interrupciones no planificadas. 
          tr
            td.text-center.p-0.mb-0 
              figure
                img(src='@/assets/curso/tema3/5.jpg', class='img-fluid')
            td.px-md-4.px-3 Se presenta cuando hay procesos repetitivos en la cadena de producción, como por ejemplo, validaciones innecesarias, informes prescindibles o especificaciones desmesuradas.<br><br/>Comúnmente, la carencia de comunicación o la confusión de las exigencias del comprador proporcionan como consecuencia este desperdicio.
            td.px-md-4.px-3
              ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle.fa-xs
                    span No existe estandarización en los procedimientos.
                  li
                    i.fas.fa-circle.fa-xs
                    span Identificación de cuellos de botella en los procesos.
                  li
                    i.fas.fa-circle.fa-xs
                    span Procesos burocráticos innecesarios.
          tr(style='background-color: #F6F6F6')
            td.text-center.p-0.mb-0 
              figure
                img(src='@/assets/curso/tema3/6.jpg', class='img-fluid')
            td.px-md-4.px-3 Se puede presentar por un gran volumen de inventario o bien por disponer de demasiada instrumentación en la línea de producción.<br><br/>Un inventario no optimizado comúnmente se queda obsoleto, con los consiguientes inconvenientes de disminución y desfase en relación con otros productos que dan beneficios superiores.
            td.px-md-4.px-3
              ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle.fa-xs
                    span Excesivo inventario en el establecimiento.
                  li
                    i.fas.fa-circle.fa-xs
                    span Grandes contenedores o cajas.
                  li
                    i.fas.fa-circle.fa-xs
                    span Rotaciones bajas.
                  li
                    i.fas.fa-circle.fa-xs
                    span Costos altos de espacios para almacenamiento.
          tr
            td.text-center.p-0.mb-0 
              figure
                img(src='@/assets/curso/tema3/7.jpg', class='img-fluid')
            td.px-md-4.px-3 Movimientos innecesarios del personal dentro del puesto de trabajo dan lugar a dilapidar el tiempo en desplazarse de un punto a otro para efectuar gestiones que no tienen la posibilidad de ser abordadas de otra forma, pero que no aportan valor alguno al proceso de producción.<br><br/>También se pueden encontrar desplazamientos innecesarios de maquinaria que no aporta valor a lo que la empresa ofrece.
            td.px-md-4.px-3
              ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle.fa-xs
                    span Caminar innecesariamente de un punto a otro.
                  li
                    i.fas.fa-circle.fa-xs
                    span Moverse en busca de documentación.
                  li
                    i.fas.fa-circle.fa-xs
                    span Recorrer demasiada distancia para tener acceso a algún elemento de trabajo.
          tr(style='background-color: #F6F6F6')
            td.text-center.p-0.mb-0 
              figure
                img(src='@/assets/curso/tema3/8.jpg', class='img-fluid')
            td.px-md-4.px-3 Este desperdicio pasa cuando el producto presenta defectos en el proceso de producción y no cumple satisfactoriamente el trabajo, lo que implica una carga adicional para ser subsanado.<br><br/>Es importante optimizar los procesos productivos para prevenir defectos y, si de todas maneras se presentan, lograr identificarlos lo antes posible, así será más sencillo resolverlos.
            td.px-md-4.px-3
              ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle.fa-xs
                    span Los errores en una empresa consumen tiempo.
                  li
                    i.fas.fa-circle.fa-xs
                    span Si el producto llega defectuoso al cliente provoca insatisfacción y falta de confianza.
                  li
                    i.fas.fa-circle.fa-xs
                    span Reprocesos en la planificación de la producción.
          tr
            td.text-center.p-0.mb-0 
              figure
                img(src='@/assets/curso/tema3/9.jpg', class='img-fluid')
            td.px-md-4.px-3 Este desperdicio pertenece a los más sutiles, pues no se puede identificar a corto plazo: se da una vez que el personal está infrautilizado y la empresa desaprovecha las capacidades, conocimiento y experiencia de su personal.<br><br/>La prudencia del trabajador o la autoridad del capataz tiene la posibilidad de determinar la interacción interpersonal y no llegar a conocer el potencial de los individuos con los que se trabaja.<br><br/>Únicamente se puede identificar una vez que existe un cauce de comunicación con el empleado y se le escucha. Como reza una de las máximas del <i>Lean</i>: «el trabajo lo conoce quien lo realiza» (Production Tools, 2021).
            td.px-md-4.px-3
              ul.lista-ul.lista-ul.lista-ul--color
                  li
                    i.fas.fa-circle.fa-xs
                    span La desmotivación es alta en un empleado.
                  li
                    i.fas.fa-circle.fa-xs
                    span Asigna tareas menores o poco atractivas.
                  li
                    i.fas.fa-circle.fa-xs
                    span No se crean espacios para que sus trabajadores aporten ideas o mejoras.      
    separador 


    #t_3_3.titulo-segundo.color-acento-contenido.mb-4(data-aos="fade-right")
      h2 3.3.	Causas posibles y acciones <i>Lean</i>
    
    p.mb-4(data-aos="fade-right") Las posibles causas que generan desperdicios en el <i>Lean manufacturing</i> se identifican a continuación:

    .cajon.color-acento-contenido.p-4.mb-5(style="background-color: #AEDBEF")(data-aos="zoom-in")
      ul.lista-ul.lista-ul.lista-ul--color2
        li
          i.fas.fa-check-circle
          span No implementar sistemas de información donde se comparta o divulgue información a los directivos de las áreas de producción, donde se especifique unidades requeridas y tiempos de entrega para las órdenes que han sido solicitadas por los clientes.
        li
          i.fas.fa-check-circle
          span Los operarios presentan dificultades con el transporte, ya que tienen que mover los productos desde el área de producción hasta la zona de empaque, por lo que ese movimiento genera un transporte poco beneficioso. 
        li
          i.fas.fa-check-circle
          span Se presentan retrasos en el manejo de los procesos de producción, ya que los operarios de la línea de empaque deben desplazarse al área de materiales, descuidando el manejo de la cadena de producción, esto implica que los materiales no lleguen a tiempo al momento de empezar el empaque establecido en las órdenes. 
        li
          i.fas.fa-check-circle
          span Manejar un volumen de inventario alto ocasionado por la inadecuada planificación en la producción, perjudicando el trabajo realizado por la empresa.
        li
          i.fas.fa-check-circle
          span Ciclos de producción con exceso de tiempo que va en contra de la programación en planta y demoras por eventualidades.
        li
          i.fas.fa-check-circle
          spanMovimientos innecesarios que se podrían descartar al reemplazar la labor del operario por una máquina sin errores o contratiempos de ninguna clase.
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
