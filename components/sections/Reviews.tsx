import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { REVIEWS } from "@/lib/reviews";

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <Stars rating={5} size={20} />
            <span className="text-sm font-semibold text-ink">
              4.9/5 · loved across India
            </span>
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight text-ink">
            Real cups. Real reviews.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 0.06}
              className="flex h-full flex-col rounded-3xl border border-line bg-white p-6"
            >
              <Stars rating={r.rating} />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                “{r.body}”
              </p>
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">{r.name}</p>
                <p className="text-xs text-muted">{r.location}</p>
                <span className="mt-3 inline-block rounded-pill bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors duration-500">
                  {r.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
