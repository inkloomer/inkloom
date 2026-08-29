import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {PleaLeniencyCaliper} from './PleaLeniencyCaliper';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="PleaLeniencyCaliper"
    component={withAnimationTypography(
      PleaLeniencyCaliper,
      getAnimationTypographyConfiguration('plea-leniency-caliper'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
