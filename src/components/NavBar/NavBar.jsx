// src/components/NavBar.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.body.style.overflow = open ? "hidden" : "";
    onScroll();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-brand-blue text-white px-3 py-2 rounded-md z-[100]"
      >
        Skip to content
      </a>

      <motion.nav
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-50 h-16 ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-brand-white/80"
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          boxShadow: scrolled ? "0 6px 24px rgba(0,0,0,0.06)" : "0 2px 8px rgba(0,0,0,0.04)",
          backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(249,250,251,0.88)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl h-full px-4 md:px-6">
          <div className="flex h-full items-center justify-between">
            <a
              href="/"
              aria-label="LoadHarbour home"
              className="flex items-baseline gap-1"
              style={{ fontFamily: '"Sora", Inter, system-ui, sans-serif' }}
            >
              <motion.span
                className="text-2xl font-semibold tracking-tight text-brand-navy"
                initial={{ x: -6, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.25 }}
              >
                Load
              </motion.span>
              <motion.span
                className="text-2xl font-semibold tracking-tight text-brand-blue"
                initial={{ x: 6, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.25 }}
              >
                Harbour
              </motion.span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  className="text-sm font-medium text-brand-navy/80 hover:text-brand-blue transition-colors rounded-md px-1 py-1"
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.25 }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#signup"
                className="inline-flex items-center rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#226bd0] transition-colors"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 20 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Demo
              </motion.a>
            </div>

            <motion.button
              type="button"
              aria-label="Open menu"
              aria-controls="mobile-nav"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-navy hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
              whileTap={{ scale: 0.96 }}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-nav" className="fixed inset-0 z-[60] md:hidden" initial={false}>
            <motion.div
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="absolute right-0 top-0 h-full w-72 max-w-[80%] bg-white shadow-xl ring-1 ring-black/5"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
                <div style={{ fontFamily: '"Sora", Inter, system-ui, sans-serif' }}>
                  <span className="text-xl font-semibold text-brand-navy">Load</span>
                  <span className="text-xl font-semibold text-brand-blue">Harbour</span>
                </div>
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2 text-brand-navy hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
                  whileTap={{ scale: 0.96 }}
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path strokeWidth="2" d="M6 6l12 12M18 6l-12 12" />
                  </svg>
                </motion.button>
              </div>

              <nav className="px-4 py-3">
                {LINKS.map(({ href, label }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    className="block rounded-md px-3 py-3 text-base font-medium text-brand-navy hover:bg-black/5 hover:text-brand-blue"
                    onClick={() => setOpen(false)}
                    initial={{ x: 12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 12, opacity: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.2 }}
                  >
                    {label}
                  </motion.a>
                ))}
                <motion.a
                  href="#signup"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#226bd0]"
                  onClick={() => setOpen(false)}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Waitlist
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
