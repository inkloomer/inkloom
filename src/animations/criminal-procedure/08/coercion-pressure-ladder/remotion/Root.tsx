import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CoercionPressureLadder} from './CoercionPressureLadder';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="CoercionPressureLadder"
    component={withAnimationTypography(
      CoercionPressureLadder,
      getAnimationTypographyConfiguration('coercion-pressure-ladder'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
