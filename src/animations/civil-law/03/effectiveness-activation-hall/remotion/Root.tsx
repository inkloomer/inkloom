import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {EffectivenessActivationHall} from './EffectivenessActivationHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="EffectivenessActivationHall"
    component={withAnimationTypography(
      EffectivenessActivationHall,
      getAnimationTypographyConfiguration('effectiveness-activation-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
