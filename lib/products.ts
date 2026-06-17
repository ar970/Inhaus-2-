export interface Spec {
  label: string;
  value: string;
}

export interface Chapter {
  id: string;
  index: string; // "01"
  name: string; // "Study Fuel."
  lead: string;
  specs: Spec[];
  batch: string; // "Batch #402"
  status: string; // "89% Claimed"
  statusTone: "alert" | "gold"; // colour of status + progress
  progress: number; // 0-100
  /** glow colour behind the bottle */
  glow: string;
  /** product-name colour */
  titleColor: string;
  /** background tint for the chapter */
  bg: string;
  /** product image (real store CDN) */
  image: string;
  reverse?: boolean;
}

const CDN = "https://inhauscoffee.com/cdn/shop/t/45/assets";

export const CHAPTERS: Chapter[] = [
  {
    id: "study-fuel",
    index: "01",
    name: "Study Fuel.",
    lead: "Built specifically for the 2:17 AM grind. When the deadline is looming and focus is non-negotiable, this is your secret weapon.",
    specs: [
      { label: "The Profile", value: "Dark Cocoa & Toasted Nuts" },
      { label: "The Vibe", value: "Sustained, jitter-free focus." },
      { label: "The Yield", value: "~20 cups per bottle (₹25/cup)" },
      { label: "The Roast", value: "Medium-Dark, low acidity." },
    ],
    batch: "Batch #402",
    status: "89% Claimed",
    statusTone: "alert",
    progress: 89,
    glow: "#2A4A7F",
    titleColor: "#8BA4BE",
    bg: "#0A0D14",
    image: `${CDN}/logo%20s.jpeg`,
  },
  {
    id: "creator-fuel",
    index: "02",
    name: "Creator Fuel.",
    lead: "For the designers, editors, and builders. Poured fast so you never have to step away from the canvas to get your fix.",
    specs: [
      { label: "The Profile", value: "Wild Berries, Honey, Citrus" },
      { label: "The Vibe", value: "Bright, creative energy." },
      { label: "The Yield", value: "~20 cups per bottle (₹25/cup)" },
      { label: "The Roast", value: "Light-Medium, crisp clarity." },
    ],
    batch: "Batch #403",
    status: "Restocked Today",
    statusTone: "gold",
    progress: 15,
    glow: "#C8A96E",
    titleColor: "#D4AF37",
    bg: "#17110C",
    image: `${CDN}/logo%20c.jpeg`,
    reverse: true,
  },
  {
    id: "work-flow",
    index: "03",
    name: "Work Flow.",
    lead: "The executive standard. Skip the office machine — premium, cold-extracted concentrate for people who ship, build, and execute.",
    specs: [
      { label: "The Profile", value: "Rich Caramel & Dark Chocolate" },
      { label: "The Vibe", value: "Bold, unapologetic momentum." },
      { label: "The Yield", value: "~20 cups per bottle (₹25/cup)" },
      { label: "The Roast", value: "Dark, heavy body." },
    ],
    batch: "Batch #404",
    status: "Selling Fast",
    statusTone: "alert",
    progress: 75,
    glow: "#555555",
    titleColor: "#E0E0E0",
    bg: "#0F0F0F",
    image: `${CDN}/logo%20p.jpeg`,
  },
];
