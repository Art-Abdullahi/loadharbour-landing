import React from "react";
import { motion } from "motion/react";

const steps = [
  {
    title: "Sign Up",
    desc: "Create your account and tell us about your fleet.",
    badge: "1",
  },
  {
    title: "Automate",
    desc: "Connect loads & docs. Our AI handles dispatch, invoicing, and compliance alerts.",
    badge: "2",
  },
  {
    title: "Grow",
    desc: "Cut back-office time and keep trucks rolling with fewer empty miles.",
    badge: "3",
  },
];

const card = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 + i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section py-16 md:py-20">
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-brand-navy"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-brand-gray mt-3 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          From signup to savings in minutes—not months.
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <motion.article
            key={s.title}
            className="relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            variants={card}
            initial="hidden"
            whileInView="show"
            custom={i}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-brand-blue text-white grid place-items-center text-sm font-semibold shadow-sm">
              {s.badge}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-brand-navy">{s.title}</h3>
            <p className="mt-2 text-brand-gray">{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
