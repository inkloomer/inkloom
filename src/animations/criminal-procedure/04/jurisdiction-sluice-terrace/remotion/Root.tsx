import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {JurisdictionSluiceTerrace} from './JurisdictionSluiceTerrace';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="JurisdictionSluiceTerrace"
    component={withAnimationTypography(
      JurisdictionSluiceTerrace,
      getAnimationTypographyConfiguration('jurisdiction-sluice-terrace'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
