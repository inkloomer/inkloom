import {JudgeEthics} from '@/animations/theoretical-law/04/judge-ethics/remotion/JudgeEthics';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/judge-ethics/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'core-loyalty', number: '01', title: '核心与忠诚司法事业', ...SCENES.coreLoyalty},
  {id: 'justice', number: '02', title: '保证司法公正', ...SCENES.justice},
  {id: 'clean-people-image', number: '03', title: '廉洁·为民·形象', ...SCENES.cleanPeopleImage},
];

export const JudgeEthicsPlayer = () => (
  <RemotionDeck
    animationId="judge-ethics"
    component={JudgeEthics}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="法官职业道德的主要内容"
  />
);

export default JudgeEthicsPlayer;
