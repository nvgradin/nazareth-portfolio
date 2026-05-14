import { ProjectWithLayout } from '@/lib/project-layout.types';

const PORTADA = '/projects/ibiza-observatorio/IbizaObservatorio_portada.jpeg';

export const ibizaObservatorio: ProjectWithLayout = {
  slug: 'ibiza-observatorio',
  title: 'Ibiza Observatorio de Edificación',
  excerpt: 'El sector de la edificación en Ibiza tenía información. Lo que no tenía era un lugar donde encontrarla.',

  categories: ['web-dev', 'strategy', 'ux-ui'],
  tags: ['WordPress', 'Arquitectura de información', 'Automatización', 'Desarrollo web'],

  thumbnail: {
    type: 'image',
    src: PORTADA,
    alt: 'Ibiza Observatorio de Edificación — plataforma de referencia del sector',
  },

  theme: {
    primary: '#293242',
    secondary: '#4F5C77',
    accent: '#E8A030',
    background: '#f8f9fa',
  },

  layout: {
    // 1) Hero
    hero: {
      title: 'Ibiza Observatorio de Edificación',
      subtitle: 'El sector de la edificación en Ibiza tenía información. Lo que no tenía era un lugar donde encontrarla.',
      intro: 'Construí desde cero la primera plataforma digital que centraliza normativas, estadísticas, guías técnicas y recursos del mercado inmobiliario de Ibiza para profesionales, instituciones y propietarios.',
      result: 'Plataforma construida desde cero. Arquitectura diseñada para que el cliente gestione el contenido sin depender de desarrollo técnico. Automatización CMS → Blog + LinkedIn activa desde el lanzamiento.',
      logo: '/projects/ibiza-observatorio/Logo.png',
      logoSize: 220,
      roles: ['Web Development', 'Arquitectura de información', 'Automatización', 'Estrategia'],
      context: 'Proyecto en colaboración con',
      collaborators: [{ name: 'Emblanco', url: 'https://emblanco.com/' }],
      year: '2025',
      liveUrl: 'https://ibizaobservatorio.com',
      heroBg: PORTADA,
    },

    // 2) Bento Gallery
    bento: {
      mode: 'fixed',
      background: '#1A2B4A',
      columns: [
        {
          width: 1,
          cells: [
            { src: PORTADA, alt: 'Ibiza Observatorio portada', ratio: 0.65 },
            { src: '/projects/ibiza-observatorio/bento-1.jpg', alt: 'Ibiza Observatorio Normativas', ratio: 0.35 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/ibiza-observatorio/bento-1.jpg', alt: 'Ibiza Observatorio portada', ratio: 0.44 },
            { src: '/projects/ibiza-observatorio/bento-5.jpg', alt: 'Ibiza Observatorio Normativas', ratio: 0.56 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/ibiza-observatorio/bento-4.png', alt: 'Ibiza Observatorio Info Vivienda', ratio: 0.6 },
            { src: '/projects/ibiza-observatorio/bento-6.jpg', alt: 'Ibiza Observatorio Normativas', ratio: 0.4 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/ibiza-observatorio/bento-2.jpg', alt: 'Ibiza Observatorio portada', ratio: 0.7 },
            { src: '/projects/ibiza-observatorio/Ibiza-Observatorio.jpeg', alt: 'Ibiza Observatorio detalle', ratio: 0.3 },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      title: 'Cómo lo abordé',
      subtitle: [
        'Ibiza concentra una presión territorial sin precedentes: una isla pequeña, con normativas repartidas entre múltiples administraciones, un mercado inmobiliario de los más exigentes de España y una comunidad de profesionales técnicos que no tenía dónde apoyarse. Las regulaciones existían, los datos también — pero estaban dispersos, en PDFs de difícil acceso, en páginas de cada ayuntamiento, sin contexto ni síntesis.',
        'El cliente tenía una visión clara: crear la referencia digital del sector de la edificación en Ibiza. Yo llegué como web developer y me quedé como arquitecta del producto. Desde las primeras reuniones ayudé a definir el alcance, la propuesta y el presupuesto. En colaboración con Emblanco —que desarrolló la identidad visual— construí el producto digital completo: arquitectura de información, desarrollo WordPress con tipos de contenido personalizados, integración de herramientas externas y formación al equipo.',
      ],
    },

    // 4) Feature cards (3 columnas)
    features: [
      {
        image: { type: 'image', src: PORTADA, alt: 'Arquitectura de contenido con Custom Post Types' },
        title: 'Una arquitectura para múltiples lenguajes',
        description: 'Normativas jurídicas. Estadísticas demográficas. Notas técnicas. Guías del mercado. Cada tipología de contenido tiene estructura propia: campos, categorías y presentación adaptadas a su naturaleza. No un blog disfrazado de plataforma — una plataforma real.',
      },
      {
        image: { type: 'image', src: PORTADA, alt: 'Automatización CMS a Blog y LinkedIn' },
        title: 'Publicar una vez, aparecer en todas partes',
        description: 'Una automatización conecta el CMS con el blog y con LinkedIn: cada vez que se publica una normativa, estadística o nota técnica, el sistema genera automáticamente un anuncio en el blog y lo distribuye en LinkedIn. Sin pasos extra, sin trabajo manual.',
      },
      {
        image: { type: 'image', src: PORTADA, alt: 'CMS diseñado para autonomía editorial' },
        title: 'Construida para no necesitar desarrollador',
        description: 'El CMS se diseñó para que el equipo del observatorio publique normativas, estadísticas y notas técnicas sin tocar código. Cada tipo de contenido tiene su flujo propio, sus campos estructurados y su presentación ya resuelta.',
      },
    ],

    // 5) Statement
    statementBlock: {
      label: 'Insight',
      setup: 'La información técnica más valiosa no es la más compleja.',
      statement: 'Es la que por fin se puede encontrar.',
      accentColor: '#1A2B4A',
    },

    // 6) Web editorial
    web: {
      title: 'Una plataforma\npara el sector',
      subtitle: 'Arquitectura de información\ndiseñada para crecer.',
      content: '',
      columns: [
        'Normativas jurídicas. Estadísticas demográficas. Notas técnicas de construcción. Guías del mercado inmobiliario. Artículos de blog. Diseñé un sistema de Custom Post Types en WordPress donde cada sección tiene estructura propia: campos, categorías y presentación adaptadas a su naturaleza.',
        'Una automatización conecta el CMS con el blog del observatorio y con LinkedIn. Cada vez que se publica contenido, el sistema genera automáticamente un anuncio y lo distribuye. Sin pasos extra. Sin trabajo manual. El contenido técnico llega a la comunidad profesional desde el momento en que se publica.',
        'El cliente desarrolló herramientas propias con IA — valoradora de viviendas, generador de informes, hemeroteca, directorio. Mi trabajo fue diseñar una arquitectura de navegación que las integrara como extensiones naturales del observatorio.',
      ],
    },

    // 7) Web Panel (se renderiza automáticamente dentro de 'web')
    webPanel: {
      title: 'Ibiza Observatorio de Edificación',
      description: 'La primera plataforma de referencia del sector de la edificación en Ibiza.',
      mockups: [
        { type: 'image', src: PORTADA, alt: 'Ibiza Observatorio — vista principal' },
        { type: 'image', src: PORTADA, alt: 'Ibiza Observatorio — normativas' },
        { type: 'image', src: PORTADA, alt: 'Ibiza Observatorio — estadísticas' },
        { type: 'image', src: PORTADA, alt: 'Ibiza Observatorio — notas técnicas' },
        { type: 'image', src: PORTADA, alt: 'Ibiza Observatorio — info vivienda' },
      ],
    },

    // 8) Funnel Flow — Automatización de contenido
    funnelFlow: {
      editorial: {
        title: 'Automatización de contenido',
        subtitle: 'Publicar una vez. Aparecer en todas partes.',
        content: '',
      },
      steps: [
        {
          step: 1,
          image: PORTADA,
          imageAlt: 'CMS — Publicación de contenido en Ibiza Observatorio',
          title: 'CMS — Publicación',
          description: 'El equipo publica una normativa, estadística, nota técnica o info vivienda directamente desde el CMS. Sin intermediarios, sin depender de desarrollo técnico.',
        },
        {
          step: 2,
          image: PORTADA,
          imageAlt: 'Blog — Anuncio automático de nuevo contenido',
          title: 'Blog — Anuncio automático',
          description: 'En el momento de publicación, el sistema genera automáticamente un artículo en el blog del observatorio anunciando el nuevo contenido.',
        },
        {
          step: 3,
          image: PORTADA,
          imageAlt: 'LinkedIn — Distribución automática a la comunidad profesional',
          title: 'LinkedIn — Distribución',
          description: 'El contenido se distribuye automáticamente en LinkedIn, llevando el conocimiento técnico directamente a la comunidad profesional desde el momento en que se publica.',
        },
      ],
    },

    // 9) Resultado editorial
    textBlock: {
      variant: 'editorial',
      label: 'Resultado',
      title: 'Desde cero hasta plataforma de referencia',
      columns: [
        { text: 'Construida íntegramente desde cero, Ibiza Observatorio centraliza por primera vez el conocimiento técnico, normativo y estadístico del sector de la edificación en la isla. Las instituciones que generan información —ayuntamientos, Consell Insular, Govern de Baleares— tienen ahora un canal que la hace accesible a los profesionales que la necesitan.' },
        { text: '4 tipologías de contenido con arquitectura propia (normativas, estadísticas, notas técnicas, info vivienda) · 1 automatización CMS → Blog + LinkedIn · 0 dependencia técnica para gestionar contenido · Construido desde cero · Lanzado abril 2025.' },
      ],
    },

    // 9) Quote cierre
    quoteBanner: {
      quote: 'El conocimiento del territorio no debería estar enterrado en un PDF.',
      backgroundImage: { type: 'image', src: PORTADA, alt: 'Ibiza Observatorio de Edificación' },
      overlay: true,
    },

    layoutOrder: [
      'hero',
      'bento',
      'heading',
      'features',
      'statementBlock',
      'web',
      'funnelFlow',
      'textBlock',
      'quoteBanner',
    ],
  },

  meta: {
    client: 'Ibiza Observatorio de Edificación',
    year: '2025',
    role: ['Web Development', 'Arquitectura de información', 'Automatización', 'Estrategia'],
    tools: ['WordPress'],
    liveUrl: 'https://ibizaobservatorio.com',
  },

  tagline: 'El sector de la edificación en Ibiza tenía información. Lo que no tenía era un lugar donde encontrarla.',
  cover: PORTADA,
  featured: false,
  ambientColor: '#293242',
  // Paleta propia ibiza: #4F5C77 (azul medio), #293242 (azul oscuro)
  thumbnailOverlay: 0.72,
  thumbnailOverlayColor: '#293242',

  status: 'published',
  order: 7,
  nextStack: ['las-islas-cies', 'silvia-fernandez-de-luna', 'trainfy'],
};
