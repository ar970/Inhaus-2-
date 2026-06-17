import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Manifesto } from "@/components/sections/Manifesto";
import { Shop } from "@/components/sections/Shop";
import { Reviews } from "@/components/sections/Reviews";
import { MassiveMarquee } from "@/components/sections/MassiveMarquee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PRODUCT } from "@/lib/product";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCT.name,
  description:
    "Cold-extracted specialty Arabica coffee concentrate from Chikmagalur. No machine, no café run — pour, mix, and dominate your day. ~20 cups per bottle.",
  brand: { "@type": "Brand", name: "INHAUS" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: String(PRODUCT.price),
    availability: "https://schema.org/InStock",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <Manifesto />
      <Shop />
      <Reviews />
      <MassiveMarquee />
      <FinalCTA />
    </>
  );
}
