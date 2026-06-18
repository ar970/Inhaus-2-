"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { useCart } from "@/components/providers/CartProvider";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CHAPTERS, type Chapter as ChapterType } from "@/lib/products";
import { PRODUCT } from "@/lib/product";
import { cn, formatINR } from "@/lib/utils";

function ChapterVisual({ c, label }: { c: ChapterType; label: string }) {
  const [err, setErr] = useState(false);
  return (
    // The pouch photos are shot on black, identical to the section background, so they
    // blend with no visible edge. A subtle accent halo tints the surrounding black.
    <div
      className="relative flex min-h-[52vh] items-center justify-center overflow-hidden lg:min-h-full"
      style={{ background: c.bg }}
    >
      <div
        className="pointer-events-none absolute h-[70%] w-[70%] rounded-full blur-[110px]"
        style={{ background: c.accent, opacity: 0.16 }}
        aria-hidden
      />
      {!err ? (
        <img
          src={c.image}
          alt={`INHAUS ${label} — 200ml coffee concentrate pouch`}
          onError={() => setErr(true)}
          loading="lazy"
          className="relative z-10 w-full max-w-[380px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-[1.03] lg:max-w-[460px]"
        />
      ) : (
        <div
          className="relative z-10 flex aspect-[3/5] w-[200px] flex-col items-center justify-center gap-3 border text-center"
          style={{ borderColor: c.accent, background: "rgba(0,0,0,0.25)" }}
        >
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-white/40">
            INHAUS
          </span>
          <span
            className="px-4 font-display text-2xl italic leading-tight"
            style={{ color: c.accent }}
          >
            {label}
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/35">
            200ml · ~{PRODUCT.cupsPerBottle} cups
          </span>
        </div>
      )}
    </div>
  );
}

function Chapter({ c }: { c: ChapterType }) {
  const { addItem } = useCart();
  const label = c.name.replace(/\.$/, "");

  const content = (
    <div
      className={cn(
        "flex flex-col justify-center px-5 py-16 sm:px-[6vw] lg:py-0",
        c.reverse ? "lg:order-2" : "lg:order-1",
      )}
    >
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/60">
        {`Edition ${c.index} of 3  ·  Same concentrate  ·  Different identity`}
      </span>
      <h2
        className="mt-5 font-display text-[clamp(2.8rem,5vw,5.5rem)] font-light italic leading-[0.92]"
        style={{ color: c.accent }}
      >
        {c.name}
      </h2>
      <p className="mt-5 max-w-md text-[0.97rem] font-light leading-relaxed text-white/85">
        {c.lead}
      </p>

      <div className="my-9 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-white/8 pt-8 sm:grid-cols-2">
        {c.specs.map((s) => (
          <div key={s.label}>
            <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/55">
              {s.label}
            </h4>
            <p className="mt-1.5 text-sm font-medium text-white">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        {/* Price vs café comparison */}
        <div className="flex items-end justify-between border-y border-white/8 py-5">
          <span className="font-display text-[2.6rem] italic leading-none text-white">
            {formatINR(PRODUCT.price)}
          </span>
          <div className="text-right">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-gold">
              ~₹{PRODUCT.perCup} a cup
            </p>
            <p className="mt-0.5 font-mono text-[0.52rem] uppercase tracking-[0.1em] text-white/55">
              vs ₹250 at a café
            </p>
          </div>
        </div>

        {/* Subtle urgency — no progress bar */}
        {c.statusTone === "alert" && (
          <p
            className="font-mono text-[0.6rem] uppercase tracking-[0.2em]"
            style={{ color: c.accent }}
          >
            ⟶ {c.status} — order before this batch closes
          </p>
        )}

        <Button
          variant="gold"
          size="xl"
          className="w-full"
          onClick={() => addItem(label)}
        >
          Add To Cart — {formatINR(PRODUCT.price)}
        </Button>

        {/* Value bullets */}
        <ul className="space-y-3 pt-1">
          {[
            "20 cups in every bottle",
            "Free shipping above ₹999",
            "Same Arabica a café charges ₹250 for",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2.5} />
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-white/70">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const visual = (
    <div className={c.reverse ? "lg:order-1" : "lg:order-2"}>
      <ChapterVisual c={c} label={label} />
    </div>
  );

  return (
    <section
      className="grid border-b border-white/5 lg:min-h-[88vh] lg:grid-cols-2"
      style={{ background: c.bg }}
    >
      {content}
      {visual}
    </section>
  );
}

export function Shop() {
  return (
    <div id="shop">
      {CHAPTERS.map((c) => (
        <Chapter key={c.id} c={c} />
      ))}
    </div>
  );
}
