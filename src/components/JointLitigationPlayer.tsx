import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {JointLitigation} from '@/animations/civil-procedure/06/joint-litigation/remotion/JointLitigation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/06/joint-litigation/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {number: '01', title: '什么是共同诉讼？', ...SCENES.definition},
  {number: '02', title: '普通共同诉讼', ...SCENES.ordinary},
  {number: '03', title: '必要共同诉讼', ...SCENES.necessary},
  {number: '04', title: '普通 vs 必要 对比', ...SCENES.comparison},
  {number: '05', title: '常考必要共同诉讼人', ...SCENES.examples},
  {number: '06', title: '共同诉讼总览', ...SCENES.recap},
];

export const JointLitigationPlayer = () => (
  <RemotionDeck
    title="共同诉讼"
    component={JointLitigation}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default JointLitigationPlayer;
