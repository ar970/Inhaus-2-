import { Mountain, Droplets, Leaf, Coffee } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const CREDENTIALS = [
  {
    Icon: Mountain,
    label: "Single-Origin Arabica",
    sub: "Grown at 4,300 ft",
  },
  {
    Icon: Droplets,
    label: "Cold-Extracted",
    sub: "Brewed slow, never instant",
  },
  {
    Icon: Leaf,
    label: "Zero Preservatives",
    sub: "One ingredient: coffee",
  },
  {
    Icon: Coffee,
    label: "~20 Cups a Bottle",
    sub: "Just ₹25 a cup",
  },
];

export function Credentials() {
  return (
    <section className="border-b border-dark/8 bg-cream px-5 py-20 sm:px-[5vw] lg:py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-0">
          {CREDENTIALS.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 0.1}
              className={`flex flex-col items-center px-2 text-center lg:px-8 ${
                i > 0 ? "lg:border-l lg:border-dark/10" : ""
              }`}
            >
              <c.Icon
                className="mb-5 h-7 w-7 text-gold"
                strokeWidth={1.4}
                aria-hidden
              />
              <h3 className="font-display text-[1.15rem] font-light italic leading-tight text-dark">
                {c.label}
              </h3>
              <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-dark/40">
                {c.sub}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
