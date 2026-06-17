"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  Briefcase,
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
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Seal } from "@/components/ui/Seal";
import { Reveal } from "@/components/ui/Reveal";
import { COUPON, PRODUCT } from "@/lib/product";
import type { PersonaId } from "@/lib/personas";
import { formatINR } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const DECO: Record<PersonaId, { Icon: LucideIcon; pos: string; rot: string }[]> = {
  student: [
    { Icon: GraduationCap, pos: "left-5 top-8", rot: "-8deg" },
    { Icon: BookOpen, pos: "right-7 top-16", rot: "10deg" },
    { Icon: PenLine, pos: "bottom-12 left-10", rot: "6deg" },
  ],
  creator: [
    { Icon: Sparkles, pos: "left-5 top-8", rot: "-8deg" },
    { Icon: Palette, pos: "right-7 top-16", rot: "10deg" },
    { Icon: WandSparkles, pos: "bottom-12 left-10", rot: "6deg" },
  ],
  professional: [
    { Icon: Briefcase, pos: "left-5 top-8", rot: "-8deg" },
    { Icon: TrendingUp, pos: "right-7 top-16", rot: "10deg" },
    { Icon: Laptop, pos: "bottom-12 left-10", rot: "6deg" },
  ],
};

const SPECS = [
  ["Origin", "Chikmagalur, Karnataka"],
  ["Varietal", "100% Arabica"],
  ["Tasting notes", "Caramel · cocoa · brown sugar"],
  ["Brew ratio", "1 : 8 — pour, top, stir"],
  ["Yield", `~${PRODUCT.cupsPerPouch} cups · hot or iced`],
];

export function ProductShowcase() {
  const { persona, personaId } = usePersona();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const perCup = Math.round(PRODUCT.price / PRODUCT.cupsPerPouch);

  return (
    <section id="shop" className="border-y border-line bg-cream px-5 py-20 sm:px-7 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex items-center gap-3 text-muted">
          <span className="label text-ink">(03)</span>
          <span className="h-px w-8 bg-line" />
          <span className="label">The pouch</span>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---- product frame ---- */}
          <Reveal className="relative">
            <PhotoFrame caption={`fig. 02 — ${persona.fuel.toLowerCase()}`} className="aspect-square w-full">
              {/* floating deco */}
              <AnimatePresence>
                {DECO[personaId].map(({ Icon, pos, rot }, i) => (
                  <motion.span
                    key={`${personaId}-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.22 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`animate-floaty absolute ${pos} text-accent`}
                    style={{ ["--rot" as string]: rot, animationDelay: `${i * -2.3}s` }}
                    aria-hidden
                  >
                    <Icon size={34} strokeWidth={1.5} />
                  </motion.span>
                ))}
              </AnimatePresence>

              <div className="absolute inset-0 flex items-center justify-center p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={personaId}
                    initial={{ opacity: 0, scale: 0.97, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -8 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="w-[64%] max-w-[280px] drop-shadow-2xl"
                  >
                    <Pouch fuel={persona.fuel} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </PhotoFrame>

            <Seal
              text={`~${PRODUCT.cupsPerPouch} CUPS · READY IN 60s · NO MACHINE · `}
              className="absolute -bottom-6 -right-6 h-24 w-24 text-ink"
            >
              <span className="font-display text-lg italic text-ink">in</span>
            </Seal>
          </Reveal>

          {/* ---- buy panel ---- */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={personaId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <p className="label text-accent transition-colors duration-500">
                  {persona.fuel}
                </p>
                <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.02] tracking-[-0.02em] text-ink">
                  {persona.showcaseHeadline}
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-espresso/85">
                  {persona.showcaseText}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* specs */}
            <dl className="mt-8 border-t border-line">
              {SPECS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-2.5"
                >
                  <dt className="label text-muted">{k}</dt>
                  <dd className="text-right text-[15px] font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            {/* price */}
            <div className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-2">
              <span className="font-display text-5xl leading-none text-ink">
                {formatINR(PRODUCT.price)}
              </span>
              <span className="label text-muted">MRP incl. taxes · ≈{formatINR(perCup)}/cup</span>
              <span className="ml-auto rotate-[-4deg] rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 transition-colors duration-500">
                <span className="font-mono text-xs font-bold text-accent transition-colors duration-500">
                  {COUPON.code} −{COUPON.percent}%
                </span>
              </span>
            </div>

            {/* qty + add */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-14 items-center justify-between rounded-pill border border-ink/15 bg-paper px-2 sm:w-36">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 hover:text-accent"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-mono font-bold tabular-nums">{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  aria-label="Increase quantity"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 hover:text-accent"
                >
                  <Plus size={16} />
                </button>
              </div>

              <Button size="lg" className="flex-1" onClick={() => addItem(persona.fuel, qty)}>
                <ShoppingBag size={18} />
                {persona.shopCta} · {formatINR(PRODUCT.price * qty)}
              </Button>
            </div>

            <p className="mt-4 label text-muted">
              Free shipping across India · {COUPON.blurb}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
