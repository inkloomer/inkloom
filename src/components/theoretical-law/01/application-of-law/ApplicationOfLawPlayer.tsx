import {ApplicationOfLaw} from '@/animations/theoretical-law/01/application-of-law/remotion/ApplicationOfLaw';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/application-of-law/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'goal-and-steps', number: '01', title: '法适用的目标与三段论', ...SCENES.goalSteps},
  {id: 'discovery-argument', number: '02', title: '法律发现与法律论证', ...SCENES.discoveryArgument},
  {id: 'justification', number: '03', title: '内部证成与外部证成', ...SCENES.justification},
];

export const ApplicationOfLawPlayer = () => (
  <RemotionDeck
    animationId="application-of-law"
    component={ApplicationOfLaw}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法适用的一般原理：三段论与证成"
  />
);

export default ApplicationOfLawPlayer;
