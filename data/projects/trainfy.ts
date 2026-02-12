import { ProjectWithLayout } from '@/lib/project-layout.types';

export const trainfy: ProjectWithLayout = {
  slug: 'trainfy',
  title: 'Trainfy',
  excerpt: 'Plataforma de intercambio deportivo que conecta atletas para compartir conocimientos y entrenar juntos.',

  category: 'product-design',
  tags: ['Product Design', 'UX/UI', 'Branding', 'Fullstack'],

  thumbnail: {
    type: 'image',
    src: '/projects/trainfy/hero.jpg',
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
      subtitle: 'Conectar. Compartir. Moverse. El diseño detrás de Trainfy.',
      intro: [
        'En el mundo del deporte, el equipo adecuado marca la diferencia. Pero, ¿y si los amantes del deporte pudieron no solo comprar y vender material, sino también intercambiarlo y conectarse entre sí? Esa fue la idea detrás de Trainfy: una plataforma digital que nació con la intención de ser un "Wallapop para deportistas" y evolucionó hacia algo más grande: un espacio para facilitar el acceso al equipamiento deportivo de forma flexible y colaborativa.',
        'Desde el inicio, asumí el reto de transformar esta idea en una experiencia digital real. Mientras el proyecto inicial se centraba en desarrollo puro, decidí ir más allá y diseñar una plataforma intuitiva, funcional y alineada con las necesidades de los usuarios.',
      ],
      logo: '/projects/trainfy/Logotipo.png',
      roles: ['Backend Dev', 'Desarrollo Web', 'Frontend Dev', 'Fullstack Developer', 'UI/UX Design'],
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
      title: 'La Creación para Trainfy',
      subtitle: 'Una plataforma pensada para la comunidad deportiva',
    },

    // 4) 3 cards en columnas
    features: [
      {
        image: { type: 'image', src: '/projects/trainfy/feature-branding.jpg', alt: 'UX Research' },
        title: 'Branding',
        description: 'Creación de la identidad, reflejando dinamismo y comunidad.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-ui-ux.jpg', alt: 'UI Design' },
        title: 'UI Design',
        description: 'Diseño de interfaces intuitivas que facilitan el intercambio y la conexión entre atletas.',
      },
      {
        image: { type: 'image', src: '/projects/trainfy/feature-dev.jpg', alt: 'Development' },
        title: 'Fullstack Dev',
        description: 'Desarrollo completo de la plataforma con React, Node.js y PostgreSQL.',
      },
    ],

    // 5) Architecture & Web Flow (unifica editorial + web)
    architectureWebFlow: {
      sectionTitle: 'Arquitectura & Web',
      intro: 'Desde wireframes hasta código, una plataforma pensada para la comunidad deportiva con enfoque mobile-first.',
      background: '#354251',
      modules: [
        {
          layout: 'text-image',
          title: 'Diseño UI/UX centrado en el usuario',
          content: 'Dada mi formación como Creativa, aporté un enfoque integral estructurando el proyecto desde sus bases visuales y funcionales.',
          bullets: [
            'Wireframes detallados en Adobe XD',
            'Prototipos interactivos para validar flujos',
            'Arquitectura de información intuitiva',
            'Guía de estilo completa para integración',
          ],
          image: { type: 'image', src: '/projects/trainfy/editorial-full.jpg', alt: 'Arquitectura de información Trainfy' },
        },
        {
          layout: 'full-image',
          image: { type: 'image', src: '/projects/trainfy/web-mockup-1.jpg', alt: 'Web Mockup Desktop' },
        },
        {
          layout: 'image-text',
          title: 'Diseño responsive mobile-first',
          content: 'La plataforma garantiza una experiencia óptima en todos los dispositivos, con cada componente adaptándose fluidamente.',
          image: { type: 'image', src: '/projects/trainfy/web-mockup-2.jpg', alt: 'Web Mockup Mobile' },
        },
        {
          layout: 'full-image',
          image: { type: 'image', src: '/projects/trainfy/web-mockup-4.jpg', alt: 'Web Mockup Trainfy' },
        },
      ],
    },

    // 6a) Showcase Triptych (standalone, sin EditorialBlock de branding)
    showcase: {
      left: { type: 'image', src: '/projects/trainfy/showcase-left.jpg', alt: 'Showcase left' },
      centerTop: { type: 'image', src: '/projects/trainfy/showcase-center-top.jpg', alt: 'Showcase center top' },
      centerBottom: { type: 'image', src: '/projects/trainfy/showcase-center-bottom.jpg', alt: 'Showcase center bottom' },
      right: { type: 'image', src: '/projects/trainfy/showcase-right_horizontal.jpg', alt: 'Showcase right' },
    },

    // 6b) Branding Scroller
    brandingScroller: {
      title: 'BRANDING',
      description: 'La identidad de Trainfy refleja dinamismo, comunidad y pasión por el deporte. Colores vibrantes que transmiten energía, tipografías modernas y un sistema visual coherente que se adapta a todos los puntos de contacto.',
      bullets: [
        'Un logotipo con energía dinámica inspirando confianza.',
        'Una gama cromática que evoca pasión y dinamismo con elegancia.',
        'Un diseño minimalista que mantiene el enfoque en la funcionalidad sin perder atractivo visual.',
      ],
      background: '#212C3A',
      images: [
        { src: '/projects/trainfy/showcase-center-top.jpg', alt: 'Branding 1' },
        { src: '/projects/trainfy/showcase-right_horizontal.jpg', alt: 'Branding 2' },
        { src: '/projects/trainfy/showcase-left.jpg', alt: 'Branding 3', orientation: 'vertical' },
        { src: '/projects/trainfy/showcase-center-bottom.jpg', alt: 'Branding 4' },
      ],
    },

    // 7) Learning block
    learning: {
      title: 'Una aventura de aprendizaje intenso',
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

    // 10) Quote banner
    quoteBanner: {
      quote: 'Simplemente juega. Diviértete. Disfruta el juego.',
      author: 'Michael Jordan',
      backgroundImage: { type: 'image', src: '/projects/trainfy/quote-bg.jpg', alt: 'Quote Background' },
      imagePosition: 'top',  // Mostrar parte superior de la imagen (rostro visible)
    },

    // 11) Closing text
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

  status: 'published',
  order: 1,
};
