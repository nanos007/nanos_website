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
  effort: string;
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
        url: "https://digitalsalt.de/insight/konfigurationsmanagement/",
      },
      {
        label: "Project Brief (PDF)",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_d6e1c5589dc3458d905462604ecd0494.pdf",
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
        label: "Project Brief (PDF)",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_691c23ff1eca4d43bc36005eada28afb.pdf",
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
        url: "https://en.digitalsalt.de/insight/earned-value-management/",
      },
      {
        label: "Project Brief (PDF)",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_2076e1f7adf24be5befda817f2329c06.pdf",
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
      {
        label: "Project Brief (PDF)",
        url: "https://696e51d8-8ba3-40f3-becb-0667440275bf.filesusr.com/ugd/91a761_655f51af2ae44da39bcdc9f15e96318f.pdf",
      },
    ],
  },
];

export const aiProjects: AIProject[] = [
  {
    id: "ci-identification",
    title: "CI-Identification",
    effort: "750 man-hours",
    description:
      "Initial AI use case idea that grew into a digital solution built by the Data Science Team at digitalsalt under my leadership for a major shipyard. Automates the identification of Configuration Items.",
    links: [
      { label: "digitalsalt — CM with AI", url: "https://digitalsalt.de/insight/cm-mit-ki/" },
      {
        label: "AI CI-Identification (PDF)",
        url: "https://digitalsalt.com/wp-content/uploads/AI-CI-Identification-PDF-1.pdf",
      },
    ],
  },
  {
    id: "cv-analyzer",
    title: "CV Analyzer",
    effort: "60 man-hours",
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
    effort: "30 man-hours",
    description:
      "Processes audio from meetings, generates summaries and automated task lists. Discontinued after mature market alternatives emerged.",
  },
  {
    id: "data-copilot",
    title: "Data CoPilot",
    effort: "150 man-hours",
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
    effort: "200 man-hours",
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
    effort: "350 man-hours",
    description:
      "Data search tool for a newly launched claims management initiative in Melbourne — enabling rapid document discovery across large datasets.",
    links: [
      {
        label: "Demo",
        url: "https://demo.digitalsalt.ai/",
      },
    ],
  },
  {
    id: "kickstart-sw",
    title: "Kickstart Your SW Development",
    effort: "60 man-hours",
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
    effort: "Planned",
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
