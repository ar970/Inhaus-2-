"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { usePersona } from "@/components/providers/PersonaProvider";
import { useCart } from "@/components/providers/CartProvider";
import { PRODUCT } from "@/lib/product";
import { cn, formatINR } from "@/lib/utils";

export function StickyMobileBar() {
  const { persona } = usePersona();
  const { addItem, isOpen } = useCart();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = show && !isOpen;

  return (
    <div
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 md:hidden",
        "transition-all duration-300 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-[140%] opacity-0",
      )}
    >
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-ink/95 p-2 pl-4 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-cream">
            {persona.fuel}
          </p>
          <p className="text-xs text-cream/60">
            {formatINR(PRODUCT.price)} · ~{PRODUCT.cupsPerPouch} cups
          </p>
        </div>
        <button
          onClick={() => addItem(persona.fuel)}
          className="flex h-12 items-center gap-2 rounded-xl bg-accent px-5 text-[15px] font-semibold text-[var(--accent-contrast)] transition-[background-color] duration-500 active:scale-[0.98]"
        >
          <ShoppingBag size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
