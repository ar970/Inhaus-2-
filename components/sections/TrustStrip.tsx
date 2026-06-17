import { CupSoda, Leaf, ThermometerSun, Truck, Unplug, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS = [
  { icon: Leaf, label: "100% Arabica" },
  { icon: Zap, label: "Ready in 60s" },
  { icon: Unplug, label: "No machine" },
  { icon: CupSoda, label: "~20 cups / pouch" },
  { icon: ThermometerSun, label: "Hot or iced" },
  { icon: Truck, label: "Free shipping" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-cream">
      <ul className="mx-auto grid max-w-[1400px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {ITEMS.map(({ icon: Icon, label }, i) => (
          <Reveal
            as="li"
            key={label}
            delay={i * 0.05}
            className="flex items-center gap-3 border-line px-5 py-6 [&:not(:nth-child(2n))]:border-r sm:[&:not(:nth-child(3n))]:border-r lg:[&:not(:last-child)]:border-r"
          >
            <Icon
              size={20}
              strokeWidth={1.75}
              className="shrink-0 text-accent transition-colors duration-500"
            />
            <span className="label !tracking-[0.12em] text-ink">{label}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
