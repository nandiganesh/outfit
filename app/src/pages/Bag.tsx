import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Minus, Plus, X } from 'lucide-react';
import { useBag } from '@/context/BagContext';
import { ApparelBadge } from '@/components/ApparelBadge';

export default function BagPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useBag();

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

        <h1 className="text-5xl md:text-7xl font-medium mb-12" style={{ color: 'var(--fg)' }}>
          Bag
        </h1>

        {items.length === 0 ? (
          <div className="py-12">
            <p className="text-lg mb-4" style={{ color: 'var(--fg)' }}>Your bag is empty.</p>
            <Link to="/" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.size}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-6 pb-8 border-b"
                    style={{ borderColor: 'var(--fg)' }}
                  >
                    <Link to={`/product/${item.product.slug}`} className="flex-shrink-0 w-32 md:w-40">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-auto object-cover"
                      />
                    </Link>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <Link
                            to={`/product/${item.product.slug}`}
                            className="text-xl md:text-2xl font-medium"
                            style={{ color: 'var(--fg)' }}
                          >
                            {item.product.name}
                          </Link>
                          <button
                            onClick={() => removeItem(item.product.id, item.size)}
                            className="p-1 flex-shrink-0"
                            style={{ color: 'var(--fg)' }}
                          >
                            <X size={20} />
                          </button>
                        </div>
                        <p className="text-lg mt-1" style={{ color: 'var(--fg)' }}>
                          ${item.product.price.toFixed(2)}
                        </p>
                        <div className="mt-2">
                          <ApparelBadge />
                        </div>
                        <p className="text-sm mt-2" style={{ color: 'var(--fg)' }}>
                          Size: {item.size}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 mt-4">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="p-1"
                          style={{ color: 'var(--fg)' }}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-lg font-medium" style={{ color: 'var(--fg)' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="p-1"
                          style={{ color: 'var(--fg)' }}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1">
              <div className="border-t lg:border-t-0 lg:border-l pt-8 lg:pt-0 lg:pl-12" style={{ borderColor: 'var(--fg)' }}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm uppercase tracking-wider" style={{ color: 'var(--fg)' }}>
                      Items ({totalItems})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-medium" style={{ color: 'var(--fg)' }}>
                      Total
                    </span>
                    <span className="text-2xl font-medium" style={{ color: 'var(--fg)' }}>
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="pt-8">
                    <Link
                      to="/checkout"
                      className="block w-full py-4 text-center text-xl font-medium transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--fg)', color: 'var(--bg)' }}
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </main>
  );
}
