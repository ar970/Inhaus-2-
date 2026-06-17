import { Bean, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Seal } from "@/components/ui/Seal";

export function Origin() {
  return (
    <section id="origin" className="relative overflow-hidden bg-espresso px-5 py-24 text-cream sm:px-7 sm:py-32">
      <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" aria-hidden />

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal className="flex items-center gap-3 text-cream/60">
          <span className="label text-cream">(05)</span>
          <span className="h-px w-8 bg-cream/30" />
          <span className="label">Why we exist</span>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <Reveal delay={0.05}>
            <p className="font-display text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.08] tracking-[-0.01em]">
              We loved café coffee — but not the{" "}
              <span className="italic text-accent transition-colors duration-500">
                ₹250 tabs
              </span>
              , the machines, or the morning queues. So we partnered with Brewcaso
              to bottle café-style specialty coffee that fits real life.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-2 rounded-pill border border-cream/20 px-4 py-2">
                <MapPin size={15} className="text-accent transition-colors duration-500" />
                <span className="label text-cream">Chikmagalur, Karnataka</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-pill border border-cream/20 px-4 py-2">
                <Bean size={15} className="text-accent transition-colors duration-500" />
                <span className="label text-cream">100% specialty Arabica</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:block">
            <Seal
              text="CRAFTED WITH BREWCASO · SINGLE ORIGIN · "
              className="h-36 w-36 text-cream"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-[var(--accent-contrast)] transition-colors duration-500">
                <Bean size={24} />
              </span>
            </Seal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
