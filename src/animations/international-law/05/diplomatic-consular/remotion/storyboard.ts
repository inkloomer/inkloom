export const FPS = 60;
export const PLAYBACK_RATE = 1;
export const SOURCE_DURATION_SECONDS = 33;

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
  missionComparison: slowScene(0, 300),
  envoyStructure: slowScene(300, 240),
  staffProtocol: slowScene(540, 390),
  premisesImmunity: slowScene(930, 420),
  personalImmunities: slowScene(1350, 390),
  missionDuties: slowScene(1740, 240),
} as const;

export const PALETTE = {
  iris: '#EFEAF4',
  card: '#F9F7FC',
  ink: '#2B2438',
  paperText: '#2B2438',
  muted: '#776E88',
  line: '#CFC7DC',
  violet: '#5B4B8A',
  violetSoft: 'rgba(91,75,138,0.14)',
  plum: '#8A3D62',
  plumSoft: 'rgba(138,61,98,0.14)',
  sage: '#4E7D6B',
  sageSoft: 'rgba(78,125,107,0.14)',
} as const;
