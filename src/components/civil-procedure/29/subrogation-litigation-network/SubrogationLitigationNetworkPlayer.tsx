import {typography} from '@/animations/civil-procedure/29/subrogation-litigation-network/animation.meta';
import {SubrogationLitigationNetwork} from '@/animations/civil-procedure/29/subrogation-litigation-network/remotion/SubrogationLitigationNetwork';
import {DURATION_FRAMES,FPS,SCENES} from '@/animations/civil-procedure/29/subrogation-litigation-network/remotion/storyboard';
import {RemotionDeck,type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes:readonly RemotionScene[]=[
  {id:'three-party-roles',number:'01',title:'代位权诉讼的三方诉讼地位',...SCENES.threePartyRoles},
  {id:'jurisdiction-and-arbitration',number:'02',title:'法定管辖不受基础协议外推',...SCENES.jurisdictionAndArbitration},
  {id:'related-actions-routing',number:'03',title:'与相关诉讼的合并、中止顺序',...SCENES.relatedActionsRouting},
  {id:'direct-payment-and-dismissal',number:'04',title:'成立直接清偿；不成立驳回诉请',...SCENES.directPaymentAndDismissal},
];
export default ()=> <RemotionDeck animationId="subrogation-litigation-network" component={SubrogationLitigationNetwork} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="代位权诉讼关系网络" typography={typography} typographyScope={{animationId:'subrogation-litigation-network',subject:'civil-procedure',topic:'29'}}/>;
