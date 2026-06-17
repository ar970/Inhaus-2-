import { Reveal } from "@/components/ui/Reveal";
import { ScrollButton } from "@/components/ui/ScrollButton";

const BREAKOUT_IMG =
  "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=2000";

function DarkTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-light italic leading-[1.1] text-white lg:sticky lg:top-28">
      {children}
    </h2>
  );
}

function LightTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-light italic leading-[1.1] text-dark lg:sticky lg:top-28">
      {children}
    </h2>
  );
}

export function Manifesto() {
  return (
    <div id="manifesto" className="relative z-20">
      {/* 01 — dark */}
      <section className="grid gap-10 border-b border-white/5 bg-dark px-5 py-[12vw] sm:px-[5vw] lg:grid-cols-2 lg:gap-24 lg:py-[8vw]">
        <DarkTitle>The café queue is a trap.</DarkTitle>
        <Reveal className="space-y-6 text-[1rem] font-light leading-[1.85] text-white/70">
          <p>
            You sit down, get into the flow, and the caffeine wears off. Two
            choices: walk to a café, lose 30 minutes, and spend ₹250. Or drink
            the burnt sludge from the office machine.
          </p>
          <p>
            Good coffee has always required sacrifice — your time, your wallet,
            or both. We decided that was a design flaw worth fixing.
          </p>
        </Reveal>
      </section>

      {/* full-bleed image break */}
      <div
        className="h-[50vh] border-b border-white/5"
        style={{
          backgroundImage: `url('${BREAKOUT_IMG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        aria-hidden
      />

      {/* 02 — cream */}
      <section className="grid gap-10 border-b border-dark/8 bg-cream px-5 py-[12vw] sm:px-[5vw] lg:grid-cols-2 lg:gap-24 lg:py-[8vw]">
        <LightTitle>
          14 months of{" "}
          <em className="not-italic text-gold">obsessive extraction.</em>
        </LightTitle>
        <Reveal className="space-y-6 text-[1rem] font-light leading-[1.85] text-dark/70">
          <p>
            Dehydrating coffee strips the oils and aromatics that make great
            espresso taste great. That&apos;s why instant coffee tastes like ash.
            We took a different route.
          </p>
          <p>
            Cold-extraction brews 100% specialty Arabica over many hours at
            low temperature — locking in the full flavour profile of a
            commercial machine. We bottle it raw. No preservatives, no sugar,
            no stabilisers.
          </p>
          <p className="font-medium text-dark">
            Pour an ounce. Add water or milk. It doesn&apos;t taste{" "}
            <em>like</em> café coffee — it <em className="text-gold">is</em>{" "}
            café coffee.
          </p>
        </Reveal>
      </section>

      {/* 03 — dark */}
      <section className="grid items-center gap-10 bg-dark px-5 py-[12vw] sm:px-[5vw] lg:grid-cols-2 lg:gap-24 lg:py-[8vw]">
        <DarkTitle>
          Made for the{" "}
          <br className="hidden lg:block" />
          builders.
        </DarkTitle>
        <Reveal className="space-y-6 text-[1rem] font-light leading-[1.85] text-white/70">
          <p>
            We don&apos;t care about latte art or brewing ceremonies. INHAUS is
            for the people who ship code, edit film, build businesses, and pull
            all-nighters. It sits quietly in your fridge and gives you a
            tactical advantage in 60 seconds.
          </p>
          <ScrollButton targetId="shop" className="mt-2">
            Shop The Reserve
          </ScrollButton>
        </Reveal>
      </section>
    </div>
  );
}
