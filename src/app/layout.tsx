import type { Metadata } from "next";
import { Playfair_Display, Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["200", "300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

import SmoothScroll from "@/components/SmoothScroll";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Boat Seafood Dubai | Premium Seafood Restaurant at Waterfront Market",
  description: "Premium seafood dining in Dubai’s Waterfront Market. Fresh daily catch, signature seafood dishes, private dining, and elegant waterfront experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${jost.variable} ${cormorant.variable} antialiased selection:bg-navy selection:text-cream`}
      >
        <SmoothScroll>
          {children}
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
