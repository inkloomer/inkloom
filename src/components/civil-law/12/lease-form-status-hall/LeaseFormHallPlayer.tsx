import {LeaseFormHall} from '@/animations/civil-law/12/lease-form-status-hall/remotion/LeaseFormHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/lease-form-status-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'lease-form-indefinite',
    number: '01',
    title: '租赁的形式与不定期',
    ...SCENES['lease-form-indefinite'],
  },
  {
    id: 'one-house-leases',
    number: '02',
    title: '一房数租的领奖台',
    ...SCENES['one-house-leases'],
  },
  {
    id: 'invalid-sublease',
    number: '03',
    title: '无效红线与转租闸机',
    ...SCENES['invalid-sublease'],
  },
];

export const LeaseFormHallPlayer = () => (
  <RemotionDeck
    animationId="lease-form-status-hall"
    title="租赁上——黛蓝租赁馆"
    component={LeaseFormHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default LeaseFormHallPlayer;
