import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useBag } from '@/context/BagContext';

export default function CheckoutPage() {
  const { items, totalPrice, totalItems, clearBag } = useBag();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      clearBag();
      setIsProcessing(false);
      navigate('/order-success');
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen pt-24 md:pt-28 px-6 md:px-10">
        <div className="py-12">
          <p className="text-lg mb-4" style={{ color: 'var(--fg)' }}>Your bag is empty.</p>
          <Link to="/" className="text-sm link-hover" style={{ color: 'var(--fg)' }}>
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 md:pt-28 px-6 md:px-10 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/bag"
          className="inline-flex items-center gap-2 text-sm mb-8 link-hover"
          style={{ color: 'var(--fg)' }}
        >
          <ArrowLeft size={16} />
          Return to Bag
        </Link>

        <h1 className="text-5xl md:text-7xl font-medium mb-12" style={{ color: 'var(--fg)' }}>
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <section>
                <h2 className="text-2xl font-medium mb-6" style={{ color: 'var(--fg)' }}>Contact Information</h2>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                  style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                />
              </section>

              <section>
                <h2 className="text-2xl font-medium mb-6 mt-12" style={{ color: 'var(--fg)' }}>Shipping Address</h2>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                    style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                    style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Address"
                    className="col-span-2 w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                    style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="City"
                    className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                    style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Postal Code"
                    className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                    style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium mb-6 mt-12" style={{ color: 'var(--fg)' }}>Payment</h2>
                <div className="space-y-6">
                  <input
                    type="text"
                    required
                    placeholder="Card Number"
                    maxLength={19}
                    className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                    style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                      style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                    />
                    <input
                      type="text"
                      required
                      placeholder="CVC"
                      maxLength={4}
                      className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                      style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                    />
                  </div>
                </div>
              </section>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 text-xl font-medium transition-opacity mt-8 disabled:opacity-50"
                style={{ backgroundColor: 'var(--fg)', color: 'var(--bg)' }}
              >
                {isProcessing ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
              </button>
            </form>
          </div>

          <div className="lg:border-l lg:pl-12" style={{ borderColor: 'var(--fg)' }}>
            <h2 className="text-2xl font-medium mb-8" style={{ color: 'var(--fg)' }}>Order Summary</h2>
            <div className="space-y-6 mb-8 max-h-[50vh] overflow-y-auto pr-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                  <div className="w-20 flex-shrink-0 relative">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-auto object-cover" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs rounded-full" style={{ backgroundColor: 'var(--fg)', color: 'var(--bg)' }}>
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 flex justify-between">
                    <div>
                      <p className="font-medium" style={{ color: 'var(--fg)' }}>{item.product.name}</p>
                      <p className="text-sm opacity-70" style={{ color: 'var(--fg)' }}>Size: {item.size}</p>
                    </div>
                    <p className="font-medium" style={{ color: 'var(--fg)' }}>${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-6 space-y-4" style={{ borderColor: 'var(--fg)' }}>
              <div className="flex justify-between">
                <span className="opacity-70" style={{ color: 'var(--fg)' }}>Subtotal ({totalItems} items)</span>
                <span style={{ color: 'var(--fg)' }}>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70" style={{ color: 'var(--fg)' }}>Shipping</span>
                <span style={{ color: 'var(--fg)' }}>Free</span>
              </div>
              <div className="flex justify-between text-xl font-medium pt-4 border-t" style={{ borderColor: 'var(--fg)' }}>
                <span style={{ color: 'var(--fg)' }}>Total</span>
                <span style={{ color: 'var(--fg)' }}>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
