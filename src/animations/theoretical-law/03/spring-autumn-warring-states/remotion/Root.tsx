import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {SpringAutumnWarringStates} from './SpringAutumnWarringStates';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="SpringAutumnWarringStates"
    component={withAnimationTypography(
      SpringAutumnWarringStates,
      getAnimationTypographyConfiguration('spring-autumn-warring-states'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
