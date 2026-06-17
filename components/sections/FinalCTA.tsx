import { COUPON } from "@/lib/product";
import { ScrollButton } from "@/components/ui/ScrollButton";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark px-5 py-28 text-center sm:px-[5vw] lg:py-40">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[100px]"
        style={{ background: "#C47E3F" }}
        aria-hidden
      />

      <Reveal className="relative z-10 mx-auto max-w-2xl">
        <span className="eyebrow block">Start today</span>
        <h2 className="mt-7 font-display text-[clamp(2.8rem,7vw,6rem)] font-light italic leading-[0.95] text-white">
          Pour better.
          <br />
          <span className="text-gold">Every morning.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xs text-sm font-light leading-relaxed text-white/45">
          Use{" "}
          <span className="font-mono font-medium text-gold">{COUPON.code}</span>{" "}
          for {COUPON.percent}% off your first order. Free shipping across India.
        </p>
        <ScrollButton targetId="shop" variant="gold" size="lg" className="mt-10">
          Shop The Reserve
        </ScrollButton>
      </Reveal>
    </section>
  );
}
