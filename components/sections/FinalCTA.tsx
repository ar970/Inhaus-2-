import { Check } from "lucide-react";
import { COUPON, PRODUCT } from "@/lib/product";
import { ScrollButton } from "@/components/ui/ScrollButton";
import { Reveal } from "@/components/ui/Reveal";

const BENEFITS = [
  {
    headline: "Save ₹175 per cup",
    body: "Cafés charge ₹200+. INHAUS costs ₹25. Same beans, no queue.",
  },
  {
    headline: "20 barista-quality cups per bottle",
    body: "Cold-extracted Arabica from Chikmagalur — pour, mix, done in 60 seconds.",
  },
  {
    headline: "Free shipping across India",
    body: "Every order. No minimum. Delivered in 2–4 days.",
  },
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark px-5 py-24 text-center sm:px-[5vw] lg:py-36">
      {/* Dual ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "#C47E3F" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/4 rounded-full opacity-[0.05] blur-[100px]"
        style={{ background: "#C47E3F" }}
        aria-hidden
      />

      <Reveal className="relative z-10 mx-auto max-w-xl">
        <span className="eyebrow block">The Reserve — Limited Supply</span>

        <h2 className="mt-6 font-display text-[clamp(3.4rem,8vw,7rem)] font-light italic leading-[0.92] text-white">
          Pour better.
          <br />
          <span className="text-gold">Every morning.</span>
        </h2>

        {/* Value bullets */}
        <ul className="mt-10 space-y-4 text-left">
          {BENEFITS.map((b) => (
            <li key={b.headline} className="flex gap-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                <Check size={11} className="text-gold" strokeWidth={3} />
              </span>
              <span className="text-sm leading-snug text-white/82">
                <strong className="font-semibold text-white">{b.headline}</strong>
                {" — "}
                {b.body}
              </span>
            </li>
          ))}
        </ul>

        {/* Coupon strip */}
        <div className="mt-8 flex items-center justify-between border border-gold/25 bg-gold/[0.07] px-5 py-3.5">
          <div className="text-left">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-white/65">
              First order discount
            </p>
            <p className="mt-0.5 font-mono text-[0.78rem] font-medium uppercase tracking-[0.1em] text-gold">
              Use {COUPON.code} — save ₹{Math.round((PRODUCT.price * COUPON.percent) / 100)} instantly
            </p>
          </div>
          <span className="font-display text-3xl italic text-white/35">
            {COUPON.percent}%
          </span>
        </div>

        {/* Primary CTA */}
        <ScrollButton
          targetId="shop"
          variant="gold"
          size="xl"
          className="mt-6 w-full"
        >
          Shop The Reserve — ₹{PRODUCT.price}
        </ScrollButton>

        <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/55">
          No subscription · Free shipping · 20 cups guaranteed
        </p>
      </Reveal>
    </section>
  );
}
