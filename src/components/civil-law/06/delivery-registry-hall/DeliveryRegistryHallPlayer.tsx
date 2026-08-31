import {DeliveryRegistryHall} from '@/animations/civil-law/06/delivery-registry-hall/remotion/DeliveryRegistryHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/06/delivery-registry-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'registry-rules',
    number: '01',
    title: '不动产登记规则',
    ...SCENES['registry-rules'],
  },
  {
    id: 'actual-delivery',
    number: '02',
    title: '现实交付与拟制交付',
    ...SCENES['actual-delivery'],
  },
  {
    id: 'constructive-delivery',
    number: '03',
    title: '观念交付的三种类型',
    ...SCENES['constructive-delivery'],
  },
];

export const DeliveryRegistryHallPlayer = () => (
  <RemotionDeck
    animationId="delivery-registry-hall"
    title="登记与交付——铜钥交付馆"
    component={DeliveryRegistryHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DeliveryRegistryHallPlayer;
