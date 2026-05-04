import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export function ProductGrid() {
  return (
    <section className="px-6 md:px-10 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
        {/* Row 1: 4 equal columns */}
        <div className="md:col-span-1">
          <ProductCard product={products[0]} index={0} />
        </div>
        <div className="md:col-span-1">
          <ProductCard product={products[1]} index={1} />
        </div>
        <div className="md:col-span-1">
          <ProductCard product={products[2]} index={2} />
        </div>
        <div className="md:col-span-1">
          <ProductCard product={products[3]} index={3} />
        </div>

        {/* Row 2: 2 small + 1 large */}
        <div className="md:col-span-1">
          <ProductCard product={products[4]} index={4} />
        </div>
        <div className="md:col-span-1">
          <ProductCard product={products[5]} index={5} />
        </div>
        <div className="md:col-span-2">
          <ProductCard product={products[6]} index={6} />
        </div>

        {/* Row 3: 3 items - small, small, medium */}
        <div className="md:col-span-1">
          <ProductCard product={products[7]} index={7} />
        </div>
        <div className="md:col-span-1">
          <ProductCard product={products[8]} index={8} />
        </div>
        <div className="md:col-span-1">
          <ProductCard product={products[9]} index={9} />
        </div>
        <div className="md:col-span-1 md:invisible">
          {/* Empty spacer */}
        </div>

        {/* Row 4: 1 large + 2 small */}
        <div className="md:col-span-2">
          <ProductCard product={products[10]} index={10} />
        </div>
        <div className="md:col-span-1">
          <ProductCard product={products[11]} index={11} />
        </div>
        <div className="md:col-span-1">
          <ProductCard product={products[12]} index={12} />
        </div>
      </div>
    </section>
  );
}
