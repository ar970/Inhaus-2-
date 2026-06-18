"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { EASE } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Pour",
    body: "Pour 10ml of INHAUS concentrate into your favourite cup.",
  },
  {
    number: "02",
    title: "Add milk or water",
    body: "Top it up — hot, cold, or over ice — and give it a quick stir.",
  },
  {
    number: "03",
    title: "Sip",
    body: "Café-grade speciality coffee in 60 seconds. No machine required.",
  },
];

export function HowItWorks() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="how-it-works"
      className="relative border-b border-white/5 bg-dark px-5 py-[12vw] sm:px-[5vw] lg:py-[8vw]"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,126,63,0.07) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 font-mono text-[0.58rem] uppercase tracking-[0.28em] text-gold"
        >
          Ready in 60 seconds
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-[6vw] font-display text-[clamp(2.2rem,5vw,4rem)] font-light italic leading-[1.1] text-white"
        >
          Three steps.
          <br />
          <em className="not-italic text-gold">One ritual.</em>
        </motion.h2>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Steps */}
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <div className="group relative flex gap-6 border-t border-white/8 py-8 last:border-b last:border-white/8">
                  {/* Step number */}
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-gold/65 transition-colors group-hover:text-gold">
                    {step.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="mb-2 font-display text-[1.55rem] font-light italic text-white">
                      {step.title}
                    </h3>
                    <p className="text-[0.95rem] font-light leading-[1.8] text-white/82">
                      {step.body}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-gold/50 to-transparent"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={reduce ? {} : { scaleX: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{ width: "100%" }}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="relative overflow-hidden rounded-[4px]"
          >
            {/* Thin gold frame */}
            <div
              className="pointer-events-none absolute inset-0 z-10 rounded-[4px] border border-white/[0.08]"
              aria-hidden
            />

            <video
              ref={videoRef}
              src="/media/how-it-works2.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="block w-full rounded-[4px] object-cover"
              style={{ aspectRatio: "9/16", maxHeight: "620px", objectPosition: "center" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
