import {typography} from '@/animations/civil-procedure/32/penalty-adjustment-procedure/animation.meta';
import {PenaltyAdjustmentProcedure} from '@/animations/civil-procedure/32/penalty-adjustment-procedure/remotion/PenaltyAdjustmentProcedure';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/32/penalty-adjustment-procedure/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'request-arms-adjustment', number: '01', title: '当事人请求才启动调整', ...SCENES.requestArmsAdjustment},
  {id: 'proof-and-invalid-waiver', number: '02', title: '举证责任与预先放弃无效', ...SCENES.proofAndInvalidWaiver},
  {id: 'first-instance-clarification', number: '03', title: '一审法院的释明义务', ...SCENES.firstInstanceClarification},
  {id: 'appellate-completion', number: '04', title: '二审直接释明与裁判', ...SCENES.appellateCompletion},
];

export default () => <RemotionDeck animationId="penalty-adjustment-procedure" component={PenaltyAdjustmentProcedure} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="违约金调整程序控制台" typography={typography} typographyScope={{animationId: 'penalty-adjustment-procedure', subject: 'civil-procedure', topic: '32'}} />;
