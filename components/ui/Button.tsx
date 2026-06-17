import { cn } from "@/lib/utils";

type Variant = "accent" | "ink" | "paper" | "outline" | "glass" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-tight transition duration-300 ease-out active:scale-[0.98] select-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Exclude<Variant, "link">, string> = {
  accent:
    "bg-accent text-[var(--accent-contrast)] shadow-[0_12px_34px_-14px_rgb(var(--accent-rgb)/0.75)] hover:brightness-[1.05] hover:-translate-y-0.5",
  ink: "bg-ink text-cream hover:bg-espresso hover:-translate-y-0.5",
  paper: "bg-cream text-ink hover:bg-white hover:-translate-y-0.5",
  outline:
    "border border-ink/25 text-ink hover:bg-ink hover:text-cream hover:border-ink",
  glass:
    "bg-cream/10 text-cream border border-cream/25 backdrop-blur-md hover:bg-cream/20 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = "accent",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  if (variant === "link") {
    return (
      <button
        className={cn(
          "group inline-flex items-center gap-2 font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-ink",
          className,
        )}
        {...props}
      />
    );
  }
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
