"use client";

import { DefaultProps } from "@/utils/components";
import { clx } from "@/utils/styles";
import { Button } from "../ui/button/button";
import { useState } from "react";
import Link from "next/link";
import { ENTERPRISE_PLANS, EnterprisePlan } from "@/constants/pricing";

export interface EnterprisePlansSectionProps extends DefaultProps {
  title?: string;
  subtitle?: string;
  plans?: EnterprisePlan[];
  id?: string;
}

export function EnterprisePlansSection({
  className,
  title = "Enterprise plans for higher volumes.",
  subtitle = "All the benefits. Plus priority support & S.A.",
  plans = ENTERPRISE_PLANS,
  id,
}: EnterprisePlansSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

  const handlePlanSelect = (planId: string) => {
    console.log(`Selected ${billingPeriod} plan: ${planId}`);
  };

  const handleViewExample = (planId: string) => {
    console.log(`View example for: ${planId}`);
  };

  return (
    <section
      id={id}
      className={clx(
        "w-full py-16 sm:py-20 lg:py-24 bg-white",
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

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <Button
              onClick={() => setBillingPeriod("monthly")}
              flavor={billingPeriod === "monthly" ? "raised" : "outline"}
              color={billingPeriod === "monthly" ? "primary" : "none"}
              size="sm"
              className="px-6 py-2 rounded-md text-sm font-medium"
            >
              Monthly
            </Button>
            <Button
              onClick={() => setBillingPeriod("yearly")}
              flavor={billingPeriod === "yearly" ? "raised" : "outline"}
              color={billingPeriod === "yearly" ? "primary" : "none"}
              size="sm"
              className="px-6 py-2 rounded-md text-sm font-medium"
            >
              Yearly
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const planData = plan[billingPeriod];
            const periodLabel = billingPeriod === "monthly" ? "month" : "year";
            
            return (
              <div
                key={plan.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      Starting {planData.seats}
                    </div>
                    <div className="text-sm text-gray-600">
                      used seats per {periodLabel}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-lg font-semibold text-blue-600 mb-1">
                      At {planData.pricePerSeat}
                    </div>
                    <div className="text-sm text-gray-500">
                      per used seat
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => handlePlanSelect(plan.id)}
                      flavor="raised"
                      color="primary"
                      fullWidth
                    >
                      {billingPeriod === "monthly" ? "Monthly" : "Yearly"} {plan.name}
                    </Button>
                    
                    <Button
                      onClick={() => handleViewExample(plan.id)}
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
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button
              flavor="raised"
              color="primary"
              size="lg"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}