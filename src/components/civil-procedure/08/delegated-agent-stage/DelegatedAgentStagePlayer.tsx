import {Player} from '@remotion/player';
import {DelegatedAgentStage} from '@/animations/civil-procedure/08/delegated-agent-stage/remotion/DelegatedAgentStage';
import {DURATION_FRAMES, FPS} from '@/animations/civil-procedure/08/delegated-agent-stage/remotion/storyboard';

export const DelegatedAgentStagePlayer = () => (
  <Player
    component={DelegatedAgentStage}
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

export default DelegatedAgentStagePlayer;
