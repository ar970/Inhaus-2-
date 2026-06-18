"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { useCart } from "@/components/providers/CartProvider";
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
      <p className="mt-5 max-w-md text-[0.97rem] font-normal leading-relaxed text-white/85">
        {c.lead}
      </p>

      <div className="mt-10 flex items-center gap-6 border-t border-white/8 pt-8">
        <span className="font-display text-[2.2rem] italic leading-none text-white">
          {formatINR(PRODUCT.price)}
        </span>
        <Button
          variant="gold"
          size="lg"
          className="flex-1"
          onClick={() => addItem(label)}
        >
          Add To Cart
        </Button>
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
