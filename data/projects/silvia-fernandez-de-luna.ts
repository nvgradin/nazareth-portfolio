import { ProjectWithLayout } from '@/lib/project-layout.types';

export const silviaFernandezDeLuna: ProjectWithLayout = {
  slug: 'silvia-fernandez-de-luna',
  title: 'Silvia Fernández De Luna',
  excerpt: 'Las mejores marcas no se diseñan. Se habitan.',

  categories: ['strategy', 'branding', 'web-dev', 'marketing', 'ux-ui', 'ai-driven'],
  tags: ['Estrategia', 'Branding', 'Web', 'Marketing', 'AI-Driven Design & Automation'],

  thumbnail: {
    type: 'image',
    src: '/projects/silvia-fernandez-de-luna/hero.webp',
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
      subtitle: 'Construir una experiencia digital capaz de traducir profundidad, sensibilidad y evolución en un universo de marca coherente.',
      intro: 'Silvia llegó con un nombre, una visión y un logotipo empezando a nacer. El reto era de traducción: convertir un universo interior en una marca que conectara, que perdurara y que creciera.',
      result: 'Prensa, ayuntamientos y TOP 10 de Google. Una marca construida desde cero, sin invertir un solo euro en SEM.',
      logo: '/projects/silvia-fernandez-de-luna/logo.png',
      roles: ['Estrategia', 'Branding', 'Web', 'Marketing'],
      context: 'Proyecto freelance · 3 años de colaboración',
      year: '2023 - 2026',
      liveUrl: 'https://silviafernandezdeluna.com',
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
      subtitle: 'Silvia conecta con las personas de forma natural — transmite autoridad, genera confianza, inspira. El viaje fue crear su espacio digital. Tomar algo tan sutil como la activación kundalini o el acompañamiento energético y convertirlo en una marca digital coherente, buscable y habitable: ese fue el reto real. Un templo digital que se habita.',
    },

    // 4) FEATURES
    features: [
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/SDFL-Camminus-scaled.webp', alt: 'Marketing' },
        title: ' Construir un universo de marca',
        description: 'La arquitectura como lenguaje de marca. Las secciones de la web no se llaman Inicio o Servicios. Se llaman El Templo, Camminus, El Alma, El Ágora. Cada nombre es una decisión simbólica consciente — parte de un sistema que hace que navegar la web sea ya, en sí mismo, una experiencia de marca.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-web.jpg', alt: 'Web' },
        title: 'Primero la identidad, luego todo lo demás',
        description: 'Antes de escribir una línea de código, construimos los cimientos: completé el sistema de identidad y co-creé con Silvia una pieza audiovisual cinematográfica — su historia, en sus palabras, como núcleo emocional de toda su presencia digital. La web vino después. La marca, primero.',
      },
      {
        image: { type: 'image', src: '/projects/silvia-fernandez-de-luna/feature-marketing.jpg', alt: 'Estrategia' },
        title: 'Construir el modelo de negocio, no solo ejecutarlo',
        description: 'Silvia llegó con talento, vocación y un conocimiento profundo de su trabajo. El modelo de negocio lo construimos juntas. La Academia de Luna, la Comunidad Mujer Raíz, los funnels de lanzamiento para masterclasses: ninguna de esas piezas estaba en un briefing. Emergieron de conversaciones estratégicas sobre cómo convertir lo que Silvia hacía offline en algo que pudiera crecer, sostenerse y escalar.',
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
        'Sistema de identidad: Tipografía, paleta, logotipo y todas sus versiones. Pero el trabajo real fue crear un lenguaje de marca que se extendiera a cada rincón del proyecto.',
        'Arquitectura simbólica: La web no tiene secciones estándar. Tiene El Templo, Camminus, El Alma, El Ágora, Eventum. Cada nombre es una decisión consciente — navegar la web ya es experiencia de marca.',
        'Coherencia hasta el último detalle: En El Ágora, cada categoría del blog tiene su propia paleta: negro para alquimia, oro viejo para aromaterapia, verde para salud... Un blog que se convirtió en magazine visual.',
      ],
      background: '#2E1404',
      images: [
        { src: '/projects/silvia-fernandez-de-luna/bento-6.png', alt: 'Branding Silvia Fernández De Luna', orientation: 'vertical' },
        { src: '/projects/silvia-fernandez-de-luna/mockup_sfdl_blog.png', alt: 'Branding Silvia Fernández De Luna' },
        { src: '/projects/silvia-fernandez-de-luna/bento-7.png', alt: 'Branding Silvia Fernández De Luna', orientation: 'vertical' },
      ],
    },

    statementBlock: {
      label: 'Insight',
      setup: 'Llevar algo profundamente interno — una visión espiritual, un mundo intangible — y convertirlo en algo navegable, coherente y buscable en Google. Ese fue el verdadero reto. Y el verdadero resultado.',
      statement: 'Las mejores marcas no se diseñan. Se habitan.',
      accentColor: '#895900',
    },

    // 7) WEB + WEBPANEL — editorial izquierda + carrusel mockups
    web: {
      title: 'Un Templo digital que creció\ncon Silvia Fernández De Luna',
      subtitle: 'De web de presencia a ecosistema digital\n— construido por fases, durante tres años.',
      content: '',
      columns: [
        'El sistema de identidad llegó hasta el último rincón. En El Ágora — el espacio editorial de Silvia — cada categoría del blog tiene su propia paleta: negro para alquimia, oro viejo para aromaterapia, verde para salud...', 
        'Lo que empezó como un blog simple evolucionó hasta convertirse en un magazine visual con carácter propio. La coherencia de marca comunica a nivel inconsciente.',
        'El crecimiento fue 100% orgánico. Sin un solo euro en publicidad, Silvia aparece en el TOP 10 de Google para búsquedas como opus magnum alquimia — por detrás de la Wikipedia, por delante de todo lo demás.',
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
          text: 'Tres años después, Silvia Fernández De Luna es una marca reconocida en un nicho donde la credibilidad es difícil de construir.',
        },
        {
          text: 'El Regreso al Templo en el Monasterio de Carboeiro llegó a las páginas de Faro de Vigo. Sus proyectos con ayuntamientos validan la marca en el terreno institucional. Y todo eso — sin invertir un euro en publicidad.',
        },
        {
          text: 'Lo que construimos juntas no fue solo una web. Fue la infraestructura completa de una marca que puede sostener, crecer y escalar sin perder su esencia.',
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

    layoutOrder: [
      'hero',
      'bento',
      'heading',
      'features',
      'introParallax',
      'brandingScroller',
      'statementBlock',
      'web',
      'reelsEditorial',
      'reelsDeck',
      'funnelFlow',
      'videoSection',
      'textBlock',
      'quoteBanner',
    ],
  },

  meta: {
    client: 'Silvia Fernández De Luna',
    year: '2023 - 2026',
    role: ['Brand Designer', 'Estratega Digital', 'Web Designer', 'Art Director', 'Email Marketing', 'Content Strategist'],
    tools: ['Wordpress', 'Woocommerce', 'LMS', 'Clarity', 'Google Analytics', 'Illustrator', 'After Effects', 'Premiere Pro', 'Brevo', 'Metricool'],
  },

  tagline: 'Una marca que enseña, inspira y transforma.',
  cover: '/projects/silvia-fernandez-de-luna/Silvia-Fernandez-De-Luna-Academia.webp',
  featured: true,
  ambientColor: '#895900',
  ambientGradient: 'linear-gradient(135deg, #4f3a17 0%, #895900 100%)',

  status: 'published',
  order: 3,
  nextStack: ['ibiza-observatorio', 'trainfy', 'las-islas-cies'],
};
