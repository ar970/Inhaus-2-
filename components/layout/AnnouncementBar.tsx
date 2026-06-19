"use client";

import { Truck } from "lucide-react";
import { COUPON } from "@/lib/product";
import { scrollToId } from "@/lib/utils";

const ITEMS = [
  <>
    Use code <strong className="font-bold">{COUPON.code}</strong> —{" "}
    {COUPON.percent}% off your first order
  </>,
  <>
    <Truck className="mr-1.5 inline h-3 w-3 align-middle" aria-hidden />
    Free shipping above ₹999
  </>,
];

function Track() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center">
          <span className="mx-7 opacity-40">✦</span>
          <span>{item}</span>
        </span>
      ))}
    </>
  );
}

export function AnnouncementBar() {
  return (
    <button
      onClick={() => scrollToId("shop")}
      aria-label={`Use code ${COUPON.code} for ${COUPON.percent}% off — free shipping above ₹999`}
      className="fixed inset-x-0 top-0 z-[60] h-9 w-full cursor-pointer overflow-hidden bg-gold transition-[filter] hover:brightness-105"
      style={{ "--marquee-duration": "12s" } as React.CSSProperties}
    >
      <div className="animate-scroll-x flex h-full items-center whitespace-nowrap font-mono text-[0.6rem] uppercase tracking-[0.18em] text-dark sm:text-[0.65rem]">
        <Track />
        <Track />
      </div>
    </button>
  );
}
