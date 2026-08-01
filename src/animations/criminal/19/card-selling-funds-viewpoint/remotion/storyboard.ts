export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={possessionModels:scene(0,180),lawfulFunds:scene(180,210),illicitFunds:scene(390,225)} as const;
export const DURATION_FRAMES=615;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
