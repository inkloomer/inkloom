export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {qualification: scene(0, 180), appearance: scene(180, 210), testimonyConduct: scene(390, 180)} as const;
export const DURATION_FRAMES = 570;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
