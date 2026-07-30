---
name: inkloom-dev
description: "Develop and maintain the InkLoom Astro Starlight site: edit MDX legal-learning notes, custom Astro components, interactive legal flowcharts, memory-challenge layouts, routing, assets, and responsive styles. Use when working inside the InkLoom repository or its src/content/docs and .agents/skills areas."
---

# InkLoom development

Use this skill before editing InkLoom MDX, Astro components, layout overrides, custom CSS, or imported note content. Treat the repository's existing components and content conventions as the source of truth; do not replace them with generic Starlight patterns without checking the surrounding implementation.

## Working sequence

1. Locate the InkLoom repository root and confirm the target is under `src/content/docs/`, `src/components/`, `src/styles/`, or another intentional project area.
2. Read the target page, its nearest `_meta.yml`, imported components, and relevant styles before editing.
3. Preserve the site's base route: `base: '/inkloom'`. Every absolute MDX or Astro link must begin with `/inkloom/`; use relative asset paths such as `./assets/cover.png` for page-local images.
4. Choose existing primitives from [components.md](references/components.md) before adding a new component. Keep legal meaning in MDX and visual behavior in the shared component or stylesheet.
5. For imported notes, follow [content-conversion.md](references/content-conversion.md). Preserve native tables as tables and convert hand-written layouts into project components.
6. Validate the changed page and run the build checklist in [validation.md](references/validation.md). Report any unverified route, asset, or responsive behavior.

## Repository conventions

- Framework: Astro Starlight; content is authored as MDX.
- Content: `src/content/docs/`.
- Sidebar: `starlight-auto-sidebar`; directory labels and ordering live in `_meta.yml` files.
- Layout overrides: `src/components/overrides/PageTitle.astro` and `src/styles/custom.css`.
- Local development: `astro dev --background`.
- Build verification: `pnpm build`.

## Interactive page contracts

- Use the memory challenge contract only when the page is intended to support recall: a hidden `#memory-challenge-toggle` checkbox must precede `.note-content-wrapper`, and answer content must use `.answer-node`.
- Keep hover-linked flow classes stable. `trigger-link-1` and `trigger-link-2` are semantic hooks shared by action blocks and visual-flow paths.
- Use `<details class="interactive-card">` for progressive disclosure or self-testing instead of adding page-specific JavaScript.
- Preserve responsive behavior: tables remain readable, flow diagrams may use the provided responsive components, and page-local images must resolve through Astro's asset pipeline.

## Page title and layout boundaries

- `PageTitle.astro` owns the floating tick TOC, quick actions, copy HTML / iframe actions, and memory-toggle affordance.
- `custom.css` owns the widescreen layout override. Keep the full-width rule scoped to the intended breakpoint and do not hide the native content structure without checking mobile behavior.
- When copying content for Obsidian or Notion, keep required styles inline or in the page's established compatibility path; do not assume runtime JavaScript is available.

## Guardrails

- Do not use bare absolute paths such as `/objective/...`; they produce GitHub Pages 404s.
- Do not convert a semantic note table into a decorative flex layout.
- Do not duplicate an existing component's CSS or silently change its props; inspect the component contract first.
- Do not move source images into a shared global folder when they belong to one note; keep them under that note's `assets/` directory.
- Keep legal conclusions and source wording intact unless the user explicitly asks for substantive editing.

## References

- [components.md](references/components.md): component props and interaction hooks.
- [content-conversion.md](references/content-conversion.md): note-to-MDX conversion and asset rules.
- [validation.md](references/validation.md): build, route, visual, and compatibility checks.
