import { Reveal } from "@/components/ui/Reveal";

const REVIEWS = [
  {
    quote:
      "Cancelled my Starbucks order the same week. Costs a fraction and hits just as hard.",
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
      "One bottle lasted me three weeks of finals. Study sessions at 2am are a different game now.",
    name: "Rahul K.",
    role: "B.Tech Student · VIT Vellore",
    stars: 5,
  },
  {
    quote:
      "My entire team orders these. We quietly retired the office Nescafé machine. Zero regrets.",
    name: "Sneha T.",
    role: "Product Manager · Pune",
    stars: 5,
  },
  {
    quote:
      "The cold extraction makes a real difference. Clean, not bitter. I've reordered four times.",
    name: "Dev R.",
    role: "Filmmaker · Mumbai",
    stars: 5,
  },
  {
    quote:
      "Ordered thinking it was a gimmick. Now it's the first thing in my morning routine.",
    name: "Nidhi P.",
    role: "Startup Founder · Delhi",
    stars: 5,
  },
];

export function Reviews() {
  return (
    <section className="bg-cream px-5 py-24 sm:px-[5vw] lg:py-36">
      <Reveal className="mb-14">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold">
          Reviews
        </span>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-light italic leading-tight text-dark">
          Loved by 500+ early customers.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal
            key={r.name}
            delay={i * 0.06}
            className="flex flex-col gap-5 bg-[#faf6f0] p-7 shadow-[0_1px_4px_rgba(100,60,20,0.07),0_4px_20px_rgba(100,60,20,0.05)]"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: r.stars }).map((_, k) => (
                <span key={k} className="text-[0.9rem] text-gold">
                  ★
                </span>
              ))}
            </div>
            <p className="flex-1 text-[0.95rem] font-normal leading-relaxed text-dark/85">
              &ldquo;{r.quote}&rdquo;
            </p>
            <div className="border-t border-dark/8 pt-4">
              <p className="text-sm font-medium text-dark">{r.name}</p>
              <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-dark/60">
                {r.role}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
