import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CreationOfConstitution} from './CreationOfConstitution';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="CreationOfConstitution"
    component={withAnimationTypography(
      CreationOfConstitution,
      getAnimationTypographyConfiguration('creation-of-constitution'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
