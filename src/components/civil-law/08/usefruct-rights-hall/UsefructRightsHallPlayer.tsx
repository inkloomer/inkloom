import {UsefructRightsHall} from '@/animations/civil-law/08/usefruct-rights-hall/remotion/UsefructRightsHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/08/usefruct-rights-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'land-contract-rights',
    number: '01',
    title: '土地承包经营权',
    ...SCENES['land-contract-rights'],
  },
  {
    id: 'construction-use-right',
    number: '02',
    title: '建设用地使用权',
    ...SCENES['construction-use-right'],
  },
  {
    id: 'residence-right',
    number: '03',
    title: '居住权',
    ...SCENES['residence-right'],
  },
  {
    id: 'servitude-fork',
    number: '04',
    title: '地役权',
    ...SCENES['servitude-fork'],
  },
];

export const UsefructRightsHallPlayer = () => (
  <RemotionDeck
    animationId="usefruct-rights-hall"
    title="用益物权——石印拓片馆"
    component={UsefructRightsHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default UsefructRightsHallPlayer;
