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
      subtitle: 'De una visión espiritual a una marca reconocida. Tres años construyendo el universo de Silvia Fernández De Luna.',
      intro: 'Silvia llegó con un nombre, una visión y un logotipo a medio hacer. Tenía claro quién era — guía, terapeuta, mentora holística — pero no cómo hacer que el mundo lo entendiera con la misma profundidad con la que ella lo vivía. El reto no era técnico. Era de traducción: convertir un universo interior en una marca que conectara, que perdurara y que creciera.',
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
      title: 'El reto de partir de cero con un valor intangible',
      subtitle: 'Silvia Fernández De Luna es guía espiritual, terapeuta holística y mentora. Silvia Conecta con las personas de forma natural, transmite autoridad y genera confianza desde el primer momento. Inspira, desafía y nos acompaña en nuestros procesos. Mi reto fue acompañar la creación digital del valor de la propuesta de Silvia, desde cero. Tomar algo tan sutil como la activación kundalini, los registros akáshicos, la aromaterapia terapéutica o el acompañamiento energético, y convertirlo en una marca digital que lo transmitiera con la misma autenticidad con la que Silvia lo vivía. Y crear el Universo de Silvia Fernández De Luna.',
    },

    // 4) FEATURES
    features: [
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-marketing.jpg', alt: 'Marketing' },
        title: ' Construir un universo de marca',
        description: 'Desde el primer día propuse ir más allá del diseño. Las secciones de la web no se llaman Inicio o Servicios — se llaman El Templo, Camminus, El Alma, El Ágora. Cada nombre es parte de un sistema simbólico que traduce el mundo de Silvia en arquitectura digital.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-web.jpg', alt: 'Web' },
        title: 'Primero la identidad, luego todo lo demás',
        description: 'Antes del lanzamiento web, completé el sistema de marca (la ilustradora original no tenía base de branding) y co-creé con Silvia una pieza audiovisual cinematográfica — su historia como punto de partida. La marca necesitaba voz y alma antes de tener web.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-estrategia.jpg', alt: 'Estrategia' },
        title: 'Estrategia de crecimiento desde el modelo de negocio',
        description: 'No solo ejecuté — propuse. La Academia de Luna, la Comunidad Mujer Raíz, los funnels de conversión para masterclasses, el sistema de email marketing: muchas de esas decisiones nacieron de conversaciones estratégicas sobre cómo escalar lo que Silvia hacía offline al mundo digital.',
      },
    ],

    // 5) INTRO PARALLAX
    introParallax: {
      src: '/projects/silvia-fernandez-de-luna/Silvia Fernández De Luna El Alma.jpg',
      alt: 'Silvia Fernández De Luna',
    },

    // 6) BRANDING SCROLLER
    brandingScroller: {
      title: 'Crear el Universo de Marca',
      description: 'Una identidad que habla el mismo idioma que Silvia',
      bullets: [
        'Completé y sistematicé la identidad visual: tipografía, gama cromática, logotipo y todas sus versiones. Pero el verdadero trabajo fue más profundo — crear un lenguaje de marca propio que se extendiera a cada rincón del proyecto.',
        'La web no tiene secciones estándar. Tiene El Templo (inicio), Camminus (servicios), El Alma (biografía), El Ágora (blog), Eventum (eventos), Contactus. La Academia de Luna tiene logo propio. Cada nombre es una decisión simbólica consciente que traduce el universo interior de Silvia en arquitectura digital.',
        'Esa coherencia llegó hasta el último detalle: en El Ágora, cada categoría del blog tiene su propia paleta — negro para alquimia, oro viejo para aromaterapia, verde para salud... Lo que empezó como un blog simple se convirtió en un magazine visual con carácter propio y con coherencia de marca que comunica a nivel inconsciente.',
      ],
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

    statementBlock: {
      statement: 'Las mejores marcas no se diseñan. Se habitan.',
      accentColor: '#895900',
      afterBranding: true,
    },

    // 7) WEB + WEBPANEL — editorial izquierda + carrusel mockups
    web: {
      title: 'Un Templo digital que creció\ncon Silvia Fernández De Luna',
      subtitle: 'Subtítulo de\nla sección web.',
      content: '',
      columns: [
        'La web de Silvia no sigue la arquitectura estándar. Sus secciones tienen nombres propios: El Templo es el inicio, Camminus es el camino de servicios, El Alma es su historia, El Ágora es el espacio de conocimiento compartido. Cada nombre es una decisión consciente de universo de marca',
        'El sistema de identidad llegó hasta el último rincón. En El Ágora — el espacio editorial de Silvia — cada categoría del blog tiene su propia paleta: negro para alquimia, oro viejo para aromaterapia, verde para salud... Lo que empezó como un blog simple evolucionó hasta convertirse en un magazine visual con carácter propio. No porque lo exigiera la tecnología, sino porque la coherencia de marca comunica a nivel inconsciente.',
        'El crecimiento fue 100% orgánico. Sin inversión en publicidad de pago, trabajamos el SEO desde la estructura y el contenido. El resultado: Silvia aparece en el TOP 10 de Google para búsquedas como opus magnum alquimia — por detrás de la Wikipedia, por delante de todo lo demás.',
      ],
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
      content: 'Acompañé a Silvia en la creación del contenido para redes sociales con estrategia en sinergía. Mensualmente analizábamos qué funcionaba, afinar la escucha social de la comunidad y cómo comunicar las propuestas de valor. Coordinamos nuestras acciones y co-creamos contenido. Silvia aporta su conocimiento y su presencia, yo acompañaba con estrategia y creación. Una colaboración que se fue afinando durante tres años.',
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
        content: 'Cada lanzamiento de Masterclass o programa nuevo seguía el mismo principio: acompañar al usuario desde el primer impacto hasta la conversión, con coherencia en cada punto de contacto. Reel de awareness → landing de inscripción → secuencia de email. Un sistema que diseñé, implementé y optimicé con cada iteración.',
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
        content: 'Antes de lanzar la web, necesitábamos que el mundo entendiera quién es Silvia. No sus servicios — ella. Co-escribí el guion junto a ella, diseñé la estructura narrativa, busqué localizaciones, grabé y edité. El resultado fue una pieza cinematográfica que sigue siendo el núcleo emocional de toda su presencia digital.',
      },
      src: 'https://silviafernandezdeluna.com/wp-content/uploads/2022/03/Silvia_Fernandez_De_Luna_Quien_Eres.mp4',
      poster: '/projects/silvia-fernandez-de-luna/La-Historia-Almica-de-Silvia-Fernandez-De-Luna.webp',
      background: 'linear-gradient(135deg, #1a2e2a, #4e6862, #2a3d39)',
    },

    // 10) TEXT BLOCK — Resultados
    textBlock: {
      variant: 'grid',
      label: 'Resultado',
      title: 'Lo que se construyó',
      columns: [
        {
          text: 'Silvia Fernández De Luna acompaña a las personas en su camino hacia el autoconocimiento — desde sesiones terapéuticas individuales hasta retiros, masterclasses, una academia online y una comunidad propia. Un universo de trabajo profundo, muy real offline.',
        },
        {
          text: 'Lo que construimos juntas durante tres años no fue solo una web o una estrategia de contenido — fue la infraestructura completa de una marca personal que permite sostener, crecer y escalar con esencia.',
        },
        {
          text: 'Una marca personal en un nicho difícil — el bienestar espiritual — que logró ser tomada en serio. Silvia Fernández De Luna pasó de no tener presencia digital a aparecer en el TOP 10 de búsquedas en Google para términos como alquimia opus magnum — por detrás de la Wikipedia, por delante de todo lo demás - solo con trabajo orgánico.',
        },
        {
          text: 'La coherencia de marca se refleja en cada detalle, dando paso a colaborar con ayuntamientos, hacer eco en prensa y generar una comunidad activa. El Regreso al Templo en el Monasterio de Carboeiro llegó a las páginas de Faro de Vigo. Esta consistencia ha permitido que Silvia Fernández De Luna se destaque en un mercado competitivo y construya una comunidad fiel y comprometida.',
        },
      ],
    },

    // 11) QUOTE BANNER
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
