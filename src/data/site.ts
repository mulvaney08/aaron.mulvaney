export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  companyHref?: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  stack: string[];
  outcome: string;
  href: string;
  repo: string;
};

export type EducationItem = {
  title: string;
  organization: string;
  date: string;
  detail: string;
};

export const siteData = {
  seo: {
    title: "Aaron Mulvaney | Staff Operations Engineer & Agile Delivery Lead",
    description:
      "Staff Operations Engineer and Agile Delivery Lead with 8+ years improving reliability, accelerating delivery, and scaling support outcomes across enterprise platforms.",
    ogImage: "assets/og-image.svg"
  },
  hero: {
    name: "Aaron Mulvaney",
    title: "Staff Operations Engineer & Agile Delivery Lead",
    value:
      "Staff-level operations and delivery leader driving measurable platform outcomes through automation, incident reduction, and cross-functional execution.",
    location: "Dublin, Ireland",
    ctas: [
      { label: "View Experience", href: "#experience", kind: "primary" },
      { label: "Contact Me", href: "#contact", kind: "secondary" },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aaronmulvaney/" },
      { label: "Email", href: "mailto:aaronmulvaney@gmail.com" },
      { label: "Resume Source Code", href: "https://github.com/mulvaney08/aaron.mulvaney" },
    ] satisfies SocialLink[],
    stats: [
      { value: "8+", label: "Years in platform operations and delivery" },
      { value: "Millions", label: "Customer issues resolved via operational solutions" },
      { value: "$1M+", label: "Revenue protected by a single operational solution" }
    ]
  },
  about: {
    heading: "I lead platform operations with measurable delivery and reliability outcomes.",
    body: [
      "I partner across engineering, product, support, and leadership to ship critical services reliably and improve operational performance at scale.",
      "My work focuses on durable systems: automation that removes manual load, practices that improve predictability, and operating models that sustain quality over time."
    ]
  },
  experience: [
    {
      role: "Staff Operations Engineer & Agile Delivery Lead",
      company: "HMH",
      companyHref: "https://www.hmhco.com/",
      location: "Dublin",
      start: "November 2022",
      end: "Present",
      summary:
        "Own delivery and operations for mission-critical platform services, combining staff-level technical leadership with Agile execution across cross-functional teams.",
      highlights: [
        "Designed and continuously improved large-scale operational solutions that resolved millions of customer account issues, including a single solution that protected over $1 million in revenue.",
        "Led end-to-end delivery of a mission-critical license management microservice, coordinating cross-functional dependencies, risks, and release execution across engineering, product, and operations.",
        "Improved MTTR and support scalability by defining operating models, strengthening knowledge systems, and introducing AI-ready operational frameworks."
      ]
    },
    {
      role: "Senior Technical Solutions Consultant",
      company: "LinkedIn",
      companyHref: "https://www.linkedin.com/",
      location: "Dublin",
      start: "March 2021",
      end: "November 2022",
      summary:
        "Led high-impact enterprise advertiser issue resolution and operational improvements across sales, GTM, product, and engineering stakeholders.",
      highlights: [
        "Led a support-wide Agile transformation that moved the team from reactive operations to structured, measurable delivery with improved transparency and prioritization.",
        "Implemented workflow and KPI frameworks that exposed previously untracked advisory and consultation effort, enabling better capacity planning and clearer revenue-impact reporting.",
        "Owned resolution of complex enterprise advertising issues while acting as the technical bridge between sales, customers, product, and engineering across the EMEAL region."
      ]
    },
    {
      role: "Application Support Engineer",
      company: "HMH",
      companyHref: "https://www.hmhco.com/",
      location: "Dublin",
      start: "March 2019",
      end: "March 2021",
      summary:
        "Led critical support and automation initiatives for education platforms during high-volume periods, with direct impact on reliability and customer outcomes.",
      highlights: [
        "Delivered one of HMH's most significant Back to School outcomes by partnering with engineering and vendor teams on solutions that resolved about 80 percent of identity and authentication issues.",
        "Served as Team Lead and senior L3 escalation point for business-critical incidents, improving incident response quality and service restoration across multiple platforms.",
        "Built and maintained Python and shell automation, operational reporting (Metabase/JIRA/PostgreSQL), and internal support tooling to reduce manual effort and improve MTTR."
      ]
    },
    {
      role: "Associate Consultant",
      company: "Version 1",
      companyHref: "https://www.version1.com/",
      location: "Dublin",
      start: "June 2018",
      end: "March 2019",
      summary:
        "Delivered middleware integration enhancements and production support across live enterprise data flows.",
      highlights: [
        "Delivered customer-requested enhancements for enterprise middleware integrations, translating business requirements into deployable workflow and data-flow improvements.",
        "Designed and maintained XML/XSD message mappings to support accurate client-specific data transformations across inbound and outbound integrations.",
        "Owned production issue triage and customer communications to maintain SLA performance and reliable live-system operations."
      ]
    }
  ] satisfies ExperienceItem[],
  skills: [
    {
      category: "Operations & Delivery",
      items: [
        "Platform operations and reliability",
        "Agile project management (Jira, Confluence)",
        "Incident and escalation management",
        "Root cause analysis (RCA)",
        "Operational metrics and trend analysis"
      ]
    },
    {
      category: "Technical",
      items: [
        "SQL and PostgreSQL",
        "Python automation and scripting",
        "REST API integrations",
        "Systems integration",
        "Technical troubleshooting"
      ]
    },
    {
      category: "Leadership & Enablement",
      items: [
        "Service ownership and support model design",
        "Cross-functional delivery leadership",
        "Technical documentation and knowledge systems",
        "Stakeholder communication and alignment",
        "Onboarding and knowledge transfer"
      ]
    }
  ],
  projects: [
    {
      title: "Customer Account Resolution Program",
      summary:
        "Designed and implemented large-scale operational solutions to resolve recurring customer account issues at scale.",
      stack: ["Operations Engineering", "Automation", "RCA", "Support Tooling"],
      outcome: "Resolved millions of customer account issues and earned HMH Standing Ovation recognition in November 2025.",
      href: "#experience",
      repo: ""
    },
    {
      title: "License Management Microservice Delivery",
      summary:
        "Led end-to-end delivery of a mission-critical license management microservice across multiple workstreams.",
      stack: ["Agile Delivery", "Microservices", "Cross-functional Planning", "Risk Management"],
      outcome: "Maintained delivery momentum through dependency management, stakeholder alignment, and continuous ceremony improvements.",
      href: "#experience",
      repo: ""
    },
    {
      title: "Kubernetes Migration Initiative",
      summary:
        "Led migration of critical microservices from Mesos to Kubernetes within HMH platform operations.",
      stack: ["Kubernetes", "Microservices", "Platform Operations", "Delivery Leadership"],
      outcome: "Streamlined service delivery at scale and improved operational consistency.",
      href: "#experience",
      repo: ""
    },
    {
      title: "LinkedIn Technical Solutions Agile Transformation",
      summary:
        "Introduced Agile workflows, task tracking, and KPI reporting across support operations.",
      stack: ["Jira", "Workflow Design", "Operational Analytics", "Stakeholder Reporting"],
      outcome: "Increased visibility, productivity, and measurable impact across global technical support operations.",
      href: "#experience",
      repo: ""
    }
  ] satisfies ProjectItem[],
  education: [
    {
      title: "BSc (Hons) Computer Science - First Class",
      organization: "Technological University Dublin",
      date: "2014-2018",
      detail: "Undergraduate degree in computer science with first-class honours."
    },
    {
      title: "Registered Scrum Master",
      organization: "Scrum Inc & Scrum Alliance",
      date: "2024-2025, 2019-2021",
      detail: "Certification in Agile facilitation, delivery leadership, and team effectiveness."
    },
    {
      title: "Registered Product Owner",
      organization: "Scrum Inc",
      date: "2024-2025",
      detail: "Credential focused on product ownership and value-driven delivery."
    },
    {
      title: "ITIL Foundation Certification",
      organization: "PeopleCert",
      date: "2018",
      detail: "Service management foundation focused on process quality and support operations."
    }
  ] satisfies EducationItem[],
  contact: {
    phone: "+353 85 824 1413",
    email: "aaronmulvaney@gmail.com",
    linkedin: "https://www.linkedin.com/in/aaronmulvaney/",
    github: "https://github.com/mulvaney08/aaron.mulvaney",
    resumeHref: "assets/AaronResume26.pdf",
    resumeLabel: "Download Resume"
  },
  footer: {
    copyright: `Copyright ${new Date().getFullYear()} Aaron Mulvaney`,
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aaronmulvaney/" },
      { label: "GitHub", href: "https://github.com/mulvaney08/aaron.mulvaney" },
      { label: "Email", href: "mailto:aaronmulvaney@gmail.com" }
    ] satisfies SocialLink[]
  }
} as const;
