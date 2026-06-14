"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  const handleStart = () => {
    const target = document.getElementById("weg");
    if (target) {
      target.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.14, delayChildren: 0.1 },
    },
  };

  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] },
        },
      };

  return (
    <section className="hero">
      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="eyebrow hero-eyebrow" variants={item}>
          Sensipreneure Inner Circle
        </motion.p>

        <motion.h1 className="font-display hero-title" variants={item}>
          Wir leben in einem kranken System.
        </motion.h1>

        <motion.div className="hero-letter" variants={item}>
          <p>
            Menschen gehören nicht 8 Stunden in dunkle Räume eingesperrt, wo sie
            ständigem Leistungsdruck und sinnlosen Aufgaben ausgesetzt sind.
          </p>
          <p>
            Selbstständigkeit macht es möglich, weniger zu arbeiten und
            gleichzeitig mehr zu verdienen. Damit wir mehr Zeit haben für
            Erholung, Kreativität, Freunde, Familie und Heilung.
          </p>
          <p>
            <strong>Aber es ist kein leichter Weg.</strong>
          </p>
          <p>
            Besonders für hochsensible und neurodivergente Menschen. Neurotypische
            Strategien funktionieren für uns nicht. „Einfach machen“ führt uns
            nur ins nächste Burnout. Deswegen habe ich diese Community gegründet.
          </p>
          <p>
            Hier finden wir gemeinsam raus aus der Ohnmacht und rein in die
            Selbstwirksamkeit. Das ist mein Commitment gegenüber jedem Mitglied.
          </p>
          <p className="hero-signature">– andrew</p>
        </motion.div>

        <motion.div variants={item} className="hero-cta">
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
          Community ist offen vom 15.06.–19.06. Begrenzt auf 25 Plätze.
        </motion.p>

        <motion.button
          type="button"
          className="hero-scrollhint-text"
          variants={item}
          onClick={handleStart}
        >
          Mehr erfahren
          <span aria-hidden="true">↓</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
