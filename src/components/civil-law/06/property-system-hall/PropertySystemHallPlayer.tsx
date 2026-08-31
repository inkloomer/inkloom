import {PropertySystemHall} from '@/animations/civil-law/06/property-system-hall/remotion/PropertySystemHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/06/property-system-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'system-tree',
    number: '01',
    title: '物权的概念和体系',
    ...SCENES['system-tree'],
  },
  {
    id: 'principal-accessory',
    number: '02',
    title: '主物与从物',
    ...SCENES['principal-accessory'],
  },
  {
    id: 'original-fruit',
    number: '03',
    title: '原物与孳息',
    ...SCENES['original-fruit'],
  },
];

export const PropertySystemHallPlayer = () => (
  <RemotionDeck
    animationId="property-system-hall"
    title="物权体系与物的分类——竹青标本馆"
    component={PropertySystemHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PropertySystemHallPlayer;
