# InkLoom validation checklist

Run the smallest relevant checks after an edit, then run the full build when changing shared components, routing, styles, or many MDX pages.

## Structural checks

- Confirm changed files are under the intended InkLoom area.
- Confirm every imported component exists and its props match the implementation.
- Confirm local images exist and use the intended relative `./assets/...` path.
- Search changed MDX/Astro files for bare absolute site links such as `/objective/`; replace them with `/inkloom/...` or a relative link.
- Check nearby `_meta.yml` files when adding, moving, or renaming pages.

## Visual and interaction checks

- Inspect the page at narrow and wide widths.
- Verify tables do not overflow unexpectedly and flow diagrams remain legible.
- Test memory challenge: toggle the checkbox, confirm `.answer-node` blur, and confirm hover reveal.
- Test `trigger-link-1` and `trigger-link-2` hover emphasis when the page uses `VisualFlow`.
- Check PageTitle quick actions, floating TOC, and any widescreen layout override touched by the change.

## Commands

```bash
astro dev --background
astro dev status
astro dev logs
astro dev stop
pnpm build
```

Use the dev server for route and visual checks. Use `pnpm build` as the final production-oriented gate; capture the first actionable error instead of hiding it behind a generic failure summary.
