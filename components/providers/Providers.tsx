"use client";

import { MotionConfig } from "motion/react";
import { PersonaProvider } from "./PersonaProvider";
import { CartProvider } from "./CartProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <PersonaProvider>
        <CartProvider>{children}</CartProvider>
      </PersonaProvider>
    </MotionConfig>
  );
}
