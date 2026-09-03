export const FPS=30;
const scene=(start:number,duration:number)=>({start,duration,previewEndTrimFrames:0});
export const SCENES={
  enforcementLaunchClock:scene(0,330),
  statutoryJurisdiction:scene(330,330),
  securityAndSettlement:scene(660,360),
  objectionsAndActions:scene(1020,390),
  specialEnforcementMeasures:scene(1410,390),
  settlementFormsConsequences:scene(1800,390),
  outsideSettlementObjection:scene(2190,360),
  partyChangeAndAddition:scene(2550,420),
  participationDistributionGate:scene(2970,360),
  distributionPlanObjectionSuit:scene(3330,390),
  matureClaimNoticeFork:scene(3720,420),
  coOwnedPropertyPartition:scene(4140,390),
  specificThingSubstitute:scene(4530,360),
  retainedTitleExecution:scene(4890,420),
  apologyPublicationExecution:scene(5310,300),
  delayedPerformanceMoney:scene(5610,360),
} as const;
export const DURATION_FRAMES=5970;
export const DURATION_SECONDS=DURATION_FRAMES/FPS;
export const toSourceFrame=(frame:number)=>frame;
