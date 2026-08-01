export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={claimExchange:scene(0,180),debtRegimes:scene(180,210),depositTransformation:scene(390,180),utilityClassification:scene(570,195),illegalPossessionBoundary:scene(765,210)} as const;
export const DURATION_FRAMES=975;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
