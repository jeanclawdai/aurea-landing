import Hero from "./sections/Hero";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Contact />
    </main>
  );
}
