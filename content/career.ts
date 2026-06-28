export interface CareerEntry {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  countries: string[];
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  highlights?: string[];
  links?: { label: string; url: string }[];
  logo: string;
  type: "work" | "research" | "military" | "entrepreneurial" | "academic";
}

export const career: CareerEntry[] = [
  {
    id: "thales",
    role: "Principal Project Manager",
    company: "Thales",
    companyUrl: "https://www.thalesgroup.com/en",
    location: "Kiel",
    countries: ["DE"],
    startDate: "01/2025",
    endDate: "Present",
    duration: "1 yr+",
    description:
      "Oversees multi-million euro naval defense project; manages secure digital communication and combat readiness systems; leads cross-functional teams; manages public and private stakeholders.",
    links: [
      {
        label: "Thales",
        url: "https://www.thalesgroup.com/en",
      },
    ],
    logo: "/images/logos/thales.png",
    type: "work",
  },
  {
    id: "digitalsalt-principal",
    role: "Principal",
    company: "digitalsalt",
    companyUrl: "https://www.digitalsalt.de",
    location: "Lüneburg",
    countries: ["DE", "AU"],
    startDate: "07/2022",
    endDate: "12/2024",
    duration: "2 yrs 5 mos",
    description:
      "Operational consulting for multi-billion naval shipbuilding project; implemented cutting-edge IT solutions; established AI department for maritime applications; led international consultant teams; shaped business strategy; increased market presence.",
    links: [
      { label: "Consulting Projects", url: "/resume/consulting" },
      { label: "AI Projects", url: "/resume/ai-projects" },
    ],
    logo: "/images/logos/digitalsalt.png",
    type: "work",
  },
  {
    id: "digitalsalt-senior",
    role: "Senior Consultant",
    company: "digitalsalt",
    companyUrl: "https://www.digitalsalt.de",
    location: "Lüneburg",
    countries: ["DE"],
    startDate: "03/2020",
    endDate: "06/2022",
    duration: "2 yrs 5 mos",
    description:
      "Implemented digital strategies and IT solutions for defense clients; managed projects end-to-end; created data analytics reports; supervised process design; partnered with stakeholders.",
    logo: "/images/logos/digitalsalt.png",
    type: "work",
  },
  {
    id: "dnv",
    role: "Regional Sales Manager",
    company: "DNV",
    companyUrl: "https://www.dnv.com",
    location: "Athens (SEMEA region)",
    countries: ["GR", "MT", "NO", "CY", "IT", "ES", "PT", "FR", "HR", "TR", "EG", "AE", "QA"],
    startDate: "04/2014",
    endDate: "02/2020",
    duration: "5 yrs 11 mos",
    description:
      "Managed sales and large-scale bids across the SEMEA region; quadrupled annual turnover; coordinated software projects; spoke at POSIDONIA, Digital Ship, and ShipIT conferences; traveled extensively for client relations.",
    links: [
      { label: "DNV Maritime Software Portfolio", url: "https://www.dnv.com/maritime/software.html" },
      {
        label: "Analytics & KPIs in Maritime (LinkedIn)",
        url: "https://www.linkedin.com/pulse/analytics-kpis-maritime-industry-georgios-nanos",
      },
    ],
    logo: "/images/logos/dnv.png",
    type: "work",
  },
  {
    id: "thyssenkrupp-auditor",
    role: "Internal Auditor",
    company: "ThyssenKrupp AG",
    companyUrl: "https://www.thyssenkrupp.com",
    location: "Essen",
    countries: ["DE"],
    startDate: "12/2011",
    endDate: "03/2014",
    duration: "2 yrs 4 mos",
    description:
      "Led operational, financial, and compliance audits across international subsidiaries; focused on defense projects and complex sales processes; assessed and improved operational processes; guided management decisions.",
    links: [{ label: "Auditor vs. Consultant", url: "/resume/auditor-vs-consultant" }],
    logo: "/images/logos/thyssenkrupp.png",
    type: "work",
  },
  {
    id: "tkms-engineer",
    role: "Project & Systems Engineer",
    company: "ThyssenKrupp Marine Systems",
    companyUrl: "https://www.thyssenkrupp-marinesystems.com/",
    location: "Kiel",
    countries: ["DE"],
    startDate: "06/2007",
    endDate: "11/2011",
    duration: "4 yrs 6 mos",
    description:
      "Managed functional integration and project management for underwater naval systems; delivered project specifications on schedule; negotiated technical contracts; provided strategic consultancy.",
    logo: "/images/logos/tkms.png",
    type: "work",
  },
  {
    id: "tkms-manager",
    role: "Project Manager — Management Young Talents Program",
    company: "ThyssenKrupp Marine Systems",
    companyUrl: "https://www.thyssenkrupp-marinesystems.com/",
    location: "Hamburg",
    countries: ["DE", "SE"],
    startDate: "03/2006",
    endDate: "06/2007",
    duration: "1 yr 4 mos",
    description:
      "Responsibilities in project management, production, and systems integration for shipyards in Hamburg and Malmö; worked on surface vessels and submarines.",
    logo: "/images/logos/tkms.png",
    type: "work",
  },
  {
    id: "deepdock",
    role: "Research Project Lead",
    company: "DEEPDOCK",
    companyUrl: "http://www.deepdock.xyz",
    location: "Athens",
    countries: ["GR"],
    startDate: "01/1999",
    endDate: "Present",
    duration: "26 yrs",
    description:
      "Developing concept for revolutionizing naval operations through surface and sub-surface autonomy and AI application. Research-driven, non-commercial initiative conducted during free time.",
    links: [{ label: "DEEPDOCK Ideation", url: "/resume/deepdock-secure" }],
    logo: "/images/logos/deepdock.png",
    type: "research",
  },
  {
    id: "hellenic-navy",
    role: "Chief Petty Officer — Radar Technology (NATO status)",
    company: "Hellenic Navy",
    companyUrl: "https://hellenicnavy.gr/en/",
    location: "Athens & Kiel",
    countries: ["GR", "DE"],
    startDate: "11/2004",
    endDate: "11/2005",
    duration: "1 yr",
    description:
      "Military service with specialization in radar technology; served under NATO status at Hellenic Navy Detachment in Kiel.",
    logo: "/images/logos/hellenic-navy.png",
    type: "military",
  },
  {
    id: "acrytal",
    role: "Founder",
    company: "ACRYTAL — Aegean Crypto Capital / DAO",
    companyUrl: "https://georgiosnanos2023.wixsite.com/acrytal",
    location: "Athens",
    countries: ["GR"],
    startDate: "01/2000",
    endDate: "12/2006",
    duration: "7 yrs",
    description:
      "Conceived tokenization approach for family-owned real estate entities in the Aegean Islands; leveraged XML for property attribute parsing and encryption; extended the project with blockchain and Proof of Work mining concepts; goal was democratizing investment.",
    links: [{ label: "ACRYTAL on OpenSea", url: "https://opensea.io/Acrytal" }],
    logo: "/images/logos/acrytal.png",
    type: "entrepreneurial",
  },
  {
    id: "fz-juelich",
    role: "Scientific Assistant",
    company: "Forschungszentrum Jülich",
    companyUrl: "https://www.fz-juelich.de/en",
    location: "Aachen",
    countries: ["DE"],
    startDate: "12/2000",
    endDate: "09/2002",
    duration: "1 yr 10 mos",
    description:
      'Junior scientist at Institute for Solid State Research; student research project: "Integration of BaSrTiO₃-thinfilms in DRAM-cells" under Dr. Fotis Fitsilis; supervised by Prof. R. Waser.',
    links: [
      {
        label: "Research Publication — BST Films",
        url: "https://www.scribd.com/document/69854207/Deposition-of-Thin-BST-Films-in-a-Multi-Wafer-Planetary-Reactor",
      },
    ],
    logo: "/images/logos/fz-juelich.png",
    type: "academic",
  },
  {
    id: "rwth-student",
    role: "Student Research Assistant — Chair of Materials Science & Engineering",
    company: "RWTH Aachen University",
    companyUrl: "https://www.rwth-aachen.de/",
    location: "Aachen",
    countries: ["DE"],
    startDate: "01/2001",
    endDate: "01/2002",
    duration: "1 yr 1 mo",
    description:
      "Supported laboratory research; conducted literature reviews, data analysis, experimental assistance; contributed to academic papers and presentations; maintained rigorous documentation; supervised by Prof. R. Waser.",
    logo: "/images/logos/rwth-aachen.png",
    type: "academic",
  },
  {
    id: "hsy",
    role: "Student Trainee",
    company: "Hellenic Shipyards (HSY)",
    companyUrl: "https://hsy-under-special-administration.gr/?lang=en",
    location: "Athens",
    countries: ["GR"],
    startDate: "04/1999",
    endDate: "07/1999",
    duration: "4 mos",
    description:
      "Construction of Osprey HSY-56A-class gunboat; planned and executed HAT (Harbor Acceptance Test) phase of electrical, electronic, radar, and communication systems.",
    links: [
      {
        label: "Internship Report",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_d482abdbbf0343ce9d7a598b542363aa.pdf",
      },
    ],
    logo: "/images/logos/hsy.jpg",
    type: "academic",
  },
];
