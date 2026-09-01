import {FactoringHall} from '@/animations/civil-law/12/factoring-hall/remotion/FactoringHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/12/factoring-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'recourse-fork',
    number: '01',
    title: '保理的双桌对比',
    ...SCENES['recourse-fork'],
  },
  {
    id: 'fictional-credit-notice',
    number: '02',
    title: '假账与通知时刻的裁判',
    ...SCENES['fictional-credit-notice'],
  },
  {
    id: 'priority-race',
    number: '03',
    title: '登记通知比例三连赛',
    ...SCENES['priority-race'],
  },
];

export const FactoringHallPlayer = () => (
  <RemotionDeck
    animationId="factoring-hall"
    title="保理——藏青保理馆"
    component={FactoringHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default FactoringHallPlayer;
