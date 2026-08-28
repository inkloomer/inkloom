import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {EvidenceExclusionLattice} from './EvidenceExclusionLattice';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="EvidenceExclusionLattice"
    component={withAnimationTypography(
      EvidenceExclusionLattice,
      getAnimationTypographyConfiguration('evidence-exclusion-lattice'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
