import { Reveal } from "@/components/ui/Reveal";
import { ScrollButton } from "@/components/ui/ScrollButton";

const BREAKOUT_IMG =
  "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=2000";

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(2.3rem,5vw,4rem)] font-normal leading-[1.1] text-white lg:sticky lg:top-28">
      {children}
    </h2>
  );
}

export function Manifesto() {
  return (
    <div id="manifesto" className="relative z-20 bg-dark">
      {/* 01 */}
      <section className="grid gap-10 border-b border-white/5 px-5 py-[12vw] sm:px-[5vw] lg:grid-cols-2 lg:gap-24 lg:py-[8vw]">
        <Title>The café queue is a trap.</Title>
        <Reveal className="space-y-7 text-[1.05rem] font-light leading-[1.8] text-white/80">
          <p>
            INHAUS started with a simple frustration. You sit down at your desk.
            You finally get into the flow state. And then, the caffeine wears
            off.
          </p>
          <p>
            You have two choices. Break your momentum to walk to a café, stand in
            line, and pay ₹250 for a latte.{" "}
            <strong className="font-semibold text-white">
              Or suffer through terrible, burnt instant coffee in the breakroom.
            </strong>
          </p>
          <p>
            Traditional coffee culture forces you to choose between quality and
            convenience. If you want great coffee, you sacrifice your time. If you
            want it fast, you drink garbage.
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

      {/* 02 */}
      <section className="grid gap-10 border-b border-white/5 px-5 py-[12vw] sm:px-[5vw] lg:grid-cols-2 lg:gap-24 lg:py-[8vw]">
        <Title>
          14 months of <em className="italic text-gold">obsessive extraction.</em>
        </Title>
        <Reveal className="space-y-7 text-[1.05rem] font-light leading-[1.8] text-white/80">
          <p>
            We didn&apos;t want to make another instant coffee. Dehydrating
            coffee strips it of its complex oils and aromatics. That&apos;s why
            instant coffee tastes like ash.
          </p>
          <p>
            Instead, we looked to the science of cold-extraction. By slowly
            brewing 100% specialty Arabica beans over hours at a low temperature,
            we captured the exact flavour profile of a commercial espresso
            machine.
          </p>
          <p>
            <strong className="font-semibold text-white">
              No heat. No bitterness. Just the pure, concentrated soul of the
              bean.
            </strong>
          </p>
          <p>
            We bottle it raw — no preservatives, no sugar, no stabilizers. Pour
            an ounce, add water or milk, and it doesn&apos;t taste{" "}
            <em className="italic">like</em> café coffee. It{" "}
            <em className="italic text-gold">is</em> café coffee.
          </p>
        </Reveal>
      </section>

      {/* 03 */}
      <section className="grid items-center gap-10 px-5 py-[12vw] sm:px-[5vw] lg:grid-cols-2 lg:gap-24 lg:py-[8vw]">
        <Title>
          Made for the <br className="hidden lg:block" />
          builders.
        </Title>
        <Reveal className="space-y-7 text-[1.05rem] font-light leading-[1.8] text-white/80">
          <p>
            We don&apos;t care about latte art or pretentious brewing ceremonies.
            We care about execution.
          </p>
          <p>
            INHAUS is for the people who ship code, build businesses, edit film,
            and pull all-nighters. It sits quietly on your desk or in your fridge,
            ready to give you a tactical advantage in exactly 60 seconds.
          </p>
          <ScrollButton targetId="shop" className="mt-2">
            Shop The Reserve
          </ScrollButton>
        </Reveal>
      </section>
    </div>
  );
}
