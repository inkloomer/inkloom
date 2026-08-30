import {JudicialIndependence} from '@/animations/theoretical-law/04/judicial-independence/remotion/JudicialIndependence';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judicial-independence/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'three-steles', number: '01', title: '碑廊三碑：护航独立职权', ...SCENES.threeSteles},
  {id: 'rebuff-duty', number: '02', title: '对照室：拒绝权与书面道', ...SCENES.rebuffDuty},
];

export const JudicialIndependencePlayer = () => (
  <RemotionDeck
    animationId="judicial-independence"
    component={JudicialIndependence}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="独立行使审判权与检察权：拒情碑廊"
  />
);

export default JudicialIndependencePlayer;
