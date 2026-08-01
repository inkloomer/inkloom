export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {initiation: scene(0, 190), preparation: scene(190, 190), appearanceConsequences: scene(380, 190)} as const;
export const DURATION_FRAMES = 570;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
