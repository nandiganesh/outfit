import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-medium mb-12" style={{ color: 'var(--fg)' }}>
          About Us
        </h1>
        
        <div className="space-y-8 text-xl md:text-3xl leading-relaxed" style={{ color: 'var(--fg)' }}>
          <p>
            OUTFIT® is a signature collection created by the ++hellohello team.
          </p>
          <p>
            Born in Montevideo, Uruguay, we celebrate our collective creativity and passion for apparel. We design pieces that speak for themselves, using typography, grids, and stark contrasts.
          </p>
          <p>
            Our philosophy is simple: Everything is made to be worn. Or judged. Or both. We believe that what you wear is a statement of intent, a manifestation of your internal grid system.
          </p>
          <p>
            No external frameworks. No compromises. Just pure design.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
