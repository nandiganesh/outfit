import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(text1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo(text2Ref.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo(paraRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.4');
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-10 py-12 md:py-20">
      <div className="border-t-[3px] pt-8 md:pt-12" style={{ borderColor: 'var(--fg)' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div ref={text1Ref}>
            <h2 className="text-statement font-outfit" style={{ color: 'var(--fg)' }}>
              Made to be worn.
              <br />
              Or judged. Or both.
            </h2>
          </div>

          <div ref={text2Ref} className="flex-shrink-0">
            <span className="text-statement font-outfit" style={{ color: 'var(--fg)' }}>
              ©26
            </span>
          </div>
        </div>

        <div ref={paraRef} className="mt-12 md:mt-16 max-w-xl">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--fg)' }}>
            Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.
          </p>
        </div>
      </div>
    </section>
  );
}
