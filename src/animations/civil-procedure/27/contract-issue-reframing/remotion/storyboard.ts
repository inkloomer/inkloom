export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  pleadedContractPositions:scene(0,270),
  formationFocusReset:scene(270,300),
  claimChangeAndEvidenceWindow:scene(570,300),
} as const;
export const DURATION_FRAMES=870;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
