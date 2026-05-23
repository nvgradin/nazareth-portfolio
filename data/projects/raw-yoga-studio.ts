import { ProjectWithLayout } from '@/lib/project-layout.types';

export const rawYogaStudio: ProjectWithLayout = {
  slug: 'raw-yoga-studio',
  title: 'Raw Yoga Studio',
  excerpt:
    'De una web de presencia simple a una plataforma digital que refleja la filosofía del estudio y convierte visitas en reservas.',

  categories: ['web-dev', 'ux-ui', 'branding'],
  tags: ['Web Development', 'UX/UI', 'Product Designer'],

  thumbnail: {
    type: 'image',
    src: '/projects/raw-yoga-studio/RawYogaStudio.jpg',
    alt: 'Raw Yoga Studio — nueva web diseñada por Nazareth Gradín, plataforma digital para estudio de yoga',
  },

  theme: {
    primary: '#566A66',
    secondary: '#996258',
    accent: '#aacbc5',
    background: '#313D3B',
  },

  layout: {
    // 1) Hero
    hero: {
      title: 'Raw Yoga Studio',
      subtitle: 'Transformando una escuela de yoga en una experiencia digital centrada en reservas, membresías y bienestar.',
      intro: 'Raw Yoga Studio tenía una web de presencia básica: información estática, sin personalidad y sin capacidad de convertir. El proyecto fue transformarla en una plataforma digital que comunique su filosofía, genere confianza y facilite la reserva.',
      logo: '/projects/raw-yoga-studio/logo.png',
      logoSize: 140,
      roles: ['Web Design', 'UX/UI', 'Estrategia'],
      context: 'Proyecto freelance · Fotografía de',
      collaborators: [{ name: 'Alex Sobrino', url: 'https://www.alexsobrino.com/' }],
      result:
        'Nueva web que transmite la identidad del estudio, mejora la experiencia de usuario y facilita la reserva de clases y terapias.',
      year: '2024',
      liveUrl: 'https://rawyoga.es',
      heroBg: '/projects/raw-yoga-studio/hero.jpg',
    },

    // 2) Bento Gallery — 4 columnas
    bento: {
      mode: 'fixed',
      background: '#313D3B',
      columns: [
        {
          width: 1,
          cells: [
            {
              src: '/projects/raw-yoga-studio/RawYogaStudio.jpg',
              alt: 'Raw Yoga Studio — mockup de la nueva web en múltiples dispositivos',
              ratio: 0.4,
              overlay: 0.10,
            },
            {
              src: '/projects/raw-yoga-studio/Bento_Rawyoga-Inicio_tabletmovil.jpg',
              alt: 'Raw Yoga Studio — vista de inicio en tablet y móvil',
              ratio: 0.6,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/raw-yoga-studio/Rawyoga-devices-mockup.png',
              alt: 'Raw Yoga Studio — sección de reserva de terapias en escritorio',
              ratio: 0.45,
            },
            {
              src: '/projects/raw-yoga-studio/Bento_Rawyoga-Reserva-TerapiasMovil.jpg',
              alt: 'Raw Yoga Studio — sección de reserva de terapias en móvil',
              ratio: 0.55,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/raw-yoga-studio/Rawyoga-Clases-mockup.jpg',
              alt: 'Raw Yoga Studio — sección de clases y horarios',
              ratio: 0.6,
            },
            {
              src: '/projects/raw-yoga-studio/hero.jpg',
              alt: 'Raw Yoga Studio — detalle de navegación móvil',
              ratio: 0.4,
              overlay: 0.20,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/raw-yoga-studio/Raw Yoga Studio Reel.mp4',
              alt: 'Raw Yoga Studio — cortinilla animada del estudio',
              ratio: 1.0,
            },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      title: 'Cómo lo abordé',
      subtitle: [
        'Raw Yoga Studio es un espacio de práctica consciente con una identidad clara: naturalidad, presencia y autenticidad. Pero su web anterior no lo comunicaba. Era una página de información básica sin jerarquía, sin sistema visual propio y sin ningún mecanismo para facilitar la reserva.',
        'El reto fue construir una experiencia digital coherente con la filosofía del estudio: una web que se sienta tan cuidada como el espacio físico, que genere confianza desde el primer scroll y que convierta la curiosidad en reserva.',
      ],
    },

    // 4) Feature cards
    features: [
      {
        image: {
          type: 'image',
          src: '/projects/raw-yoga-studio/Rawyoga-devices-mockup.png',
          alt: 'Diseño web de Raw Yoga Studio — experiencia coherente en todos los dispositivos',
        },
        title: 'Identidad visual aplicada a digital',
        description:
          'La web anterior no transmitía la personalidad del estudio. El rediseño trasladó su filosofía a cada decisión visual: paleta, tipografía, fotografía y ritmo de scroll.',
      },
      {
        image: {
          type: 'image',
          src: '/projects/raw-yoga-studio/Rawyoga-Clases-mockup.jpg',
          alt: 'Sección de clases y horarios — Raw Yoga Studio',
        },
        title: 'Arquitectura orientada a la reserva',
        description:
          'Rediseño de la estructura de información para que clases, terapias y horarios sean fáciles de encontrar y fáciles de reservar desde cualquier dispositivo.',
      },
      {
        image: {
          type: 'image',
          src: '/projects/raw-yoga-studio/Bento_Rawyoga-Reserva-TerapiasMovil.jpg',
          alt: 'Reserva de terapias en móvil — Raw Yoga Studio',
        },
        title: 'Experiencia mobile-first',
        description:
          'La mayoría de las visitas llegan desde móvil. El diseño prioriza esa experiencia: navegación clara, CTAs visibles y formularios de reserva optimizados para pantallas pequeñas.',
      },
    ],

    // 5) Antes / después
    imageCompare: {
      before: {
        type: 'image',
        src: '/projects/raw-yoga-studio/before.png',
        alt: 'Web anterior de Raw Yoga Studio — página de presencia básica sin sistema ni conversión',
      },
      after: {
        type: 'image',
        src: '/projects/raw-yoga-studio/after.png',
        alt: 'Nueva web de Raw Yoga Studio — plataforma diseñada para convertir visitas en reservas',
      },
      labels: { before: 'Antes', after: 'Después' },
      background: '#313D3B',
      caption: 'De una web de presencia básica a una plataforma digital pensada para convertir.',
    },

    // 6) Web editorial
    web: {
      title: 'De web de presencia\na plataforma de reservas',
      subtitle: 'Una experiencia digital diseñada\npara convertir visitas en clientes.',
      content: '',
      columns: [
        'La web anterior de Raw Yoga Studio cumplía una función básica: informar. Lo que construí tenía otra misión: acompañar al visitante desde el primer contacto hasta la reserva confirmada.',
        'Diseñé una arquitectura de contenido clara, con secciones diferenciadas para clases, terapias y el estudio. Cada página responde una intención de búsqueda distinta y guía al usuario hacia la acción.',
        'El resultado es una web coherente con la identidad del estudio, optimizada para móvil y preparada para crecer con nuevos servicios o formatos sin perder la coherencia visual.',
      ],
    },

    // 6) Web Panel — galería de mockups
    webPanel: {
      background: '#0D0C0A',
      title: 'Raw Yoga Studio',
      description: 'Una web tan cuidada como el espacio que representa.',
      mockups: [
        {
          type: 'image',
          src: '/projects/raw-yoga-studio/Rawyoga-devices-mockup.png',
          alt: 'Raw Yoga Studio — vista general multi-dispositivo',
        },
        {
          type: 'image',
          src: '/projects/raw-yoga-studio/Bento_Rawyoga-Inicio_tabletmovil.jpg',
          alt: 'Raw Yoga Studio — inicio en tablet y móvil',
        },
        {
          type: 'image',
          src: '/projects/raw-yoga-studio/Rawyoga-Clases-mockup.jpg',
          alt: 'Raw Yoga Studio — sección de clases',
        },
        {
          type: 'image',
          src: '/projects/raw-yoga-studio/Bento_Rawyoga-Reserva-Terapias.png',
          alt: 'Raw Yoga Studio — reserva de terapias',
        },
        {
          type: 'image',
          src: '/projects/raw-yoga-studio/Bento_Rawyoga-Reserva-TerapiasMovil.jpg',
          alt: 'Raw Yoga Studio — reserva en móvil',
        },
      ],
    },

    // 7) Statement
    statementBlock: {
      label: 'Insight',
      setup: 'Un estudio de yoga cuida cada detalle del espacio físico.',
      statement: 'Su web tiene que hacer lo mismo.',
      accentColor: '#566A66',
    },

    // 8) Funnel Flow — 3 columnas con texto editorial arriba
    funnelFlow: {
      background: '#313D3B',
      editorial: {
        title: 'Una web diseñada para convertir',
        subtitle: 'Cada sección tiene un propósito.',
        content:
          'El rediseño de Raw Yoga Studio no fue solo estético. Fue estructural: una nueva arquitectura de contenido pensada para acompañar al visitante desde el primer contacto hasta la reserva confirmada, sin fricciones y con la identidad del estudio presente en cada pantalla.',
      },
      steps: [
        {
          step: 1,
          image: '/projects/raw-yoga-studio/Bento_Rawyoga-Inicio_tabletmovil.jpg',
          imageAlt: 'Raw Yoga Studio — nueva página de inicio en tablet y móvil',
          title: 'Primera impresión',
          description:
            'Hero visual con propuesta de valor clara y acceso directo a clases y terapias desde el primer scroll. La home hace el trabajo de convencer antes de que el usuario busque más.',
        },
        {
          step: 2,
          image: '/projects/raw-yoga-studio/Rawyoga-Clases-mockup.jpg',
          imageAlt: 'Raw Yoga Studio — sección de clases y horarios rediseñada',
          title: 'Clases y horarios',
          description:
            'Rediseño completo de la sección de clases: tipología, horarios y nivel de cada práctica presentados de forma clara, con acceso directo a reserva en un clic.',
        },
        {
          step: 3,
          image: '/projects/raw-yoga-studio/Bento_Rawyoga-Reserva-Terapias.png',
          imageAlt: 'Raw Yoga Studio — sistema de reserva de terapias',
          title: 'Terapias y reservas',
          description:
            'Sistema de reserva integrado para terapias individuales. Cada servicio tiene su ficha propia con descripción, duración y precio — y un botón de reserva siempre visible.',
        },
      ],
    },

    // 9) Quote cierre
    quoteBanner: {
      quote: 'La calma que transmite un buen estudio de yoga tiene que sentirse también en su web.',
      author: 'Nazareth, sobre Raw Yoga Studio',
      backgroundImage: {
        type: 'image',
        src: '/projects/raw-yoga-studio/hero.jpg',
        alt: 'Raw Yoga Studio — ambiente del estudio',
      },
      overlay: true,
    },

    layoutOrder: [
      'hero',
      'bento',
      'heading',
      'features',
      'imageCompare',
      'web',
      'statementBlock',
      'funnelFlow',
      'quoteBanner',
    ],
  },

  meta: {
    client: 'Raw Yoga Studio',
    year: '2024',
    role: ['Web Designer', 'UX/UI Designer', 'Estrategia'],
    tools: ['Figma', 'WordPress'],
    deliverables: ['Rediseño web', 'UX/UI', 'Sistema de reservas', 'Identidad digital'],
    liveUrl: 'https://rawyoga.es',
  },

  tagline: 'Una web tan cuidada como el espacio que representa.',
  cover: '/projects/raw-yoga-studio/RawYogaStudio.jpg',
  featured: false,
  ambientColor: '#2A2A22',
  ambientGradient: 'linear-gradient(135deg, #1A1A18 0%, #4A4A3A 100%)',

  seoTitle: 'Raw Yoga Studio — Rediseño Web & UX/UI para Estudio de Yoga | Nazareth Gradín',
  seoDescription:
    'Rediseño completo de la web de Raw Yoga Studio: nueva arquitectura de contenido, sistema de reservas y experiencia digital coherente con la filosofía del estudio. Por Nazareth Gradín.',

  status: 'published',
  order: 9,
  nextStack: ['ibiza-observatorio', 'las-islas-cies', 'viaje-morocco'],
};
