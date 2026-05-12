export const strings = {
  logo: "Kranthi Chinnakotla",

  nav: {
    intro: "Intro",
    work: "Work",
    tech: "Tech",
    reach: "Reach",
  },

  hero: {
    titleLine1: "EXPERIENCE",
    titleLine2: "& SKILLS",
    description:
      "A chronicle of engineering complex systems and mastering the digital stack. From cloud architecture to precision frontend interfaces.",
  },

  workHistory: {
    sectionLabel: "Work History",
    items: [
      {
        period: "2020 - Present",
        title: "Senior Software Engineer",
        company: "Microsoft",
        description:
          "Contributions across AI product experiences, client application development, and data platform engineering.",
        highlights: [
          "Contributed to feature development for Microsoft's first-party AI agent, Researcher, focusing on product capabilities and user-centric AI experiences.",
          "Built a Calendar Companion Windows application from scratch, using React for the frontend and C++ for the hosting application, delivering a performant and integrated user experience.",
          "Developed and maintained features for Outlook on Android, including running A/B experiments, generating scorecards, and analyzing metrics to identify performance and user engagement trends.",
          "Designed and implemented scalable data pipelines and a data platform supporting digital and email marketing teams, enabling customer-focused analytics and insights.",
        ],
        tags: ["Microsoft", "Engineering"],
        current: true,
      },
      {
        period: "2017 - 2020",
        title: "Software Engineer",
        company: "Hughes Network Systems",
        description:
          "Built and enhanced software systems to improve reliability and performance across networking platforms.",
        highlights: [
          "Developed a consumer-facing Android application for managing internet service plans and handling payments.",
          "Contributed to an Android app used by field installers to align dish antennas with satellite positioning.",
          "Integrated Android clients with Google Apigee for API management and secure backend communication.",
          "Used Firebase for remote configuration, analytics, and client-side telemetry.",
        ],
        tags: ["HNS", "Platform"],
        current: false,
      },
      {
        period: "2015 - 2016",
        title: "Teaching Assistance",
        company: "University Of North Carolina Charlotte",
        description:
          "Assisted students with coursework and labs while supporting instructional delivery in technical subjects.",
        highlights: [
          "Teaching assistant for an Android development course.",
          "Answered Android-related technical questions and supported students during class.",
          "Designed and set up in-class Android application assignments.",
          "Evaluated and graded Android programming assignments.",
        ],
        tags: ["Teaching", "Mentorship"],
        current: false,
      },
      {
        period: "2007 - 2015",
        title: "Team Lead",
        company: "Accenture",
        description:
          "Led engineering teams delivering enterprise solutions with focus on execution quality and timelines.",
        highlights: [
          "Worked as a contractor for Bank of America, developing backend systems for checking and savings accounts.",
          "Implemented critical banking features such as overdraft processing, non-sufficient funds (NSF) fees, and overdraft protection fees, ensuring regulatory compliance and revenue generation.",
        ],
        tags: ["Leadership", "Delivery"],
        current: false,
      },
    ],
  },

  coreStack: {
    sectionLabel: "Core Stack",
    primarySkill: {
      name: "Android / JavaScript / TS",
      level: "Master",
      barWidth: "w-[95%]",
      subTags: ["React", "Next.js", "Node", "Android"],
    },
    skillCards: [
      {
        icon: "cloud",
        title: "Cloud Architecture",
        tags: ["Azure", "GCP"],
      },
      {
        icon: "terminal",
        title: "Backend Engineering",
        tags: ["C#", "Java"],
      },
    ],
    toolsLabel: "Tools & Methodologies",
    tools: [
      "CI/CD Pipelines",
      "GraphQL",
      "System Design",
      "Agile/Scrum",
      "Kanban",
      "Waterfall",
      "Android",
      "Relay",
    ],
  },

  resumeCta: {
    title: "Looking for a deeper dive?",
    description: "Get the full technical breakdown in my CV.",
  },
};
