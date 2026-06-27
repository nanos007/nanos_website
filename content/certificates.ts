export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  category?: string;
  url?: string;
}

export const shippingCertificates: Certificate[] = [
  { id: "insead-dt", name: "INSEAD Leading Digital Transformation Programme", issuer: "INSEAD" },
  { id: "maritime-rules", name: "Maritime Rules and Regulations", issuer: "DNV GL" },
  { id: "shipboard-ops", name: "Shipping and Shipboard Operations", issuer: "DNV GL" },
  { id: "oil-tanker", name: "Oil Tanker Business", issuer: "DNV GL" },
  { id: "isps-survey", name: "ISPS Code — Ship Survey", issuer: "DNV GL" },
  {
    id: "hull-inspection",
    name: "Hull Inspection using 3D Survey Simulator Bulk Carriers",
    issuer: "DNV GL",
  },
  { id: "incident-inv", name: "Incident Investigation", issuer: "DNV GL" },
  { id: "hse-2014", name: "Basic Health, Safety and Environment 2014", issuer: "DNV GL" },
  { id: "hse-2019", name: "Basic Health, Safety and Environment 2019", issuer: "DNV GL" },
  { id: "hse-reporting", name: "HSE in DNV GL — Incident Reporting", issuer: "DNV GL" },
  { id: "hse-travel", name: "HSE in DNV GL — Travel Safety", issuer: "DNV GL" },
  {
    id: "compliance-1",
    name: "Compliance Module 1: DNV GL Code of Conduct",
    issuer: "DNV GL",
  },
  {
    id: "compliance-2",
    name: "Compliance Module 2: Anti-Corruption and Anti-Trust",
    issuer: "DNV GL",
  },
  {
    id: "compliance-4",
    name: "Compliance Module 4: Personal Data Protection",
    issuer: "DNV GL",
  },
  {
    id: "compliance-6",
    name: "Compliance Module 6: Reporting of Misconduct",
    issuer: "DNV GL",
  },
  {
    id: "info-security",
    name: "Information Security Training (Parts 1–5)",
    issuer: "DNV GL",
  },
  { id: "sustainability", name: "Sustainability in DNV GL", issuer: "DNV GL" },
  { id: "contracting", name: "The Importance of Contracting", issuer: "DNV GL" },
  { id: "travel-risk", name: "Travel Risk Awareness", issuer: "DNV GL" },
  { id: "dnv-intro", name: "DNV GL Introduction", issuer: "DNV GL" },
];

export const digitalCertificates: Certificate[] = [
  {
    id: "ai-engineering",
    name: "AI Engineering",
    issuer: "Coursera",
    category: "Data Science & AI",
  },
  {
    id: "intro-ds",
    name: "Introduction to Data Science",
    issuer: "Coursera",
    category: "Data Science & AI",
  },
  {
    id: "tools-ds",
    name: "Tools for Data Science",
    issuer: "Coursera",
    category: "Data Science & AI",
  },
  {
    id: "ds-methodology",
    name: "Data Science Methodology",
    issuer: "Coursera",
    category: "Data Science & AI",
  },
  {
    id: "ml-python",
    name: "Machine Learning with Python",
    issuer: "Coursera",
    category: "Data Science & AI",
  },
  {
    id: "cybersec-analyst",
    name: "Certified Cybersecurity Analyst",
    issuer: "Coursera",
    category: "Cybersecurity",
  },
  {
    id: "ethical-hacking",
    name: "Ethical Hacking",
    issuer: "Udemy",
    category: "Cybersecurity",
  },
  {
    id: "social-engineering",
    name: "Social Engineering",
    issuer: "Udemy",
    category: "Cybersecurity",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    issuer: "Google",
    category: "Marketing",
  },
  {
    id: "seo-2024",
    name: "SEO 2024 — Search Engine Optimization",
    issuer: "Udemy",
    category: "Marketing",
  },
  {
    id: "blockchain-basics",
    name: "Blockchain Basics",
    issuer: "Coursera",
    category: "Blockchain",
  },
  {
    id: "ethereum-solidity",
    name: "Ethereum & Solidity Development",
    issuer: "Udemy",
    category: "Blockchain",
  },
];
