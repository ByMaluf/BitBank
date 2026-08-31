import Header from "./components/Header";
import Hero, { type HeroVariant } from "./components/Hero";
import Stats from "./components/Stats";
import Cashback from "./components/Cashback";
import FounderLetter from "./components/FounderLetter";
import Features from "./components/Features";
import ApiSection from "./components/ApiSection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Quickstart from "./components/Quickstart";
import Faq from "./components/Faq";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

/** Equivalentes aos "tweaks" da versão HTML. */
const config: {
  heroVariant: HeroVariant;
  defaultAnnual: boolean;
  showTestimonials: boolean;
} = {
  heroVariant: "split",
  defaultAnnual: false,
  showTestimonials: true,
};

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink-950">
      <Header />
      <Hero variant={config.heroVariant} />
      <Stats />
      <Cashback />
      <FounderLetter />
      <Features />
      <ApiSection />
      <Pricing defaultAnnual={config.defaultAnnual} />
      {config.showTestimonials && <Testimonials />}
      <Quickstart />
      <Faq />
      <Waitlist />
      <Footer />
    </div>
  );
}
