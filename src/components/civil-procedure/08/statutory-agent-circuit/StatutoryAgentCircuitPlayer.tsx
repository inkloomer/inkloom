import {Player} from '@remotion/player';
import {StatutoryAgentCircuit} from '@/animations/civil-procedure/08/statutory-agent-circuit/remotion/StatutoryAgentCircuit';
import {DURATION_FRAMES, FPS} from '@/animations/civil-procedure/08/statutory-agent-circuit/remotion/storyboard';

export const StatutoryAgentCircuitPlayer = () => (
  <Player
    component={StatutoryAgentCircuit}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    compositionWidth={1920}
    compositionHeight={1080}
    controls
    loop
    acknowledgeRemotionLicense
    style={{width: '100%'}}
  />
);

export default StatutoryAgentCircuitPlayer;
