"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Manifesto() {
  const reduce = useReducedMotion();

  const handleScroll = () => {
    const target = document.getElementById("schritte");
    if (target) {
      target.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  const reveal = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
        },
      };

  return (
    <section id="manifest" className="manifesto">
      <motion.div
        className="manifesto-inner"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="font-display manifesto-title">
          Dein Weg in die Selbstständigkeit als hochsensibler Mensch
        </h2>
        <p>
          Selbstständigkeit macht es möglich, weniger zu arbeiten und
          gleichzeitig mehr zu verdienen. Damit wir mehr Zeit haben für Erholung,
          Kreativität, Freunde, Familie und Heilung.
        </p>
        <p>
          <strong>Aber es ist kein leichter Weg.</strong>
        </p>
        <p>
          Besonders für hochsensible und neurodivergente Menschen. Neurotypische
          Strategien funktionieren für uns nicht. „Einfach machen“ führt uns nur
          ins nächste Burnout. Deswegen habe ich diese Community gegründet.
        </p>
        <p>
          Hier finden wir gemeinsam raus aus der Ohnmacht und rein in die
          Selbstwirksamkeit. Das ist mein Commitment gegenüber jedem Mitglied.
        </p>
        <p className="manifesto-signature">– andrew</p>

        <button
          type="button"
          className="hero-scrollhint-text manifesto-scrollhint"
          onClick={handleScroll}
        >
          Wie das funktioniert
          <span aria-hidden="true">↓</span>
        </button>
      </motion.div>
    </section>
  );
}
