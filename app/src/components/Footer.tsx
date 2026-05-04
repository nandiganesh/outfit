import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-12 pb-16">
      <div className="border-t-[3px] pt-8" style={{ borderColor: 'var(--fg)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>++ hellohello</p>
            <p className="text-sm mt-1" style={{ color: 'var(--fg)' }}>All rights reserved © 2026</p>
          </div>

          <div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--fg)' }}>
              Libertad 2529<br />
              Office 102<br />
              Montevideo, Uruguay
            </p>
          </div>

          <div>
            <Link to="/shipping-returns" className="text-sm link-hover block mb-2" style={{ color: 'var(--fg)' }}>Shipping & Returns</Link>
            <Link to="/privacy-policy" className="text-sm link-hover block mb-2" style={{ color: 'var(--fg)' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm link-hover block" style={{ color: 'var(--fg)' }}>Terms of Service</Link>
          </div>

          <div className="flex flex-col gap-2">
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>Dribbble</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>Twitter (X)</a>
          </div>

          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>Work</a>
            <a href="#" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>Services</a>
            <Link to="/about" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>About</Link>
            <a href="#" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>Careers</a>
          </div>

          <div>
            <Link to="/contact" className="text-sm font-medium link-hover" style={{ color: 'var(--fg)' }}>Let's talk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
