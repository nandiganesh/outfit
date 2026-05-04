import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="pt-28 md:pt-32 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative">
          <h1 className="text-hero font-outfit" style={{ color: 'var(--fg)' }}>
            OUTFIT
            <sup className="text-[0.15em] align-super ml-1 md:ml-2">®</sup>
          </h1>
        </div>
        <div className="mt-4 md:mt-6 border-b-[3px]" style={{ borderColor: 'var(--fg)' }} />
      </motion.div>
    </section>
  );
}
