import {FinancingLeaseHall} from '@/animations/civil-law/12/financing-lease-hall/remotion/FinancingLeaseHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/financing-lease-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'financing-overview',
    number: '01',
    title: '融资租赁的闭环与镜像',
    ...SCENES['financing-overview'],
  },
  {
    id: 'liability-allocation',
    number: '02',
    title: '瑕疵追责与物的责任',
    ...SCENES['liability-allocation'],
  },
  {
    id: 'rent-protection',
    number: '03',
    title: '欠租的双径与三制对比',
    ...SCENES['rent-protection'],
  },
];

export const FinancingLeaseHallPlayer = () => (
  <RemotionDeck
    animationId="financing-lease-hall"
    title="融资租赁——紫檀融资馆"
    component={FinancingLeaseHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default FinancingLeaseHallPlayer;
