import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Origin() {
  return (
    <section id="origin" className="bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            Why INHAUS Exists
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl leading-relaxed text-ink-soft">
            We loved café coffee, but not the ₹250 price tags, brewing
            equipment, or morning rushes. So we partnered with Brewcaso to
            create café-style specialty coffee that fits real life.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-pill bg-accent/10 px-4 py-2 text-sm font-medium text-ink-soft transition-colors duration-500">
            <MapPin size={15} className="text-accent transition-colors duration-500" />
            Crafted using specialty Arabica sourced from Chikmagalur.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
