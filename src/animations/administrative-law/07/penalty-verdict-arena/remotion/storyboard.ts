export const FPS = 60;

export const SCENES = {
  'sanction-definition-filter': {start: 0, duration: 420, previewEndTrimFrames: 0},
  'five-sanction-machines': {start: 420, duration: 480, previewEndTrimFrames: 0},
  'power-routing-split': {start: 900, duration: 360, previewEndTrimFrames: 0},
  'rulemaking-mold-ladder': {start: 1260, duration: 480, previewEndTrimFrames: 0},
  'specification-benchmark-rail': {start: 1740, duration: 360, previewEndTrimFrames: 0},
  'supplemental-setting-chamber': {start: 2100, duration: 420, previewEndTrimFrames: 0},
  'implementation-role-triangle': {start: 2520, duration: 420, previewEndTrimFrames: 0},
  'jurisdiction-arena-map': {start: 2940, duration: 480, previewEndTrimFrames: 0},
  'ordinary-procedure-racetrack': {start: 3420, duration: 480, previewEndTrimFrames: 0},
  'legal-review-lock': {start: 3900, duration: 420, previewEndTrimFrames: 0},
  'summary-threshold-scales': {start: 4320, duration: 420, previewEndTrimFrames: 0},
  'hearing-scope-amphitheater': {start: 4740, duration: 420, previewEndTrimFrames: 0},
  'hearing-procedure-console': {start: 5160, duration: 480, previewEndTrimFrames: 0},
  'participation-rule-scoreboard': {start: 5640, duration: 420, previewEndTrimFrames: 0},
  'limitation-liability-dial': {start: 6060, duration: 480, previewEndTrimFrames: 0},
  'evidence-monitoring-wall': {start: 6540, duration: 480, previewEndTrimFrames: 0},
  'public-security-sanction-vault': {start: 7020, duration: 420, previewEndTrimFrames: 0},
  'summons-interview-clocks': {start: 7440, duration: 480, previewEndTrimFrames: 0},
  'inspection-seizure-scene': {start: 7920, duration: 480, previewEndTrimFrames: 0},
  'single-officer-camera-wall': {start: 8400, duration: 420, previewEndTrimFrames: 0},
  'mediation-privacy-fork': {start: 8820, duration: 420, previewEndTrimFrames: 0},
  'fine-execution-settlement-chain': {start: 9240, duration: 480, previewEndTrimFrames: 0},
  'detention-suspension-airlock': {start: 9720, duration: 480, previewEndTrimFrames: 0},
  'detention-nonexecution-screen': {start: 10200, duration: 480, previewEndTrimFrames: 0},
} as const;

export const DURATION_FRAMES = 10680;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
