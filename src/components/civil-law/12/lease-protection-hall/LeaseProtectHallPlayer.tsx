import {LeaseProtectHall} from '@/animations/civil-law/12/lease-protection-hall/remotion/LeaseProtectHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/lease-protection-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'priority-purchase-renewal',
    number: '01',
    title: '承租人的优先购买权',
    ...SCENES['priority-purchase-renewal'],
  },
  {
    id: 'renewal-succession',
    number: '02',
    title: '期满与身后的承租位',
    ...SCENES['renewal-succession'],
  },
  {
    id: 'sale-no-break-lease',
    number: '03',
    title: '买卖不破租赁与两道闸',
    ...SCENES['sale-no-break-lease'],
  },
];

export const LeaseProtectHallPlayer = () => (
  <RemotionDeck
    animationId="lease-protection-hall"
    title="租赁下——黛蓝护租馆"
    component={LeaseProtectHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default LeaseProtectHallPlayer;
