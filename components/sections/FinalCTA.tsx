import { COUPON } from "@/lib/product";
import { ScrollButton } from "@/components/ui/ScrollButton";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-mid px-5 py-28 text-center sm:px-[5vw] lg:py-40">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[120px]"
        style={{ background: "#D4AF37" }}
        aria-hidden
      />

      <Reveal className="relative z-10 mx-auto max-w-3xl">
        <span className="eyebrow block">Your first bottle is waiting</span>
        <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.5rem)] font-normal leading-[1.05] text-white">
          The best coffee decision
          <br />
          <em className="font-normal italic text-gold">you&apos;ll ever make.</em>
        </h2>
        <p className="mx-auto mt-7 max-w-lg text-[1.05rem] font-light leading-relaxed text-white/65">
          ₹25 a cup. 60 seconds to pour. No café queue. No burnt office
          coffee. Use code{" "}
          <span className="font-mono font-medium text-gold">{COUPON.code}</span>{" "}
          for {COUPON.percent}% off your first order.
        </p>
        <ScrollButton
          targetId="shop"
          variant="gold"
          size="lg"
          className="mt-10"
        >
          Shop The Reserve
        </ScrollButton>
      </Reveal>
    </section>
  );
}
