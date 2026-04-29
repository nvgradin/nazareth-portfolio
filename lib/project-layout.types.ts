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
  objectPosition?: string; // e.g. 'bottom', 'right center', '80% 50%'
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
  result?: string;           // Resultado destacado, aparece bajo la intro con →
  logo: string;              // ruta al logotipo, ej: '/projects/trainfy/Logotipo.png'
  roles: string[];           // categorías tipo 'BACKEND DEV', 'UI/UX DESIGN', etc.
  context?: string;          // texto libre bajo roles, ej: 'Proyecto final Bootcamp'
  team?: string;             // equipo o colaboración, ej: 'Equipo de 3'
  year?: string;             // ej: '2023' o '2022–2024'
}

/**
 * Heading centrado
 */
export interface CenteredHeading {
  label?: string;            // etiqueta tipo CONTEXTO, Aboreto, encima del título
  title: string;
  subtitle?: string | string[];  // un párrafo o varios
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
  orientation?: 'vertical';
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
 * Paso del proceso (legacy ProcessSteps)
 */
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

/**
 * Paso del StaggeredProcess — descripción puede ser 1 o 2 párrafos
 */
export interface StaggeredProcessStep {
  number: number;
  title: string;
  description: string | string[];
}

/**
 * StaggeredProcess — 3 columnas en escalera con animación parallax
 */
export interface StaggeredProcessData {
  label?: string;
  steps: [StaggeredProcessStep, StaggeredProcessStep, StaggeredProcessStep];
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
  quote: string | string[];
  author?: string | string[];
  role?: string;
  backgroundImage: Media;
  imagePosition?: ImagePosition;  // Default: 'center'
}

/**
 * Texto de cierre
 */
export interface ClosingText {
  title?: string;
  content: string | string[]; // string único o array de párrafos
  background?: string;        // color de fondo opcional
}

/**
 * Image Compare (before/after slider)
 */
export interface ImageCompareData {
  before: Media;
  after: Media;
  initial?: number;
  labels?: { before?: string; after?: string };
  background?: string;
}

/**
 * ArchitectureWebFlow — sección editorial unificada (Arquitectura + Web)
 */
export interface ArchitectureWebFlowModule {
  layout: 'text-image' | 'image-text' | 'full-image';
  title?: string;
  content?: string;
  bullets?: string[];
  image: Media;
}

export interface ArchitectureWebFlow {
  sectionTitle: string;
  intro: string;
  background: string;
  modules: ArchitectureWebFlowModule[];
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
  architectureWebFlow?: ArchitectureWebFlow; // Arquitectura + Web unificado

  // Componentes visuales (usados como children de los EditorialBlocks)
  showcase?: ShowcaseTriptych;
  webPanel?: WebPanel;

  // Bloque de aprendizaje
  learning?: LearningBlock;

  // Comparación antes/después
  imageCompare?: ImageCompareData;

  // Imagen destacada a ancho completo con fondo de color
  heroImage?: { src: string; alt: string; background: string; borderRadius?: number; caption?: string };

  // Parallax image intermedia (entre features y mediaGrid)
  introParallax?: { src: string; alt: string };

  // Sección audiovisual: editorial + vídeo centrado con play overlay
  videoSection?: {
    editorial: { title: string; subtitle: string; content: string };
    src: string;
    poster?: string;
    background?: string;
  };

  // Funnel flow — 3 pasos con imagen vertical, conector → y texto
  funnelFlow?: FunnelFlow;

  // Editorial previo al reelsDeck (título izq + texto der, fondo crema)
  reelsEditorial?: {
    title: string;
    subtitle: string;
    content: string;
  };

  // Reels deck (InfiniteVideoDeck)
  reelsDeck?: ReelsDeck;

  // Galería editorial full-bleed (2col + 3col) con header 2 columnas
  mediaGrid?: MediaGrid;

  process?: ProcessStep[];
  staggeredProcess?: StaggeredProcessData;
  clientLogos?: { src: string; alt: string; staticOnDesktop?: boolean }[];
  clientLogosStatic?: boolean;
  quoteBanner?: QuoteBanner;
  closing?: ClosingText;
}

export interface ReelsDeckItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  poster?: string;
  title?: string;
}

export interface ReelsDeck {
  items: ReelsDeckItem[];
  background?: string;
  title?: string;
}

export interface MediaGridImage {
  src: string;
  alt: string;
}

export interface MediaGrid {
  title: string;       // Columna izquierda del header (uppercase, font-accent)
  subtitle: string;    // Columna derecha, título grande
  body: string;        // Columna derecha, párrafo
  row1: [MediaGridImage, MediaGridImage];          // 2 columnas
  row2: [MediaGridImage, MediaGridImage, MediaGridImage]; // 3 columnas
  background?: string; // Fondo de la sección (default: transparent)
}

/**
 * Funnel Flow — 3 pasos con imagen vertical, título, descripción y conectores →
 */
export interface FunnelFlowStep {
  image: string;
  imageAlt: string;
  step: number;
  title: string;
  description: string;
}

export interface FunnelFlow {
  editorial: {
    title: string;
    subtitle: string;
    content: string;
  };
  steps: [FunnelFlowStep, FunnelFlowStep, FunnelFlowStep];
  background?: string;
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
  categories: ProjectCategory[];
  tags: string[];

  // Visual
  thumbnail: Media;
  cover?: string;           // Imagen específica para la card del grid (ruta)
  tagline?: string;         // Frase corta para la card del grid
  featured?: boolean;
  ambientColor?: string;    // Color de fondo hover en la card del grid
  ambientGradient?: string; // Gradiente opcional (sobreescribe ambientColor)
  theme?: ProjectTheme;

  // Layout editorial
  layout: ProjectLayout;

  // Metadatos
  meta: ProjectMeta;

  // Estado
  status: ProjectStatus;
  order?: number;

  // Siguiente stack manual (3 slugs: [next, next+1, next+2])
  nextStack?: [string, string, string];

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}
