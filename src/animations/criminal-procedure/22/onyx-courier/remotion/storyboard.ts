export const FPS = 60;

export const SCENES = {
  'eligibility-panorama': { start: 0, duration: 570 },
  'state-terror-corruption-deep-dive': { start: 570, duration: 570 },
  'procedural-safeguards-chain': { start: 1140, duration: 570 },
  'appearance-confiscation-link': { start: 1710, duration: 630 },
} as const;

export const DURATION_FRAMES = Object.values(SCENES).reduce((sum, s) => sum + s.duration, 0);
