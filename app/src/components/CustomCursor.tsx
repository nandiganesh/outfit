import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    const setX = gsap.quickSetter(cursorRef.current, "x", "px");
    const setY = gsap.quickSetter(cursorRef.current, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[10000] mix-blend-difference"
      style={{ backgroundColor: '#ffffff' }}
    />
  );
}
