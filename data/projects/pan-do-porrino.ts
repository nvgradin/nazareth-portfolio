import { ProjectWithLayout } from '@/lib/project-layout.types';

export const panDoPorrino: ProjectWithLayout = {
  slug: 'pan-do-porrino',
  title: 'Pan do Porriño',
  excerpt: 'Identidad visual y comunicación para una marca de panadería artesanal con raíces gallegas.',

  categories: ['branding', 'web-design'],
  tags: ['Branding', 'Identidad Visual', 'Editorial', 'Packaging'],

  thumbnail: {
    type: 'image',
    src: '/projects/pan-do-porrino/portada_pan_do_porrino_2560.jpg',
    alt: 'Pan do Porriño — Identidad visual',
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
      subtitle: 'Identidad con raíces. Diseño con alma.',
      intro: [
        'Ser parte de la creación de la Marca del Pan do Porriño, mi tierra natal, fue todo un honor. Conocido desde hace más de 400 años por su calidad, el Pan de Porriño es un símbolo de nuestra historia, un legado y una comunidad.',
      ],
      logo: '/projects/pan-do-porrino/Logotipo.png',
      roles: ['Branding', 'Identidad Visual', 'Packaging'],
      year: '2023',
    },

    // 2) Bento Gallery
    bento: {
      mode: 'fixed',
      background: '#2C1A0E',
      columns: [
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-1.webp',
              alt: 'Identidad visual Pan do Porriño',
              ratio: 0.55,
            },
            {
              src: '/projects/pan-do-porrino/bento-2.jpg',
              alt: 'Detalle de branding Pan do Porriño',
              ratio: 0.45,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-3.jpg',
              alt: 'Aplicación de marca Pan do Porriño',
              ratio: 0.5,
            },
            {
              src: '/projects/pan-do-porrino/bento-4.jpg',
              alt: 'Sistema tipográfico Pan do Porriño',
              ratio: 0.5,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-5.jpg',
              alt: 'Paleta cromática Pan do Porriño',
              ratio: 0.6,
            },
            {
              src: '/projects/pan-do-porrino/bento-6.jpg',
              alt: 'Material de comunicación Pan do Porriño',
              ratio: 0.4,
            },
          ],
        },
        {
          width: 1,
          cells: [
            {
              src: '/projects/pan-do-porrino/bento-7.jpeg',
              alt: 'Packaging Pan do Porriño',
              ratio: 0.45,
            },
            {
              src: '/projects/pan-do-porrino/bento-8.webp',
              alt: 'Aplicaciones de marca Pan do Porriño',
              ratio: 0.55,
            },
          ],
        },
      ],
    },

    // 3) Heading centrado
    heading: {
      title: 'Una marca con raíces gallegas',
      subtitle: 'Tradición artesanal con diseño contemporáneo',
    },

    // 4) Features
    features: [
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/showcase-center-bottom.jpg', alt: 'Logotipo Pan do Porriño' },
        title: 'Branding',
        description: 'Logotipo y sistema de marca que transmite autenticidad y arraigo al territorio gallego.',
      },
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/bento-8.webp', alt: 'Editorial Pan do Porriño' },
        title: 'Publicidad & Promoción',
        description: 'Materiales impresos diseñados con coherencia de marca: dípticos, invitaciones y señalética.',
      },
      {
        image: { type: 'image', src: '/projects/pan-do-porrino/bento-6.jpg', alt: 'Packaging Especial Pan do Porriño' },
        title: 'Packaging',
        description: 'Adaptación de la identidad a soportes publicitarios exteriores y materiales promocionales.',
      },
    ],

    // 5) Branding Scroller
    brandingScroller: {
      title: 'BRANDING',
      description: 'La identidad de Pan do Porriño nace del territorio. Colores cálidos que evocan la tierra gallega, tipografías con carácter y un sistema visual que respira autenticidad en cada punto de contacto.',
      bullets: [
        'Un logotipo que honra la tradición artesanal con trazo contemporáneo.',
        'Una paleta cromática cálida y orgánica, anclada en la tierra gallega.',
        'Un sistema visual coherente que se adapta desde el packaging hasta la comunicación exterior.',
      ],
      background: '#1A0F07',
      images: [
        { src: '/projects/pan-do-porrino/showcase-center-top.jpg', alt: 'Branding Pan do Porriño — vista principal' },
        { src: '/projects/pan-do-porrino/showcase-right_horizontal.jpg', alt: 'Branding Pan do Porriño — horizontal' },
        { src: '/projects/pan-do-porrino/showcase-left.webp', alt: 'Branding Pan do Porriño — vertical', orientation: 'vertical' },
        { src: '/projects/pan-do-porrino/showcase-center-bottom.jpg', alt: 'Branding Pan do Porriño — detalle' },
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
    year: '2023',
    duration: 'Por definir',
    role: ['Brand Designer', 'Art Director'],
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    deliverables: ['Identidad visual', 'Sistema de marca', 'Materiales impresos', 'Comunicación exterior'],
  },

  tagline: 'Tradición con diseño.',
  cover: '/projects/pan-do-porrino/portada_pan_do_porrino_2560.jpg',
  featured: false,
  ambientColor: '#2C1A0E',

  status: 'published',
  order: 5,
};
