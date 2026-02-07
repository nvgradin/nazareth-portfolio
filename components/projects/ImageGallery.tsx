'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './ImageGallery.module.css';

export type AspectMode = '1:1' | '4:3' | '16:9' | '3:2' | '21:9';

interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
  listSize?: number;         // Thumbnail height in px (default: 80)
  listRadius?: number;       // Thumbnail border radius (default: 0)
  gapMain?: number;          // Gap between main image and thumbnails (default: 16)
  gapList?: number;          // Gap between thumbnails (default: 8)
  mainRadius?: number;       // Main image border radius (default: 0)
  aspectMode?: AspectMode;   // Main image aspect ratio (default: '16:9')
  scrollSpeed?: number;      // Drag scroll speed multiplier (default: 1.5)
}

const aspectRatios: Record<AspectMode, string> = {
  '1:1': '1/1',
  '4:3': '4/3',
  '3:2': '3/2',
  '16:9': '16/9',
  '21:9': '21/9',
};

export function ImageGallery({
  images,
  listSize = 80,
  listRadius = 0,
  gapMain = 16,
  gapList = 8,
  mainRadius = 0,
  aspectMode = '16:9',
  scrollSpeed = 1.5,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop drag-to-scroll handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (isMobile || !listRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - listRef.current.offsetLeft;
    scrollLeft.current = listRef.current.scrollLeft;
    listRef.current.style.cursor = 'grabbing';
  }, [isMobile]);

  const handleMouseUp = useCallback(() => {
    if (!listRef.current) return;
    isDragging.current = false;
    listRef.current.style.cursor = 'grab';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || isMobile || !listRef.current) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX.current) * scrollSpeed;
    listRef.current.scrollLeft = scrollLeft.current - walk;
  }, [isMobile, scrollSpeed]);

  const handleMouseLeave = useCallback(() => {
    if (!listRef.current) return;
    isDragging.current = false;
    listRef.current.style.cursor = 'grab';
  }, []);

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
  };

  if (!images || images.length === 0) return null;

  const selectedImage = images[selectedIndex];

  return (
    <div className={styles.gallery}>
      {/* Main Image */}
      <div
        className={styles.mainImageContainer}
        style={{
          aspectRatio: aspectRatios[aspectMode],
          borderRadius: mainRadius,
          marginBottom: gapMain,
        }}
      >
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          className={styles.mainImage}
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
      </div>

      {/* Thumbnail List */}
      {images.length > 1 && (
        <div
          ref={listRef}
          className={`${styles.thumbnailList} ${isMobile ? styles.mobileScroll : styles.desktopScroll}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            gap: gapList,
          }}
        >
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.thumbnailButton} ${index === selectedIndex ? styles.active : ''}`}
              onClick={() => handleThumbnailClick(index)}
              style={{
                height: listSize,
                borderRadius: listRadius,
              }}
              aria-label={`Ver imagen ${index + 1}`}
              aria-pressed={index === selectedIndex}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.thumbnailImage}
                sizes={`${listSize * 2}px`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
