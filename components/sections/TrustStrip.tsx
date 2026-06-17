import { CupSoda, Leaf, ThermometerSun, Truck, Unplug, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS = [
  { icon: Leaf, label: "100% Arabica Specialty Coffee" },
  { icon: Zap, label: "Ready in 60 Seconds" },
  { icon: Unplug, label: "No Machine Needed" },
  { icon: CupSoda, label: "~20 Cups Per Pouch" },
  { icon: ThermometerSun, label: "Hot or Iced" },
  { icon: Truck, label: "Free Shipping Across India" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {ITEMS.map(({ icon: Icon, label }, i) => (
            <Reveal
              as="li"
              key={label}
              delay={i * 0.05}
              className="flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-500">
                <Icon size={19} strokeWidth={1.75} />
              </span>
              <span className="text-[13px] font-semibold leading-tight text-ink-soft">
                {label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
