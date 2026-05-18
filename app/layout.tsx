import type { Metadata } from "next";
import { Poppins, Abhaya_Libre, Aboreto } from "next/font/google";
import "./globals.css";
import { Header, HeaderThemeProvider, MobileMenu } from "@/components/layout";
import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";

/* ═══════════════════════════════════════════════════════════════
   FONT CONFIGURATION
   ═══════════════════════════════════════════════════════════════

   Poppins     → Base (body, UI, navigation)
   Abhaya Libre → Editorial headings (h2, h3, h4)
   Aboreto     → Accent/Display (h1, h5, h6, eyebrows)

   ═══════════════════════════════════════════════════════════════ */

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nazarethgradin.com'),
  title: "Nazareth Vaqueiro Gradín | Product & Experience Designer",
  description: "Portfolio de Nazareth Andrea Vaqueiro Gradín, Product & Experience Designer. UX/UI, estrategia y visión de negocio. Conectando marca, producto y negocio en proyectos digitales.",
  keywords: [
    "Nazareth Vaqueiro Gradín",
    "Nazareth Andrea Vaqueiro Gradín",
    "Nazareth Gradín",
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Experience Designer",
    "Diseñadora de producto",
    "Estrategia Digital",
  ],
  authors: [{ name: "Nazareth Andrea Vaqueiro Gradín", url: "https://nazarethgradin.com" }],
  openGraph: {
    title: "Nazareth Vaqueiro Gradín | Product & Experience Designer",
    description: "Portfolio de Nazareth Andrea Vaqueiro Gradín, Product & Experience Designer. UX/UI, estrategia y visión de negocio.",
    type: "website",
    locale: "es_ES",
    url: "https://nazarethgradin.com",
    siteName: "Nazareth Vaqueiro Gradín",
    images: [{ url: '/Home preview stack.png', width: 1200, height: 630, alt: 'Nazareth Vaqueiro Gradín — Product & Experience Designer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nazareth Vaqueiro Gradín | Product & Experience Designer",
    description: "Portfolio de Nazareth Andrea Vaqueiro Gradín, Product & Experience Designer. UX/UI, estrategia y visión de negocio.",
    images: ['/Home preview stack.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/brand/favicon.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/brand/favicon_ng.png" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Nazareth Andrea Vaqueiro Gradín",
            "alternateName": ["Nazareth Vaqueiro Gradín", "Nazareth Gradín"],
            "url": "https://nazarethgradin.com",
            "email": "hola@nazarethgradin.com",
            "jobTitle": "Product & Experience Designer",
            "description": "Product & Experience Designer especializada en UX/UI, estrategia digital y visión de negocio.",
            "sameAs": [
              "https://www.linkedin.com/in/nazareth-andrea-vaqueiro-gradin",
              "https://www.instagram.com/nazarethgradin/"
            ],
          })}}
        />
      </head>
      <body
        className={`${poppins.variable} ${abhayaLibre.variable} ${aboreto.variable}`}
      >
        <HeaderThemeProvider>
          <MobileMenuProvider>
            <Header />
            <MobileMenu />
            {children}
          </MobileMenuProvider>
        </HeaderThemeProvider>
      </body>
    </html>
  );
}
