# Bento Gallery - Guía Interna

> Documentación técnica para el componente BentoGallery del sistema de proyectos.

## Tabla de Contenidos

1. [Conceptos Básicos](#conceptos-básicos)
2. [Comportamiento Responsive](#comportamiento-responsive)
3. [Sistema de Slots](#sistema-de-slots)
4. [Tipos de Slot](#tipos-de-slot)
5. [SEO y Textos Alternativos](#seo-y-textos-alternativos)
6. [Reglas Anti-Huecos](#reglas-anti-huecos)
7. [Configuración por Proyecto](#configuración-por-proyecto)
8. [Ejemplo Completo](#ejemplo-completo)

---

## Conceptos Básicos

El **BentoGallery** es un componente de galería con dos modos:

| Modo | Grid | Descripción |
|------|------|-------------|
| `fixed` | 4x2 (8 slots) | Grid fijo con posiciones calculadas automáticamente |
| `free` | Auto-rows | Grid estilo Framer con `grid-auto-flow: dense` |

### Modo Fixed (Recomendado)

El modo `fixed` usa un sistema de **8 slots obligatorios** que llenan completamente un grid de 4 columnas × 2 filas. Cada slot puede ocupar múltiples celdas usando `colSpan` y `rowSpan`.

### Modo Free

El modo `free` es más flexible pero puede generar layouts inconsistentes. Usar solo para casos especiales.

---

## Comportamiento Responsive

### Desktop (≥768px)
- **Grid**: 4 columnas × 2 filas
- **Slots visibles**: 8 (todos)
- **Altura de fila**: 200px (tablet) / 280px (desktop)
- **Gap**: 24px

### Mobile (<768px)
- **Grid**: 2 columnas × 3 filas
- **Slots visibles**: 6 (slots 7 y 8 se ocultan)
- **Altura de fila**: 180px
- **Gap**: 24px

```
DESKTOP (4x2 = 8 slots)          MOBILE (2x3 = 6 slots)
┌────┬────┬────┬────┐            ┌────┬────┐
│ S1 │ S1 │ S2 │ S3 │            │ S1 │ S1 │
│    │    │    │    │            │    │    │
├────┴────┼────┼────┤            ├────┼────┤
│ S5      │ S6 │ S7 │ S8 │       │ S2 │ S3 │
│         │    │    │    │       │    │    │
└─────────┴────┴────┴────┘       ├────┼────┤
                                  │ S4 │ S5 │
                                  │    │    │
                                  └────┴────┘
                                  (S6, S7, S8 ocultos)
```

> **Importante**: Los slots 7 y 8 NO se muestran en móvil. Coloca el contenido más importante en los slots 1-6.

---

## Sistema de Slots

Un **slot** es una unidad de contenido en el bento. En modo `fixed`, siempre hay exactamente 8 slots.

### Propiedades Comunes

```typescript
interface SlotBase {
  type: 'image' | 'stack';
  colSpan?: 1 | 2;    // Columnas que ocupa (default: 1)
  rowSpan?: 1 | 2;    // Filas que ocupa (default: 1)
}
```

### Cálculo de Posiciones

El componente calcula automáticamente las posiciones de cada slot para evitar huecos:

1. Recorre el grid fila por fila, columna por columna
2. Para cada slot, verifica si cabe en la posición actual
3. Si cabe, marca las celdas como ocupadas
4. Si no cabe, busca la siguiente posición disponible

---

## Tipos de Slot

### 1. Slot Tipo `image`

Imagen simple con next/image fill + object-cover.

```typescript
{
  type: 'image',
  src: '/projects/mi-proyecto/imagen.jpg',
  alt: 'Descripción detallada para SEO',
  colSpan: 1,  // opcional
  rowSpan: 1,  // opcional
}
```

### 2. Slot Tipo `stack`

Dos imágenes apiladas verticalmente con proporción configurable.

```typescript
{
  type: 'stack',
  top: { src: '/path/top.jpg', alt: 'Descripción imagen superior' },
  bottom: { src: '/path/bottom.jpg', alt: 'Descripción imagen inferior' },
  split: 0.65,  // top ocupa 65%, bottom ocupa 35%
  colSpan: 1,   // opcional
  rowSpan: 1,   // opcional
}
```

#### Valores de Split

| Split | Top | Bottom | Uso recomendado |
|-------|-----|--------|-----------------|
| 0.5 | 50% | 50% | Imágenes de igual importancia |
| 0.65 | 65% | 35% | Imagen principal arriba |
| 0.35 | 35% | 65% | Imagen principal abajo |
| 0.7 | 70% | 30% | Destacar mucho la imagen superior |

---

## SEO y Textos Alternativos

### Buenas Prácticas para `alt`

El texto alternativo es **crítico para SEO**. No uses nombres genéricos como "bento-1" o "imagen".

#### Estructura recomendada:
```
[Qué se ve] + [Contexto del proyecto] + [Detalle específico]
```

#### Ejemplos:

| ❌ Malo | ✅ Bueno |
|---------|----------|
| `bento-1.jpg` | `Pantalla principal de Trainfy mostrando el feed de intercambios deportivos` |
| `Trainfy App` | `Interfaz de búsqueda de compañeros de entrenamiento en la app Trainfy` |
| `Mockup` | `Mockup de iPhone mostrando la aplicación Trainfy en contexto real` |
| `Dashboard` | `Panel de estadísticas y métricas de actividad del usuario en Trainfy` |

#### Checklist para textos alt:

- [ ] Describe lo que se ve en la imagen, no el nombre del archivo
- [ ] Incluye el nombre del proyecto para contexto
- [ ] Menciona elementos específicos (botones, pantallas, dispositivos)
- [ ] Usa entre 10-15 palabras (máximo 125 caracteres)
- [ ] No empieces con "Imagen de..." o "Foto de..."
- [ ] Evita keywords stuffing

---

## Reglas Anti-Huecos

El sistema garantiza que **nunca queden huecos** en el grid:

### 1. Fallback Strategy

Si se proporcionan menos de 8 slots, el sistema usa una estrategia de fallback:

```typescript
{
  fallback: 'repeatLast',  // Repite el último slot proporcionado
  // o
  fallback: 'placeholder', // Usa imagen placeholder
  placeholder: '/images/placeholder.jpg',
}
```

### 2. Validación de ColSpan/RowSpan

- `colSpan` máximo: 2 (para evitar slots que ocupen toda la fila)
- `rowSpan` máximo: 2 (para evitar slots que ocupen toda la altura)
- Si un slot no cabe en la posición actual, se mueve a la siguiente disponible

### 3. Procesamiento Automático

```typescript
// El componente siempre procesa exactamente 8 slots
const slots = processSlots(data); // Garantiza array de 8 elementos
```

---

## Configuración por Proyecto

### Estructura del Bento en el Layout

```typescript
// En data/projects/mi-proyecto.ts
layout: {
  bento: {
    mode: 'fixed',
    background: '#354251',        // Color hex o CSS var
    fallback: 'repeatLast',       // Estrategia de fallback
    slots: [
      // Array de 8 slots...
    ],
  },
}
```

### Propiedades del Bento

| Propiedad | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `mode` | `'fixed' \| 'free'` | `'fixed'` | Modo del grid |
| `background` | `string` | `'#1E3A5F'` | Color de fondo (hex o CSS var) |
| `slots` | `BentoSlot[]` | `[]` | Array de slots (modo fixed) |
| `fallback` | `'repeatLast' \| 'placeholder'` | `'repeatLast'` | Estrategia si faltan slots |
| `placeholder` | `string` | `/images/placeholder.jpg` | URL placeholder |
| `items` | `BentoFreeItem[]` | `[]` | Array de items (modo free) |

---

## Ejemplo Completo

### Bento con 8 Slots y Alt Texts SEO-Friendly

```typescript
bento: {
  mode: 'fixed',
  background: '#354251',
  fallback: 'repeatLast',
  slots: [
    // Slot 1: Imagen hero 2x2 (VISIBLE en mobile)
    {
      type: 'image',
      src: '/projects/trainfy/bento-1.jpg',
      alt: 'Pantalla principal de Trainfy mostrando el feed de intercambios deportivos entre usuarios',
      colSpan: 2,
      rowSpan: 2,
    },
    // Slot 2: Stack (VISIBLE en mobile)
    {
      type: 'stack',
      top: {
        src: '/projects/trainfy/bento-2.png',
        alt: 'Interfaz de búsqueda de compañeros de entrenamiento en Trainfy',
      },
      bottom: {
        src: '/projects/trainfy/bento-3.jpg',
        alt: 'Sistema de identidad visual y logotipo de Trainfy sobre fondo azul',
      },
      split: 0.65,
    },
    // Slots 3-6: VISIBLES en mobile
    {
      type: 'image',
      src: '/projects/trainfy/bento-4.png',
      alt: 'Mockup de iPhone mostrando la aplicación Trainfy en contexto real',
    },
    {
      type: 'image',
      src: '/projects/trainfy/bento-5.jpg',
      alt: 'Diseño responsive de Trainfy adaptado a pantalla móvil',
    },
    {
      type: 'image',
      src: '/projects/trainfy/bento-6.jpg',
      alt: 'Panel de estadísticas y métricas de actividad del usuario',
    },
    {
      type: 'image',
      src: '/projects/trainfy/bento-7.jpg',
      alt: 'Pantalla de perfil de atleta con historial de intercambios',
    },
    // Slots 7-8: OCULTOS en mobile
    {
      type: 'image',
      src: '/projects/trainfy/bento-8.jpg',
      alt: 'Selector de categorías deportivas: running, ciclismo, natación',
    },
    {
      type: 'stack',
      top: {
        src: '/projects/trainfy/detail-1.jpg',
        alt: 'Detalle del sistema de cards para mostrar equipamiento',
      },
      bottom: {
        src: '/projects/trainfy/detail-2.jpg',
        alt: 'Componentes UI del design system: botones y formularios',
      },
      split: 0.5,
    },
  ],
},
```

### Layout Visual Resultante

```
DESKTOP (todos los slots)
┌─────────────┬─────────────┬──────┬──────┐
│             │             │  S2  │  S3  │
│     S1      │     S1      │ top  │      │
│   (2x2)     │   (2x2)     ├──────┼──────┤
│             │             │  S2  │  S4  │
│             │             │ bot  │      │
├─────────────┼─────────────┼──────┼──────┤
│     S5      │     S6      │  S7  │  S8  │
│             │             │      │ top  │
│             │             │      ├──────┤
│             │             │      │ bot  │
└─────────────┴─────────────┴──────┴──────┘
```

---

## Archivos Relacionados

| Archivo | Descripción |
|---------|-------------|
| `lib/project-layout.types.ts` | Tipos TypeScript para slots |
| `components/projects/BentoGallery.tsx` | Componente React |
| `components/projects/BentoGallery.module.css` | Estilos CSS Module |

---

## Notas Importantes

1. **No se toca globals.css** - Todos los estilos están en el CSS Module
2. **next/image con fill** - Todas las imágenes usan `fill` + `object-fit: cover`
3. **Bordes rectos** - Sin border-radius en las celdas
4. **Gap uniforme** - 24px entre celdas y en el padding del contenedor
5. **Responsive** - 6 slots en mobile, 8 en desktop
6. **Hover effects** - Escala + translateY + shadow en hover
7. **SEO** - Usar textos alt descriptivos, no nombres de archivo

---

*Última actualización: Febrero 2026*
