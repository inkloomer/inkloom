import {BreachLiabilityHall} from '@/animations/civil-law/11/breach-liability-hall/remotion/BreachLiabilityHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/11/breach-liability-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'culpa-formula-gates',
    number: '01',
    title: '缔约过失责任',
    ...SCENES['culpa-formula-gates'],
  },
  {
    id: 'strict-liability-scales',
    number: '02',
    title: '归责原则与赔偿范围',
    ...SCENES['strict-liability-scales'],
  },
  {
    id: 'harmful-performance-fork',
    number: '03',
    title: '加害给付',
    ...SCENES['harmful-performance-fork'],
  },
  {
    id: 'penalty-deposit-ledgers',
    number: '04',
    title: '违约金与定金',
    ...SCENES['penalty-deposit-ledgers'],
  },
];

export const BreachLiabilityHallPlayer = () => (
  <RemotionDeck
    animationId="breach-liability-hall"
    title="违约责任——赤檀法槌馆"
    component={BreachLiabilityHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default BreachLiabilityHallPlayer;
