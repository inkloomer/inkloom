import {
  DeathReviewSummit,
} from '@/animations/criminal-procedure/17/death-review-summit/remotion/DeathReviewSummit';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/17/death-review-summit/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'disposition-camp',
    number: '01',
    title: '处理要诀营地',
    ...SCENES['disposition-camp'],
  },
  {
    id: 'remand-routes',
    number: '02',
    title: '发回下山路',
    ...SCENES['remand-routes'],
  },
  {
    id: 'special-effect-points',
    number: '03',
    title: '特殊生效点',
    ...SCENES['special-effect-points'],
  },
];

export const DeathReviewSummitPlayer = () => (
  <RemotionDeck
    animationId="death-review-summit"
    title="死刑复核：处理要诀营地、发回下山路与特殊生效点"
    component={DeathReviewSummit}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DeathReviewSummitPlayer;
