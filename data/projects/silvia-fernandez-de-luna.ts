import { ProjectWithLayout } from '@/lib/project-layout.types';

export const silviaFernandezDeLuna: ProjectWithLayout = {
  slug: 'silvia-fernandez-de-luna',
  title: 'Silvia Fernández De Luna',
  excerpt: 'Una marca que enseña, inspira y transforma.',

  categories: ['branding', 'web-dev', 'marketing', 'strategy', 'ux-ui', 'ai-automation'],
  tags: ['Branding', 'Web Development', 'Marketing', 'Automatización & IA'],

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

    // 1) HERO
    hero: {
      title: 'Silvia Fernández De Luna',
      subtitle: 'Placeholder subtitle',
      intro: 'Un viaje de creación y colaboración desde hace 3 años en el cual dar vida la presencia digital progresiva hacia una estructura sólida para Silvia Fernández De Luna. Durante los últimos años, he acompañado y guiado a Silvia Fernández De Luna en la creación y consolidación de su Marca personal. Silvia, como guía, terapeuta y mentora holística, tenía una visión clara de lo que quería brindar al mundo. Mi aportación ha sido llevar esa visión a la realidad, dedicándome en consolidar una identidad sólida, desde el diseño visual hasta la estrategia de marketing, para asegurar que cada aspecto de su presencia digital esté alineado con su visión y propósito.',
      logo: '/projects/silvia-fernandez-de-luna/logo.png',
      roles: ['Audiovisual', 'Marketing', 'Desarrollo Web', 'Email Marketing', 'Estrategia', 'Social Media'],
      context: 'Proyecto freelance — 3 años de colaboración',
      year: '2023',
      heroBg: '/projects/silvia-fernandez-de-luna/fondo_SFDL_oroviejo_1920x2000.jpeg',
    },

    // 2) BENTO — se añade después del hero automáticamente
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

    // 3) HEADING
    heading: {
      title: 'La Creación para Silvia Fernández De Luna',
      subtitle: 'Silvia Fernández De Luna es una profesional dedicada a acompañar a las personas en su camino hacia el autoconocimiento y la sanación espiritual. Su labor abarca desde la guía personal y terapéutica hasta la creación de espacios de aprendizaje y desarrollo. A lo largo de los últimos años, hemos trabajado juntos en la creación de una base sólida para su Marca, con impronta de su profundidad y autenticidad, y que ahora incluye una amplia oferta de servicios personalizados, contenidos educativos, eventos, y una comunidad enfocada en el crecimiento personal y espiritual.',
    },

    // 4) FEATURES
    features: [
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-marketing.jpg', alt: 'Marketing' },
        title: 'Marketing',
        description: 'Placeholder — descripción de la primera feature.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-web.jpg', alt: 'Web' },
        title: 'Web',
        description: 'Placeholder — descripción de la segunda feature.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-estrategia.jpg', alt: 'Estrategia' },
        title: 'Estrategia',
        description: 'Placeholder — descripción de la tercera feature.',
      },
    ],

    // 5) INTRO PARALLAX
    introParallax: {
      src: '/projects/silvia-fernandez-de-luna/Silvia Fernández De Luna El Alma.jpg',
      alt: 'Silvia Fernández De Luna',
    },

    // 6) BRANDING SCROLLER
    brandingScroller: {
      title: 'Branding',
      description: 'Placeholder — descripción del branding de Silvia Fernández De Luna.',
      background: '#2E1404',
      images: [
        { src: '/projects/silvia-fernandez-de-luna/bento-1.jpg', alt: 'Branding Silvia Fernández De Luna' },
        { src: '/projects/silvia-fernandez-de-luna/bento-4.png', alt: 'Branding Silvia Fernández De Luna' },
        { src: '/projects/silvia-fernandez-de-luna/bento-6.png', alt: 'Branding Silvia Fernández De Luna', orientation: 'vertical' },
        { src: '/projects/silvia-fernandez-de-luna/bento-3.jpg', alt: 'Branding Silvia Fernández De Luna' },
        { src: '/projects/silvia-fernandez-de-luna/bento-7.png', alt: 'Branding Silvia Fernández De Luna', orientation: 'vertical' },
        { src: '/projects/silvia-fernandez-de-luna/bento-2.jpg', alt: 'Branding Silvia Fernández De Luna' },
      ],
    },

    // 7) WEB + WEBPANEL — editorial izquierda + carrusel mockups
    web: {
      title: 'Web',
      subtitle: 'Placeholder — título de la sección web',
      content: 'Placeholder — descripción del trabajo web para Silvia Fernández De Luna.',
    },

    webPanel: {
      title: 'Placeholder — título del panel web',
      description: 'Placeholder — descripción del panel web.',
      mockups: [
        { type: 'image', src: '/projects/silvia-fernandez-de-luna/MockupWeb_Portada_SFDL.jpg', alt: 'Mockup web portada Silvia Fernández De Luna' },
        { type: 'image', src: '/projects/silvia-fernandez-de-luna/bento-2.jpg', alt: 'Web Silvia Fernández De Luna' },
        { type: 'image', src: '/projects/silvia-fernandez-de-luna/bento-3.jpg', alt: 'Web Silvia Fernández De Luna' },
        { type: 'image', src: '/projects/silvia-fernandez-de-luna/bento-6.png', alt: 'Web Silvia Fernández De Luna' },
        { type: 'image', src: '/projects/silvia-fernandez-de-luna/bento-8.jpg', alt: 'Web Silvia Fernández De Luna' },
      ],
    },

    // 7) REELS EDITORIAL + REELS DECK
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

    // 8) FUNNEL FLOW — Sistemas de Captación
    funnelFlow: {
      editorial: {
        title: 'Sistemas de Captación',
        subtitle: 'Del primer impacto a la conversión',
        content: 'Cada lanzamiento de Masterclass sigue un flujo diseñado para acompañar al cliente potencial desde el descubrimiento hasta la inscripción, con coherencia visual y de mensaje en cada punto de contacto.',
      },
      steps: [
        {
          step: 1,
          image: '/projects/silvia-fernandez-de-luna/Mockup_SFDL_CMR-Invitacion-Masterclass_Reel.png',
          imageAlt: 'Pieza de Social Media — Reel invitación Masterclass',
          title: 'Social Media',
          description: 'Piezas para redes sociales que generan awareness e interés: reels, stories y carruseles diseñados para captar la atención y dirigir al usuario hacia la inscripción.',
        },
        {
          step: 2,
          image: '/projects/silvia-fernandez-de-luna/SFDL_CMR-Invitacion-Masterclass.png',
          imageAlt: 'Landing page — Inscripción Masterclass Silvia',
          title: 'Landing Page',
          description: 'Página de aterrizaje diseñada para la Masterclass: clara, con propósito y orientada a la conversión. Cada elemento guía al visitante hacia un único objetivo: inscribirse.',
        },
        {
          step: 3,
          image: '/projects/silvia-fernandez-de-luna/Mockup_SFDL_CMR-EmailMarketing.png',
          imageAlt: 'Email Marketing — Secuencia de acompañamiento',
          title: 'Email Marketing',
          description: 'Secuencia de emails que acompaña al inscrito: confirmación de plaza, recordatorio previo, aviso de inicio, seguimiento post-evento y reactivación para quienes no pudieron asistir.',
        },
      ],
    },

    // 9) VIDEO SECTION
    videoSection: {
      editorial: {
        title: 'Audiovisual',
        subtitle: 'La Historia Álmica de Silvia Fernández De Luna',
        content: 'La Historia Álmica de Silvia Fernández De Luna, es una pieza audiovisual con un guión creado en sinergía con Silvia, y dirigida, grabada y editada. Como co-guionista, trabajé estrechamente con Silvia para dar vida a su historia de evolución, asegurándome de capturar la esencia de su viaje interior. Una narrativa afinada para dar retrato del proceso y viaje que hizo nacer a Silvia Fernández De Luna. Desde la grabación hasta la postproducción, este es el fruto de la colaboración creativa intensa y cuidadosa, donde mi objetivo fue crear un retrato cinematográfico de la esencia misma del alma de Silvia y su viaje.',
      },
      src: 'https://silviafernandezdeluna.com/wp-content/uploads/2022/03/Silvia_Fernandez_De_Luna_Quien_Eres.mp4',
      poster: '/projects/silvia-fernandez-de-luna/La-Historia-Almica-de-Silvia-Fernandez-De-Luna.webp',
      background: 'linear-gradient(135deg, #1a2e2a, #4e6862, #2a3d39)',
    },

    // 9) QUOTE BANNER
    quoteBanner: {
      quote: 'Acompañar a las personas en su camino hacia el autoconocimiento es la labor más hermosa que existe.',
      author: 'Silvia Fernández De Luna',
      backgroundImage: { type: 'image', src: '/projects/silvia-fernandez-de-luna/fondo_SFDL_oroviejo_1920x2000.jpeg', alt: 'Silvia Fernández De Luna' },
      imagePosition: 'center',
    },

  },

  meta: {
    client: 'Silvia Fernández De Luna',
    year: '2023',
    role: ['Branding', 'Marketing'],
    tools: ['Wordpress', 'Woocommerce', 'LMS', 'Illustrator', 'After Effects', 'Premiere Pro', 'Brevo', 'Metricool'],
  },

  tagline: 'Una marca que enseña, inspira y transforma.',
  cover: '/projects/silvia-fernandez-de-luna/Silvia-Fernandez-De-Luna-Academia.webp',
  featured: true,
  ambientColor: '#895900',
  ambientGradient: 'linear-gradient(135deg, #4f3a17 0%, #895900 100%)',

  status: 'published',
  order: 3,
  nextStack: ['amigo-secreto', 'trainfy', 'las-islas-cies'],
};
