import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { StickyMobileBar } from "@/components/cart/StickyMobileBar";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const SITE_URL = "https://inhaus.coffee";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "INHAUS — Café-style coffee in 60 seconds",
  description:
    "Specialty Arabica coffee concentrate from Chikmagalur. No machine, no café run — just pour, stir, and sip. ~20 cups per pouch. Free shipping across India.",
  keywords: [
    "coffee concentrate",
    "liquid coffee",
    "specialty coffee India",
    "Arabica",
    "Chikmagalur",
    "INHAUS",
    "cold brew concentrate",
  ],
  openGraph: {
    title: "INHAUS — Café-style coffee in 60 seconds",
    description:
      "No machine. No café run. Just pour, stir, and sip. Specialty Arabica concentrate, ~20 cups per pouch.",
    url: SITE_URL,
    siteName: "INHAUS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INHAUS — Café-style coffee in 60 seconds",
    description: "No machine. No café run. Just pour, stir, and sip.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#17120e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${jakarta.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <StickyMobileBar />
        </Providers>
      </body>
    </html>
  );
}
