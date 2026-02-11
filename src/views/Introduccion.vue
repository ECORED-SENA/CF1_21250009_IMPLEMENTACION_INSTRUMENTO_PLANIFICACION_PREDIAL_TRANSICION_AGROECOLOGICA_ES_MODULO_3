<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___color_1
      .px-5 

        p.mb-5 Continuamos con la Ruta Formativa del Instrumento de Planificación Predial para la Transición Agroecológica (IPPTA), un recorrido pedagógico por cuatro Estaciones Formativas, cada una diseñada para fortalecer la comprensión integral del territorio y proyectar soluciones contextualizadas de base agroecológica.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la tercera de las cuatro estaciones nos enfocamos en la producción como tal. La #[b Estación Socioeconómica del IPPTA] comprende caminos para transformar el sistema desde su dimensión familiar y comunitaria. Esta estación profundiza en las relaciones sociales que sostienen el predio, reconociendo que los criterios agroecológicos se extienden a aspectos culturales, sociales y económicos para proyectar alternativas desde el fortalecimiento comunitario y familiar.

        p.mb-5 El siguiente punto es la #[b Estación final], espacio de síntesis y articulación. En ella se integrarán los resultados de cada componente: diagnósticos, indicadores, mapas temáticos y propuestas de transición agroecológica, consolidando el IPPTA como herramienta para la planificación predial contextualizada, equitativa y regenerativa.

        .row.align-items-center.m-0.mb-5.box___style_1(data-aos="zoom-in")
          .col-xl
            p.mb-0 La transición agroecológica representa una oportunidad para fortalecer la vida rural, revitalizar los territorios y consolidar la autonomía de las comunidades. Este proceso impulsa la construcción de sistemas agroalimentarios más justos, solidarios y sostenibles, donde la diversidad cultural y biológica se convierte en motor de innovación y resiliencia.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img3.svg', alt="" style="max-width: 85px").m-auto

        p.mb-0 Al reconocer la riqueza de los saberes locales y la capacidad organizativa de las comunidades, se abre un camino hacia economías para la vida, basadas en la cooperación, la equidad y el respeto por la naturaleza. La agroecología se convierte así en una estrategia integral que potencia la identidad, la memoria biocultural y la cohesión social, generando bienestar colectivo y nuevas formas de convivencia armónica con el entorno.

</template>

<script>
export default {
  name: 'Introduccion',
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
