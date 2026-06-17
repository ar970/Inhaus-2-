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
        className="absolute h-[65%] w-[65%] rounded-full opacity-20 blur-[100px]"
        style={{ background: c.glow }}
        aria-hidden
      />
      {!err ? (
        <img
          src={c.image}
          alt={`INHAUS ${label} — 200ml concentrate`}
          onError={() => setErr(true)}
          loading="lazy"
          className="relative z-10 w-full max-w-[340px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-[1.03]"
        />
      ) : (
        <div
          className="relative z-10 flex aspect-[3/5] w-[190px] flex-col items-center justify-center gap-3 border text-center"
          style={{ borderColor: c.titleColor, background: "rgba(0,0,0,0.3)" }}
        >
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-white/40">
            INHAUS
          </span>
          <span
            className="px-4 font-display text-2xl italic leading-tight"
            style={{ color: c.titleColor }}
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
  const statusColor = c.statusTone === "gold" ? "var(--color-gold)" : "var(--color-alert)";

  const content = (
    <div
      className={cn(
        "flex flex-col justify-center px-5 py-16 sm:px-[6vw] lg:py-0",
        c.reverse ? "lg:order-2" : "lg:order-1",
      )}
    >
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/30">
        {`Identity ${c.index} // 200ml`}
      </span>
      <h2
        className="mt-5 font-display text-[clamp(2.8rem,5vw,5.5rem)] font-light italic leading-[0.92]"
        style={{ color: c.titleColor }}
      >
        {c.name}
      </h2>
      <p className="mt-5 max-w-md text-[0.97rem] font-light leading-relaxed text-white/70">
        {c.lead}
      </p>

      <div className="my-9 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-white/8 pt-8 sm:grid-cols-2">
        {c.specs.map((s) => (
          <div key={s.label}>
            <h4 className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/30">
              {s.label}
            </h4>
            <p className="mt-1.5 text-sm font-medium text-white">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="border border-white/8 bg-white/[0.015] p-5">
        <div className="flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.05em] text-white">
          <span>{c.batch} Status</span>
          <span style={{ color: statusColor }}>{c.status}</span>
        </div>
        <div className="my-4 h-[3px] w-full overflow-hidden rounded-full bg-white/8">
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
