export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {jurisdictionTriangle: scene(0, 180), procedureHandoff: scene(180, 180), jurisdictionHold: scene(360, 180)} as const;
export const DURATION_FRAMES = 540;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
