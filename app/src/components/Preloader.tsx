import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { products } from '@/data/products';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  const images = products.map((p) => p.image);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = images.length;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        setProgress(Math.floor((loadedImages / totalImages) * 100));
      };
      img.onerror = () => {
        loadedImages++; // Count as loaded to avoid infinite stall
        setProgress(Math.floor((loadedImages / totalImages) * 100));
      };
    });
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 100);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: onComplete,
        delay: 0.5, // Small delay so the user sees 100%
      });

      tl.to(imagesRef.current, {
        opacity: 0,
        duration: 0.5,
      })
        .to(textRef.current, {
          color: 'var(--fg)',
          webkitTextStroke: '0px transparent',
          duration: 0.8,
          ease: 'power2.inOut',
        }, "<")
        .to(preloaderRef.current, {
          y: '-100%',
          duration: 1,
          ease: 'power4.inOut',
        });
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute top-6 left-6 md:top-10 md:left-10 text-xl md:text-2xl font-medium" style={{ color: 'var(--fg)' }}>
        {progress}%
      </div>

      <div ref={imagesRef} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Preload flash"
            className="absolute max-w-[80vw] max-h-[50vh] object-cover"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
      </div>

      <h1
        ref={textRef}
        className="relative z-10 text-hero font-outfit text-center uppercase"
        style={{
          color: 'transparent',
          WebkitTextStroke: '2px var(--fg)',
        }}
      >
        OUTFIT<sup className="text-[0.15em] align-super ml-1 md:ml-2">®</sup>
      </h1>
    </div>
  );
}
