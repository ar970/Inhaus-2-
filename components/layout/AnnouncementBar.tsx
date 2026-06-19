"use client";

import { COUPON } from "@/lib/product";
import { scrollToId } from "@/lib/utils";

export function AnnouncementBar() {
  return (
    <button
      onClick={() => scrollToId("shop")}
      aria-label={`Use code ${COUPON.code} for ${COUPON.percent}% off your first order — shop now`}
      className="fixed inset-x-0 top-0 z-[60] flex h-9 w-full items-center justify-center gap-2 bg-gold px-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-dark transition-[filter] hover:brightness-105 sm:text-[0.68rem] sm:tracking-[0.2em]"
    >
      <span className="leading-none">✦</span>
      <span className="truncate">
        Use code <strong className="font-bold">{COUPON.code}</strong> — {COUPON.percent}% off your first order
      </span>
      <span className="leading-none">✦</span>
    </button>
  );
}
