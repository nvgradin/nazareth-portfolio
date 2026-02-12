import { ProjectWithLayout } from '@/lib/project-layout.types';

export const lasIslasCies: ProjectWithLayout = {
  slug: 'las-islas-cies',
  title: 'Las Islas Cíes',
  excerpt: 'Proyecto placeholder — contenido pendiente.',

  category: 'digital-experience',
  tags: ['Digital Experience'],

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
      subtitle: 'Placeholder subtitle',
      intro: 'Placeholder intro — contenido pendiente.',
      logo: '/projects/las-islas-cies/Logo.png',
      roles: ['Placeholder'],
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
      title: 'Placeholder — título del heading',
      subtitle: 'Placeholder — subtítulo del heading',
    },

    // 4) Feature cards (3 columnas)
    features: [
      {
        image: { type: 'image', src: '/projects/las-islas-cies/feature-1.jpg', alt: 'Placeholder feature 1' },
        title: 'Placeholder Feature 1',
        description: 'Placeholder — descripción de la primera feature.',
      },
      {
        image: { type: 'image', src: '/projects/las-islas-cies/feature-2.jpg', alt: 'Placeholder feature 2' },
        title: 'Placeholder Feature 2',
        description: 'Placeholder — descripción de la segunda feature.',
      },
      {
        image: { type: 'image', src: '/projects/las-islas-cies/feature-3.jpg', alt: 'Placeholder feature 3' },
        title: 'Placeholder Feature 3',
        description: 'Placeholder — descripción de la tercera feature.',
      },
    ],

    // Image Compare (before/after) — sección variable entre features y quote
    imageCompare: {
      before: { type: 'image', src: '/projects/las-islas-cies/before.jpg', alt: 'Diseño original Las Islas Cíes' },
      after: { type: 'image', src: '/projects/las-islas-cies/after.jpg', alt: 'Rediseño Las Islas Cíes' },
      labels: { before: 'Antes', after: 'Después' },
      background: '#252851',
    },

    // 10) Quote banner
    quoteBanner: {
      quote: 'Placeholder — cita inspiradora del proyecto.',
      author: 'Placeholder Author',
      backgroundImage: { type: 'image', src: '/projects/las-islas-cies/quote-bg.jpg', alt: 'Quote Background' },
    },

    // 11) Closing text
    closing: {
      title: 'Placeholder — título de cierre',
      content: 'Placeholder — texto de cierre del proyecto. Reflexión final sobre el proceso y los aprendizajes.',
    },
  },

  meta: {
    client: 'Placeholder',
    year: 'Placeholder',
    role: ['Placeholder'],
    tools: ['Placeholder'],
  },

  status: 'draft',
  order: 2,
};
