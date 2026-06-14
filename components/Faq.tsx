"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  {
    q: "Bin ich hier richtig, wenn ich noch ganz am Anfang stehe?",
    a: "Ja. Stufe 0 ist genau für dich. Du musst noch nicht wissen, was du anbietest. Wir helfen dir, deine Richtung zu finden, bevor du dich in den Aufbau stürzt.",
  },
  {
    q: "Wie viel Zeit sollte ich investieren?",
    a: "So viel oder so wenig, wie für dich passt. Es gibt keinen Anwesenheitszwang. Du kannst aktiv mitmachen oder erstmal still mitlesen. Beides ist völlig okay.",
  },
  {
    q: "Ich zeige mich ungern. Ist das ein Problem?",
    a: "Überhaupt nicht. Niemand muss sich zeigen, bevor es sich sicher anfühlt. Der Inner Circle ist ein geschützter Übungsraum, in dem du dein Tempo selbst bestimmst. Auch in den gemeinsamen Calls kannst du erstmal nur als Zuschauer:in teilnehmen und dich langsam rantasten.",
  },
  {
    q: "Auf welcher Plattform läuft das?",
    a: "Auf Circle, komplett getrennt von Social Media. Es gibt auch eine App, damit du unterwegs nichts verpasst.",
  },
  {
    q: "Wie lange binde ich mich?",
    a: "Nur für den Zeitraum, den du zahlst. Du wählst monatlich, quartalsweise oder jährlich. Bevor sich dein Abo verlängert, wirst du benachrichtigt, sodass du in Ruhe entscheiden kannst.",
  },
];

export default function Faq() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section id="faq" className="faq">
      <motion.div
        className="faq-inner"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="font-display faq-title">Häufige Fragen</h2>

        <ul className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <li className="faq-item" key={faq.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon" data-open={isOpen} aria-hidden="true">
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      className="faq-a"
                      initial={
                        reduce
                          ? { opacity: 1, height: "auto" }
                          : { opacity: 0, height: 0 }
                      }
                      animate={{ opacity: 1, height: "auto" }}
                      exit={
                        reduce ? { opacity: 0 } : { opacity: 0, height: 0 }
                      }
                      transition={{
                        height: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] },
                        opacity: { duration: 0.3 },
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
