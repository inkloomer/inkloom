import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {FeaturesOfConstitution} from './FeaturesOfConstitution';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="FeaturesOfConstitution"
    component={withAnimationTypography(
      FeaturesOfConstitution,
      getAnimationTypographyConfiguration('features-of-constitution'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
