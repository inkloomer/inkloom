import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {FeaturesOfLaw} from './FeaturesOfLaw';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="FeaturesOfLaw"
    component={withAnimationTypography(
      FeaturesOfLaw,
      getAnimationTypographyConfiguration('features-of-law'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
