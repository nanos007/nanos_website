export interface Language {
  name: string;
  proficiency: "Full Professional" | "Elementary";
  flag: string;
}

export interface SkillBlock {
  title: string;
  items: string[];
}

export const languages: Language[] = [
  { name: "English", proficiency: "Full Professional", flag: "GB" },
  { name: "German", proficiency: "Full Professional", flag: "DE" },
  { name: "Greek", proficiency: "Full Professional", flag: "GR" },
  { name: "Swedish", proficiency: "Elementary", flag: "SE" },
  { name: "Norwegian", proficiency: "Elementary", flag: "NO" },
];

export const skillBlocks: SkillBlock[] = [
  {
    title: "Orientation & Problem Solving",
    items: [
      "Growth mindset fostering innovation and adaptability",
      "Multi-account management and strategic priority setting",
      "Swift challenge identification and resolution in complex scenarios",
      "Independent, numbers-focused, solution-oriented thinking with strong analytical capabilities",
    ],
  },
  {
    title: "Communication & Collaboration",
    items: [
      "Ethical leadership with transparent communication",
      "Experience leading diverse international teams (on-site and remote)",
      "C-level relationship building and maintenance proficiency",
    ],
  },
  {
    title: "Technical Acumen & Business Development",
    items: [
      "Solid AI, ML, and Data Science expertise with practical applications",
      "Electrical Engineering and Computer Science background (Windows, Linux, MS Office, programming)",
      "Management consulting, sales, and marketing expertise in the maritime sector",
      "Maritime digital solutions and services product management",
    ],
  },
  {
    title: "Strategic Digital Leadership",
    items: [
      "Digital transformation solution design and deployment in maritime and shipbuilding sectors",
      "Logical reasoning and systematic analysis capabilities",
      "Complex organizational challenge identification skills",
    ],
  },
  {
    title: "Intercultural Leadership & Collaboration",
    items: [
      "Complex technical concept communication to C-level stakeholders",
      "CEO collaboration and cross-functional team management experience",
      "Strategic business, product, and process initiative alignment",
    ],
  },
  {
    title: "Maritime Technical & Project Expertise",
    items: [
      "Electrical engineering, IT, and AI background with maritime operations understanding",
      "Lifetime ownership and operatorship integration into design thinking",
    ],
  },
];
