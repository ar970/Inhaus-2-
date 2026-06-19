"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function navTo(id: string) {
    setMobileOpen(false);
    scrollToId(id);
  }

  return (
    <div className="fixed inset-x-0 top-9 z-50">
      <header
        className={cn(
          "transition-all duration-500",
          scrolled || mobileOpen
            ? "border-b border-white/6 bg-dark/96 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-dark/80 to-transparent",
        )}
      >
        <div className="flex items-center justify-between px-5 py-5 sm:px-[4vw]">
          <button
            onClick={() => navTo("top")}
            className="font-display text-[1.4rem] italic text-white transition-opacity hover:opacity-70"
            aria-label="INHAUS — back to top"
          >
            INHAUS.
          </button>

          <div className="flex items-center gap-5">
            {/* Desktop nav */}
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

            {/* Cart */}
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

            {/* Mobile hamburger */}
            <button
              className="flex h-6 w-6 flex-col items-center justify-center gap-[5px] sm:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={cn(
                  "block h-px w-5 bg-white/80 transition-all duration-300",
                  mobileOpen && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-white/80 transition-all duration-300",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-white/80 transition-all duration-300",
                  mobileOpen && "-translate-y-[6px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="border-b border-white/8 bg-dark/97 backdrop-blur-md sm:hidden"
          >
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => navTo(item.id)}
                className="flex w-full items-center border-t border-white/6 px-5 py-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
