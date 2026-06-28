export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  institutionUrl: string;
  location: string;
  startYear: string;
  endYear: string;
  duration: string;
  details: string;
  grade?: string;
  links?: { label: string; url: string }[];
  logo: string;
}

export const education: EducationEntry[] = [
  {
    id: "rwth",
    degree: "Dipl.-Ing. Electrical Engineering & Information Technology",
    institution: "RWTH Aachen University",
    institutionUrl: "https://www.rwth-aachen.de/",
    location: "Aachen, Germany",
    startYear: "1999",
    endYear: "2004",
    duration: "5 yrs",
    details:
      'Thesis: "Classification, Analytical Modelling and Performance Evaluation of Mobile Web-Services". Supervised by Prof. Dr.-Ing. B. Walke, Dr.-Ing. Guido Gehlen.',
    grade: "1.3 (excellent)",
    links: [
      {
        label: "Diploma Thesis",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_d528056c8b6b4354a20e96a56435190b.pdf",
      },
      {
        label: "Thesis Presentation",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_41e0c5d28b7349c69c453dc3e2971e3e.pdf",
      },
    ],
    logo: "/images/logos/rwth-aachen.png",
  },
  {
    id: "harvard",
    degree: "Leadership and Communication — Professional Certificate",
    institution: "Harvard University (HarvardX)",
    institutionUrl: "https://www.harvard.edu",
    location: "Germany (Remote)",
    startYear: "2024",
    endYear: "04/2024",
    duration: "Online",
    details:
      "Professional Certificate programme covering leadership frameworks, adaptive leadership, and strategic communication. Endorsed by Ronald Heifetz, Founder of the Center for Public Leadership at Harvard Kennedy School, and James Engell, Gurney Professor of English and Professor of Comparative Literature at Harvard University.",
    links: [
      {
        label: "View Certificate",
        url: "https://credentials.edx.org/credentials/c47f6116809042bbba7439d6f4a6d482/",
      },
    ],
    logo: "/images/logos/harvard.png",
  },
  {
    id: "insead",
    degree: "Digital Transformation & Innovation Certificate",
    institution: "INSEAD",
    institutionUrl: "https://www.insead.edu/",
    location: "Athens, Greece",
    startYear: "02/2019",
    endYear: "04/2019",
    duration: "3 mos",
    details:
      "Mastered the Innovator's Method; studied the ARC Framework; addressed digital transformation challenges and corporate innovation.",
    links: [
      {
        label: "INSEAD Certificate",
        url: "https://certificate.insead.edu/a726be56-47aa-4765-bcba-d6f3a5a7fb61?key=fa3116c0ddced9481f7c7ace599fd644ec481b29119ceb07ebfadf762a7848a4",
      },
    ],
    logo: "/images/logos/insead.png",
  },
  {
    id: "fom",
    degree: "Master of Business Administration (MBA)",
    institution: "FOM University",
    institutionUrl: "https://www.fom.de",
    location: "Hamburg, Germany",
    startYear: "2010",
    endYear: "2012",
    duration: "2 yrs",
    details:
      'Focus: Sales, Customer Relations Management & Marketing Strategies. Thesis: "Conception of a risk-based strategic planning approach for the Internal Auditing function of ThyssenKrupp AG". Instructor: Prof. Dr. Thomas Pfahler.',
    grade: "Financial Management: 1.0 (excellent)",
    links: [
      {
        label: "Master Thesis",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_6872fab40fb84d28989aeec6cdd8e341.pdf",
      },
      {
        label: "MBA Studies Structure",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_f08cdd30a77447d795baadc50802eaa7.pdf",
      },
    ],
    logo: "/images/logos/fom.png",
  },
  {
    id: "dsa",
    degree: "Abitur",
    institution: "Deutsche Schule Athen (DSA)",
    institutionUrl: "https://www.dsathen.gr/de",
    location: "Athens, Greece",
    startYear: "1995",
    endYear: "1998",
    duration: "3 yrs",
    details: "German-accredited secondary education in Athens.",
    grade: "1.6 (very good)",
    logo: "/images/logos/dsa.png",
  },
];
