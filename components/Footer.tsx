"use client";

import { useReducedMotion } from "framer-motion";

export default function Footer() {
  const reduce = useReducedMotion();

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="footer">
      <span className="footer-mark" aria-hidden="true" />
      <button type="button" className="footer-top" onClick={toTop}>
        Nach oben ↑
      </button>
      <nav className="footer-legal">
        <a
          className="footer-link"
          href="https://readymag.website/u1519551566/6345937/2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Impressum
        </a>
        <a
          className="footer-link"
          href="https://readymag.website/u1519551566/6345937/3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutz
        </a>
      </nav>
    </footer>
  );
}
