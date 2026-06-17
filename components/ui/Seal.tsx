"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Rotating circular stamp with text running around the edge — a tactile,
 * sticker-like editorial detail. Center holds `children` (an icon or glyph).
 */
export function Seal({
  text,
  children,
  className,
  spin = true,
}: {
  text: string;
  children?: React.ReactNode;
  className?: string;
  spin?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <div className={cn("relative aspect-square select-none", className)}>
      <svg
        viewBox="0 0 100 100"
        className={cn("h-full w-full", spin && "animate-spin-slow")}
        aria-hidden
      >
        <defs>
          <path
            id={`seal-${id}`}
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>
        <text
          className="fill-current font-mono"
          style={{ fontSize: 8.4, letterSpacing: "0.18em" }}
        >
          <textPath href={`#seal-${id}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
