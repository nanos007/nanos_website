import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import BioGlance from "@/components/home/BioGlance";
import EmployerLogos from "@/components/home/EmployerLogos";
import SolonQuote from "@/components/home/SolonQuote";
import CTACards from "@/components/home/CTACards";

export const metadata: Metadata = {
  title: "George Nanos — Defense Expert",
  description:
    "Personal website of Georgios Nanos — Dipl.-Ing. EE&IT, MBA, Defense & Maritime expert, Principal Project Manager at Thales, and founder of the DEEPDOCK autonomous naval systems research initiative.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BioGlance />
      <EmployerLogos />
      <SolonQuote />
      <CTACards />
    </>
  );
}
