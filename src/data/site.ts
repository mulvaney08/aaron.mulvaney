export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
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
    title: "Aaron Mulvaney | Senior Product & Engineering Leader",
    description:
      "Single-page resume and portfolio for Aaron Mulvaney, highlighting leadership, product thinking, technical execution, and measurable delivery impact.",
    ogImage: "assets/og-image.svg"
  },
  hero: {
    name: "Aaron Mulvaney",
    title: "Senior Product & Engineering Leader",
    value:
      "I build reliable digital products, align cross-functional teams, and turn complex roadmaps into measurable business outcomes.",
    location: "Based in the United States",
    ctas: [
      { label: "View Projects", href: "#projects", kind: "primary" },
      { label: "Contact Me", href: "#contact", kind: "secondary" }
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
      { label: "GitHub", href: "https://github.com/your-handle" },
      { label: "Email", href: "mailto:hello@example.com" }
    ] satisfies SocialLink[],
    stats: [
      { value: "12+", label: "Years delivering digital products" },
      { value: "$8M+", label: "Revenue and efficiency impact influenced" },
      { value: "30+", label: "Product launches and major initiatives" }
    ]
  },
  about: {
    heading: "I lead with clarity, execution discipline, and product judgment.",
    body: [
      "My work sits at the intersection of strategy, delivery, and technical depth. I partner with stakeholders to define the right bets, then build the systems and operating cadence needed to ship them well.",
      "I am most effective in environments that value ownership, direct communication, thoughtful design, and a strong bias toward outcomes over activity."
    ]
  },
  experience: [
    {
      role: "Head of Product Engineering",
      company: "Northstar Digital",
      location: "Remote",
      start: "2021",
      end: "Present",
      summary:
        "Own platform strategy, delivery planning, and engineering execution for a multi-product B2B portfolio.",
      highlights: [
        "Directed a portfolio modernization program that cut release lead time by 42 percent across three core products.",
        "Established product discovery and technical design rituals that improved roadmap confidence and reduced rework.",
        "Scaled cross-functional delivery by introducing clearer planning, success metrics, and architecture decision records."
      ]
    },
    {
      role: "Senior Product Manager",
      company: "Lattice Commerce",
      location: "Chicago, IL",
      start: "2017",
      end: "2021",
      summary:
        "Led customer-facing platform initiatives spanning growth, internal tooling, and analytics infrastructure.",
      highlights: [
        "Launched a self-serve onboarding experience that increased activation by 26 percent within two quarters.",
        "Partnered with engineering and design to reduce checkout friction, contributing to a 14 percent lift in conversion.",
        "Built a more rigorous experimentation framework that improved prioritization and executive reporting."
      ]
    },
    {
      role: "Digital Strategy Consultant",
      company: "Independent",
      location: "Various Clients",
      start: "2013",
      end: "2017",
      summary:
        "Advised startups and service firms on product positioning, UX improvements, and lean delivery practices.",
      highlights: [
        "Delivered discovery workshops, roadmap resets, and website rebuilds for clients across professional services and SaaS.",
        "Translated stakeholder goals into implementable scopes, reducing ambiguity and accelerating vendor handoff.",
        "Created reusable content and analytics frameworks to support more effective lead generation."
      ]
    }
  ] satisfies ExperienceItem[],
  skills: [
    {
      category: "Leadership",
      items: [
        "Product strategy",
        "Roadmap planning",
        "Cross-functional leadership",
        "Stakeholder alignment",
        "Team mentoring"
      ]
    },
    {
      category: "Delivery",
      items: [
        "Agile execution",
        "Discovery facilitation",
        "Requirements shaping",
        "Experiment design",
        "Operational process design"
      ]
    },
    {
      category: "Technical",
      items: [
        "Web architecture",
        "Analytics instrumentation",
        "Accessibility",
        "Performance optimization",
        "Design systems"
      ]
    }
  ],
  projects: [
    {
      title: "Executive Portfolio Dashboard",
      summary:
        "Designed and shipped a leadership dashboard that connected product health, delivery status, and commercial metrics in one view.",
      stack: ["Astro", "TypeScript", "Charting", "Analytics"],
      outcome: "Reduced manual executive reporting effort from days to hours each month.",
      href: "https://example.com/project-dashboard",
      repo: "https://github.com/your-handle/project-dashboard"
    },
    {
      title: "Client Acquisition Site Refresh",
      summary:
        "Rebuilt a professional services marketing site with stronger messaging, faster page loads, and better lead capture flow.",
      stack: ["Astro", "Content strategy", "SEO", "CSS"],
      outcome: "Improved qualified inbound conversion and created a more credible first impression for enterprise buyers.",
      href: "https://example.com/project-refresh",
      repo: "https://github.com/your-handle/project-refresh"
    },
    {
      title: "Internal Workflow Platform",
      summary:
        "Led the design of an internal platform that unified request intake, triage, and decision tracking across departments.",
      stack: ["React", "Node.js", "PostgreSQL", "Automation"],
      outcome: "Removed duplicate work and shortened request response cycles by over 30 percent.",
      href: "https://example.com/project-workflow",
      repo: "https://github.com/your-handle/project-workflow"
    },
    {
      title: "Product Experimentation Framework",
      summary:
        "Built a lightweight experimentation operating model with templates, scorecards, and implementation guidance.",
      stack: ["Strategy", "Analytics", "Documentation", "A/B testing"],
      outcome: "Created a repeatable way to prioritize opportunities and communicate impact with greater confidence.",
      href: "https://example.com/project-experiments",
      repo: "https://github.com/your-handle/project-experiments"
    }
  ] satisfies ProjectItem[],
  education: [
    {
      title: "B.S. in Information Systems",
      organization: "Your University",
      date: "2012",
      detail: "Focus on systems design, business analysis, and digital product development."
    },
    {
      title: "Professional Scrum Product Owner",
      organization: "Scrum.org",
      date: "2020",
      detail: "Credential focused on product ownership, backlog strategy, and delivery alignment."
    }
  ] satisfies EducationItem[],
  contact: {
    email: "hello@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-handle",
    resumeHref: "assets/resume.html",
    resumeLabel: "Download Resume"
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Aaron Mulvaney`,
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
      { label: "GitHub", href: "https://github.com/your-handle" },
      { label: "Email", href: "mailto:hello@example.com" }
    ] satisfies SocialLink[]
  }
} as const;
