<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos socioeconómicos de la transición agroecológica
    
    .fondo___color_2
      .px-5

        .row.align-items-center.m-0.mb-5
          .col-xl.box___style_2(data-aos="zoom-in")
            p.mb-0 La transición agroecológica no puede entenderse sin analizar los factores sociales y económicos que afectan a las comunidades rurales. Estos fundamentos revelan cómo las crisis del modelo agroalimentario dominante han impulsado a las familias campesinas a buscar alternativas más justas, sostenibles y autónomas. A continuación, se exploran dos aspectos clave: la crisis socioeconómica rural y los impactos del sistema agroalimentario hegemónico.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img1.png', alt="" ).m-auto

        <!-- BLOQUE 1 -->
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Crisis socioeconómica rural y pérdida de autonomía

        p.mb-5 La transición agroecológica se cimenta en los procesos sociales y económicos que han marcado la vida de las familias rurales. Reconocer estos fundamentos permite valorar la capacidad de las comunidades para adaptarse al contexto social, generar alternativas y transformar sus realidades.

        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La agroecología no solo plantea un cambio en las prácticas productivas, sino también en las relaciones sociales, culturales y económicas que enmarcan la vida en los territorios. Desde esta perspectiva, se abre un camino hacia la #[b autonomía, la equidad y la resiliencia territorial], donde la #[b memoria biocultural] y la #[b organización colectiva] se convierten en pilares fundamentales que fortalecen la identidad local y permiten proyectar un futuro distinto.
      
    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Impactos del sistema agroalimentario dominante

    .fondo___color_2
      .px-5

        p.mb-5 El sistema agroalimentario dominante se sostiene sobre el trabajo de las familias agricultoras, quienes enfrentan el reto de producir bienes y servicios para satisfacer la demanda de un mercado globalizado, priorizando intereses externos sobre las necesidades de quienes producen los alimentos y la biomasa.

        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.m-0.mb-5.box___style_3(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img3.jpg', alt="" ).m-auto
              .col-xl
                p.mb-0 La economía rural actual favorece dinámicas de intercambio que #[b concentran el capital en pocas manos], beneficiando a grandes empresas y debilitando a las economías campesinas y comunitarias. Esto #[b reduce la capacidad de decisión] de los pequeños productores y #[b desvaloriza sus prácticas tradicionales] (Giraldo, 2018).

        p.mb-5 Desde mediados del siglo XX, se consolidó un modelo de economía globalizada que transformó las formas de producción y comercialización. Este modelo opera a través de #[b circuitos largos de intercambio], donde los productos recorren grandes distancias antes de llegar al consumidor final, lo que #[b aumenta los costos de intermediación y el impacto ambiental]. Aunque se presenta como una oportunidad de crecimiento e integración, en la práctica ha generado #[b efectos adversos sobre los territorios locales] (Van der Ploeg, 2008).

        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Dinámica de cooperación, coproducción y autonomía en contextos de ambiente hostil
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img4.svg', alt='Diagrama sobre dinámicas de autonomía en contextos adversos que incluye elementos como lucha por la autonomía, base de recursos autocontrolada, co-producción, cooperación, realimentación, mercado, sobrevivencia y ambiente hostil.').m-auto
      
    p.mb-5 Para sostener este sistema, se impulsó la #[b especialización productiva de los territorios], promoviendo la expansión de #[b monocultivos] bajo la promesa de generar desarrollo económico. Sin embargo, en la práctica, esta estrategia ha tenido múltiples efectos negativos que comprometen la sostenibilidad social, económica y ambiental de los territorios. Entre las principales consecuencias se encuentran:

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Debilitamiento de la resiliencia y soberanía alimentaria
                p.mb-0 Se reduce la diversidad de cultivos destinados al consumo interno, lo que afecta la capacidad de los territorios para responder a crisis y garantizar su alimentación.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Aumento de la dependencia externa
                p.mb-0 Los insumos y semillas dependen de grandes corporaciones, y los ingresos están condicionados por las dinámicas del mercado internacional.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reproducción de desigualdades económicas
                p.mb-0 El modelo beneficia principalmente a grandes empresas, dejando a los pequeños productores en desventaja y sujetos a esquemas productivos atomizados.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agudización de inequidades sociales
                p.mb-0 Se promueve una división entre quienes “producen” conocimiento e insumos y quienes son vistos como receptores pasivos de tecnologías, considerados incapaces de generarlos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 3 -->
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Fragmentación del tejido social
    
    .fondo___color_2
      .px-5

        .row.align-items-center.m-0.mb-5
          .col-xl.box___style_2.box___fit_2(data-aos="zoom-in")
            p.mb-0 La economía globalizada, junto con la especialización productiva basada en monocultivos, ha generado un proceso de #[b fragmentación del tejido social]. Este fenómeno se expresa en la ruptura de las dinámicas tradicionales de producción, intercambio y cooperación que históricamente sostenían la vida económica y cultural de las comunidades.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img10.png', alt="" ).m-auto
        
        p.mb-5 Lejos de fortalecer la integración interna de los territorios, la lógica de los monocultivos y los circuitos largos de comercialización ha orientado los sistemas productivos hacia los mercados externos, debilitando los vínculos locales y comunitarios (Giraldo, 2018). Las principales características de la fragmentación son: 

        <!-- ACORDION A -->
        .bg--img_03.mb-5
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img11.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Desarticulación de actores sociales").ajuste-cajaAcordion
                  p.mb-3 Los pequeños productores pierden conexión con consumidores, transformadores y comercializadores dentro de su propio territorio.
                .row(titulo="Dependencia de insumos externos").ajuste-cajaAcordion
                  p.mb-3 Semillas, fertilizantes y tecnologías provienen de corporaciones globales, lo que reduce la autonomía local. 
                .row(titulo="Pérdida de diversidad productiva").ajuste-cajaAcordion
                  p.mb-3 Se reemplazan múltiples actividades económicas por una sola línea productiva, lo que limita la resiliencia ante crisis económicas o climáticas.
                .row(titulo="Debilitamiento de la economía solidaria").ajuste-cajaAcordion
                  p.mb-3 Las prácticas de intercambio comunitario y cooperación son desplazadas por relaciones mercantiles globalizadas y grandes cadenas de distribución.
                .row(titulo="Concentración de beneficios").ajuste-cajaAcordion
                  p.mb-3 Las grandes empresas y actores externos capturan la mayor parte del valor generado, mientras las comunidades locales reciben ingresos marginales.
    
    p.mb-5 Estas dinámicas no solo transforman la organización productiva, sino que también generan profundas consecuencias socioeconómicas que afectan la estabilidad, cohesión e identidad de los territorios.

    <!-- CARRUSEL DE TARJETAS -->
    .fondo___carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img13.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Vulnerabilidad territorial
            p.mb-0 Los territorios quedan expuestos a fluctuaciones de precios internacionales y a crisis globales (sanitarias, ambientales o sociales).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img14.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Desigualdad social
            p.mb-0 Se amplía la brecha entre quienes controlan los monocultivos y quienes dependen de ellos para subsistir.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img15.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Erosión cultural
            p.mb-0 Se debilitan saberes tradicionales y prácticas productivas ancestrales que conformaban la identidad y cohesión cultural de las comunidades.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img16.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Impacto familiar
            p.mb-0 Se reduce la autonomía alimentaria y se transforman las relaciones de género y generación dentro del hogar y en el tejido comunitario.

        <!-- BLOQUE 4 -->
        Separador
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Pérdida de memoria biocultural

    p.mb-5 La expansión de la economía globalizada y la imposición de monocultivos han generado una profunda #[b amnesia biocultural] en los territorios. Este fenómeno implica la erosión simultánea de la #[b agrobiodiversidad], los #[b saberes tradicionales], las p#[b rácticas agrícolas ancestrales] y las formas simbólicas y espirituales de relacionarse con la naturaleza que han sostenido la vida comunitaria por generaciones. Las características de la pérdida de memoria biocultural son: 

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pérdida de agrobiodiversidad productiva
                p.mb-0 Se eliminan variedades y especies tradicionales que, durante milenios, han sostenido la alimentación humana y la diversidad genética agrícola.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Desplazamiento de saberes locales
                p.mb-0 Conocimientos sobre semillas nativas, cultivos diversificados y manejo sostenible de suelos son reemplazados por paquetes tecnológicos basados en pesticidas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img18.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Erosión de la diversidad cultural
                p.mb-0 Se debilitan expresiones lingüísticas, rituales y prácticas simbólicas vinculadas al trabajo agrícola y al vínculo con la tierra.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img19.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Homogeneización productiva
                p.mb-0 La expansión de monocultivos borra la riqueza de prácticas culturales asociadas a sistemas productivos diversos y adaptados al entorno.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ruptura intergeneracional
                p.mb-0 La migración juvenil o su integración en cadenas globales impide la transmisión de saberes familiares y comunitarios.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img21.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Desconexión espiritual y simbólica
                p.mb-0 Se rompe la relación entre territorio, identidad y cosmovisión, lo que afecta la cohesión espiritual de las comunidades.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img22.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Debilitamiento de la identidad colectiva
                p.mb-0 Al desaparecer prácticas culturales ligadas a la biodiversidad, se diluye el sentido de pertenencia y continuidad cultural.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img23.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 5 -->
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Relaciones de dominación

    p.mb-5 La globalización y la especialización productiva no solo han transformado los modelos económicos, sino que también han configurado formas complejas de dominación que atraviesan los territorios y sus comunidades. Estas relaciones de poder operan en múltiples planos (económico, cultural, epistémico, étnico y de género) profundizando desigualdades históricas y afectando la autonomía y dignidad de los pueblos. Las características de las relaciones de dominación son: 

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Dominación cultural
                p.mb-0 Imposición de valores, lenguajes y prácticas externas que desplazan los saberes, símbolos y costumbres locales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img24.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Dominación epistémica
                p.mb-0 Deslegitimación del conocimiento ancestral y comunitario frente a discursos científicos, técnicos o empresariales hegemónicos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img25.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Dominación económica
                p.mb-0 Subordinación de productores locales a intermediarios y corporaciones que controlan los insumos, la comercialización y los precios.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img26.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Dominación de raza
                p.mb-0 Persistencia de jerarquías raciales que discriminan a comunidades campesinas, indígenas y afrodescendientes, invisibilizando sus aportes.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img27.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Dominación de género
                p.mb-0 Invisibilización del trabajo de las mujeres, sobrecarga de tareas y exclusión de espacios de decisión, reforzando desigualdades estructurales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img28.png', alt='' style="max-width: 500px").m-auto

    p.mb-0 Estas formas de dominación conllevan consecuencias como la #[b pérdida de autonomía territorial, la profundización de las desigualdades sociales y de género, la erosión cultural y el conflicto social] por el control de recursos y beneficios generados.

    <!-- BLOQUE 6 -->
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Fragmentación generacional

    p.mb-5 La dinámica impuesta por la economía globalizada y la pérdida progresiva de la memoria biocultural han dado lugar a una marcada fragmentación generacional en los territorios rurales. Este proceso se manifiesta en la ruptura de vínculos entre generaciones, lo que debilita la transmisión de saberes, valores y prácticas comunitarias que han sostenido históricamente la vida rural. Las características de la fragmentación generacional son: 

    <!-- SLYDER IMAGENES -->
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ruptura en la transmisión de saberes
                p.mb-0 Los conocimientos ancestrales sobre agricultura, medicina tradicional y organización comunitaria no se transfieren plenamente a las nuevas generaciones.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img29.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Migración juvenil
                p.mb-0 Muchos jóvenes abandonan sus territorios en busca de oportunidades urbanas o globales, limitando su participación en la vida comunitaria.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Desvalorización de lo ancestral
                p.mb-0 El conocimiento técnico y global es privilegiado frente a los saberes locales, generando una brecha cultural y simbólica entre generaciones.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cambios en la identidad
                p.mb-0 Las nuevas generaciones se distancian de las prácticas culturales y productivas que antes cohesionaban a la comunidad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tensiones familiares
                p.mb-0 La ausencia de jóvenes en el campo recarga de trabajo a mujeres y personas mayores, afectando la organización familiar y comunitaria.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Brechas de género
                p.mb-0 Las mujeres enfrentan mayores dificultades para acceder a la tierra, participar en decisiones y transmitir sus saberes, profundizando desigualdades.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
