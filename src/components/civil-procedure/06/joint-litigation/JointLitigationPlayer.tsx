import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';
import {JointLitigation} from '@/animations/civil-procedure/06/joint-litigation/remotion/JointLitigation';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/06/joint-litigation/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'definition', number: '01', title: '什么是共同诉讼？', ...SCENES.definition},
  {id: 'ordinary-joint-litigation', number: '02', title: '普通共同诉讼', ...SCENES.ordinary},
  {id: 'necessary-joint-litigation', number: '03', title: '必要共同诉讼', ...SCENES.necessary},
  {id: 'comparison', number: '04', title: '普通 vs 必要 对比', ...SCENES.comparison},
  {id: 'common-cases', number: '05', title: '常考必要共同诉讼人', ...SCENES.examples},
  {id: 'recap', number: '06', title: '共同诉讼总览', ...SCENES.recap},
  {id: 'co-litigant-recognition', number: '07', title: '共同诉讼人之间的关系', ...SCENES.relations},
];

export const JointLitigationPlayer = () => (
  <RemotionDeck
    animationId="joint-litigation"
    title="共同诉讼"
    component={JointLitigation}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default JointLitigationPlayer;
