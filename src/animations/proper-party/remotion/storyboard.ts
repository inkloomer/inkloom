export const FPS = 60;
export const PLAYBACK_RATE = 0.6;
export const SOURCE_DURATION_SECONDS = 24;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const slowScene = (start: number, duration: number) => ({
  start: toPlaybackFrames(start),
  duration: toPlaybackFrames(duration),
});

export const DURATION_FRAMES = toPlaybackFrames(SOURCE_DURATION_SECONDS * FPS);
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

export const SCENES = {
  principle: slowScene(0, 180),
  exception1: slowScene(180, 210),
  exception2: slowScene(390, 210),
  exception3: slowScene(600, 210),
  recap: slowScene(810, 210),
}