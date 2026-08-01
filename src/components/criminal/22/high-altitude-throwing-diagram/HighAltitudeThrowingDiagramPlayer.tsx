import {HighAltitudeThrowingDiagram} from '@/animations/criminal/22/high-altitude-throwing-diagram/remotion/HighAltitudeThrowingDiagram';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/criminal/22/high-altitude-throwing-diagram/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'vertical-direction', number: '01', title: '高空与向下抛掷', ...SCENES.verticalDirection},
  {id: 'seriousness-gate', number: '02', title: '情节严重入罪门', ...SCENES.seriousnessGate},
  {id: 'intent-exclusion', number: '03', title: '故意与过失排除', ...SCENES.intentExclusion},
  {id: 'concurrence-choice', number: '04', title: '想象竞合择一重', ...SCENES.concurrenceChoice},
];

export default () => <RemotionDeck animationId="high-altitude-throwing-diagram" component={HighAltitudeThrowingDiagram} scenes={scenes} durationInFrames={DURATION_FRAMES} fps={FPS} title="高空抛物罪" />;
