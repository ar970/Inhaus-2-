# Hero video swap slot

The hero currently renders a premium, asset-free animated scene. To use real
footage, drop your files here and wire them up — no other code changes needed.

## Steps

1. Add your encoded files to this folder, e.g.:
   - `inhaus-hero.webm` (VP9/AV1 — smaller, preferred)
   - `inhaus-hero.mp4` (H.264 — broad compatibility)
   - `inhaus-hero-poster.jpg` (first-frame poster, shown while loading / on mobile)

2. Open `components/sections/HeroBackground.tsx` and fill in the arrays:

   ```ts
   const HERO_VIDEO_SOURCES = [
     { src: "/media/inhaus-hero.webm", type: "video/webm" },
     { src: "/media/inhaus-hero.mp4", type: "video/mp4" },
   ];
   const HERO_POSTER = "/media/inhaus-hero-poster.jpg";
   ```

The `<video>` is already configured to autoplay, mute, loop, play inline, and
lazy-load, with a 30–40% dark overlay for text readability.

## Recommended footage (5–7s, seamless loop)

Chikmagalur coffee cherries → specialty processing → pouring concentrate into
the INHAUS pouch → mixing into hot coffee → mixing into iced coffee → pouch
close-ups → someone enjoying it while studying, creating, or working.

## Encoding tips (for Lighthouse 90+)

- Keep it short and quiet: ~1080p, no audio track.
- Target a small file (a few MB). Example with ffmpeg:

  ```bash
  # MP4 (H.264)
  ffmpeg -i source.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow -movflags +faststart inhaus-hero.mp4
  # WebM (VP9)
  ffmpeg -i source.mov -an -vf "scale=1920:-2" -c:v libvpx-vp9 -crf 34 -b:v 0 inhaus-hero.webm
  # Poster
  ffmpeg -i source.mov -frames:v 1 -q:v 3 inhaus-hero-poster.jpg
  ```
