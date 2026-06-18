"use client";

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/Button";
import { scrollToId } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=2000";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-20 sm:px-[5vw] sm:pb-28"
    >
      {/* full-bleed photo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/20" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[920px]"
      >
        <motion.span
          variants={item}
          className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-white/40"
        >
          Cold-extracted · Chikmagalur Arabica · 200ml
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-5 font-display text-[clamp(3.8rem,9.5vw,9.5rem)] font-light italic leading-[0.9] tracking-tight text-white"
        >
          Café in
          <br />a bottle.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-sm text-[1rem] font-light leading-relaxed text-white/55"
        >
          60-second pour. No machine needed. ₹25 a cup.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center gap-5"
        >
          <Button variant="gold" size="xl" onClick={() => scrollToId("shop")}>
            Shop Now — ₹499
          </Button>
          <Button variant="link" onClick={() => scrollToId("manifesto")}>
            Our story →
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-5 flex flex-wrap gap-x-6 gap-y-1.5"
        >
          {["20 cups per bottle", "₹25 per cup", "Free shipping", "1,200+ orders"].map((t) => (
            <span
              key={t}
              className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/30"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
