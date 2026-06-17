import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Editorial image frame. Pass `src` to drop in a real photo (object-cover),
 * otherwise it renders an intentional warm, grainy placeholder with a caption
 * — so the layout reads as designed, not unfinished.
 */
export function PhotoFrame({
  src,
  alt = "",
  caption,
  className,
  children,
  rounded = "rounded-[1.75rem]",
}: {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
  children?: React.ReactNode;
  rounded?: string;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-ink/10 bg-sand",
        rounded,
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      ) : (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_10%,rgb(var(--accent-rgb)/0.28),transparent_55%)] transition-colors duration-500" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_100%,#4a3526,transparent_60%)]" />
          <div className="grain absolute inset-0 opacity-[0.5] mix-blend-multiply" />
        </div>
      )}

      {children}

      {caption && (
        <figcaption className="absolute bottom-4 left-4 z-10 rounded-pill bg-cream/90 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink backdrop-blur">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
