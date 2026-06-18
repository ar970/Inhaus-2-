export interface Spec {
  label: string;
  value: string;
}

export interface Chapter {
  id: string;
  index: string;
  name: string;
  lead: string;
  specs: Spec[];
  batch: string;
  status: string;
  statusTone: "alert" | "gold";
  progress: number;
  /** persona accent — matches the pouch artwork (orange / pink / teal) */
  accent: string;
  /** section background, matched to the product photo so the pouch blends seamlessly */
  bg: string;
  /** product photo in /public/products */
  image: string;
  reverse?: boolean;
}

export const BUNDLE = {
  name: "The Bundle",
  /** all three editions, one box */
  price: 1299,
  /** what three single bottles would cost — used to show the saving */
  regularPrice: 1497,
  lead: "All three editions in one box. Study Fuel, Creator Fuel, and Work Flow — the same cold-extracted Arabica, three identities to keep on rotation. One for the desk, one to gift, one for the office.",
} as const;

export const CHAPTERS: Chapter[] = [
  {
    id: "study-fuel",
    index: "01",
    name: "Study Fuel.",
    lead: "The late-night edition. Same cold-extracted Arabica — packed in a pouch designed for the desk. Pour it at 2am. Stay in the zone.",
    specs: [
      { label: "Taste", value: "Dark Cocoa · Toasted Nuts · Clean Finish" },
      { label: "Packaging", value: "Matte black pouch · bold orange identity" },
      { label: "Yield", value: "~20 cups · ₹25 each" },
      { label: "Best For", value: "Late nights · long study sessions" },
    ],
    batch: "Batch #402",
    status: "89% Claimed",
    statusTone: "alert",
    progress: 89,
    accent: "#F26A1F",
    bg: "#000000",
    image: "/products/study-fuel.png",
  },
  {
    id: "creator-fuel",
    index: "02",
    name: "Creator Fuel.",
    lead: "The maker's edition. Same concentrate, different canvas — a pouch built for people who care what sits on their desk. Gift one. Keep one.",
    specs: [
      { label: "Taste", value: "Dark Cocoa · Toasted Nuts · Clean Finish" },
      { label: "Packaging", value: "Matte black pouch · bold pink identity" },
      { label: "Yield", value: "~20 cups · ₹25 each" },
      { label: "Best For", value: "Creative work · gifting · the aesthetic desk" },
    ],
    batch: "Batch #403",
    status: "Restocked Today",
    statusTone: "gold",
    progress: 15,
    accent: "#E81E78",
    bg: "#000000",
    image: "/products/creator-fuel.png",
    reverse: true,
  },
  {
    id: "work-flow",
    index: "03",
    name: "Work Flow.",
    lead: "The office edition. The same specialty Arabica that runs a café — in a pouch that belongs in a boardroom. Ditch the machine. Keep the standard.",
    specs: [
      { label: "Taste", value: "Dark Cocoa · Toasted Nuts · Clean Finish" },
      { label: "Packaging", value: "Matte black pouch · teal executive identity" },
      { label: "Yield", value: "~20 cups · ₹25 each" },
      { label: "Best For", value: "Office · client meetings · the serious desk" },
    ],
    batch: "Batch #404",
    status: "Selling Fast",
    statusTone: "alert",
    progress: 75,
    accent: "#15B5C7",
    bg: "#030303",
    image: "/products/work-flow.png",
  },
];
