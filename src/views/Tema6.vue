<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Elaboración de mapas sociales
    
    .row.align-items-center.m-0.mb-5
      .col-xl.box___style_2.box___fit_2_1(data-aos="zoom-in")
        p.mb-0 La elaboración de mapas sociales es una herramienta participativa que permite a las comunidades recrear y representar su territorio desde sus propias miradas, vivencias y saberes. Estos mapas no solo reflejan la geografía física, sino que también expresan prácticas culturales, usos del suelo, espacios de encuentro y memoria colectiva.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img105.png', alt="" ).m-auto
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img106.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además de su valor simbólico y organizativo, los mapas sociales cumplen una función clave en el diagnóstico productivo y en la planificación comunitaria, convirtiéndose en instrumentos colectivos para fortalecer la identidad, la autonomía y la organización territorial.

    <!-- BLOQUE 1 -->
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Usos culturales
    
    .row.align-items-center.mb-5
      .col-xl
        p.mb-3.box___style_7.box___fit_7_1(data-aos="zoom-in") Los sistemas prediales tienen una función cultural fundamental: son espacios vivos donde se manifiestan la memoria, los valores y las prácticas comunitarias. Más allá de su dimensión productiva, la finca es un lugar de identidad, encuentro y continuidad espiritual.
        p.mb-0 En ella se conservan sitios sagrados, se realizan celebraciones comunitarias, se transmiten saberes ancestrales y se mantiene una relación espiritual con la tierra. Reconocer estos usos es clave para visibilizar el valor cultural y simbólico del territorio. Los elementos culturales presentes en los sistemas prediales son: 
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img107.png', alt='' style="max-width: 500px").m-auto
      
    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Sitios sagrados y de memoria
                p.mb-0 Espacios dentro de la finca que poseen valor espiritual, histórico o simbólico para la comunidad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img108.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Celebraciones comunitarias
                p.mb-0 Las fincas se convierten en escenarios de fiestas, rituales, encuentros familiares y comunitarios que refuerzan la cohesión social.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img109.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Transmisión de saberes
                p.mb-0 En el predio se enseñan prácticas agrícolas, conocimientos culturales y saberes espirituales a las nuevas generaciones.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img110.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Identidad territorial
                p.mb-0 El sistema predial refleja la historia, los valores y la cultura de la comunidad, funcionando como expresión material de la identidad local.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img111.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Relación espiritual con la tierra
                p.mb-0 La finca se reconoce como un espacio vivo, con el que se mantiene una relación espiritual que sostiene la vida y la cultura.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img112.png', alt='' style="max-width: 500px").m-auto

    .fondo___color_2
      .px-5

        <!-- BLOQUE 2 -->
        Separador
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Usos estéticos

        .row.align-items-center.mb-5
          .col-xl
            p.mb-3.box___style_7.box___fit_7_2(data-aos="zoom-in") Los sistemas prediales también cumplen una #[b función estética], al integrar de forma armónica la #[b producción, la vivienda y la naturaleza] en un mismo espacio. La manera en que se disponen los cultivos, los árboles, los huertos, las fuentes de agua y las zonas de conservación genera #[b paisajes que reflejan equilibrio, belleza y cuidado del entorno].
            p.mb-0 Esta dimensión no solo embellece el territorio, sino que #[b fortalece la identidad cultural y el sentido de pertenencia], expresando visualmente la #[b visión agroecológica] de las comunidades. A continuación, se describen los elementos que conforman los usos estéticos en el ámbito predial:
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img113.png', alt='' style="max-width: 500px").m-auto
        
        <!-- ACORDION A -->
        .bg--img_03.mb-0
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img114.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Paisajes agroecológicos").ajuste-cajaAcordion
                  p.mb-3 La organización de cultivos, huertos, árboles y bosques crea escenarios visualmente armoniosos y ecológicamente equilibrados.
                .row(titulo="Armonía entre producción y naturaleza").ajuste-cajaAcordion
                  p.mb-3 Las fincas reflejan cómo la actividad productiva puede convivir con el entorno natural sin deteriorarlo.
                .row(titulo="Identidad cultural").ajuste-cajaAcordion
                  p.mb-3 Los sistemas prediales expresan símbolos, formas y valores que reflejan la historia y cosmovisión de cada comunidad.
                .row(titulo="Bienestar colectivo").ajuste-cajaAcordion
                  p.mb-3 La estética del agroecosistema genera sentimientos de tranquilidad, orgullo y conexión para quienes habitan y trabajan en el territorio.
                .row(titulo="Visión integral del territorio").ajuste-cajaAcordion
                  p.mb-3 La disposición de los espacios en la finca refleja la interrelación entre cultura, naturaleza y producción desde una lógica agroecológica.

    <!-- BLOQUE 3 -->
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Usos recreacionales
    
    p.mb-5 Los sistemas prediales también cumplen una importante #[b función recreacional], ya que son espacios donde las familias y comunidades #[b disfrutan del descanso, el juego y la convivencia]. Más allá de su dimensión productiva, la finca es un lugar donde se fortalece la #[b salud física y emocional, se fomentan relaciones intergeneracionales y se profundiza el vínculo con la naturaleza]. Estos espacios de recreación promueven la alegría, el aprendizaje colectivo y la cohesión social, haciendo de la vida rural un proyecto integral y sostenible.

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Espacios de descanso y encuentro
                p.mb-0 Áreas dentro de la finca destinadas a compartir en familia o comunidad, que promueven el bienestar emocional y la vida colectiva.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img115.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Actividades lúdicas y deportivas
                p.mb-0 El territorio se utiliza para juegos, caminatas, deportes y otras prácticas físicas saludables.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img116.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Convivencia intergeneracional
                p.mb-4 Niños, jóvenes y adultos participan juntos en actividades recreativas, fortaleciendo los lazos comunitarios.
                h4 Juegos y dinámicas comunitarias
                p.mb-0 Creación de juegos propios del territorio y prácticas recreativas colectivas con valor cultural.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img117.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Contacto con la naturaleza
                p.mb-4 El agroecosistema ofrece experiencias de disfrute y aprendizaje en un entorno natural, fomentando el respeto ambiental.
                h4 Actividades pedagógicas
                p.mb-0 Uso del espacio recreacional en actividades educativas que fortalecen el conocimiento del territorio.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img118.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bienestar comunitario
                p.mb-4 La recreación en la finca aporta alegría, salud, identidad compartida y cohesión social.
                h4 Participación intergeneracional
                p.mb-0 Promoción de la inclusión de todas las edades en los espacios de recreación y en la vida comunitaria.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img119.png', alt='' style="max-width: 500px").m-auto
    
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img120.svg", alt="" ).m-auto
      .col-xl
        p.mb-0 La #[b elaboración de mapas sociales] y el reconocimiento de los #[b usos culturales, estéticos y recreacionales] de los sistemas prediales permiten comprender que la finca es #[b mucho más que un espacio productivo]. Es un #[b territorio de memoria, belleza, juego y encuentro], donde se transmiten saberes, se fortalecen vínculos y se proyecta colectivamente la vida.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img121.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estos mapas, junto con las #[b fichas de diagnóstico], se convierten en #[b herramientas integradoras] que articulan #[b cultura, organización y planificación], permitiendo a las comunidades construir una v#[b isión integral de su territorio] y fortalecer su #[b autonomía agroecológica].

</template>

<script>
export default {
  name: 'Tema6',
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
