import {DebtTransferHall} from '@/animations/civil-law/10/debt-transfer-hall/remotion/DebtTransferHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/10/debt-transfer-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'credit-assignment-flow',
    number: '01',
    title: '债权转让',
    ...SCENES['credit-assignment-flow'],
  },
  {
    id: 'join-release-fork',
    number: '02',
    title: '债务加入与债务转让',
    ...SCENES['join-release-fork'],
  },
  {
    id: 'defence-offset-continuity',
    number: '03',
    title: '抗辩权与抵销权的延续',
    ...SCENES['defence-offset-continuity'],
  },
  {
    id: 'non-transferable-series',
    number: '04',
    title: '不得转让的债权与债务',
    ...SCENES['non-transferable-series'],
  },
];

export const DebtTransferHallPlayer = () => (
  <RemotionDeck
    animationId="debt-transfer-hall"
    title="债的移转——青金汇票馆"
    component={DebtTransferHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default DebtTransferHallPlayer;
