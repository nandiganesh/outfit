import { motion } from 'framer-motion';

export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-medium mb-12" style={{ color: 'var(--fg)' }}>
          Shipping & Returns
        </h1>
        
        <div className="space-y-16" style={{ color: 'var(--fg)' }}>
          <section>
            <h2 className="text-4xl font-medium mb-6">Shipping Information</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>We ship globally from our studio in Montevideo, Uruguay.</p>
              <p><strong>Domestic Orders:</strong> Standard shipping takes 2-4 business days. Express shipping is available at checkout.</p>
              <p><strong>International Orders:</strong> Delivery times vary between 7-14 business days depending on the destination. Please note that international shipments may be subject to local duties and taxes, which are the responsibility of the recipient.</p>
              <p>All orders are processed within 24-48 hours. You will receive a tracking number via email once your order has dispatched.</p>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-medium mb-6">Returns Policy</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>We want you to love your OUTFIT® pieces. If you are not completely satisfied, we accept returns within 14 days of delivery.</p>
              <p>Items must be unworn, unwashed, and in their original condition with all tags attached.</p>
              <p><strong>How to return:</strong> Please contact our support team at hello@hellohello.com with your order number to initiate a return. We will provide you with a return shipping label.</p>
              <p>Refunds will be processed back to the original method of payment within 5-7 business days of receiving the returned item. Shipping costs are non-refundable.</p>
            </div>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
