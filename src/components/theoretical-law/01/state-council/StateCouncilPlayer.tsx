import {StateCouncil} from '@/animations/theoretical-law/01/state-council/remotion/StateCouncil';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/01/state-council/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'honors', number: '01', title: '三枚勋章的授予规矩', ...SCENES.honors},
  {id: 'organization', number: '02', title: '首长负责制与组织法亮点', ...SCENES.organization},
];

export const StateCouncilPlayer = () => (
  <RemotionDeck
    animationId="state-council"
    component={StateCouncil}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="国务院：紫檀政务案"
  />
);

export default StateCouncilPlayer;
