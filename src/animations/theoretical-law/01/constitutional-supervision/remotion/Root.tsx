import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ConstitutionalSupervision} from './ConstitutionalSupervision';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ConstitutionalSupervision"
    component={withAnimationTypography(
      ConstitutionalSupervision,
      getAnimationTypographyConfiguration('constitutional-supervision'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
