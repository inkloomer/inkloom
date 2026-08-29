import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LegalDepartmentsSystem} from './LegalDepartmentsSystem';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LegalDepartmentsSystem"
    component={withAnimationTypography(
      LegalDepartmentsSystem,
      getAnimationTypographyConfiguration('legal-departments-system'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
