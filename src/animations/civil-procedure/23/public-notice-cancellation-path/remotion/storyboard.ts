export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  noticeEntryAndPeriod:scene(0,330),
  claimFilingWindow:scene(330,300),
  cancellationAndRelief:scene(630,330),
} as const;
export const DURATION_FRAMES=960;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
