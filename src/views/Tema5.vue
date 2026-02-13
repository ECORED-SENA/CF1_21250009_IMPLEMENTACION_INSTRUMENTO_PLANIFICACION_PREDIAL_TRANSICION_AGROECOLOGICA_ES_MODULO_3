<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Organización colectiva
    
    .row.align-items-center.m-0.mb-5
      .col-xl.box___style_2(data-aos="zoom-in")
        p.mb-0 La organización colectiva es el corazón de la agroecología, pues son las comunidades quienes construyen su autonomía, llegan a acuerdos y generan procesos de cooperación que sostienen la vida en el territorio. A través de juntas locales, regionales y nacionales, espacios de encuentro y prácticas de complementariedad, se consolidan dinámicas que integran equidad de género, solidaridad y participación activa de todos los actores.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img81.png', alt="" ).m-auto
    
    .fondo___color_1
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 2.
              span Factores clave para el escalamiento territorial de la agroecología
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img82.svg', alt='Ilustración sobre el escalamiento territorial de la agroecología, con ocho ejes principales: organización social, aprendizaje constructivista, reconocimiento de la crisis, discursos movilizadores, alianzas externas, mercados y políticas favorables, y búsqueda de alternativas. ').m-auto
            figcaption(data-aos="zoom-in") #[b Nota.] Tomado de Mier y Terán et al., (2018).
        
        p.mb-0 El #[b escalamiento territorial de la agroecología] se fortalece cuando los espacios de convergencia logran articular actores diversos como organizaciones sociales, familias campesinas, colectivos juveniles y procesos culturales, en torno a #[b aprendizajes constructivistas, discursos movilizadores y alianzas estratégicas]. Estos escenarios, que reconocen las crisis como oportunidades para la creación de alternativas de vida, son fundamentales para consolidar iniciativas a nivel departamental, ampliar experiencias nacionales y fortalecer articulaciones internacionales que impulsen mercados solidarios y políticas públicas favorables a la agroecología. De esta manera, la agroecología se proyecta como un proceso integral y multiescalar, sostenido por #[b vínculos de cooperación, memoria biocultural y acción colectiva] (Mier y Terán et al., 2018).

        <!-- BLOQUE 1 -->
        Separador
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Organizaciones territoriales

    .row.align-items-center.m-0.mb-5.box___style_7.box___fit_7(data-aos="zoom-in")
      .col-xl
        p.mb-0 Las #[b organizaciones territoriales] son expresiones de la capacidad de las comunidades para #[b sostener la vida en el campo y defender sus espacios de producción]. Surgen de la necesidad de #[b articular familias, asociaciones y colectivos] en torno a objetivos comunes, y se convierten en estructuras que #[b fortalecen la autonomía, la identidad cultural y la cooperación].
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img122.svg', alt='').m-auto
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img84.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En estas organizaciones se integran saberes, prácticas y liderazgos que permiten enfrentar #[b desafíos sociales, económicos y ambientales] desde la unidad comunitaria. No solo articulan actores locales, sino que también #[b impulsan procesos claves para la vida comunitaria], abarcando múltiples dimensiones que van desde la producción hasta la participación política.
    
    p.mb-5 A continuación, se presentan algunos de los #[b tipos de organizaciones territoriales] y las funciones que cumplen en el marco de la agroecología:

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Producción agroalimentaria
                p.mb-0 Fortalece sistemas locales de cultivo y cría que aseguran diversidad, soberanía alimentaria y autonomía productiva.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img85.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Transformación
                p.mb-0 Elabora productos derivados que agregan valor y fortalecen la economía comunitaria a partir de los saberes locales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img86.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Comercialización
                p.mb-0 Crea canales propios de venta e intercambio que reducen intermediarios y acercan a productores y consumidores.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img87.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Consumo y gastronomía
                p.mb-0 Promueve prácticas alimentarias saludables y la cocina tradicional como expresión de la identidad cultural del territorio.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img88.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Manejo de residuos
                p.mb-0 Implementa prácticas de economía circular que reducen desperdicios y regeneran suelos, cerrando ciclos productivos sostenibles.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img89.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Incidencia política
                p.mb-0 Participa en espacios de decisión para defender los derechos colectivos, los bienes comunes y la soberanía sobre la tierra y los recursos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img90.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Construcción del conocimiento
                p.mb-0 Genera aprendizajes colectivos en mingas, talleres y recorridos, integrando saberes ancestrales, campesinos y técnicos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img91.png', alt='' style="max-width: 500px").m-auto

    .fondo___color_2
      .px-5

        <!-- BLOQUE 2 -->
        Separador
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Espacios de convergencia
        
        p.mb-5 Los #[b espacios de convergencia] son escenarios donde actores diversos del territorio (organizaciones sociales, familias campesinas, colectivos juveniles y procesos culturales) se encuentran para #[b dialogar, compartir experiencias y construir acuerdos colectivos].

        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.m-0.mb-5.box___style_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img92.jpg', alt="" ).m-auto
              .col-xl
                p.mb-0 En estos espacios se articula la agroecología como #[b proyecto integral], uniendo esfuerzos en torno a la #[b producción, la defensa del territorio y la construcción de alternativas para la vida], lo que fortalece vínculos de #[b cooperación y solidaridad].
        
        p.mb-5 A continuación, se presentan algunos tipos de espacios de convergencia y su papel en el fortalecimiento agroecológico:

        <!-- ACORDION A -->
        .bg--img_03.mb-0
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img93.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Iniciativas departamentales").ajuste-cajaAcordion
                  p.mb-3 Propuestas que surgen desde los territorios, como ferias campesinas, planes de producción y acciones por la defensa de la tierra.
                .row(titulo="Experiencias nacionales").ajuste-cajaAcordion
                  p.mb-3 Referentes que demuestran la viabilidad de sistemas agroecológicos a nivel país, visibilizando la diversidad cultural y promoviendo políticas públicas.
                .row(titulo="Movimiento Agroecológico Colombiano").ajuste-cajaAcordion
                  p.mb-3 Espacio nacional de articulación entre comunidades y organizaciones en torno a la agroecología, abierto y plural.
                .row(titulo="Articulaciones internacionales").ajuste-cajaAcordion
                  p.mb-3 Conexión con redes globales como MAELA y La Vía Campesina, que enlazan experiencias y luchas agroecológicas más allá del ámbito local.

    <!-- BLOQUE 3 -->
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Complementariedad comunitaria

    .row.align-items-center.mb-5
      .col-xl
        p.mb-3.box___style_7.box___fit_7_1(data-aos="zoom-in") Ante la fragmentación social y la marginación de mujeres y jóvenes, se propone la #[b complementariedad comunitaria] como una vía para #[b reconstruir vínculos, fortalecer la vida colectiva] y promover territorios más justos y solidarios.
        p.mb-0 Esta práctica parte del reconocimiento de que #[b cada actor aporta desde sus capacidades y saberes], y que la integración de estos aportes fortalece la #[b solidaridad, el equilibrio social y la autonomía territorial]. A continuación, se presentan los principios que orientan la complementariedad:
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img94.png', alt='' style="max-width: 500px").m-auto
      
    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Intercambio de recursos y saberes
                p.mb-0 Circulación de semillas, herramientas y conocimientos entre familias. La diversidad se valora como riqueza y base de la producción agroecológica.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img95.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Solidaridad en acción
                p.mb-0 Prácticas de apoyo mutuo en siembra, cosecha, cuidado del territorio y defensa de los bienes comunes.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Autonomía comunitaria
                p.mb-0 Reducción de la dependencia externa y fortalecimiento de la capacidad local para tomar decisiones sobre su vida y producción.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img97.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Participación equitativa
                p.mb-0 Reconocimiento del protagonismo de mujeres y jóvenes en la construcción de alternativas agroecológicas sostenibles y justas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img98.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Enfoque de género
    
    .row.align-items-center.m-0.mb-5
      .col-xl.box___style_2(data-aos="zoom-in")
        p.mb-0 El #[b enfoque de género en la agroecología] surge como una respuesta a la #[b invisibilización histórica de las mujeres] y al #[b relegamiento de los jóvenes] en la vida comunitaria. Reconoce que la #[b equidad en la participación y el liderazgo] no es solo una cuestión de justicia, sino una #[b condición fundamental] para sostener la organización colectiva y fortalecer la #[b autonomía territorial].
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img99.png', alt="" ).m-auto
    
    p.mb-5 Desde esta perspectiva, la agroecología se convierte en un espacio transformador, donde se #[b redistribuyen roles, se valoran los aportes diversos] y se construyen #[b nuevas formas de relación] basadas en el respeto, la justicia y la solidaridad. A continuación, se presentan los principios fundamentales que orientan este enfoque:

    <!-- CARRUSEL DE TARJETAS CON IMAGEN -->
    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img100.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Participación equitativa
            p.mb-0 Mujeres y hombres comparten espacios de decisión y acción en la vida comunitaria y en los procesos agroecológicos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img101.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Reconocimiento de aportes históricos
            p.mb-0 Se valoran el trabajo y los saberes de las mujeres en la producción, el cuidado, la alimentación y la transmisión cultural.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img102.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Redistribución de roles
            p.mb-0 Se promueve el equilibrio en las tareas productivas, familiares y organizativas para garantizar una vida comunitaria más justa.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img103.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Impulso de liderazgos juveniles
            p.mb-0 Los jóvenes son reconocidos como agentes clave en la innovación, la transmisión de saberes y el fortalecimiento comunitario.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img104.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Construcción de nuevas relaciones
            p.mb-0 Se fomenta un tejido social basado en relaciones de respeto mutuo, justicia social y solidaridad entre géneros y generaciones.

</template>

<script>
export default {
  name: 'Tema5',
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
