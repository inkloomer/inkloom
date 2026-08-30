export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});

export const SCENES = {
  interestThreeModels: scene(0, 260),
  possessionPurposeWard: scene(260, 250),
  theftTransferPeace: scene(510, 260),
  robberyCoercionSteps: scene(770, 260),
  fraudExtortionSplit: scene(1030, 260),
} as const;

export const DURATION_FRAMES = 1290;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
