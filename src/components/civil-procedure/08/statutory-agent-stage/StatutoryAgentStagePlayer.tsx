import {Player} from '@remotion/player';
import {StatutoryAgentStage} from '@/animations/civil-procedure/08/statutory-agent-stage/remotion/StatutoryAgentStage';
import {DURATION_FRAMES, FPS} from '@/animations/civil-procedure/08/statutory-agent-stage/remotion/storyboard';

export const StatutoryAgentStagePlayer = () => (
  <Player
    component={StatutoryAgentStage}
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

export default StatutoryAgentStagePlayer;
