import {Player} from '@remotion/player';
import {DelegatedAgentBadge} from '@/animations/civil-procedure/08/delegated-agent-badge/remotion/DelegatedAgentBadge';
import {DURATION_FRAMES, FPS} from '@/animations/civil-procedure/08/delegated-agent-badge/remotion/storyboard';

export const DelegatedAgentBadgePlayer = () => (
  <Player
    component={DelegatedAgentBadge}
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

export default DelegatedAgentBadgePlayer;
