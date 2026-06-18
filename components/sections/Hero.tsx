"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { Button } from "@/components/ui/Button";
import { scrollToId } from "@/lib/utils";
import { EASE } from "@/lib/motion";

/* ── time-aware greeting ── */
function useTimeGreeting() {
  const [greeting, setGreeting] = useState("");
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(
      h >= 5 && h < 12
        ? "Good morning"
        : h >= 12 && h < 17
          ? "Good afternoon"
          : h >= 17 && h < 21
            ? "Good evening"
            : "Still up",
    );
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */
  return greeting;
}

/* Warm pour shot — amber light, soft steam */
const HERO_IMG =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2200";

/* ── rising steam wisps ── */
function Steam({ disabled }: { disabled: boolean }) {
  if (disabled) return null;
  const wisps = [
    { left: "41%", delay: 0, dur: 7.5, w: 64 },
    { left: "50%", delay: 1.6, dur: 8.5, w: 88 },
    { left: "58%", delay: 3.1, dur: 8, w: 54 },
    { left: "47%", delay: 4.7, dur: 9.5, w: 74 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {wisps.map((w, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[18%] rounded-full blur-[44px]"
          style={{
            left: w.left,
            width: w.w,
            height: w.w * 4.2,
            background:
              "linear-gradient(to top, rgba(196,126,63,0.13), rgba(255,238,214,0.06), transparent)",
          }}
          initial={{ opacity: 0, y: 50, scaleY: 0.8 }}
          animate={{ opacity: [0, 0.55, 0], y: [0, -280], scaleY: [0.8, 1.35] }}
          transition={{
            duration: w.dur,
            delay: w.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── corner specimen labels ── */
const CORNERS = [
  { pos: "left-6 top-24 sm:left-9 sm:top-28", align: "text-left", lines: ["13.32° N", "75.77° E"] },
  { pos: "right-6 top-24 sm:right-9 sm:top-28", align: "text-right", lines: ["Batch №402", "Single Origin"] },
  { pos: "left-6 bottom-10 sm:left-9 sm:bottom-12", align: "text-left", lines: ["Alt. 4,300 ft", "100% Arabica"] },
  { pos: "right-6 bottom-10 sm:right-9 sm:bottom-12", align: "text-right", lines: ["Cold-extracted", "Chikmagalur"] },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.3 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};
const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const lineMask: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.95, ease: EASE } },
};

const BENEFITS = ["20 cups per bottle", "₹25 a cup", "Free above ₹999", "500+ orders"];

export function Hero() {
  const greeting = useTimeGreeting();
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-[5vw]"
    >
      {/* ── Background (parallax) ── */}
      <motion.div className="absolute inset-0" style={{ y: reduce ? 0 : bgY }}>
        <motion.img
          src={HERO_IMG}
          alt=""
          aria-hidden
          className="h-[112%] w-full object-cover object-center"
          style={{ scale: reduce ? 1.06 : bgScale }}
        />
        {/* warm amber-dark wash — lighter so the image breathes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#140b05]/68 via-[#0d0705]/60 to-[#100806]/82" />
        {/* morning-light radial glow — stronger, centred higher */}
        <div
          className="pointer-events-none absolute left-1/2 top-[35%] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(196,126,63,0.42) 0%, rgba(180,100,30,0.18) 45%, transparent 70%)",
          }}
          aria-hidden
        />
        {/* soft edge vignette — reduced so it doesn't cold-crush corners */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: "inset 0 0 160px 40px rgba(8,5,3,0.60)",
          }}
          aria-hidden
        />
      </motion.div>

      <Steam disabled={reduce} />

      {/* ── Inset gallery frame ── */}
      <div
        className="pointer-events-none absolute inset-4 z-[5] border border-white/[0.09] sm:inset-6"
        aria-hidden
      />

      {/* ── Corner specimen labels ── */}
      {CORNERS.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 + i * 0.12, duration: 0.8 }}
          className={`absolute z-10 hidden flex-col gap-0.5 font-mono text-[0.56rem] uppercase leading-relaxed tracking-[0.2em] text-white/60 sm:flex ${c.pos} ${c.align}`}
        >
          {c.lines.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </motion.div>
      ))}

      {/* ── Content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : contentOpacity }}
        className="relative z-10 flex max-w-[780px] flex-col items-center"
      >
        {/* Eyebrow with greeting + hairline */}
        <motion.div variants={item} className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2.5 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-white/70">
            {greeting && (
              <>
                <span className="inline-block h-1 w-1 rounded-full bg-gold" />
                <span className="text-gold">{greeting}</span>
                <span className="text-white/40">—</span>
              </>
            )}
            Specialty Arabica
          </span>
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </motion.div>

        {/* Headline — masked per-line reveal */}
        <motion.h1
          variants={headline}
          className="mt-7 font-display text-[clamp(3.8rem,9.5vw,9.5rem)] font-light italic leading-[0.88] tracking-tight text-white"
        >
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineMask} className="block">
              Café in
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineMask} className="block">
              a bottle.
            </motion.span>
          </span>
        </motion.h1>

        {/* Sub-copy — warm, sensory */}
        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-[440px] text-[1.05rem] font-normal leading-[1.85] text-white/85"
        >
          Mountain-grown Arabica from the Western Ghats — notes of dark
          cocoa and toasted nuts, poured in 60 seconds.
        </motion.p>
        <motion.p
          variants={item}
          className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.24em] text-white/60"
        >
          No machine · No queue · No compromise
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-11 flex flex-wrap items-center justify-center gap-5"
        >
          <Button variant="gold" size="xl" onClick={() => scrollToId("shop")}>
            Shop Now — ₹499
          </Button>
          <Button variant="link" onClick={() => scrollToId("how-it-works")}>
            How it Works →
          </Button>
          <Button variant="link" onClick={() => scrollToId("manifesto")}>
            Our story →
          </Button>
        </motion.div>

        {/* Benefit strip with dot separators */}
        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          {BENEFITS.map((t, i) => (
            <span key={t} className="flex items-center gap-x-3">
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/60">
                {t}
              </span>
              {i < BENEFITS.length - 1 && (
                <span className="h-0.5 w-0.5 rounded-full bg-white/40" />
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={() => scrollToId("manifesto")}
        aria-label="Scroll to story"
        className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.7 }}
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="font-mono text-[0.5rem] uppercase tracking-[0.24em] text-white/55">
            Scroll
          </span>
          <svg width="13" height="8" viewBox="0 0 13 8" fill="none" className="text-white/55">
            <path
              d="M1 1L6.5 6.5L12 1"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </motion.button>
    </section>
  );
}
