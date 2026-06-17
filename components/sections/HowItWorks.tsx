import { CupSoda, Droplets, Coffee } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    icon: Droplets,
    title: "Pour",
    text: "Add a splash of INHAUS concentrate to your favourite cup.",
  },
  {
    icon: CupSoda,
    title: "Mix",
    text: "Top with hot water, milk, or ice — however you like it.",
  },
  {
    icon: Coffee,
    title: "Enjoy",
    text: "Café-style specialty coffee, ready in under a minute.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent transition-colors duration-500">
            How it works
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight text-ink">
            Three steps. Sixty seconds.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Specialty coffee, ready in under a minute.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {/* connector */}
          <div
            className="absolute left-[16.66%] right-[16.66%] top-9 hidden border-t-2 border-dashed border-line sm:block"
            aria-hidden
          />
          {STEPS.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.1}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-line bg-white text-accent shadow-sm transition-colors duration-500">
                <step.icon size={28} strokeWidth={1.75} />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-[var(--accent-contrast)] transition-colors duration-500">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[220px] text-[15px] text-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
