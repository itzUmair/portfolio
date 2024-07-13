import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Spacer from "@/components/Spacer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Spacer />
      <About />
      <Spacer />
      <Contact />
      <Spacer />
    </main>
  );
}