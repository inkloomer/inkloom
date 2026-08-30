export const FPS = 60;

export const SCENES = {
  "eligibility-panorama": { start: 0, duration: 570, previewEndTrimFrames: 0 },
  "state-terror-corruption-deep-dive": { start: 570, duration: 570, previewEndTrimFrames: 0 },
  "procedural-safeguards-chain": { start: 1140, duration: 570, previewEndTrimFrames: 0 },
  "appearance-confiscation-link": { start: 1710, duration: 630, previewEndTrimFrames: 0 },
} as const;

export const DURATION_FRAMES = 2340;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
