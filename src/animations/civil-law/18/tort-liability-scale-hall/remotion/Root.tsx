import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {TortLiabilityScaleHall} from './TortLiabilityScaleHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="TortLiabilityScaleHall"
    component={withAnimationTypography(
      TortLiabilityScaleHall,
      getAnimationTypographyConfiguration('tort-liability-scale-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
