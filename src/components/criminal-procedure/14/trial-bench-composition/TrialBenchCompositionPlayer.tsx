import {
  TrialBenchComposition,
} from '@/animations/criminal-procedure/14/trial-bench-composition/remotion/TrialBenchComposition';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/14/trial-bench-composition/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'three-forms-bench',
    number: '01',
    title: '三种组织形式',
    ...SCENES['three-forms-bench'],
  },
  {
    id: 'assessor-qualification-desk',
    number: '02',
    title: '陪审员拼装规格',
    ...SCENES['assessor-qualification-desk'],
  },
  {
    id: 'seven-bench-powers',
    number: '03',
    title: '七人庭权限',
    ...SCENES['seven-bench-powers'],
  },
];

export const TrialBenchCompositionPlayer = () => (
  <RemotionDeck
    animationId="trial-bench-composition"
    title="审判组织：三种形式、陪审员拼装规格与七人庭权限"
    component={TrialBenchComposition}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default TrialBenchCompositionPlayer;
