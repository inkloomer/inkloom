import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {SpecialTortWarningMap} from './SpecialTortWarningMap';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="SpecialTortWarningMap"
    component={withAnimationTypography(
      SpecialTortWarningMap,
      getAnimationTypographyConfiguration('special-tort-warning-map'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
