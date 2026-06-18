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

export const CHAPTERS: Chapter[] = [
  {
    id: "study-fuel",
    index: "01",
    name: "Study Fuel.",
    lead: "Dark roast for long nights. Sustained focus, no jitters, no crashes. This is the one you reach for at 2am.",
    specs: [
      { label: "Flavour", value: "Dark Cocoa · Toasted Nuts" },
      { label: "Effect", value: "Sustained, jitter-free focus" },
      { label: "Yield", value: "~20 cups · ₹25 each" },
      { label: "Roast", value: "Medium-dark · low acidity" },
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
    lead: "Light roast, bright energy. For designers, editors, and builders who pour and get straight back to work.",
    specs: [
      { label: "Flavour", value: "Wild Berries · Honey · Citrus" },
      { label: "Effect", value: "Bright, clean energy" },
      { label: "Yield", value: "~20 cups · ₹25 each" },
      { label: "Roast", value: "Light-medium · crisp clarity" },
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
    lead: "The executive standard. Rich, heavy-bodied, no compromise. Skip the office machine — for good.",
    specs: [
      { label: "Flavour", value: "Caramel · Dark Chocolate" },
      { label: "Effect", value: "Bold, full-body momentum" },
      { label: "Yield", value: "~20 cups · ₹25 each" },
      { label: "Roast", value: "Dark · heavy body" },
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
