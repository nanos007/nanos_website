export interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const meta: Record<string, PageMeta> = {
  home: {
    title: "George Nanos — Defense Expert",
    description:
      "Personal website of Georgios Nanos — Dipl.-Ing. EE&IT, MBA, Defense & Maritime expert, Principal Project Manager at Thales, and founder of the DEEPDOCK autonomous naval systems research initiative.",
    ogTitle: "George Nanos — Defense Expert",
    ogDescription:
      "20+ years across Digital Solutions, Shipbuilding, Maritime, and Defense. Exploring the future of Naval AI & Autonomy.",
  },
  resume: {
    title: "Resume — George Nanos",
    description:
      "Career timeline, education, and skills of Georgios Nanos — 13 positions across naval defense, shipbuilding, maritime software, and technology consulting.",
  },
  leadership: {
    title: "Leadership — George Nanos",
    description:
      "Leadership philosophy and frameworks: 6 core soft skills, 12 business tools, and the Challenger Sale methodology.",
  },
  "leadership/soft-skills": {
    title: "Soft Skills — Leadership — George Nanos",
    description:
      "The 6 skills for business leadership in the AI era: Adaptability, Innovative Visionary, Motivating Coach, Complexity Master, Digital Intelligence, and Ethos.",
  },
  "leadership/tools": {
    title: "Tools — Leadership — George Nanos",
    description:
      "12 proven business frameworks used in consulting and leadership: from SWOT and BCG Matrix to the Innovator's Method and Balanced Scorecard.",
  },
  "leadership/sales": {
    title: "Sales — Leadership — George Nanos",
    description:
      "The Challenger Sale methodology: Teaching for Differentiation, Tailoring for Resonance, Taking Control, Constructive Tension, and Driving to Decision.",
  },
  certificates: {
    title: "Certificates — George Nanos",
    description:
      "Professional certifications in shipping & maritime compliance (DNV GL), data science, AI, cybersecurity, and blockchain.",
  },
  "certificates/shipping": {
    title: "Shipping Certificates — George Nanos",
    description:
      "Maritime and shipping industry certifications including DNV GL programs in HSE, compliance, information security, and maritime operations.",
  },
  "certificates/digital": {
    title: "Digital Certificates — George Nanos",
    description:
      "Digital certifications in AI Engineering, Data Science, Cybersecurity, Blockchain, and Digital Marketing from Coursera, Udemy, and Google.",
  },
  impressions: {
    title: "Impressions — George Nanos",
    description: "Photo gallery — impressions from a career spanning defense, maritime, and technology.",
  },
  contact: {
    title: "Contact — George Nanos",
    description: "Get in touch with Georgios Nanos via email or LinkedIn.",
  },
  disclaimer: {
    title: "Disclaimer — George Nanos",
    description: "Legal disclaimer for the personal website of Georgios Nanos.",
  },
};
