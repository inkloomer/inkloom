# Shared animation runtime

InkLoom legal explainers use a **fixed 1920×1080** Remotion canvas. New animation nodes share runtime mechanics, not an art direction.

| Skill / library | What we take | What we skip |
|-----------------|--------------|--------------|
| **remotion-markup** | `useCurrentFrame` + inline `interpolate`, `translate`/`scale` (no `transform` strings), `output: 'perceptual-scale'`, multi-scene Root + per-scene Composition | TransitionSeries fades, light-leaks |
| **remotion-create / video-layout** | Safe margins, larger scene titles (~64px), one focal rule per scene | Webpage-style responsive reflow |
| **remotion-bits** | `Enter` / `StaggerEnter` (StaggeredMotion pattern) | Scene3D, Particles, MatrixRain, TypeWriter loops |
| **@remotion/rough-notation** | `KeywordFocus` underline on one primary conclusion | Full-page hand-drawn noise |

## Ownership boundary

- Share frame conversion, scene timing, `Sequence` plumbing, render registration, and optional style-neutral motion primitives.
- Keep backgrounds, fonts, palettes, cards, headings, scene transitions, and the complete art direction inside each animation node.
- Treat one thin MDX carrier and its animation directory as one visual node. Pages inside that node should feel related; neighboring nodes should deliberately choose a different visual fingerprint.

## Files

- `remotion-runtime.tsx` — style-neutral playback timing, timeline sequence, optional reveal primitives, and an explicitly styled arrow
- `scene-still.tsx` — wrap a bare scene for Studio single-page Composition
- `register-scenes.tsx` — optional helper (Roots currently inline Folder registration)
- `legal-visual.tsx` — legacy compatibility factory; do not use it for new animation nodes

## Package manager

Use **bun** for installs in this repo (`bun add`, `bun install`, `bun run animation:pages`).

## Capture note

`scripts/capture-remotion-pages.mjs` selects the **deck** Composition (PascalCase of animation-id) when Root also registers per-scene comps for Studio.
