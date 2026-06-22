import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Projects } from "@/components/Projects";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DesignSwitcher } from "@/components/DesignSwitcher";

export default function AuroraPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Projects />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
      <DesignSwitcher current="aurora" />
    </>
  );
}
