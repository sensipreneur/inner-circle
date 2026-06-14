"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { OnboardingTask } from "@/data/onboarding";
import { useProgress } from "@/hooks/useProgress";

interface Props {
  task: OnboardingTask;
}

export default function Task({ task }: Props) {
  const reduce = useReducedMotion();
  const { isDone, toggle } = useProgress();
  const done = isDone(task.id);

  const labelId = `task-label-${task.id}`;

  return (
    <div className="onb-task" data-done={done}>
      <button
        type="button"
        role="checkbox"
        aria-checked={done}
        aria-labelledby={labelId}
        className="onb-check"
        onClick={() => toggle(task.id)}
      >
        <motion.span
          className="onb-check-box"
          data-done={done}
          animate={
            reduce
              ? undefined
              : done
                ? { scale: [1, 0.82, 1.08, 1] }
                : { scale: 1 }
          }
          transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <svg
            className="onb-check-mark"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M5 12.5l4.2 4.3L19 7"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={false}
              animate={{ pathLength: done ? 1 : 0, opacity: done ? 1 : 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { pathLength: { duration: 0.3, ease: "easeOut" }, opacity: { duration: 0.15 } }
              }
            />
          </svg>
        </motion.span>
      </button>

      <div className="onb-task-body">
        <h3 id={labelId} className="onb-task-title">
          {task.title}
        </h3>
        <p className="onb-task-text">{task.text}</p>

        {task.spaces && (
          <ul className="onb-spaces">
            {task.spaces.map((space) => (
              <li key={space.name} className="onb-space">
                <span className="onb-space-icon" aria-hidden="true">
                  {space.icon}
                </span>
                <span className="onb-space-copy">
                  {space.href ? (
                    <a
                      className="onb-space-name onb-space-link"
                      href={space.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {space.name}
                    </a>
                  ) : (
                    <span className="onb-space-name">{space.name}</span>
                  )}
                  <span className="onb-space-text">{space.text}</span>
                </span>
              </li>
            ))}
          </ul>
        )}

        {task.link && (
          <a
            className="onb-task-link"
            href={task.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {task.link.label}
          </a>
        )}
      </div>
    </div>
  );
}
