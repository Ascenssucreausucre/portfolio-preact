import { h } from "preact";
import { useEffect } from "preact/hooks";
import { animateGradient } from "../scripts/gradient-anim";

export function Header() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>("nav");

    function onScroll() {
      const { scrollTop } = document.documentElement;
      if (!nav) return;
      if (scrollTop === 0) nav.classList.remove("active");
      else nav.classList.add("active");
    }

    window.addEventListener("scroll", onScroll);
    animateGradient("header-title", "#080866", "#0c084d", "#0c084d");

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav>
        <img src="/assets/img/logo-blue.png" alt="Logo" />
        <div className="links">
          <img src="/assets/img/logo-blue.png" alt="Logo" id="logo" />
          <a href="#apropos">Qui suis‑je ?</a>
          <a href="#dev">Développement</a>
          <a href="#design">Création graphique</a>
          <a href="#contact">Contact</a>
          <a href="/assets/cv.pdf" target="_blank">
            Voir mon CV
          </a>
        </div>
      </nav>
      <div className="waves">
        {Array.from({ length: 5 }).map((_, i) => (
          <img key={i} src="/assets/svg/wave.svg" alt="Vague" />
        ))}
      </div>
      <div className="header-title" id="header-title">
        <h1>
          Bonjour, je suis Florian Amiot,
          <br /> développeur full-stack.
        </h1>
        <img src="/assets/img/logo-white.png" alt="Mon logo" />
      </div>
    </header>
  );
}
