// ============================================
// PROJECT LAYOUT TYPES
// Tipos específicos para el layout editorial de proyectos
// ============================================

import { Media, ProjectMeta, ProjectTheme, ProjectStatus, ProjectCategory } from './types';

/**
 * Variantes de layout para Bento Gallery
 * A, B, C - misma rejilla 4x2, diferentes spans/stacks
 */
export type BentoVariant = 'A' | 'B' | 'C';

/**
 * Hero de 2 columnas
 */
export interface ProjectHero {
  title: string;
  subtitle?: string;
  intro: string;
  meta: ProjectMeta;
}

/**
 * Bento Gallery - grid 4x2
 */
export interface BentoGallery {
  images: Media[];
  variant: BentoVariant;
  backgroundColor?: string;
}

/**
 * Heading centrado
 */
export interface CenteredHeading {
  title: string;
  subtitle?: string;
}

/**
 * Card con imagen y texto
 */
export interface FeatureCard {
  image: Media;
  title: string;
  description: string;
}

/**
 * Bloque editorial (label + texto + imagen full)
 */
export interface EditorialBlock {
  label: string;
  title: string;
  content: string;
  image: Media;
}

/**
 * Showcase triptych - 3 columnas, centro con 2 imágenes
 */
export interface ShowcaseTriptych {
  left: Media;
  centerTop: Media;
  centerBottom: Media;
  right: Media;
}

/**
 * Color de paleta
 */
export interface BrandColor {
  name: string;
  hex: string;
}

/**
 * Tipografía de branding
 */
export interface BrandTypography {
  name: string;
  family: string;
  weights?: string[];
  sample?: string;
}

/**
 * Panel de branding oscuro
 */
export interface BrandingPanel {
  typography: BrandTypography[];
  colors: BrandColor[];
  mockup?: Media;
  backgroundColor?: string;
}

/**
 * Panel web con mockups
 */
export interface WebPanel {
  title: string;
  description: string;
  bullets?: string[];
  mockups: Media[];
}

/**
 * Paso del proceso
 */
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

/**
 * Quote banner full-bleed
 */
export interface QuoteBanner {
  quote: string;
  author?: string;
  role?: string;
  backgroundImage: Media;
}

/**
 * Texto de cierre
 */
export interface ClosingText {
  title?: string;
  content: string;
}

/**
 * Layout completo del proyecto (estructura editorial)
 */
export interface ProjectLayout {
  hero: ProjectHero;
  bento: BentoGallery;
  heading?: CenteredHeading;
  features?: FeatureCard[];
  editorial?: EditorialBlock;
  showcase?: ShowcaseTriptych;
  branding?: BrandingPanel;
  webPanel?: WebPanel;
  process?: ProcessStep[];
  quoteBanner?: QuoteBanner;
  closing?: ClosingText;
}

/**
 * Proyecto con layout editorial
 */
export interface ProjectWithLayout {
  // Identificación
  slug: string;
  title: string;

  // Descripción
  excerpt: string;

  // Categorización
  category: ProjectCategory;
  tags: string[];

  // Visual
  thumbnail: Media;
  theme?: ProjectTheme;

  // Layout editorial
  layout: ProjectLayout;

  // Metadatos
  meta: ProjectMeta;

  // Estado
  status: ProjectStatus;
  order?: number;

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}
