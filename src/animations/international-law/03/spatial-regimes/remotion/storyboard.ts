export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 43.5;

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
  territoryParts: slowScene(0, 360),
  territoryAcquisition: slowScene(360, 420),
  seaZones: slowScene(780, 450),
  hotPursuit: slowScene(1230, 300),
  continentalShelf: slowScene(1530, 360),
  specialWaters: slowScene(1890, 360),
  antarcticaSpace: slowScene(2250, 360),
} as const;

export const PALETTE = {
  chart: '#0E2A3A',
  deep: '#123448',
  strata: '#175068',
  foam: '#EDF3F2',
  ink: '#0E2A3A',
  paperText: '#DCE9EC',
  muted: '#7F99A6',
  line: '#2A5A72',
  sand: '#E9DFC8',
  sandSoft: 'rgba(233,223,200,0.14)',
  orange: '#D96F32',
  orangeSoft: 'rgba(217,111,50,0.16)',
  teal: '#37A08E',
  tealSoft: 'rgba(55,160,142,0.16)',
  alert: '#C8493C',
  alertSoft: 'rgba(200,73,60,0.16)',
} as const;
