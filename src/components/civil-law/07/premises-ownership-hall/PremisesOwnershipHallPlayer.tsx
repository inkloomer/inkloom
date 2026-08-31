import {PremisesOwnershipHall} from '@/animations/civil-law/07/premises-ownership-hall/remotion/PremisesOwnershipHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/07/premises-ownership-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'land-house-integration',
    number: '01',
    title: '房地一体化原则',
    ...SCENES['land-house-integration'],
  },
  {
    id: 'condominium-dependence',
    number: '02',
    title: '业主的建筑物区分所有权',
    ...SCENES['condominium-dependence'],
  },
  {
    id: 'community-parking-rules',
    number: '03',
    title: '物业小区共有与车位',
    ...SCENES['community-parking-rules'],
  },
  {
    id: 'voting-threshold-ladder',
    number: '04',
    title: '业主团体的表决规则',
    ...SCENES['voting-threshold-ladder'],
  },
  {
    id: 'neighboring-relations-fork',
    number: '05',
    title: '相邻关系',
    ...SCENES['neighboring-relations-fork'],
  },
];

export const PremisesOwnershipHallPlayer = () => (
  <RemotionDeck
    animationId="premises-ownership-hall"
    title="不动产所有权——黛青楼景馆"
    component={PremisesOwnershipHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PremisesOwnershipHallPlayer;
