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

    // 2) Bento Gallery
    bento: {
      variant: 'A',
      backgroundColor: '#354251',
      images: [
        { type: 'image', src: '/projects/trainfy/bento-1.jpg', alt: 'Trainfy App Vista 1' },
        { type: 'image', src: '/projects/trainfy/bento-2.png', alt: 'Trainfy App Vista 2' },
        { type: 'image', src: '/projects/trainfy/bento-3.jpg', alt: 'Trainfy Branding' },
        { type: 'image', src: '/projects/trainfy/bento-4.png', alt: 'Trainfy Mockup' },
        { type: 'image', src: '/projects/trainfy/bento-5.jpg', alt: 'Trainfy Mobile' },
        { type: 'image', src: '/projects/trainfy/bento-6.jpg', alt: 'Trainfy Dashboard' },
        { type: 'image', src: '/projects/trainfy/bento-7.jpg', alt: 'Trainfy Profile' },
        { type: 'image', src: '/projects/trainfy/bento-8.jpg', alt: 'Trainfy Sport' },
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
        title: 'UX Research',
        description: 'Investigación de usuarios para entender las necesidades reales de los deportistas amateur y profesionales.',
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

    // 5) Bloque editorial
    editorial: {
      label: '01',
      title: 'El reto',
      content: 'Desde el inicio, asumí el reto de transformar esta idea en una experiencia digital real. Mientras el proyecto inicial se centraba en desarrollo puro, decidí ir más allá y diseñar una plataforma intuitiva, funcional y alineada con las necesidades de los usuarios. El 73% de los deportistas amateur abandonan por falta de motivación y comunidad.',
      image: { type: 'image', src: '/projects/trainfy/editorial-full.jpg', alt: 'Trainfy Editorial' },
    },

    // 6) Showcase triptych
    showcase: {
      left: { type: 'image', src: '/projects/trainfy/showcase-left.jpg', alt: 'Showcase Left' },
      centerTop: { type: 'image', src: '/projects/trainfy/showcase-center-top.jpg', alt: 'Showcase Center Top' },
      centerBottom: { type: 'image', src: '/projects/trainfy/showcase-center-bottom.jpg', alt: 'Showcase Center Bottom' },
      right: { type: 'image', src: '/projects/trainfy/showcase-right.jpg', alt: 'Showcase Right' },
    },

    // 7) Branding panel
    branding: {
      backgroundColor: '#1E3A5F',
      typography: [
        { name: 'Primary', family: 'Poppins', weights: ['400', '500', '600', '700'], sample: 'Aa Bb Cc' },
        { name: 'Secondary', family: 'Inter', weights: ['400', '500'], sample: 'Aa Bb Cc' },
      ],
      colors: [
        { name: 'Primary', hex: '#1E3A5F' },
        { name: 'Secondary', hex: '#3D5A80' },
        { name: 'Accent', hex: '#EE6C4D' },
        { name: 'Light', hex: '#E0FBFC' },
        { name: 'Dark', hex: '#293241' },
      ],
      mockup: { type: 'image', src: '/projects/trainfy/branding-mockup.jpg', alt: 'Branding Mockup' },
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
