import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {NotaryRefusal} from './NotaryRefusal';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="NotaryRefusal"
    component={withAnimationTypography(
      NotaryRefusal,
      getAnimationTypographyConfiguration('notary-refusal'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
