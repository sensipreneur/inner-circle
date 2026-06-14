"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Contact() {
  const reduce = useReducedMotion();

  const reveal = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
        },
      };

  return (
    <section className="contact">
      <motion.div
        className="contact-inner"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="font-display contact-title">Noch Fragen?</h2>
        <p className="contact-text">
          Schreib mir einfach. Ich antworte dir persönlich.
        </p>
        <a className="btn" href="mailto:andrew@goldkugel-ghostwriting.de">
          Schreib mir eine Mail
        </a>
      </motion.div>
    </section>
  );
}
