"use client";

import { motion, useReducedMotion } from "framer-motion";
import { voraussetzungen } from "@/data/steps";

const pricing = [
  { amount: "99 €", period: "/ Monat", save: null },
  { amount: "267 €", period: "/ Quartal", save: "30 € günstiger" },
  { amount: "891 €", period: "/ Jahr", save: "297 € günstiger" },
];

export default function CTA() {
  const reduce = useReducedMotion();

  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] },
        },
      };

  return (
    <section className="cta">
      <motion.div
        className="cta-inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.14 }}
      >
        <motion.h2 className="font-display cta-title" variants={item}>
          Worauf wir gemeinsam hinarbeiten:
        </motion.h2>

        <motion.p className="cta-promise-lead" variants={item}>
          Im Sensipreneure Inner Circle baust du dir gemeinsam mit
          Gleichgesinnten eine Selbstständigkeit auf, die dich wirklich trägt.
          Bedeutet:
        </motion.p>

        <motion.ul className="cta-promise" variants={item}>
          {voraussetzungen.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </motion.ul>

        <motion.div className="cta-pricing" variants={item}>
          {pricing.map((p) => (
            <div className="cta-price" key={p.period}>
              <span className="cta-price-amount font-display">{p.amount}</span>
              <span className="cta-price-period">{p.period}</span>
              {p.save && <span className="cta-price-save">{p.save}</span>}
            </div>
          ))}
        </motion.div>

        <motion.div variants={item} className="cta-action">
          <a
            className="btn btn-cta"
            href="https://sensipreneure.circle.so/checkout/sensipreneure"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mitglied werden
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </motion.div>

        <motion.p className="cta-note" variants={item}>
          Türen offen bis Freitag, 19.06. Begrenzt auf 25 Plätze.
        </motion.p>
      </motion.div>
    </section>
  );
}
