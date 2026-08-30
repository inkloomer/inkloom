export const FPS = 30;

const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  structureForm: scene(0, 264),
  divisionLadder: scene(264, 264),
  changeApproval: scene(528, 288),
} as const;

export const DURATION_FRAMES = 816;

export const DURATION_SECONDS = DURATION_FRAMES / FPS;

export const toSourceFrame = (frame: number) => frame;
