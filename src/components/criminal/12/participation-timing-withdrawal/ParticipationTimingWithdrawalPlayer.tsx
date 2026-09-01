import {ParticipationTimingWithdrawal} from '@/animations/criminal/12/participation-timing-withdrawal/remotion/ParticipationTimingWithdrawal';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/12/participation-timing-withdrawal/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'timing-three-phases', number: '01', title: '参与时间：事前·中途·事后', ...SCENES.timingThreePhases},
  {id: 'successive-liability-rule', number: '02', title: '承继共犯：只对参与后的事负责', ...SCENES.successiveLiabilityRule},
  {id: 'death-time-inference', number: '03', title: '致死一脚存疑：归责倒推', ...SCENES.deathTimeInference},
  {id: 'house-entry-successive-quiz', number: '04', title: '入户抢劫：承继帮助犯不加重点', ...SCENES.houseEntrySuccessiveQuiz},
  {id: 'withdrawal-conditions', number: '05', title: '中途退出：共犯关系的脱离', ...SCENES.withdrawalConditions},
  {id: 'role-withdrawal-requirements', number: '06', title: '三种角色的脱离要求', ...SCENES.roleWithdrawalRequirements},
  {id: 'withdrawal-four-cases', number: '07', title: '脱离四案例：贡献没清除，中止不成立', ...SCENES.withdrawalFourCases},
  {id: 'exam-2024-options', number: '08', title: '2024金题：甲构成既遂的有？', ...SCENES.exam2024Options},
];

export const ParticipationTimingWithdrawalPlayer = () => <RemotionDeck animationId="participation-timing-withdrawal" component={ParticipationTimingWithdrawal} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="共同犯罪（四）：参与时间·承继与脱离" />;
export default ParticipationTimingWithdrawalPlayer;
