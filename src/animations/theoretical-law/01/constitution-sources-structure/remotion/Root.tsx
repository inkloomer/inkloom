import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ConstitutionSourcesStructure} from './ConstitutionSourcesStructure';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ConstitutionSourcesStructure"
    component={withAnimationTypography(
      ConstitutionSourcesStructure,
      getAnimationTypographyConfiguration('constitution-sources-structure'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
