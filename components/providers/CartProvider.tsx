"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { COUPON, PRODUCT } from "@/lib/product";

export interface CartLine {
  id: string;
  label: string;
  qty: number;
  price: number;
}

interface CartContextValue {
  items: CartLine[];
  totalQty: number;
  subtotal: number;
  discount: number;
  total: number;
  coupon: string | null;
  couponError: string | null;
  isOpen: boolean;
  toast: string | null;
  open: () => void;
  close: () => void;
  addItem: (label: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "inhaus-cart";

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.items)) setItems(parsed.items);
        if (typeof parsed.coupon === "string") setCoupon(parsed.coupon);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, coupon }));
    } catch {
      /* ignore */
    }
  }, [items, coupon, hydrated]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  }, []);

  const addItem = useCallback(
    (label: string, qty: number = 1) => {
      const id = slug(label);
      const add = Math.max(1, qty);
      setItems((prev) => {
        const existing = prev.find((l) => l.id === id);
        if (existing) {
          return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + add } : l));
        }
        return [...prev, { id, label, qty: add, price: PRODUCT.price }];
      });
      showToast(`${label} added to cart`);
    },
    [showToast],
  );

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const removeItem = useCallback(
    (id: string) => setItems((prev) => prev.filter((l) => l.id !== id)),
    [],
  );

  const applyCoupon = useCallback((code: string) => {
    const normalized = code.trim().toUpperCase();
    if (!normalized) {
      setCouponError("Enter a code.");
      return false;
    }
    if (normalized === COUPON.code) {
      setCoupon(COUPON.code);
      setCouponError(null);
      return true;
    }
    setCouponError("That code isn't valid.");
    return false;
  }, []);

  const removeCoupon = useCallback(() => {
    setCoupon(null);
    setCouponError(null);
  }, []);

  const { totalQty, subtotal } = useMemo(() => {
    const totalQty = items.reduce((n, l) => n + l.qty, 0);
    const subtotal = items.reduce((n, l) => n + l.qty * l.price, 0);
    return { totalQty, subtotal };
  }, [items]);

  const discount = useMemo(
    () => (coupon ? Math.round((subtotal * COUPON.percent) / 100) : 0),
    [coupon, subtotal],
  );
  const total = Math.max(0, subtotal - discount);

  const value: CartContextValue = {
    items,
    totalQty,
    subtotal,
    discount,
    total,
    coupon,
    couponError,
    isOpen,
    toast,
    open,
    close,
    addItem,
    setQty,
    removeItem,
    applyCoupon,
    removeCoupon,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
