import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "George Nanos — Defense Expert",
    template: "%s — George Nanos",
  },
  description:
    "Personal website of Georgios Nanos — Dipl.-Ing. EE&IT, MBA, Defense & Maritime expert, Principal Project Manager at Thales, and founder of the DEEPDOCK autonomous naval systems research initiative.",
  metadataBase: new URL("https://georgisnanos.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "George Nanos",
    title: "George Nanos — Defense Expert",
    description:
      "20+ years across Digital Solutions, Shipbuilding, Maritime, and Defense. Exploring the future of Naval AI & Autonomy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "George Nanos — Defense Expert",
    description:
      "20+ years across Digital Solutions, Shipbuilding, Maritime, and Defense. Exploring the future of Naval AI & Autonomy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-canvas text-ink font-sans">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
