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
    <div className="relative flex min-h-[44vh] items-center justify-center overflow-hidden p-10 lg:min-h-full">
      <div
        className="absolute h-[70%] w-[70%] rounded-full opacity-25 blur-[90px]"
        style={{ background: c.glow }}
        aria-hidden
      />
      {!err ? (
        <img
          src={c.image}
          alt={`INHAUS ${label} — 200ml concentrate`}
          onError={() => setErr(true)}
          loading="lazy"
          className="relative z-10 w-full max-w-[360px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <div
          className="relative z-10 flex aspect-[3/5] w-[200px] flex-col items-center justify-center gap-3 rounded-md border text-center"
          style={{ borderColor: c.titleColor, background: "rgba(0,0,0,0.35)" }}
        >
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/50">
            INHAUS
          </span>
          <span
            className="px-4 font-display text-2xl leading-tight"
            style={{ color: c.titleColor }}
          >
            {label}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
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
  const statusColor = c.statusTone === "gold" ? "var(--color-gold)" : "var(--color-alert)";

  const content = (
    <div
      className={cn(
        "flex flex-col justify-center px-5 py-16 sm:px-[6vw] lg:py-0",
        c.reverse ? "lg:order-2" : "lg:order-1",
      )}
    >
      <span className="eyebrow">{`Identity ${c.index} // 200ml`}</span>
      <h2
        className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] font-normal leading-none"
        style={{ color: c.titleColor }}
      >
        {c.name}
      </h2>
      <p className="mt-5 max-w-md text-[1.05rem] font-light leading-relaxed text-white/80">
        {c.lead}
      </p>

      <div className="my-9 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-2">
        {c.specs.map((s) => (
          <div key={s.label}>
            <h4 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
              {s.label}
            </h4>
            <p className="mt-1.5 font-medium text-white">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="border border-white/10 bg-white/[0.02] p-5">
        <div className="flex items-center justify-between font-mono text-[0.72rem] uppercase tracking-[0.05em] text-white">
          <span>{c.batch} Status</span>
          <span style={{ color: statusColor }}>{c.status}</span>
        </div>
        <div className="my-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full"
            style={{ width: `${c.progress}%`, background: statusColor }}
          />
        </div>
        <Button
          variant={c.statusTone === "gold" ? "gold" : "solid"}
          size="lg"
          className="w-full"
          onClick={() => addItem(label)}
        >
          Add To Cart — {formatINR(PRODUCT.price)}
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
