# Shared legal animation primitives

InkLoom legal explainers use a **fixed 1920×1080** Remotion canvas and a shared visual system inspired by:

| Skill / library | What we take | What we skip |
|-----------------|--------------|--------------|
| **remotion-markup** | `useCurrentFrame` + inline `interpolate`, `translate`/`scale` (no `transform` strings), `output: 'perceptual-scale'`, multi-scene Root + per-scene Composition | TransitionSeries fades, light-leaks |
| **remotion-create / video-layout** | Safe margins, larger scene titles (~64px), one focal rule per scene | Webpage-style responsive reflow |
| **remotion-bits** | `Enter` / `StaggerEnter` (StaggeredMotion pattern) | Scene3D, Particles, MatrixRain, TypeWriter loops |
| **@remotion/rough-notation** | `KeywordFocus` underline on one primary conclusion | Full-page hand-drawn noise |

## Files

- `legal-visual.tsx` — `createLegalVisualSystem()` factory wired per animation storyboard palette
- `scene-still.tsx` — wrap a bare scene for Studio single-page Composition
- `register-scenes.tsx` — optional helper (Roots currently inline Folder registration)

## Package manager

Use **bun** for installs in this repo (`bun add`, `bun install`, `bun run animation:pages`).

## Capture note

`scripts/capture-remotion-pages.mjs` selects the **deck** Composition (PascalCase of animation-id) when Root also registers per-scene comps for Studio.
