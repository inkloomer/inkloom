import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {RetrialRewindLoom} from './RetrialRewindLoom';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="RetrialRewindLoom"
    component={withAnimationTypography(
      RetrialRewindLoom,
      getAnimationTypographyConfiguration('retrial-rewind-loom'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
