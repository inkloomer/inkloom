import {MarriageValidityChain} from '@/animations/civil-law/20/marriage-validity-chain/remotion/MarriageValidityChain';
import {DURATION_FRAMES, FPS, SCENES} from '@/animations/civil-law/20/marriage-validity-chain/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'kinship-support-ladder',
    number: '01',
    title: '亲属间的抚养、赡养与扶养义务',
    ...SCENES['kinship-support-ladder'],
  },
  {
    id: 'marriage-formation-gate',
    number: '02',
    title: '婚姻的成立与无效',
    ...SCENES['marriage-formation-gate'],
  },
  {
    id: 'invalidity-procedure-fork',
    number: '03',
    title: '婚姻无效之诉的程序',
    ...SCENES['invalidity-procedure-fork'],
  },
  {
    id: 'revocable-marriage-lane',
    number: '04',
    title: '可撤销婚姻与无效后果',
    ...SCENES['revocable-marriage-lane'],
  },
];

export const MarriageValidityChainPlayer = () => (
  <RemotionDeck
    animationId="marriage-validity-chain"
    title="婚姻法——青花婚书案"
    component={MarriageValidityChain}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default MarriageValidityChainPlayer;
