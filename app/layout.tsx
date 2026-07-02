import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AdsXtreme — Amazon PPC & Catalog Growth Agency",
  description:
    "We turn Amazon ad spend into predictable, profitable growth. Senior PPC and catalog management managed to a target ACoS. Get a free Amazon & PPC audit.",
  metadataBase: new URL("https://adsxtreme.com"),
  openGraph: {
    title: "AdsXtreme — Amazon PPC & Catalog Growth Agency",
    description:
      "We turn Amazon ad spend into predictable, profitable growth. Get a free Amazon & PPC audit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
