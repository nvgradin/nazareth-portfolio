import { Metadata } from 'next';

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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
