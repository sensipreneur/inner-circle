"use client";

import { motion, useReducedMotion } from "framer-motion";
import { completion } from "@/data/onboarding";

export default function CompletionCard() {
  const reduce = useReducedMotion();

  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] },
        },
      };

  return (
    <motion.section
      className="onb-completion"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="eyebrow onb-completion-eyebrow">{completion.eyebrow}</p>
      <h2 className="font-display onb-completion-title">{completion.title}</h2>
      <p className="onb-completion-text">{completion.text}</p>
    </motion.section>
  );
}
