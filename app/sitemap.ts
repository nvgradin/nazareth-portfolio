import { MetadataRoute } from 'next';
import { getPublishedProjects } from '@/data/projects';

const BASE = 'https://nazarethgradin.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getPublishedProjects().map(p => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: BASE,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/projects`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`,        lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/contact`,      lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
    ...projects,
  ];
}
