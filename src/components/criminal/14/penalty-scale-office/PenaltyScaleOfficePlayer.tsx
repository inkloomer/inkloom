import {PenaltyScaleOffice} from '@/animations/criminal/14/penalty-scale-office/remotion/PenaltyScaleOffice';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/14/penalty-scale-office/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'main-penalty-ladder', number: '01', title: '主刑·五级音阶', ...SCENES.mainPenaltyLadder},
  {id: 'credit-offset-dial', number: '02', title: '折抵规则·死刑三类禁区', ...SCENES.creditOffsetDial},
  {id: 'death-review-track', number: '03', title: '死缓·四岔轨道', ...SCENES.deathReviewTrack},
  {id: 'fine-order-merge', number: '04', title: '罚金·没收·执行顺序', ...SCENES.fineOrderMerge},
  {id: 'rights-deport-nonpenal', number: '05', title: '剥政·驱逐·非刑罚措施', ...SCENES.rightsDeportNonpenal},
];

export const PenaltyScaleOfficePlayer = () => <RemotionDeck animationId="penalty-scale-office" component={PenaltyScaleOffice} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑罚的体系：主刑五级·附加刑·非刑罚措施" />;
export default PenaltyScaleOfficePlayer;
