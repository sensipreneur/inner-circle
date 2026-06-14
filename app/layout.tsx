import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title:
    "Sensipreneure Inner Circle — Dein Weg in die Selbstständigkeit",
  description:
    "Der hochsensible & neurodivergente Weg in die Selbstständigkeit. In vier Schritten zu einem Business, das die Miete zahlt, wertschätzende Kund:innen anzieht und sich leicht anfühlt.",
  openGraph: {
    title:
      "Sensipreneure Inner Circle — Dein Weg in die Selbstständigkeit",
    description:
      "Der hochsensible & neurodivergente Weg in die Selbstständigkeit. In vier Schritten zu einem Business, das die Miete zahlt, wertschätzende Kund:innen anzieht und sich leicht anfühlt.",
    locale: "de_DE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1714",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
