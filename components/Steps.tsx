"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { steps } from "@/data/steps";
import Step from "./Step";

export default function Steps() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  // Die terracotta-Linie „wächst" mit dem Scroll-Fortschritt der Strecke
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.55", "end 0.65"],
  });

  const growth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  });

  const intro = useReducedMotion()
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
    <section id="schritte" className="timeline">
      <motion.div
        className="steps-intro"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.h2 className="font-display steps-intro-title" variants={intro}>
          Die 4 Stufen deiner Solo-Selbstständigkeit
        </motion.h2>
      </motion.div>

      <div ref={trackRef} className="timeline-track">
        <div className="timeline-line-area">
          <span className="timeline-line-base" aria-hidden="true" />
          <motion.span
            className="timeline-line-grow"
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : growth }}
          />

          <div className="timeline-milestones">
            {steps.map((step, index) => (
              <Step key={step.eyebrow} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
