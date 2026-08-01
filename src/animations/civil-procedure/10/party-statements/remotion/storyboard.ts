export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {corroboration: scene(0, 150), refusalConditions: scene(150, 180), proceduralBoundary: scene(330, 150)} as const;
export const DURATION_FRAMES = 480;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
