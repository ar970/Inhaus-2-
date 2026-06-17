import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ChooseYourFuel } from "@/components/sections/ChooseYourFuel";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Origin } from "@/components/sections/Origin";
import { Reviews } from "@/components/sections/Reviews";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Marquee } from "@/components/ui/Marquee";
import { PRODUCT } from "@/lib/product";

const TICKER = [
  "Specialty Arabica",
  "Chikmagalur single origin",
  "~20 cups per pouch",
  "No machine needed",
  "Ready in 60 seconds",
  "Hot or iced",
  "Free shipping across India",
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCT.name,
  description:
    "Specialty Arabica coffee concentrate from Chikmagalur. No machine, no café run — pour, stir, and sip. ~20 cups per pouch.",
  brand: { "@type": "Brand", name: "INHAUS" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: String(PRODUCT.price),
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
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
      <Marquee
        items={TICKER}
        className="border-y border-ink bg-ink py-3.5 text-cream"
      />
      <TrustStrip />
      <ChooseYourFuel />
      <ProductShowcase />
      <HowItWorks />
      <Origin />
      <Reviews />
      <FinalCTA />
    </>
  );
}
