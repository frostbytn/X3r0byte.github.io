# Astro Site Maintenance Instructions

This repository contains legacy HTML artifacts, but active site work should target the Astro implementation only unless the user explicitly asks otherwise.

## Scope

- Treat `astro/`, `public/`, `astro.config.mjs`, `package.json`, and the generated SEO assets as the active site.
- Ignore legacy root HTML pages such as `index.html`, `resume.html`, and `gallery.html` for normal site maintenance.
- Do not revive or republish removed placeholder content unless the user asks for it.

## Source Of Truth

- Shared content for the homepage and site-level positioning lives in `astro/data/site-content.ts`.
- Shared metadata and schema composition live in `astro/layouts/BaseLayout.astro` and `astro/utils/seo.ts`.
- Route-specific content and metadata live in the Astro pages under `astro/pages/`.
- Static crawl and preview assets live in `public/`, especially `robots.txt`, `site.webmanifest`, `og-card.png`, and `og-card.svg`.

## When Updating Astro Pages

- Keep page copy aligned with Gary McKeever's professional positioning: staff and principal-level architecture leadership, platform modernization, distributed systems, and delivery-safe change.
- Prefer concrete, outcome-first language over buzzwords.
- When adding or changing a route, update the page title, description, canonical URL, keywords, schema, and internal links in the same change.
- If a new page represents a durable search topic, wire it into homepage or related-page links so it is not orphaned.
- If a route slug changes, update all links, breadcrumbs, schema paths, and any references in `site-content.ts`.

## SEO And AEO Requirements

- Preserve the shared metadata pattern in `BaseLayout.astro`; do not add ad hoc SEO markup independently on pages when the shared layout can handle it.
- Use helpers in `astro/utils/seo.ts` for schema and absolute URLs instead of duplicating schema objects inline where avoidable.
- Do not render crawler-targeted SEO/AEO sections, FAQ blocks, or "for search engines" copy as visible page content. Put that material in natural prose, metadata, and JSON-LD instead.
- Keep canonicals absolute and aligned with `https://garymckeever.us`.
- Maintain the default social preview asset unless a page clearly deserves a dedicated preview image.
- If blog publishing resumes, ensure the blog index is indexable only when there are real posts, and make sure each post has complete frontmatter and article schema.
- Avoid publishing thin placeholder content just to fill SEO gaps.

## Documentation Expectations

- Update `README.md` when project structure, commands, SEO infrastructure, or content workflow materially change.
- Keep documentation focused on the Astro implementation, not the legacy site.
- If a future change alters where source-of-truth content lives, document that immediately.

## Validation Checklist

After Astro site changes, always:

1. Run `npm run build`.
2. Confirm the changed routes build successfully.
3. Verify generated metadata for affected pages: title, description, canonical, Open Graph, Twitter card, and JSON-LD.
4. Check whether `robots.txt`, sitemap generation, RSS output, and social card assets still make sense after the change.
5. Make sure new content is internally linked and does not accidentally expose removed or placeholder material.

## Safety Rules

- Do not remove `public/CNAME`.
- Do not edit `dist/` by hand.
- Do not reintroduce the removed placeholder blog article unless explicitly requested.
- Do not expand scope into legacy non-Astro files unless the user asks for migration or cleanup work there.