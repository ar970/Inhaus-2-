export const PRODUCT = {
  name: "INHAUS Specialty Coffee Concentrate",
  /** price in INR per 200ml bottle */
  price: 499,
  cupsPerBottle: 20,
  perCup: 25,
  origin: "Chikmagalur",
  partner: "Brewcaso",
} as const;

export const COUPON = {
  code: "WELCOME10",
  percent: 10,
  blurb: "Use WELCOME10 for 10% off your first order.",
} as const;

export const FREE_SHIPPING = true;
