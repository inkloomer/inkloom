import {
  SupplementInvestLoop,
} from '@/animations/criminal-procedure/12/supplement-invest-loop/remotion/SupplementInvestLoop';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/12/supplement-invest-loop/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'three-stage-loop',
    number: '01',
    title: '三阶段回旋环',
    ...SCENES['three-stage-loop'],
  },
  {
    id: 'count-time-dials',
    number: '02',
    title: '次数与时限盘',
    ...SCENES['count-time-dials'],
  },
  {
    id: 'custody-stays-note',
    number: '03',
    title: '退案不退人',
    ...SCENES['custody-stays-note'],
  },
];

export const SupplementInvestLoopPlayer = () => (
  <RemotionDeck
    animationId="supplement-invest-loop"
    title="补充侦查：三阶段回旋环、次数时限盘与退案不退人"
    component={SupplementInvestLoop}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default SupplementInvestLoopPlayer;
