import { Fragment } from "react";
import { Coffee, CupSoda, Droplets } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { n: "01", icon: Droplets, title: "Pour", text: "A splash of INHAUS concentrate into your favourite cup." },
  { n: "02", icon: CupSoda, title: "Mix", text: "Top with hot water, milk, or ice — however you like it." },
  { n: "03", icon: Coffee, title: "Sip", text: "Café-style specialty coffee, ready in under a minute." },
];

function Arrow() {
  return (
    <svg
      className="hidden h-6 w-16 shrink-0 self-start text-line sm:block sm:mt-6"
      viewBox="0 0 70 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 12C20 6 40 18 58 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M50 6L60 12L50 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="px-5 py-20 sm:px-7 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex items-center gap-3 text-muted">
          <span className="label text-ink">(04)</span>
          <span className="h-px w-8 bg-line" />
          <span className="label">How it works</span>
        </Reveal>

        <Reveal delay={0.05} className="mt-5 max-w-2xl">
          <h2 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-ink">
            Three steps. <span className="italic text-accent transition-colors duration-500">Sixty seconds.</span>
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-4">
          {STEPS.map((s, i) => (
            <Fragment key={s.n}>
              <Reveal delay={i * 0.1} className="flex-1">
                <div className="flex items-center gap-4">
                  <span className="font-display text-6xl leading-none text-accent transition-colors duration-500">
                    {s.n}
                  </span>
                  <s.icon size={28} strokeWidth={1.6} className="text-ink" />
                </div>
                <h3 className="mt-5 font-display text-3xl text-ink">{s.title}</h3>
                <p className="mt-2 max-w-[260px] text-[15px] text-espresso/75">
                  {s.text}
                </p>
              </Reveal>
              {i < STEPS.length - 1 && <Arrow />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
