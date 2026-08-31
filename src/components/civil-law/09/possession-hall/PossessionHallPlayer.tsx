import {PossessionHall} from '@/animations/civil-law/09/possession-hall/remotion/PossessionHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/09/possession-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'possession-basics',
    number: '01',
    title: '占有的成立与消灭',
    ...SCENES['possession-basics'],
  },
  {
    id: 'entitled-vs-unentitled',
    number: '02',
    title: '有权占有与无权占有',
    ...SCENES['entitled-vs-unentitled'],
  },
  {
    id: 'possession-protection',
    number: '03',
    title: '占有的保护',
    ...SCENES['possession-protection'],
  },
  {
    id: 'unentitled-return',
    number: '04',
    title: '无权占有的返还规则',
    ...SCENES['unentitled-return'],
  },
];

export const PossessionHallPlayer = () => (
  <RemotionDeck
    animationId="possession-hall"
    title="占有——黑曜石馆"
    component={PossessionHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PossessionHallPlayer;
