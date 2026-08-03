import {typography} from '@/animations/civil-procedure/15/mediation-settlement-path/animation.meta';
import {MediationSettlementPath} from '@/animations/civil-procedure/15/mediation-settlement-path/remotion/MediationSettlementPath';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/15/mediation-settlement-path/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'mediation-scope', number: '01', title: '哪些程序可以调解', ...SCENES.mediationScope},
  {id: 'agreement-review', number: '02', title: '调解协议如何审查', ...SCENES.agreementReview},
  {id: 'signature-effect', number: '03', title: '签收如何决定生效', ...SCENES.signatureEffect},
  {id: 'settlement-exits', number: '04', title: '诉讼和解如何结案', ...SCENES.settlementExits},
];

export default () => <RemotionDeck animationId="mediation-settlement-path" component={MediationSettlementPath} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="调解协议与生效路径" typography={typography} typographyScope={{animationId: 'mediation-settlement-path', subject: 'civil-procedure', topic: '15'}} />;
