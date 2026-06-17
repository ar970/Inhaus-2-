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
    <section id="fuel" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight text-ink">
            Choose Your Fuel.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Every ambition deserves a different brew.
          </p>
        </Reveal>

        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 -mx-5">
          {PERSONA_ORDER.map((id, i) => {
            const p = PERSONAS[id];
            const Icon = ICONS[id];
            const selected = personaId === id;
            const tint = (a: number) => `rgb(${p.accentRgb} / ${a})`;

            return (
              <Reveal
                key={id}
                delay={i * 0.08}
                className="min-w-[80%] snap-center sm:min-w-0"
              >
                <button
                  onClick={() => select(id)}
                  aria-pressed={selected}
                  className={cn(
                    "group relative flex h-full w-full flex-col items-start rounded-3xl border bg-white p-7 text-left transition-all duration-500 ease-out",
                    selected
                      ? "-translate-y-1 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.4)]"
                      : "border-line opacity-60 hover:opacity-100 hover:-translate-y-0.5",
                  )}
                  style={
                    selected
                      ? {
                          borderColor: tint(0.5),
                          boxShadow: `0 28px 70px -30px ${tint(0.55)}`,
                        }
                      : undefined
                  }
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundColor: tint(0.12), color: p.accent }}
                  >
                    <Icon size={26} strokeWidth={1.9} />
                  </span>

                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                    {p.fuel}
                  </h3>
                  <p className="mt-2 text-[15px] text-muted">{p.cardSubtext}</p>

                  <span
                    className="mt-7 inline-flex items-center gap-2 rounded-pill px-5 py-2.5 text-sm font-semibold transition-all duration-500"
                    style={{
                      backgroundColor: selected ? p.accent : tint(0.1),
                      color: selected ? p.accentContrast : p.accent,
                    }}
                  >
                    {p.cardCta}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>

                  {selected && (
                    <span
                      className="absolute right-5 top-5 h-2.5 w-2.5 rounded-full"
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
