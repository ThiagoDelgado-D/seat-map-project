"use client";

import { Button } from "../ui/button/button";

interface BillingToggleProps {
    billingPeriod: "monthly" | "yearly";
    onBillingPeriodChange: (period: "monthly" | "yearly") => void;
}

export function BillingToggle({
    billingPeriod,
    onBillingPeriodChange
}: BillingToggleProps) {
    return (
        <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
                <Button
                    onClick={() => onBillingPeriodChange("monthly")}
                    flavor={billingPeriod === "monthly" ? "raised" : "outline"}
                    color={billingPeriod === "monthly" ? "primary" : "none"}
                    size="sm"
                    className="px-6 py-2 rounded-md text-sm font-medium"
                >
                    Monthly
                </Button>
                <Button
                    onClick={() => onBillingPeriodChange("yearly")}
                    flavor={billingPeriod === "yearly" ? "raised" : "outline"}
                    color={billingPeriod === "yearly" ? "primary" : "none"}
                    size="sm"
                    className="px-6 py-2 rounded-md text-sm font-medium"
                >
                    Yearly
                </Button>
            </div>
        </div>
    );
}