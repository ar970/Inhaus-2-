import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { REVIEWS } from "@/lib/reviews";

export function Reviews() {
  return (
    <section id="reviews" className="px-5 py-20 sm:px-7 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex items-center gap-3 text-muted">
          <span className="label text-ink">(06)</span>
          <span className="h-px w-8 bg-line" />
          <span className="label">Word of mouth</span>
        </Reveal>

        <Reveal
          delay={0.05}
          className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.02em] text-ink">
            Real cups. <span className="italic text-accent transition-colors duration-500">Real reviews.</span>
          </h2>
          <div className="flex items-center gap-3">
            <Stars rating={5} size={18} />
            <span className="label text-ink">4.9 / 5 · loved across India</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 0.06}
              className="flex h-full flex-col rounded-[1.25rem] border border-line bg-cream p-6"
            >
              <Quote size={26} className="text-accent transition-colors duration-500" fill="currentColor" />
              <p className="mt-4 flex-1 font-display text-xl leading-snug text-ink">
                {r.body}
              </p>
              <div className="mt-6 border-t border-line pt-4">
                <Stars rating={r.rating} size={14} />
                <p className="mt-3 label text-ink">{r.name}</p>
                <p className="label !tracking-[0.12em] text-muted">{r.location} · {r.tag}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
