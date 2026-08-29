import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ConstitutionDevelopment} from './ConstitutionDevelopment';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ConstitutionDevelopment"
    component={withAnimationTypography(
      ConstitutionDevelopment,
      getAnimationTypographyConfiguration('constitution-development'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
