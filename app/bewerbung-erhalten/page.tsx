import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bewerbung abgeschickt",
  robots: { index: false, follow: false },
};

export default function BewerbungErhalten() {
  return (
    <main className="thanks">
      <div className="thanks-inner">
        <h1 className="font-display thanks-title">Bewerbung abgeschickt!</h1>
        <p className="thanks-text">
          Danke für deine Bewerbung. :) Ich melde mich bei dir, sobald ich
          geprüft habe, ob die Community zu dir passt. Gib mir dafür 1–3 Tage
          Zeit.
        </p>
        <p className="thanks-note">
          <strong>Wichtig:</strong> Prüfe auch deinen Spam-Ordner oder füge meine
          E-Mail-Adresse (
          <a href="mailto:andrew@goldkugel-ghostwriting.de">
            andrew@goldkugel-ghostwriting.de
          </a>
          ) zu deinen Kontakten hinzu, damit die E-Mail bei dir ankommt.
        </p>
      </div>
    </main>
  );
}
