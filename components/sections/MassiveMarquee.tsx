const ITEMS = [
  "Ready in 60 Seconds",
  "Zero Preservatives",
  "No Machines Required",
  "100% Arabica",
];

export function MassiveMarquee() {
  const Track = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {ITEMS.map((t, i) => (
        <span
          key={i}
          className="px-8 text-[clamp(1.8rem,4vw,3rem)] font-black uppercase text-dark sm:px-14"
        >
          {t}
          <span className="px-8 text-dark/40 sm:px-14">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="my-20 rotate-[-2deg] scale-[1.04] overflow-hidden bg-gold py-7 shadow-[0_20px_50px_rgba(0,0,0,0.4)] sm:my-28">
      <div className="flex w-max animate-scroll-x whitespace-nowrap will-change-transform">
        {Track}
        {Track}
      </div>
    </div>
  );
}
