import {SupervisoryOrgans} from '@/animations/theoretical-law/01/supervisory-organs/remotion/SupervisoryOrgans';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/supervisory-organs/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'chair', number: '01', title: '帅令五章：军委主席负责制', ...SCENES.chair},
  {id: 'censor', number: '02', title: '绣衣双线：双领导·双负责', ...SCENES.censor},
];

export const SupervisoryOrgansPlayer = () => (
  <RemotionDeck
    animationId="supervisory-organs"
    component={SupervisoryOrgans}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="监察机关：绣衣按察署"
  />
);

export default SupervisoryOrgansPlayer;
