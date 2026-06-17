export const PRODUCT = {
  name: "INHAUS Specialty Coffee Concentrate",
  /** MRP in INR */
  price: 500,
  cupsPerPouch: 20,
  origin: "Chikmagalur",
  partner: "Brewcaso",
  highlights: [
    "~20 cups per pouch",
    "Ready in 60 seconds",
    "No machine needed",
    "100% Arabica specialty coffee",
    "Hot or iced",
  ],
} as const;

export const COUPON = {
  code: "WELCOME10",
  percent: 10,
  blurb: "Use WELCOME10 for 10% off your first order.",
} as const;

export const FREE_SHIPPING = true;
