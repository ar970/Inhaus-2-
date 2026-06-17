"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight, Bean } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Seal } from "@/components/ui/Seal";
import { Pouch } from "@/components/ui/Pouch";
import { scrollToId } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-10 pt-24 sm:px-7 sm:pt-28"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-12 lg:gap-8">
        {/* ---- copy ---- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div
            variants={item}
            className="flex items-center gap-3 text-muted"
          >
            <span className="label text-ink">(01)</span>
            <span className="h-px w-8 bg-line" />
            <span className="label">Specialty coffee concentrate</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.9rem,8.5vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.02em] text-ink"
          >
            Café-style coffee
            <br />
            in{" "}
            <span className="relative whitespace-nowrap italic text-accent transition-colors duration-500">
              60 seconds.
              <svg
                className="absolute -bottom-2 left-0 w-full text-accent transition-colors duration-500"
                viewBox="0 0 300 16"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 11C50 4 110 4 160 8C210 12 260 12 298 5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-md text-lg leading-relaxed text-espresso/90"
          >
            No machine. No café run. Just pour, stir, and sip — café-strength
            specialty coffee, wherever the day takes you.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <Button size="lg" onClick={() => scrollToId("shop")}>
              Shop the pouch
              <ArrowRight size={18} />
            </Button>
            <Button variant="link" onClick={() => scrollToId("how")}>
              See how it works
            </Button>
          </motion.div>

          <motion.p variants={item} className="mt-9 label text-muted">
            Free shipping across India &nbsp;/&nbsp; ~20 cups per pouch
          </motion.p>
        </motion.div>

        {/* ---- product frame ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="relative lg:col-span-5"
        >
          <PhotoFrame
            caption="fig. 01 — café in a pouch"
            className="aspect-[4/5] w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="w-[62%] max-w-[260px] drop-shadow-2xl">
                <Pouch fuel="Specialty" />
              </div>
            </div>
          </PhotoFrame>

          {/* rotating seal */}
          <Seal
            text="INHAUS · SPECIALTY COFFEE · CHIKMAGALUR · "
            className="absolute -bottom-7 -left-7 h-28 w-28 text-ink"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-[var(--accent-contrast)] transition-colors duration-500">
              <Bean size={20} />
            </span>
          </Seal>

          {/* price sticker */}
          <div className="absolute -right-3 top-5 rotate-[8deg] rounded-2xl border border-ink/15 bg-cream px-4 py-2 text-center shadow-sm">
            <p className="font-display text-2xl leading-none text-ink">₹500</p>
            <p className="label mt-1 text-muted">~20 cups</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
