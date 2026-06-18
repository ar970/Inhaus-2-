"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/Button";
import { scrollToId } from "@/lib/utils";
import { EASE } from "@/lib/motion";

function useTimeGreeting() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(
      h >= 5 && h < 12
        ? "Good morning."
        : h >= 12 && h < 17
          ? "Good afternoon."
          : h >= 17 && h < 21
            ? "Good evening."
            : "Still up?",
    );
  }, []);
  return greeting;
}

/* Warm atmospheric coffee scene — pour shot, amber light */
const HERO_IMG =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

const BENEFITS = ["20 cups per bottle", "₹25 a cup", "Free above ₹999", "500+ orders"];

export function Hero() {
  const greeting = useTimeGreeting();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 py-24 text-center sm:px-[5vw]"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center scale-105"
          style={{ transform: "scale(1.05)" }}
        />

        {/* Warm amber-tinted dark vignette — not cold black */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120a04]/85 via-[#0c0705]/75 to-[#100806]/92" />

        {/* Morning-light radial glow — amber warmth from center */}
        <div
          className="pointer-events-none absolute left-1/2 top-[40%] h-[65vh] w-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(196,126,63,0.22) 0%, rgba(180,100,30,0.08) 50%, transparent 75%)",
          }}
          aria-hidden
        />

        {/* Soft top edge fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dark/60 to-transparent" />
      </div>

      {/* ── Content — centered, welcoming ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-[760px] flex-col items-center"
      >
        {/* Eyebrow */}
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/38"
        >
          {greeting && (
            <>
              <span className="text-gold/75">{greeting}</span>
              <span className="text-white/20">·</span>
            </>
          )}
          Specialty Arabica · Chikmagalur, India
        </motion.span>

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="mt-6 font-display text-[clamp(3.6rem,9vw,9rem)] font-light italic leading-[0.9] tracking-tight text-white"
        >
          Café in
          <br />a bottle.
        </motion.h1>

        {/* Welcoming sub-copy — origin + ease + warmth */}
        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-[420px] text-[1.05rem] font-light leading-[1.8] text-white/55"
        >
          Mountain-grown Arabica from the Western Ghats — dark cocoa,
          clean finish, ready in 60 seconds.
          <br />
          <span className="mt-1 block text-white/38 text-[0.92rem]">
            No machine. No queue. No compromise.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="gold" size="xl" onClick={() => scrollToId("shop")}>
            Shop Now — ₹499
          </Button>
          <Button variant="link" onClick={() => scrollToId("manifesto")}>
            Our story →
          </Button>
        </motion.div>

        {/* Benefit strip */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {BENEFITS.map((t, i) => (
            <span
              key={t}
              className="flex items-center gap-x-6 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/25"
            >
              {t}
              {i < BENEFITS.length - 1 && (
                <span className="ml-6 hidden text-white/12 sm:inline">·</span>
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll-hint chevron */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[0.52rem] uppercase tracking-[0.22em] text-white/20">
            Scroll
          </span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            className="text-white/20"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
