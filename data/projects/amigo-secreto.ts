import { ProjectWithLayout } from '@/lib/project-layout.types';

export const amigoSecreto: ProjectWithLayout = {
  slug: 'amigo-secreto',
  title: 'Amigo Secreto',
  excerpt: 'Una app que convierte el ritual del amigo invisible en una experiencia digital llena de intención y magia.',

  categories: ['product-design'],
  tags: ['Product Design', 'UX/UI', 'Concept'],

  thumbnail: {
    type: 'image',
    src: '/projects/amigo-secreto/amigosecreto.jpg',
    alt: 'Amigo Secreto — App de intercambio de regalos',
  },

  theme: {
    primary: '#612A74',
    secondary: '#E8A089',
    accent: '#E8A089',
    background: '#1a0a20',
  },

  tagline: 'Dar y recibir es la danza que nos conecta.',
  cover: '/projects/amigo-secreto/amigosecreto.jpg',
  featured: false,
  ambientColor: '#612A74',
  ambientGradient: 'linear-gradient(135deg, #612A74 0%, #E8A089 100%)',

  layout: {
    hero: {
      title: 'Amigo Secreto',
      subtitle: 'Una app que transforma el intercambio de regalos en un ritual con alma.',
      intro: 'Amigo Secreto nació de una pregunta simple: ¿y si el amigo invisible pudiera sentirse tan especial como el regalo que das? Una experiencia digital pensada para conectar personas a través del gesto de regalar con intención.',
      logo: '',
      roles: ['Product Design', 'UX/UI', 'Concept'],
    },
    bento: {
      mode: 'fixed',
      columns: [
        { width: 1, cells: [{ src: '/projects/amigo-secreto/amigosecreto.jpg', alt: 'Amigo Secreto', ratio: 1 }] },
        { width: 1, cells: [{ src: '/projects/amigo-secreto/amigosecreto.jpg', alt: 'Amigo Secreto', ratio: 1 }] },
        { width: 1, cells: [{ src: '/projects/amigo-secreto/amigosecreto.jpg', alt: 'Amigo Secreto', ratio: 1 }] },
        { width: 1, cells: [{ src: '/projects/amigo-secreto/amigosecreto.jpg', alt: 'Amigo Secreto', ratio: 1 }] },
      ],
    },
    quoteBanner: {
      quote: 'Dar y recibir es la danza que nos conecta.',
      backgroundImage: {
        type: 'image',
        src: '/projects/amigo-secreto/amigosecreto.jpg',
        alt: '',
      },
    },
  },

  meta: {
    year: '2024',
    role: ['Product Designer', 'UX/UI Designer'],
    tools: ['Figma'],
  },

  status: 'published',
  order: 4,
};
