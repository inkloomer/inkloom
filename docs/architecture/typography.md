# Typography Architecture

## Contract

InkLoom has independent typography systems for the Starlight website and
Remotion animations. Both use Tailwind CSS v4, but a site preset never changes
an animation preset. The current default maps every non-monospace role to LXGW
WenKai Screen and every monospace role to LXGW WenKai Mono GB Screen.

`src/typography/font-registry.ts` is the only place that names font families,
sources, licenses, weights, synthesis policy, and fallback stacks.
`site-presets.ts` resolves website roles. `animation-presets.ts` resolves
animation roles. Node-local `animation.meta.ts` may provide animation and Scene
overrides. Raw `font-family` values and Tailwind arbitrary font values are not
allowed outside the registry and font-loading implementation.

## Roles And Resolution

Website roles are `site-body`, `site-heading`, `site-ui`, and `site-mono`.
Animation roles are `animation-title`, `animation-body`, `animation-label`,
`animation-meta`, `animation-footer`, and `animation-mono`. Tailwind exposes
the matching `font-*` utilities.

Animation resolution is Scene, animation, topic, subject, then global default.
Website resolution is page, topic, subject, then site default. Roles currently
all resolve to the WenKai preset. Later changes select registered font IDs and
do not require JSX changes.

## Tailwind And Starlight

The website uses `@astrojs/starlight-tailwind@5` and Tailwind `4.2.0`. Remotion
uses `@remotion/tailwind-v4@4.0.503` and a separate Tailwind entry. The two
systems share assets and registry definitions only.

Starlight still owns page structure, themes, and component behaviour. InkLoom
maps its site role variables to `--sl-font` and `--sl-font-mono`, without
overwriting `--sl-color-*`. Color theme and typography selection are independent.

## Font Sources And Rendering

Font sources may be local, versioned npm packages, or remote resources with a
recorded content hash. Remotion must wait for registered fonts before rendering.
Missing fonts fail the render instead of silently falling back. WenKai Screen
currently contains only weight 400, so its preset explicitly permits synthetic
weight to preserve the established hierarchy.

Animation primary fonts must be registered assets, not operating-system fonts.
System fonts are only final fallback entries. Public media filenames remain
stable; typography QA bypasses browser cache instead of versioning URLs.

## Validation And Publication

`animation:typography` rejects raw font declarations, unknown roles/presets,
invalid Scene overrides, and missing registered sources. It runs before page
capture and publication. Layout auditing is per Scene. Human inspection uses
chapter contact sheets only at migration boundaries and before final publishing.
Generated AVIF/WebP/video is committed separately from source changes.
