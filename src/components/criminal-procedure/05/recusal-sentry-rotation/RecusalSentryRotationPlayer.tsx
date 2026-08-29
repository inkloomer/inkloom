import {
  RecusalSentryRotation,
} from '@/animations/criminal-procedure/05/recusal-sentry-rotation/remotion/RecusalSentryRotation';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/05/recusal-sentry-rotation/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'duty-roster-scope',
    number: '01',
    title: '哨位名册',
    ...SCENES['duty-roster-scope'],
  },
  {
    id: 'three-reason-banners',
    number: '02',
    title: '三面令旗',
    ...SCENES['three-reason-banners'],
  },
  {
    id: 'decision-review-board',
    number: '03',
    title: '换防命令链',
    ...SCENES['decision-review-board'],
  },
];

export const RecusalSentryRotationPlayer = () => (
  <RemotionDeck
    animationId="recusal-sentry-rotation"
    title="刑事回避：哨位名册、三面令旗与换防命令链"
    component={RecusalSentryRotation}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default RecusalSentryRotationPlayer;
