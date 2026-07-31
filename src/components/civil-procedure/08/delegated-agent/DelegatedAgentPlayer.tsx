import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';
import {DelegatedAgent} from '@/animations/civil-procedure/08/delegated-agent/remotion/DelegatedAgent';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-procedure/08/delegated-agent/remotion/storyboard';

const scenes: readonly RemotionScene[] = [
  {id: 'scope', number: '01', title: '授权范围', ...SCENES.scope},
  {id: 'full-power-trap', number: '02', title: '全权代理陷阱', ...SCENES.fullPowerTrap},
  {id: 'execution-stage', number: '03', title: '代理阶段', ...SCENES.executionStage},
  {id: 'divorce-duty', number: '04', title: '出庭义务', ...SCENES.divorceDuty},
];

export const DelegatedAgentPlayer = () => (
  <RemotionDeck
    animationId="delegated-agent"
    component={DelegatedAgent}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    title="委托代理人"
  />
);

export default DelegatedAgentPlayer;
