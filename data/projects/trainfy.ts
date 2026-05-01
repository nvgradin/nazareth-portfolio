import { ProjectWithLayout } from '@/lib/project-layout.types';

export const trainfy: ProjectWithLayout = {
  slug: 'trainfy',
  title: 'Trainfy',
  excerpt: 'Plataforma de intercambio deportivo que conecta atletas para compartir conocimientos y entrenar juntos.',

  categories: ['product-design', 'ux-ui', 'branding'],
  tags: ['Product Design & UX', 'Branding'],

  thumbnail: {
    type: 'image',
    src: '/projects/trainfy/portada-trainfy.webp',
    alt: 'Trainfy - Plataforma de intercambio deportivo',
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
        // Columna 1: ancho 1, 2 celdas (65% / 35%)
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-1.jpg',
              alt: 'Pantalla principal de Trainfy mostrando el feed de intercambios deportivos',
              ratio: 0.65,
            },
            {
              src: '/projects/trainfy/bento-5.jpg',
              alt: 'Interfaz de búsqueda de compañeros de entrenamiento en Trainfy',
              ratio: 0.35,
            },
          ],
        },
        // Columna 2: ancho 1, 1 celda (100%)
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-2.png',
              alt: 'Sistema de identidad visual y logotipo de Trainfy sobre fondo azul',
              ratio: 0.44,
            },
            {
              src: '/projects/trainfy/bento-6.jpg',
              alt: 'Mockup de iPhone mostrando la aplicación Trainfy en contexto real',
              ratio: 0.56,
            }
          ],
        },
        // Columna 3: ancho 1, 2 celdas (50% / 50%)
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-3.jpg',
              alt: 'Mockup de iPhone mostrando la aplicación Trainfy en contexto real',
              ratio: 0.6,
            },
            {
              src: '/projects/trainfy/bento-7.jpg',
              alt: 'Diseño responsive de Trainfy adaptado a pantalla móvil',
              ratio: 0.4,
            },
          ],
        },
        // Columna 4: ancho 1, 3 celdas (40% / 30% / 30%)
        {
          width: 1,
          cells: [
            {
              src: '/projects/trainfy/bento-4.png',
              alt: 'Panel de estadísticas y métricas de actividad del usuario',
              ratio: 0.7,
            },
            {
              src: '/projects/trainfy/bento-8.jpg',
              alt: 'Selector de categorías deportivas: running, ciclismo, natación',
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
        image: { type: 'image', src: '/projects/trainfy/feature-ui-ux.jpg', alt: 'UX Research' },
        title: 'Redefinir el brief',
        description: 'El encargo pedía un marketplace. Nosotros lo elevamos a una comunidad deportiva. Esa decisión cambió la arquitectura, el diseño y el stack desde el primer día.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-branding.jpg', alt: 'UI Design' },
        title: 'Diseño antes que código',
        description: 'Venía de publicidad y creatividad, no de desarrollo. Eso me dio ventaja: apliqué arquitectura de información, flujos de usuario e identidad visual antes de escribir una línea de código. El diseño no decoró el producto — lo definió.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-dev.jpg', alt: 'Development' },
        title: 'De la marca al producto digital',
        description: 'Primer proyecto fullstack real: branding, UI, componentes en React, base de datos en PostgreSQL. Por primera vez entendí un producto digital end-to-end. Eso cambió para siempre cómo diseño.',
      },
    ],

    introParallax: {
      src: '/projects/trainfy/trainfy-signup-bg.jpg',
      alt: 'Trainfy — signup background',
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
      alt: 'Trainfy — Login Design',
      background: '#212C3A',
      borderRadius: 16,
      caption: 'Primera aproximación a una experiencia donde los deportistas no solo compran y venden, sino que se conectan.',
    },

    // 6) Web Editorial + WebPanel (carrusel de mockups)
    web: {
      title: 'Lo que Trainfy\nLlegó a Hacer',
      subtitle: 'Una plataforma funcional\nconstruida en tres semanas.',
      content: 'Cuatro meses de bootcamp intensivo. Tres semanas de proyecto final. Equipo de tres personas. El resultado fue una plataforma real, no una demo vacía.',
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
        { type: 'image', src: '/projects/trainfy/web-mockup-1.jpg', alt: 'Web Mockup Desktop' },
        { type: 'image', src: '/projects/trainfy/web-mockup-2.jpg', alt: 'Web Mockup Mobile' },
        { type: 'image', src: '/projects/trainfy/web-mockup-3.jpg', alt: 'Web Mockup Mobile' },
        { type: 'image', src: '/projects/trainfy/web-mockup-4.jpg', alt: 'Web Mockup Mobile' },
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
        { src: '/projects/trainfy/showcase-center-bottom.jpg', alt: 'Logotipo Trainfy' },
        { src: '/projects/trainfy/showcase-right_horizontal.jpg', alt: 'Branding 2' },
        { src: '/projects/trainfy/showcase-left.jpg', alt: 'Branding 3', orientation: 'vertical' },
        { src: '/projects/trainfy/showcase-center-top.jpg', alt: 'Branding 4' },
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
      backgroundImage: { type: 'image', src: '/projects/trainfy/quote-bg.jpg', alt: 'Quote Background' },
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

  status: 'published',
  order: 1,
  nextStack: ['las-islas-cies', 'silvia-fernandez-de-luna', 'amigo-secreto'],
};
