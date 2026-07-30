import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {PartyCapacity} from '@/animations/party-capacity/remotion/PartyCapacity';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/party-capacity/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {number: '01', title: '诉讼权利能力是什么？', ...SCENES.definition},
  {number: '02', title: '权利能力 vs 行为能力', ...SCENES.comparison},
  {number: '03', title: '无诉讼行为能力人如何诉讼？', ...SCENES.case},
  {number: '04', title: '核心结论速记', ...SCENES.recap},
];

export const PartyCapacityPlayer = () => (
  <RemotionDeck
    title="诉讼权利能力与诉讼行为能力"
    component={PartyCapacity}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default PartyCapacityPlayer;
