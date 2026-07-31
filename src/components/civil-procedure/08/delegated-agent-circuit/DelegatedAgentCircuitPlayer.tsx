import {Player} from '@remotion/player';
import {DelegatedAgentCircuit} from '@/animations/civil-procedure/08/delegated-agent-circuit/remotion/DelegatedAgentCircuit';
import {DURATION_FRAMES, FPS} from '@/animations/civil-procedure/08/delegated-agent-circuit/remotion/storyboard';

export const DelegatedAgentCircuitPlayer = () => (
  <Player
    component={DelegatedAgentCircuit}
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

export default DelegatedAgentCircuitPlayer;
