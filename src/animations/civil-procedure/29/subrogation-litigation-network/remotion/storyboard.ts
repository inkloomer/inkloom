export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  threePartyRoles:scene(0,300),
  jurisdictionAndArbitration:scene(300,330),
  relatedActionsRouting:scene(630,360),
  directPaymentAndDismissal:scene(990,330),
} as const;
export const DURATION_FRAMES=1320;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
