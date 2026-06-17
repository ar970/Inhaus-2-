"use client";

import { ArrowRight, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePersona } from "@/components/providers/PersonaProvider";
import { PERSONA_ORDER, PERSONAS, type PersonaId } from "@/lib/personas";
import { Reveal } from "@/components/ui/Reveal";
import { cn, scrollToId } from "@/lib/utils";

const ICONS: Record<PersonaId, LucideIcon> = {
  student: GraduationCap,
  creator: Sparkles,
  professional: Briefcase,
};

export function ChooseYourFuel() {
  const { personaId, setPersona } = usePersona();

  const select = (id: PersonaId) => {
    setPersona(id);
    scrollToId("shop");
  };

  return (
    <section id="fuel" className="px-5 py-20 sm:px-7 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex items-center gap-3 text-muted">
          <span className="label text-ink">(02)</span>
          <span className="h-px w-8 bg-line" />
          <span className="label">Pick your brew</span>
        </Reveal>

        <Reveal
          delay={0.05}
          className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-ink">
            Choose your <span className="italic text-accent transition-colors duration-500">fuel.</span>
          </h2>
          <p className="max-w-xs text-espresso/80">
            Every ambition deserves a different brew. Tap one — the whole place
            shifts to match.
          </p>
        </Reveal>

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 no-scrollbar sm:grid sm:grid-cols-3 sm:overflow-visible">
          {PERSONA_ORDER.map((id, i) => {
            const p = PERSONAS[id];
            const Icon = ICONS[id];
            const selected = personaId === id;
            const tint = (a: number) => `rgb(${p.accentRgb} / ${a})`;

            return (
              <Reveal
                key={id}
                delay={i * 0.08}
                className="min-w-[78%] snap-center sm:min-w-0"
              >
                <button
                  onClick={() => select(id)}
                  aria-pressed={selected}
                  className={cn(
                    "group relative flex h-full w-full flex-col items-start overflow-hidden rounded-[1.5rem] border bg-cream p-7 text-left transition-all duration-500 ease-out",
                    selected
                      ? "-translate-y-1"
                      : "border-line opacity-55 hover:opacity-100 hover:-translate-y-0.5",
                  )}
                  style={
                    selected
                      ? {
                          borderColor: tint(0.55),
                          backgroundColor: tint(0.07),
                          boxShadow: `0 26px 60px -32px ${tint(0.6)}`,
                        }
                      : undefined
                  }
                >
                  <div className="flex w-full items-start justify-between">
                    <span
                      className="font-display text-5xl leading-none"
                      style={{ color: p.accent }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: tint(0.14), color: p.accent }}
                    >
                      <Icon size={22} strokeWidth={1.9} />
                    </span>
                  </div>

                  <h3 className="mt-10 font-display text-3xl leading-none text-ink">
                    {p.fuel}
                  </h3>
                  <p className="mt-3 text-[15px] text-espresso/75">
                    {p.cardSubtext}
                  </p>

                  <span
                    className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] transition-all duration-500"
                    style={{ color: p.accent }}
                  >
                    {p.cardCta}
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>

                  {selected && (
                    <span
                      className="absolute right-6 top-6 h-2.5 w-2.5 animate-pulse rounded-full"
                      style={{ backgroundColor: p.accent }}
                      aria-hidden
                    />
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
