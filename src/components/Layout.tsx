import { h } from "preact";
import type { FunctionalComponent, ComponentChildren } from "preact";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {
  children?: ComponentChildren;
}

export const Layout: FunctionalComponent<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
