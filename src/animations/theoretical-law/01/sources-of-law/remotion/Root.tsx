import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {SourcesOfLaw} from './SourcesOfLaw';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="SourcesOfLaw"
    component={withAnimationTypography(
      SourcesOfLaw,
      getAnimationTypographyConfiguration('sources-of-law'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
