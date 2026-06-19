const COLS = [
  {
    title: "Shop",
    links: [
      ["Study Fuel", "#shop"],
      ["Creator Fuel", "#shop"],
      ["Work Flow", "#shop"],
      ["The Bundle", "#shop"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Our story", "#manifesto"],
      ["How it Works", "#how-it-works"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["admin@inhauscoffee.com", "mailto:admin@inhauscoffee.com"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-deep px-5 pb-10 pt-20 sm:px-[4vw]">
      <div className="grid grid-cols-2 gap-10 border-b border-white/8 pb-14 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <div className="font-display text-[1.5rem] italic text-white">
            INHAUS.
          </div>
          <p className="mt-4 max-w-[260px] text-sm font-light leading-relaxed text-white/40">
            Café-quality coffee concentrate. Cold-extracted, bottled, shipped to
            your door.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              ["IG", "https://www.instagram.com/inhauscoffeee"],
              ["LI", "https://www.linkedin.com/company/inhaus-coffee/"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-white/10 font-mono text-[0.65rem] text-white/40 transition-colors hover:border-gold hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/25">
              {col.title}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm font-light text-white/45 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[0.65rem] tracking-[0.08em] text-white/25">
          © {new Date().getFullYear()} INHAUS · FSSAI Lic. No. 21526030000986
        </p>
      </div>
    </footer>
  );
}
