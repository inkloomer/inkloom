import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {CounterclaimVsDefense} from '@/animations/civil-procedure/02/counterclaim-vs-defense/remotion/CounterclaimVsDefense';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/02/counterclaim-vs-defense/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'concept', number: '01', title: '反诉是独立的诉', ...SCENES.concept},
  {id: 'technique', number: '02', title: '去掉原告主张测试法', ...SCENES.technique},
  {id: 'cases', number: '03', title: '四组典型对照', ...SCENES.cases},
  {id: 'independence', number: '04', title: '本诉撤 · 反诉仍在', ...SCENES.independence},
  {id: 'recap', number: '05', title: '判断流 + 要件口诀', ...SCENES.recap},
];

export const CounterclaimVsDefensePlayer = () => (
  <RemotionDeck
    title="反诉与反驳的区分"
    component={CounterclaimVsDefense}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default CounterclaimVsDefensePlayer;
