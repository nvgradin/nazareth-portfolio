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
      intro: 'Las Islas Cíes, hogar de la icónica Playa de Rodas, reconocida como la mejor playa del mundo por The Guardian, son un destino de gran la belleza natural: un paraíso. Mi misión fue reflejar esta esencia en la web. Por ello propuse convertirla en una guía digital que acompañara a los viajeros desde la planificación hasta la vivencia de su experiencia en este rincón único de Galicia. Dar vida a esta transformación, rediseñando la web completamente para modernizar su aspecto, mejorar la navegación y abrir la puerta a los viajeros para que puedan planificar su visita, descubrir las rutas y sus puntos de interés, para reservar su billete de barco y disfrutar plenamente su experiencia en Las Islas Cíes.',
      result: '4 portales insulares lanzados en 8 meses. Un modelo que sigue siendo referencia para nuevos destinos.',
      logo: '/projects/las-islas-cies/Logo.png',
      roles: ['Product Design & UX', 'Web', 'Estrategia', 'SEO', 'Contenido'],
      context: 'Proyecto freelance',
      year: '2024 - 2025',
      heroBg: '/projects/las-islas-cies/bento-1.jpg',
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
      subtitle: 'La misión era clara: renovar la web para que fuera tan intuitiva y acogedora como las islas mismas. Desde el inicio, el reto fue diseñar una estructura que no solo organizara la información de manera clara, sino que también invitara a los usuarios a sumergirse en la experiencia que ofrecen las islas. A través de un enfoque creativo y funcional, reestructuré el contenido, optimicé los flujos de usuario y diseñé una interfaz visual inspirada en los colores y texturas del entorno natural. Cada decisión, desde la navegación hasta los elementos visuales, buscó capturar la esencia de las islas, facilitando al mismo tiempo que los visitantes encontraran lo que necesitaban con facilidad.',
    },

    // 4) Feature cards (3 columnas)
    features: [
      {
        image: { type: 'image', src: '/projects/las-islas-cies/feature-ui-ux.jpg', alt: 'Placeholder feature 1' },
        title: 'Diseño UI UX',
        description: 'Placeholder — descripción de la primera feature.',
      },
      {
        image: { type: 'image', src: '/projects/las-islas-cies/feature-web.jpg', alt: 'Placeholder feature 2' },
        title: 'Desarrollo Web',

        description: 'Placeholder — descripción de la segunda feature.',
      },
      {
        image: { type: 'image', src: '/projects/las-islas-cies/feature-marketing.jpg', alt: 'Placeholder feature 3' },
        title: 'Marketing',
        description: 'Placeholder — descripción de la tercera feature.',
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
        'La web original tenía una función: vender billetes. Lo que construí tenía otra: que el visitante pudiera conocer, planificar y soñar con las islas antes de comprar el billete.',
        'Creé un sistema de fichas propio para rutas de senderismo, playas, puntos de interés y restaurantes. Rediseñé la home, la tienda, el blog — convertido en magazine. Integré el sistema de compra con las navieras. Añadí selector de idioma, newsletter, testimonios y sección de experiencias.',
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
      afterBranding: true,
    },

    // Bloque resultado
    textBlock: {
      variant: 'editorial',
      label: 'Resultado',
      title: 'Lo que se construyó',
      columns: [
        { text: 'Una web que era una página de billetes se convirtió en el portal de referencia de uno de los destinos más visitados de Galicia. Sin datos de analytics propios — el cliente gestionó eso — pero con un indicador claro: el primer verano, los billetes se agotaron.' },
        { text: 'Y el modelo funcionó tan bien que se replicó tres veces más en menos de un año. Cuatro islas. Ocho meses. Un sistema.' },
        { text: 'Columna 3 — rellena aquí.' },
      ],
    },

    // Quote cierre
    quoteBanner: {
      quote: 'El mejor SEO es tener algo que merezca la pena encontrar.',
      author: 'Nazareth, sobre Las Islas Cíes',
      backgroundImage: { type: 'image', src: '/projects/las-islas-cies/bento-8.webp', alt: 'Quote Background' },
    },
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
