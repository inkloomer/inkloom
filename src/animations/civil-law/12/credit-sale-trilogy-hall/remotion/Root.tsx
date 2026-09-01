import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {TrilogySaleHall} from './TrilogySaleHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="TrilogySaleHall"
    component={withAnimationTypography(
      TrilogySaleHall,
      getAnimationTypographyConfiguration('credit-sale-trilogy-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
