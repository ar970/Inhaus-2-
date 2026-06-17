export type PersonaId = "student" | "creator" | "professional";

export interface Persona {
  id: PersonaId;
  /** Short mode name used in the card title, e.g. "Study Fuel" */
  fuel: string;
  /** Mode label used in cart lines / CTAs, e.g. "Study Fuel" */
  label: string;
  /** Card supporting line */
  cardSubtext: string;
  /** Card button label */
  cardCta: string;
  /** Hex accent (also drives global theme when selected) */
  accent: string;
  /** Space-separated RGB channels for rgb(var(--accent-rgb) / a) */
  accentRgb: string;
  /** Readable text color to place on top of the accent */
  accentContrast: string;
  /** Product-showcase headline */
  showcaseHeadline: string;
  /** Product-showcase supporting copy */
  showcaseText: string;
  /** Product-showcase CTA */
  shopCta: string;
}

export const PERSONAS: Record<PersonaId, Persona> = {
  student: {
    id: "student",
    fuel: "Study Fuel",
    label: "Study Fuel",
    cardSubtext: "Late nights. Deadlines. Ambition.",
    cardCta: "Enter Study Mode",
    accent: "#ff6b00",
    accentRgb: "255 107 0",
    accentContrast: "#ffffff",
    showcaseHeadline: "Fuel for the 2:17 AM grind.",
    showcaseText:
      "Pour, stir, and get back to it. Café-strength specialty coffee that keeps up with late nights and last-minute deadlines — no machine, no café run.",
    shopCta: "Shop Study Fuel",
  },
  creator: {
    id: "creator",
    fuel: "Creator Fuel",
    label: "Creator Fuel",
    cardSubtext: "Ideas. Flow state. Creation.",
    cardCta: "Enter Creator Mode",
    accent: "#ff2e88",
    accentRgb: "255 46 136",
    accentContrast: "#ffffff",
    showcaseHeadline: "Make. Edit. Repeat.",
    showcaseText:
      "Find the flow and stay there. A smooth, consistent cup in 60 seconds so the only thing you're brewing is the next idea.",
    shopCta: "Shop Creator Fuel",
  },
  professional: {
    id: "professional",
    fuel: "Work Flow",
    label: "Work Flow",
    cardSubtext: "Focus. Execution. Momentum.",
    cardCta: "Enter Work Mode",
    accent: "#00bfa5",
    accentRgb: "0 191 165",
    accentContrast: "#06231e",
    showcaseHeadline: "Skip the café run. Keep moving.",
    showcaseText:
      "Back-to-back mornings deserve better than instant. Specialty coffee at your desk in under a minute — hot or iced, ready when you are.",
    shopCta: "Shop Work Flow",
  },
};

export const PERSONA_ORDER: PersonaId[] = ["student", "creator", "professional"];
export const DEFAULT_PERSONA: PersonaId = "student";
