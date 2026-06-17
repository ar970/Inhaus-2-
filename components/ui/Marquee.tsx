import { cn } from "@/lib/utils";

/**
 * Seamless scrolling ticker — an editorial nod to Araku's repeating banner.
 * Renders two identical tracks and translates by -50% for a loop with no seam.
 */
export function Marquee({
  items,
  className,
  duration = "32s",
  reverse = false,
}: {
  items: string[];
  className?: string;
  duration?: string;
  reverse?: boolean;
}) {
  const Block = (
    <ul
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden
    >
      {items.map((t, i) => (
        <li key={i} className="flex items-center gap-10">
          <span className="label !text-[0.78rem] whitespace-nowrap">{t}</span>
          <span className="text-[var(--accent)] transition-colors duration-500">
            ✳
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("flex overflow-hidden", className)}>
      <div
        className="flex animate-marquee whitespace-nowrap will-change-transform"
        style={{
          ["--marquee-duration" as string]: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {Block}
        {Block}
      </div>
    </div>
  );
}
