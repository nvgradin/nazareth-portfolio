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
      result: 'Derivó en oportunidades reales de incorporación tras la presentación final del bootcamp.',
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
      src: '/projects/trainfy/Trainfy_Login.png',
      alt: 'Trainfy — Login Design',
      background: '#212C3A',
      borderRadius: 16,
      caption: 'Primera aproximación a una experiencia donde los deportistas no solo compran y venden, sino que se conectan.',
    },

    // 6) Web Editorial + WebPanel (carrusel de mockups)
    web: {
      title: 'Web',
      subtitle: 'aqui definir pendiente: Decisión de producto, Arquitectura (cómo se organiza), UX (cómo se usa), Implementación (cómo se construye) ',
      content: '......',
    },
    webPanel: {
      title: 'web',
      description: '...',
      bullets: [
        '...',
        '...',
        '...',
        '...',
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

    // 8) Learning block
    learning: {
      title: 'Resultado',
      intro: 'Trainfy no solo consolidó mis conocimientos en diseño y desarrollo web, sino que también:',
      columns: [
        {
          subtitle: '1. Proporcionó una experiencia funcional',
          text: 'Permitió realizar las acciones clave necesarias para su propósito (crear cuenta, subir material deportivo creando anuncios, compra, venta, intercambio de material deportivo).',
        },
        {
          subtitle: '2. Crear una experiencia de usuario enriquecida con una marca significativa',
          text: 'Incorporando mis habilidades previas a la formación, he aportado branding, arquitectura de información, wireframe, análisis inicial del flujo del usuario... Las habilidades del diseño UI/UX que permitió brindar un enfoque profesional que enriquecieron la solución final.',
        },
        {
          subtitle: '3. Fusionó el entendimiento global desde el diseño hasta el desarrollo',
          text: 'Aplicar y comprender cómo se crea una web compleja es enormemente enriquecedor. Comprender desde el modelo del negocio, el diseño visual, hasta la creación de componentes con React en frontend y ahondar más allá, para saber cómo organizar los datos con backend me permitió expandir y optimizar mi forma de trabajo.',
        },
      ],
    },

    // 9) Quote banner
    quoteBanner: {
      quote: 'Fue el primer proyecto en el que entendí que el diseño y el código no son disciplinas distintas. Son la misma pregunta hecha de dos formas.',
      author: 'Nazareth, sobre Trainfy',
      backgroundImage: { type: 'image', src: '/projects/trainfy/quote-bg.jpg', alt: 'Quote Background' },
      imagePosition: 'top',  // Mostrar parte superior de la imagen (rostro visible)
    },

    // 10) Closing text
    closing: {
      title: 'Diseñando para Aprender y Crecer',
      content: 'Este proyecto me confirmó la importancia de la perseverancia y el aprendizaje continuo. Fue mi primera experiencia en un desarrollo fullstack tan intenso, gracias al cual adquirí nociones que aplico actualmente en proyectos como diseñadora y creadora web en WordPress. Un reto que decidí abordarlo como una oportunidad para explorar el potencial de unir diseño y desarrollo en un entorno lo más realista posible. Trainfy sigue siendo un recordatorio de que cada esfuerzo, por pequeño que parezca, es un paso hacia la excelencia profesional.',
    },
  },

  meta: {
    client: 'Proyecto propio',
    year: '2019-2024',
    duration: '4 meses bootcamp + desarrollo continuo',
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
