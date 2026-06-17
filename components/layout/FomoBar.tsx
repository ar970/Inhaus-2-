"use client";

import { scrollToId } from "@/lib/utils";

export function FomoBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 bg-alert px-5 py-3 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.3)] sm:px-[4vw]">
      <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] sm:text-[0.78rem]">
        <span className="animate-pulse-alert text-[0.7em] leading-none">🔴</span>
        <span>
          High Demand:{" "}
          <span className="hidden sm:inline">48 orders placed in the last hour.</span>
          <span className="sm:hidden">selling fast.</span>
        </span>
      </p>
      <button
        onClick={() => scrollToId("shop")}
        className="shrink-0 border border-white/25 bg-dark px-5 py-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-dark"
      >
        Shop Now
      </button>
    </div>
  );
}
