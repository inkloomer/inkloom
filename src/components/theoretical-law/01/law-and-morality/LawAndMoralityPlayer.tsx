import {LawAndMorality} from '@/animations/theoretical-law/01/law-and-morality/remotion/LawAndMorality';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/law-and-morality/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'connections', number: '01', title: '联系五维', ...SCENES.connections},
  {id: 'differences', number: '02', title: '区别七对', ...SCENES.differences},
  {id: 'nature-debate', number: '03', title: '恶法非法与恶法亦法', ...SCENES.natureDebate},
  {id: 'content-function-evolution', number: '04', title: '内容功能的古今之变', ...SCENES.evolution},
];

export const LawAndMoralityPlayer = () => (
  <RemotionDeck
    animationId="law-and-morality"
    component={LawAndMorality}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法律与道德：联系、区别与争论"
  />
);

export default LawAndMoralityPlayer;
