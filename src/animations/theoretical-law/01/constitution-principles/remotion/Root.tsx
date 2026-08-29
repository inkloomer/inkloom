import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ConstitutionPrinciples} from './ConstitutionPrinciples';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ConstitutionPrinciples"
    component={withAnimationTypography(
      ConstitutionPrinciples,
      getAnimationTypographyConfiguration('constitution-principles'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
