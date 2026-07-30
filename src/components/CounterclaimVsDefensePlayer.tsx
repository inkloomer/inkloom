import {RemotionDeck, type RemotionScene} from './remotion/RemotionDeck';
import {CounterclaimVsDefense} from '@/animations/civil-procedure/02/counterclaim-vs-defense/remotion/CounterclaimVsDefense';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/02/counterclaim-vs-defense/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'concept', number: '01', title: '反诉 vs 反驳', ...SCENES.concept},
  {id: 'technique', number: '02', title: '去掉原告主张测试法', ...SCENES.technique},
  {id: 'cases', number: '03', title: '四组典型对照', ...SCENES.cases},
  {id: 'recap', number: '04', title: '判断流程图', ...SCENES.recap},
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
