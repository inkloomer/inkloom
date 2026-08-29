import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LiabilityConcurrence} from './LiabilityConcurrence';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LiabilityConcurrence"
    component={withAnimationTypography(
      LiabilityConcurrence,
      getAnimationTypographyConfiguration('liability-concurrence'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
