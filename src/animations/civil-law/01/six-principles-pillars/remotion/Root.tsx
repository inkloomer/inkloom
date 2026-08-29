import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {SixPrinciplesPillars} from './SixPrinciplesPillars';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="SixPrinciplesPillars"
    component={withAnimationTypography(
      SixPrinciplesPillars,
      getAnimationTypographyConfiguration('six-principles-pillars'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
