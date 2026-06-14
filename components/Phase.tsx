"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { OnboardingPhase } from "@/data/onboarding";
import { useProgress } from "@/hooks/useProgress";
import Task from "./Task";

interface Props {
  phase: OnboardingPhase;
}

export default function Phase({ phase }: Props) {
  const reduce = useReducedMotion();
  const { countDone } = useProgress();

  const ids = phase.tasks.map((task) => task.id);
  const done = countDone(ids);
  const total = ids.length;
  const ratio = total > 0 ? done / total : 0;

  const variants = reduce
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
    <motion.section
      className="onb-phase"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <header className="onb-phase-head">
        <p className="eyebrow onb-phase-eyebrow">{phase.eyebrow}</p>
        <h2 className="font-display onb-phase-title">{phase.title}</h2>

        <div className="onb-phase-progress">
          <span
            className="onb-progress-bar"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={done}
            aria-label={`Fortschritt ${phase.eyebrow}`}
          >
            <span
              className="onb-progress-fill"
              style={{ transform: `scaleX(${ratio})` }}
            />
          </span>
          <span className="onb-progress-label">
            {done} von {total} erledigt
          </span>
        </div>
      </header>

      <div className="onb-tasks">
        {phase.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </motion.section>
  );
}
