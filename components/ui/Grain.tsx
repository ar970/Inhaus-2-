/**
 * Film grain overlay.
 *
 * The noise is baked into a single small SVG tile (encoded as a data URI) that the
 * browser rasterises ONCE and repeats. This is dramatically cheaper than running a
 * full-viewport `feTurbulence` filter live, which repaints on every scroll frame and
 * causes serious jank on mobile.
 */
const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9997] opacity-[0.04]"
      aria-hidden
      style={{
        backgroundImage: `url("${NOISE}")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
