import { ProjectWithLayout } from '@/lib/project-layout.types';

export const tarxetaCulturaGalega: ProjectWithLayout = {
  slug: 'tarxeta-cultura-galega',
  title: 'Tarxeta Cultura Galega',
  excerpt: 'Estrategia creativa para una campaña de lanzamiento que conecta la cultura gallega con los jóvenes de 18 a 30 años.',

  categories: ['marketing', 'strategy'],
  tags: ['Marketing', 'Estrategia'],

  thumbnail: {
    type: 'image',
    src: '/projects/tarxetaculturagalega/TCG_portada.jpg',
    alt: 'Tarxeta Cultura Galega',
  },

  theme: {
    primary: '#476a6b',
    secondary: '#2E6B8A',
    accent: '#E8A44A',
    background: '#476a6b',
  },

  layout: {
    hero: {
      title: 'Tarxeta Cultura Galega',
      subtitle: 'Vive a cultura galega',
      intro: 'Diseño del concepto creativo y desarrollo de campaña para una iniciativa institucional pionera orientada a incentivar el consumo cultural entre jóvenes.',
      logo: '/projects/tarxetaculturagalega/logo.png',
      roles: ['Estrategia', 'Marketing'],
      year: '2015',
      heroBg: '/projects/tarxetaculturagalega/bento-7.jpg',
    },

    bento: {
      mode: 'fixed',
      background: '#364A4A',
      columns: [
        {
          width: 1,
          cells: [
            { src: '/projects/tarxetaculturagalega/TCG_Bus.png', alt: 'Tarxeta Cultura Galega 1', ratio: 0.6 },
            { src: '/projects/tarxetaculturagalega/bento-5.png', alt: 'Tarxeta Cultura Galega 5', ratio: 0.4 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/tarxetaculturagalega/bento-6.jpg', alt: 'Tarxeta Cultura Galega 2', ratio: 0.45 },
            { src: '/projects/tarxetaculturagalega/Tarxeta-Bono-Cultura-Galega-Libreria.png', alt: 'Tarxeta Cultura Galega 6', ratio: 0.55 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/tarxetaculturagalega/bento-3.jpg', alt: 'Tarxeta Cultura Galega 3', ratio: 0.6 },
            { src: '/projects/tarxetaculturagalega/bento-7.jpg', alt: 'Tarxeta Cultura Galega 7', ratio: 0.4 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/tarxetaculturagalega/TCG_Cartel.png', alt: 'Tarxeta Cultura Galega 4', ratio: 0.5 },
            { src: '/projects/tarxetaculturagalega/bento-8.jpg', alt: 'Tarxeta Cultura Galega 8', ratio: 0.5 },
          ],
        },
      ],
    },

    heading: {
      title: 'Construcción de una campaña institucional\npara activar el acceso a la cultura entre jóvenes',
      subtitle: [
        'En 2015, distintas instituciones públicas y entidades culturales en Galicia se unieron para impulsar el consumo cultural entre la población joven.', 
        'El objetivo era acercar la cultura a los jóvenes de 18 a 30 años creando un bono que potencie el consumo cultural de forma deseable, comprensible y relevante.',
        'Mi rol fue el de diseñar el concepto creativo y desarrollar la campaña de lanzamiento, trabajando en estrecha colaboración con los equipos de consultoría y las instituciones involucradas.',
        'Actores implicados: Galipad Consulting, AGADIC, Xunta de Galicia, Afundación, Marca Galicia, Deputación de Pontevedra y la Red de librerías y espacios culturales.',
        ],
        },

    features: [
      {
        image: { type: 'image', src: '/projects/tarxetaculturagalega/bento-7.jpg', alt: 'Ilustración' },
        title: 'Concepto e Ilustración',
        description: 'La descontextualización temporal de figuras icónicas gallegas.',
      },
      {
        image: { type: 'image', src: '/projects/tarxetaculturagalega/bento-3.jpg', alt: 'Publicidad & Design' },
        title: 'Publicidad y Diseño',
        description: 'Aplicación del concepto a todos los soportes.',
      },
      {
        image: { type: 'image', src: '/projects/tarxetaculturagalega/Tarxeta-Bono-Cultura-Galega-Libreria.png', alt: 'Estrategia' },
        title: 'Estrategia de lanzamiento',
        description: 'Conectar con el público joven en su propio lenguaje.',
      },
    ],

    introParallax: {
      src: '/projects/tarxetaculturagalega/TCG_portada.jpg',
      alt: 'Tarxeta Cultura Galega',
    },

    brandingScroller: {
      title: 'CREATIVIDAD & CONCEPTO',
      description: 'Descontextualización temporal como motor creativo',
      bullets: [
        'La propuesta creativa se basa en la idea de descontextualizar temporalmente a figuras icónicas de la cultura gallega, como Castelao o Rosalía de Castro, para imaginar cómo serían si vivieran en la actualidad. Esta estrategia busca generar un impacto visual y conceptual que conecte con el público joven, invitándolos a reflexionar sobre la relevancia de la cultura gallega en su vida cotidiana y a descubrir a los "Castelaos y Rosalías" de hoy.',
        '¿Cómo sería Castelao si viviera ahora? ¿Sería graffitero? ¿Cómo sería Rosalía de Castro? ¿Viviría en Santiago de Compostela? ¿Se harían selfies? ¿Serían Hipsters? ¿Quiénes están creando cultura gallega hoy? Porque los Castelaos y Rosalías de ahora, ya están aquí. ¿Te las vas a perder?',      ],
      background: '#0D1520',
      imageMode: 'wide',
      images: [
        { src: '/projects/tarxetaculturagalega/TCG_versiones_ollovidrioteatro1080.jpg', alt: 'Tarxeta Cultura Galega — Versión Ollo de vidrio' },
        { src: '/projects/tarxetaculturagalega/TCG_versiones_juntos1080.jpg', alt: 'Tarxeta Cultura Galega — campaña' },
        { src: '/projects/tarxetaculturagalega/soloimagen.jpg', alt: 'Tarxeta Cultura Galega — detalle' },
        { src: '/projects/tarxetaculturagalega/bento-2.jpg', alt: 'Tarxeta Cultura Galega — concepto' },

      ],
    },

    mediaGrid: {
      title: 'Publicidad & Creatividad',
      subtitle: 'Aplicaciones publicitarias de la campaña',
      body: 'A raíz de la descontextualización temporal de figuras importantes de la cultura gallega como Castelao o Rosalía, hemos propuesto diferentes cuestiones, todas creadas a partir de la ilustración de esos escenarios "hipotéticos" para lanzar cuestiones e impactar. Nuestra propuesta es la de hacer consciente de que los Castelaos y Rosalías de hoy, están aquí.',
      row1: [
        { src: '/projects/tarxetaculturagalega/TCG_Bus.png', alt: 'Publicidad Tarxeta Cultura Galega' },
        { src: '/projects/tarxetaculturagalega/Mockup_TCG_Valla_Publi.png', alt: 'Creatividad Tarxeta Cultura Galega' },
      ],
      row2: [
        { src: '/projects/tarxetaculturagalega/tarxeta_bono_cultura_galega_presentacion1.png', alt: 'Presentación Oficial Tarxeta Cultura Galega' },
        { src: '/projects/tarxetaculturagalega/tarxetabonopresentacion3.jpg', alt: 'Presentación Oficial Tarxeta Cultura Galega' },
        { src: '/projects/tarxetaculturagalega/Tarxeta-Bono-Cultura-Galega-Libreria.png', alt: 'Tarxeta Cultura Galega — piezas' },
      ],
    },

    textBlock: {
      variant: 'editorial',
      label: 'Resultado',
      title: 'Una iniciativa para promocionar la cultura gallega',
      columns: [
        { text: 'La Tarxeta Cultura Galega fue presentada oficialmente y posicionada como una iniciativa innovadora dentro del ecosistema cultural gallego, facilitando el acceso de jóvenes a la cultura a través de un modelo híbrido entre incentivo económico y experiencia.'},
        { text: 'La campaña movilizó 300.000€ en el sector editorial y de artes escénicas en su primer año, tuvo presentación oficial con cobertura en medios y fue calificada institucionalmente como pionera.' },
      ],
    },

    clientLogosStatic: true,
    clientLogosLabel: 'Organización y colaboradores',
    clientLogosNote: 'Fue definida oficialmente como "iniciativa pionera e innovadora" por la Xunta de Galicia.',

    clientLogos: [
      { src: '/projects/tarxetaculturagalega/client-logos/logotipo_agadic.png', alt: 'AGADIC' },
      { src: '/projects/tarxetaculturagalega/client-logos/Xunta_de_Galicia.png', alt: 'Xunta de Galicia' },
      { src: '/projects/tarxetaculturagalega/client-logos/logotipo_afundacion.png', alt: 'Afundación' },
      { src: '/projects/tarxetaculturagalega/client-logos/logotipo_marcagalicia.png', alt: 'Marca Galicia' },
      { src: '/projects/tarxetaculturagalega/client-logos/Deputacion_de_Pontevedra.png', alt: 'Deputación de Pontevedra' },
      { src: '/projects/tarxetaculturagalega/client-logos/logotipo_asissantiago.png', alt: 'Asis Santiago' },
    ],

    quoteBanner: {
      quote: 'Los Castelaos y Rosalías de hoy están aquí. ¿Te las vas a perder?',
      author: 'Tarxeta Cultura Galega',
      backgroundImage: { type: 'image', src: '/projects/tarxetaculturagalega/TCG_portada.jpg', alt: 'Tarxeta Cultura Galega' },
      imagePosition: 'center',
      overlay: true,
    },

    layoutOrder: [
      'hero',
      'bento',
      'heading',
      'features',
      'introParallax',
      'brandingScroller',
      'mediaGrid',
      'textBlock',
      'clientLogos',
      'quoteBanner',
    ],
  },

  meta: {
    client: 'AGADIC — Xunta de Galicia',
    year: '2022',
    role: ['Art Director', 'Brand Designer', 'Estrategia Creativa'],
    tools: ['Illustrator', 'Photoshop', 'After Effects'],
    deliverables: ['Estrategia creativa', 'Ilustración', 'Diseño gráfico', 'Publicidad', 'Campaña de lanzamiento'],
  },

  tagline: 'Cultura gallega para la generación que la está creando.',
  cover: '/projects/tarxetaculturagalega/TCG_portada.jpg',
  featured: false,
  ambientColor: '#1B3A5C',
  ambientGradient: 'linear-gradient(135deg, #1B3A5C 0%, #2E6B8A 100%)',

  status: 'published',
  order: 6,
  nextStack: ['trainfy', 'las-islas-cies', 'silvia-fernandez-de-luna'],
};
