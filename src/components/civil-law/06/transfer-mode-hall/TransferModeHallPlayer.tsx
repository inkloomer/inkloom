import {TransferModeHall} from '@/animations/civil-law/06/transfer-mode-hall/remotion/TransferModeHall';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/06/transfer-mode-hall/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'publicity-appearance',
    number: '01',
    title: '公示与权利外观',
    ...SCENES['publicity-appearance'],
  },
  {
    id: 'formation-opposition',
    number: '02',
    title: '公示成立与公示对抗',
    ...SCENES['formation-opposition'],
  },
  {
    id: 'two-special-lanes',
    number: '03',
    title: '两种特殊情形',
    ...SCENES['two-special-lanes'],
  },
  {
    id: 'third-party-contexts',
    number: '04',
    title: '交易模式与执行模式',
    ...SCENES['third-party-contexts'],
  },
];

export const TransferModeHallPlayer = () => (
  <RemotionDeck
    animationId="transfer-mode-hall"
    title="基于合同的物权变动——墨蓝闸口"
    component={TransferModeHall}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default TransferModeHallPlayer;
