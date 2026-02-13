<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión del conocimiento agroecológico
    
    .row.align-items-center.m-0.mb-5
      .col-xl.box___style_2(data-aos="zoom-in")
        p.mb-0 Desde la perspectiva agroecológica, el conocimiento #[b no se transfiere de manera unidireccional], sino que se #[b construye colectivamente] junto a los actores del territorio. A través de espacios como mingas, recorridos de campo y talleres comunitarios, se genera un #[b aprendizaje situado], basado en la práctica cotidiana, la reflexión compartida y el #[b diálogo de saberes].
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img62.png', alt="" ).m-auto
    
    p.mb-5 Este proceso no solo fortalece la autonomía de las comunidades, sino que también impulsa la innovación desde la diversidad cultural, garantizando que mujeres y jóvenes participen activamente en la creación de alternativas de vida sostenibles. Los fundamentos de la gestión del conocimiento agroecológico son: 

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Práctica como fuente de saber
                p.mb-0 Cada actividad agrícola y experiencia comunitaria genera aprendizajes valiosos para la transición agroecológica.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img63.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Espacios colectivos
                p.mb-0 Mingas, recorridos de campo y talleres comunitarios funcionan como escenarios vivos de producción colectiva de conocimiento.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diálogo de saberes
                p.mb-0 Integración de conocimientos ancestrales, campesinos y técnicos mediante procesos horizontales de aprendizaje compartido.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Participación equitativa
                p.mb-0 Inclusión activa de mujeres y jóvenes en la generación de conocimiento, rompiendo jerarquías y promoviendo la justicia epistémica.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Autonomía territorial
                p.mb-0 Fortalecimiento de capacidades locales para decidir sobre los sistemas productivos, la organización social y la gestión del territorio.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img67.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 1 -->
    Separador
    
    .fondo___color_2
      .px-5

        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Apertura epistémica

        .row.align-items-center.mb-5.m-0
          .col-xl.box___style_4.box___fit_4_1(data-aos="fade-right")
            p.mb-0 La apertura epistémica en agroecología reconoce que el conocimiento no tiene una sola fuente legítima. Saber ancestral, campesino y técnico conviven y se complementan en los territorios, construyéndose a partir de métodos distintos al científico convencional, pero no por ello menos válidos ni relevantes.
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img68.png', alt='').m-auto
          .col-xl
            figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img69.svg', alt='' style="max-width: 80px")
            p.mb-0.espacio___movil_3 Esta apertura permite valorar diversas formas de comprender la naturaleza y la producción, e integrar saberes culturales con conocimientos académicos, propiciando innovaciones que respetan la identidad territorial y fortalecen la autonomía comunitaria. Las claves de la apertura epistémica en agroecología son: 
        
        <!-- CARRUSEL DE TARJETAS CON IMAGEN -->
        .fondo___carrusel
          .px-5
            .row.align-items-center.mb-0
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img70.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img71.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Reconocimiento de saberes locales
                    p.mb-0 Valorización de los saberes ancestrales y campesinos como pilares fundamentales de la agroecología.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img72.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Diálogo con conocimientos técnicos
                    p.mb-0 Integración crítica de saberes científicos y técnicos con la práctica local y las necesidades del territorio.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img73.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Diversidad cultural como innovación
                    p.mb-0 Consideración de la pluralidad cultural como una fuente de creatividad, adaptación y resiliencia frente a desafíos productivos y ambientales.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img74.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Visión amplia del conocimiento
                    p.mb-0 Construcción de una comprensión integradora de la vida, la producción y la naturaleza, que articula distintas epistemologías en igualdad de valor.

            <!-- BLOQUE 2 -->
            Separador
            #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 4.2 Saberes en diálogo

    .row.align-items-center.m-0.mb-5.box___style_7(data-aos="zoom-in")
      .col-xl
        p.mb-0 El diálogo de saberes en agroecología se construye en espacios colectivos donde confluyen familias campesinas, comunidades indígenas y afrodescendientes, junto con actores técnicos. En mingas, talleres, encuentros y recorridos de campo, se tejen conversaciones que reconocen y articulan la riqueza de los saberes ancestrales, campesinos y científicos.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img75.svg', alt='').m-auto
    
    p.mb-5 Este proceso permite generar aprendizajes compartidos, que fortalecen la autonomía territorial, la cohesión social y la sostenibilidad cultural de las comunidades. Los elementos clave del diálogo de saberes son: 

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Encuentro de saberes diversos
                p.mb-0 Integración de conocimientos ancestrales, campesinos y técnicos en procesos horizontales de aprendizaje.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img76.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Espacios comunitarios
                p.mb-0 Mingas, talleres y recorridos como escenarios vivos de intercambio, observación y construcción colectiva.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Procesos intergeneracionales
                p.mb-0 Participación activa de jóvenes y mayores en la transmisión de prácticas agroecológicas, fortaleciendo la continuidad cultural.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img78.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reconocimiento mutuo
                p.mb-0 Valoración de cada aporte como parte de un tejido común que sostiene la vida y la identidad comunitaria.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img79.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cohesión social
                p.mb-0 El diálogo de saberes promueve confianza, cooperación y solidaridad entre actores del territorio.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img80.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Campesino a campesino

    p.mb-5 A continuación, se presenta un video que aborda el enfoque campesino a campesino, destacando su papel en la construcción colectiva de saberes agroecológicos a partir del intercambio de experiencias, la cooperación territorial y el liderazgo comunitario.

    <!-- VIDEOS -->
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6UA_ls69gYk" title="Campesino a campesino" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: campesino a campesino.

</template>

<script>
export default {
  name: 'Tema4',
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
