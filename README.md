# Sensipreneure Inner Circle — Interaktive Erfolgsreise

Eine interaktive Single-Page-Website für den **Sensipreneure Inner Circle** — die
Community für hochsensible Selbstständige. Die Seite erzählt eine beispielhafte
Erfolgsreise als scroll-getriebene Experience: Der Besucher scrollt durch
9 Meilensteine entlang einer Timeline, die aus einer sich drehenden Spirale wächst.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Framer Motion** — scroll-getriebene Animationen (`useScroll`, `useTransform`, `useSpring`)
- **Tailwind CSS** — Utility-Klassen, ergänzt durch Custom CSS für die Kernästhetik
- **Google Fonts** via `next/font` — Playfair Display (Display) + DM Sans (Body)

## Ästhetik

Warm, analog, intim — ein Notizbuch bei Kerzenlicht. Dunkles Espresso, Cream-Text,
Terracotta-Akzente, fixierte analoge Hintergrundtextur (`/public/background.jpg`)
mit lebendigem Filmkorn-Overlay.

| Token | Wert |
| --- | --- |
| `--bg` | `#1a1714` |
| `--bg-card` | `#242019` |
| `--text` | `#e6e5d0` |
| `--accent` | `#b87341` |

## Lokal starten

```bash
npm install
npm run dev
```

Dann [http://localhost:3000](http://localhost:3000) öffnen.

## Build

```bash
npm run build
npm run start
```

## Struktur

```
app/
  layout.tsx     — Root Layout, Fonts, Metadata
  page.tsx       — komponiert Hero · Timeline · CTA · Footer
  globals.css    — CSS Custom Properties, Hintergrund, Layout
components/
  Hero.tsx       — Vollbild-Hero mit staggered Fade-in
  Spiral.tsx     — SVG-Spirale, dreht & zeichnet sich beim Scrollen
  Timeline.tsx   — Container: wachsende Linie + Accordion-State
  Milestone.tsx  — einzelner, expandierbarer Meilenstein
  CTA.tsx        — Call-to-Action
  Footer.tsx     — Footer
data/
  milestones.ts  — die 9 Meilenstein-Texte
public/
  background.jpg — analoge Hintergrundtextur
```

## Accessibility

- `prefers-reduced-motion` wird respektiert (Animationen werden deaktiviert)
- Tap-Targets ≥ 44px, sichtbarer Fokus-Ring
- Semantisches Markup, `aria-expanded`/`aria-controls` an den Meilensteinen

## Deployment

GitHub → Vercel. Repo importieren, Framework wird als Next.js erkannt, keine
zusätzliche Konfiguration nötig.

## Bewerbung

Der CTA verlinkt auf das Bewerbungsformular: <https://tally.so/r/wMrdg9>
