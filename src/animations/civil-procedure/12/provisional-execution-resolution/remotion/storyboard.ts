export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {civilAndLaborRoutes: scene(0, 180), winningResolution: scene(180, 180), losingReversal: scene(360, 195)} as const;
export const DURATION_FRAMES = 555;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
