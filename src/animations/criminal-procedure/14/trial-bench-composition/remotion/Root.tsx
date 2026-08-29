import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {TrialBenchComposition} from './TrialBenchComposition';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="TrialBenchComposition"
    component={withAnimationTypography(
      TrialBenchComposition,
      getAnimationTypographyConfiguration('trial-bench-composition'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
