import {ExclusionCustomsGate} from '@/animations/criminal-procedure-gold/07/exclusion-customs-gate/remotion/ExclusionCustomsGate';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal-procedure-gold/07/exclusion-customs-gate/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'exclusion-gate-lanes', number: '01', title: '排非闸口：违禁品一律扣下', ...SCENES.exclusionGateLanes},
  {id: 'data-conversion-desk', number: '02', title: '电子舱单与转关货：格式即合法性', ...SCENES.dataConversionDesk},
  {id: 'review-checkpoints', number: '03', title: '审查三道卡：解释·数量·红线', ...SCENES.reviewCheckpoints},
];

export const ExclusionCustomsGatePlayer = () => <RemotionDeck animationId="exclusion-customs-gate" component={ExclusionCustomsGate} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="刑事证据·中——排非闸口、电子舱单与审查三道卡" />;
export default ExclusionCustomsGatePlayer;
