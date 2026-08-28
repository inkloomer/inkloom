import {
  EvidenceExclusionLattice,
} from '@/animations/criminal-procedure/07/evidence-exclusion-lattice/remotion/EvidenceExclusionLattice';
import {
  DURATION_FRAMES,
  FPS,
  SCENES,
} from '@/animations/criminal-procedure/07/evidence-exclusion-lattice/remotion/storyboard';
import {RemotionDeck, type RemotionScene} from '../../../remotion/RemotionDeck';

const scenes: readonly RemotionScene[] = [
  {
    id: 'unlawful-grading',
    number: '01',
    title: '三重筛格',
    ...SCENES['unlawful-grading'],
  },
  {
    id: 'intentional-confession-routes',
    number: '02',
    title: '供述四路',
    ...SCENES['intentional-confession-routes'],
  },
  {
    id: 'correction-fork-gate',
    number: '03',
    title: '补正岔路',
    ...SCENES['correction-fork-gate'],
  },
];

export const EvidenceExclusionLatticePlayer = () => (
  <RemotionDeck
    animationId="evidence-exclusion-lattice"
    title="刑事证据排除：三分筛格、供述四路与补正岔路"
    component={EvidenceExclusionLattice}
    scenes={scenes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
  />
);

export default EvidenceExclusionLatticePlayer;
