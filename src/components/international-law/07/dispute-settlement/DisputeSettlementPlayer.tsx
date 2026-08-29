import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {DisputeSettlement} from '@/animations/international-law/07/dispute-settlement/remotion/DisputeSettlement';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/international-law/07/dispute-settlement/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'coercive-means', number: '01', title: '强制性解决方式', ...SCENES.coerciveMeans},
  {id: 'political-means', number: '02', title: '政治性解决方式', ...SCENES.politicalMeans},
  {id: 'icj-jurisdiction', number: '03', title: '国际法院两种管辖', ...SCENES.icjJurisdiction},
  {id: 'tribunal-comparison', number: '04', title: '仲裁与海洋法法庭', ...SCENES.tribunalComparison},
];

export const DisputeSettlementPlayer = () => (
  <RemotionDeck
    animationId="dispute-settlement"
    title="国际争端的解决方式"
    component={DisputeSettlement}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DisputeSettlementPlayer;
