/* =========================================================
   Startseite — Der hochsensible Weg in die Selbstständigkeit
   Die Grundvoraussetzungen + die 4 Stufen.
   ========================================================= */

export const voraussetzungen: string[] = [
  "Sie zahlt die Miete.",
  "Sie zieht wertschätzende Kund:innen an.",
  "Sie fühlt sich selbstwirksam und leicht an.",
];

export interface Step {
  /** Eyebrow-Label, z.B. "Stufe 0" */
  eyebrow: string;
  /** Titel in Playfair Display */
  title: string;
  /** Intro-Text der Herausforderung (leitet zu den Fragen über) */
  challenge: string;
  /** Die häufigsten Fragen in dieser Stufe (Bulletpoints) */
  challengeQuestions: string[];
  /** Benefits als Bulletpoints */
  community: string[];
}

export const steps: Step[] = [
  {
    eyebrow: "Stufe 0",
    title: "Lost & Ambitioniert",
    challenge:
      "Du weißt, dass du dich selbstständig machen willst. Du weißt nur noch nicht, womit. Der erste Schritt ist immer der Schwierigste. Diese Fragen gehen dir durch den Kopf:",
    challengeQuestions: [
      "Womit könnte ich mich überhaupt selbstständig machen?",
      "Reicht das, was ich kann, um damit Geld zu verdienen?",
      "Was, wenn ich mich für das Falsche entscheide?",
    ],
    community: [
      "Ein sicherer Raum für Experimente, Resonanz und Feedback für dein Wachstum.",
      "Klarheit über deinen nächsten Schritt beim Community Wochenstart",
      "Den Weg gemeinsam mit Menschen gehen, die am gleichen Punkt stehen wie du.",
    ],
  },
  {
    eyebrow: "Stufe 1",
    title: "Fundament",
    challenge:
      "Die grobe Richtung ist klar. Aber der Weg fühlt sich an wie eine wackelige Hängebrücke über einer tiefen Schlucht. Dich beschäftigen folgende Fragen:",
    challengeQuestions: [
      "Wie behalte ich bei Steuern, Marketing und Orga den Überblick?",
      "Wie gehe ich mit Selbstzweifeln und Antriebslosigkeit um?",
      "Wie baue ich einen Rhythmus auf, der mich nicht überfordert?",
    ],
    community: [
      "Workshops & Rituale für Alltagsstruktur und als Anker für schlechte Tage",
      "Accountability-Gruppen, die dich auffangen und anfeuern",
      "Gemeinsames Erfolge feiern und uns gegenseitig zelebrieren",
    ],
  },
  {
    eyebrow: "Stufe 2",
    title: "Dein Premium-Angebot",
    challenge:
      "Du weißt, was du anbieten möchtest. Aber nicht, wie du davon deine Miete zahlen sollst. Du hast diese Fragen:",
    challengeQuestions: [
      "Was darf ich für mein Angebot überhaupt verlangen?",
      "Wie verkaufe ich, ohne mich aufdringlich zu fühlen?",
      "Wie schütze ich mich vor Kund:innen, die mich auslaugen?",
    ],
    community: [
      "Regelmäßige Workshops, in denen du dein Angebot strukturierst und übst, es zu pitchen.",
      "Feedback von Andrew und den anderen",
      "Einblick, was bei den anderen schon funktioniert",
    ],
  },
  {
    eyebrow: "Stufe 3",
    title: "Deine einzigartige Marke",
    challenge:
      "Richtung klar, Fundament steht, Angebot ist da. Jetzt fehlt nur noch, dass die richtigen Menschen dich finden. Aber Sichtbarkeit fühlt sich überwältigend an. Diese Fragen halten dich zurück:",
    challengeQuestions: [
      "Wie zeige ich mich trotz Angst vor Sichtbarkeit?",
      "Wie finde ich mein einzigartiges Thema, für das ich brenne?",
      "Wie mache ich Content mit Spaß und Leichtigkeit?",
    ],
    community: [
      "Ein geschützter Raum, wo du Content übst und ehrliches Feedback bekommst",
      "Regelmäßige Live-Sessions, um deine Marke zu schärfen",
      "Gemeinsame Content Challenges für authentische Sichtbarkeit, die sich leicht anfühlt",
    ],
  },
];
