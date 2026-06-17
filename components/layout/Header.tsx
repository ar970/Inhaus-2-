"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { cn, scrollToId } from "@/lib/utils";

const NAV = [
  { label: "How", id: "how" },
  { label: "Story", id: "origin" },
  { label: "Reviews", id: "reviews" },
];

export function Header() {
  const { totalQty, open } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-7">
        <button
          onClick={() => scrollToId("top")}
          className="flex items-baseline gap-2 text-ink"
          aria-label="INHAUS — back to top"
        >
          <span className="font-display text-2xl leading-none tracking-tight">
            INHAUS
          </span>
          <span className="label hidden text-muted sm:inline">
            ™ Specialty Coffee
          </span>
        </button>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="label text-ink/70 transition-colors hover:text-accent"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={open}
          className="relative flex h-10 items-center gap-2 rounded-pill bg-ink pl-4 pr-4 text-cream transition-colors duration-300 hover:bg-espresso"
          aria-label={`Open cart, ${totalQty} item${totalQty === 1 ? "" : "s"}`}
        >
          <ShoppingBag size={16} strokeWidth={2} />
          <span className="label !tracking-[0.12em] text-cream">Cart</span>
          {totalQty > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 font-mono text-xs font-bold text-[var(--accent-contrast)]">
              {totalQty}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
