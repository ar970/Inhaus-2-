"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/providers/CartProvider";
import { cn, scrollToId } from "@/lib/utils";

const NAV = [
  { label: "The Story", id: "manifesto" },
  { label: "The Reserve", id: "shop" },
];

export function Header() {
  const { totalQty, open } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-dark/95 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-dark/90 to-transparent",
      )}
    >
      <div className="flex items-center justify-between px-5 py-5 sm:px-[4vw]">
        <button
          onClick={() => scrollToId("top")}
          className="font-display text-2xl font-bold tracking-[0.1em] text-white"
          aria-label="INHAUS — back to top"
        >
          INHAUS.
        </button>

        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="hidden items-center gap-7 sm:flex">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-white/90 transition-colors hover:text-gold"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={open}
            className="flex items-center gap-2 border-l border-white/20 pl-5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-white transition-colors hover:text-gold"
            aria-label={`Open cart, ${totalQty} item${totalQty === 1 ? "" : "s"}`}
          >
            Cart
            <span
              className={cn(
                "flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[0.6rem] font-bold transition-transform",
                totalQty > 0 ? "bg-alert text-white" : "bg-white/15 text-white/70",
              )}
            >
              {totalQty}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
