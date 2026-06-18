import { h } from "preact";

export function Hero() {
  return (
    <section>
      <div className="header-title" id="header-title">
        <h1>
          Bonjour, je suis Florian Amiot,
          <br /> développeur full-stack.
        </h1>
        <img src="/assets/img/logo-white.png" alt="Mon logo" />
      </div>
    </section>
  );
}
