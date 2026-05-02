import { ProjectWithLayout } from '@/lib/project-layout.types';

export const panDoPorrino: ProjectWithLayout = {
  slug: 'pan-do-porrino',
  title: 'Pan do Porriño',
  excerpt: 'Creé la identidad de marca con la que el Pan do Porriño, con 400 años de historia, obtuvo su Denominación de Origen. Branding, comunicación y packaging para un producto que ya era leyenda.',

  categories: ['branding', 'marketing'],
  tags: ['Branding', 'Marketing'],

  thumbnail: {
    type: 'image',
    src: '/projects/pan-do-porrino/portada_pan_do_porrino_2560.jpg',
    alt: 'Portada del proyecto Pan do Porriño — identidad de marca para Denominación de Origen',
  },

  theme: {
    primary: '#2C1A0E',
    secondary: '#8B5E3C',
    accent: '#D4A96A',
    background: '#FAF6F0',
  },

  layout: {
    // 1) Hero
    hero: {
      title: 'Pan do Porriño',
      subtitle: 'El Camino del Pan do Porriño hacia la Denominación de Origen',
      intro: 'En 2017 nació una iniciativa colectiva para dar reconocimiento al Pan do Porriño, un pan artesanal hecho de masa madre con propia receta, preservada durante los siglos y reconocido por su calidad desde 1600 que logró ser considerada como Marca Protegida y obtener la Denominación de Origen de su Bolla.',
      logo: '/projects/pan-do-porrino/Logotipo.png',
      roles: ['Branding', 'Marketing'],
      year: '2017',
    },

    // 2) Bento Gallery
    bento: {
      mode: 'fixed',
      background: '#2c1a0e',
      columns: [
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-1.png',
              alt: 'Logotipo principal de Pan do Porriño — símbolo derivado de la silueta de la Bolla',
              ratio: 0.6,
              objectPosition: 'right center',
            },
            {
              src: '/projects/pan-do-porrino/bento-5.png',
              alt: 'Versión secundaria del logotipo de Pan do Porriño sobre fondo corporativo',
              ratio: 0.4,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-2.png',
              alt: 'Composición de marca completa — logotipo, tipografía REIS y paleta púrpura',
              ratio: 0.45,
              objectPosition: 'center bottom',
            },
            {
              src: '/projects/pan-do-porrino/bento-6.png',
              alt: 'Sistema tipográfico de Pan do Porriño — tipografía REIS con textura artesanal',
              ratio: 0.55,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-3.png',
              alt: 'Paleta cromática de Pan do Porriño — púrpura, tierra y crema',
              ratio: 0.6,
            },
            {
              src: '/projects/pan-do-porrino/bento-7.png',
              alt: 'Pieza de comunicación exterior para la II Feira do Pan do Porriño',
              ratio: 0.4,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-4.png',
              alt: 'Packaging especial de la Bolla de Pan do Porriño con sistema de marca aplicado',
              ratio: 0.6,
            },
            {
              src: '/projects/pan-do-porrino/bento-8.jpg',
              alt: 'Aplicación del sistema de identidad en material promocional de Pan do Porriño',
              ratio: 0.4,
            },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      title: 'Una identidad corporativa para un pan con siglos de legado',
      subtitle: 'Entre varios impulsores — Galipad, Acipor, el Concello de O Porriño y los panaderos locales — iniciaron su camino para lograr el reconocimiento que merecía. *Mi labor: colaborar creando la Identidad de Marca del Pan do Porriño.*',
    },

    // 4) Features
    features: [
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/showcase-center-bottom.jpg', alt: 'Construcción del logotipo de Pan do Porriño — símbolo, tipografía y paleta en conjunto' },
        title: 'Branding',
        description: 'Sistema visual para traducir la herencia artesanal del Pan do Porriño a un lenguaje contemporáneo, reconocible y coherente con su valor histórico.',
      },
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/bento-4.png', alt: 'Piezas de comunicación para la II Feira do Pan do Porriño — cartelería y díptico' },
        title: 'Publicidad & Promoción',
        description: 'Desarrollo de piezas para la II Feira do Pan do Porriño, creando una presencia pública consistente en soportes impresos, promocionales y expositivos.',
      },
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/bento-6.png', alt: 'Packaging especial de la Bolla — sistema de marca aplicado al producto físico' },
        title: 'Packaging',
        description: 'Aplicación del sistema visual a una edición especial de la Bolla.',
      },
    ],

    introParallax: {
      src: '/projects/pan-do-porrino/Bolla Pan do Porrino.png',
      alt: 'La Bolla de Pan do Porriño — la pieza artesanal cuya silueta inspira el símbolo de marca',
    },

    // 5) Branding Scroller
    brandingScroller: {
      title: 'BRANDING',
      description: 'Diseño de logotipo y sistema visual inspirado en la Bolla de Pan do Porriño y su carácter artesanal',
      bullets: [
        'El **símbolo** sintetiza la silueta de la Bolla de Pan do Porriño en un gesto visual esencial, *reconocible y fácil de memorizar*.',
        'La **tipografía REIS** introduce una textura más manual e imperfecta, en diálogo con la materia, la harina y el proceso artesanal.',
        'El **púrpura** actúa como un código sutil de valor y singularidad, elevando la percepción de un producto popular pero *históricamente reconocido por su calidad desde al menos 1600*.',
      ],
      background: '#241E33',
      images: [
        { src: '/projects/pan-do-porrino/showcase-center-bottom.jpg', alt: 'Logotipo de Pan do Porriño — símbolo y wordmark sobre fondo oscuro' },
        { src: '/projects/pan-do-porrino/showcase-left.webp', alt: 'Aplicación vertical del sistema de marca de Pan do Porriño', orientation: 'vertical' },
        { src: '/projects/pan-do-porrino/PandoPorrino_branding_versionsecundaria.jpg', alt: 'Versión secundaria del logotipo de Pan do Porriño — variante horizontal con tagline' },
        { src: '/projects/pan-do-porrino/showcase-center-top.jpg', alt: 'Detalle del símbolo de Pan do Porriño — silueta de la Bolla en positivo y negativo' },
      ],
    },

    // Publicidad & Design Graphic
    mediaGrid: {
      title: 'Publicidad & Comunicación',
      subtitle: 'Campaña creativa para la II Feira do Pan do Porriño',
      body: 'Con la identidad definida, el sistema se aplicó a piezas promocionales, editoriales y expositivas para la **II Feira do Pan do Porriño**, manteniendo *una presencia de marca coherente en todos los soportes*.',
      row1: [
        { src: '/projects/pan-do-porrino/Mockup_anuncio_pandoporrino.jpg', alt: 'Mockup de anuncio publicitario de Pan do Porriño — aplicación de marca en prensa' },
        { src: '/projects/pan-do-porrino/Mockup_diptico_pandoporrino.jpg', alt: 'Mockup del díptico oficial de la II Feira do Pan do Porriño' },
      ],
      row2: [
        { src: '/projects/pan-do-porrino/packaging_new.png', alt: 'Packaging de la Bolla de Pan do Porriño — diseño final con sistema de marca aplicado' },
        { src: '/projects/pan-do-porrino/Mockup_pegatina1_pandoporrino.jpeg', alt: 'Mockup de pegatina promocional de Pan do Porriño para la Feira' },
        { src: '/projects/pan-do-porrino/Mockup_invitacion_pandoporrino.jpeg', alt: 'Mockup de invitación oficial a la II Feira do Pan do Porriño' },
      ],
    },

    // 6) Client logos
    clientLogos: [
      { src: '/projects/pan-do-porrino/client-logos/Concello_de_porrino.png', alt: 'Concello de Porriño' },
      { src: '/projects/pan-do-porrino/client-logos/logotipo_acipor.png', alt: 'ACIPOR' },
      { src: '/projects/pan-do-porrino/client-logos/logotipo_diputacion_pontevedra.png', alt: 'Deputación de Pontevedra' },
      { src: '/projects/pan-do-porrino/client-logos/logotipo_ccap_morea.png', alt: 'CCAP Morea' },
      { src: '/projects/pan-do-porrino/client-logos/logotipo_milagros.png', alt: 'Panadería Milagros' },
      { src: '/projects/pan-do-porrino/client-logos/panaderias_amaquia.png', alt: 'Panaderías Amaquia' },
      { src: '/projects/pan-do-porrino/client-logos/panaderias_argibay.png', alt: 'Panaderías Argibay' },
      { src: '/projects/pan-do-porrino/client-logos/panaderias_chinchina.png', alt: 'Panaderías Chinchiña' },
      { src: '/projects/pan-do-porrino/client-logos/panaderias_erundina.png', alt: 'Panaderías Erundina' },
      { src: '/projects/pan-do-porrino/client-logos/panaderias_ofornodemosende.png', alt: 'O Forno de Mosende' },
      { src: '/projects/pan-do-porrino/client-logos/panaderias_oprogreso.png', alt: 'O Progreso' },
      { src: '/projects/pan-do-porrino/client-logos/panaderias_torneiros.png', alt: 'Panaderías Torneiros' },
    ],

    // 7) Resultados
    textBlock: {
      variant: 'editorial',
      label: 'Resultado',
      title: 'Una marca al servicio de un reconocimiento colectivo',
      background: '#FAF6F0',
      columns: [
        { text: 'La identidad visual formó parte de una *iniciativa más amplia* de puesta en valor del Pan do Porriño, acompañando su visibilidad pública y su consolidación como producto singular del territorio.' },
        { text: 'Dentro de ese proceso colectivo, Pan do Porriño logró ser **Marca Protegida** y obtener la **Denominación de Origen** de su Bolla.' },
        { text: '' },
      ],
    },

    // 8) Quote banner
    quoteBanner: {
      quote: [
        'Peregrino do Camiño,',
        'leva unha botella de vino',
        'e unha bolla de Pan do Porriño...',
      ],
      author: [
        'Cantiga popular',
        'Traducción: "Peregrino del Camino, lleva una botella de vino y una bolla de Pan do Porriño..."',
      ],
      backgroundImage: { type: 'image', src: '/projects/pan-do-porrino/quota-bg.jpg', alt: 'Imagen de fondo de la cita — el Pan do Porriño en su contexto tradicional gallego' },
      imagePosition: 'center',
    },

  },

  meta: {
    client: 'Pan do Porriño',
    year: '2017',
    role: ['Brand Designer', 'Art Director'],
    tools: ['Illustrator', 'Photoshop'],
    deliverables: ['Identidad visual', 'Sistema de marca', 'Materiales impresos', 'Comunicación exterior', 'Publicidad', 'Packaging'],
  },

  seoTitle: 'Pan do Porriño — Branding & Denominación de Origen | Nazareth',
  seoDescription: 'Identidad de marca para el Pan do Porriño, un producto con 400 años de historia que obtuvo su Denominación de Origen. Branding, packaging y comunicación por Nazareth.',

  tagline: 'Pan do Porriño, Denominación de Origen.',
  cover: '/projects/pan-do-porrino/portada_pan_do_porrino_2560.jpg',
  featured: false,
  ambientColor: '#2C1A0E',

  status: 'published',
  order: 5,
  nextStack: ['tarxeta-cultura-galega', 'trainfy', 'las-islas-cies'],
};
