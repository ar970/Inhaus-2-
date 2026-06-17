"use client";

/* ===========================================================================
   HERO VIDEO SWAP SLOT
   ---------------------------------------------------------------------------
   Drop your cinematic 5–7s loop (muted, seamless) into /public/media and list
   the sources below. When this array is non-empty the <video> renders
   automatically (autoplay, muted, loop, playsInline, lazy) with the same
   readability overlay. Until then, a premium asset-free scene is shown.

   Recommended shots: Chikmagalur coffee cherries → specialty processing →
   pouring concentrate into the pouch → mixing into hot & iced coffee →
   pouch close-ups → someone enjoying it while studying / creating / working.
   ========================================================================= */
const HERO_VIDEO_SOURCES: { src: string; type: string }[] = [
  // { src: "/media/inhaus-hero.webm", type: "video/webm" },
  // { src: "/media/inhaus-hero.mp4", type: "video/mp4" },
];
const HERO_POSTER = ""; // e.g. "/media/inhaus-hero-poster.jpg"

function PlaceholderScene() {
  return (
    <div className="absolute inset-0 animate-slow-zoom">
      <div className="absolute -left-[15%] top-[-10%] h-[80vh] w-[80vh] animate-drift rounded-full bg-[radial-gradient(circle,#5d3c1f_0%,transparent_62%)] blur-3xl" />
      <div className="absolute right-[-12%] top-[18%] h-[72vh] w-[72vh] animate-drift rounded-full bg-[radial-gradient(circle,#834e26_0%,transparent_62%)] blur-3xl [animation-delay:-8s]" />
      <div className="absolute bottom-[-22%] left-[30%] h-[70vh] w-[70vh] animate-drift rounded-full bg-[radial-gradient(circle,rgb(var(--accent-rgb)/0.45)_0%,transparent_62%)] blur-3xl [animation-delay:-15s]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_118%,#42301f_0%,transparent_55%)]" />
    </div>
  );
}

export function HeroBackground() {
  const hasVideo = HERO_VIDEO_SOURCES.length > 0;
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
      {hasVideo ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={HERO_POSTER || undefined}
          aria-hidden
        >
          {HERO_VIDEO_SOURCES.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      ) : (
        <PlaceholderScene />
      )}

      {/* readability overlay (≈35%) + cinematic top/bottom fade + subtle grain */}
      <div className="absolute inset-0 bg-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/75" />
      <div className="grain absolute inset-0 opacity-[0.08] mix-blend-overlay" />
    </div>
  );
}
