"use client";

import { motion, useReducedMotion } from "framer-motion";
import { allTaskIds } from "@/data/onboarding";
import { useProgress } from "@/hooks/useProgress";

export default function OnboardingHero() {
  const reduce = useReducedMotion();
  const { countDone } = useProgress();

  const done = countDone(allTaskIds);
  const total = allTaskIds.length;
  const ratio = total > 0 ? done / total : 0;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
        },
      };

  return (
    <motion.header
      className="onb-hero"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p className="eyebrow onb-hero-eyebrow" variants={item}>
        Inner Circle
      </motion.p>

      <motion.h1 className="font-display onb-hero-title" variants={item}>
        Willkommen :)
      </motion.h1>

      <motion.p className="onb-hero-body" variants={item}>
        Hier ist dein Plan für die ersten Wochen, damit du weißt, wo alles ist,
        was als nächstes kommt und wie du das meiste aus dem Inner Circle
        rausholst.
      </motion.p>

      <motion.div className="onb-overall" variants={item}>
        <span
          className="onb-progress-bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done}
          aria-label="Gesamtfortschritt"
        >
          <span
            className="onb-progress-fill"
            style={{ transform: `scaleX(${ratio})` }}
          />
        </span>
        <span className="onb-progress-label">
          {done} von {total} erledigt
        </span>
      </motion.div>
    </motion.header>
  );
}
