export const siteContent = {
  name: 'Gary McKeever',
  eyebrow: 'System design, workflow architecture, and distributed systems',
  role: 'Staff Software Architect',
  summary:
    'I design software systems that are easier to run, easier to change, and built to handle real operational complexity.',
  about:
    'I work across architecture, workflow design, and scaling strategy. My focus is turning fragile systems into ones that teams can understand, operate, and improve without constant friction.',
  architectImpact: [
    {
      title: 'Migration Strategy',
      text: 'When a system has outgrown its shape, I define the target boundaries and the staged transition plan. Teams can modernize without stopping active work or forcing a rewrite.',
      icon: 'layers'
    },
    {
      title: 'Workflow Design',
      text: 'I separate core business workflows from retries, recovery, and long-running coordination. That makes important processes easier to monitor, audit, and change safely.',
      icon: 'workflow'
    },
    {
      title: 'Scaling Model',
      text: 'I account for workload shape, deployment topology, and autoscaling early so a system can meet demand efficiently without wasting infrastructure or relying on constant manual tuning.',
      icon: 'scale'
    },
    {
      title: 'Release Reliability',
      text: 'I include pipelines, schema changes, and environment setup in the design so teams can ship repeatedly without creating avoidable operational risk.',
      icon: 'shield'
    }
  ],
  technicalSnapshot: [
    {
      title: 'C# and .NET',
      text: 'This is my primary engineering foundation. I use .NET for backend services, APIs, integrations, scheduling-heavy systems, and application architecture that has to stay maintainable under real business load.',
      detail: 'ASP.NET Core, EF Core, service design'
    },
    {
      title: 'Python and Analytics',
      text: 'Python is my secondary working language for automation, orchestration support, agentic flows, AI tooling, data analytics work, and fast systems prototyping. I use it where quick iteration, data processing, and glue code matter.',
      detail: 'Automation, LLM tooling, Spark, Databricks'
    },
    {
      title: 'Workflow and Services',
      text: 'I am strongest when systems need better boundaries and better runtime behavior. That includes workflow orchestration, event-driven designs, retries, idempotency, compensation patterns, auditability, and service decomposition.',
      detail: 'Workflow systems, eventing, reliability patterns'
    },
    {
      title: 'Deployment and Scaling',
      text: 'Good software only solves part of the problem. I also think about how it will be deployed, how it will scale with demand, and how that scaling model affects cost, resilience, and long-term operability.',
      detail: 'Docker, Kubernetes, KEDA'
    },
    {
      title: 'Relational Data',
      text: 'I am fluent in relational data design and pragmatic schema development. I think carefully about how data models hold up over time, how they support the domain, and how they avoid creating unnecessary application complexity.',
      detail: 'Schema design, PostgreSQL, SQL Server'
    },
    {
      title: 'Frontend and Desktop',
      text: 'I can build the interfaces around the system as well. That includes web front ends for operational tooling and product workflows, along with desktop application work where it fits the problem.',
      detail: 'React, WPF'
    }
  ],
  professionalWork: [
    {
      title: 'Workflow Platform Stabilization',
      description:
        'I led the migration of a production workflow system off an end-of-life foundation and onto a supported platform without disrupting the business. That work created the stability needed to plan the next move toward a more modern long-term architecture from a position of control instead of urgency.',
      stack: 'Workflow systems, migration planning, production change management',
      icon: 'factory',
      status: 'Ongoing',
      progression: 'Intermediate → Senior → Staff → Architect at Moxe Health'
    },
    {
      title: 'Controlled Horizontal Scaling',
      description:
        'I led a scaling effort for a production workload that was overwhelming downstream dependencies and feeding instability back into the system. By shaping autoscaling around real downstream limits, I helped turn a noisy feedback loop into predictable horizontal throughput.',
      stack: 'Kubernetes, KEDA, autoscaling, queue-based workloads',
      icon: 'scale',
      status: 'Delivered'
    },
    {
      title: 'Containerized Developer Experience',
      description:
        'I led a cross-team effort to replace ad hoc local setups with a containerized development standard used across the engineering organization. It changed how teams built, tested, and reasoned about local environments, enabled stronger integration testing, and established a baseline that continued well beyond the initial rollout.',
      stack: 'Docker, local development standards, integration testing, Kubernetes-aligned workflows',
      icon: 'nodes',
      status: 'Delivered'
    },
    {
      title: 'Internal ERP Development',
      description:
        'Before I moved deeper into architecture work, I was the sole developer on an internal ERP used by roughly fifty staff. I owned the whole system end to end: requirements, data model, UI, integrations, and support. That period taught me how operational friction shows up for real users and why architecture has to respect the business model it serves.',
      stack: 'C#, .NET, SQL Server, Angular, Node.js',
      icon: 'layers',
      status: 'Delivered'
    }
  ],
  personalProjects: [
    {
      title: 'Ekkos',
      tagline: 'Scheduling software built around follow-through.',
      description:
        'Ekkos is where I apply workflow thinking to a product people can feel. It turns plain-language input into scheduled work, tracks reminder state over time, and uses LLM-driven tool calls for core backend actions like create, update, and reschedule flows.',
      stack: 'React, .NET, Quartz.NET, API integrations',
      icon: 'calendar',
      status: 'Active build',
      href: 'https://ekkos.io',
      hrefLabel: 'Visit Ekkos',
      previewImage: 'https://ekkos.io/landing/assets/ekkos-phone-hero.png',
      previewAlt: 'Ekkos interface showing persistent task scheduling'
    },
    {
      title: 'ASTR',
      tagline: 'A controlled environment for testing system rules.',
      description:
        'ASTR is a place to test constraint systems, progression rules, and runtime tradeoffs in a playable format. It reflects the same instinct I bring to architecture work: model the system clearly, watch where it breaks, and refine the rules until the behavior makes sense.',
      stack: 'Unity, C#, WebGL',
      icon: 'cube',
      status: 'Ongoing R&D',
      href: '/projects/astr',
      hrefLabel: 'Play ASTR'
    }
  ],
  blogPosts: [
    {
      title: 'Modernization Without the Rewrite Trap',
      description:
        'How to reduce coupling, preserve delivery flow, and move a system toward a better shape without pretending a rewrite will save you.',
      href: '/blog/modernization-without-the-rewrite-trap',
      date: 'March 2026',
      readTime: '7 min read'
    }
  ],
  links: {
    github: 'https://github.com/X3r0byte',
    linkedin: 'https://www.linkedin.com/in/gmckeever-88/',
    email: 'mailto:gmckeever88@outlook.com'
  }
};
