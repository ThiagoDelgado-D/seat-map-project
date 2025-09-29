export interface EnterprisePlan {
  id: string;
  name: string;
  monthly: {
    seats: string;
    pricePerSeat: string;
  };
  yearly: {
    seats: string;
    pricePerSeat: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  usedSeats: number;
  additionalSeatCost: string;
  featured?: boolean;
}

export const PRICING_FEATURES = [
  {
    id: "value-based",
    text: "Pricing is based on the value we create: the ability for a user to select their seat.",
  },
  {
    id: "pay-per-used",
    text: "Pay per used seat. Pay only when a seat is effectively 'used' - when it is booked, selected, or assigned to a channel.",
  },
  {
    id: "billed-once",
    text: "A seat can only be billed once per event, ensuring fair pricing.",
  },
];

export const FLEXIBILITY_FEATURES = [
  {
    id: "minimum-commitment",
    text: "All plans are based on a commitment of a minimum number of seats to be purchased for a month or year.",
  },
  {
    id: "usage-above-minimum",
    text: "Any usage above the minimum number is charged at the additional used seat price.",
  },
  {
    id: "change-anytime",
    text: "Change your subscription plan at any time with full flexibility.",
  },
];

export const PRICING_FAQS = [
  {
    id: "faq-1",
    question: "How is a 'used seat' defined?",
    answer: "A seat is considered 'used' when it is effectively booked, selected, or assigned to a channel for a performance or event. Each seat is billed only once per event.",
  },
  {
    id: "faq-2",
    question: "Can I change my plan at any time?",
    answer: "Yes, we offer full flexibility. You can change your subscription plan at any time to adapt to your changing needs.",
  },
  {
    id: "faq-3",
    question: "What happens if I use fewer seats than my minimum commitment?",
    answer: "The minimum commitment represents the number of seats you pay for each month or year, regardless of usage. If you use fewer seats, you'll still be billed for the minimum commitment.",
  },
  {
    id: "faq-4",
    question: "Are there volume discounts?",
    answer: "Yes, we offer progressive discounts for larger commitments. Contact our sales team for customized pricing for large organizations.",
  },
  {
    id: "faq-5",
    question: "How is billing handled?",
    answer: "Billing occurs monthly or annually based on your plan. You'll receive a detailed invoice showing your minimum commitment and any additional seat usage.",
  },
];

export const PRICING_PLANS = [
  {
    id: "silver",
    name: "Silver",
    monthly: {
      price: "<450",
      usedSeats: 2500,
      additionalSeatCost: "0.18"
    },
    yearly: {
      price: "6,000",
      usedSeats: 5000,
      additionalSeatCost: "0.18"
    }
  },
  {
    id: "gold", 
    name: "Gold",
    monthly: {
      price: "6,000",
      usedSeats: 6000,
      additionalSeatCost: "0.12"
    },
    yearly: {
      price: "60,000",
      usedSeats: 72000,
      additionalSeatCost: "0.12"
    }
  }
];

export const ENTERPRISE_PLANS: EnterprisePlan[] = [
  {
    id: "diamond",
    name: "Diamond",
    monthly: {
      seats: "20,000",
      pricePerSeat: "€0.10"
    },
    yearly: {
      seats: "240,000",
      pricePerSeat: "€0.10"
    }
  },
  {
    id: "platinum",
    name: "Platinum",
    monthly: {
      seats: "50,000", 
      pricePerSeat: "€0.08"
    },
    yearly: {
      seats: "600,000",
      pricePerSeat: "€0.08"
    }
  },
  {
    id: "mithril",
    name: "Mithril",
    monthly: {
      seats: "100,000",
      pricePerSeat: "€0.07"
    },
    yearly: {
      seats: "1,200,000",
      pricePerSeat: "€0.07"
    }
  },
  {
    id: "palladium",
    name: "Palladium",
    monthly: {
      seats: "250,000",
      pricePerSeat: "€0.06"
    },
    yearly: {
      seats: "3,000,000",
      pricePerSeat: "€0.06"
    }
  },
  {
    id: "rhodium",
    name: "Rhodium",
    monthly: {
      seats: "500,000",
      pricePerSeat: "€0.05"
    },
    yearly: {
      seats: "6,000,000", 
      pricePerSeat: "€0.05"
    }
  }
];

export const BASE_PLANS: Record<"monthly" | "yearly", PricingPlan[]> = {
  monthly: [
    {
      id: "silver",
      name: "Silver",
      price: "<450",
      description: "Perfect for growing businesses",
      usedSeats: 2500,
      additionalSeatCost: "0.18",
    },
    {
      id: "gold",
      name: "Gold",
      price: "6,000",
      description: "For high-volume enterprises",
      usedSeats: 6000,
      additionalSeatCost: "0.12",
      featured: true,
    },
  ],
  yearly: [
    {
      id: "silver",
      name: "Silver",
      price: "6,000",
      description: "Perfect for growing businesses",
      usedSeats: 5000,
      additionalSeatCost: "0.18",
    },
    {
      id: "gold",
      name: "Gold",
      price: "60,000",
      description: "For high-volume enterprises",
      usedSeats: 72000,
      additionalSeatCost: "0.12",
      featured: true,
    },
  ],
};

export const DEFAULT_PLANS = ENTERPRISE_PLANS;