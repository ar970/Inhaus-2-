"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINES = ["2am.", "The machine is dead.", "There's a third way."];

export function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setVisible(true);
    const t = setTimeout(() => setOut(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && !out && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <div className="relative h-24 w-full max-w-xs text-center">
            {LINES.map((line, i) => (
              <motion.p
                key={line}
                className="absolute inset-0 flex items-center justify-center font-mono text-[0.7rem] uppercase tracking-[0.28em] text-white/38"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                transition={{
                  duration: 0.78,
                  delay: i * 0.72,
                  times: [0, 0.22, 0.68, 1],
                  ease: "easeInOut",
                }}
              >
                {line}
              </motion.p>
            ))}

            <motion.span
              className="absolute inset-0 flex items-center justify-center font-display text-[clamp(2.4rem,6vw,3.6rem)] font-light italic text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.82,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              INHAUS.
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
