export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 36.5;

const toPlaybackFrames = (sourceFrames: number) => Math.round(sourceFrames / PLAYBACK_RATE);
const PREVIEW_EXIT_TRIM_FRAMES = toPlaybackFrames(0);
const slowScene = (start: number, duration: number) => ({
  start: toPlaybackFrames(start),
  duration: toPlaybackFrames(duration),
  previewEndTrimFrames: PREVIEW_EXIT_TRIM_FRAMES,
});

export const DURATION_FRAMES = toPlaybackFrames(SOURCE_DURATION_SECONDS * FPS);
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const toSourceFrame = (playbackFrame: number) => playbackFrame * PLAYBACK_RATE;

export const SCENES = {
  wtoFoundation: slowScene(0, 420),
  mfnPrinciple: slowScene(420, 480),
  trimsBan: slowScene(900, 390),
  gatsModes: slowScene(1290, 420),
  disputeSettlement: slowScene(1710, 480),
} as const;

export const PALETTE = {
  celadon: '#123B3F',
  panel: '#1B4B50',
  cream: '#F1EAD8',
  paperText: '#F1EAD8',
  muted: '#8FB0AC',
  line: '#2C5E62',
  coral: '#E2725B',
  coralSoft: 'rgba(226,114,91,0.15)',
  sky: '#7FB7C9',
  skySoft: 'rgba(127,183,201,0.14)',
  gold: '#D9B45C',
  goldSoft: 'rgba(217,180,92,0.15)',
  moss: '#93B573',
  mossSoft: 'rgba(147,181,115,0.14)',
} as const;
