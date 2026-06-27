import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionBand from "@/components/ui/SectionBand";

const current = [
  {
    name: "Thales",
    logo: "/images/logos/thales.png",
    url: "https://www.thalesgroup.com/en",
    width: 120,
    height: 40,
  },
];

const previous = [
  {
    name: "digitalsalt",
    logo: "/images/logos/digitalsalt.png",
    url: "https://www.digitalsalt.de",
    width: 120,
    height: 40,
  },
  {
    name: "DNV",
    logo: "/images/logos/dnv.png",
    url: "https://www.dnv.com",
    width: 80,
    height: 40,
  },
  {
    name: "ThyssenKrupp",
    logo: "/images/logos/thyssenkrupp.png",
    url: "https://www.thyssenkrupp.com",
    width: 140,
    height: 40,
  },
];

export default function EmployerLogos() {
  return (
    <SectionBand>
      <FadeIn>
        <div className="space-y-8">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted mb-6">
              Current
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              {current.map((emp) => (
                <a
                  key={emp.name}
                  href={emp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  aria-label={emp.name}
                >
                  <Image
                    src={emp.logo}
                    alt={emp.name}
                    width={emp.width}
                    height={emp.height}
                    className="object-contain h-10 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-hairline pt-8">
            <p className="text-xs font-medium tracking-widest uppercase text-muted mb-6">
              Previous
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              {previous.map((emp) => (
                <a
                  key={emp.name}
                  href={emp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-50 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
                  aria-label={emp.name}
                >
                  <Image
                    src={emp.logo}
                    alt={emp.name}
                    width={emp.width}
                    height={emp.height}
                    className="object-contain h-10 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionBand>
  );
}
