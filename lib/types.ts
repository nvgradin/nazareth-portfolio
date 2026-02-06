// ============================================
// PROJECT TYPES
// Sistema de tipos para proyectos del portfolio
// ============================================

/**
 * Tipos de media soportados
 */
export type MediaType = 'image' | 'video' | 'embed';

/**
 * Media individual (imagen, video, embed)
 */
export interface Media {
  type: MediaType;
  src: string;
  alt?: string;
  caption?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4' | '9:16' | 'auto';
}

/**
 * Tipos de secciones disponibles para proyectos
 * Cada tipo renderiza un layout/componente diferente
 */
export type SectionType =
  | 'hero'           // Cabecera principal del proyecto
  | 'text'           // Bloque de texto (intro, contexto, etc.)
  | 'gallery'        // Galería de imágenes
  | 'image-text'     // Imagen + texto lado a lado
  | 'video'          // Video embed o local
  | 'before-after'   // Comparativa antes/después
  | 'branding'       // Showcase de branding (colores, tipografía, logos)
  | 'metrics'        // Resultados y métricas
  | 'quote'          // Cita destacada
  | 'callout'        // Bloque destacado
  | 'pillars'        // Grid de pilares del proyecto (UX, Branding, Web, etc.)
  | 'fullwidth-image'// Imagen a ancho completo
  | 'custom';        // Componente personalizado

/**
 * Tema/estilo de una sección individual (override del tema del proyecto)
 */
export type SectionBackground = 'default' | 'light' | 'dark' | 'accent' | 'project';

export interface SectionTheme {
  background?: SectionBackground;
  customBg?: string;      // Color custom si background = 'project'
  textColor?: string;     // Override del color de texto
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Sección base - todos los tipos extienden de esto
 */
export interface SectionBase {
  id: string;
  type: SectionType;
  title?: string;
  subtitle?: string;
  theme?: SectionTheme;  // Override de estilos para esta sección
}

/**
 * Sección Hero
 */
export interface HeroSection extends SectionBase {
  type: 'hero';
  headline: string;
  subheadline?: string;
  media?: Media;
  tags?: string[];
}

/**
 * Sección de texto
 */
export interface TextSection extends SectionBase {
  type: 'text';
  content: string; // Puede ser markdown
  layout?: 'full' | 'centered' | 'narrow';
}

/**
 * Sección de galería
 */
export interface GallerySection extends SectionBase {
  type: 'gallery';
  items: Media[];
  layout?: 'grid' | 'masonry' | 'carousel' | 'fullwidth';
  columns?: 2 | 3 | 4;
}

/**
 * Sección imagen + texto
 */
export interface ImageTextSection extends SectionBase {
  type: 'image-text';
  media: Media;
  content: string;
  imagePosition?: 'left' | 'right';
}

/**
 * Sección de video
 */
export interface VideoSection extends SectionBase {
  type: 'video';
  media: Media;
  autoplay?: boolean;
  loop?: boolean;
}

/**
 * Sección before/after
 */
export interface BeforeAfterSection extends SectionBase {
  type: 'before-after';
  before: Media;
  after: Media;
}

/**
 * Elemento de branding (color, tipografía, etc.)
 */
export interface BrandingElement {
  type: 'color' | 'typography' | 'logo' | 'pattern';
  label: string;
  value: string; // hex para color, font-family para tipo, src para logo
  description?: string;
}

/**
 * Sección de branding
 */
export interface BrandingSection extends SectionBase {
  type: 'branding';
  elements: BrandingElement[];
  layout?: 'grid' | 'showcase';
}

/**
 * Métrica individual
 */
export interface Metric {
  value: string;
  label: string;
  description?: string;
}

/**
 * Sección de métricas/resultados
 */
export interface MetricsSection extends SectionBase {
  type: 'metrics';
  metrics: Metric[];
}

/**
 * Sección de cita
 */
export interface QuoteSection extends SectionBase {
  type: 'quote';
  quote: string;
  author?: string;
  role?: string;
}

/**
 * Sección callout/destacado
 */
export interface CalloutSection extends SectionBase {
  type: 'callout';
  content: string;
  variant?: 'info' | 'insight' | 'highlight';
}

/**
 * Sección custom
 */
export interface CustomSection extends SectionBase {
  type: 'custom';
  component: string; // Nombre del componente a renderizar
  props?: Record<string, unknown>;
}

/**
 * Pilar individual (UX, Branding, Web, etc.)
 */
export interface Pillar {
  title: string;
  description: string;
  icon?: string;        // Nombre del icono o emoji
  items?: string[];     // Lista de sub-items opcionales
}

/**
 * Sección de pilares del proyecto
 */
export interface PillarsSection extends SectionBase {
  type: 'pillars';
  pillars: Pillar[];
  columns?: 2 | 3 | 4;
}

/**
 * Sección de imagen a ancho completo
 */
export interface FullwidthImageSection extends SectionBase {
  type: 'fullwidth-image';
  media: Media;
  height?: 'auto' | 'screen' | 'half';
  overlay?: boolean;
}

/**
 * Unión de todos los tipos de sección
 */
export type Section =
  | HeroSection
  | TextSection
  | GallerySection
  | ImageTextSection
  | VideoSection
  | BeforeAfterSection
  | BrandingSection
  | MetricsSection
  | QuoteSection
  | CalloutSection
  | PillarsSection
  | FullwidthImageSection
  | CustomSection;

/**
 * Categorías de proyecto
 */
export type ProjectCategory =
  | 'product-design'
  | 'ux-ui'
  | 'branding'
  | 'web-design'
  | 'digital-experience'
  | 'strategy'
  | 'personal';

/**
 * Estado del proyecto
 */
export type ProjectStatus = 'published' | 'draft' | 'archived';

/**
 * Tema/paleta personalizada del proyecto
 */
export interface ProjectTheme {
  primary?: string;
  secondary?: string;
  accent?: string;
  background?: string;
  text?: string;
}

/**
 * Metadatos del proyecto
 */
export interface ProjectMeta {
  client?: string;
  year?: string;
  duration?: string;
  role?: string[];
  team?: string[];
  tools?: string[];
  deliverables?: string[];
  liveUrl?: string;
}

/**
 * Proyecto completo
 */
export interface Project {
  // Identificación
  slug: string;
  title: string;

  // Descripción
  excerpt: string;         // Resumen corto para cards
  description?: string;    // Descripción más larga

  // Categorización
  category: ProjectCategory;
  tags: string[];

  // Visual
  thumbnail: Media;
  heroImages?: Media[];    // Imágenes para la galería del hero
  featured?: boolean;
  theme?: ProjectTheme;

  // Contenido
  sections: Section[];

  // Metadatos
  meta: ProjectMeta;

  // Estado
  status: ProjectStatus;
  order?: number;         // Para ordenar manualmente

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}

/**
 * Proyecto para listados (versión ligera)
 */
export type ProjectPreview = Pick<
  Project,
  'slug' | 'title' | 'excerpt' | 'category' | 'tags' | 'thumbnail' | 'featured' | 'meta'
>;
