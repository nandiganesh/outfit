import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-medium mb-6" style={{ color: 'var(--fg)' }}>
          Order Confirmed
        </h1>
        <p className="text-xl md:text-2xl mb-12" style={{ color: 'var(--fg)' }}>
          Thank you for your purchase. Your order number is #{Math.floor(100000 + Math.random() * 900000)}. We will email you an order confirmation with details and tracking info.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 text-xl font-medium transition-opacity"
          style={{ backgroundColor: 'var(--fg)', color: 'var(--bg)' }}
        >
          Continue Shopping
        </Link>
      </motion.div>
    </main>
  );
}
