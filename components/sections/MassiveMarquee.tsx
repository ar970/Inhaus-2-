const ITEMS = [
  "Ready in 60 Seconds",
  "Zero Preservatives",
  "No Machine Required",
  "100% Arabica",
  "Free Shipping",
  "₹25 per cup",
];

export function MassiveMarquee() {
  const Track = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {ITEMS.map((t, i) => (
        <span
          key={i}
          className="px-8 font-display text-[clamp(1.6rem,3.5vw,2.8rem)] font-light italic text-dark sm:px-12"
        >
          {t}
          <span className="ml-8 mr-0 text-dark/30 sm:ml-12">·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="my-20 rotate-[-1.5deg] scale-[1.04] overflow-hidden bg-gold py-7 shadow-[0_16px_48px_rgba(0,0,0,0.35)] sm:my-28">
      <div className="flex w-max animate-scroll-x whitespace-nowrap will-change-transform">
        {Track}
        {Track}
      </div>
    </div>
  );
}
