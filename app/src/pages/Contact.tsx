import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-medium mb-12" style={{ color: 'var(--fg)' }}>
          Contact
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl mb-8" style={{ color: 'var(--fg)' }}>
              Have a question or just want to say hi? Drop us a line.
            </p>
            <div className="space-y-2 mb-8" style={{ color: 'var(--fg)' }}>
              <p className="font-semibold">Headquarters</p>
              <p>Libertad 2529, Office 102</p>
              <p>Montevideo, Uruguay</p>
            </div>
            <div className="space-y-2" style={{ color: 'var(--fg)' }}>
              <p className="font-semibold">Email</p>
              <p>hello@hellohello.com</p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="p-8 border" style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}>
                <h3 className="text-3xl mb-4">Thanks!</h3>
                <p>We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                  style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors"
                  style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                />
                <textarea
                  required
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b outline-none py-3 px-0 placeholder:opacity-50 transition-colors resize-none"
                  style={{ borderColor: 'var(--fg)', color: 'var(--fg)' }}
                ></textarea>
                <button
                  type="submit"
                  className="px-8 py-4 text-xl font-medium transition-opacity"
                  style={{ backgroundColor: 'var(--fg)', color: 'var(--bg)' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
