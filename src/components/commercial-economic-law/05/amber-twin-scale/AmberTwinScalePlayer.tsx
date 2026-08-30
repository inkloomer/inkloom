import {AmberTwinScale} from '@/animations/commercial-economic-law/05/amber-twin-scale/remotion/AmberTwinScale';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/commercial-economic-law/05/amber-twin-scale/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'twin-loans', number: '01', title: '两笔借款对局：未登记与新借款', ...SCENES.twinLoans},
  {id: 'renewal-fees', number: '02', title: '5 万续期费：共益还是破产费用', ...SCENES.renewalFees},
  {id: 'priority-recap', number: '03', title: '清偿顺位总收束：谁先谁后', ...SCENES.priorityRecap},
];

export const AmberTwinScalePlayer = () => <RemotionDeck animationId="amber-twin-scale" component={AmberTwinScale} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="破产法：破产费用和共益债务" />;
export default AmberTwinScalePlayer;
