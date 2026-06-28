import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionBand from "@/components/ui/SectionBand";

const current = [
  { name: "Thales", logo: "/images/logos/thales.svg", url: "https://www.thalesgroup.com/en", w: 80, h: 28 },
];

const previous = [
  { name: "digitalsalt", logo: "/images/logos/digitalsalt.png", url: "https://www.digitalsalt.de", w: 100, h: 32 },
  { name: "DNV", logo: "/images/logos/dnv.png", url: "https://www.dnv.com", w: 70, h: 32 },
  { name: "ThyssenKrupp", logo: "/images/logos/thyssenkrupp.png", url: "https://www.thyssenkrupp.com", w: 120, h: 32 },
  { name: "TKMS", logo: "/images/logos/tkms.svg", url: "https://www.thyssenkrupp-marinesystems.com", w: 80, h: 28 },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[16px] font-semibold tracking-[0.18em] uppercase text-muted mb-8">{children}</p>;
}

export default function VPLogos() {
  return (
    <SectionBand>
      <FadeIn>
        <div className="space-y-14">
          <div>
            <Label>Current Company</Label>
            <div className="flex flex-wrap gap-8 items-center">
              {current.map((emp) => (
                <a key={emp.name} href={emp.url} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" aria-label={emp.name}>
                  <Image src={emp.logo} alt={emp.name} width={emp.w} height={emp.h} style={{ height: emp.h, width: "auto" }} className="object-contain" />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-hairline pt-10">
            <Label>Previous Companies</Label>
            <div className="flex flex-wrap gap-10 items-center">
              {previous.map((emp) => (
                <a key={emp.name} href={emp.url} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-80 transition-opacity grayscale hover:grayscale-0" aria-label={emp.name}>
                  <Image src={emp.logo} alt={emp.name} width={emp.w} height={emp.h} style={{ height: emp.h, width: "auto" }} className="object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionBand>
  );
}
