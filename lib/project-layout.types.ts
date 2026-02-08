// ============================================
// PROJECT LAYOUT TYPES
// Tipos específicos para el layout editorial de proyectos
// ============================================

import { Media, ProjectMeta, ProjectTheme, ProjectStatus, ProjectCategory } from './types';

// ============================================
// BENTO GALLERY TYPES
// Sistema basado en SLOTS para modo fixed (8 slots = 4x2)
// ============================================

/**
 * Modo de Bento Gallery
 * - fixed: 4 columnas x 2 filas con 8 slots obligatorios
 * - free: grid libre estilo Framer con filas automáticas
 */
export type BentoMode = 'fixed' | 'free';

/**
 * Estrategia de fallback cuando faltan slots
 * - repeatLast: repite la última imagen proporcionada
 * - placeholder: usa una imagen placeholder definida
 */
export type BentoFallback = 'repeatLast' | 'placeholder';

/**
 * Slot tipo imagen simple
 */
export interface BentoSlotImage {
  type: 'image';
  src: string;
  alt: string;
  colSpan?: 1 | 2;    // Columnas que ocupa (default: 1, max: 2 en fixed)
  rowSpan?: 1 | 2;    // Filas que ocupa (default: 1, max: 2 en fixed)
}

/**
 * Slot del Bento (imagen simple)
 */
export type BentoSlot = BentoSlotImage;

/**
 * Celda dentro de una columna del bento
 * - ratio: porcentaje de altura (0.0-1.0), ej: 0.65 = 65%
 */
export interface BentoCell {
  src: string;
  alt: string;
  ratio: number;  // 0.65 = 65% de la altura de la columna
}

/**
 * Columna del bento (contiene 1 o más celdas apiladas verticalmente)
 * - width: número de columnas que ocupa (1-4)
 * - cells: array de celdas con sus ratios (deben sumar 1.0)
 */
export interface BentoColumn {
  width: 1 | 2 | 3 | 4;  // Columnas del grid que ocupa
  cells: BentoCell[];     // Celdas apiladas verticalmente
}

/**
 * Item para modo FREE (Framer-like)
 */
export interface BentoFreeItem {
  src: string;
  alt: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
}

/**
 * Configuración del Bento Gallery
 *
 * MODO FIXED (columnas):
 * - Define columnas con anchos (1-4) que suman 4
 * - Cada columna tiene celdas con ratios de altura
 * - Total flexibilidad en la distribución
 *
 * MODO FREE:
 * - Grid automático estilo Framer
 * - Items con colSpan (1-4) y rowSpan (1-3)
 */
export interface BentoGallery {
  mode: BentoMode;
  background?: string;        // Color hex o CSS var

  // Para modo FIXED (columnas con ratios)
  columns?: BentoColumn[];    // Array de columnas (anchos deben sumar 4)

  // Para modo FREE (Framer-like)
  items?: BentoFreeItem[];
}

/**
 * Hero de 2 columnas (40/60)
 * Izquierda: logo, link proyectos, nombre proyecto, roles
 * Derecha: subtítulo (h2) + intro
 */
export interface ProjectHero {
  title: string;
  subtitle?: string;
  intro: string | string[];  // Un párrafo o varios
  logo: string;              // ruta al logotipo, ej: '/projects/trainfy/Logotipo.png'
  roles: string[];           // categorías tipo 'BACKEND DEV', 'UI/UX DESIGN', etc.
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
 * Contenido editorial: párrafo simple o párrafo + bullets
 */
export type EditorialContent = string | {
  text: string;
  bullets: string[];
};

/**
 * Sección Editorial base
 * Layout 2 columnas: izquierda título, derecha subtítulo + descripción
 * Se compone con children (ParallaxImage, ShowcaseTriptych, WebPanel, etc.)
 */
export interface EditorialSection {
  title: string;              // font-accent, 28px (columna izquierda)
  subtitle: string;           // font-heading, 22px (columna derecha)
  content: EditorialContent;  // párrafo o párrafo + bullets
}

/**
 * Bloque Editorial con imagen parallax (Arquitectura de Información)
 */
export interface EditorialBlock extends EditorialSection {
  image?: Media;       // imagen full-width con parallax (opcional)
}

/**
 * Bloque Editorial para Branding
 */
export interface BrandingEditorial extends EditorialSection {}

/**
 * Imagen del scroller de branding
 */
export interface BrandingScrollerImage {
  src: string;
  alt?: string;
}

/**
 * Branding scroller section: layout 30/70 con scroller horizontal
 */
export interface BrandingScroller {
  title: string;
  description: string;
  bullets?: string[];
  background: string;
  images: BrandingScrollerImage[];
}

/**
 * Bloque Editorial para Web
 */
export interface WebEditorial extends EditorialSection {}

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
 * Columna del bloque de aprendizaje
 */
export interface LearningColumn {
  subtitle: string;
  text: string;
}

/**
 * Bloque de aprendizaje con titular, texto y 3 columnas
 */
export interface LearningBlock {
  title: string;
  intro: string;
  columns: LearningColumn[];
}

/**
 * Posición vertical de imagen
 */
export type ImagePosition = 'top' | 'center' | 'bottom';

/**
 * Quote banner full-bleed
 */
export interface QuoteBanner {
  quote: string;
  author?: string;
  role?: string;
  backgroundImage: Media;
  imagePosition?: ImagePosition;  // Default: 'center'
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

  // Secciones editoriales composables
  editorial?: EditorialBlock;         // Arquitectura de Información + ParallaxImage
  branding?: BrandingEditorial;       // Branding + ShowcaseTriptych
  brandingScroller?: BrandingScroller; // Branding con scroller horizontal
  web?: WebEditorial;                 // Web + WebPanel

  // Componentes visuales (usados como children de los EditorialBlocks)
  showcase?: ShowcaseTriptych;
  webPanel?: WebPanel;

  // Bloque de aprendizaje
  learning?: LearningBlock;

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
