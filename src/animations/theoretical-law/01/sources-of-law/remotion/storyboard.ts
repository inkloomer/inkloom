export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  meaningSplit: scene(0, 252),
  legislativeLadder: scene(252, 288),
  hierarchyConflicts: scene(540, 264),
  sameLevelConflicts: scene(804, 288),
  informalSources: scene(1092, 252),
} as const;

export const DURATION_FRAMES = 1344;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
