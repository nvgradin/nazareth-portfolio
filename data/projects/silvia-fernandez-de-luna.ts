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
      intro: 'Un viaje de creación y colaboración desde hace 3 años en el cual dar vida la presencia digital progresiva hacia una estructura sólida para Silvia Fernández De Luna. Durante los últimos años, he acompañado y guiado a Silvia Fernández De Luna en la creación y consolidación de su Marca personal. Silvia, como guía, terapeuta y mentora holística, tenía una visión clara de lo que quería brindar al mundo. Mi aportación ha sido llevar esa visión a la realidad, dedicándome en consolidar una identidad sólida, desde el diseño visual hasta la estrategia de marketing, para asegurar que cada aspecto de su presencia digital esté alineado con su visión y propósito.',
      logo: '/projects/silvia-fernandez-de-luna/logo.png',
      roles: ['Audiovisual', 'Automatización de Marketing', 'Desarrollo Web', 'Email Marketing', 'Estrategia de Marketing', 'Social Media'],
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
      title: 'La Creación para Silvia Fernández De Luna',
      subtitle: 'Silvia Fernández De Luna es una profesional dedicada a acompañar a las personas en su camino hacia el autoconocimiento y la sanación espiritual. Su labor abarca desde la guía personal y terapéutica hasta la creación de espacios de aprendizaje y desarrollo. A lo largo de los últimos años, hemos trabajado juntos en la creación de una base sólida para su Marca, con impronta de su profundidad y autenticidad, y que ahora incluye una amplia oferta de servicios personalizados, contenidos educativos, eventos, y una comunidad enfocada en el crecimiento personal y espiritual.',
    },

    // 4) Feature cards (3 columnas)
    features: [
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-marketing.jpg', alt: 'Placeholder feature 1' },
        title: 'Marketing',
        description: 'Placeholder — descripción de la primera feature.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-web.jpg', alt: 'Placeholder feature 2' },
        title: 'Web',
        description: 'Placeholder — descripción de la segunda feature.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-estrategia.jpg', alt: 'Placeholder feature 3' },
        title: 'Estrategia',
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
