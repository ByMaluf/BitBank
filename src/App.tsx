import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero, { type HeroVariant } from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Cashback from "@/components/sections/Cashback";
import FounderLetter from "@/components/sections/FounderLetter";
import Features from "@/components/sections/Features";
import ApiSection from "@/components/sections/ApiSection";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Quickstart from "@/components/sections/Quickstart";
import Faq from "@/components/sections/Faq";
import Waitlist from "@/components/sections/Waitlist";

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
