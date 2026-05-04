import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useBag } from '@/context/BagContext';

export function Header() {
  const { totalItems } = useBag();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center" style={{ color: 'var(--fg)' }}>
          <Logo />
        </Link>

        <div className="flex items-center gap-8 md:gap-12">
          <nav className="flex items-center gap-8 md:gap-12">
            <Link
              to="/"
              className="text-sm font-medium uppercase tracking-wide link-hover"
              style={{ color: 'var(--fg)' }}
            >
              Shop
            </Link>
            <Link
              to="/bag"
              className="text-sm font-medium uppercase tracking-wide link-hover"
              style={{ color: 'var(--fg)' }}
            >
              Bag ({totalItems})
            </Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
