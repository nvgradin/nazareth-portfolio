import { ProjectWithLayout } from '@/lib/project-layout.types';

export const trainfy: ProjectWithLayout = {
  slug: 'trainfy',
  title: 'Trainfy',
  excerpt: 'Redefiní el brief de un marketplace deportivo para construir una comunidad. Diseño, branding y desarrollo fullstack en tres semanas — y una oferta de trabajo desde la presentación final.',

  categories: ['product-design', 'ux-ui', 'branding'],
  tags: ['Product Design & UX', 'Branding'],

  thumbnail: {
    type: 'image',
    src: '/projects/trainfy/portada-trainfy.webp',
    alt: 'Portada del proyecto Trainfy — plataforma de comunidad deportiva',
  },

  theme: {
    primary: '#1E3A5F',
    secondary: '#3D5A80',
    accent: '#EE6C4D',
    background: '#f8f9fa',
  },

  layout: {
    // 1) Hero 2 columnas (40/60)
    hero: {
      title: 'Trainfy',
      subtitle: 'De marketplace deportivo a comunidad.',
      intro: 'Partiendo de un brief técnico para una plataforma de compraventa deportiva, ayudé a convertir Trainfy en una experiencia más relacional, pensada para intercambiar material, conectar y crear comunidad.',
      result: 'La presentación final del bootcamp de Trainfy con empresas del sector me permitió conseguir varias oportunidades de incorporación.',
      logo: '/projects/trainfy/Logotipo.png',
      roles: ['Fullstack Developer', 'UI/UX Design'],
      context: 'Proyecto final Bootcamp Fullstack Developer de Hack a Boss',
      team: 'Equipo de 3',
      year: '2019',
      heroBg: '/projects/trainfy/portada_trainfy_2560.png',
    },

    // 2) Bento Gallery - Sistema de columnas con ratios de altura
    // Cada columna puede tener múltiples celdas con alturas personalizadas
    bento: {
      mode: 'fixed',
      background: '#354251',
      columns: [
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-1.jpg',
              alt: 'Vista del feed principal de Trainfy con publicaciones de intercambio deportivo',
              ratio: 0.65,
            },
            {
              src: '/projects/trainfy/bento-5.jpg',
              alt: 'Pantalla de exploración de perfiles deportivos en Trainfy',
              ratio: 0.35,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-2.png',
              alt: 'Logotipo e identidad visual de Trainfy sobre fondo azul corporativo',
              ratio: 0.44,
            },
            {
              src: '/projects/trainfy/bento-6.jpg',
              alt: 'Detalle de tarjeta de anuncio deportivo en la interfaz de Trainfy',
              ratio: 0.56,
            }
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-3.jpg',
              alt: 'Mockup del perfil de usuario con historial de actividad e intercambios',
              ratio: 0.6,
            },
            {
              src: '/projects/trainfy/bento-7.jpg',
              alt: 'Flujo de publicación de anuncio paso a paso en Trainfy',
              ratio: 0.4,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-4.png',
              alt: 'Sistema de diseño de Trainfy — componentes, paleta y tipografía',
              ratio: 0.7,
            },
            {
              src: '/projects/trainfy/bento-8.jpg',
              alt: 'Selector de disciplinas deportivas en el onboarding de Trainfy',
              ratio: 0.3,
            },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      label: 'El reto',
      title: 'Enfoque y alcance del proyecto',
      subtitle: [
        'Trainfy nació como proyecto final del bootcamp fullstack. El brief era técnico: una plataforma de compra-venta de material deportivo. Pero al llevar la idea al terreno real aparecía una duda evidente: Ya existen Wallapop, Milanuncios…¿tenía sentido construir otro marketplace de nicho?',
        'La respuesta llegó cambiando la pregunta: ¿y si los amantes del deporte pudieran no solo comprar y vender material, sino también intercambiarlo, entrenar juntos, crear comunidad? Eso es lo que construimos.',
      ],
    },

    // 4) 3 cards en columnas
    features: [
      {
        image: { type: 'image', src: '/projects/trainfy/feature-ui-ux.jpg', alt: 'Proceso de redefinición del brief — de marketplace a comunidad deportiva' },
        title: 'Redefinir el brief',
        description: 'El encargo pedía un marketplace. Nosotros lo elevamos a **una comunidad deportiva**. Esa decisión cambió la arquitectura, el diseño y el stack desde el primer día.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-branding.jpg', alt: 'Exploración de identidad visual para Trainfy — naming, paleta y sistema tipográfico' },
        title: 'Diseño y arquitectura en paralelo',
        description: 'Mientras analizábamos la **arquitectura de datos y la lógica del producto**, definía **identidad, flujos de experiencia y sistema de interfaz** a la vez. Esas conversaciones ocurrían **en paralelo**, no una después de la otra. Esa forma de trabajar hizo que el producto fuera más coherente desde dentro.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-dev.jpg', alt: 'Stack técnico de Trainfy — React, Node.js y PostgreSQL en producción' },
        title: 'De la marca al producto digital',
        description: 'Fue mi primer proyecto fullstack real y el primero en el que **conecté branding, interfaz y desarrollo dentro de una misma lógica de producto**. Ahí entendí por primera vez un producto digital de extremo a extremo.',
      },
    ],

    introParallax: {
      src: '/projects/trainfy/trainfy-signup-bg.jpg',
      alt: 'Pantalla de registro de Trainfy — primer punto de contacto con la comunidad deportiva',
    },

    statementBlock: {
      label: 'Insight',
      setup: 'El valor no estaba en segmentar un marketplace existente,',
      statement: [
        'sino en convertir el intercambio',
        'en una forma de conexión entre deportistas.',
      ],
      accentColor: '#1E3A5F',
    },

    // 6) Web Editorial + WebPanel (carrusel de mockups)
    web: {
      title: 'Lo que Trainfy\nLlegó a Hacer',
      subtitle: 'Una plataforma funcional\nconstruida en tres semanas.',
      content: '',
      columns: [
        '**Cuatro meses** de bootcamp intensivo. **Tres semanas** de proyecto final. Equipo de tres personas.',
        'Construimos un MVP con autenticación, perfiles de usuario, publicaciones de compra, venta e intercambio, mensajería entre deportistas y una estructura de base de datos pensada para sostener el producto desde su lógica interna.',
        '**Stack**\n`React` `Node.js` `PostgreSQL` `Redux` `Axios` `Bcrypt` `Cloudinary`',
      ],
    },
    webPanel: {
      title: 'Lo que Trainfy llegó a hacer',
      description: 'Una plataforma funcional construida en tres semanas.',
      bullets: [
        'Cuatro meses de bootcamp intensivo. Tres semanas de proyecto final. Equipo de tres personas. El resultado fue una plataforma real, no una demo vacía.',
        'Trainfy permitía crear cuenta y perfil deportivo, publicar anuncios de compra, venta e intercambio de material, insertar espacios publicitarios y conectar con otros deportistas a través de un sistema de mensajería. No era perfecta — era la primera vez que construía algo así de cero — pero funcionaba.',
        'Técnicamente se apoyó en React en el frontend, Node.js y PostgreSQL en el backend, y librerías como Redux para el estado, Axios para las peticiones HTTP, Bcrypt para la seguridad de contraseñas y Cloudinary para la gestión de imágenes. Cada decisión técnica tenía una razón de UX detrás.',
      ],
      mockups: [
        { type: 'image', src: '/projects/trainfy/web-mockup-1.jpg', alt: 'Vista de escritorio de Trainfy — página de inicio con feed de intercambios' },
        { type: 'image', src: '/projects/trainfy/web-mockup-2.jpg', alt: 'Vista móvil de Trainfy — navegación principal y categorías deportivas' },
        { type: 'image', src: '/projects/trainfy/web-mockup-3.jpg', alt: 'Vista móvil de Trainfy — detalle de anuncio con opciones de contacto' },
        { type: 'image', src: '/projects/trainfy/web-mockup-4.jpg', alt: 'Vista móvil de Trainfy — perfil de usuario y actividad reciente' },
      ],
    },

    // 7) Branding Scroller
    brandingScroller: {
      title: 'Por qué empezamos por la identidad',
      description: 'En un contexto donde la presión estaba en entregar funcionalidad, decidí invertir ese orden.',
      paragraphs: [
        'Antes de tocar React, definí qué debía comunicar Trainfy, a quién hablaba y cómo tenía que sentirse. Esa base hizo que cada decisión de interfaz y producto fuera más coherente.',
        '*El objetivo no era construir un catálogo deportivo, sino **un punto de encuentro**.*',
      ],
      background: '#212C3A',
      images: [
        { src: '/projects/trainfy/showcase-center-bottom.jpg', alt: 'Construcción del logotipo de Trainfy — geometría y proporciones de marca' },
        { src: '/projects/trainfy/showcase-right_horizontal.jpg', alt: 'Aplicación del sistema de color de Trainfy — azul corporativo y naranja de acción' },
        { src: '/projects/trainfy/showcase-left.jpg', alt: 'Tipografía y jerarquía visual del sistema de diseño de Trainfy', orientation: 'vertical' },
        { src: '/projects/trainfy/showcase-center-top.jpg', alt: 'Composición de marca completa — logotipo, color y tipografía en conjunto' },
      ],
    },

    // 8) Resultados
    textBlock: {
      variant: 'editorial',
      label: 'Resultados',
      title: 'Lo que se construyó en 3 semanas',
      columns: [
        {
          text: 'Trainfy no llegó a producción, pero sí cumplió su objetivo: demostrar que podía construir un producto digital completo. Poco después de presentarlo, empecé a trabajar en desarrollo y diseño de producto.',
        },
        {
          text: 'Ahí entendí que mi valor estaba en la intersección entre negocio, experiencia y tecnología.',
        },
      ],
    },

    // 9) Quote banner
    quoteBanner: {
      quote: 'Fue el primer proyecto en el que entendí que el diseño y el código no son disciplinas distintas. Son la misma pregunta hecha de dos formas.',
      author: 'Nazareth, sobre Trainfy',
      backgroundImage: { type: 'image', src: '/projects/trainfy/quote-bg.jpg', alt: 'Imagen de fondo de la cita final — atleta en movimiento' },
      imagePosition: 'top',
    },

    layoutOrder: [
      'hero',
      'bento',
      'heading',
      'features',
      'introParallax',
      'statementBlock',
      'web',
      'brandingScroller',
      'textBlock',
      'quoteBanner',
    ],
  },

  meta: {
    client: 'Proyecto propio',
    year: '2019',
    duration: '3 semanas',
    role: ['Product Designer', 'UX/UI Designer', 'Fullstack Developer'],
    tools: ['Adobe XD', 'Figma', 'React', 'Node.js', 'PostgreSQL', 'Redux'],
    deliverables: ['Branding completo', 'Design system', 'App web funcional', 'Documentación'],
  },

  tagline: 'Connect. Share. Move.',
  cover: '/projects/trainfy/portada_trainfy.webp',
  featured: true,
  ambientColor: '#1E3A5F',

  seoTitle: 'Trainfy — Product Design & Fullstack Dev | Nazareth',
  seoDescription: 'Cómo redefiní el brief de un marketplace deportivo, diseñé la identidad y construí la plataforma fullstack en tres semanas. Proyecto de Nazareth, Product Designer.',

  status: 'published',
  order: 1,
  nextStack: ['las-islas-cies', 'silvia-fernandez-de-luna', 'amigo-secreto'],
};
