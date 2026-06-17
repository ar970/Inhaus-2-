"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { scrollToId } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-24 text-cream sm:px-7 sm:py-32">
      <div className="absolute left-1/2 top-0 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/25 blur-3xl transition-colors duration-500" aria-hidden />
      <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" aria-hidden />

      <Reveal className="relative mx-auto max-w-[1400px]">
        <div className="flex items-center gap-3 text-cream/60">
          <span className="label text-cream">(07)</span>
          <span className="h-px w-8 bg-cream/30" />
          <span className="label">Last call</span>
        </div>

        <h2 className="mt-8 max-w-4xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.02em]">
          Your next great cup{" "}
          <span className="italic text-accent transition-colors duration-500">
            starts here.
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-cream/75">
          Specialty coffee built for the life you&apos;re creating.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button size="lg" onClick={() => scrollToId("shop")}>
            Shop the pouch
            <ArrowRight size={18} />
          </Button>
          <Button variant="glass" size="lg" onClick={() => scrollToId("fuel")}>
            Choose your fuel
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
