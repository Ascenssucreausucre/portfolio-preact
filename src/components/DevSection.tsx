import { h } from "preact";
import { ProjectCard } from "./ProjectCard";

export function DevSection() {
  return (
    <section id="dev">
      <h2>Développement</h2>
      <div className="projects">
        <ProjectCard
          title="URL Shortener"
          img="/assets/img/url-shortener.webp"
        />
        <ProjectCard title="Guess What" img="/assets/img/guess-what.webp" />
      </div>
    </section>
  );
}
