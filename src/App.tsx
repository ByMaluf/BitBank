import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero, { type HeroVariant } from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Cashback from "@/components/sections/Cashback";
import ApiSection from "@/components/sections/ApiSection";
import FounderLetter from "@/components/sections/FounderLetter";
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
      <Features />
      <Cashback />
      <ApiSection />
      <FounderLetter />
      <Pricing defaultAnnual={config.defaultAnnual} />
      {config.showTestimonials && <Testimonials />}
      <Quickstart />
      <Faq />
      <Waitlist />
      <Footer />
    </div>
  );
}
