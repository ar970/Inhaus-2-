import { Reveal } from "@/components/ui/Reveal";

const BREAKOUT_IMG =
  "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=2000";

const ORIGIN_SPECS = [
  { label: "Region", value: "Chikmagalur, Karnataka" },
  { label: "Altitude", value: "4,300 ft" },
  { label: "Bean", value: "Single-origin Arabica" },
  { label: "Process", value: "Cold-extracted" },
  { label: "Preservatives", value: "None. Ever." },
];

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

      {/* 01 — dark — The problem */}
      <section className="grid gap-10 border-b border-white/5 bg-dark px-5 py-[12vw] sm:px-[5vw] lg:grid-cols-2 lg:gap-24 lg:py-[8vw]">
        <DarkTitle>The café queue is a trap.</DarkTitle>
        <Reveal className="space-y-6 text-[1rem] font-light leading-[1.85] text-white/70">
          <p>
            You lock in. The flow hits. Then the caffeine drops. Two choices:
            break everything, walk 10 minutes to the nearest café, spend ₹250,
            and lose 30 minutes you won&apos;t get back — or pour the burnt
            output of the office machine and pretend it&apos;s fine.
          </p>
          <p>
            Great coffee in India has always demanded sacrifice. Your time. Your
            money. Your standards. We decided that was a design flaw, not a
            feature. INHAUS exists to remove the trade-off entirely.
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

      {/* 02 — cream — Origin story */}
      <section className="grid gap-10 border-b border-dark/8 bg-cream px-5 py-[12vw] sm:px-[5vw] lg:grid-cols-2 lg:gap-24 lg:py-[8vw]">
        <div className="lg:sticky lg:top-28">
          <LightTitle>
            Born at{" "}
            <em className="not-italic text-gold">4,300 feet</em>
            <br />above sea level.
          </LightTitle>

          {/* Origin spec grid */}
          <dl className="mt-10 grid grid-cols-1 gap-y-4 border-t border-dark/10 pt-8">
            {ORIGIN_SPECS.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-4">
                <dt className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-dark/38">
                  {s.label}
                </dt>
                <dd className="text-right font-mono text-[0.72rem] font-medium text-dark/75">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal className="space-y-6 text-[1rem] font-light leading-[1.85] text-dark/70">
          <p>
            Chikmagalur, Karnataka. India&apos;s oldest coffee region — where a
            17th-century Sufi saint named Baba Budan smuggled seven coffee seeds
            home from Yemen and planted them in these misty Western Ghats hills.
            The same shade-grown estates now supply specialty cafés across
            Europe and Japan. That is where INHAUS begins.
          </p>
          <p>
            We source single-origin Arabica directly from shade-grown farms at
            4,300 feet above sea level. Cold-extraction brews those beans over
            many hours at low temperature — not spray-dried, not freeze-dried,
            not instant. Real brewed liquid, locked at peak extraction to
            preserve the full flavour profile:{" "}
            <strong className="font-medium text-dark">
              naturally nutty and bitter-sweet, with dark chocolate notes
              and a clean finish.
            </strong>
          </p>
          <p>
            No preservatives. No sugar. No stabilisers. One ingredient:
            coffee. Bottled raw, sealed fresh.
          </p>
        </Reveal>
      </section>

    </div>
  );
}
