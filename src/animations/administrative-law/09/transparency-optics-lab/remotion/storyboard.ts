export const FPS = 60;
const duration = 420;
export const SCENES = {
  "setting-spectrum": { start: 0, duration, previewEndTrimFrames: 0 },
  "rulemaking-chronology": { start: 420, duration, previewEndTrimFrames: 0 },
  "setting-trap-lenses": { start: 840, duration, previewEndTrimFrames: 0 },
  "authorization-prism": { start: 1260, duration, previewEndTrimFrames: 0 },
  "delegation-filters": { start: 1680, duration, previewEndTrimFrames: 0 },
  "concentration-apertures": { start: 2100, duration, previewEndTrimFrames: 0 },
  "subject-trap-darkroom": { start: 2520, duration, previewEndTrimFrames: 0 },
  "hearing-signal-split": { start: 2940, duration, previewEndTrimFrames: 0 },
  "penalty-hearing-waveband": {
    start: 3360,
    duration: 480,
    previewEndTrimFrames: 0,
  },
  "license-hearing-focus": { start: 3840, duration, previewEndTrimFrames: 0 },
  "hearing-clock-array": { start: 4260, duration, previewEndTrimFrames: 0 },
  "hearing-common-console": { start: 4680, duration, previewEndTrimFrames: 0 },
  "hearing-trap-scope": { start: 5100, duration, previewEndTrimFrames: 0 },
  "information-definition-projector": {
    start: 5520,
    duration,
    previewEndTrimFrames: 0,
  },
  "disclosure-source-routing": {
    start: 5940,
    duration,
    previewEndTrimFrames: 0,
  },
  "absolute-secrecy-shutter": {
    start: 6360,
    duration,
    previewEndTrimFrames: 0,
  },
  "privacy-balance-filter": {
    start: 6780,
    duration: 480,
    previewEndTrimFrames: 0,
  },
  "optional-nondisclosure-dimmers": {
    start: 7260,
    duration,
    previewEndTrimFrames: 0,
  },
  "active-disclosure-beam": { start: 7680, duration, previewEndTrimFrames: 0 },
  "active-disclosure-exposure": {
    start: 8100,
    duration,
    previewEndTrimFrames: 0,
  },
  "application-input-specimen": {
    start: 8520,
    duration,
    previewEndTrimFrames: 0,
  },
  "receipt-clock-detectors": { start: 8940, duration, previewEndTrimFrames: 0 },
  "response-spectrum-splitter": {
    start: 9360,
    duration: 480,
    previewEndTrimFrames: 0,
  },
  "supplement-correction-gate": {
    start: 9840,
    duration,
    previewEndTrimFrames: 0,
  },
  "special-request-router": {
    start: 10260,
    duration: 480,
    previewEndTrimFrames: 0,
  },
  "abuse-throttle-remedy": {
    start: 10740,
    duration: 480,
    previewEndTrimFrames: 0,
  },
} as const;
export const DURATION_FRAMES = 11220;
export const DURATION_SECONDS = DURATION_FRAMES / FPS;
export const PREVIEW_EXIT_TRIM_FRAMES = 0;
