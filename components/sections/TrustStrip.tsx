import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "12,000+", label: "Orders fulfilled" },
  { value: "4.9 ★", label: "Average rating" },
  { value: "₹25", label: "Per cup" },
  { value: "Free", label: "Shipping" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-dark/10 bg-cream">
      <div className="grid grid-cols-2 divide-x divide-dark/10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.07}
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="font-display text-[2.5rem] font-light italic leading-none text-gold">
              {s.value}
            </span>
            <span className="mt-2.5 font-mono text-[0.63rem] uppercase tracking-[0.22em] text-dark/40">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
