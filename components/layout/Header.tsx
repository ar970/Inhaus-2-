"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/components/providers/CartProvider";
import { cn, scrollToId } from "@/lib/utils";

const NAV = [
  { label: "Story", id: "manifesto" },
  { label: "How it Works", id: "how-it-works" },
  { label: "Shop", id: "shop" },
];

export function Header() {
  const { totalQty, open } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-9 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/6 bg-dark/96 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-dark/80 to-transparent",
      )}
    >
      <div className="flex items-center justify-between px-5 py-5 sm:px-[4vw]">
        <button
          onClick={() => scrollToId("top")}
          className="font-display text-[1.4rem] italic text-white transition-opacity hover:opacity-70"
          aria-label="INHAUS — back to top"
        >
          INHAUS.
        </button>

        <div className="flex items-center gap-7">
          <nav className="hidden items-center gap-8 sm:flex">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={open}
            className="flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-white sm:border-l sm:border-white/15 sm:pl-7"
            aria-label={`Open cart, ${totalQty} item${totalQty === 1 ? "" : "s"}`}
          >
            Cart
            {totalQty > 0 && (
              <span className="flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[0.58rem] font-bold text-dark">
                {totalQty}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
