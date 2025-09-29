"use client";

import { clx } from "@/utils/styles";
import { Button } from "../ui/button/button";
import { PricingPlan } from "@/constants/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: "monthly" | "yearly";
  onSelectPlan: (planId: string) => void;
  onViewExample: (planId: string) => void;
}

export function PricingCard({
  plan,
  billingPeriod,
  onSelectPlan,
  onViewExample
}: PricingCardProps) {
  const periodLabel = billingPeriod === "monthly" ? "month" : "year";

  return (
    <div
      className={clx(
        "relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-lg",
        plan.featured
          ? "border-blue-500 shadow-lg scale-105"
          : "border-gray-200 shadow-md"
      )}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {plan.name}
          </h3>
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-4xl font-bold text-gray-900">
              {plan.price}
            </span>
            <span className="text-gray-600">
              /{periodLabel}
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            {plan.description}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {plan.usedSeats.toLocaleString("en-US")}
            </div>
            <div className="text-sm text-gray-600">
              used seats per {periodLabel}
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="text-sm text-gray-600 mb-1">
            per additional used seat
          </div>
          <div className="text-2xl font-bold text-blue-600">
            ${plan.additionalSeatCost}
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => onSelectPlan(plan.id)}
            flavor="raised"
            color={plan.featured ? "primary" : "secondary"}
            fullWidth
            size="md"
          >
            {billingPeriod === "monthly"
              ? `Monthly ${plan.name}`
              : `Yearly ${plan.name}`
            }
          </Button>

          <Button
            onClick={() => onViewExample(plan.id)}
            flavor="clear"
            color="primary"
            fullWidth
            size="sm"
          >
            See example →
          </Button>
        </div>
      </div>
    </div>
  );
}