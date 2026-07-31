import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {PartyCapacity} from '@/animations/civil-procedure/05/party-capacity/remotion/PartyCapacity';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/05/party-capacity/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'rights-capacity', number: '01', title: '诉讼权利能力是什么？', ...SCENES.definition},
  {id: 'capacity-comparison', number: '02', title: '权利能力 vs 行为能力', ...SCENES.comparison},
  {id: 'legal-representation', number: '03', title: '无诉讼行为能力人如何诉讼？', ...SCENES.case},
  {id: 'recap', number: '04', title: '核心结论速记', ...SCENES.recap},
];

export const PartyCapacityPlayer = () => (
  <RemotionDeck
    animationId="party-capacity"
    title="诉讼权利能力与诉讼行为能力"
    component={PartyCapacity}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PartyCapacityPlayer;
