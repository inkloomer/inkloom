import {
  ReconciliationScalePavilion,
} from '@/animations/criminal-procedure/21/reconciliation-scale-pavilion/remotion/ReconciliationScalePavilion';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/21/reconciliation-scale-pavilion/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'admission-conditions-scales',
    number: '01',
    title: '准入秤亭',
    ...SCENES['admission-conditions-scales'],
  },
  {
    id: 'three-stage-leniency-chain',
    number: '02',
    title: '三阶段从宽链',
    ...SCENES['three-stage-leniency-chain'],
  },
  {
    id: 'negotiable-boundary-performance',
    number: '03',
    title: '可谈边界与履行',
    ...SCENES['negotiable-boundary-performance'],
  },
  {
    id: 'substitute-settlement-withdrawal',
    number: '04',
    title: '代为和解与反悔',
    ...SCENES['substitute-settlement-withdrawal'],
  },
];

export const ReconciliationScalePavilionPlayer = () => (
  <RemotionDeck
    animationId="reconciliation-scale-pavilion"
    title="当事人和解的公诉案件诉讼程序：准入条件、三阶段从宽链、可谈边界与代为反悔"
    component={ReconciliationScalePavilion}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default ReconciliationScalePavilionPlayer;
