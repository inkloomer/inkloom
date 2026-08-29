import {LiabilityConcurrence} from '@/animations/theoretical-law/01/liability-concurrence/remotion/LiabilityConcurrence';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/liability-concurrence/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'definition-anatomy', number: '01', title: '一行为撞上数个责任', ...SCENES.definitionAnatomy},
  {id: 'cause-and-choice', number: '02', title: '规范重合与分流处理', ...SCENES.causeChoice},
  {id: 'boundary-notes', number: '03', title: '三因生责与责任制裁', ...SCENES.boundaryNotes},
];

export const LiabilityConcurrencePlayer = () => (
  <RemotionDeck
    animationId="liability-concurrence"
    component={LiabilityConcurrence}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律责任的竞合：一人一行，多责不容"
  />
);

export default LiabilityConcurrencePlayer;
