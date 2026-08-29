import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {FunctionsOfLaw} from './FunctionsOfLaw';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="FunctionsOfLaw"
    component={withAnimationTypography(
      FunctionsOfLaw,
      getAnimationTypographyConfiguration('functions-of-law'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
