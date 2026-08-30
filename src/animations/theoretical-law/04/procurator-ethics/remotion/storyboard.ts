export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  loyaltyPeople: scene(0, 240),
  dutyFairClean: scene(240, 276),
} as const;

export const DURATION_FRAMES = 516;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
