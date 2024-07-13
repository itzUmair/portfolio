import About from "@/components/About";
import Hero from "@/components/Hero";
import Spacer from "@/components/Spacer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Spacer />
      <About />
      <Spacer />
    </main>
  );
}