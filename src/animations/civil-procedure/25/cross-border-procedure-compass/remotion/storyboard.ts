export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  jurisdictionAgreementBoundary:scene(0,330),
  parallelLitigationRouter:scene(330,330),
  serviceAndEvidenceCorridors:scene(660,300),
  foreignJudgmentRecognition:scene(960,330),
  foreignLitigationBasicPrinciples:scene(1290,360),
} as const;
export const DURATION_FRAMES=1650;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
