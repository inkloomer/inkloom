export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 21.5;

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
  coerciveMeans: slowScene(0, 300),
  politicalMeans: slowScene(300, 330),
  icjJurisdiction: slowScene(630, 360),
  tribunalComparison: slowScene(990, 300),
} as const;

export const PALETTE = {
  marble: '#F1EDE5',
  card: '#F9F6F0',
  ink: '#32302A',
  paperText: '#32302A',
  muted: '#7C766A',
  line: '#D3CCBE',
  teal: '#2F6F6A',
  tealSoft: 'rgba(47,111,106,0.13)',
  gold: '#A8812F',
  goldSoft: 'rgba(168,129,47,0.15)',
  garnet: '#9C4038',
  garnetSoft: 'rgba(156,64,56,0.13)',
} as const;
