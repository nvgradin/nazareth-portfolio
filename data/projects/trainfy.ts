import { ProjectWithLayout } from '@/lib/project-layout.types';

export const trainfy: ProjectWithLayout = {
  slug: 'trainfy',
  title: 'Trainfy',
  excerpt: 'Plataforma de intercambio deportivo que conecta atletas para compartir conocimientos y entrenar juntos.',

  category: 'product-design',
  tags: ['Product Design', 'UX/UI', 'Branding', 'Fullstack'],

  thumbnail: {
    type: 'image',
    src: '/projects/trainfy/hero.jpg',
    alt: 'Trainfy - Plataforma de intercambio deportivo',
  },

  theme: {
    primary: '#1E3A5F',
    secondary: '#3D5A80',
    accent: '#EE6C4D',
    background: '#f8f9fa',
  },

  layout: {
    // 1) Hero 2 columnas
    hero: {
      title: 'Trainfy',
      subtitle: 'Conectar. Compartir. Moverse. El diseño detrás de Trainfy.',
      intro: 'En el mundo del deporte, el equipo adecuado marca la diferencia. Pero, ¿y si los amantes del deporte pudieron no solo comprar y vender material, sino también intercambiarlo y conectarse entre sí? Esa fue la idea detrás de Trainfy: una plataforma digital que nació con la intención de ser un "Wallapop para deportistas" y evolucionó hacia algo más grande.',
      meta: {
        client: 'Proyecto propio',
        year: '2019-2024',
        role: ['Product Designer', 'UX/UI Designer', 'Fullstack Developer'],
        tools: ['Figma', 'React', 'Node.js', 'PostgreSQL'],
      },
    },

    // 2) Bento Gallery - Sistema de columnas con ratios de altura
    // Cada columna puede tener múltiples celdas con alturas personalizadas
    bento: {
      mode: 'fixed',
      background: '#354251',
      columns: [
        // Columna 1: ancho 1, 2 celdas (65% / 35%)
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-1.jpg',
              alt: 'Pantalla principal de Trainfy mostrando el feed de intercambios deportivos',
              ratio: 0.65,
            },
            {
              src: '/projects/trainfy/bento-5.jpg',
              alt: 'Interfaz de búsqueda de compañeros de entrenamiento en Trainfy',
              ratio: 0.35,
            },
          ],
        },
        // Columna 2: ancho 1, 1 celda (100%)
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-2.png',
              alt: 'Sistema de identidad visual y logotipo de Trainfy sobre fondo azul',
              ratio: 0.44,
            },
            {
              src: '/projects/trainfy/bento-6.jpg',
              alt: 'Mockup de iPhone mostrando la aplicación Trainfy en contexto real',
              ratio: 0.56,
            }
          ],
        },
        // Columna 3: ancho 1, 2 celdas (50% / 50%)
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-3.jpg',
              alt: 'Mockup de iPhone mostrando la aplicación Trainfy en contexto real',
              ratio: 0.6,
            },
            {
              src: '/projects/trainfy/bento-7.jpg',
              alt: 'Diseño responsive de Trainfy adaptado a pantalla móvil',
              ratio: 0.4,
            },
          ],
        },
        // Columna 4: ancho 1, 3 celdas (40% / 30% / 30%)
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-4.png',
              alt: 'Panel de estadísticas y métricas de actividad del usuario',
              ratio: 0.7,
            },
            {
              src: '/projects/trainfy/bento-8.jpg',
              alt: 'Selector de categorías deportivas: running, ciclismo, natación',
              ratio: 0.3,
            },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      title: 'La Creación para Trainfy',
      subtitle: 'Una plataforma pensada para la comunidad deportiva',
    },

    // 4) 3 cards en columnas
    features: [
      {
        image: { type: 'image', src: '/projects/trainfy/feature-branding.jpg', alt: 'UX Research' },
        title: 'Branding',
        description: 'Creación de la identidad, reflejando dinamismo y comunidad.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-ui-ux.jpg', alt: 'UI Design' },
        title: 'UI Design',
        description: 'Diseño de interfaces intuitivas que facilitan el intercambio y la conexión entre atletas.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-dev.jpg', alt: 'Development' },
        title: 'Fullstack Dev',
        description: 'Desarrollo completo de la plataforma con React, Node.js y PostgreSQL.',
      },
    ],

    // 5) Bloque Arquitectura de Información
    editorial: {
      title: 'Arquitectura de Información',
      subtitle: 'Diseño UI/UX centrado en el usuario',
      content: 'Desde el inicio, asumí el reto de transformar esta idea en una experiencia digital real. Mientras el proyecto inicial se centraba en desarrollo puro, decidí ir más allá y diseñar una plataforma intuitiva, funcional y alineada con las necesidades de los usuarios. El 73% de los deportistas amateur abandonan por falta de motivación y comunidad.',
      image: { type: 'image', src: '/projects/trainfy/editorial-full.jpg', alt: 'Trainfy Editorial' },
    },

    // 6) Showcase triptych Branding
    showcase: {
      left: { type: 'image', src: '/projects/trainfy/showcase-left.jpg', alt: 'Showcase Left' },
      centerTop: { type: 'image', src: '/projects/trainfy/showcase-center-top.jpg', alt: 'Showcase Center Top' },
      centerBottom: { type: 'image', src: '/projects/trainfy/showcase-center-bottom.jpg', alt: 'Showcase Center Bottom' },
      right: { type: 'image', src: '/projects/trainfy/showcase-right.jpg', alt: 'Showcase Right' },
    },


    // 8) Web panel
    webPanel: {
      title: 'Diseño responsive',
      description: 'La plataforma fue diseñada con un enfoque mobile-first, garantizando una experiencia óptima en todos los dispositivos.',
      bullets: [
        'Mobile-first approach',
        'Diseño adaptativo',
        'Optimizado para conversión',
        'Accesibilidad WCAG 2.1',
      ],
      mockups: [
        { type: 'image', src: '/projects/trainfy/web-mockup-1.jpg', alt: 'Web Mockup Desktop' },
        { type: 'image', src: '/projects/trainfy/web-mockup-2.jpg', alt: 'Web Mockup Mobile' },
      ],
    },

    // 9) Proceso
    process: [
      {
        number: 1,
        title: 'Research',
        description: 'Entrevistas con usuarios, análisis de competencia y definición de personas.',
      },
      {
        number: 2,
        title: 'Design',
        description: 'Wireframes, prototipos interactivos y sistema de diseño.',
      },
      {
        number: 3,
        title: 'Develop',
        description: 'Desarrollo fullstack, testing y despliegue continuo.',
      },
    ],

    // 10) Quote banner
    quoteBanner: {
      quote: 'Simplemente juega. Diviértete. Disfruta el juego.',
      author: 'Michael Jordan',
      backgroundImage: { type: 'image', src: '/projects/trainfy/quote-bg.jpg', alt: 'Quote Background' },
    },

    // 11) Closing text
    closing: {
      title: 'Resultado',
      content: 'Trainfy representa mi visión de cómo la tecnología puede crear comunidades más fuertes. Desde el branding hasta el código, cada decisión fue tomada pensando en los usuarios y en cómo facilitar conexiones significativas entre deportistas.',
    },
  },

  meta: {
    client: 'Proyecto propio',
    year: '2019-2024',
    duration: '4 meses bootcamp + desarrollo continuo',
    role: ['Product Designer', 'UX/UI Designer', 'Fullstack Developer'],
    tools: ['Adobe XD', 'Figma', 'React', 'Node.js', 'PostgreSQL', 'Redux'],
    deliverables: ['Branding completo', 'Design system', 'App web funcional', 'Documentación'],
  },

  status: 'published',
  order: 1,
};
