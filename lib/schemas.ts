const BASE_URL = 'https://nazarethgradin.com';

const SAME_AS = [
  'https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin',
  'https://www.instagram.com/nazarethgradin/',
];

const ADDRESS = {
  '@type': 'PostalAddress',
  addressLocality: 'O Porriño',
  addressRegion: 'Pontevedra',
  addressCountry: 'ES',
};

const AREA_SERVED = [
  { '@type': 'City', name: 'O Porriño' },
  { '@type': 'City', name: 'Vigo' },
  { '@type': 'AdministrativeArea', name: 'Galicia' },
  { '@type': 'AdministrativeArea', name: 'Pontevedra' },
  { '@type': 'Country', name: 'España' },
  { '@type': 'Country', name: 'Europe' },
];

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'Nazareth Andrea Vaqueiro Gradín',
    alternateName: ['Nazareth Vaqueiro Gradín', 'Nazareth Gradín'],
    url: BASE_URL,
    email: 'hola@nazarethgradin.com',
    jobTitle: [
      'Product & UX Designer',
      'Digital Strategist',
      'Creative Technologist',
      'Brand Strategist',
      'Marketing Consultant',
      'Web Designer',
      'WordPress Developer',
      'AI Automation Consultant',
    ],
    description:
      'Freelance Product & UX Designer, Digital Strategist and Creative Technologist based in Galicia, Spain. Specialised in UX/UI design, brand strategy, digital strategy, web development and AI-driven workflows.',
    address: ADDRESS,
    sameAs: SAME_AS,
    knowsAbout: [
      'Product Design',
      'UX/UI Design',
      'UX Research',
      'Digital Strategy',
      'Brand Strategy',
      'Marketing Strategy',
      'Content Strategy',
      'SEO Strategy',
      'Copywriting',
      'Web Design',
      'WordPress Development',
      'WooCommerce Development',
      'Next.js Development',
      'AI Workflows',
      'Marketing Automation',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Independent',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Nazareth Gradín',
    description:
      'Portfolio de Nazareth Gradín — Product & UX Designer, Digital Strategist y Creative Technologist en Galicia, España.',
    publisher: { '@id': `${BASE_URL}/#person` },
    inLanguage: ['es', 'en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/projects?filter={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#service`,
    name: 'Nazareth Gradín — Freelance Design & Digital Strategy',
    url: BASE_URL,
    email: 'hola@nazarethgradin.com',
    description:
      'Freelance consulting, product design, UX/UI, brand strategy, marketing, web development and AI automation services.',
    founder: { '@id': `${BASE_URL}/#person` },
    address: ADDRESS,
    areaServed: AREA_SERVED,
    serviceType: [
      'Product Design',
      'UX/UI Design',
      'Digital Strategy',
      'Brand Strategy',
      'Marketing Strategy',
      'Content Strategy',
      'Copywriting',
      'SEO Strategy',
      'Web Design',
      'WordPress Development',
      'WooCommerce Development',
      'Next.js Development',
      'AI Workflows & Automation',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Design & Digital Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product & UX Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy & Identity' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Strategy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing & Content Strategy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WordPress & WooCommerce Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Workflows & Automation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Strategy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copywriting' } },
      ],
    },
    sameAs: SAME_AS,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function creativeWorkSchema(project: {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: { src: string; alt?: string };
  cover?: string;
  categories: string[];
  layout: { hero: { year?: string; location?: string } };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${BASE_URL}/projects/${project.slug}/#project`,
    name: project.title,
    description: project.excerpt,
    url: `${BASE_URL}/projects/${project.slug}`,
    image: project.cover || project.thumbnail.src,
    author: { '@id': `${BASE_URL}/#person` },
    creator: { '@id': `${BASE_URL}/#person` },
    dateCreated: project.layout.hero.year,
    locationCreated: project.layout.hero.location
      ? { '@type': 'Place', name: project.layout.hero.location }
      : undefined,
    genre: project.categories,
    isPartOf: { '@id': `${BASE_URL}/#website` },
  };
}
