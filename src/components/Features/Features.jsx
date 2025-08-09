import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import {
  DispatchIcon as TruckArrowRight,
  InvoiceIcon as DollarCircle,
  ComplianceIcon as ShieldCheck,
  AnalyticsIcon as ChartUp,
  DocumentIcon as FileBolt,
  SupportIcon as PhoneWave,
} from "./icons";

const FEATURES = [
  {
    title: "Smart Dispatch",
    description:
      "AI suggests the best driver–truck–load match to cut deadhead and reduce manual calls.",
    Icon: TruckArrowRight,
    accent: "from-blue-50 to-blue-100 text-blue-700",
  },
  {
    title: "Instant Invoicing",
    description:
      "POD uploaded → invoice generated and emailed in seconds for faster cash flow.",
    Icon: DollarCircle,
    accent: "from-emerald-50 to-emerald-100 text-emerald-700",
  },
  {
    title: "Compliance Guard",
    description:
      "Automated alerts for CDL, insurance, IFTA, and maintenance so you never miss a deadline.",
    Icon: ShieldCheck,
    accent: "from-indigo-50 to-indigo-100 text-indigo-700",
  },
  {
    title: "Driver Mobile App",
    description:
      "Drivers see load details, upload BOL/POD, capture signatures—no chasing paperwork.",
    Icon: PhoneWave,
    accent: "from-cyan-50 to-cyan-100 text-cyan-700",
  },
  {
    title: "AutoDriver Settlements",
    description:
      "Weekly driver pay calculated automatically with custom rules and downloadable statements.",
    Icon: FileBolt,
    accent: "from-amber-50 to-amber-100 text-amber-700",
  },
  {
    title: "Analytics & Insights",
    description:
      "Know your lane profitability, RPM/CPM, and cashflow outlook at a glance.",
    Icon: ChartUp,
    accent: "from-fuchsia-50 to-fuchsia-100 text-fuchsia-700",
  },
];

export default function Features({ headline = "Everything You Need to Run Efficiently" }) {
  return (
    <section id="features" className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-slate-900"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {headline}
        </motion.h2>

        <motion.p
          className="mt-3 text-slate-600 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          LoadHarbour automates dispatch, invoicing, compliance, driver pay, and insights—so you can focus on moving freight and growing your business.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={0.05 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}

Features.propTypes = {
  headline: PropTypes.string,
};

/* simple inline icons to avoid extra deps */
export function iconsNote() {
  return null;
}
