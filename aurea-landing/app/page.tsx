import Hero from "./sections/Hero";
import Features from "./sections/Features";
import BeforeAfter from "./sections/BeforeAfter";
import SocialProof from "./sections/BentoGrid";
import HowItWorks from "./sections/HowItWorks";
import Integrations from "./sections/Integrations";
import Comparison from "./sections/Comparison";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import MobileCTA from "./components/MobileCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <BeforeAfter />
      <SocialProof />
      <HowItWorks />
      <Integrations />
      <Comparison />
      <Pricing />
      <Contact />
      <MobileCTA />
      <Footer />
    </main>
  );
}
