import { cn } from "@/lib/utils";

type Variant = "solid" | "gold" | "outline" | "dark" | "link";
type Size = "sm" | "md" | "lg" | "xl";

const base =
  "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.1em] transition-[transform,box-shadow,background-color,filter] duration-200 ease-out active:scale-[0.97] select-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap cursor-pointer";

const variants: Record<Exclude<Variant, "link">, string> = {
  solid:
    "bg-white text-dark hover:bg-gold hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(196,126,63,0.28)]",
  gold: "bg-gold text-dark hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(196,126,63,0.35)]",
  outline: "border border-white/25 text-white hover:bg-white hover:text-dark",
  dark: "border border-white/20 bg-dark text-white hover:bg-white hover:text-dark",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.7rem]",
  md: "h-12 px-7 text-[0.78rem]",
  lg: "h-14 px-9 text-[0.82rem]",
  xl: "h-[68px] px-14 text-[0.9rem] tracking-[0.14em]",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = "solid",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  if (variant === "link") {
    return (
      <button
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-white underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold",
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
