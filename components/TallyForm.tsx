"use client";

import { useEffect } from "react";

const FORM_ID = "lbzrXv";
const SRC = `https://tally.so/embed/${FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
const SCRIPT_SRC = "https://tally.so/widgets/embed.js";

type TallyWindow = Window & { Tally?: { loadEmbeds: () => void } };

export default function TallyForm() {
  useEffect(() => {
    const loadEmbeds = () => {
      const tally = (window as TallyWindow).Tally;
      if (tally) {
        tally.loadEmbeds();
        return;
      }
      // Fallback: ohne Skript die src direkt setzen (kein dynamisches Resize)
      document
        .querySelectorAll<HTMLIFrameElement>(
          "iframe[data-tally-src]:not([src])",
        )
        .forEach((el) => {
          el.src = el.dataset.tallySrc as string;
        });
    };

    if ((window as TallyWindow).Tally) {
      loadEmbeds();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", loadEmbeds);
      return () => existing.removeEventListener("load", loadEmbeds);
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.onload = loadEmbeds;
    script.onerror = loadEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="tally-embed">
      <iframe
        data-tally-src={SRC}
        loading="lazy"
        width="100%"
        height="420"
        title="Bewerbung für den Sensipreneure Inner Circle"
      />
    </div>
  );
}
