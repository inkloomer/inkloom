import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ObligationExtinctionHall} from './ObligationExtinctionHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ObligationExtinctionHall"
    component={withAnimationTypography(
      ObligationExtinctionHall,
      getAnimationTypographyConfiguration('obligation-extinction-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
