export default {
  global: {
    Name: 'Fundamentos socioeconómicos para la transición',
    Description:
      'Este componente aborda las bases socioeconómicas de la transición agroecológica, reconociendo que la sostenibilidad del predio depende tanto de sus condiciones ambientales y productivas como de las dinámicas familiares, comunitarias y económicas que lo sostienen. Se analizan los recursos disponibles, las relaciones intergeneracionales y de género, las dinámicas de mercado y las estrategias locales de reproducción social y económica, integrando herramientas participativas para mapear actores, circuitos y prácticas que fortalecen la transición.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos socioeconómicos de la transición agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Crisis socioeconómica rural y pérdida de autonomía',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Impactos del sistema agroalimentario dominante',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fragmentación del tejido social',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Pérdida de memoria biocultural',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Relaciones de dominación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Fragmentación generacional',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagnóstico predial socioeconómico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Importancia del diagnóstico socioeconómico en la transición agroecológica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Relación del diagnóstico con el IPPTA y la planificación familiar',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Principios sociales y económicos de la transición agroecológica',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Enfoque comunitario y de género del sistema',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Economías para la vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Economía circular y solidaria',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sistemas participativos de garantías',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión del conocimiento agroecológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Apertura epistémica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Saberes en diálogo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Campesino a campesino',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Organización colectiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Organizaciones territoriales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Espacios de convergencia',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Complementariedad comunitaria',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Enfoque de género',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elaboración de mapas sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Usos culturales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Usos estéticos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Usos recreacionales',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Economías para la vida',
      referencia:
        'Espelt, R. (2024). Agroecología y economías sociales y solidarias, una alianza frente al capitalismo de plataforma. Center for Open Science.',
      tipo: 'Artículo',
      link: 'https://ideas.repec.org/p/osf/socarx/w98rq.html',
    },
    {
      tema: 'Sistemas participativos de garantías',
      referencia:
        'SWISSAID Colombia. (2020). Sistema Participativo de Garantía de Calidad de las Semillas: Una experiencia en Colombia [Video]. SWISSAID.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BxLw6eU-1kc',
    },
    {
      tema: 'Campesino a campesino',
      referencia: 'ANAP. (2016). Metodología de Campesino a Campesino. OXFAM',
      tipo: 'Cartilla',
      link:
        'https://www.ipscuba.net/media/2021/08/Metodologia-de-campesino-a-campesino.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía territorial',
      significado:
        'capacidad de las comunidades rurales para decidir sobre el uso de sus recursos, su producción y su organización social, sin depender de actores externos.',
    },
    {
      termino: 'Circuitos cortos de comercialización',
      significado:
        'formas de intercambio que acercan directamente productores y consumidores, reducen intermediarios y fortalecen la economía local.',
    },
    {
      termino: 'Complementariedad generacional',
      significado:
        'integración de aportes de jóvenes, adultos y mayores en la vida comunitaria, reconociendo la diversidad de saberes y experiencias.',
    },
    {
      termino: 'Construcción colectiva del conocimiento',
      significado:
        'proceso participativo en el que las comunidades crean y comparten saberes a partir de la práctica, el diálogo y la cooperación.',
    },
    {
      termino: 'Economía circular',
      significado:
        'modelo productivo que busca aprovechar los recursos de manera integral, reducir desperdicios y regenerar los ciclos naturales.',
    },
    {
      termino: 'Economía social y solidaria',
      significado:
        'sistema económico basado en cooperación, equidad y apoyo mutuo, que prioriza el bienestar comunitario sobre la acumulación individual.',
    },
    {
      termino: 'Organización social de base agroecológica',
      significado:
        'articulaciones comunitarias que articulan familias y colectivos para gestionar producción, cultura y defensa del territorio de manera conjunta con perspectiva agroecológica.',
    },
    {
      termino: 'SPG (Sistemas Participativos de Garantía)',
      significado:
        'mecanismos comunitarios de confianza y credibilidad para certificar producción agroecológica, basados en participación activa de productores, consumidores y organizaciones sociales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, E. E. (Coord.). (2022). Agroecología y organización social: Estudios críticos sobre prácticas y saberes. Universidad de Monterrey y Editorial Ítaca. ',
      link: 'https://libreriacentros.clacso.org/publicacion.php?p=2896&cm=668',
    },
    {
      referencia:
        'Alegría Fernández, G. A. (2020). La agroecología: Una estrategia en educación ambiental. Universidad del Cauca. ISBN 978-958-665-740-2.',
      link: '',
    },
    {
      referencia: 'ANAP. (2016). Metodología de campesino a campesino. OXFAM.',
      link: '',
    },
    {
      referencia:
        'Coraggio, J. L. (Comp.). (2016). Economía social y solidaria en movimiento. Universidad Nacional de General Sarmiento, CLACSO y Instituto de Altos Estudios Nacionales. ',
      link: 'https://repositorio.ungs.edu.ar/handle/UNGS/266',
    },
    {
      referencia:
        'Giraldo, O. F. (2018). Ecología política de la agricultura: Agroecología y posdesarrollo. Universidad Autónoma Chapingo.',
      link: '',
    },
    {
      referencia:
        'Giraldo, O. F. (2022). Multitudes agroecológicas. Universidad Autónoma Chapingo.',
      link: '',
    },
    {
      referencia:
        'Pan-Montojo González, F. (2023). La economía circular, un nuevo paradigma. Revista de Obras Públicas, (3640), enero-febrero. Colegio de Ingenieros de Caminos, Canales y Puertos de España.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2024). Guía para el levantamiento y registro de indicadores de género para la transición agroecológica en el instrumento de planificación predial para la transición agroecológica (IPPTA). FAO.',
      link: '',
    },
    {
      referencia:
        'Espelt, R. (2024). Agroecología y economías sociales y solidarias: Una alianza frente al capitalismo de plataforma. SocArXiv. Center for Open Science.',
      link: '',
    },
    {
      referencia:
        'Lugo Perea, L. J. (2019). Agroecología y pensamiento decolonial: Las agroecologías otras interepistémicas (1.ª ed.). Universidad del Tolima.',
      link:
        'https://repository.ut.edu.co/bitstreams/e2f046ce-499f-45bf-82f4-409f39f46f2d/download',
    },
    {
      referencia:
        'Mier y Terán, M., Giraldo, O. F., Aldasoro, M., Morales, H., Ferguson, B. G., Rosset, P., y Campos, C. (2018). Bringing agroecology to scale: Key drivers and emblematic cases. Agroecology and Sustainable Food Systems, 42(6), 637-665. ',
      link: '',
    },
    {
      referencia:
        'SWISSAID Colombia. (2020). Sistema participativo de garantía de calidad de las semillas: Una experiencia en Colombia [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=BxLw6eU-1kc',
    },
    {
      referencia:
        'Reyes-García, V. (2010). Conocimiento ecológico tradicional para la conservación: Dinámicas y conflictos. Papeles de Relaciones Ecosociales y Cambio Global, (107), 1-12. FUHEM Ecosocial.',
      link:
        'https://www.fuhem.es/media/cdv/file/biblioteca/PDF%20Papeles/107/Conocimiento_ecologico_tradicional.pdf',
    },
    {
      referencia:
        'Seibert, I. G., Sayeed, A. T., Georgieva, Z., y Guerra, A. (2019). Sin feminismo no hay agroecología. Observatorio del Derecho a la Alimentación y la Nutrición.',
      link: '',
    },
    {
      referencia:
        'Siliprandi, E., y Zuluaga, G. P. (2014). Género, agroecología y soberanía alimentaria. Icaria.',
      link: '',
    },
    {
      referencia:
        'Soler, M., Rivera, M., y García Roces, I. (2021). Agroecología feminista para la soberanía alimentaria: ¿De qué estamos hablando? LEISA Revista de Agroecología, 37(2), 6-11.',
      link: '',
    },
    {
      referencia:
        'Van der Ploeg, J. D. (2008). Nuevos campesinos: Campesinos e imperios alimentarios (I. Bloemen y V. Claudín, Trads.). Icaria Editorial.',
      link: '',
    },
    {
      referencia:
        'Valdivia-Díaz, M., Le Coq, J. F., y Daza, P. (2022). Propuesta de hoja de ruta para el escalamiento de la agroecología en Colombia: Desde un análisis de las políticas, programas y factores limitantes actuales (Info Note). CGIAR.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Alava Arevalo',
          cargo: 'Instructor técnico',
          centro:
            'Centro Internacional de Producción Limpia Lope - Regional Nariño',
        },
        {
          nombre: 'Gonzalo Cardona',
          cargo: 'Coordinador Colombia',
          centro: 'Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Pablo Aguirre',
          cargo: 'Coordinador',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) - Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Jenny Gómez',
          cargo: 'Asistente técnica',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) - Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Roger Garcia',
          cargo: 'Consultor',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC) - Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
