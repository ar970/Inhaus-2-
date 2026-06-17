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
  glow: string;
  titleColor: string;
  bg: string;
  image: string;
  reverse?: boolean;
}

const CDN = "https://inhauscoffee.com/cdn/shop/t/45/assets";

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
    glow: "#2A4A7F",
    titleColor: "#8BA4BE",
    bg: "#0A0D14",
    image: `${CDN}/logo%20s.jpeg`,
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
    glow: "#C8A96E",
    titleColor: "#C47E3F",
    bg: "#17110C",
    image: `${CDN}/logo%20c.jpeg`,
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
    glow: "#555555",
    titleColor: "#E0E0E0",
    bg: "#0F0F0F",
    image: `${CDN}/logo%20p.jpeg`,
  },
];
