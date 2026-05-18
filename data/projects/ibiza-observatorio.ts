import { ProjectWithLayout } from '@/lib/project-layout.types';

const PORTADA = '/projects/ibiza-observatorio/IbizaObservatorio_portada.jpeg';

export const ibizaObservatorio: ProjectWithLayout = {
  slug: 'ibiza-observatorio',
  title: 'Ibiza Observatorio de Edificación',
  excerpt: 'El sector de la edificación en Ibiza tenía información. Lo que no tenía era un lugar donde encontrarla.',

  categories: ['web-dev', 'strategy', 'ux-ui', 'ai-driven'],
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
      subtitle: 'Una plataforma digital diseñada para organizar información técnica, normativa y residencial de Ibiza.',
      intro: 'El reto era estructurar una gran cantidad de información técnica, informes, normativas, estadísticas y recursos relacionados con vivienda y urbanismo en Ibiza. El proyecto requería construir una plataforma clara, escalable y fácil de gestionar, capaz de evolucionar con nuevos contenidos, herramientas y recursos digitales.',
      result: 'Plataforma construida desde cero. Arquitectura diseñada para que el cliente gestione el contenido sin depender de desarrollo técnico. Automatización CMS → Blog + LinkedIn activa desde el lanzamiento.',
      logo: '/projects/ibiza-observatorio/Logo.png',
      logoSize: 200,
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
            { src: '/projects/ibiza-observatorio/bento-1.jpg', alt: 'Ibiza Observatorio portada', ratio: 0.55 },
            { src: '/projects/ibiza-observatorio/prensa-ibizaobservatorio-edificacion.png', alt: 'Ibiza Observatorio Normativas', ratio: 0.45 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: PORTADA, alt: 'Ibiza Observatorio portada', ratio: 0.44 },
            { src: '/projects/ibiza-observatorio/bento-5.jpg', alt: 'Ibiza Observatorio Normativas', ratio: 0.56 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/ibiza-observatorio/bento-4.png', alt: 'Ibiza Observatorio Info Vivienda', ratio: 0.6 },
            { src: '/projects/ibiza-observatorio/ibiza-villa-santa-eulalia.jpeg', alt: 'Ibiza Observatorio Normativas', ratio: 0.4 },
          ],
        },
        {
          width: 1,
          cells: [
            { src: '/projects/ibiza-observatorio/IbizaObservatorio_Blog.jpg', alt: 'Ibiza Observatorio portada', ratio: 0.6 },
            { src: '/projects/ibiza-observatorio/Fundadores Ibiza Observatorio Antonio Calvo y Juan Planells.webp', alt: 'Ibiza Observatorio detalle', ratio: 0.4 },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      title: 'Cómo lo abordé',
      subtitle: [
        'Ibiza Observatorio de Edificación nace de la iniciativa de Juan Planells y Antonio Calvo, dos arquitectos técnicos ibicencos, que han detectado la necesidad de dar claridad sobre la información técnica tanto para profesionales, instituciones e incluso, la ciudadanía de Ibiza y Formentera.',
        'Desde las primeras fases participé junto al cliente y Emblanco Studio en la definición de la plataforma, ayudando a organizar la arquitectura de información, priorizar contenidos y plantear una estructura preparada para crecer con el tiempo.',
        'Mi rol fue construir la plataforma digital para aportar claridad, facilidad en la gestión documental y capaz de escalar. Con el centró en el diseño de la experiencia digital, la arquitectura del portal, el desarrollo web, la construcción de sistemas de contenido personalizados y la optimización SEO.',
      ],
    },

    // 4) Feature cards (3 columnas)
    features: [
      {
        image: { type: 'image', src: '/projects/ibiza-observatorio/MapaEstructura.png', alt: 'Arquitectura de contenido con Custom Post Types' },
        title: 'Arquitectura de información',
        description: 'Organización de normativas, estadísticas, informes y recursos técnicos dentro de una estructura clara y escalable.',
      },
      {
        image: { type: 'image', src: '/projects/ibiza-observatorio/Grafico-Diagrama-automatizacion-publicacion-contenido.png', alt: 'Automatización CMS a Blog y LinkedIn' },
        title: 'Sistema editorial y contenidos',
        description: 'Desarrollo de una plataforma preparada para publicar artículos, recursos técnicos y nuevas herramientas de forma flexible.',
      },
      {
        image: { type: 'image', src: '/projects/ibiza-observatorio/IbizaObservatorio_flotando_normativas.jpg', alt: 'CMS diseñado para autonomía editorial' },
        title: 'Plataforma viva y evolutiva',
        description: 'Un ecosistema digital diseñado para crecer progresivamente mediante nuevas secciones, integraciones y recursos externos.',
      },
    ],

    // 5) Statement
    statementBlock: {
      label: 'Insight',
      setup: 'La información técnica más compleja',
      statement: 'es la que más necesita claridad.',
      accentColor: '#1A2B4A',
    },

    // 6) Web editorial
    web: {
      title: 'Una plataforma\npara el sector',
      subtitle: 'Arquitectura de información\ndiseñada para crecer.',
      content: '',
      columns: [
        'La plataforma fue estructurada para organizar grandes volúmenes de contenido técnico y permitir la incorporación progresiva de nuevas herramientas, recursos y secciones.',
        'Además de las áreas principales desarrolladas dentro del observatorio, el ecosistema digital también integró plataformas externas y recursos especializados conectados al proyecto.',
        'El objetivo no era crear una base digital preparada para evolucionar con el tiempo.',
      ],
    },

    // 7) Web Panel (se renderiza automáticamente dentro de 'web')
    webPanel: {
      background: '#0D1520',
      title: 'Ibiza Observatorio de Edificación',
      description: 'La primera plataforma de referencia del sector de la edificación en Ibiza.',
      mockups: [
        { type: 'image', src: '/projects/ibiza-observatorio/mockup_ibizaobservatorio.jpg', alt: 'Ibiza Observatorio Normativas', },
        { type: 'image', src: '/projects/ibiza-observatorio/bento-1.jpg', alt: 'Ibiza Observatorio Normativas', },
        { type: 'image', src: '/projects/ibiza-observatorio/IbizaObservatorio_Inicio.jpg', alt: 'Ibiza Observatorio — estadísticas' },
        { type: 'image', src: '/projects/ibiza-observatorio/bento-5.jpg', alt: 'Ibiza Observatorio — notas técnicas' },
        { type: 'image', src: '/projects/ibiza-observatorio/bento-6.jpg', alt: 'Ibiza Observatorio — info vivienda' },
      ],
    },

    // 8) Funnel Flow — Automatización de contenido
    funnelFlow: {
      background: '#0D1520',
      editorial: {
        title: 'Escalabilidad editorial y autonomía',
        subtitle: 'Publicar una vez. Aparecer en todas partes.',
        content: 'La plataforma fue preparada para facilitar la publicación y organización continua de contenido técnico y editorial. Además del desarrollo del sistema, también se trabajó la formación y acompañamiento del cliente para permitir una gestión autónoma y sostenible del observatorio.',
      },
      steps: [
        {
          step: 1,
          image: '/projects/ibiza-observatorio/IbizaObservatorio_flotando_normativas.jpg',
          imageAlt: 'CMS — Publicación de contenido en Ibiza Observatorio',
          title: 'Publicación autónomo',
          description: 'El equipo publica una normativa, estadística, nota técnica o info vivienda directamente desde el CMS. Sin intermediarios, sin depender de desarrollo técnico.',
        },
        {
          step: 2,
          image:'/projects/ibiza-observatorio/IbizaObservatorio_Blog.jpg',
          imageAlt: 'Blog — Anuncio automático de nuevo contenido',
          title: 'Blog — Anuncio automático',
          description: 'En el momento de publicación, el sistema genera automáticamente un artículo en el blog del observatorio anunciando el nuevo contenido.',
        },
        {
          step: 3,
          image: '/projects/ibiza-observatorio/IbizaObservatorio_LinkedIn.jpg',
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
        { text: 'Construida íntegramente desde cero, Ibiza Observatorio centraliza por primera vez el conocimiento técnico, normativo y estadístico del sector de la edificación en la isla. Las instituciones que generan información —ayuntamientos, Consell Insular, Govern de Baleares— tienen ahora un canal que la hace accesible a los profesionales que la necesitan. Un proyecto construido para transformar información técnica y dispersa en una experiencia digital clara, accesible y preparada para evolucionar con el tiempo.' },
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
    tools: ['Wordpress'],
    liveUrl: 'https://ibizaobservatorio.com',
  },

  tagline: 'El sector de la edificación en Ibiza tenía información. Lo que no tenía era un lugar donde encontrarla.',
  cover: PORTADA,
  featured: true,
  ambientColor: '#293242',
  // Paleta propia ibiza: #4F5C77 (azul medio), #293242 (azul oscuro)
  thumbnailOverlay: 0.72,
  thumbnailOverlayColor: '#293242',

  status: 'published',
  order: 4,
  nextStack: ['trainfy', 'las-islas-cies', 'silvia-fernandez-de-luna'],
};
