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
      intro: 'Transformé la propuesta de hacer una plataforma de compraventa de nicho en una experiencia centrada en la conexión entre los deportistas.',
      result: 'La presentación final del bootcamp de Trainfy con empresas del sector me permitió conseguir varias oportunidades de incorporación.',
      logo: '/projects/trainfy/Logotipo.png',
      roles: ['Fullstack Developer', 'UI/UX Design'],
      context: 'Proyecto final Bootcamp Fullstack Developer',
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
        'Trainfy nació como proyecto final del bootcamp fullstack. El brief era técnico: una plataforma de compra-venta de material deportivo. Pero queríamos hacerlo lo más real posible y, algo no hacía click. Ya existen Wallapop, Milanuncios… ¿tiene sentido crear otra plataforma igual, solo enfocada en deporte?',
        'La respuesta llegó cambiando la pregunta: ¿y si los amantes del deporte pudieran no solo comprar y vender material, sino también intercambiarlo, entrenar juntos, crear comunidad? Eso es lo que construimos.',
      ],
    },

    // 4) 3 cards en columnas
    features: [
      {
        image: { type: 'image', src: '/projects/trainfy/feature-ui-ux.jpg', alt: 'Proceso de redefinición del brief — de marketplace a comunidad deportiva' },
        title: 'Redefinir el brief',
        description: 'El encargo pedía un marketplace. Nosotros lo elevamos a una comunidad deportiva. Esa decisión cambió la arquitectura, el diseño y el stack desde el primer día.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-branding.jpg', alt: 'Exploración de identidad visual para Trainfy — naming, paleta y sistema tipográfico' },
        title: 'Diseño antes que código',
        description: 'Venía de publicidad y creatividad, no de desarrollo. Eso me dio ventaja: apliqué arquitectura de información, flujos de usuario e identidad visual antes de escribir una línea de código. El diseño no decoró el producto — lo definió.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-dev.jpg', alt: 'Stack técnico de Trainfy — React, Node.js y PostgreSQL en producción' },
        title: 'De la marca al producto digital',
        description: 'Primer proyecto fullstack real: branding, UI, componentes en React, base de datos en PostgreSQL. Por primera vez entendí un producto digital end-to-end. Eso cambió para siempre cómo diseño.',
      },
    ],

    introParallax: {
      src: '/projects/trainfy/trainfy-signup-bg.jpg',
      alt: 'Pantalla de registro de Trainfy — primer punto de contacto con la comunidad deportiva',
    },

    statementBlock: {
      label: 'Insight',
      setup: 'El problema no era crear otro marketplace segmentado.',
      statement: [
        'Era que no existía un marketplace que, además,',
        'conectara a los deportistas entre sí.',
      ],
      accentColor: '#1E3A5F',
    },

    // 5) Hero Image — pantalla de login a ancho completo
    heroImage: {
      src: '/projects/trainfy/Trainfy_login.png',
      alt: 'Diseño de la pantalla de login de Trainfy — acceso a la comunidad deportiva',
      background: '#212C3A',
      borderRadius: 16,
      caption: 'La pantalla de acceso marcaba el tono: una plataforma donde los deportistas no solo compran y venden material, sino que se encuentran.',
    },

    // 6) Web Editorial + WebPanel (carrusel de mockups)
    web: {
      title: 'Lo que Trainfy\nLlegó a Hacer',
      subtitle: 'Una plataforma funcional\nconstruida en tres semanas.',
      content: '',
      columns: [
        'Cuatro meses de bootcamp intensivo. Tres semanas de proyecto final. Equipo de tres personas. El resultado fue una plataforma real, no una demo vacía.',
        'Trainfy permitía crear cuenta y perfil deportivo, publicar anuncios de compra, venta e intercambio de material, insertar espacios publicitarios y conectar con otros deportistas a través de un sistema de mensajería. No era perfecta — era la primera vez que construía algo así de cero — pero funcionaba.',
        'Técnicamente se apoyó en React en el frontend, Node.js y PostgreSQL en el backend, y librerías como Redux para el estado, Axios para las peticiones HTTP, Bcrypt para la seguridad de contraseñas y Cloudinary para la gestión de imágenes. Cada decisión técnica tenía una razón de UX detrás.',
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
      description: 'En un bootcamp la presión es entregar funcionalidad. El código manda, el diseño espera. Decidí invertir ese orden.',
      bullets: [
        'Antes de tocar React, definí la identidad de Trainfy: qué comunicaba, a quién hablaba, cómo debía sentirse. No como ejercicio estético, sino como brújula. Una vez que la marca tenía dirección, cada decisión de interfaz fue más rápida y más coherente.',
        'El nombre, el logo, la paleta — todo apuntaba a lo mismo: energía, movimiento, comunidad. No un catálogo deportivo. Un punto de encuentro.',
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
          text: 'Trainfy no llegó a producción. Es un proyecto final de bootcamp, y así es como debe leerse: como una demostración de capacidad, no como un producto en el mercado.',
        },
        {
          text: 'Lo que sí fue real: de una promoción de ~20 alumnos, solo 2 salieron contratados directamente desde la presentación final. Empecé a trabajar en una de esas empresas.',
        },
        {
          text: 'Desde entonces no puedo diseñar sin pensar en la implementación, ni implementar sin pensar en la experiencia. Trainfy me enseñó que esa tensión no es un problema. Es exactamente donde quiero trabajar.',
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
