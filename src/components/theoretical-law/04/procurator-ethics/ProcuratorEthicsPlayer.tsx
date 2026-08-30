import {ProcuratorEthics} from '@/animations/theoretical-law/04/procurator-ethics/remotion/ProcuratorEthics';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/theoretical-law/04/procurator-ethics/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '@/components/remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {id: 'loyalty-people', number: '01', title: '忠诚·为民', ...SCENES.loyaltyPeople},
  {id: 'duty-fair-clean', number: '02', title: '担当·公正·廉洁', ...SCENES.dutyFairClean},
];

export const ProcuratorEthicsPlayer = () => (
  <RemotionDeck
    animationId="procurator-ethics"
    component={ProcuratorEthics}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    scenes={scenes}
    title="检察官职业道德的主要内容"
  />
);

export default ProcuratorEthicsPlayer;
