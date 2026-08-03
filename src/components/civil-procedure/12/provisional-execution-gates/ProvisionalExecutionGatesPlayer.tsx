import {ProvisionalExecutionGates} from '@/animations/civil-procedure/12/provisional-execution-gates/remotion/ProvisionalExecutionGates';
import {typography} from '@/animations/civil-procedure/12/provisional-execution-gates/animation.meta';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/12/provisional-execution-gates/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
const scenes: readonly RemotionScene[] = [
  {id: 'eligible-claims', number: '01', title: '适用请求类型', ...SCENES.eligibleClaims},
  {id: 'four-gates', number: '02', title: '四项准入条件', ...SCENES.fourGates},
  {id: 'scope-and-security', number: '03', title: '范围与担保', ...SCENES.scopeAndSecurity},
  {id: 'timing-window', number: '04', title: '受理后至终局前', ...SCENES.timingWindow},
  {id: 'review-remedy', number: '05', title: '同级复议与继续执行', ...SCENES.reviewRemedy},
];
export default () => <RemotionDeck animationId="provisional-execution-gates" component={ProvisionalExecutionGates} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="先予执行条件与程序" typography={typography} typographyScope={{animationId: 'provisional-execution-gates', subject: 'civil-procedure', topic: '12'}} />;
