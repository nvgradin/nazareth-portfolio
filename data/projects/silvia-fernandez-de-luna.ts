import { ProjectWithLayout } from '@/lib/project-layout.types';

export const silviaFernandezDeLuna: ProjectWithLayout = {
  slug: 'silvia-fernandez-de-luna',
  title: 'Silvia Fernández De Luna',
  excerpt: 'Proyecto placeholder — contenido pendiente.',

  category: 'branding',
  tags: ['Branding'],

  thumbnail: {
    type: 'image',
    src: '/projects/silvia-fernandez-de-luna/hero.jpg',
    alt: 'Silvia Fernández De Luna',
  },

  theme: {
    primary: '#4A3728',
    secondary: '#8B7355',
    accent: '#C9A96E',
    background: '#f8f9fa',
  },

  layout: {
    hero: {
      title: 'Silvia Fernández De Luna',
      subtitle: 'Placeholder subtitle',
      intro: 'Placeholder intro — contenido pendiente.',
      logo: '/projects/silvia-fernandez-de-luna/logo.png',
      roles: ['Placeholder'],
    },

    bento: {
      mode: 'fixed',
      background: '#895900',
      columns: [
        {
          width: 1,
          cells: [
            { src: '/projects/silvia-fernandez-de-luna/bento-1.jpg', alt: 'Silvia Fernández De Luna 1', ratio: 0.65 },
            { src: '/projects/silvia-fernandez-de-luna/bento-5.jpg', alt: 'Silvia Fernández De Luna 5', ratio: 0.35 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/silvia-fernandez-de-luna/bento-2.jpg', alt: 'Silvia Fernández De Luna 2', ratio: 0.44 },
            { src: '/projects/silvia-fernandez-de-luna/bento-6.png', alt: 'Silvia Fernández De Luna 6', ratio: 0.56 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/silvia-fernandez-de-luna/bento-3.jpg', alt: 'Silvia Fernández De Luna 3', ratio: 0.6 },
            { src: '/projects/silvia-fernandez-de-luna/bento-7.png', alt: 'Silvia Fernández De Luna 7', ratio: 0.4 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/silvia-fernandez-de-luna/bento-4.png', alt: 'Silvia Fernández De Luna 4', ratio: 0.7 },
            { src: '/projects/silvia-fernandez-de-luna/bento-8.jpg', alt: 'Silvia Fernández De Luna 8', ratio: 0.3 },
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
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-1.jpg', alt: 'Placeholder feature 1' },
        title: 'Placeholder Feature 1',
        description: 'Placeholder — descripción de la primera feature.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-2.jpg', alt: 'Placeholder feature 2' },
        title: 'Placeholder Feature 2',
        description: 'Placeholder — descripción de la segunda feature.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-3.jpg', alt: 'Placeholder feature 3' },
        title: 'Placeholder Feature 3',
        description: 'Placeholder — descripción de la tercera feature.',
      },
    ],

    // — Secciones variables van aquí (imageCompare, editorial, branding, etc.) —

    // 10) Quote banner
    quoteBanner: {
      quote: 'Placeholder — cita inspiradora del proyecto.',
      author: 'Placeholder Author',
      backgroundImage: { type: 'image', src: '/projects/silvia-fernandez-de-luna/quote-bg.jpg', alt: 'Quote Background' },
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
  order: 3,
};
