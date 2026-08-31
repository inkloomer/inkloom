import {CoOwnershipHall} from '@/animations/civil-law/07/co-ownership-hall/remotion/CoOwnershipHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/07/co-ownership-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'twin-ownership-types',
    number: '01',
    title: '按份共有与共同共有',
    ...SCENES['twin-ownership-types'],
  },
  {
    id: 'internal-relations-chains',
    number: '02',
    title: '共有的内部关系',
    ...SCENES['internal-relations-chains'],
  },
  {
    id: 'case-fork-and-external',
    number: '03',
    title: '案例分叉与外部关系',
    ...SCENES['case-fork-and-external'],
  },
];

export const CoOwnershipHallPlayer = () => (
  <RemotionDeck
    animationId="co-ownership-hall"
    title="共有——姜黄棋秤馆"
    component={CoOwnershipHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default CoOwnershipHallPlayer;
