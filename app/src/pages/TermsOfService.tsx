import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-medium mb-12" style={{ color: 'var(--fg)' }}>
          Terms of Service
        </h1>
        
        <div className="space-y-12" style={{ color: 'var(--fg)' }}>
          <section>
            <p className="text-lg md:text-xl leading-relaxed opacity-70 mb-8">Last updated: May 4, 2026</p>
            <p className="text-lg md:text-xl leading-relaxed">
              This website is operated by ++hellohello. Throughout the site, the terms “we”, “us” and “our” refer to ++hellohello. We offer this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Online Store Terms</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">General Conditions</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Products or Services</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Modifications to the Service and Prices</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Errors, Inaccuracies, and Omissions</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-medium mb-6">Governing Law</h2>
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Uruguay.</p>
            </div>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
