import {
  SixPrinciplesPillars,
} from '@/animations/civil-law/01/six-principles-pillars/remotion/SixPrinciplesPillars';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/01/six-principles-pillars/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'principle-functions-map',
    number: '01',
    title: '总纲与功能',
    ...SCENES['principle-functions-map'],
  },
  {
    id: 'equality-volition-forks',
    number: '02',
    title: '平等与自愿',
    ...SCENES['equality-volition-forks'],
  },
  {
    id: 'fairness-goodfaith-benches',
    number: '03',
    title: '公平与诚信',
    ...SCENES['fairness-goodfaith-benches'],
  },
  {
    id: 'order-morals-green-court',
    number: '04',
    title: '公序良俗与绿色',
    ...SCENES['order-morals-green-court'],
  },
];

export const SixPrinciplesPillarsPlayer = () => (
  <RemotionDeck
    animationId="six-principles-pillars"
    title="民法基本原则：六柱础上的功能、分叉与红线"
    component={SixPrinciplesPillars}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default SixPrinciplesPillarsPlayer;
