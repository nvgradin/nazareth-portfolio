import { ProjectWithLayout } from '@/lib/project-layout.types';

export const panDoPorrino: ProjectWithLayout = {
  slug: 'pan-do-porrino',
  title: 'Pan do Porriño',
  excerpt: 'Un legado de al menos 400 años que logró ser Marca Protegida con Denominación de Origen',

  categories: ['branding', 'marketing'],
  tags: ['Branding', 'Marketing'],

  thumbnail: {
    type: 'image',
    src: '/projects/pan-do-porrino/portada_pan_do_porrino_2560.jpg',
    alt: 'Pan do Porriño',
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
      intro: [
        'En 2017 nació la iniciativa de dar reconocimiento al Pan do Porriño, un pan  artesanal hecho de masa madre con propia receta, preservada durante los siglos y reconocido por su calidad desde 1600, siglo XVI. Entre varios impulsores, Galipad, Acipor, el Concello de O Porriño y los panaderos que cada día nos hornean la mejor Bolla de Pan del mundo, iniciaron su camino para lograr su objetivo: dar reconocimiento que merece. En ese camino, tuve el honor de colaborar creando la Identidad de Marca con la cual el Pan do Porriño logró convertirse en Marca Protegida y obtener la Denominación de Origen de su Bolla de Pan do Porriño. ',
      ],
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
              alt: 'Identidad visual Pan do Porriño',
              ratio: 0.6,
              objectPosition: 'right center',
            },
            {
              src: '/projects/pan-do-porrino/bento-5.png',
              alt: 'Detalle de branding Pan do Porriño',
              ratio: 0.4,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-2.png',
              alt: 'Aplicación de marca Pan do Porriño',
              ratio: 0.45,
              objectPosition: 'center bottom',
            },
            {
              src: '/projects/pan-do-porrino/bento-6.png',
              alt: 'Sistema tipográfico Pan do Porriño',
              ratio: 0.55,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-3.png',
              alt: 'Paleta cromática Pan do Porriño',
              ratio: 0.6,
            },
            {
              src: '/projects/pan-do-porrino/bento-7.png',
              alt: 'Material de comunicación Pan do Porriño',
              ratio: 0.4,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-4.png',
              alt: 'Packaging Pan do Porriño',
              ratio: 0.6,
            },
            {
              src: '/projects/pan-do-porrino/bento-8.jpg',
              alt: 'Aplicaciones de marca Pan do Porriño',
              ratio: 0.4,
            },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      title: 'Una identidad corporativa para un pan con siglos de legado',
      subtitle: 'Un sistema visual que une herencia artesanal y lenguaje contemporáneo',
    },

    // 4) Features
    features: [
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/showcase-center-bottom.jpg', alt: 'Logotipo Pan do Porriño' },
        title: 'Branding',
        description: 'Definición de una identidad visual capaz de traducir la tradición del Pan do Porriño a un lenguaje contemporáneo, manteniendo su autenticidad y su vínculo con el territorio.',
      },
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/bento-4.png', alt: 'Editorial Pan do Porriño' },
        title: 'Publicidad & Promoción',
        description: 'Desarrollo de las piezas de comunicación para la II Feira do Pan do Porriño, asegurando coherencia visual entre soportes impresos, promocionales y expositivos.',
      },
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/bento-6.png', alt: 'Packaging Especial Pan do Porriño' },
        title: 'Packaging',
        description: 'Aplicación del sistema de marca a un packaging especial para la Bolla de Pan do Porriño, reforzando reconocimiento, singularidad de producto y valor percibid',
      },
    ],

    // 5) Branding Scroller
    brandingScroller: {
      title: 'BRANDING',
      description: 'Diseño de logotipo y sistema visual inspirado en la Bolla de Pan do Porriño y su carácter artesanal',
      bullets: [
        'La identidad de Pan do Porriño parte de una idea simple: representar de forma directa aquello que hace único al producto. El símbolo sintetiza la silueta de la Bolla de Pan do Porriño, la pieza reconocida y protegida, reduciendo su forma a un gesto visual esencial, claro y memorable.',
        'La tipografía REIS introduce el contrapunto artesanal. Su trazo irregular y sus transparencias evocan la materia, la harina y el carácter manual del proceso panadero, aportando una textura visual que equilibra la síntesis del símbolo.',
        'La paleta cromática se construye alrededor del púrpura, no solo como un recurso diferenciador, sino como una alusión sutil a la noción de valor, prestigio y excepcionalidad. Es un código implícito que ayuda a elevar la percepción de un producto profundamente popular, pero históricamente reconocido por su calidad desde al menos 1600.',
      ],
      background: '#241E33',
      images: [
        { src: '/projects/pan-do-porrino/showcase-center-bottom.jpg', alt: 'Branding Pan do Porriño — logo' },
        { src: '/projects/pan-do-porrino/showcase-left.webp', alt: 'Branding Pan do Porriño — vertical', orientation: 'vertical' },
        { src: '/projects/pan-do-porrino/PandoPorrino_branding_versionsecundaria.jpg', alt: 'Branding Pan do Porriño — version secundaria' },
        { src: '/projects/pan-do-porrino/showcase-center-top.jpg', alt: 'Branding Pan do Porriño — detalle' },
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

    // Publicidad & Design Graphic
    mediaGrid: {
      title: 'Publicidad & Design Graphic',
      subtitle: 'Campaña creativa para la II Feira do Pan do Porriño',
      body: 'Con la identidad ya definida, el siguiente reto fue llevarla al terreno de la comunicación. Para la II Feira do Pan do Porriño desarrollé un conjunto de piezas promocionales y editoriales pensadas para dar visibilidad al evento y consolidar una imagen de marca coherente en todos los puntos de contacto. Desde soportes expositivos hasta piezas impresas y packaging especial, el sistema visual mantiene un mismo tono: artesanal, reconocible y contemporáneo. Más que adaptar un logo, el objetivo fue convertir la identidad en una presencia pública consistente.',
      row1: [
        { src: '/projects/pan-do-porrino/rollup.jpeg', alt: 'Roll-up Pan do Porriño' },
        { src: '/projects/pan-do-porrino/diptico.jpg', alt: 'Díptico II Feira do Pan do Porriño' },
      ],
      row2: [
        { src: '/projects/pan-do-porrino/packaging2.jpg', alt: 'Packaging Bolla de Pan do Porriño' },
        { src: '/projects/pan-do-porrino/pegatinas.jpeg', alt: 'Pegatinas Pan do Porriño' },
        { src: '/projects/pan-do-porrino/diptico1.jpg', alt: 'Interior díptico Pan do Porriño' },
      ],
    },

    // 7) Quote banner
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
      backgroundImage: { type: 'image', src: '/projects/pan-do-porrino/quota-bg.jpg', alt: 'Quote background Pan do Porriño' },
      imagePosition: 'center',
    },

  },

  meta: {
    client: 'Pan do Porriño',
    year: '2017',
    duration: 'Por definir',
    role: ['Brand Designer', 'Art Director'],
    tools: [ 'Illustrator', 'Photoshop'],
    deliverables: ['Identidad visual', 'Sistema de marca', 'Materiales impresos', 'Comunicación exterior', 'Publicidad', 'Packaging'],
  },

  tagline: 'Pan do Porriño, Denominación de Origen.',
  cover: '/projects/pan-do-porrino/portada_pan_do_porrino_2560.jpg',
  featured: false,
  ambientColor: '#2C1A0E',

  status: 'published',
  order: 5,
};
