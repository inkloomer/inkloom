import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {MandatoryCareGate} from './MandatoryCareGate';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="MandatoryCareGate"
    component={withAnimationTypography(
      MandatoryCareGate,
      getAnimationTypographyConfiguration('mandatory-care-gate'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
