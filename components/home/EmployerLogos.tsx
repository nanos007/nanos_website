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

const clientsDefense = [
  { name: "TKMS", logo: "https://logo.clearbit.com/thyssenkrupp-marinesystems.com", url: "https://www.thyssenkrupp-marinesystems.com" },
  { name: "Kockums", logo: "https://logo.clearbit.com/kockums.se", url: "https://www.kockums.se" },
  { name: "Atlas Elektronik", logo: "https://logo.clearbit.com/atlas-elektronik.com", url: "https://www.atlas-elektronik.com" },
  { name: "L3Harris", logo: "https://logo.clearbit.com/l3harris.com", url: "https://www.l3harris.com" },
  { name: "Lürssen", logo: "https://logo.clearbit.com/lurssen.com", url: "https://www.lurssen.com" },
  { name: "NVL Group", logo: "https://logo.clearbit.com/nvl-group.de", url: "https://www.nvl-group.de" },
  { name: "nobiskrug", logo: "https://logo.clearbit.com/nobiskrug.com", url: "https://www.nobiskrug.com" },
  { name: "Fincantieri", logo: "https://logo.clearbit.com/fincantieri.com", url: "https://www.fincantieri.com" },
  { name: "Naval Group", logo: "https://logo.clearbit.com/naval-group.com", url: "https://www.naval-group.com" },
];

const clientsMaritime = [
  { name: "Thenamaris", logo: "https://logo.clearbit.com/thenamaris.com", url: "https://www.thenamaris.com" },
  { name: "Latsco", logo: "https://logo.clearbit.com/latsco.com", url: "https://www.latsco.com" },
  { name: "Laskaridis Maritime", logo: "https://logo.clearbit.com/laskaridis.com", url: "https://www.laskaridis.com" },
  { name: "Maran Tankers", logo: "https://logo.clearbit.com/marantankers.com", url: "https://www.marantankers.com" },
  { name: "Navios Group", logo: "https://logo.clearbit.com/navios.com", url: "https://www.navios.com" },
  { name: "Columbia Shipmanagement", logo: "https://logo.clearbit.com/columbiagroup.org", url: "https://columbiagroup.org/ship-management-services/" },
  { name: "Nakilat", logo: "https://logo.clearbit.com/nakilat.com", url: "https://www.nakilat.com" },
  { name: "ADNOC Shipping", logo: "https://logo.clearbit.com/adnocshipping.ae", url: "https://www.adnocshipping.ae" },
  { name: "Bahri", logo: "https://logo.clearbit.com/bahri.sa", url: "https://www.bahri.sa" },
  { name: "Hartmann Reederei", logo: "https://logo.clearbit.com/hartmann-group.com", url: "https://www.hartmann-group.com" },
];

function LogoLink({ name, logo, url, local = false }: { name: string; logo: string; url: string; local?: boolean }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
      aria-label={name}
      title={name}
    >
      <Image
        src={logo}
        alt={name}
        width={local ? 0 : 120}
        height={40}
        unoptimized={!local}
        className="object-contain h-10 w-auto max-w-[120px]"
      />
    </a>
  );
}

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

          <div className="border-t border-hairline pt-8">
            <p className="text-xs font-medium tracking-widest uppercase text-muted mb-6">
              Clients &amp; Partners
            </p>

            <p className="text-xs font-medium tracking-widest uppercase text-muted/60 mb-4">
              Defense
            </p>
            <div className="flex flex-wrap gap-8 items-center mb-8">
              {clientsDefense.map((c) => (
                <LogoLink key={c.name} {...c} />
              ))}
            </div>

            <p className="text-xs font-medium tracking-widest uppercase text-muted/60 mb-4">
              Maritime
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              {clientsMaritime.map((c) => (
                <LogoLink key={c.name} {...c} />
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionBand>
  );
}
