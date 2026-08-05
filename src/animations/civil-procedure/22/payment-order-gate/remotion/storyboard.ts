export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  paymentOrderEntry:scene(0,330),
  jurisdictionAndObjection:scene(330,300),
  orderEffectsAndLawsuits:scene(630,330),
} as const;
export const DURATION_FRAMES=960;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
