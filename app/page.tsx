import type { Metadata } from "next";
import VPHero from "@/components/vp/VPHero";
import VPBio from "@/components/vp/VPBio";
import VPLogos from "@/components/vp/VPLogos";
import SolonQuote from "@/components/home/SolonQuote";

export const metadata: Metadata = {
  title: "Georgios Nanos — Defense & Maritime Executive",
  description:
    "Georgios Nanos — Dipl.-Ing. EE&IT, MBA. 20+ years leading defense, naval, and maritime programs across Europe and the Middle East.",
};

export default function HomePage() {
  return (
    <>
      <VPHero />
      <VPBio />
      <VPLogos />
      <SolonQuote />
    </>
  );
}
