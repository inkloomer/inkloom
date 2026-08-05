export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  partiesJurisdictionPreservation:scene(0,330),
  assetReturnRule:scene(330,330),
  twoJudgmentExecution:scene(660,330),
} as const;
export const DURATION_FRAMES=990;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
