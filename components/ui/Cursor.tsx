"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const [visible, setVisible] = useState(false);
  const [over, setOver] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const x = useSpring(mx, { damping: 22, stiffness: 210 });
  const y = useSpring(my, { damping: 22, stiffness: 210 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      setOver(!!(e.target as HTMLElement).closest("a,button,[role='button']"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [mx, my, visible]);

  return (
    <>
      {/* amber dot */}
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold lg:block"
        style={{ x, y, width: 7, height: 7 }}
        animate={{ scale: over ? 0 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.12 }}
      />
      {/* ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/55 lg:block"
        style={{ x, y, width: 36, height: 36 }}
        animate={{
          scale: over ? 1.5 : 1,
          opacity: visible ? (over ? 1 : 0.45) : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
