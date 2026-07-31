import {Player} from '@remotion/player';
import {StatutoryAgentBadge} from '@/animations/civil-procedure/08/statutory-agent-badge/remotion/StatutoryAgentBadge';
import {DURATION_FRAMES, FPS} from '@/animations/civil-procedure/08/statutory-agent-badge/remotion/storyboard';

export const StatutoryAgentBadgePlayer = () => (
  <Player
    component={StatutoryAgentBadge}
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

export default StatutoryAgentBadgePlayer;
