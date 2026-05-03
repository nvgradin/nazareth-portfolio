import { ProjectWithLayout } from '@/lib/project-layout.types';

export const lasIslasCies: ProjectWithLayout = {
  slug: 'las-islas-cies',
  title: 'Las Islas Cíes',
  excerpt: 'Proyecto placeholder — contenido pendiente.',

  categories: ['product-design', 'web-dev', 'ux-ui','strategy'],
  tags: ['Product Design & UX', 'Web Development', 'Estrategia'],

  thumbnail: {
    type: 'image',
    src: '/projects/las-islas-cies/hero.jpg',
    alt: 'Las Islas Cíes',
  },

  theme: {
    primary: '#2C5F2D',
    secondary: '#97BC62',
    accent: '#DAA520',
    background: '#f8f9fa',
  },

  layout: {
    hero: {
      title: 'Las Islas Cíes',
      subtitle: 'Navegar las islas antes de llegar a ellas.',
      intro: 'Convertí la web centrada en la venta de billetes a una guía digital que acompaña a los viajeros desde su planificación hasta su experiencia. Un sistema de producto que se replicó en 6 islas.',
      result: '4 portales insulares lanzados en 8 meses. +2 portales replicados por el cliente usando mi sistema. Un modelo que sigue siendo referencia para nuevos destinos.',
      logo: '/projects/las-islas-cies/Logo.png',
      roles: ['Product Design & UX', 'Web', 'Estrategia', 'Contenido'],
      context: 'Proyecto freelance',
      year: '2024 - 2025',
      heroBg: '/projects/las-islas-cies/bento-2.jpg',
    },

    bento: {
      mode: 'fixed',
      background: '#252851',
      columns: [
        {
          width: 1,
          cells: [
            { src: '/projects/las-islas-cies/bento-1.jpg', alt: 'Las Islas Cíes 1', ratio: 0.65 },
            { src: '/projects/las-islas-cies/bento-5.jpg', alt: 'Las Islas Cíes 5', ratio: 0.35 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/las-islas-cies/bento-2.jpg', alt: 'Las Islas Cíes 2', ratio: 0.44 },
            { src: '/projects/las-islas-cies/bento-6.jpg', alt: 'Las Islas Cíes 6', ratio: 0.56 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/las-islas-cies/bento-3.jpg', alt: 'Las Islas Cíes 3', ratio: 0.6 },
            { src: '/projects/las-islas-cies/bento-7.jpg', alt: 'Las Islas Cíes 7', ratio: 0.4 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/las-islas-cies/bento-4.jpg', alt: 'Las Islas Cíes 4', ratio: 0.7 },
            { src: '/projects/las-islas-cies/bento-8.webp', alt: 'Las Islas Cíes 8', ratio: 0.3 },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      title: 'Cómo lo abordé',
      subtitle: 'Las Islas Cíes son un destino de reconocimiento internacional: su Playa de Rodas fue declarada la mejor del mundo por The Guardian. Pero la web no estaba a la altura del activo: era una página simple de venta de billetes, sin contenido, sin estructura, sin identidad. El cliente vino a mí para diseño de merchandising. Pero al revisar sus webs, vi una oportunidad: convertirlas en los portales de referencia del destino, con contenido útil, arquitectura SEO sólida y un modelo de monetización ampliado. Le propuse diseñarlo como sistema replicable desde el inicio. Aprobó. Y lo construí como producto, no como proyecto aislado.',
    },

    // 4) Feature cards (3 columnas)
    features: [
      {
        image: { type: 'image', src: '/projects/las-islas-cies/feature-ui-ux.jpg', alt: 'Placeholder feature 1' },
        title: 'De página de billetes a guía de destino',
        description: 'La web original vendía billetes. Lo que construí era otra cosa: una guía digital diseñada para acompañar la experiencia del viajero antes de llegar a la isla.',
      },
      {
        image: { type: 'image', src: '/projects/las-islas-cies/feature-web.jpg', alt: 'Placeholder feature 2' },
        title: 'Tranformación de web a producto escalable',

        description: 'Arquitectura de información modular. Diseño de componentes reutilizables. Estructura UX/UI preparada para replicarse sin rediseñar desde cero. Es un sistema escalable desde el primer día.',
      },
      {
        image: { type: 'image', src: '/projects/las-islas-cies/feature-marketing.jpg', alt: 'Placeholder feature 3' },
        title: 'SEO desde la arquitectura de contenido',
        description: 'El dominio ya tenía años de posicionamiento. Lo que hice fue multiplicar exponencialmente sus puntos de entrada orgánicos con decenas de páginas indexables: cada ruta, playa, restaurante y experiencia respondía búsquedas reales.',
      },
    ],

    // Before/After
    imageCompare: {
      before: { type: 'image', src: '/projects/las-islas-cies/before.jpg', alt: 'Diseño original Las Islas Cíes' },
      after: { type: 'image', src: '/projects/las-islas-cies/after.jpg', alt: 'Rediseño Las Islas Cíes' },
      labels: { before: 'Antes', after: 'Después' },
      background: '#252851',
      caption: 'La web original acumulaba información sin jerarquía ni propósito. El rediseño convirtió las Islas Cíes en una guía digital: clara, navegable y a la altura del destino.',
    },

    // Web editorial + galería
    web: {
      title: 'De web de billetes\na portal de destino',
      subtitle: 'Navegar las Islas\nantes de llegar a ellas.',
      content: '',
      columns: [
        'La web original tenía una función: vender billetes. Lo que construí tenía otra: que el visitante pudiera conocer, planificar y preparar toda la experiencia además de comprar su billete.',
        'Creé un sistema de fichas propio para rutas de senderismo, playas, puntos de interés y restaurantes. Diseñé una arquitectura de contenido escalable en WordPress que permitió convertir una web simple en un sistema de portales preparado para crecer.',
        'Todo el contenido — redacción, estructura, jerarquía — lo desarrollé yo. El SEO fue consecuencia directa de esa arquitectura de contenido, no una capa añadida encima.',
      ],
    },

    webPanel: {
      title: 'De web de billetes a portal de destino',
      description: 'Navegar las Islas antes de llegar a ellas.',
      mockups: [
        { type: 'image', src: '/projects/las-islas-cies/MockupWeb1_LasIslasCies.jpg', alt: 'Mockup Las Islas Cíes' },
        { type: 'image', src: '/projects/las-islas-cies/bento-7.jpg', alt: 'Mockup Las Islas Cíes' },
        { type: 'image', src: '/projects/las-islas-cies/bento-4.jpg', alt: 'Mockup Las Islas Cíes' },
        { type: 'image', src: '/projects/las-islas-cies/bento-5.jpg', alt: 'Mockup Las Islas Cíes' },
        { type: 'image', src: '/projects/las-islas-cies/bento-3.jpg', alt: 'Mockup Las Islas Cíes' },
      ],
    },

    // Statement — frase de impacto
    statementBlock: {
      label: 'Insight',
      setup: 'El mejor activo de un destino no es su belleza.',
      statement: 'Es cómo te invitan a descubrirlo.',
      accentColor: '#252851',
    },

    // Modelo escalable — 4 islas
    sistemScaled: {
      editorial: {
        label: 'Resultado',
        title: 'Un sistema que escaló',
        subtitle: 'Cuatro islas. Ocho meses. Una arquitectura.',
        content: 'Desde el primer día lo diseñé como sistema replicable. La prueba llegó en menos de un año. Cada portal adaptado a su destino, manteniendo la arquitectura de contenido, el sistema de fichas y la integración con navieras locales. Un modelo de portal turístico insular que sigue siendo referencia.',
      },
      logos: [
        { src: '/logos/Las_Islas_Cies.png', alt: 'Las Islas Cíes' },
        { src: '/logos/EU_ONS.png', alt: 'Isla de Ons' },
        { src: '/logos/I_LOVE_LOBOS.png', alt: 'Isla de Lobos' },
        { src: '/logos/I_LOVE_LA_GRACIOSA.png', alt: 'Isla de la Graciosa', scale: 1.3 },
      ],
      background: '#252851',
      steps: [
        {
          step: 1,
          image: '/projects/las-islas-cies/bento-2.jpg',
          imageAlt: 'Web Las Islas Cíes',
          title: 'Las Islas Cíes',
          description: 'Lanzamiento octubre 2024',
        },
        {
          step: 2,
          image: '/projects/las-islas-cies/bento-4.jpg',
          imageAlt: 'Web Isla de Ons — placeholder',
          title: 'Isla de Ons',
          description: 'Lanzamiento diciembre 2024',
        },
        {
          step: 3,
          image: '/projects/las-islas-cies/bento-3.jpg',
          imageAlt: 'Web Isla de Lobos — placeholder',
          title: 'Isla de Lobos',
          description: 'Lanzamiento enero 2025',
        },
        {
          step: 4,
          image: '/projects/las-islas-cies/MockupWeb1_LasIslasCies.jpg',
          imageAlt: 'Web Isla de la Graciosa — placeholder',
          title: 'Isla de la Graciosa',
          description: 'Lanzamiento abril 2025',
        },
      ],
    },

    // Quote cierre
    quoteBanner: {
      quote: 'El mejor SEO es tener algo que merezca la pena encontrar.',
      author: 'Nazareth, sobre Las Islas Cíes',
      backgroundImage: { type: 'image', src: '/projects/las-islas-cies/bento-8.webp', alt: 'Quote Background' },
      overlay: true,
    },

    layoutOrder: [
      'hero',
      'bento',
      'heading',
      'features',
      'imageCompare',
      'web',
      'statementBlock',
      'sistemScaled',
      'quoteBanner',
    ],
  },

  meta: {
    client: 'Las Islas Cíes',
    year: '2024-2025',
    role: ['Product Design & UX', 'Web', 'Estrategia', 'SEO', 'Contenido'],
    tools: ['Wordpress'],
  },

  tagline: 'Donde el océano se convierte en memoria.',
  cover: '/projects/las-islas-cies/bento-2.jpg',
  featured: true,
  ambientColor: '#252851',

  status: 'published',
  order: 2,
  nextStack: ['silvia-fernandez-de-luna', 'amigo-secreto', 'trainfy'],
};
