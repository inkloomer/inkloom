import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
import {StatutoryAgent} from '@/animations/civil-procedure/08/statutory-agent/remotion/StatutoryAgent';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/08/statutory-agent/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'definition', number: '01', title: '概念', ...SCENES.definition},
  {id: 'differences', number: '02', title: '区别', ...SCENES.differences},
  {id: 'death-event', number: '03', title: '死亡事件', ...SCENES.deathEvent},
];

export const StatutoryAgentPlayer = () => (
  <RemotionDeck
    animationId="statutory-agent"
    component={StatutoryAgent}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    title="法定代理人"
  />
);

export default StatutoryAgentPlayer;
