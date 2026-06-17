"use client";

import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/Button";
import { scrollToId } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=2000";

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
      className="relative flex min-h-[100svh] flex-col justify-center px-5 sm:px-[5vw]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(13,11,10,0.45), var(--color-dark)), url('${HERO_IMG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[1000px] pt-20"
      >
        <motion.span variants={item} className="eyebrow block">
          Extract The Extraordinary
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-7 font-display text-[clamp(3.2rem,8vw,8rem)] font-bold leading-[0.95] tracking-[-0.02em] text-white"
        >
          Café logic,
          <br />
          <em className="font-normal italic text-gold">re-engineered.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-[clamp(1.05rem,2vw,1.35rem)] font-light leading-relaxed text-white/85"
        >
          We spent 14 months perfecting the cold-extraction of 100% Arabica
          beans. No machines. No waiting. Just pour, mix, and dominate your day.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button size="lg" onClick={() => scrollToId("shop")}>
            Shop The Reserve
          </Button>
          <Button variant="link" onClick={() => scrollToId("manifesto")}>
            Read the Manifesto
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
