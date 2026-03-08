export const siteContent = {
  name: 'Gary McKeever',
  eyebrow: 'Staff software architect',
  role: 'I redesign systems so the business stops losing to the technology.',
  summary:
    'When software gets brittle, expensive to change, or hard to scale, I help teams rebuild the right parts without freezing delivery.',
  heroPoints: [
    'Untangle brittle platforms without stopping the business',
    'Move reliability and workflow into the right systems',
    'Make delivery, scaling, and operations easier to trust'
  ],
  principles: [
    {
      title: 'Domain first',
      text: 'If the business keeps running into technical objections, the system is probably shaped wrong. Architecture should make the domain easier to express, not harder.'
    },
    {
      title: 'Use infrastructure to solve infrastructure problems',
      text: 'Teams still hand-build retries and durable coordination in application code. If the platform can own that behavior, it should.'
    },
    {
      title: 'Deployment model matters',
      text: 'A clean codebase on top of a weak runtime model is still a weak system. Architecture has to account for workload shape, execution model, and scaling strategy.'
    },
    {
      title: 'Simplicity is earned',
      text: 'The best systems are easy to change and easy to operate because someone did the hard thinking up front.'
    },
    {
      title: 'Build twice when it matters',
      text: 'The first version teaches the real shape of the problem. The second version is where the architecture is aligned to that reality instead of the assumptions that came before it.'
    }
  ],
  selectedImpact: [
    {
      title: 'Transition-State Architecture',
      text: 'I define staged paths out of brittle systems so organizations can modernize architecture without freezing delivery or pretending the old world disappears overnight.',
      icon: 'layers'
    },
    {
      title: 'Durable Workflow Systems',
      text: 'I move long-running coordination into workflow models built to survive failure. That makes them easier to monitor and easier to trust over time.',
      icon: 'workflow'
    },
    {
      title: 'Scaling Through System Shape',
      text: 'I focus on workload shape and runtime behavior first. Systems scale better when the structure is right instead of patched with application-level workarounds.',
      icon: 'scale'
    },
    {
      title: 'Delivery Without Fragility',
      text: 'I treat local environments and deployment mechanics as part of system design. Teams ship faster when delivery does not hide operational risk.',
      icon: 'shield'
    }
  ],
  workIntro:
    'These are representative examples of the systems problems I tend to work on. The pattern is usually the same: fix the platform shape, then make delivery cleaner on top of it.',
  workQuote:
    'I do some of my best work when a system has outgrown its shape and the path forward has to be redesigned without freezing delivery in the process.',
  techReadout: [
    { label: '.NET', icon: 'dotnet' },
    { label: 'Python', icon: 'python' },
    { label: 'Apache Spark', icon: 'apachespark' },
    { label: 'Databricks', icon: 'databricks' },
    { label: 'Docker', icon: 'docker' },
    { label: 'Kubernetes', icon: 'kubernetes' },
    { label: 'PostgreSQL', icon: 'postgresql' },
    { label: 'SQL Server', monogram: 'SQL' },
    { label: 'React', icon: 'react' },
    { label: 'WPF', monogram: 'WPF' },
    { label: 'Angular', icon: 'angular' },
    { label: 'Node.js', icon: 'nodedotjs' },
    { label: 'Unity', icon: 'unity' }
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
        'Led the migration of a production workflow system off an end-of-life foundation and used that work to create a more deliberate path forward. The effort stabilized an urgent platform problem while also defining a cleaner architecture to build on instead of just patching what existed.',
      outcome: 'Turned an immediate platform liability into a controlled modernization path.',
      tags: ['Workflow systems', 'Migration planning', 'Production change management'],
      icon: 'factory',
      status: 'Ongoing',
      progression: 'Intermediate → Senior → Staff → Architect at Moxe Health'
    },
    {
      title: 'Controlled Horizontal Scaling',
      description:
        'I led a scaling effort for a production workload that was overwhelming downstream dependencies and feeding instability back into the system. By shaping autoscaling around real downstream limits, I helped turn a noisy feedback loop into predictable horizontal throughput.',
      outcome: 'Improved throughput by fixing system shape instead of tuning around the symptoms.',
      tags: ['Kubernetes', 'KEDA', 'Autoscaling', 'Queue-backed workloads'],
      icon: 'scale',
      status: 'Delivered'
    },
    {
      title: 'Containerized Developer Experience',
      description:
        'I led a cross-team effort to replace ad hoc local setups with a containerized development standard used across the engineering organization. It changed how teams built, tested, and reasoned about local environments, enabled stronger integration testing, and established a baseline that continued well beyond the initial rollout.',
      outcome: 'Made local development and release behavior more consistent across the team.',
      tags: ['Docker', 'Local development standards', 'Integration testing', 'Kubernetes-aligned workflows'],
      icon: 'nodes',
      status: 'Delivered'
    },
    {
      title: 'Internal ERP Development',
      description:
        'Before moving deeper into architecture, I helped build an internal ERP system end to end. That experience grounded me in how operational systems actually support real business work and shaped the way I think about architecture as something that must serve the domain, not just the implementation.',
      outcome: 'Built early intuition for software that has to match real business behavior.',
      tags: ['C#', '.NET', 'SQL Server', 'Angular', 'Node.js'],
      icon: 'layers',
      status: 'Delivered'
    }
  ],
  projectsIntro:
    'My projects are where I explore architecture ideas end to end. They give me room to test workflow models and system behavior outside normal product constraints.',
  personalProjects: [
    {
      title: 'Ekkos',
      tagline: 'A workflow-oriented reminder system built around timing, state, and follow-through.',
      description:
        'A workflow-oriented reminder system built around timing, state, and friction reduction. It turns plain-language input into structured reminder behavior. It is also a place to test whether better workflow design can make small software feel sharper and more considerate.',
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
      tagline: 'A controlled environment for testing system rules, progression logic, and runtime tradeoffs.',
      description:
        'A controlled environment for testing system rules, progression logic, and runtime tradeoffs in a domain where architecture choices are visible. It is a space to test extensibility and see how software structure changes what becomes possible.',
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
  },
  blogIntro: 'I write when there is a pattern worth naming or a mistake worth helping someone else avoid.',
  contactLead: 'I am interested in architecture work where system shape has to hold up in production. The best problems mix workflow behavior with operational reality.'
};
