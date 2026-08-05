export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  nonContentiousBoundary:scene(0,300),
  custodianAndEstateManager:scene(300,300),
  mediationConfirmation:scene(600,330),
  securityInterestRealization:scene(930,300),
} as const;
export const DURATION_FRAMES=1230;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
