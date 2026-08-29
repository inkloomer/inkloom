import {SocialSystem} from '@/animations/theoretical-law/01/social-system/remotion/SocialSystem';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/social-system/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'concept-scope', number: '01', title: '概念三义与特征', ...SCENES.conceptScope},
  {id: 'constitution-items', number: '02', title: '宪法七类体现', ...SCENES.constitutionItems},
  {id: 'exam-focus', number: '03', title: '考试聚焦', ...SCENES.examFocus},
];

export const SocialSystemPlayer = () => (
  <RemotionDeck
    animationId="social-system"
    component={SocialSystem}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="基本社会制度：民生保障"
  />
);

export default SocialSystemPlayer;
