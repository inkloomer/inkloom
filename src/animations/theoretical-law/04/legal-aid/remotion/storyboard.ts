export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  featuresObjects: scene(0, 276),
  appointmentImplementation: scene(276, 288),
  procedureRemedy: scene(564, 276),
} as const;

export const DURATION_FRAMES = 840;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
