import { ProjectWithLayout } from '@/lib/project-layout.types';

export const silviaFernandezDeLuna: ProjectWithLayout = {
  slug: 'silvia-fernandez-de-luna',
  title: 'Silvia Fernández De Luna',
  excerpt: 'Una marca que enseña, inspira y transforma.',

  categories: ['branding', 'web-design', 'ux-ui', 'strategy', 'marketing'],
  tags: ['Branding', 'Web Development', 'Estrategia'],

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
      roles: ['Audiovisual', 'Marketing', 'Desarrollo Web', 'Email Marketing', 'Estrategia', 'Social Media'],
      year: '2023',
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

    reelsEditorial: {
      title: 'Estrategia & Marketing',
      subtitle: 'Contenido que conecta con su comunidad',
      content: 'Placeholder — descripción de la estrategia de contenido, redes sociales, reels y carruseles para Silvia Fernández De Luna.',
    },

    reelsDeck: {
      background: 'linear-gradient(135deg, #1a0e00, #895900, #4f3a17, #87776a, #2d1f0a, #895900)',
      items: [
        { id: 'reel-1', type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/reel-comunidad-mujer-raiz-marzo.mp4', title: 'Comunidad Mujer Raíz' },
        { id: 'reel-2', type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/sfdl-reel-camminus.mp4', title: 'Reel Camminus' },
        { id: 'reel-3', type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/sfdl-cmr-roles-violencia.mp4', title: 'CMR Roles Violencia' },
        { id: 'reel-4', type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/sfdl-story-calendario-eventum-abril15.mp4', title: 'Story Calendario Eventum' },
        { id: 'reel-5', type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/reel-maestria-ra-programa.mp4', title: 'Maestría RA Programa' },
        { id: 'reel-6', type: 'video', src: '/projects/silvia-fernandez-de-luna/reels/sfdl-academia-de-luna-reel.mp4', title: 'Academia de Luna' },
      ],
    },

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
    client: 'Silvia Fernández De Luna',
    year: '2023',
    role: ['Branding', 'Marketing'],
    tools: ['Wordpress', 'Woocommerce', 'LMS','Illustrator', 'After Effects', 'Premiere Pro', 'Brevo', 'Metricool'],
  },

  tagline: 'Una marca que enseña, inspira y transforma.',
  cover: '/projects/silvia-fernandez-de-luna/Silvia-Fernandez-De-Luna-Academia.webp',
  featured: true,
  ambientColor: '#895900',
  ambientGradient: 'linear-gradient(135deg, #4f3a17 0%, #895900 100%)',

  status: 'published',
  order: 3,
};
