import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {JuvenileObservatoryGreenhouse} from './JuvenileObservatoryGreenhouse';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="JuvenileObservatoryGreenhouse"
    component={withAnimationTypography(
      JuvenileObservatoryGreenhouse,
      getAnimationTypographyConfiguration('juvenile-observatory-greenhouse'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
