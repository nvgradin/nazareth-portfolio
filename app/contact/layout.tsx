import { Metadata } from 'next';
import { breadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Contacto | Nazareth',
  description: 'Hablemos. Proyectos, consultoría o colaboración — escríbeme y cuéntame en qué puedo ayudarte.',
  openGraph: {
    title: 'Contacto | Nazareth',
    description: 'Hablemos. Proyectos, consultoría o colaboración — escríbeme y cuéntame en qué puedo ayudarte.',
    type: 'website',
    locale: 'es_ES',
  },
};

const BREADCRUMB = breadcrumbSchema([
  { name: 'Inicio', url: 'https://nazarethgradin.com' },
  { name: 'Contacto', url: 'https://nazarethgradin.com/contact' },
]);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      {children}
    </>
  );
}
