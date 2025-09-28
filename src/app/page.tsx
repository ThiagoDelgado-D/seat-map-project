import { CTASection, FeatureSection, HeroSection, LogosSection, StatsSection } from "@/components/home";
import { features_section, renderer_features } from "@/constants/features";
import { TRUSTED_COMPANIES } from "@/constants/logos";
import { SEAT_MAP_STATS } from "@/constants/stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection
        stats={SEAT_MAP_STATS}
        title="Seats.io in numbers"
      />
      <LogosSection
        logos={TRUSTED_COMPANIES}
        title="They trust us."
        animationSpeed="normal"
      />
      <FeatureSection
        id="features"
        title="Floor plan designer"
        subtitle="Design beautiful charts."
        imageUrl="/sit-manager.png"
        features={features_section}
        ctaText="Try the Editor"
      />
      <FeatureSection
        id="renderer"
        title="Floor plan renderer"
        subtitle="Outstanding ticket buying experience."
        imageUrl="/renderer@2x.png"
        features={renderer_features}
        variant="default"
        imagePosition="center"
        ctaText="See Live Demo"
      />
      <CTASection
        id="pricing"
        title="Start integrating today."
        subtitle="Free testing account with technical support for integration."
        planName="Pricing plans"
        ctaText="Sign up"
        variant="default"
      />
    </>
  );
}