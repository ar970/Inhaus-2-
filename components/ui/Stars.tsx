import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  rating = 5,
  className,
  size = 16,
}: {
  rating?: number;
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating ? "fill-accent text-accent" : "fill-line text-line"
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
