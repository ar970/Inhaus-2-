"use client";

import { useCart } from "@/components/providers/CartProvider";
import { cn } from "@/lib/utils";

export function Toast() {
  const { toast } = useCart();
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed right-5 top-[84px] z-[60] bg-gold px-6 py-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.08em] text-dark shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out",
        toast ? "translate-x-0" : "translate-x-[150%]",
      )}
    >
      {toast ?? ""}
    </div>
  );
}
