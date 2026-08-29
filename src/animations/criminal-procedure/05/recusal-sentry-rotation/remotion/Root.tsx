import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {RecusalSentryRotation} from './RecusalSentryRotation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="RecusalSentryRotation"
    component={withAnimationTypography(
      RecusalSentryRotation,
      getAnimationTypographyConfiguration('recusal-sentry-rotation'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
