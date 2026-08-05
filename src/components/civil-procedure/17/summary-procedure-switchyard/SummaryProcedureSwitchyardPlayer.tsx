import {typography} from '@/animations/civil-procedure/17/summary-procedure-switchyard/animation.meta';
import {SummaryProcedureSwitchyard} from '@/animations/civil-procedure/17/summary-procedure-switchyard/remotion/SummaryProcedureSwitchyard';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/17/summary-procedure-switchyard/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'entry-and-exclusions', number: '01', title: '简易程序的准入与排除', ...SCENES.entryAndExclusions},
  {id: 'operation-and-conversion', number: '02', title: '适用方式与程序转换', ...SCENES.operationAndConversion},
  {id: 'small-claim-thresholds', number: '03', title: '小额诉讼的金额门槛', ...SCENES.smallClaimThresholds},
  {id: 'small-claim-exits', number: '04', title: '小额诉讼的排除与终局', ...SCENES.smallClaimExits},
];

export default () => <RemotionDeck animationId="summary-procedure-switchyard" component={SummaryProcedureSwitchyard} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="简易程序与小额诉讼" typography={typography} typographyScope={{animationId: 'summary-procedure-switchyard', subject: 'civil-procedure', topic: '17'}} />;
