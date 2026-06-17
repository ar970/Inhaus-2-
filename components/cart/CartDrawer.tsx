"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Minus, Plus, ShoppingBag, Trash2, Truck, X } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { Button } from "@/components/ui/Button";
import { COUPON } from "@/lib/product";
import { formatINR, scrollToId } from "@/lib/utils";

export function CartDrawer() {
  const {
    isOpen,
    close,
    items,
    setQty,
    removeItem,
    subtotal,
    discount,
    total,
    coupon,
    couponError,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [code, setCode] = useState("");
  const [placed, setPlaced] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  const handleDone = () => {
    items.forEach((l) => removeItem(l.id));
    removeCoupon();
    setPlaced(false);
    close();
  };

  const startShopping = () => {
    close();
    scrollToId("shop");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Cart">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          />
          <motion.aside
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-mid text-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <h2 className="font-display text-xl text-white">
                {placed ? "Order confirmed" : "Your cart"}
              </h2>
              <button
                onClick={close}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center text-white/60 transition-colors hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {placed ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-dark">
                  <Check size={30} strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">You&apos;re all set.</h3>
                <p className="mt-2 max-w-xs text-sm text-white/55">
                  Demo checkout — no payment was taken. Your INHAUS would be on its
                  way, shipping free across India.
                </p>
                <Button onClick={handleDone} variant="gold" size="lg" className="mt-8">
                  Continue
                </Button>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-white/60">
                  <ShoppingBag size={26} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">Your cart is empty</h3>
                <p className="mt-2 max-w-xs text-sm text-white/55">
                  One bottle makes ~20 cups of café-style coffee.
                </p>
                <Button onClick={startShopping} variant="gold" size="lg" className="mt-8">
                  Shop The Reserve
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="divide-y divide-white/10">
                    {items.map((line) => (
                      <li key={line.id} className="flex gap-4 py-4">
                        <div className="flex h-20 w-16 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03]">
                          <span className="font-display text-2xl text-gold">
                            {line.label.charAt(0)}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between gap-3">
                            <div>
                              <p className="font-medium text-white">{line.label}</p>
                              <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/40">
                                200ml · ~20 cups
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(line.id)}
                              aria-label={`Remove ${line.label}`}
                              className="text-white/40 transition-colors hover:text-white"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="mt-auto flex items-center justify-between pt-2">
                            <div className="flex items-center border border-white/15">
                              <button
                                onClick={() => setQty(line.id, line.qty - 1)}
                                aria-label="Decrease quantity"
                                className="flex h-8 w-8 items-center justify-center text-white/70 transition-colors hover:text-gold"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-7 text-center font-mono text-sm">{line.qty}</span>
                              <button
                                onClick={() => setQty(line.id, line.qty + 1)}
                                aria-label="Increase quantity"
                                className="flex h-8 w-8 items-center justify-center text-white/70 transition-colors hover:text-gold"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="font-medium tabular-nums text-white">
                              {formatINR(line.qty * line.price)}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 px-6 py-5">
                  {coupon ? (
                    <div className="mb-4 flex items-center justify-between border border-gold/40 bg-gold/10 px-4 py-3">
                      <span className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-gold">
                        {coupon} · {COUPON.percent}% off
                      </span>
                      <button
                        onClick={removeCoupon}
                        className="text-[0.7rem] uppercase tracking-[0.08em] text-white/50 hover:text-white"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="flex gap-2">
                        <input
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && (applyCoupon(code), setCode(""))}
                          placeholder="COUPON CODE"
                          aria-label="Coupon code"
                          className="h-11 flex-1 border border-white/15 bg-transparent px-4 font-mono text-xs uppercase tracking-[0.08em] text-white outline-none placeholder:text-white/30 focus:border-gold"
                        />
                        <Button variant="dark" size="sm" onClick={() => { if (applyCoupon(code)) setCode(""); }}>
                          Apply
                        </Button>
                      </div>
                      <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.06em] text-white/40">
                        {couponError ? (
                          <span className="text-alert">{couponError}</span>
                        ) : (
                          <>First order? Try {COUPON.code}.</>
                        )}
                      </p>
                    </div>
                  )}

                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/60">
                      <dt>Subtotal</dt>
                      <dd className="tabular-nums text-white">{formatINR(subtotal)}</dd>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-gold">
                        <dt>Discount ({COUPON.percent}%)</dt>
                        <dd className="tabular-nums">−{formatINR(discount)}</dd>
                      </div>
                    )}
                    <div className="flex justify-between text-white/60">
                      <dt className="flex items-center gap-1.5">
                        <Truck size={14} /> Shipping
                      </dt>
                      <dd className="text-white">Free</dd>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-3">
                      <dt className="font-display text-lg text-white">Total</dt>
                      <dd className="font-display text-lg tabular-nums text-white">
                        {formatINR(total)}
                      </dd>
                    </div>
                  </dl>

                  <Button onClick={() => setPlaced(true)} variant="gold" size="lg" className="mt-4 w-full">
                    Checkout — {formatINR(total)}
                    <ArrowRight size={18} />
                  </Button>
                  <p className="mt-3 text-center font-mono text-[0.64rem] uppercase tracking-[0.06em] text-white/35">
                    Demo checkout · free shipping across India
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
