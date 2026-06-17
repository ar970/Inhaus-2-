import { Reveal } from "@/components/ui/Reveal";

const REVIEWS = [
  {
    quote:
      "I cancelled my Starbucks order the same week. This hits harder and costs a fraction.",
    name: "Arjun M.",
    role: "Software Engineer · Bangalore",
    stars: 5,
  },
  {
    quote:
      "Finally something that doesn't taste like sad desk coffee. I make lattes at 7am before anyone else is awake.",
    name: "Priya S.",
    role: "UX Designer · Remote",
    stars: 5,
  },
  {
    quote:
      "Study sessions at 2am just got an upgrade. One bottle lasted me three weeks of finals.",
    name: "Rahul K.",
    role: "B.Tech Student · VIT Vellore",
    stars: 5,
  },
  {
    quote:
      "My entire team orders these now. We killed the office Nescafé machine. No regrets.",
    name: "Sneha T.",
    role: "Product Manager · Pune",
    stars: 5,
  },
  {
    quote:
      "The cold extraction actually makes a difference. You can taste it — clean, not bitter. Obsessed.",
    name: "Dev R.",
    role: "Filmmaker · Mumbai",
    stars: 5,
  },
  {
    quote:
      "Ordered thinking it was a gimmick. Reordered three times. My morning routine is now locked in.",
    name: "Nidhi P.",
    role: "Startup Founder · Delhi",
    stars: 5,
  },
];

export function Reviews() {
  return (
    <section className="bg-dark px-5 py-24 sm:px-[5vw] lg:py-36">
      <Reveal className="mb-14 text-center">
        <span className="eyebrow block">What people are saying</span>
        <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-normal leading-tight text-white">
          The reserve, reviewed.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal
            key={r.name}
            delay={i * 0.06}
            className="flex flex-col gap-6 bg-dark p-8"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: r.stars }).map((_, k) => (
                <span key={k} className="text-sm text-gold">
                  ★
                </span>
              ))}
            </div>
            <p className="flex-1 text-[1rem] font-light leading-relaxed text-white/80">
              &ldquo;{r.quote}&rdquo;
            </p>
            <div>
              <p className="font-medium text-white">{r.name}</p>
              <p className="mt-0.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/35">
                {r.role}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
