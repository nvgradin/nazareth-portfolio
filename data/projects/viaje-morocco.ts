import { ProjectWithLayout } from '@/lib/project-layout.types';

export const viajeMarruecos: ProjectWithLayout = {
  slug: 'viaje-morocco',
  title: 'Viaje Morocco',
  excerpt:
    'Branding completo y rediseño web para una agencia de viajes especializada en rutas auténticas por Marruecos. Identidad visual, sistema de marca y experiencia digital desde cero.',

  categories: ['branding', 'ux-ui', 'web-dev'],
  tags: ['Branding', 'Web Development'],

  thumbnail: {
    type: 'image',
    src: '/projects/viaje-morocco/hero.jpg',
    alt: 'Viaje Morocco — branding y rediseño web para agencia de viajes especializada en experiencias auténticas por Marruecos, por Nazareth Gradín',
  },

  theme: {
    primary: '#1C1410',
    secondary: '#6B4C3B',
    accent: '#C8702A',
    background: '#1C1410',
  },

  layout: {
    // 1) Hero
    hero: {
      title: 'Viaje Morocco',
      subtitle: 'Diseñando una marca de viajes inspirada en la autenticidad del Marruecos real',
      intro:
        'Una plataforma de viajes creada para transformar años de experiencia guiando rutas por Marruecos en una marca digital preparada para crecer, conectar y vender experiencias auténticas.',
      logo: '/projects/viaje-morocco/logo.png',
      logoSize: 160,
      roles: ['Branding', 'Web Development', 'UX/UI', 'Product Design'],
      context: 'Proyecto de rediseño · viajemorocco.com',
      liveUrl: 'https://viajemorocco.com',
      result:
        'Nueva identidad visual coherente y web rediseñada que comunica autenticidad, confianza y la esencia del destino marroquí.',
      year: '2024',
      location: 'Pontevedra',
      heroBg: '/projects/viaje-morocco/hero.jpg',
    },

    // 2) Bento Gallery — 4 columnas
    bento: {
      mode: 'fixed',
      background: '#1C1410',
      columns: [
        {
          width: 1,
          cells: [
            {
              src: '/projects/viaje-morocco/Cascadas-de-Ozud.jpg',
              alt: 'Viaje Morocco — nueva identidad visual aplicada',
              ratio: 0.6,
            },
            {
              src: '/projects/viaje-morocco/Manual_Branding_Viaje_Morocco.png',
              alt: 'Viaje Morocco — detalle del sistema de marca',
              ratio: 0.4,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/viaje-morocco/bento-2.png',
              alt: 'Viaje Morocco — guía de viajes con la nueva identidad',
              ratio: 0.5,
            },
            {
              src: '/projects/viaje-morocco/branding_viajemorocco.jpg',
              alt: 'Viaje Morocco — aplicación de marca en material impreso',
              ratio: 0.5,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/viaje-morocco/ViajeMorocco_guia.jpg',
              alt: 'Viaje Morocco — logotipo vertical rediseñado',
              ratio: 0.55,
            },
            {
              src: '/projects/viaje-morocco/bento-3.png',
              alt: 'Viaje Morocco — detalle cromático de la identidad',
              ratio: 0.45,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/viaje-morocco/bento-4.png',
              alt: 'Viaje Morocco — composición de marca completa',
              ratio: 0.65,
            },
            {
              src: '/projects/viaje-morocco/bento-5.png',
              alt: 'Viaje Morocco — sistema visual en aplicación digital',
              ratio: 0.35,
            },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      title: 'Un proyecto nacido desde la experiencia real del territorio',
      subtitle: [
        'Viaje Morocco nace de la experiencia de Jamal, guía marroquí con años acompañando viajeros a través del desierto, pueblos bereberes y rutas alejadas del turismo convencional.',
        'El objetivo era transformar todo ese conocimiento, archivo visual y experiencia humana en una marca digital capaz de transmitir cercanía, aventura y autenticidad desde el primer contacto.',
      ],
    },

    // 4) Feature cards
    features: [
      {
        image: {
          type: 'image',
          src: '/projects/viaje-morocco/Manual_Branding_Viaje_Morocco.png',
          alt: 'Rediseño del logotipo de Viaje Morocco',
        },
        title: 'Rediseño de logotipo',
        description:
          'De una marca genérica a una identidad con carácter propio, con raíces visuales en la cultura y la geometría marroquí.',
      },
      {
        image: {
          type: 'image',
          src: '/projects/viaje-morocco/ViajeMorocco_guia.jpg',
          alt: 'Sistema visual aplicado a guía de viajes',
        },
        title: 'Sistema visual coherente',
        description:
          'Paleta, tipografía y grafismo que funcionan desde el logo hasta la guía impresa que el viajero se lleva a Marruecos.',
      },
      {
        image: {
          type: 'image',
          src: '/projects/viaje-morocco/bento-4.png',
          alt: 'Web rediseñada de Viaje Morocco',
        },
        title: 'Web orientada a conversión',
        description:
          'Una experiencia digital que guía al usuario desde el descubrimiento del destino hasta la solicitud de su viaje personalizado.',
      },
    ],

    // 5) Imagen parallax de transición
    introParallax: {
      src: '/projects/viaje-morocco/Miles-Kasbahs.jpeg',
      alt: 'Viaje Morocco — destino marroquí, esencia y autenticidad',
    },

    // 6) Antes / después del logotipo
    imageCompare: {
      before: {
        type: 'image',
        src: '/projects/viaje-morocco/logo.png',
        alt: 'Logotipo anterior de Viaje Morocco',
      },
      after: {
        type: 'image',
        src: '/projects/viaje-morocco/logo_vertical.png',
        alt: 'Nuevo logotipo rediseñado de Viaje Morocco',
      },
      labels: {
        before: 'Antes',
        after: 'Después',
      },
      caption:
        'Rediseño del logotipo: de una marca genérica a una identidad con carácter y raíces visuales en la cultura marroquí.',
      background: '#1C1410',
    },

    // 7) Branding Scroller
    brandingScroller: {
      title: 'IDENTIDAD & SISTEMA VISUAL',
      description: 'Una marca que huele a especias y suena a medina',
      bullets: [
        'La nueva identidad de Viaje Morocco nace de la esencia del destino: los patrones geométricos del zellij, la calidez de los atardeceres del Sahara y la tipografía que evoca la escritura árabe sin perder legibilidad occidental. Una paleta cálida de terracota, arena y dorado ancla la marca en el imaginario marroquí.',
        'El sistema visual es flexible: funciona en digital, en material impreso y en las guías de viaje que acompañan a cada cliente. Cada pieza comunica autenticidad y confianza, los dos valores clave de una agencia que promete experiencias reales en un destino fascinante.',
      ],
      background: '#1C1410',
      imageMode: 'wide',
      images: [
        { src: '/projects/viaje-morocco/Manual_Branding_Viaje_Morocco.png', alt: 'Viaje Morocco — aplicaciones de marca' },
        { src: '/projects/viaje-morocco/branding_viajemorocco_2.png', alt: 'Viaje Morocco — guía de viajes' },
        { src: '/projects/viaje-morocco/branding_viajemorocco.jpg', alt: 'Viaje Morocco — logotipo vertical' },
      ],
    },

    // 8) Web editorial
    web: {
      title: 'Una web pensada\npara convertir',
      subtitle: 'Diseño de experiencia digital\noriginado en la esencia del destino.',
      content: '',
      columns: [
        'viajemorocco.com necesitaba transmitir en pocos segundos lo que la agencia lleva años perfeccionando: experiencias marroquíes auténticas, a medida, con guías locales expertos.',
        'La arquitectura de la nueva web prioriza la fotografía como protagonista, la confianza como eje narrativo y el formulario de contacto como punto de llegada natural de cada visita.',
        'El resultado es una web coherente con la nueva identidad de marca y diseñada para convertir curiosidad en consulta.',
      ],
    },

    // 9) Web Panel — galería de mockups
    webPanel: {
      background: '#0D0A08',
      title: 'Viaje Morocco',
      description: 'La nueva web de viajemorocco.com: autenticidad marroquí desde el primer scroll.',
      mockups: [
        { type: 'image', src: '/projects/viaje-morocco/bento-5.png', alt: 'Viaje Morocco — diseño web, vista principal' },
        {
          type: 'image',
          src: '/projects/viaje-morocco/bento-2.png',
          alt: 'Viaje Morocco — sección de experiencias y rutas',
        },
        {
          type: 'image',
          src: '/projects/viaje-morocco/bento-3.png',
          alt: 'Viaje Morocco — detalle de identidad en digital',
        },
        {
          type: 'image',
          src: '/projects/viaje-morocco/bento-4.png',
          alt: 'Viaje Morocco — sistema visual en pantalla',
        },
      ],
    },

    // 10) Resultado
    textBlock: {
      variant: 'editorial',
      label: 'Resultado',
      title: 'Una marca nueva para un destino que lo merece',
      columns: [
        {
          text: 'El rediseño de Viaje Morocco entregó una identidad coherente desde el logo hasta la web, capaz de competir visualmente en un mercado donde la confianza es el factor decisivo para que alguien confíe su viaje a una agencia.',
        },
        {
          text: 'Un antes y un después tangible en la presencia digital de la marca: nueva identidad, nuevo logotipo, nueva web. La misma pasión por Marruecos, ahora con una imagen que la comunica de verdad.',
        },
      ],
    },

    // 11) Quote cierre
    quoteBanner: {
      quote: 'Marruecos no se explica. Se siente. El diseño tenía que hacer lo mismo.',
      author: 'Nazareth, sobre Viaje Morocco',
      backgroundImage: {
        type: 'image',
        src: '/projects/viaje-morocco/hero.jpg',
        alt: 'Viaje Morocco — destino marroquí',
      },
      imagePosition: 'center',
      overlay: true,
    },

    layoutOrder: [
      'hero',
      'bento',
      'heading',
      'features',
      'introParallax',
      'brandingScroller',
      'web',
      'textBlock',
      'quoteBanner',
      // webPanel se renderiza automáticamente dentro de 'web'
    ],
  },

  meta: {
    client: 'Viaje Morocco',
    year: '2024',
    role: ['Brand Designer', 'Web Designer', 'UX/UI Designer'],
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    deliverables: ['Rediseño de logotipo', 'Sistema de identidad visual', 'Diseño web', 'Guía de viajes'],
  },

  tagline: 'Un viaje a la magia de Marruecos desde la web.',
  cover: '/projects/viaje-morocco/hero.jpg',
  featured: false,
  ambientColor: '#6B4C3B',
  ambientGradient: 'linear-gradient(135deg, #1C1410 0%, #6B4C3B 100%)',

  seoTitle: 'Viaje Morocco — Branding & Diseño Web para Agencia de Viajes | Nazareth Gradín',
  seoDescription:
    'Branding completo y rediseño de web para Viaje Morocco: logotipo, sistema visual y experiencia digital para una agencia especializada en rutas auténticas por Marruecos. Por Nazareth Gradín, Product & Experience Designer.',

  status: 'published',
  order: 5,
  nextStack: ['raw-yoga-studio', 'tarxeta-cultura-galega', 'pan-do-porrino'],
};
