export interface SoftSkill {
  id: string;
  title: string;
  summary: string;
  detail: string;
}

export interface BusinessTool {
  id: string;
  name: string;
  description: string;
  tag?: "INSEAD" | "MBA" | "RWTH";
}

export const softSkills: SoftSkill[] = [
  {
    id: "adaptability",
    title: "Adaptability",
    summary: "Dynamic navigation of change and uncertainty",
    detail:
      "Covers dynamic business navigation, openness to new ideas, flexible strategy adjustment, and adaptive leadership styles. Effective strategies are seen as collections of choices rather than step-by-step plans — creating cultures where constructive disagreement is welcomed.",
  },
  {
    id: "innovative-visionary",
    title: "Innovative Visionary",
    summary: "Driving innovation and inspiring organizational vision",
    detail:
      "Driving innovation, creating inspiring organizational visions, implementing strategic thinking, anticipating future trends, and embracing change as a growth opportunity. Turning disruption into competitive advantage.",
  },
  {
    id: "motivating-coach",
    title: "Motivating Coach",
    summary: "Team development and servant leadership",
    detail:
      "Team development through recognizing individual strengths and growth areas, creating positive work environments, and applying servant leadership approaches that serve employees in their personal growth and exploration.",
  },
  {
    id: "complexity-master",
    title: "Complexity Master",
    summary: "Navigating complex systems and stakeholder landscapes",
    detail:
      "Navigating complex organizational systems, understanding diverse stakeholder perspectives, and making informed decisions amid uncertainty. Bringing clarity to ambiguous environments.",
  },
  {
    id: "digital-intelligence",
    title: "Digital Intelligence",
    summary: "Strategic technology leadership and risk awareness",
    detail:
      "Understanding emerging technologies and their strategic implications, leveraging digital tools for competitive advantage, and managing associated risks including security and privacy considerations.",
  },
  {
    id: "ethos",
    title: "Ethos",
    summary: "Ethical leadership grounded in integrity",
    detail:
      'Ethical leadership grounded in integrity, fairness, and social responsibility. Guided by the ancient maxim "Know thyself" inscribed at the Temple of Apollo at Delphi — a timeless foundation for principled leadership.',
  },
];

export const businessTools: BusinessTool[] = [
  {
    id: "innovators-method",
    name: "Innovator's Method",
    tag: "INSEAD",
    description:
      "Framework for developing new products and services under uncertainty, integrating lean startup and design thinking principles with stages: problem understanding, solution hypothesis, prototyping, piloting, and scaling.",
  },
  {
    id: "arc-framework",
    name: "ARC Framework",
    tag: "INSEAD",
    description:
      "Digital transformation blueprint addressing Architecture (infrastructure and structures), Routines (daily practices and processes), and Culture (beliefs and values). Learned at INSEAD.",
  },
  {
    id: "usp",
    name: "Unique Selling Proposition (USP)",
    tag: "MBA",
    description:
      "Method for identifying and communicating distinctive advantages that differentiate a brand from competitors while resonating with target audiences.",
  },
  {
    id: "gap-analysis",
    name: "Gap Analysis",
    tag: "MBA",
    description:
      "Foundational consulting tool comparing the current organizational state against the desired future state to identify discrepancies and craft bridging strategies.",
  },
  {
    id: "swot",
    name: "SWOT Analysis",
    tag: "MBA",
    description:
      "Strategic assessment examining Strengths, Weaknesses, Opportunities, and Threats to provide a comprehensive organizational positioning perspective.",
  },
  {
    id: "porters-five-forces",
    name: "Porter's Five Forces",
    tag: "MBA",
    description:
      "Competitive landscape framework analyzing: threat of new entrants, supplier bargaining power, buyer bargaining power, threat of substitutes, and competitor rivalry intensity.",
  },
  {
    id: "bcg-matrix",
    name: "BCG Matrix",
    tag: "MBA",
    description:
      "Product portfolio analysis tool plotting business units by market growth and relative market share across four quadrants: Stars, Cash Cows, Question Marks, and Dogs.",
  },
  {
    id: "pestel",
    name: "PESTEL Analysis",
    tag: "MBA",
    description:
      "Macro-environmental assessment examining Political, Economic, Social, Technological, Environmental, and Legal factors shaping the business landscape.",
  },
  {
    id: "value-chain",
    name: "Value Chain Analysis",
    tag: "RWTH",
    description:
      "Operations framework identifying value-adding activities through primary activities (inbound logistics, operations, outbound logistics, marketing/sales, service) and support activities.",
  },
  {
    id: "balanced-scorecard",
    name: "Balanced Scorecard",
    tag: "MBA",
    description:
      "Performance measurement system balancing Financial, Customer, Internal Process, and Learning & Growth perspectives to align strategy with execution.",
  },
  {
    id: "resource-management",
    name: "Resource Management",
    tag: "MBA",
    description:
      "Allocation methodologies including FIFO, LIFO, FILO, and FCFS for inventory, network, and task scheduling optimization.",
  },
  {
    id: "cba",
    name: "Cost-Benefit Analysis (CBA)",
    tag: "RWTH",
    description:
      "Decision-making framework quantifying costs and benefits with NPV calculations to guide resource allocation and investment decisions.",
  },
];

export const challengerSale = {
  title: "Challenger Sale",
  intro:
    "The Challenger Sale methodology, from Matthew Dixon and Brent Adamson, reframes B2B selling around expertise-driven value rather than traditional relationship-building.",
  principles: [
    {
      title: "Teaching for Differentiation",
      description:
        "Challengers educate their customers with new insights and perspectives that reframe the way customers think about their business — rather than focusing solely on product features.",
    },
    {
      title: "Tailoring for Resonance",
      description:
        "Customizing messages to match individual customer values and economic priorities, ensuring relevance at every level of the buying organization.",
    },
    {
      title: "Taking Control of the Sale",
      description:
        "Maintaining assertive leadership when discussing money and challenging customer assumptions constructively — driving the conversation forward.",
    },
    {
      title: "Constructive Tension",
      description:
        "Using strategic tension to overcome resistance and guide customers toward new perspectives, opening space for transformative solutions.",
    },
    {
      title: "Driving Toward a Decision",
      description:
        "Navigating complex organizational dynamics to advance the sales process and bring stakeholders to a confident, well-informed decision.",
    },
  ],
};
