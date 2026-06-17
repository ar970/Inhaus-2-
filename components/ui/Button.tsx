import { cn } from "@/lib/utils";

type Variant = "accent" | "dark" | "light" | "outline" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-tight transition duration-300 ease-out active:scale-[0.98] select-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  accent:
    "bg-accent text-[var(--accent-contrast)] shadow-[0_10px_34px_-12px_rgb(var(--accent-rgb)/0.7)] hover:brightness-[1.06] hover:-translate-y-0.5",
  dark: "bg-ink text-cream hover:bg-ink-soft hover:-translate-y-0.5",
  light: "bg-cream text-ink hover:bg-white hover:-translate-y-0.5",
  outline:
    "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.04]",
  ghost: "text-ink hover:bg-ink/[0.05]",
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
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
