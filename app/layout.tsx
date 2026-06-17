import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FomoBar } from "@/components/layout/FomoBar";
import { Toast } from "@/components/ui/Toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-inter",
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
  themeColor: "#0d0b0a",
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
      className={`${playfair.variable} ${inter.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <FomoBar />
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
