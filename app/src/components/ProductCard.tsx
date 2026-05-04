import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ApparelBadge } from './ApparelBadge';
import type { Product } from '@/types';

gsap.registerPlugin(ScrollTrigger);

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <Link to={`/product/${product.slug}`} className="group block">
        <div className="overflow-hidden mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover product-image-hover"
            loading="lazy"
          />
        </div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg md:text-xl font-medium leading-tight" style={{ color: 'var(--fg)' }}>
            {product.name}
          </h3>
          <span className="text-lg md:text-xl font-medium whitespace-nowrap" style={{ color: 'var(--fg)' }}>
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="mt-1">
          <ApparelBadge />
        </div>
      </Link>
    </div>
  );
}
