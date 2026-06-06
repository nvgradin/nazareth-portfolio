import type { Metadata } from "next";
import { Poppins, Abhaya_Libre, Aboreto } from "next/font/google";
import "./globals.css";
import { Header, HeaderThemeProvider, MobileMenu } from "@/components/layout";
import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import { personSchema, websiteSchema, professionalServiceSchema } from "@/lib/schemas";

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
  title: "Nazareth Gradín | Product & UX Designer en O Porriño · Vigo, Galicia",
  description: "Portfolio de Nazareth Gradín, Product & Experience Designer en O Porriño · Vigo, Galicia. Diseño UX/UI, branding, estrategia digital y desarrollo web para marcas, agencias y proyectos digitales.",
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
    "diseñadora UX Vigo",
    "diseñadora UX Galicia",
    "diseñadora web O Porriño",
    "diseñadora web Pontevedra",
    "diseño producto digital Galicia",
    "freelance UX designer Spain",
  ],
  authors: [{ name: "Nazareth Andrea Vaqueiro Gradín", url: "https://nazarethgradin.com" }],
  openGraph: {
    title: "Nazareth Gradín | Product & UX Designer en O Porriño · Vigo, Galicia",
    description: "Portfolio de Nazareth Gradín, Product & Experience Designer en O Porriño · Vigo, Galicia. Diseño UX/UI, branding y estrategia digital.",
    type: "website",
    locale: "es_ES",
    url: "https://nazarethgradin.com",
    siteName: "Nazareth Vaqueiro Gradín",
    images: [{ url: '/Home preview stack.png', width: 1200, height: 630, alt: 'Nazareth Vaqueiro Gradín — Product & Experience Designer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nazareth Gradín | Product & UX Designer en O Porriño · Vigo, Galicia",
    description: "Portfolio de Nazareth Gradín, Product & Experience Designer en O Porriño · Vigo, Galicia. Diseño UX/UI, branding y estrategia digital.",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema()) }} />
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
