import {
  IntentionExpressionHall,
} from '@/animations/civil-law/03/intention-expression-hall/remotion/IntentionExpressionHall';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/civil-law/03/intention-expression-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'intention-expression-anatomy',
    number: '01',
    title: '意思表示两要素',
    ...SCENES['intention-expression-anatomy'],
  },
  {
    id: 'agreement-fork',
    number: '02',
    title: '合意两要件',
    ...SCENES['agreement-fork'],
  },
  {
    id: 'sham-hidden-jest',
    number: '03',
    title: '虚假·隐藏·戏谑',
    ...SCENES['sham-hidden-jest'],
  },
  {
    id: 'practice-act-delivery',
    number: '04',
    title: '实践行为与交付',
    ...SCENES['practice-act-delivery'],
  },
  {
    id: 'formal-act-dual-path',
    number: '05',
    title: '要式行为双路径',
    ...SCENES['formal-act-dual-path'],
  },
];

export const IntentionExpressionHallPlayer = () => (
  <RemotionDeck
    animationId="intention-expression-hall"
    title="意思表示、实践行为与要式行为——意思表示堂"
    component={IntentionExpressionHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default IntentionExpressionHallPlayer;
