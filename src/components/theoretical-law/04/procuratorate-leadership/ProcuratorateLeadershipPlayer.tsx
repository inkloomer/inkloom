import {ProcuratorateLeadership} from '@/animations/theoretical-law/04/procuratorate-leadership/remotion/ProcuratorateLeadership';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/procuratorate-leadership/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'dual-track', number: '01', title: '领导体制：原则与具体规定', ...SCENES.dualTrack},
  {id: 'disagreement', number: '02', title: '分歧处理', ...SCENES.disagreement},
];

export const ProcuratorateLeadershipPlayer = () => (
  <RemotionDeck
    animationId="procuratorate-leadership"
    component={ProcuratorateLeadership}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="人民检察院的领导体制"
  />
);

export default ProcuratorateLeadershipPlayer;
