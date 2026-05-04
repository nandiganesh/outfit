import { HeroSection } from '@/sections/HeroSection';
import { InfoBar } from '@/sections/InfoBar';
import { ProductGrid } from '@/sections/ProductGrid';
import { StatementSection } from '@/sections/StatementSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InfoBar />
      <ProductGrid />
      <StatementSection />
    </main>
  );
}
