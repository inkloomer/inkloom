export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {ordinaryProperty: scene(0, 180), perishableValue: scene(180, 180), securedProperty: scene(360, 180)} as const;
export const DURATION_FRAMES = 540;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
