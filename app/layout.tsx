import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Toast } from "@/components/ui/Toast";
import { Grain } from "@/components/ui/Grain";
import { IntroOverlay } from "@/components/ui/IntroOverlay";
import { Cursor } from "@/components/ui/Cursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const SITE_URL = "https://inhaus.coffee";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "INHAUS — Café logic, re-engineered.",
  description:
    "Cold-extracted specialty Arabica coffee concentrate. No machine, no café run — pour, mix, and dominate your day. ~20 cups per bottle. Free shipping across India.",
  keywords: [
    "coffee concentrate",
    "cold extraction",
    "specialty coffee India",
    "Arabica",
    "INHAUS",
  ],
  openGraph: {
    title: "INHAUS — Café logic, re-engineered.",
    description:
      "Cold-extracted specialty Arabica concentrate. Pour, mix, dominate your day. ~20 cups per bottle.",
    url: SITE_URL,
    siteName: "INHAUS",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0907",
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
      className={`${cormorant.variable} ${spaceGrotesk.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <IntroOverlay />
        <Grain />
        <Cursor />
        <Providers>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
