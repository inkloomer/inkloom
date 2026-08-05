import {typography} from '@/animations/civil-procedure/30/revocation-action-execution-chain/animation.meta';
import {RevocationActionExecutionChain} from '@/animations/civil-procedure/30/revocation-action-execution-chain/remotion/RevocationActionExecutionChain';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/30/revocation-action-execution-chain/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'parties-jurisdiction-preservation',number:'01',title:'共同被告、管辖与保全入口',...SCENES.partiesJurisdictionPreservation},
  {id:'asset-return-rule',number:'02',title:'撤销后财产入库，不直接清偿债权人',...SCENES.assetReturnRule},
  {id:'two-judgment-execution',number:'03',title:'两份生效文书组成执行钥匙',...SCENES.twoJudgmentExecution},
];
export default ()=> <RemotionDeck animationId="revocation-action-execution-chain" component={RevocationActionExecutionChain} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="撤销权诉讼入库执行链" typography={typography} typographyScope={{animationId:'revocation-action-execution-chain',subject:'civil-procedure',topic:'30'}}/>;
