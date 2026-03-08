# Website Alignment Fix Guide

## Objective

Refactor the site so it presents Gary as a system-shaping staff software architect with a strong architectural point of view, not just a capable technical fixer.

The site should communicate:

- He sees the future-state model before other people do
- He understands where complexity belongs and where it does not
- He believes domain problems should not be constrained by weak technical foundations
- He treats workflow, eventing, scaling, deployment, and platform design as first-class architectural concerns
- He has the pragmatic delivery history to make those ideas real

The current site is already credible and professional. This work is not a redesign from scratch. It is a strategic refocus of hierarchy, messaging, and readability.

---

# North Star

## Primary impression the site should leave

This person is not just experienced. He has a clear systems philosophy, understands modern architecture deeply, and can reshape messy software foundations so the business can move more cleanly on top.

## Secondary impression the site should leave

This person has actually done the work in production, understands operational reality, and is not just speaking in theory.

## Impression to avoid

This person is a solid architect with a nice portfolio of enterprise experience.

That is too generic. The site needs stronger identity than that.

---

# Core Positioning

## Positioning statement

Gary is a staff software architect who redesigns software systems so business workflows are supported by the right architectural patterns instead of constrained by the wrong technical ones.

## Core thesis

Most brittle enterprise systems are solving the wrong problems in the wrong layer.

Teams often hand-build retries, idempotency, long-running coordination, compensations, and scaling logic in application code when better workflow, eventing, deployment, and runtime models already exist.

Gary’s point of view is that the domain should not be forced to bend around a weak technical foundation. The architecture should be reshaped so the business problem can sit cleanly on top.

## Supporting themes

### Domain-first architecture
The business problem should not be distorted by technical limitations.

### Workflow and orchestration as leverage
Durable workflow systems, event-driven models, and proven orchestration patterns remove repeated custom engineering effort.

### Deployment model matters
Programming model is only half the story. Deployment shape, containerization, workload model, queue-backed execution, and scaling mechanics often decide whether a system succeeds.

### Simplicity is earned
The best systems are simple because someone did the hard architectural thinking up front.

### Build twice mentality
The first version teaches the real shape of the problem. The second version is where accidental complexity gets removed and the solution aligns to the actual model.

---

# Global Implementation Directives

## Do not redesign the site visually from scratch

Preserve the existing visual identity:

- dark theme
- warm accent color
- restrained, serious tone
- structured content sections
- elegant layout

This is already working.

## Improve message hierarchy before adding more content

The biggest issue is not lack of content. It is that the strongest ideas are buried.

Make the reader understand Gary’s point of view within the first screen and a half.

## Keep language concrete

Do not use:

- vague innovation language
- motivational corporate phrasing
- consultant-style capability labels unless tied to real system behavior
- generic claims like driving business value, enabling excellence, empowering teams, or accelerating transformation

Prefer direct language about:

- where complexity sits
- what changed
- what architectural layer was wrong
- what kind of system shape fixed it
- how that improved delivery, operations, or scale

## Keep the tone sharp and opinionated, but not ranty

Gary should sound like a serious architect with clear convictions, not like he is venting about coworkers.

Translate strong opinions into disciplined architecture language.

---

# Information Architecture Changes

## Current high-level structure

The current structure is broadly sound but needs stronger prioritization.

## Recommended structure

### Hero
### Principles or How I Think
### Impact or Selected Outcomes
### Work
### Projects
### Journey
### Writing or Field Notes
### Contact

## Reason for change

Right now the site makes the reader work too long before the deeper thesis becomes visible.

The fix is to front-load philosophy and point of view, then support it with evidence.

---

# Hero Section

## Problem

The current hero is credible but too safe. It sells Gary as someone who improves systems, but not strongly enough as someone who sees the correct future architecture.

## Goal

The hero should immediately communicate:

- architecture point of view
- domain-first thinking
- workflow and deployment awareness
- system-shaping leadership
- seriousness and clarity

## Required content changes

### Replace the current headline with one of these approved directions

#### Preferred headline
I design systems so business workflows are supported by the right architecture, not constrained by the wrong technical ones.

#### Alternate headline
I see where systems are solving the wrong problems in the wrong layer, then reshape the foundation underneath them.

#### Alternate headline
I rebuild brittle systems at the boundary, workflow, and deployment layers so the domain can operate cleanly on top.

## Replace the current subheading with copy in this direction

I work across system design, workflow architecture, and deployment strategy to simplify complex software, remove technical drag, and build foundations that scale cleanly.

## Replace the current bullet list with stronger principle-driven bullets

Use three bullets only. Keep them short and concrete.

### Approved bullet set
- Rebuild system shape so the domain can lead
- Put workflow, retries, and durability in the right layer
- Design deployment models for scale, clarity, and control

## CTA guidance

Current CTA structure is fine. Keep it restrained.

Preferred CTA order:

- Contact
- LinkedIn
- GitHub

Do not add extra CTA noise in the hero.

## Photo guidance

### Current state
The musician photo adds personality and does not ruin the site.

### Recommended change
Use a cleaner, more direct portrait in the hero if a strong one is available. A wedding photo with jacket is likely a better hero image than the musician image because it projects more instant professional authority.

### Fallback
If no better image is ready, keep the current image for now and prioritize messaging changes first.

---

# Add a New Principles Section Near the Top

## Problem

The site currently proves experience, but not enough philosophy.

## Goal

Introduce Gary’s point of view explicitly so the rest of the site is interpreted in the right frame.

## Placement

Place this section immediately below the hero.

## Section title options

### Preferred
How I Think

### Alternate
Architecture Principles

## Required format

Use four or five short principle blocks. Each should have:

- short label
- one or two sentence explanation

## Approved content

### Domain first
If the business keeps running into technical objections, the system is probably shaped wrong. Architecture should make the domain easier to express, not harder.

### Use infrastructure to solve infrastructure problems
Retries, idempotency, compensations, long-running coordination, and durable execution should not be hand-built in application code when the platform can own them better.

### Deployment model matters
A clean codebase on top of a weak runtime model is still a weak system. Containers, workload shape, queue-backed execution, and scaling strategy are part of the architecture.

### Simplicity is earned
The best systems are easy to change and easy to operate because someone did the hard thinking up front.

### Build twice when it matters
The first version teaches the real shape of the problem. The second version is where the architecture is aligned to that reality instead of the assumptions that came before it.

## Visual treatment guidance

This section should feel lighter than the technical snapshot and easier to scan.

Possible treatments:

- 2-column grid on desktop
- short cards with subtle border
- simple stacked blocks with generous spacing

Do not over-design this section.

---

# Impact Section

## Problem

The current Impact section is useful but too generic in naming and not strong enough in architectural framing.

## Goal

Rename and rewrite the impact blocks so they feel like system-level thinking rather than consulting service categories.

## Rename the section

### Preferred section title
Selected Impact

## Rename the items

### Replace Migration Strategy with Transition-State Architecture
Use this block to show that Gary defines credible paths from brittle legacy systems to better architectures without requiring a fantasy rewrite.

### Replace Workflow Design with Durable Workflow Systems
Use this block to highlight that Gary sees where workflow belongs, how auditability matters, and why orchestration frameworks reduce repeated engineering effort.

### Replace Scaling Model with Scaling Through System Shape
Use this block to show that scale is not just code optimization. It is workload model, queue strategy, topology, and deployment behavior.

### Replace Release Reliability with Delivery Without Fragility
Use this block to show that local setup, testability, pipeline shape, and deployment confidence are part of architecture, not just engineering hygiene.

## Approved tone for each item

Each block should read like:

- architectural lens
- practical impact
- plain English

Do not let these blocks become buzzword summaries.

## Example rewrite direction

### Transition-State Architecture
I define staged paths out of brittle systems so organizations can modernize architecture without freezing delivery or pretending the old world disappears overnight.

### Durable Workflow Systems
I move long-running coordination, retries, and recovery into workflow models that are easier to monitor, audit, and extend over time.

### Scaling Through System Shape
I focus on workload design, queue depth, container topology, and runtime behavior so systems scale through better structure instead of application-level workarounds.

### Delivery Without Fragility
I treat local environments, testing, and deployment mechanics as part of system design so teams can ship faster without building hidden operational risk.

---

# Technical Snapshot Section

## Problem

This section is useful, but currently it arrives too early and flattens Gary into a stack-oriented engineer profile.

## Goal

Preserve breadth without weakening the architectural narrative.

## Required changes

### Move the section lower
Move it below Work, or at minimum below the new Principles section and below Impact.

### Rename the section
Preferred rename options:

- Systems I Work In
- Architecture Surface Area
- Technical Range

Do not use Technical Snapshot unless there is no time to change it.

### Reduce density
Trim each category so it feels like surface area, not resume dumping.

### Reframe category copy
Each block should emphasize system context more than tool inventory.

## Example direction

### Instead of
This is my primary engineering foundation. I use .NET for backend services, APIs, integration, scheduling, and systems.

### Use
I spend most of my time in backend and integration systems where runtime behavior, service boundaries, and durability matter more than novelty.

## Section rule

Every block in this section should answer:
What kind of systems does Gary work in and how does he think about them?

It should not simply answer:
What tools has Gary used?

---

# Work Section

## Problem

This is already the strongest section, but it can be sharpened further with stronger outcome framing and more architectural tension.

## Goal

Make each project read like:

- what system problem existed
- what architectural layer mattered
- what Gary changed or saw clearly
- what outcome followed

## Required structure for each entry

Each entry should include:

### Title
Strong, direct, project-style label

### One-paragraph summary
Two or three sentences max

### Outcome or result line
A short sentence or sub-line that makes the impact explicit

### Tags
Keep tags. They help.

## Rewrite instructions for each current entry

### Workflow Platform Stabilization
Current concept is good. Strengthen it by emphasizing transition-state architecture and platform control.

#### Rewrite direction
Led the migration of a production workflow system off an end-of-life foundation and used that work to create a more deliberate path forward. The effort stabilized an urgent platform problem while also defining a cleaner architecture to build on instead of just patching what existed.

#### Outcome direction
Turned an immediate platform liability into a controlled modernization path.

### Controlled Horizontal Scaling
This is a strong project. Push the system-shape angle harder.

#### Rewrite direction
A production workflow was overwhelming downstream dependencies because the runtime model was wrong for the problem. I reworked execution around queue-backed scaling and load containment so throughput became more predictable and less dependent on application-level workarounds.

#### Outcome direction
Improved throughput by fixing system shape instead of tuning around the symptoms.

### Containerized Developer Experience
Keep this, but frame it as architecture support and delivery confidence, not only developer convenience.

#### Rewrite direction
I helped standardize local environments and delivery mechanics around containerized workflows so engineers could build, test, and reason about changes with fewer setup-specific failures. That work reduced friction, improved repeatability, and created a stronger baseline for ongoing delivery.

#### Outcome direction
Made local development and release behavior more consistent across the team.

### Internal ERP Development
This section is good because it adds depth and personal history. Keep it, but make the learning more explicit.

#### Rewrite direction
Before moving deeper into architecture, I helped build an internal ERP system end to end. That experience grounded me in how operational systems actually support real business work and shaped the way I think about architecture as something that must serve the domain, not just the implementation.

#### Outcome direction
Built early intuition for software that has to match real business behavior.

## Add one short framing line above the section

Use a line like this:

These are representative examples of the kinds of systems problems I tend to work on: platform transitions, workflow durability, scaling shape, and delivery foundations.

---

# Journey or Timeline Section

## Problem

The journey section is not bad, but it currently feels denser and less important than the sections above it.

## Goal

Keep the story, but simplify it and make it more obviously supportive.

## Required changes

### Reduce visual density
Give each era a little more spacing. Do not let this section become a wall of tiny text.

### Keep the career arc clear
The arc that matters is:

- hands-on business systems grounding
- progression through engineering responsibility
- stronger ownership of architecture and platform direction
- growing fluency in workflow, integration, distributed systems, and modernization

### Make the supporting sidebar stronger
The at a glance block should reinforce the profile instead of repeating vague summary language.

## Recommended sidebar content direction

### At a glance
- Architect focused on workflow, platform, and system shape
- Strongest in modernization under real constraints
- Thinks in patterns: compensation, idempotent fanout, durable execution, queue-backed scale
- Equally interested in architecture and deployment model
- Brings both future-state vision and practical delivery judgment

## Rule for this whole section

The journey should support credibility, not compete with the core positioning.

---

# Projects Section

## Problem

This section is good and adds important depth, but it can better reinforce Gary’s architecture identity rather than just showing side projects.

## Goal

Use projects to prove that Gary explores system ideas beyond his day job and has independent architectural curiosity.

## Section intro

Add a short line above the projects grid:

My projects are where I explore architecture ideas with more room to test workflow models, interaction patterns, and system behavior end to end.

## Project framing guidance

### Ekkos
Position as workflow-aware product thinking and system design, not just a reminder app.

#### Rewrite direction
A workflow-oriented reminder system built around timing, state, and friction reduction. It turns plain-language input into structured reminder behavior and explores how small systems can feel more thoughtful when workflow and interaction design are treated seriously.

### ASTR
Position as an experimental architecture space.

#### Rewrite direction
A controlled environment for testing system rules, progression logic, and runtime tradeoffs in a domain where architecture choices are visible. It is a space for experimenting with behavior, extensibility, and how software structure shapes what becomes possible.

## Rule for the project section

Projects should prove:

- independent thinking
- system curiosity
- willingness to experiment
- architecture awareness outside enterprise work

They should not feel like random hobby tiles.

---

# Field Notes Section

## Problem

This section is strong conceptually, but right now it needs to do more to support Gary’s authority.

## Goal

Make Field Notes feel like evidence of architectural judgment and pattern recognition.

## Section intro

Use this exact direction:

I write when there is a pattern worth naming or a mistake worth helping someone else avoid.

## Guidance for article titles

Favor titles that show judgment and pattern recognition.

Examples of good direction:

- Modernization Without the Rewrite Trap
- When Workflow Logic Leaks Into the Wrong Layer
- Scaling Problems That Are Really Deployment Problems
- Why Durable Systems Need Better Boundaries, Not More Glue Code

## Rule

Writing should sound like:
Here is a system pattern I have seen and here is the clearer way to think about it.

Not:
Here are general software thoughts.

---

# Contact Section

## Problem

The current contact section is fine but could close the narrative a little more strongly.

## Goal

End the site with a concise statement that reinforces Gary’s identity.

## Recommended supporting line

I am interested in architecture work where system shape, workflow behavior, and operational reality all matter at once.

## Alternate supporting line

I do my best work where architecture has to support real business complexity without turning the system into a compromise.

Keep the buttons restrained.

---

# Visual and UX Fixes

## Readability

### Increase body text size slightly
The current text is elegant but slightly too small for long-form scanning.

### Increase line height slightly
This will reduce visual density without changing the site’s tone.

### Increase contrast slightly
Keep the warm palette, but improve readability in the smaller text.

## Section spacing

### Add slightly more breathing room between major sections
The page is long and content-rich. Stronger section spacing will improve scanability.

### Do not over-compress multi-column content
The site should feel intentional, not crowded.

## Timeline and technical sections

These are the two most likely places for reader fatigue. Give them extra spacing and slightly clearer typography hierarchy.

## Navigation

If possible, use a sticky header or stronger persistent nav so readers can jump directly to:

- Work
- Projects
- Field Notes
- Contact

The page has enough depth to justify it.

---

# Content Rules for the Agent

## Use these voice rules

### Sound like a serious architect
Clear, direct, informed, grounded.

### Use concrete system language
Examples:

- workflow durability
- service boundaries
- deployment model
- queue-backed scale
- long-running coordination
- runtime behavior
- transition-state architecture
- operational friction
- auditability
- predictable throughput

### Keep confidence high and fluff low
Do not oversell. Let system clarity do the work.

## Avoid these patterns

### Do not use vague outcome language
Avoid phrases like:

- drive innovation
- accelerate transformation
- unlock value
- empower teams
- strategic alignment
- cutting-edge solutions
- world-class engineering

### Do not overuse adjectives
Gary’s authority comes from specificity, not decoration.

### Do not drift into angry manifesto tone
The site can be opinionated without sounding combative.

### Do not make every section read like a resume
The site should feel like a point of view supported by evidence.

---

# Implementation Sequence

## Phase 1: Message hierarchy
- Rewrite hero headline, subheading, and bullets
- Add How I Think section below hero
- Rename and rewrite Impact section
- Update section order so philosophy comes before tool inventory

## Phase 2: Sharpen proof
- Rewrite Work entries for stronger system-shape and outcome framing
- Adjust project blurbs so they reinforce architectural curiosity
- Tighten timeline sidebar so it supports the positioning

## Phase 3: Readability and polish
- Increase body text size slightly
- Increase line height slightly
- Increase contrast slightly
- Add more space between dense sections
- Improve scanability in timeline and technical blocks

## Phase 4: Optional identity upgrades
- Swap hero image for a more direct portrait if available
- Improve article titles in Field Notes
- Add sticky or clearer navigation if not already present

---

# Acceptance Criteria

## Messaging success criteria

The first screen and a half should clearly communicate:

- Gary has a point of view about architecture
- He thinks domain-first
- He values workflow and deployment shape
- He understands where complexity belongs
- He has modern systems judgment, not just implementation experience

## Structural success criteria

A reader should be able to scan the page in this order:

- Who he is
- How he thinks
- What impact he drives
- What real work proves it
- What independent projects reinforce it
- How to contact him

## Tone success criteria

The site should feel:

- serious
- modern
- opinionated
- grounded
- technically mature
- distinct from generic staff engineer portfolios

## Failure conditions

The redesign has failed if the site still mainly reads like:

- a categorized list of competencies
- a stack inventory
- a generic architecture portfolio
- a pragmatic fixer without a future-state thesis

---

# Final Creative Direction Summary

Keep the existing visual tone.
Do not reinvent the layout unnecessarily.
Make the site say the strongest truth earlier.

The site should present Gary as a staff software architect who sees when systems are solving the wrong problems in the wrong layer, understands how workflow and deployment models shape real outcomes, and can move architecture toward a simpler, stronger foundation that lets the domain operate cleanly on top.