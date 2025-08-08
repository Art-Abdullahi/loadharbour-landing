import React from "react";
import { motion } from "motion/react";

/* Minimal inline icons (no deps) */
const TruckArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M3 7h9m0 0l-3 3m3-3l-3-3" />
    <rect x="14" y="6" width="7" height="6" rx="1.5" strokeWidth="2" />
    <path strokeWidth="2" d="M3 13h18" />
    <circle cx="7" cy="19" r="2" />
    <circle cx="17" cy="19" r="2" />
  </svg>
);

const DollarCircle = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="9" strokeWidth="2" />
    <path strokeWidth="2" d="M8.5 10.5c0-1.1 1.2-2 2.7-2h1.1c1.5 0 2.7.9 2.7 2s-1.2 2-2.7 2h-1.3c-1.3 0-2.5.9-2.5 2s1.2 2 2.7 2h3.8" />
    <path strokeWidth="2" d="M12 6v12" />
  </svg>
);

const ShieldCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3z" />
    <path strokeWidth="2" d="M9 12l2.2 2.2L15 10.5" />
  </svg>
);

/* Motion variants */
const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const leftIn = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightIn = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay, duration: 0.45, ease: "easeOut" },
  },
});

const stagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

export default function Hero() {
  return (
    <motion.header
      id="hero"
      className="relative isolate overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 40%, #F4F8FF 100%)",
      }}
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Decorative drifting blobs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #2F80ED33, transparent)",
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, 12, -10, 0],
          y: [0, -8, 6, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #00B8A933, transparent)",
        }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, -10, 12, 0],
          y: [0, 6, -8, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="pt-24 md:pt-28 pb-12 md:pb-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <motion.div
            className="text-center lg:text-left"
            variants={leftIn}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{ color: "#0A2540", fontFamily: '"Sora", Inter, system-ui, sans-serif' }}
              variants={fadeUp(0.05)}
            >
              Powering Smarter Trucking Operations—All in One Hub.
            </motion.h1>

            <motion.p
              className="mt-4 text-lg md:text-xl"
              style={{ color: "#7B8794" }}
              variants={fadeUp(0.15)}
            >
              LoadHarbour automates dispatching, invoicing, and compliance—so you can focus on the road.
            </motion.p>

            <motion.div
              className="mt-6 flex items-center justify-center lg:justify-start gap-4"
              variants={stagger}
            >
              <motion.a
                href="#signup"
                className="inline-flex items-center rounded-xl px-5 py-2.5 text-white font-semibold shadow-sm transition-colors"
                style={{ backgroundColor: "#2F80ED" }}
                variants={fadeUp(0.2)}
                whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(47,128,237,.25)" }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Waitlist
              </motion.a>

              <motion.a
                href="#features"
                className="inline-flex items-center rounded-xl px-5 py-2.5 font-semibold transition-colors border"
                style={{ borderColor: "#0A2540", color: "#0A2540" }}
                variants={fadeUp(0.25)}
                whileHover={{
                  color: "#2F80ED",
                  borderColor: "#2F80ED",
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
              >
                See How It Works
              </motion.a>
            </motion.div>

            {/* Trust bar */}
            <motion.div className="mt-8" variants={fadeUp(0.3)}>
              <p
                className="text-sm font-medium tracking-wide"
                style={{ color: "#7B8794" }}
              >
                Trusted by Carriers. Built for Automation.
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {["Logo", "Logo", "Logo"].map((t, i) => (
                  <motion.div
                    key={i}
                    className="h-8 w-20 rounded-md border border-gray-200 bg-white text-gray-400 text-xs grid place-items-center"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.25 }}
                  >
                    {t}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Abstract product preview */}
          <motion.div
            className="relative"
            variants={rightIn}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="mx-auto w-full max-w-md lg:max-w-lg rounded-2xl border border-gray-200 bg-white shadow-sm"
              initial={{ opacity: 0, y: 16, rotate: 0.4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {/* Window chrome */}
              <motion.div
                className="flex items-center gap-2 border-b border-gray-200 px-4 py-2"
                initial={{ y: -10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <span className="h-3 w-3 rounded-full bg-red-300" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-300" />
                <div className="ml-3 h-4 w-32 rounded bg-gray-100" />
              </motion.div>

              {/* Cards grid */}
              <motion.div
                className="grid grid-cols-2 gap-3 p-4"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {/* Dispatch */}
                <motion.div
                  className="col-span-2 rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition"
                  variants={fadeUp(0.05)}
                  whileHover={{ y: -2, shadow: "0 12px 24px rgba(0,0,0,.06)" }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-9 w-9 grid place-items-center rounded-lg"
                      style={{ background: "#F0F6FF" }}
                    >
                      <TruckArrowRight className="h-5 w-5" style={{ color: "#2F80ED" }} />
                    </div>
                    <h3 className="font-semibold" style={{ color: "#0A2540" }}>
                      Smart Dispatch
                    </h3>
                  </div>
                  <p className="mt-2 text-sm" style={{ color: "#7B8794" }}>
                    Best driver–truck–load match. Fewer empty miles.
                  </p>
                  <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ background: "#2F80ED" }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "68%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>

                {/* Invoicing */}
                <motion.div
                  className="rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition"
                  variants={fadeUp(0.1)}
                  whileHover={{ y: -2, shadow: "0 12px 24px rgba(0,0,0,.06)" }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-9 w-9 grid place-items-center rounded-lg"
                      style={{ background: "#F0FFF9" }}
                    >
                      <DollarCircle className="h-5 w-5" style={{ color: "#00B8A9" }} />
                    </div>
                    <h4 className="font-semibold" style={{ color: "#0A2540" }}>
                      Instant Invoicing
                    </h4>
                  </div>
                  <motion.div
                    className="mt-3 space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="h-2 w-full rounded bg-gray-100" />
                    <div className="h-2 w-3/4 rounded bg-gray-100" />
                  </motion.div>
                </motion.div>

                {/* Compliance */}
                <motion.div
                  className="rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition"
                  variants={fadeUp(0.15)}
                  whileHover={{ y: -2, shadow: "0 12px 24px rgba(0,0,0,.06)" }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-9 w-9 grid place-items-center rounded-lg"
                      style={{ background: "#F5FAFF" }}
                    >
                      <ShieldCheck className="h-5 w-5" style={{ color: "#2F80ED" }} />
                    </div>
                    <h4 className="font-semibold" style={{ color: "#0A2540" }}>
                      Compliance Guard
                    </h4>
                  </div>
                  <motion.ul
                    className="mt-3 space-y-2 text-sm"
                    style={{ color: "#7B8794" }}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                  >
                    <li>• CDL & insurance alerts</li>
                    <li>• IFTA & maintenance reminders</li>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Soft shadow glow */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-x-6 -bottom-6 h-10 rounded-full blur-2xl"
              style={{ background: "radial-gradient(closest-side, #00000022, transparent)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
