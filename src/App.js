import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Features from './components/Features'; 
import HowItWorks from './components/HowItWorks';
import LeadCapture from './components/LeadCapture';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Confetti surprise function
  const triggerConfetti = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      spread: 100,
      ticks: 100,
      gravity: 1,
      decay: 0.94,
      startVelocity: 30,
      colors: ['#2F80ED', '#00B8A9', '#0A2540', '#7B8794', '#F9FAFB']
    };

    const fire = (particleRatio, opts) => {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    };

    // Fire confetti in different shapes and directions
    fire(0.25, { angle: 55, spread: 26, origin: { x: 0 } });
    fire(0.2, { angle: 120, spread: 26, origin: { x: 1 } });
    fire(0.1, { angle: 90, spread: 120, startVelocity: 45, scalar: 1.2 });
    fire(0.1, { angle: 90, spread: 120, startVelocity: 45, scalar: 1.3 });
    fire(0.1, { angle: 90, spread: 120, startVelocity: 45, scalar: 1.4 });
    fire(0.1, { angle: 90, spread: 120, startVelocity: 45, scalar: 1.5 });
    fire(0.1, { angle: 90, spread: 120, startVelocity: 45, scalar: 1.6 });
    fire(0.1, { angle: 90, spread: 120, startVelocity: 45, scalar: 1.7 });
    fire(0.1, { angle: 90, spread: 120, startVelocity: 45, scalar: 1.8 });
    fire(0.1, { angle: 90, spread: 120, startVelocity: 45, scalar: 1.9 });
  }, []);

  // Add keyboard shortcut for confetti (Ctrl+Alt+C)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'c') {
        triggerConfetti();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerConfetti]);

  // Add confetti on page load after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerConfetti();
    }, 2000);
    return () => clearTimeout(timer);
  }, [triggerConfetti]);

  return (
    <div className="App bg-gray-50">
      <NavBar />
      <main id="main" tabIndex={-1} className="pt-16 overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Hero Section */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="relative overflow-hidden"
          >
            <Hero />
          </motion.section>

          {/* Features Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-20 md:py-28 relative"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Features />
            </div>
          </motion.section>

          {/* How It Works Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-20 md:py-28 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <HowItWorks />
            </div>
          </motion.section>

          {/* Lead Capture Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
            className="py-20 md:py-28 relative bg-gradient-to-br from-blue-50 to-indigo-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <LeadCapture />
            </div>
          </motion.section>
        </AnimatePresence>
      </main>

      {/* Decorative elements */}
      <motion.div 
        className="fixed -z-10 w-full h-full top-0 left-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </motion.div>
    </div>
  );
}

export default App;
