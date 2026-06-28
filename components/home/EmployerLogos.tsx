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

interface Client {
  name: string;
  url: string;
  logo?: string;
  badgeWithText?: boolean;
}

const defenseClients: Client[] = [
  { name: "TKMS", url: "https://www.thyssenkrupp-marinesystems.com", logo: "/images/logos/clients/tkms.svg" },
  { name: "Kockums", url: "https://www.saab.com", logo: "/images/logos/clients/kockums.svg" },
  { name: "Atlas Elektronik", url: "https://www.atlas-elektronik.com", logo: "/images/logos/clients/atlas.png" },
  { name: "L3Harris", url: "https://www.l3harris.com", logo: "/images/logos/clients/l3harris.svg" },
  { name: "Lürssen", url: "https://www.lurssen.com", logo: "/images/logos/clients/lurssen.png" },
  { name: "NVL Group", url: "http://www.nvl-group.de", logo: "/images/logos/clients/nvl.svg" },
];

const maritimeClients: Client[] = [
  { name: "Thenamaris", url: "https://www.thenamaris.com", logo: "/images/logos/clients/thenamaris.svg" },
  { name: "Latsco", url: "https://www.latsco.com", logo: "/images/logos/clients/latsco.svg" },
  { name: "Laskaridis Maritime", url: "https://laskmar.com/en", logo: "/images/logos/clients/laskaridis.svg", badgeWithText: true },
  { name: "Maran Tankers", url: "https://marantankers.gr", logo: "/images/logos/clients/maran.png" },
  { name: "Columbia Shipmanagement", url: "https://columbiagroup.org/ship-management-services/", logo: "/images/logos/clients/columbia.jpg" },
  { name: "Nakilat", url: "https://www.nakilat.com", logo: "/images/logos/clients/nakilat.svg" },
  { name: "ADNOC Shipping", url: "https://www.adnoc.ae" },
];

function ClientEntry({ name, url, logo, badgeWithText }: Client) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      title={name}
      className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
    >
      {logo && badgeWithText ? (
        <span className="inline-flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt={name} className="h-10 w-auto object-contain" />
          <span className="text-sm font-semibold tracking-widest uppercase text-body">LASKARIDIS</span>
        </span>
      ) : logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={name} className="h-10 w-auto max-w-[130px] object-contain" />
      ) : (
        <span className="inline-block border border-current rounded px-3 py-1.5 text-xs font-medium tracking-wide text-body whitespace-nowrap">
          {name}
        </span>
      )}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[33px] font-semibold tracking-[0.18em] uppercase text-muted mb-8">
      {children}
    </p>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[30px] font-bold tracking-[0.2em] uppercase text-ink/50">{children}</span>
      <span className="flex-1 border-t border-hairline" />
    </div>
  );
}

export default function EmployerLogos() {
  return (
    <SectionBand>
      <FadeIn>
        <div className="space-y-14">

          {/* Current */}
          <div>
            <SectionLabel>Current Company</SectionLabel>
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
                  <Image src={emp.logo} alt={emp.name} width={emp.w} height={emp.h} style={{ height: emp.h, width: "auto" }} className="object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Previous */}
          <div className="border-t border-hairline pt-10">
            <SectionLabel>Previous Companies</SectionLabel>
            <div className="flex flex-wrap gap-10 items-center">
              {previous.map((emp) => (
                <a
                  key={emp.name}
                  href={emp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-50 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
                  aria-label={emp.name}
                >
                  <Image src={emp.logo} alt={emp.name} width={emp.w} height={emp.h} style={{ height: emp.h, width: "auto" }} className="object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Past Collaborations */}
          <div className="border-t border-hairline pt-10">
            <SectionLabel>Past Collaborations, Clients &amp; Partners</SectionLabel>

            <div className="space-y-10">
              <div>
                <SubLabel>Defense</SubLabel>
                <div className="flex flex-wrap gap-8 items-center">
                  {defenseClients.map((c) => (
                    <ClientEntry key={c.name} {...c} />
                  ))}
                </div>
              </div>

              <div>
                <SubLabel>Maritime</SubLabel>
                <div className="flex flex-wrap gap-8 items-center">
                  {maritimeClients.map((c) => (
                    <ClientEntry key={c.name} {...c} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </FadeIn>
    </SectionBand>
  );
}
