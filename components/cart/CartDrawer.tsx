"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  Tag,
  Trash2,
  Truck,
  X,
} from "lucide-react";
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

  const handleApply = () => {
    if (applyCoupon(code)) setCode("");
  };

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
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Shopping cart">
          <motion.div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          />

          <motion.aside
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="font-display text-xl font-semibold text-ink">
                {placed ? "Order confirmed" : "Your cart"}
              </h2>
              <button
                onClick={close}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5"
              >
                <X size={20} />
              </button>
            </div>

            {placed ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-[var(--accent-contrast)]">
                  <Check size={30} strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  You&apos;re all set.
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  This is a demo checkout — no payment was taken. Your café-style
                  coffee would be on its way, shipping free across India.
                </p>
                <Button onClick={handleDone} className="mt-8" size="lg">
                  Continue
                </Button>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-ink-soft">
                  <ShoppingBag size={28} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  Your cart is empty
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  One pouch makes ~20 cups of café-style coffee. Your next great
                  cup is one tap away.
                </p>
                <Button onClick={startShopping} className="mt-8" size="lg">
                  Shop the pouch
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="divide-y divide-line">
                    {items.map((line) => (
                      <li key={line.id} className="flex gap-4 py-4">
                        <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded-xl bg-ink">
                          <div className="h-10 w-7 rounded-md bg-accent transition-[background-color] duration-500" />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between gap-3">
                            <div>
                              <p className="font-semibold text-ink">
                                INHAUS Concentrate
                              </p>
                              <p className="text-sm text-muted">{line.label}</p>
                            </div>
                            <button
                              onClick={() => removeItem(line.id)}
                              aria-label={`Remove ${line.label}`}
                              className="text-muted transition-colors hover:text-ink"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="mt-auto flex items-center justify-between pt-2">
                            <div className="flex items-center rounded-pill border border-line">
                              <button
                                onClick={() => setQty(line.id, line.qty - 1)}
                                aria-label="Decrease quantity"
                                className="flex h-8 w-8 items-center justify-center text-ink-soft transition-colors hover:text-accent"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-7 text-center text-sm font-semibold tabular-nums">
                                {line.qty}
                              </span>
                              <button
                                onClick={() => setQty(line.id, line.qty + 1)}
                                aria-label="Increase quantity"
                                className="flex h-8 w-8 items-center justify-center text-ink-soft transition-colors hover:text-accent"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="font-semibold tabular-nums text-ink">
                              {formatINR(line.qty * line.price)}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-line px-6 py-5">
                  {/* coupon */}
                  {coupon ? (
                    <div className="mb-4 flex items-center justify-between rounded-xl bg-accent/10 px-4 py-3">
                      <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                        <Tag size={15} className="text-accent" />
                        {coupon} applied · {COUPON.percent}% off
                      </span>
                      <button
                        onClick={removeCoupon}
                        className="text-xs font-medium text-muted underline-offset-2 hover:underline"
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
                          onKeyDown={(e) => e.key === "Enter" && handleApply()}
                          placeholder="Coupon code"
                          aria-label="Coupon code"
                          className="h-11 flex-1 rounded-pill border border-line bg-white px-4 text-sm outline-none placeholder:text-muted/70 focus:border-accent"
                        />
                        <Button variant="dark" size="sm" onClick={handleApply}>
                          Apply
                        </Button>
                      </div>
                      {couponError ? (
                        <p className="mt-2 px-1 text-xs text-red-600">
                          {couponError}
                        </p>
                      ) : (
                        <p className="mt-2 px-1 text-xs text-muted">
                          First order? Try <span className="font-semibold">{COUPON.code}</span>.
                        </p>
                      )}
                    </div>
                  )}

                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted">Subtotal</dt>
                      <dd className="font-medium tabular-nums">
                        {formatINR(subtotal)}
                      </dd>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-accent">
                        <dt>Discount ({COUPON.percent}%)</dt>
                        <dd className="font-medium tabular-nums">
                          −{formatINR(discount)}
                        </dd>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <dt className="flex items-center gap-1.5 text-muted">
                        <Truck size={14} /> Shipping
                      </dt>
                      <dd className="font-semibold text-ink">Free</dd>
                    </div>
                    <div className="flex justify-between border-t border-line pt-3 text-base">
                      <dt className="font-semibold text-ink">Total</dt>
                      <dd className="font-display text-lg font-semibold tabular-nums text-ink">
                        {formatINR(total)}
                      </dd>
                    </div>
                  </dl>

                  <Button
                    onClick={() => setPlaced(true)}
                    size="lg"
                    className="mt-4 w-full"
                  >
                    Checkout · {formatINR(total)}
                    <ArrowRight size={18} />
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted">
                    Demo checkout — no payment is taken. Free shipping across India.
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
