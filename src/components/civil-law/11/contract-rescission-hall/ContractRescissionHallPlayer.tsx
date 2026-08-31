import {ContractRescissionHall} from '@/animations/civil-law/11/contract-rescission-hall/remotion/ContractRescissionHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/11/contract-rescission-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'rescission-family-fork',
    number: '01',
    title: '合同解除的家族谱',
    ...SCENES['rescission-family-fork'],
  },
  {
    id: 'situation-force-compare',
    number: '02',
    title: '权属分野与情势对照',
    ...SCENES['situation-force-compare'],
  },
  {
    id: 'breach-trio-march',
    number: '03',
    title: '债务人违约的解除权',
    ...SCENES['breach-trio-march'],
  },
  {
    id: 'exercise-time-consequence',
    number: '04',
    title: '解除权的行使与后果',
    ...SCENES['exercise-time-consequence'],
  },
];

export const ContractRescissionHallPlayer = () => (
  <RemotionDeck
    animationId="contract-rescission-hall"
    title="合同的解除——霜蓝剪裁馆"
    component={ContractRescissionHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ContractRescissionHallPlayer;
