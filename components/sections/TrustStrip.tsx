import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "12,000+", label: "Orders fulfilled" },
  { value: "4.9 ★", label: "Average rating" },
  { value: "₹25", label: "Per cup" },
  { value: "Free", label: "Shipping" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-white/5 bg-mid">
      <div className="grid grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.07}
            className="flex flex-col items-center py-9 text-center"
          >
            <span className="font-display text-[2.4rem] font-normal leading-none text-gold">
              {s.value}
            </span>
            <span className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/35">
              {s.label}
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
