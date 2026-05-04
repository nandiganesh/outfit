import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-medium mb-12" style={{ color: 'var(--fg)' }}>
          Privacy Policy
        </h1>
        
        <div className="space-y-12" style={{ color: 'var(--fg)' }}>
          <section>
            <p className="text-lg md:text-xl leading-relaxed opacity-70 mb-8">Last updated: May 4, 2026</p>
            <p className="text-lg md:text-xl leading-relaxed">
              This Privacy Policy describes how ++hellohello ("we", "us", or "our") collects, uses, and discloses your Personal Information when you visit or make a purchase from the OUTFIT® website.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Collecting Personal Information</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Device information:</strong> version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
                <li><strong>Order information:</strong> name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Using Personal Information</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Sharing Personal Information</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you. For example:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We use third-party payment processors to handle secure transactions.</li>
                <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Cookies</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>A cookie is a small amount of information that’s downloaded to your computer or device when you visit our Site. We use a number of different cookies, including functional, performance, advertising, and social media or content cookies. Cookies make your browsing experience better by allowing the website to remember your actions and preferences.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Contact</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hello@hellohello.com or by mail using the details provided below:</p>
              <p>Libertad 2529, Office 102, Montevideo, Uruguay</p>
            </div>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
