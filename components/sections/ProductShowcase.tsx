"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  Briefcase,
  Check,
  GraduationCap,
  Laptop,
  Minus,
  Palette,
  PenLine,
  Plus,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePersona } from "@/components/providers/PersonaProvider";
import { useCart } from "@/components/providers/CartProvider";
import { Pouch } from "@/components/ui/Pouch";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { COUPON, PRODUCT } from "@/lib/product";
import type { PersonaId } from "@/lib/personas";
import { formatINR } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const DECO: Record<PersonaId, { Icon: LucideIcon; pos: string }[]> = {
  student: [
    { Icon: GraduationCap, pos: "left-6 top-10" },
    { Icon: BookOpen, pos: "right-8 top-20" },
    { Icon: PenLine, pos: "bottom-10 left-12" },
  ],
  creator: [
    { Icon: Sparkles, pos: "left-6 top-10" },
    { Icon: Palette, pos: "right-8 top-20" },
    { Icon: WandSparkles, pos: "bottom-10 left-12" },
  ],
  professional: [
    { Icon: Briefcase, pos: "left-6 top-10" },
    { Icon: TrendingUp, pos: "right-8 top-20" },
    { Icon: Laptop, pos: "bottom-10 left-12" },
  ],
};

const PERKS = [
  "Ready in 60 seconds",
  "No machine needed",
  `~${PRODUCT.cupsPerPouch} cups per pouch`,
  "Hot or iced",
];

export function ProductShowcase() {
  const { persona, personaId } = usePersona();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const perCup = Math.round(PRODUCT.price / PRODUCT.cupsPerPouch);

  return (
    <section id="shop" className="bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* ===== Product stage ===== */}
        <Reveal className="order-1">
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-line bg-gradient-to-br from-white to-cream transition-colors duration-500">
            {/* accent glow */}
            <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl transition-colors duration-500" />

            {/* floating decorative icons (swap with persona) */}
            <AnimatePresence>
              {DECO[personaId].map(({ Icon, pos }, i) => (
                <motion.span
                  key={`${personaId}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.18 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`animate-floaty absolute ${pos} text-accent`}
                  style={{ animationDelay: `${i * -2.2}s` }}
                  aria-hidden
                >
                  <Icon size={34} strokeWidth={1.5} />
                </motion.span>
              ))}
            </AnimatePresence>

            {/* pouch */}
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={personaId}
                  initial={{ opacity: 0, scale: 0.97, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="w-[68%] max-w-[300px] drop-shadow-2xl"
                >
                  <Pouch fuel={persona.fuel} />
                </motion.div>
              </AnimatePresence>
            </div>

            <span className="absolute bottom-5 right-5 rounded-pill bg-ink/90 px-3 py-1.5 text-xs font-semibold text-cream backdrop-blur">
              ≈ {formatINR(perCup)} / cup
            </span>
          </div>
        </Reveal>

        {/* ===== Buy panel ===== */}
        <div className="order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={personaId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent transition-colors duration-500">
                {persona.fuel}
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-ink">
                {persona.showcaseHeadline}
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted">
                {persona.showcaseText}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* perks */}
          <ul className="mt-7 grid grid-cols-2 gap-3">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-center gap-2 text-sm text-ink-soft">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent transition-colors duration-500">
                  <Check size={13} strokeWidth={3} />
                </span>
                {perk}
              </li>
            ))}
          </ul>

          {/* price */}
          <div className="mt-8 flex items-end gap-3">
            <span className="font-display text-4xl font-semibold text-ink">
              {formatINR(PRODUCT.price)}
            </span>
            <span className="pb-1 text-sm text-muted">MRP · incl. of taxes</span>
          </div>
          <p className="mt-2 text-sm text-ink-soft">
            <span className="font-semibold text-accent transition-colors duration-500">
              {COUPON.code}
            </span>{" "}
            — {COUPON.percent}% off your first order.
          </p>

          {/* qty + add to cart */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-14 items-center justify-between rounded-pill border border-line bg-white px-2 sm:w-36">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 hover:text-accent"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center font-semibold tabular-nums">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => Math.min(10, q + 1))}
                aria-label="Increase quantity"
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 hover:text-accent"
              >
                <Plus size={16} />
              </button>
            </div>

            <Button
              size="lg"
              className="flex-1"
              onClick={() => addItem(persona.fuel, qty)}
            >
              <ShoppingBag size={18} />
              {persona.shopCta} · {formatINR(PRODUCT.price * qty)}
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted">
            Free shipping across India · ~{PRODUCT.cupsPerPouch} cups per pouch ·
            Ready in 60 seconds
          </p>
        </div>
      </div>
    </section>
  );
}
