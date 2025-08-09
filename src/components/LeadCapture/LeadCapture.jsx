import React, { useState } from "react";
import { motion } from "motion/react";

// 👉 Set your endpoint here (e.g., https://formspree.io/f/xxxx or your API route)
const FORM_ENDPOINT = ""; // leave empty to simulate success locally

const perks = [
  "Priority early access",
  "Founding member pricing",
  "White-glove onboarding call",
];

export default function LeadCapture() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // Honeypot
    if (form.get("website")) return;

    const email = String(form.get("email") || "").trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus({ state: "error", message: "Please enter a valid email." });
      return;
    }

    setStatus({ state: "loading", message: "" });

    try {
      if (!FORM_ENDPOINT) {
        // Simulate success for local testing
        await new Promise((r) => setTimeout(r, 700));
        setStatus({ state: "success", message: "You're on the list! We'll reach out shortly." });
        (e.currentTarget).reset();
        return;
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Network error");
      setStatus({ state: "success", message: "You're on the list! We'll reach out shortly." });
      (e.currentTarget).reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again in a minute.",
      });
    }
  };

  return (
    <section id="signup" className="section py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        {/* Copy + perks */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            Join the LoadHarbour Waitlist
          </h2>
          <p className="mt-3 text-brand-gray max-w-xl">
            Be first to automate dispatch, instant invoicing, and compliance tracking.
          </p>

          <ul className="mt-5 space-y-2">
            {perks.map((p, i) => (
              <motion.li
                key={p}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <span className="mt-1 h-5 w-5 rounded-full bg-brand-blue text-white grid place-items-center text-xs font-semibold">
                  ✓
                </span>
                <span className="text-brand-navy">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* Honeypot */}
          <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-navy mb-1">Work Email *</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Company</label>
              <input
                name="company"
                type="text"
                placeholder="Acme Logistics"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Fleet Size</label>
              <select
                name="fleetSize"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                defaultValue=""
              >
                <option value="" disabled>
                  Select…
                </option>
                <option>1–5</option>
                <option>6–20</option>
                <option>21–50</option>
                <option>51–100</option>
                <option>100+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Role</label>
              <select
                name="role"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                defaultValue=""
              >
                <option value="" disabled>
                  Select…
                </option>
                <option>Owner</option>
                <option>Dispatcher</option>
                <option>Operations</option>
                <option>Accounting</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1">Phone (optional)</label>
              <input
                name="phone"
                type="tel"
                placeholder="(555) 555-5555"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              type="submit"
              disabled={status.state === "loading"}
              className="btn-primary inline-flex items-center justify-center rounded-xl bg-brand-blue px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-[#226bd0] disabled:opacity-60"
            >
              {status.state === "loading" ? "Submitting..." : "Join the Waitlist"}
            </button>
            <p className="text-xs text-brand-gray">
              By joining, you agree to be contacted for onboarding and updates.
            </p>
          </div>

          {/* Status */}
          <div className="mt-3 min-h-[24px]" aria-live="polite">
            {status.state === "success" && (
              <div className="text-sm font-medium text-green-700">✅ {status.message}</div>
            )}
            {status.state === "error" && (
              <div className="text-sm font-medium text-red-600">⚠️ {status.message}</div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
