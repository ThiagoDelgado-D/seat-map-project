"use client";

import { DefaultProps } from "@/utils/components";
import { clx } from "@/utils/styles";
import { useState } from "react";
import { PricingCard } from "./pricing-card";
import { BillingToggle } from "./billing-toggle";
import { BASE_PLANS, PricingPlan } from "@/constants/pricing";

export interface PricingCardsSectionProps extends DefaultProps {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  onPlanSelect?: (planId: string, billingPeriod: "monthly" | "yearly") => void;
  onViewExample?: (planId: string) => void;
  id?: string;
}

export function PricingCardsSection({
  className,
  title = "Get started today",
  subtitle = "90-day testing trial. Unlimited events. White label embeds",
  plans,
  onPlanSelect = () => {},
  onViewExample = () => {},
  id,
}: PricingCardsSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  
  const displayPlans = plans || BASE_PLANS[billingPeriod];

  const handlePlanSelect = (planId: string) => {
    onPlanSelect(planId, billingPeriod);
  };

  const handleViewExample = (planId: string) => {
    onViewExample(planId);
  };

  return (
    <section
      id={id}
      className={clx(
        "w-full py-16 sm:py-20 lg:py-24 bg-gray-50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <BillingToggle
          billingPeriod={billingPeriod}
          onBillingPeriodChange={setBillingPeriod}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayPlans.map((plan) => (
            <PricingCard
              key={`${plan.id}-${billingPeriod}`}
              plan={plan}
              billingPeriod={billingPeriod}
              onSelectPlan={handlePlanSelect}
              onViewExample={handleViewExample}
            />
          ))}
        </div>
      </div>
    </section>
  );
}