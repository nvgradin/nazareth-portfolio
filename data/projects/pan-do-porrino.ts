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
      title: 'Identidad Corporativa para un pan artesanal con legado',
      subtitle: 'Tradición artesanal con diseño contemporáneo',
    },

    // 4) Features
    features: [
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/showcase-center-top.jpg', alt: 'Logotipo Pan do Porriño' },
        title: 'Branding',
        description: 'Logotipo y sistema de marca que transmite autenticidad.',
      },
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/bento-4.png', alt: 'Editorial Pan do Porriño' },
        title: 'Publicidad & Promoción',
        description: 'Creación de Campaña Creativa para la campaña creativa de lanzamiento de la II Feira do Pan do Porriño, diseñando materiales impresos con coherencia de marca: dípticos, invitaciones y señalética.',
      },
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/bento-6.png', alt: 'Packaging Especial Pan do Porriño' },
        title: 'Packaging',
        description: 'Adaptación de la identidad a un packaging especial para la Bolla de Pan do Porriño.',
      },
    ],

    // 5) Branding Scroller
    brandingScroller: {
      title: 'BRANDING',
      description: 'La identidad de Pan do Porriño nace de la iniciativa de dar el reconomiento de la Denominación de origen del Pan do Porriño, una producto artesanal que logró ser Marca Protegida',
      bullets: [
        'Pan do Porriño es un pan artesanal con más de 400 años de historia, conocido por su calidad y sabor único. La marca necesitaba reflejar esta tradición y autenticidad, al mismo tiempo que se adaptaba a las necesidades de comunicación contemporáneas.',
        'Una paleta cromática anclada en el color Púrpura, utilizada desde la antigüedad como un color premium por la escasez de su producción.',
        'La identidad combina el toque artesanal con sus trazos y tipografía, junto al toque de exclusivo con su gama cromática. Un sistema coherente que se adapta desde el packaging hasta la comunicación exterior.',
      ],
      background: '#1A0F07',
      images: [
        { src: '/projects/pan-do-porrino/showcase-center-bottom.jpg', alt: 'Branding Pan do Porriño — vista principal' },
        { src: '/projects/pan-do-porrino/showcase-left.webp', alt: 'Branding Pan do Porriño — vertical', orientation: 'vertical' },
        { src: '/projects/pan-do-porrino/showcase-center-top.jpg', alt: 'Branding Pan do Porriño — detalle' },
                { src: '/projects/pan-do-porrino/showcase-right_horizontal.jpg', alt: 'Branding Pan do Porriño — horizontal' },
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

    // 7) Closing
    closing: {
      title: 'Diseño que sabe a territorio',
      content: 'Pan do Porriño fue un encargo que me permitió trabajar desde lo más esencial del branding: entender qué hace única a una marca antes de dibujar nada. El resultado es una identidad que no solo se ve, sino que se siente — con la calidez del pan recién hecho y la solidez de lo artesanal.',
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
