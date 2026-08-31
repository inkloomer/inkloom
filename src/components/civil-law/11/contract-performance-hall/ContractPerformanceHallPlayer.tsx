import {ContractPerformanceHall} from '@/animations/civil-law/11/contract-performance-hall/remotion/ContractPerformanceHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/11/contract-performance-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'defence-triad-court',
    number: '01',
    title: '双务合同履行抗辩权',
    ...SCENES['defence-triad-court'],
  },
  {
    id: 'third-party-lanes',
    number: '02',
    title: '向第三人履行的合同',
    ...SCENES['third-party-lanes'],
  },
  {
    id: 'surrogate-performance-rails',
    number: '03',
    title: '第三人代为履行',
    ...SCENES['surrogate-performance-rails'],
  },
];

export const ContractPerformanceHallPlayer = () => (
  <RemotionDeck
    animationId="contract-performance-hall"
    title="合同的履行——烟青对峙馆"
    component={ContractPerformanceHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ContractPerformanceHallPlayer;
