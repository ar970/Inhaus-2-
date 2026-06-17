import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Smooth-scroll to a section by id (used by hero / CTA buttons). */
export function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Indian rupee formatting, e.g. 1500 -> "₹1,500". */
export function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}
