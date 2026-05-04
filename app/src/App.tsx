import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { BagProvider } from './context/BagContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import BagPage from './pages/Bag';
import CheckoutPage from './pages/Checkout';
import OrderSuccessPage from './pages/OrderSuccess';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ShippingReturnsPage from './pages/ShippingReturns';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfServicePage from './pages/TermsOfService';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
    });
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/bag" element={<BagPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <ThemeProvider>
      <BagProvider>
        <CustomCursor />
        {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} />}
        <AppContent />
      </BagProvider>
    </ThemeProvider>
  );
}
