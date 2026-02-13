<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diagnóstico predial socioeconómico
    
    .fondo___color_2
      .px-5

        .row.align-items-center.m-0.mb-5
          .col-xl.box___style_2.box___fit_2_1(data-aos="zoom-in")
            p.mb-0 El diagnóstico socioeconómico aporta al análisis predial una comprensión profunda de las condiciones de vida de las familias y comunidades en procesos de #[b transición agroecológica]. Permite identificar dinámicas #[b productivas, sociales y culturales] que atraviesan los territorios, y orientar estrategias que fortalezcan la #[b autonomía, la equidad y la comunalidad].
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img35.png', alt="" ).m-auto

        <!-- BLOQUE 1 -->
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Importancia del diagnóstico socioeconómico en la transición agroecológica
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img36.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En los sistemas agroecológicos, las relaciones sociales constituyen el núcleo que sostiene la cooperación, la transmisión de saberes y la organización comunitaria. El diagnóstico socioeconómico permite entender cómo estas relaciones se entrelazan con la economía familiar y comunitaria, haciendo visibles tanto las fortalezas como las vulnerabilidades del sistema.
    
    p.mb-5 Además, el diagnóstico ofrece herramientas para visibilizar el papel de las mujeres en contextos patriarcales, y el de los jóvenes como agentes clave para la sostenibilidad y la innovación. En este sentido, el diagnóstico socioeconómico actúa como una aguja orientadora del proceso agroecológico desde una perspectiva comunitaria y situada. Las funciones del diagnóstico socioeconómico son: 

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Visibilización integral
                p.mb-0 Permite comprender las realidades familiares y comunitarias más allá del enfoque técnico-productivo.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img37.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Identificación de potencialidades y riesgos
                p.mb-0 Facilita el reconocimiento de oportunidades locales para la transición agroecológica, así como de vulnerabilidades económicas, sociales y culturales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img38.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Diseño contextualizado de estrategias
                p.mb-0 Contribuye a evitar la imposición de modelos externos, promoviendo estrategias adaptadas al entorno específico.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img39.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fortalecimiento de soberanía alimentaria
                p.mb-0 Reconoce saberes, dinámicas y recursos locales, lo que potencia la autonomía territorial y la sostenibilidad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img40.png', alt='' style="max-width: 500px").m-auto
            
    <!-- BLOQUE 2 -->
    Separador
    .fondo___color_2
      .px-5

        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Relación del diagnóstico con el IPPTA y la planificación familiar

        .row.align-items-center.mb-5.m-0
          .col-xl.box___style_4(data-aos="fade-right")
            p.mb-0 El diagnóstico socioeconómico es uno de los #[b tres pilares del IPPTA] (Instrumento Predial de Planificación de la Transición Agroecológica), aportando una #[b mirada integral] sobre las condiciones #[b sociales, económicas y culturales] que permiten construir la planificación predial desde la realidad concreta de cada familia.
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img41.png', alt='').m-auto
          .col-xl
            figure.mb-4.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img42.svg', alt='' style="max-width: 80px")
            p.mb-0.espacio___movil_3 Además, se vincula directamente con la planificación familiar, al reconocer la relevancia de los roles de género, la participación juvenil y la organización comunitaria en la gestión de recursos y procesos productivos. Los aportes del diagnóstico al IPPTA y la planificación predial son: 
        
        <!-- ACORDION A -->
        .bg--img_03.mb-0
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img43.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Soporte del IPPTA").ajuste-cajaAcordion
                  p.mb-3 Integra la dimensión socioeconómica como una base para la toma de decisiones dentro del instrumento de planificación agroecológica.
                .row(titulo="Articulación con la planificación familiar").ajuste-cajaAcordion
                  p.mb-3 Permite alinear las necesidades, roles y dinámicas familiares con la gestión predial.
                .row(titulo="Enfoque de género e intergeneracionalidad").ajuste-cajaAcordion
                  p.mb-3 Reconoce la distribución desigual de tareas, el acceso a recursos y la participación de mujeres y jóvenes en la construcción de alternativas.
                .row(titulo="Construcción de planes integrales").ajuste-cajaAcordion
                  p.mb-3 Favorece la creación de planes prediales que consideren tanto los aspectos productivos como el #[b bienestar familiar y comunitario].

    <!-- BLOQUE 3 -->
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Principios sociales y económicos de la transición agroecológica
    
    p.mb-5 La transición agroecológica no se limita a un cambio técnico en los sistemas productivos, sino que implica una #[b transformación profunda de las dinámicas económicas y sociales]. Esta transformación se fundamenta en #[b principios que fortalecen la vida comunitaria], promueven la cooperación y fomentan una participación equitativa en la gestión del territorio.

    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .tarjeta--boton.h-100
          .row.justify-content-center.mb-3.p-3
            .col-12
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img44.png', alt="" )
          h3.text-center Economías circulares y solidarias
          p.mb-0 Diseñar sistemas productivos basados en el aprovechamiento de recursos locales, reduciendo la dependencia externa y fortaleciendo la cooperación territorial.

      .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.h-100
          .row.justify-content-center.mb-3.p-3
            .col-12
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img45.png', alt="")
          h3.text-center Creación conjunta y diálogo de saberes
          p.mb-0 Articular saberes ancestrales, campesinos y técnicos mediante procesos de aprendizaje participativo e intergeneracional.
      
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.h-100
          .row.justify-content-center.mb-3.p-3
            .col-12
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img46.png', alt="")
          h3.text-center Organización social y gobernanza
          p.mb-0 Impulsar estructuras comunitarias para la producción, transformación y gestión de bienes comunes, promoviendo la autonomía y la toma de decisiones compartida.

    <!-- BLOQUE 4 -->
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Enfoque comunitario y de género del sistema

    .row.align-items-center.mb-5.m-0
      .col-xl.box___style_5(data-aos="fade-right")
        p.mb-0 Los territorios agroecológicos se estructuran en torno a la #[b vida comunitaria] y a las #[b relaciones sociales] que la sostienen. El diagnóstico socioeconómico permite identificar a la c#[b ooperación y la solidaridad] como pilares de la autonomía territorial, al tiempo que visibiliza las #[b desigualdades de género] presentes en los procesos productivos, familiares y comunitarios.
      .col-xl-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img47.png', alt="").m-auto
      .col-xl.box___style_6(data-aos="fade-left").espacio___movil_3
        p.mb-0 Incorporar un #[b enfoque comunitario y de género] es esencial para construir sistemas más justos, sostenibles e inclusivos. Esto implica reconocer y valorar la participación de mujeres, hombres y jóvenes, redistribuir responsabilidades, y garantizar procesos de decisión colectiva. Los lineamientos del enfoque comunitario y de género son: 
    
    <!-- CARRUSEL DE TARJETAS CON IMAGEN -->
    .fondo___carrusel
      .px-5
        .row.align-items-center.mb-0
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img49.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Diagnóstico con enfoque comunitario
                p.mb-0 Reconocer que la transición agroecológica no es solo un proceso individual, sino profundamente colectivo y territorial.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img50.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Visibilización de desigualdades de género
                p.mb-0 Identificar brechas en el acceso a tierra, recursos y espacios de decisión que afectan principalmente a mujeres.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Redistribución de roles y responsabilidades
                p.mb-0 Promover la equidad en las tareas productivas, familiares y comunitarias, reconociendo el aporte de mujeres y jóvenes.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img52.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Sistema inclusivo y participativo
                p.mb-0 Asegurar que todas las voces sin distinción de género o generación sean consideradas en la construcción del sistema agroecológico.

</template>

<script>
export default {
  name: 'Tema2',
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
