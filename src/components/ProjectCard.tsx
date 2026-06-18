import { h } from "preact";

interface Props {
  title: string;
  img?: string;
}

export function ProjectCard({ title, img }: Props) {
  return (
    <article className="project-card">
      {img && <img src={img} alt="" />}
      <h3>{title}</h3>
    </article>
  );
}
