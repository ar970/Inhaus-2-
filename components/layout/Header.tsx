"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { cn, scrollToId } from "@/lib/utils";

const NAV = [
  { label: "How it works", id: "how" },
  { label: "Reviews", id: "reviews" },
  { label: "Our story", id: "origin" },
];

export function Header() {
  const { totalQty, open } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line/80 bg-cream/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => scrollToId("top")}
          className={cn(
            "font-display text-xl font-semibold tracking-[0.16em] transition-colors duration-500",
            scrolled ? "text-ink" : "text-cream",
          )}
          aria-label="INHAUS — back to top"
        >
          INHAUS
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={cn(
                "text-sm font-medium transition-colors duration-500 hover:text-accent",
                scrolled ? "text-ink-soft" : "text-cream/90",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={open}
          className={cn(
            "relative flex h-10 items-center gap-2 rounded-pill pl-4 pr-4 text-sm font-semibold transition-all duration-500",
            scrolled
              ? "bg-ink text-cream hover:bg-ink-soft"
              : "bg-cream/15 text-cream backdrop-blur-md hover:bg-cream/25",
          )}
          aria-label={`Open cart, ${totalQty} item${totalQty === 1 ? "" : "s"}`}
        >
          <ShoppingBag size={17} strokeWidth={2} />
          <span className="hidden sm:inline">Cart</span>
          {totalQty > 0 && (
            <span className="ml-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-bold text-[var(--accent-contrast)]">
              {totalQty}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
