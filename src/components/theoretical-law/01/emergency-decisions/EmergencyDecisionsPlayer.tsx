import {EmergencyDecisions} from '@/animations/theoretical-law/01/emergency-decisions/remotion/EmergencyDecisions';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/emergency-decisions/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'allocation', number: '01', title: '警讯三级：谁来点烽火', ...SCENES.allocation},
  {id: 'premier', number: '02', title: '国务院席次与总理负责制', ...SCENES.premier},
  {id: 'meetings-orgs', number: '03', title: '两会与部门线·审计署', ...SCENES.meetingsOrgs},
];

export const EmergencyDecisionsPlayer = () => (
  <RemotionDeck
    animationId="emergency-decisions"
    component={EmergencyDecisions}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="战争、宣战、动员和紧急状态的决定权分配"
  />
);

export default EmergencyDecisionsPlayer;
