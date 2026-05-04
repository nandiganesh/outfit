import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Minus, Plus } from 'lucide-react';
import { getProductBySlug } from '@/data/products';
import { useBag } from '@/context/BagContext';
import { ApparelBadge } from '@/components/ApparelBadge';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = getProductBySlug(slug || '');
  const { addItem } = useBag();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-xl mb-4" style={{ color: 'var(--fg)' }}>Product not found</p>
          <Link to="/" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToBag = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize, quantity);
    navigate('/bag');
  };

  return (
    <main className="min-h-screen pt-24 md:pt-28 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-8 link-hover"
          style={{ color: 'var(--fg)' }}
        >
          <ArrowLeft size={16} />
          Return to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-lg h-auto object-cover"
            />
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center py-4 md:py-12"
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6"
              style={{ color: 'var(--fg)' }}
            >
              {product.name}
            </h1>

            <p className="text-3xl md:text-4xl font-medium mb-6" style={{ color: 'var(--fg)' }}>
              ${product.price.toFixed(0)}
            </p>

            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'var(--fg)' }}>
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3" style={{ color: 'var(--fg)' }}>Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="px-4 py-2 text-sm font-medium transition-all"
                    style={{
                      backgroundColor: selectedSize === size ? 'var(--fg)' : 'transparent',
                      color: selectedSize === size ? 'var(--bg)' : 'var(--fg)',
                      border: `1.5px solid var(--fg)`,
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <div className="flex items-center gap-6 border-b pb-4" style={{ borderColor: 'var(--fg)' }}>
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-1"
                  style={{ color: 'var(--fg)' }}
                >
                  <Minus size={20} />
                </button>
                <span className="text-xl font-medium" style={{ color: 'var(--fg)' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-1"
                  style={{ color: 'var(--fg)' }}
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Add to Bag */}
            <button
              onClick={handleAddToBag}
              disabled={!selectedSize}
              className="flex items-center gap-3 text-2xl md:text-3xl font-medium disabled:opacity-40 transition-opacity"
              style={{ color: 'var(--fg)' }}
            >
              Add to Bag
              <ArrowUpRight size={28} />
            </button>

            <div className="mt-4">
              <ApparelBadge />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
