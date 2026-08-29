import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {DeathReviewSummit} from './DeathReviewSummit';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="DeathReviewSummit"
    component={withAnimationTypography(
      DeathReviewSummit,
      getAnimationTypographyConfiguration('death-review-summit'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
