import { CTASection, FeatureSection } from "@/components/home";
import { FAQSection } from "@/components/pricing/faq-section";
import { PricingCardsSection } from "@/components/pricing/pricing-cards-section";
import { EnterprisePlansSection } from "@/components/pricing/enterprise-plans-section";
import { 
  PRICING_FEATURES, 
  FLEXIBILITY_FEATURES, 
  PRICING_FAQS 
} from "@/constants/pricing";

export default function Pricing() {
  return (
    <main className="min-h-screen">
      <PricingCardsSection id="plans" />
      <EnterprisePlansSection id="enterprise" />
      
      <FeatureSection
        id="value-pricing"
        title="Value Based Pricing"
        subtitle="Pay only for what you use"
        imageUrl="/value-pricing.png"
        features={PRICING_FEATURES}
        variant="dark"
        imagePosition="right"
        ctaText="Start Free Trial"
      />

      <FeatureSection
        id="flexibility"
        title="Full Flexibility"
        subtitle="Change your plan at any time"
        imageUrl="/flexibility.png"
        features={FLEXIBILITY_FEATURES}
        variant="default"
        imagePosition="left"
        ctaText="See Plan Options"
      />

      <FAQSection
        id="faq"
        title="Frequently Asked Questions"
        questions={PRICING_FAQS}
      />

      <CTASection
        id="get-started"
        title="Ready to get started?"
        subtitle="Start with our free plan and upgrade when you're ready."
        planName="Free plan includes 100 seats/month"
        ctaText="Sign up for free"
        variant="default"
      />
    </main>
  );
}