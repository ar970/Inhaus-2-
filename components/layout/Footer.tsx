const COLS = [
  {
    title: "Shop",
    links: [
      ["Concentrate", "#shop"],
      ["Study Fuel", "#shop"],
      ["Creator Fuel", "#shop"],
      ["Work Flow", "#shop"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Our story", "#manifesto"],
      ["Sourcing", "#"],
      ["Sustainability", "#"],
      ["Stockists", "#"],
    ],
  },
  {
    title: "Help",
    links: [
      ["FAQ", "#"],
      ["Brew guide", "#"],
      ["Shipping & returns", "#"],
      ["admin@inhauscoffee.com", "mailto:admin@inhauscoffee.com"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-deep px-5 pb-10 pt-20 sm:px-[4vw]">
      <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-14 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <div className="font-display text-2xl font-semibold uppercase tracking-[0.08em] text-white">
            INHAUS
          </div>
          <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-white/50">
            Café-style coffee concentrate. Cold-extracted with care, poured at
            home.
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
                className="flex h-9 w-9 items-center justify-center border border-white/15 font-mono text-xs text-white/50 transition-colors hover:border-gold hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.15em] text-white/30">
              {col.title}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/50 transition-colors hover:text-gold"
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
        <p className="font-mono text-[0.7rem] tracking-[0.08em] text-white/30">
          © {new Date().getFullYear()} INHAUS · FSSAI Lic. No. 21526030000986
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Shipping Policy"].map((l) => (
            <a
              key={l}
              href="#"
              className="font-mono text-[0.7rem] tracking-[0.08em] text-white/30 transition-colors hover:text-white/60"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
