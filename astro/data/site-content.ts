export const siteContent = {
  name: 'Gary McKeever',
  heroIntro: 'Hello, I\'m Gary McKeever, and I',
  role: 'Design systems that survive business whiplash.',
  homeTitle: 'Gary McKeever | Staff Software Architect',
  homeDescription:
    'Gary McKeever is a Staff Software Architect focused on platform modernization, distributed systems, and architecture leadership for teams shipping through complexity.',
  summary:
    'Over the last decade, I\'ve gotten good at reading what the business actually needs and designing systems to support it. I make the architectural calls that keep features shipping while the platform evolves underneath to keep solutions moving forward.',
  answerBlocks: [
    {
      question: 'Who is Gary McKeever?',
      answer:
        'Gary McKeever is a Staff Software Architect who leads platform modernization, distributed systems evolution, and architecture decisions for software teams working through operational complexity.'
    },
    {
      question: 'What kind of software architecture work does he do?',
      answer:
        'He works on platform transitions, delivery-safe modernization, orchestration and workflow systems, developer platform improvements, and the runtime decisions that shape how software behaves in production.'
    },
    {
      question: 'When should a team bring him in?',
      answer:
        'When the business needs architecture leadership without freezing delivery: migrations, scaling pains, reliability gaps, or systems that need a clearer long-term shape.'
    }
  ],
  focusAreas: [
    {
      title: 'Platform Modernization',
      description: 'Modernize legacy foundations without stalling delivery or forcing a rewrite fantasy.',
      href: '/platform-modernization'
    },
    {
      title: 'Staff and Principal Architecture Leadership',
      description: 'Define what strong architecture leadership looks like when systems and organizations are both under pressure.',
      href: '/staff-principal-software-architect'
    }
  ],
  heroPoints: [
    {
      title: 'Platform evolution',
      text: 'pragmatic technical change without putting the business on pause',
      icon: 'layers'
    },
    {
      title: 'System design',
      text: 'architecture that accounts for auditability, durability, and reliability without sacrificing delivery speed',
      icon: 'shield'
    },
    {
      title: 'Long-term shape',
      text: 'systems designed around today\'s business needs while leaving clear room for future scale and change',
      icon: 'route'
    }
  ],
  principles: [
    {
      title: 'Messy business logic is normal.',
      text: 'Real systems collect exceptions, timing rules, and old decisions that still matter. Good architecture keeps that complexity contained so new edge cases add business behavior, not technical sprawl.'
    },
    {
      title: 'Solve platform concerns in the platform.',
      text: 'Retries, durability, coordination, and audit trails belong in the platform when they can. Business code should solve business problems, not rebuild infrastructure one feature at a time.'
    },
    {
      title: 'Infrastructure is critical.',
      text: 'Architecture is not just code structure; it includes deployment, runtime shape, scaling, and long-running execution. A clean codebase on the wrong runtime model is still a bad system.'
    },
    {
      title: 'Simple is deliberate.',
      text: 'The most robust systems usually look simple because someone did the hard planning up front. Clear boundaries, fewer moving parts, and deliberate tradeoffs make software easier to change, operate, and trust.'
    },
    {
      title: 'The first version teaches you.',
      text: 'Good architecture leaves room to solve the problem twice: once to learn, and once to lock it in with the real edge cases in view. The second pass should fit reality, not the assumptions that came before it.'
    }
  ],
  workQuote:
    'I do some of my best work when a broad, ambiguous problem needs a clear, structured solution; I work even better under pressure.',
  techReadout: [
    {
      title: 'Languages',
      items: [
        { label: 'C#', monogram: 'C#' },
        { label: 'Java', icon: 'openjdk' },
        { label: 'Python', icon: 'python' },
        { label: 'Node.js', icon: 'nodedotjs' },
        { label: 'SQL', monogram: 'SQL' }
      ]
    },
    {
      title: 'Frameworks',
      items: [
        { label: '.NET', icon: 'dotnet' },
        { label: 'ASP.NET', monogram: 'ASP' },
        { label: 'EF Core', monogram: 'EF' },
        { label: 'React', icon: 'react' },
        { label: 'Angular', icon: 'angular' },
        { label: 'WPF', monogram: 'WPF' }
      ]
    },
    {
      title: 'Data',
      items: [
        { label: 'PostgreSQL', icon: 'postgresql' },
        { label: 'SQL Server', monogram: 'MSSQL' },
        { label: 'Spark', icon: 'apachespark' },
        { label: 'Databricks', icon: 'databricks' }
      ]
    },
    {
      title: 'Platform',
      items: [
        { label: 'AWS', monogram: 'AWS' },
        { label: 'Azure', monogram: 'AZR' },
        { label: 'Docker', icon: 'docker' },
        { label: 'Kubernetes', icon: 'kubernetes' }
      ]
    },
    {
      title: 'Systems',
      items: [
        { label: 'Airflow', icon: 'apacheairflow' },
        { label: 'Temporal', icon: 'temporal' },
        { label: 'Camunda', icon: 'camunda' },
        { label: 'Unity', icon: 'unity' }
      ]
    }
  ],
  professionalWork: [
    {
      title: 'I led a major, high risk platform transition off an EOL foundation.',
      description:
        'I led the organization-wide transition of a revenue-critical workflow platform off an end-of-life foundation and onto a supported fork. That work turned a major platform risk into a controlled path forward without disrupting the system the business depended on.',
      outcome: 'Replaced an organization-wide EOL risk with a stable, supported transition path.',
      tags: ['Workflow systems', 'Migration planning', 'Production change management'],
      icon: 'factory',
      status: 'Ongoing',
      progression: 'Intermediate → Senior → Staff → Architect at Moxe Health'
    },
    {
      title: 'I led an engineering-wide shift to a containerized developer experience.',
      description:
        'I led a cross-team shift from ad hoc local setups to a shared containerized development standard. It brought local development closer to deployed behavior, improved consistency across teams, and created a pattern the engineering organization adopted and kept building on.',
      outcome: 'Drove a lasting engineering culture shift around modern, deployment-aligned local development.',
      tags: ['Docker', 'Local development standards', 'Integration testing', 'Kubernetes-aligned workflows'],
      icon: 'nodes',
      status: 'Delivered'
    },
    {
      title: 'I rebuilt a legacy MS Access ERP into a full ASP.NET solution.',
      description:
        'Early in my career, I rebuilt a legacy MS Access ERP into a full ASP.NET system as the sole developer, integrated it with MAS 100, and built the reporting layer around it. That work shaped how I think about architecture: software has to fit real operational behavior, not just look clean on paper.',
      outcome: 'Built a business-critical operational system end to end and the instincts that still shape my architecture work.',
      tags: ['C#', '.NET', 'SQL Server', 'Angular', 'Node.js'],
      icon: 'layers',
      status: 'Delivered'
    }
  ],
  projectsIntro:
    'I test new ideas with side projects - sometimes it is nice to not have the pressure of product constraints!',
  personalProjects: [
    {
      title: 'Ekkos',
      tagline: 'A reminder system built around timing, state, and follow-through.',
      description:
        'A reminder system built around timing, state, and friction reduction. It turns plain-language input into structured reminder behavior. It is also a working product for testing whether better workflow design can make small software more dependable and considerate.',
      stack: 'React, .NET, Quartz.NET, API integrations',
      icon: 'calendar',
      logoSrc: '/img/logo192.png',
      logoAlt: 'Ekkos logo',
      status: 'Active build',
      href: 'https://ekkos.io',
      hrefLabel: 'Visit Ekkos',
      previewImage: 'https://ekkos.io/landing/assets/ekkos-phone-hero.png',
      previewAlt: 'Ekkos interface showing persistent task scheduling'
    },
    {
      title: 'ASTR',
      tagline: 'A top-down space survival sandbox built as a single-shard persistent universe with MMO-style world pressure.',
      description:
        'ASTR is now its own published game entity: a single-shard persistent-universe survival sandbox where mining, processing, logistics, building, movement, and defense all happen in one shared world and create exposure that other players and threats can push against.',
      stack: 'Custom game architecture, single-shard networking, persistent-world simulation, survival sandbox design',
      icon: 'cube',
      status: 'Published alpha',
      href: 'https://astrverse.net/',
      hrefLabel: 'Visit ASTR',
      previewImage: 'https://astrverse.net/og-card.png',
      previewAlt: 'ASTR single-shard persistent-universe survival sandbox preview'
    }
  ],
  blogPosts: [
  ],
  links: {
    github: 'https://github.com/X3r0byte',
    linkedin: 'https://www.linkedin.com/in/gmckeever-88/',
    email: 'mailto:gmckeever88@outlook.com'
  },
  blogIntro: 'Writing is coming back into the site intentionally. When articles are published, they will focus on platform modernization, distributed systems, and architecture leadership.',
  contactLead: 'If you want to talk about architecture, platform modernization, or building systems that can keep moving as the business changes, get in touch.'
};
