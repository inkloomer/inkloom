import {GuaranteeDepositSealDesk} from '@/animations/civil-law/15/guarantee-deposit-seal-desk/remotion/GuaranteeDepositSealDesk';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/15/guarantee-deposit-seal-desk/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'guarantee-concept-fork',
    number: '01',
    title: '保证的概念与三分辨',
    ...SCENES['guarantee-concept-fork'],
  },
  {
    id: 'guarantee-liability-lanes',
    number: '02',
    title: '保证责任的承担方式',
    ...SCENES['guarantee-liability-lanes'],
  },
  {
    id: 'guarantee-period-clock-bank',
    number: '03',
    title: '保证期间与保证诉讼时效',
    ...SCENES['guarantee-period-clock-bank'],
  },
  {
    id: 'deposit-penalty-counter',
    number: '04',
    title: '定金与定金罚则',
    ...SCENES['deposit-penalty-counter'],
  },
];

export const GuaranteeDepositSealDeskPlayer = () => (
  <RemotionDeck
    animationId="guarantee-deposit-seal-desk"
    title="担保债权——茶纸印泥台"
    component={GuaranteeDepositSealDesk}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default GuaranteeDepositSealDeskPlayer;
