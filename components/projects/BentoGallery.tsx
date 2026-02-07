import Image from 'next/image';
import {
  BentoGallery as BentoGalleryType,
  BentoColumn,
  BentoCell,
  BentoFreeItem,
} from '@/lib/project-layout.types';
import styles from './BentoGallery.module.css';

// ============================================
// CONSTANTES
// ============================================

const GAP = 24; // px - debe coincidir con --space-24

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

interface Props {
  data: BentoGalleryType;
}

/**
 * BentoGallery - Sistema de galería basado en columnas
 *
 * MODO FIXED:
 * - Define columnas con anchos (1-4) que suman 4
 * - Cada columna tiene celdas con ratios de altura personalizados
 * - Ejemplo: columna 1 con 2 celdas (65%/35%), columna 2 con 1 celda (100%)
 *
 * MODO FREE:
 * - Grid automático con filas dinámicas
 */
export function BentoGallery({ data }: Props) {
  const { mode = 'fixed', background } = data;

  return (
    <section
      className={styles.bento}
      style={{ backgroundColor: background || '#1E3A5F' }}
    >
      {mode === 'fixed' ? (
        <>
          <FixedLayout columns={data.columns || []} />
          <MobileList columns={data.columns || []} />
        </>
      ) : (
        <FreeGrid items={data.items || []} />
      )}
    </section>
  );
}

// ============================================
// FIXED LAYOUT (COLUMNAS CON RATIOS)
// ============================================

function FixedLayout({ columns }: { columns: BentoColumn[] }) {
  // Calcular el total de anchos para verificar
  const totalWidth = columns.reduce((sum, col) => sum + col.width, 0);

  return (
    <div className={styles.fixedLayout}>
      {columns.map((column, colIndex) => (
        <Column key={colIndex} column={column} totalWidth={totalWidth} />
      ))}
    </div>
  );
}

function Column({ column, totalWidth }: { column: BentoColumn; totalWidth: number }) {
  // El ancho de la columna como porcentaje
  const widthPercent = (column.width / totalWidth) * 100;
  // Descontar gaps entre columnas
  const totalGaps = (totalWidth - 1) * GAP;
  const gapDeduction = (column.width / totalWidth) * totalGaps;

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${GAP}px`,
    flex: `0 0 calc(${widthPercent}% - ${gapDeduction}px)`,
  };

  return (
    <div style={columnStyle}>
      {column.cells.map((cell, cellIndex) => (
        <Cell
          key={cellIndex}
          cell={cell}
          totalCells={column.cells.length}
        />
      ))}
    </div>
  );
}

function Cell({ cell, totalCells }: { cell: BentoCell; totalCells: number }) {
  // Descontar gaps verticales entre celdas
  const totalGaps = (totalCells - 1) * GAP;
  const gapDeduction = cell.ratio * totalGaps;

  const cellStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    flex: `0 0 calc(${cell.ratio * 100}% - ${gapDeduction}px)`,
  };

  return (
    <div className={styles.cell} style={cellStyle}>
      <Image
        src={cell.src}
        alt={cell.alt}
        fill
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 25vw"
      />
    </div>
  );
}

// ============================================
// MOBILE LIST
// ============================================

function MobileList({ columns }: { columns: BentoColumn[] }) {
  // Aplanar todas las celdas de todas las columnas
  const allCells: BentoCell[] = [];
  for (const column of columns) {
    for (const cell of column.cells) {
      allCells.push(cell);
    }
  }

  // Mostrar máximo 6 en mobile
  const mobileCells = allCells.slice(0, 6);

  return (
    <div className={styles.mobileList}>
      {mobileCells.map((cell, index) => (
        <div key={index} className={styles.mobileCell}>
          <Image
            src={cell.src}
            alt={cell.alt}
            fill
            className={styles.image}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}

// ============================================
// FREE GRID
// ============================================

function FreeGrid({ items }: { items: BentoFreeItem[] }) {
  return (
    <div className={styles.freeGrid}>
      {items.map((item, index) => {
        const colSpan = item.colSpan || 1;
        const rowSpan = item.rowSpan || 1;

        const cellStyle: React.CSSProperties = {
          gridColumn: `span ${colSpan}`,
          gridRow: `span ${rowSpan}`,
        };

        return (
          <div key={index} className={styles.freeCell} style={cellStyle}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className={styles.image}
              sizes={`${colSpan >= 2 ? '50vw' : '25vw'}`}
            />
          </div>
        );
      })}
    </div>
  );
}
