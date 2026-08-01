export const FPS = 30;
const scene = (start: number, duration: number) => ({start, duration, previewEndTrimFrames: 0});
export const SCENES = {initiation: scene(0, 170), scope: scene(170, 170), expertParticipation: scene(340, 180)} as const;
export const DURATION_FRAMES = 520;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (frame: number) => frame;
