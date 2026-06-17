"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight, Play, Truck, Coffee } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";
import { scrollToId } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden text-cream"
    >
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8"
      >
        <div className="max-w-3xl">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-pill border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent transition-colors duration-500" />
            Specialty Coffee Concentrate
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[0.98] tracking-tight"
          >
            Café-style coffee in{" "}
            <span className="italic text-accent transition-colors duration-500">
              60 seconds.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-cream/85 sm:text-xl"
          >
            No machine. No café run. Just pour, stir, and sip.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button size="lg" onClick={() => scrollToId("shop")}>
              Shop Now
              <ArrowRight size={18} />
            </Button>
            <Button variant="glass" size="lg" onClick={() => scrollToId("how")}>
              <Play size={16} />
              See How It Works
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/75"
          >
            <span className="inline-flex items-center gap-2">
              <Truck size={16} className="text-accent transition-colors duration-500" />
              Free shipping across India
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-cream/40 sm:inline-block" />
            <span className="inline-flex items-center gap-2">
              <Coffee size={16} className="text-accent transition-colors duration-500" />
              ~20 cups per pouch
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* subtle scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-cream/30"
        >
          <span className="mx-auto mt-1.5 block h-1.5 w-1.5 rounded-full bg-cream/70" />
        </motion.div>
      </div>
    </section>
  );
}
