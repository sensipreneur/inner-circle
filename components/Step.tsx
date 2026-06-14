"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { Step as StepData } from "@/data/steps";

interface Props {
  step: StepData;
  index: number;
}

const iconProps = {
  className: "step-box-icon",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function ChallengeIcon() {
  return (
    <svg {...iconProps}>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg {...iconProps}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function Step({ step, index }: Props) {
  const reduce = useReducedMotion();
  const rowRef = useRef<HTMLDivElement>(null);
  // Dot leuchtet auf, sobald die Stufe die Bildschirmmitte erreicht
  // (margin-basiert, damit es auch bei hohen Karten zuverlässig auslöst)
  const dotInView = useInView(rowRef, { margin: "-45% 0px -45% 0px" });

  const side = index % 2 === 0 ? "left" : "right";

  const rowVariants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
        },
      };

  return (
    <motion.div
      ref={rowRef}
      className="ms-row"
      data-side={side}
      variants={rowVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <span
        className={`ms-dot${dotInView ? " is-active" : ""}`}
        aria-hidden="true"
      >
        <span className="ms-dot-core" />
      </span>

      <div className="ms-content">
        <div className="ms-head ms-head--static">
          <span className="eyebrow ms-eyebrow">{step.eyebrow}</span>
          <span className="font-display ms-title">{step.title}</span>
        </div>

        <div className="ms-card step-boxes">
          <div className="step-box">
            <div className="step-box-head">
              <ChallengeIcon />
              <span className="step-label">Die Herausforderung</span>
            </div>
            <p className="step-text">{step.challenge}</p>
            <ul className="step-list">
              {step.challengeQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>

          <div className="step-box step-box--community">
            <div className="step-box-head">
              <CommunityIcon />
              <span className="step-label">Wie dir die Mitgliedschaft hilft</span>
            </div>
            <ul className="step-list">
              {step.community.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
