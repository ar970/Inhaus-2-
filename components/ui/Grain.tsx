export function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9997] opacity-[0.038]"
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="inhaus-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.88"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#inhaus-grain)" />
      </svg>
    </div>
  );
}
