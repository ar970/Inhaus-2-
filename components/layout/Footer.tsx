import { AtSign, Camera } from "lucide-react";

const GROUPS = [
  { title: "Shop", links: ["Study Fuel", "Creator Fuel", "Work Flow", "Gift a pouch"] },
  { title: "Company", links: ["Our story", "Sourcing", "Sustainability", "Contact"] },
  { title: "Help", links: ["How it works", "Shipping & returns", "FAQs", "Track order"] },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream/75">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-7">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="font-display text-3xl tracking-tight text-cream">INHAUS</div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
              Café-style specialty coffee concentrate. No machine, no café run —
              just pour, stir, and sip.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="INHAUS on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-accent hover:text-accent"
              >
                <Camera size={18} />
              </a>
              <a
                href="#"
                aria-label="INHAUS on X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-accent hover:text-accent"
              >
                <AtSign size={18} />
              </a>
            </div>
          </div>

          {GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="label text-cream">{g.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-cream/55 transition-colors hover:text-cream">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label !tracking-[0.12em] text-cream/45">
            Crafted with specialty Arabica · Chikmagalur × Brewcaso
          </p>
          <p className="label !tracking-[0.12em] text-cream/45">
            © {new Date().getFullYear()} INHAUS — free shipping across India
          </p>
        </div>
      </div>
    </footer>
  );
}
