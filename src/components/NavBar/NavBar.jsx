import React, { useEffect, useState } from "react";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Close on ESC, lock body scroll, and auto-close on md+ resize
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Skip to content for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-brand-blue text-white px-3 py-2 rounded-md"
      >
        Skip to content
      </a>

      <nav
        className="fixed inset-x-0 top-0 z-50 bg-brand-white/90 backdrop-blur supports-[backdrop-filter]:bg-brand-white/80 shadow-sm ring-1 ring-black/5"
        aria-label="Primary"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo (stylized text) */}
            <a
              href="/"
              className="flex items-baseline gap-1"
              aria-label="LoadHarbour home"
              style={{
                fontFamily:
                  '"Sora", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
              }}
            >
              <span className="text-2xl font-semibold tracking-tight text-brand-navy">
                Load
              </span>
              <span className="text-2xl font-semibold tracking-tight text-brand-blue">
                Harbour
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-medium text-brand-navy/80 hover:text-brand-blue transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue rounded-md px-1 py-1"
                >
                  {label}
                </a>
              ))}
              <a
                href="#signup"
                className="inline-flex items-center rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#226bd0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue transition-colors"
              >
               Get Demo
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label="Open menu"
              aria-controls="mobile-nav"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-navy hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer + overlay */}
        <div
          className={`md:hidden fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
          aria-hidden={!open}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            id="mobile-nav"
            className={`absolute right-0 top-0 h-full w-72 max-w-[80%] bg-white shadow-xl ring-1 ring-black/5 transition-transform duration-200 ease-out ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
              <div
                className="text-xl font-semibold"
                style={{
                  fontFamily:
                    '"Sora", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
                }}
              >
                <span className="text-brand-navy">Load</span>
                <span className="text-brand-blue">Harbour</span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-brand-navy hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                  <path strokeWidth="2" d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-1 p-4">
              {LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-md px-3 py-2 text-base font-medium text-brand-navy hover:bg-black/5 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}

              <a
                href="#signup"
                className="mt-3 inline-flex items-center justify-center rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#226bd0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
                onClick={() => setOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
