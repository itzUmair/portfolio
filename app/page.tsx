import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Spacer from "@/components/Spacer";
import TopProjects from "@/components/TopProjects";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Spacer />
      <About />
      <Spacer />
      <TopProjects />
      <Spacer />
      <Contact />
      <Spacer />
    </main>
  );
}
