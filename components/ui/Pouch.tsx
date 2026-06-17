import { cn } from "@/lib/utils";

const labelStyle: React.CSSProperties = {
  fill: "var(--accent-contrast)",
  transition: "fill 500ms cubic-bezier(0.22,1,0.36,1)",
};

/**
 * Asset-free, scalable INHAUS pouch. The label panel recolors to the active
 * accent so it re-themes with the selected persona. Decorative only —
 * product details live in the surrounding markup.
 */
export function Pouch({
  fuel,
  className,
}: {
  fuel: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 400"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label={`INHAUS ${fuel} concentrate pouch`}
    >
      <defs>
        <linearGradient id="pouchBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3a2f27" />
          <stop offset="0.5" stopColor="#221a14" />
          <stop offset="1" stopColor="#120e0a" />
        </linearGradient>
        <linearGradient id="pouchSheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="labelShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* top crimped seal */}
      <rect x="48" y="14" width="204" height="30" rx="7" fill="#0d0a07" />
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={i}
          x1={60 + i * 18}
          y1="19"
          x2={60 + i * 18}
          y2="39"
          stroke="#2a221c"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}

      {/* body */}
      <rect
        x="40"
        y="40"
        width="220"
        height="346"
        rx="30"
        fill="url(#pouchBody)"
      />
      {/* gusset sheen */}
      <rect x="70" y="48" width="30" height="330" rx="15" fill="url(#pouchSheen)" />

      {/* accent label panel */}
      <g style={{ transition: "transform 500ms" }}>
        <rect
          x="64"
          y="150"
          width="172"
          height="156"
          rx="18"
          className="fill-accent"
          style={{ transition: "fill 500ms cubic-bezier(0.22,1,0.36,1)" }}
        />
        <rect
          x="64"
          y="150"
          width="172"
          height="156"
          rx="18"
          fill="url(#labelShade)"
        />

        {/* bean mark */}
        <g style={labelStyle} opacity="0.92">
          <ellipse cx="150" cy="178" rx="11" ry="8" />
          <path
            d="M150 171 C146 174 146 182 150 185"
            stroke="var(--accent)"
            strokeWidth="1.4"
            fill="none"
          />
        </g>

        <text
          x="150"
          y="222"
          textAnchor="middle"
          style={{
            ...labelStyle,
            fontFamily: "var(--font-jakarta), sans-serif",
            fontWeight: 700,
            fontSize: 30,
            letterSpacing: "0.12em",
          }}
        >
          INHAUS
        </text>
        <text
          x="150"
          y="250"
          textAnchor="middle"
          style={{
            ...labelStyle,
            fontFamily: "var(--font-fraunces), serif",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          {fuel}
        </text>
        <text
          x="150"
          y="282"
          textAnchor="middle"
          style={{ ...labelStyle, fontSize: 9, letterSpacing: "0.34em" }}
          opacity="0.85"
        >
          SPECIALTY CONCENTRATE
        </text>
      </g>

      <text
        x="150"
        y="344"
        textAnchor="middle"
        fill="#e9e0d2"
        style={{ fontSize: 10, letterSpacing: "0.22em" }}
        opacity="0.8"
      >
        ~20 CUPS · READY IN 60s
      </text>
    </svg>
  );
}
