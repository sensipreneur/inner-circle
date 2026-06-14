/* =========================================================
   Sensipreneure Inner Circle — Onboarding-Inhalt
   Phasen, Aufgaben und der Abschluss-Block (Monat 3).
   ========================================================= */

/** Ein Space-Eintrag innerhalb der „Ankommen"-Aufgabe (keine eigene Checkbox). */
export interface SpaceItem {
  icon: string;
  name: string;
  text: string;
  href?: string;
}

/** Ein externer Link, der zu einer Aufgabe gehört (öffnet in neuem Tab). */
export interface TaskLink {
  href: string;
  label: string;
}

/** Eine abhakbare Aufgabe. */
export interface OnboardingTask {
  /** Stabile ID — Schlüssel im localStorage-Fortschritt. */
  id: string;
  title: string;
  text: string;
  link?: TaskLink;
  spaces?: SpaceItem[];
}

/** Eine Phase (Tag 1, Woche 1, …) mit ihren Aufgaben. */
export interface OnboardingPhase {
  eyebrow: string;
  title: string;
  tasks: OnboardingTask[];
}

/** Das Fortschrittsmessungs-Formular (zweimal verlinkt). */
const fortschrittsformular: TaskLink = {
  href: "https://forms.gle/iDyLbBizfzx64oVk8",
  label: "Zum Formular →",
};

export const phases: OnboardingPhase[] = [
  {
    eyebrow: "Tag 1",
    title: "Ankommen & einrichten",
    tasks: [
      {
        id: "tag1-profil",
        title: "Profil-Check",
        text: "Ein Profilbild, Beschreibungstext und Links zu deinen Socials macht es leichter für die anderen, sich mit dir zu vernetzen. Klicke dazu in der Community oben rechts auf dein Profilbild und auf „Edit Profile“.",
      },
      {
        id: "tag1-standort",
        title: "Standortbestimmung",
        text: "Andrew meldet sich im Laufe des Tages persönlich für eine kurze Standortbestimmung bei dir. Das ist wichtig, damit du einem passenden Accountability-Trio zugeordnet wirst.",
      },
      {
        id: "tag1-app",
        title: "Circle-App herunterladen",
        text: "Damit wird es viel einfacher mit der Community zu interagieren. Du verpasst keine neuen Nachrichten und Posts mehr.",
        link: { href: "https://circle.so/mobile", label: "Zur Circle-App →" },
      },
      {
        id: "tag1-ankommen",
        title: "Ankommen",
        text: "Lass dir Zeit, dich durch die einzelnen Spaces durchzuklicken. Hier eine kurze Übersicht:",
        spaces: [
          {
            icon: "👋",
            name: "Stell dich vor",
            text: "Hier stellen sich die Inner Circle Mitglieder vor. Scroll doch mal durch und schau, mit wem du resonierst.",
            href: "https://sensipreneure.circle.so/c/stell-dich-vor-466d69/",
          },
          {
            icon: "🪶",
            name: "Inner Circle Chat",
            text: "Unsere Haupt-Austauschplattform. Hast du Fragen, Neuigkeiten, Herausforderungen oder einfach Lust auf Austausch? Schreib einfach hier rein.",
            href: "https://sensipreneure.circle.so/c/inner-circle-chat-4691f3/",
          },
          {
            icon: "🗓️",
            name: "Workshops & Rituale",
            text: "Hier findest du alle Inner Circle Events. Schau doch mal rein und meld dich direkt für Events an, die dir zusagen.",
            href: "https://sensipreneure.circle.so/c/workshops-rituale/",
          },
          {
            icon: "🏆",
            name: "Erfolge & Wins",
            text: "Deine erste Kundin, dein erster TikTok-Post, eine schwierige Aufgabe die du gemeistert hast – egal wie groß oder klein, teile alle deine Erfolge hier und lass dich feiern (und feuer damit die anderen an!)",
            href: "https://sensipreneure.circle.so/c/erfolge-wins/",
          },
          {
            icon: "🎬",
            name: "SensiTok",
            text: "Hier üben wir Content. Teile deine Videos, Carousels und Text-Posts hier und erhalte Feedback und Ermutigung von den anderen.",
            href: "https://sensipreneure.circle.so/c/sensitok/",
          },
          {
            icon: "👥",
            name: "Co-Working",
            text: "Body-Doubling und Co-Regulation wirken Wunder bei schwierigen Aufgaben. Stelle hier Co-Working Termine ein und lade die anderen Mitglieder ein, mitzumachen.",
            href: "https://sensipreneure.circle.so/c/co-working/",
          },
        ],
      },
    ],
  },
  {
    eyebrow: "Woche 1",
    title: "Reinkommen",
    tasks: [
      {
        id: "woche1-vorstellen",
        title: "Vorstellungspost",
        text: "Schreib einen Vorstellungspost im Stell-Dich-Vor Space. Und kommentiere bei jemand anderem :)",
      },
      {
        id: "woche1-wochenstart",
        title: "Community Wochenstart",
        text: "Nimm an deinem ersten Community Wochenstart teil (montags). Als aktiver Teil oder nur als stille Zuschauer:in, beides ist okay! Hier bekommst du Klarheit darüber, was für diese Woche deine logischen nächsten Schritte sind. Bring Sticky-Notes mit!",
      },
      {
        id: "woche1-fortschritt",
        title: "Fortschrittsmessung",
        text: "Füll das Fortschrittsmessung-Formular aus. Damit du in einem Monat weißt, wie weit du gekommen bist und was als nächstes ansteht.",
        link: fortschrittsformular,
      },
    ],
  },
  {
    eyebrow: "Woche 2–3",
    title: "Rhythmus finden",
    tasks: [
      {
        id: "woche23-workshop",
        title: "Erster Workshop",
        text: "Besuch deinen ersten Workshop. Schau im Workshops & Rituale Space, was als nächstes ansteht, und meld dich an.",
      },
      {
        id: "woche23-sensitok",
        title: "Erstes Content-Piece auf SensiTok",
        text: "Teile dein erstes Content-Piece auf SensiTok. Ein kurzes Video, ein Carousel, ein Text-Post — egal was. Hier geht es ums Üben, nicht ums Performen.",
      },
      {
        id: "woche23-trio",
        title: "Accountability-Trio Kennenlern-Call",
        text: "Mach einen Kennenlern-Call mit deinem Accountability-Trio aus. Ihr entscheidet selbst, wie oft und wie ihr euch trefft.",
      },
    ],
  },
  {
    eyebrow: "Woche 4",
    title: "Erster Monat rum",
    tasks: [
      {
        id: "woche4-fortschritt",
        title: "Fortschrittsmessung #2",
        text: "Füll die Fortschrittsmessung noch einmal aus und schau, was sich in einem Monat getan hat.",
        link: fortschrittsformular,
      },
      {
        id: "woche4-party",
        title: "Sensipreneur-Party",
        text: "Nimm an der monatlichen Sensipreneur-Party teil. Gemeinsam Erfolge feiern, Learnings teilen, Spiele spielen.",
      },
      {
        id: "woche4-andrew",
        title: "Feedback an Andrew",
        text: "Gib Andrew Feedback: Was hilft dir? Was wünschst du dir? Der Inner Circle lebt davon, dass wir ihn gemeinsam formen.",
      },
    ],
  },
  {
    eyebrow: "Monat 2",
    title: "Vertiefen",
    tasks: [
      {
        id: "monat2-coworking",
        title: "Co-Working Session",
        text: "Stelle eine Co-Working-Session ein und lade ein paar andere Mitglieder ein. Body-Doubling und Co-Regulation wirken Wunder.",
      },
      {
        id: "monat2-feedback",
        title: "Feedback geben",
        text: "Gib jemandem auf SensiTok Content-Feedback. Du hilfst damit nicht nur der anderen Person, sondern schärfst auch deinen eigenen Blick.",
      },
      {
        id: "monat2-erfolg",
        title: "Erfolg teilen",
        text: "Teile einen Erfolg im Erfolge & Wins Space. Egal wie klein. Ein abgeschicktes Angebot, ein Gespräch das gut lief, ein Post den du veröffentlicht hast.",
      },
    ],
  },
];

/** Der Abschluss-Block (Monat 3) — bewusst ohne Checkboxen. */
export const completion = {
  eyebrow: "Monat 3",
  title: "Du hast deinen Rhythmus.",
  text: "Die Community hilft dir konsistent ins Tun zu kommen und an schlechten Tagen einen Safe Space zu haben. Ab hier heißt es: Weitermachen, vertiefen, wachsen.",
};

/** Alle abhakbaren Task-IDs (Monat 3 zählt nicht — dort gibt es keine Aufgaben). */
export const allTaskIds: string[] = phases.flatMap((phase) =>
  phase.tasks.map((task) => task.id),
);
