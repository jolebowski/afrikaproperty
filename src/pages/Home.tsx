import { DestinationsSection } from "../components/home/DestinationsSection";
import { FAQSection } from "../components/home/FAQSection";
import { FeaturedProperties } from "../components/home/FeaturedProperties";
import { Hero } from "../components/home/Hero";
import { InteractiveMap } from "../components/home/InteractiveMap";
import { InvestSection } from "../components/home/InvestSection";
import { ProjectContactBanner } from "../components/home/ProjectContactBanner";
import { PromoterCTA } from "../components/home/PromoterCTA";
import { VideoPresentation } from "../components/home/VideoPresentation";

export function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <PromoterCTA />
      <InvestSection />
      <VideoPresentation />
      <InteractiveMap />
      <DestinationsSection />
      <FAQSection />
      <ProjectContactBanner />
    </main>
  );
}
