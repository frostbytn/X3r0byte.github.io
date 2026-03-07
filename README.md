# Gary McKeever Portfolio (Astro)

This repository now includes an Astro implementation for a career-first portfolio baseline.

## Current Astro Scope

- Homepage: `/`
- Dedicated ASTR project route: `/projects/astr`
- Content source baseline: distilled from `source.md`
- Styling: lightweight custom CSS (no MDB dependency in Astro pages)

## Project Structure

- `astro/pages/index.astro` — principal-focused homepage
- `astro/pages/projects/astr.astro` — dedicated Unity project page
- `astro/layouts/BaseLayout.astro` — shared layout and metadata
- `astro/data/site-content.ts` — concise content model for homepage sections
- `astro/styles/global.css` — global design system and component styles
- `public/Build` and `public/TemplateData` — Unity WebGL runtime assets
- `public/resume.pdf` — downloadable resume
- `public/CNAME` — custom domain mapping for static hosting

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content Editing

Primary content is centralized in `astro/data/site-content.ts`:

- `role`
- `summary`
- `about`
- `focusAreas`
- `impactHighlights`
- `selectedWork`
- `links`

Keep entries concise and outcome-first.

## Deployment Notes

This Astro setup builds static output to `dist/` and is compatible with GitHub Pages style hosting.

- Ensure `public/CNAME` stays present for custom domain deploys.
- Publish the generated `dist/` contents via your existing deployment workflow.

## Legacy Site

Legacy HTML files are still present in the repository for reference during migration, but they are not used by Astro routes.