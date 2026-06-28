export interface ConsultingProject {
  id: string;
  number: string;
  title: string;
  status: "Ongoing" | "Completed" | "Preparing";
  description: string;
  links?: { label: string; url: string }[];
}

export interface AIProject {
  id: string;
  title: string;
  type: string;
  description: string;
  links?: { label: string; url: string }[];
}

export const consultingProjects: ConsultingProject[] = [
  {
    id: "config-mgmt",
    number: "01",
    title: "Configuration Management",
    status: "Ongoing",
    description:
      "Support with a 2–5 consultant team for hands-on consulting on Configuration Management, Engineering Changes Management, Product Structure Development including digital twin. Additional work includes CMC-CI remediation and tool development.",
    links: [
      {
        label: "digitalsalt — Configuration Management",
        url: "https://digitalsalt.com/insight/konfigurationsmanagement/",
      },
    ],
  },
  {
    id: "gap-analysis",
    number: "02",
    title: "GAP Analysis",
    status: "Completed",
    description:
      "Focused on the starting phase of a large-scale project for the construction of submarines — identifying gaps between current capabilities and project requirements.",
    links: [
      {
        label: "digitalsalt — GAP Analysis",
        url: "https://digitalsalt.com/insight/gap-analyse/",
      },
    ],
  },
  {
    id: "earned-value",
    number: "03",
    title: "Earned Value Management",
    status: "Completed",
    description:
      "Implementation of Earned Value Analysis concepts including a simple tool, for a major electronic components supplier serving the submarine construction sector.",
    links: [
      {
        label: "digitalsalt — Earned Value Management",
        url: "https://digitalsalt.com/en/insight/earned-value-management/",
      },
    ],
  },
  {
    id: "transformation",
    number: "04",
    title: "Transformation Project",
    status: "Preparing",
    description:
      "Extensive transformation project for a shipyard — addressing organizational aspects, processes, and systems to improve operational performance.",
  },
  {
    id: "requirements-mgmt",
    number: "05",
    title: "Requirements Management",
    status: "Completed",
    description:
      "Consulting services during the beginning phase of ship construction, delivering a Requirements Management Concept for a major German shipyard.",
    links: [
      {
        label: "digitalsalt — Requirements Management",
        url: "https://digitalsalt.com/en/insight/requirements-management/",
      },
    ],
  },
];

export const aiProjects: AIProject[] = [
  {
    id: "ci-identification",
    title: "CI-Identification",
    type: "AI · Classification",
    description:
      "Initial AI use case idea that grew into a digital solution built by the Data Science Team at digitalsalt under my leadership for a major shipyard. Automates the identification of Configuration Items.",
    links: [
      { label: "digitalsalt — CM with AI", url: "https://digitalsalt.com/insight/cm-mit-ki/" },
      {
        label: "AI CI-Identification (PDF)",
        url: "https://digitalsalt.com/wp-content/uploads/AI-CI-Identification-PDF-1.pdf",
      },
    ],
  },
  {
    id: "cv-analyzer",
    title: "CV Analyzer",
    type: "AI · HR",
    description:
      "Internal project completed during student work with Data Science Team support. Automates CV screening and candidate matching.",
    links: [
      {
        label: "Project Brief (PDF)",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_74696484d83a4bd19dd01b73e01f6b49.pdf",
      },
    ],
  },
  {
    id: "meeting-summarizer",
    title: "Meeting Summarizer",
    type: "AI · Audio",
    description:
      "Processes audio from meetings, generates summaries and automated task lists. Discontinued after mature market alternatives emerged.",
  },
  {
    id: "data-copilot",
    title: "Data CoPilot",
    type: "LLM · Chatbot",
    description:
      "Chatbot tool providing chat functionality with publicly available standards and technical documents, enabling instant expert-level queries.",
    links: [
      {
        label: "ds AI Data Pilot",
        url: "https://digitalsalt.com/en/technology/ai-data-pilot/",
      },
    ],
  },
  {
    id: "ntt-training",
    title: "NTT Data Training",
    type: "AI · Training",
    description:
      "AI training development for NTT DACH branch — a global telecommunications organization with 305,000 employees.",
    links: [
      {
        label: "digitalsalt Training",
        url: "https://digitalsalt.com/en/dedicated/training/",
      },
    ],
  },
  {
    id: "ds-power-search",
    title: "ds Power Search",
    type: "AI · Search",
    description:
      "Data search tool for a newly launched claims management initiative in Melbourne — enabling rapid document discovery across large datasets.",
    links: [],
  },
  {
    id: "kickstart-sw",
    title: "Kickstart Your SW Development",
    type: "AI · DevTools",
    description:
      "Uses AI to accelerate software development through task streamlining and efficiency improvements — reducing project initiation time significantly.",
    links: [
      {
        label: "digitalsalt — AI in SW Development",
        url: "https://digitalsalt.com/insight/ki-im-softwareentwicklungsprojekt/",
      },
    ],
  },
  {
    id: "ml-architecture",
    title: "IT Architecture to Support ML",
    type: "ML · Architecture",
    description:
      "Infrastructure concept for supporting Machine Learning activities in large organizations — defining compute, storage, data pipeline, and governance requirements.",
    links: [
      {
        label: "Architecture Brief (PDF)",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_9c83d5e0e409467d9f7a4174ca4917f8.pdf",
      },
    ],
  },
];
