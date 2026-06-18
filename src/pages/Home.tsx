import { h } from "preact";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { DevSection } from "../components/DevSection";
import { DesignSection } from "../components/DesignSection";
import { ContactSection } from "../components/ContactSection";

export function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <DevSection />
      <DesignSection />
      <ContactSection />
    </Layout>
  );
}
