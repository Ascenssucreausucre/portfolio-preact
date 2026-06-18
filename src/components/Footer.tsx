import { h } from "preact";

export function Footer() {
  return (
    <footer>
      <div className="site-footer">
        <p>
          © {new Date().getFullYear()} Florian Amiot — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
