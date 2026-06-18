import { Reveal } from "@/components/ui/Reveal";
import { ScrollButton } from "@/components/ui/ScrollButton";

export function ComparisonSection() {
  return (
    <section className="grid items-start gap-10 border-b border-white/5 bg-dark px-5 py-[12vw] sm:px-[5vw] lg:grid-cols-2 lg:gap-24 lg:py-[8vw]">
      <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-light italic leading-[1.1] text-white lg:sticky lg:top-28">
        Not instant.
        <br />
        Not a café.
        <br />
        <em className="not-italic text-gold">Better than both.</em>
      </h2>

      <Reveal className="space-y-6 text-[1rem] font-light leading-[1.85] text-white/85">
        <p>
          Instant coffee is spray-dried powder. The process strips the oils,
          aromatics, and character that make Arabica taste like anything worth
          drinking. That&apos;s why it tastes like ash. It is not coffee — it
          is the memory of coffee.
        </p>
        <p>
          INHAUS is brewed liquid concentrate made from the same single-origin
          specialty Arabica that a Chikmagalur café charges ₹250 for. Pour
          10ml. Add 90ml of water, milk, or ice — whatever you have. Stir.
          Done in 60 seconds. The cup tastes like a skilled barista made it,
          because a skilled cold-extraction process did.
        </p>
        <p className="font-medium text-white">
          One bottle. 20 cups. ₹25 each.{" "}
          <span className="text-gold">No queue. No machine. No compromise.</span>
        </p>
        <ScrollButton targetId="shop" className="mt-2">
          Shop The Reserve
        </ScrollButton>
      </Reveal>
    </section>
  );
}
