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
      subtitle: 'Creatividad Estrategia de Marketing',
      intro: 'Tarxeta Cultura Galega es la iniciativa promovida por AGADIC con el objetivo de promocionar y potenciar el consumo de cultura gallega entre jóvenes de 18 a 30 años. La campaña subvenciona a través de bonos digitales la adquisición de libros en gallego y entradas a espectáculos de artes escénicas de la comunidad en galego. Una campaña de lanzamiento creada para la iniciativa de AGADIC en colaboración con la Xunta de Galicia, Marca Galicia y Afundación.',
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
            { src: '/projects/tarxetaculturagalega/bento-1.jpg', alt: 'Tarxeta Cultura Galega 1', ratio: 0.6 },
            { src: '/projects/tarxetaculturagalega/bento-5.jpg', alt: 'Tarxeta Cultura Galega 5', ratio: 0.4 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/tarxetaculturagalega/bento-2.jpg', alt: 'Tarxeta Cultura Galega 2', ratio: 0.45 },
            { src: '/projects/tarxetaculturagalega/bento-6.jpg', alt: 'Tarxeta Cultura Galega 6', ratio: 0.55 },
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
            { src: '/projects/tarxetaculturagalega/bento-4.jpg', alt: 'Tarxeta Cultura Galega 4', ratio: 0.5 },
            { src: '/projects/tarxetaculturagalega/bento-8.jpg', alt: 'Tarxeta Cultura Galega 8', ratio: 0.5 },
          ],
        },
      ],
    },

    heading: {
      title: 'La Creación para Tarxeta Cultura Galega',
      subtitle: 'He tenido la oportunidad de crear la Estrategia Creativa para la campaña de lanzamiento de la Tarxeta Cultura Galega. El objetivo es claro: promocionar y potenciar el consumo de cultura gallega entre jóvenes desde 18 a 30 años.',
    },

    features: [
      {
        image: { type: 'image', src: '/projects/tarxetaculturagalega/bento-7.jpg', alt: 'Ilustración' },
        title: 'Ilustración',
        description: 'Placeholder — descripción de la ilustración.',
      },
      {
        image: { type: 'image', src: '/projects/tarxetaculturagalega/bento-3.jpg', alt: 'Publicidad & Design' },
        title: 'Publicidad & Design',
        description: 'Placeholder — descripción de publicidad y diseño.',
      },
      {
        image: { type: 'image', src: '/projects/tarxetaculturagalega/bento-6.jpg', alt: 'Estrategia' },
        title: 'Estrategia',
        description: 'Placeholder — descripción de la estrategia.',
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
        '¿Cómo sería Castelao si viviera ahora? ¿Sería Castelao, también graffitero? ¿Cómo sería Rosalía de Castro? ¿Iría en bicicleta a Compostela? ¿Se harían selfies? ¿Serían Hipsters? ¿Quienes hoy están creando cultura gallega? Porque los Castelaos y Rosalías de ahora, están aquí. ¿Te las vas a perder?',
        'Un movimiento que despierta la atención, que habla en el actual idioma para dar valor a la cultura presente, la creación de íconos de la futura cultura gallega.',
      ],
      background: '#364A4A',
      images: [
        { src: '/projects/tarxetaculturagalega/bento-2.jpg', alt: 'Tarxeta Cultura Galega — concepto' },
        { src: '/projects/tarxetaculturagalega/bento-4.jpg', alt: 'Tarxeta Cultura Galega — ilustración' },
        { src: '/projects/tarxetaculturagalega/bento-6.jpg', alt: 'Tarxeta Cultura Galega — campaña' },
        { src: '/projects/tarxetaculturagalega/soloimagen.jpg', alt: 'Tarxeta Cultura Galega — detalle' },
      ],
    },

    mediaGrid: {
      title: 'Publicidad & Creatividad',
      subtitle: 'Aplicaciones publicitarias de la campaña',
      body: 'A raíz de la descontextualización temporal de figuras importantes de la cultura gallega como Castelao o Rosalía, hemos propuesto diferentes cuestiones, todas creadas a partir de la ilustración de esos escenarios "hipotéticos" para lanzar cuestiones e impactar. Nuestra propuesta es la de hacer consciente de que los Castelaos y Rosalías de hoy, están aquí.',
      row1: [
        { src: '/projects/tarxetaculturagalega/bento-5.jpg', alt: 'Publicidad Tarxeta Cultura Galega' },
        { src: '/projects/tarxetaculturagalega/bento-7.jpg', alt: 'Creatividad Tarxeta Cultura Galega' },
      ],
      row2: [
        { src: '/projects/tarxetaculturagalega/bento-8.jpg', alt: 'Campaña Tarxeta Cultura Galega' },
        { src: '/projects/tarxetaculturagalega/Mockup_TCG_Tarjetas_Horizontal3.jpg', alt: 'Mockup Tarxeta Cultura Galega' },
        { src: '/projects/tarxetaculturagalega/bento-1.jpg', alt: 'Tarxeta Cultura Galega — piezas' },
      ],
    },

    clientLogosStatic: true,

    clientLogos: [
      { src: '/projects/tarxetaculturagalega/client-logos/logotipo_agadic.png', alt: 'AGADIC' },
      { src: '/projects/tarxetaculturagalega/client-logos/Xunta_de_Galicia.png', alt: 'Xunta de Galicia' },
      { src: '/projects/tarxetaculturagalega/client-logos/logotipo_afundacion.png', alt: 'Afundación' },
      { src: '/projects/tarxetaculturagalega/client-logos/logotipo_marcagalicia.png', alt: 'Marca Galicia' },
      { src: '/projects/tarxetaculturagalega/client-logos/Deputacion_de_Pontevedra.png', alt: 'Deputación de Pontevedra' },
      { src: '/projects/tarxetaculturagalega/client-logos/logotipo_asissantiago.png', alt: 'Asis Santiago' },
    ],

    quoteBanner: {
      quote: 'Placeholder — cita inspiradora del proyecto.',
      author: 'Tarxeta Cultura Galega',
      backgroundImage: { type: 'image', src: '/projects/tarxetaculturagalega/TCG_portada.jpg', alt: 'Tarxeta Cultura Galega' },
      imagePosition: 'center',
    },
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
