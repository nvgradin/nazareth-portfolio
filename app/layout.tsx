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
  title: "Nazareth | Product & Experience Designer",
  description: "Digital Product & Experience Designer. UX/UI, estrategia y visión de negocio. Conectando marca, producto y negocio en proyectos digitales.",
  keywords: ["Product Designer", "UX Designer", "UI Designer", "Digital Experience", "Estrategia Digital"],
  authors: [{ name: "Nazareth" }],
  openGraph: {
    title: "Nazareth | Product & Experience Designer",
    description: "Digital Product & Experience Designer. UX/UI, estrategia y visión de negocio.",
    type: "website",
    locale: "es_ES",
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
        {/* Favicon claro (sin fondo, oscuro) */}
        <link rel="icon" href="/brand/favicon.png" media="(prefers-color-scheme: light)" />
        {/* Favicon oscuro (fondo morado, icono crema) */}
        <link rel="icon" href="/brand/favicon_ng.png" media="(prefers-color-scheme: dark)" />
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
