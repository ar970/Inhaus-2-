"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { scrollToId } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      {/* ambient accent glow + grain */}
      <div className="absolute left-1/2 top-0 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/25 blur-3xl transition-colors duration-500" />
      <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />

      <Reveal className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tight">
          Your next great cup starts here.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-cream/75">
          Specialty coffee built for the life you&apos;re creating.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <Button size="lg" onClick={() => scrollToId("shop")}>
            Shop Now
            <ArrowRight size={18} />
          </Button>
          <Button variant="glass" size="lg" onClick={() => scrollToId("fuel")}>
            Choose Your Fuel
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
