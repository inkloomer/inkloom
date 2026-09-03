import {typography} from '@/animations/civil-procedure/24/enforcement-control-network/animation.meta';
import {EnforcementControlNetwork} from '@/animations/civil-procedure/24/enforcement-control-network/remotion/EnforcementControlNetwork';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/24/enforcement-control-network/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'enforcement-launch-clock',number:'01',title:'生效文书与 2 年申请执行时效',...SCENES.enforcementLaunchClock},
  {id:'statutory-jurisdiction',number:'02',title:'法定执行管辖与 10 日异议',...SCENES.statutoryJurisdiction},
  {id:'security-and-settlement',number:'03',title:'执行担保与执行和解不能混用',...SCENES.securityAndSettlement},
  {id:'objections-and-actions',number:'04',title:'执行行为异议、案外人异议与异议之诉',...SCENES.objectionsAndActions},
  {id:'special-enforcement-measures',number:'05',title:'特殊执行措施的对象与边界',...SCENES.specialEnforcementMeasures},
  {id:'settlement-forms-consequences',number:'06',title:'执行和解：形式、后果与择一救济',...SCENES.settlementFormsConsequences},
  {id:'outside-settlement-objection',number:'07',title:'执行外的和解与执行行为异议',...SCENES.outsideSettlementObjection},
  {id:'party-change-and-addition',number:'08',title:'变更、追加被执行人与两种救济',...SCENES.partyChangeAndAddition},
  {id:'participation-distribution-gate',number:'09',title:'参与分配的对象、条件与清偿',...SCENES.participationDistributionGate},
  {id:'distribution-plan-objection-suit',number:'10',title:'分配方案异议与分配方案异议之诉',...SCENES.distributionPlanObjectionSuit},
  {id:'mature-claim-notice-fork',number:'11',title:'对到期债权的执行（代位申请执行）',...SCENES.matureClaimNoticeFork},
  {id:'co-owned-property-partition',number:'12',title:'对共有物的执行与析产',...SCENES.coOwnedPropertyPartition},
  {id:'specific-thing-substitute',number:'13',title:'对特定物的执行与折价赔偿',...SCENES.specificThingSubstitute},
  {id:'retained-title-execution',number:'14',title:'对保留所有权买卖标的物的执行',...SCENES.retainedTitleExecution},
  {id:'apology-publication-execution',number:'15',title:'赔礼道歉等判决的公告执行',...SCENES.apologyPublicationExecution},
  {id:'delayed-performance-money',number:'16',title:'迟延履行利息与迟延履行金',...SCENES.delayedPerformanceMoney},
];
export default ()=> <RemotionDeck animationId="enforcement-control-network" component={EnforcementControlNetwork} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="执行程序控制网络" typography={typography} typographyScope={{animationId:'enforcement-control-network',subject:'civil-procedure',topic:'24'}}/>;
