export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 28.5;

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
  collectionDesk: slowScene(0, 450),
  creditLetterGate: slowScene(450, 450),
  fraudStopOrder: slowScene(900, 480),
  caseSolvingOrder: slowScene(1380, 330),
} as const;

export const PALETTE = {
  oxblood: '#3A1620',
  panel: '#4A1D2B',
  cream: '#F3E9DA',
  ink: '#2A0F16',
  paperText: '#F3E9DA',
  muted: '#A98F96',
  line: '#5E3341',
  gold: '#D1A45C',
  goldSoft: 'rgba(209,164,92,0.16)',
  slate: '#8AA6C1',
  slateSoft: 'rgba(138,166,193,0.16)',
  copper: '#C77E4C',
  copperSoft: 'rgba(199,126,76,0.16)',
} as const;
