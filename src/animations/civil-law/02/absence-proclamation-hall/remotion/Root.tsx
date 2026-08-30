import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {AbsenceProclamationHall} from './AbsenceProclamationHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="AbsenceProclamationHall"
    component={withAnimationTypography(
      AbsenceProclamationHall,
      getAnimationTypographyConfiguration('absence-proclamation-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
