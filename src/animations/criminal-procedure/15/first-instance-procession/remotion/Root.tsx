import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {FirstInstanceProcession} from './FirstInstanceProcession';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="FirstInstanceProcession"
    component={withAnimationTypography(
      FirstInstanceProcession,
      getAnimationTypographyConfiguration('first-instance-procession'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
