/**
 * Home stack data model
 */

export interface HomeProject {
  slug: string;
  title: string;
  category: string;
  claim: string;          // Frase corta / slogan del proyecto
  image: string;
  ambientColor: string;
}

export const homeProjects: HomeProject[] = [
  {
    slug: 'trainfy',
    title: 'Trainfy',
    category: 'Product Design · UX/UI · Fullstack',
    claim: 'Conectar. Compartir. Moverse.',
    image: '/projects/trainfy/quote-bg.jpg',
    ambientColor: '#1E3A5F',
  },
  {
    slug: 'las-islas-cies',
    title: 'Las Islas Cíes',
    category: 'Digital Experience',
    claim: 'Donde el océano se convierte en memoria.',
    image: '/projects/las-islas-cies/bento-2.jpg',
    ambientColor: '#252851',
  },
  {
    slug: 'silvia-fernandez-de-luna',
    title: 'Silvia Fernández De Luna',
    category: 'Branding · Marketing · Web',
    claim: 'Una marca que enseña, inspira y transforma.',
    image: '/projects/silvia-fernandez-de-luna/Silvia-Fernandez-De-Luna-Academia.webp',
    ambientColor: '#895900',
  },
  {
    slug: 'amigo-secreto',
    title: 'Amigo Secreto',
    category: 'Próximamente',
    claim: 'Dar y recibir es la danza que nos conecta',
    image: '/projects/amigo-secreto/amigosecreto.jpg',
    ambientColor: '#612A74',
  },
];
