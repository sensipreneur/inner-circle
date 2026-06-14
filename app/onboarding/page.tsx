import type { Metadata } from "next";
import OnboardingHero from "@/components/OnboardingHero";
import Phase from "@/components/Phase";
import CompletionCard from "@/components/CompletionCard";
import { phases } from "@/data/onboarding";

export const metadata: Metadata = {
  title: "Willkommen im Inner Circle — Dein Onboarding",
  description:
    "Dein Guide für die ersten Wochen im Sensipreneure Inner Circle. So startest du rein, das passiert in den ersten Wochen.",
  // Nicht von der Startseite verlinkt — soll auch nicht indexiert werden.
  robots: { index: false, follow: false },
};

export default function OnboardingPage() {
  return (
    <main className="onb">
      <div className="onb-inner">
        <OnboardingHero />

        <div className="onb-phases">
          {phases.map((phase) => (
            <Phase key={phase.eyebrow} phase={phase} />
          ))}

          <CompletionCard />
        </div>
      </div>
    </main>
  );
}
