import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LocalPeopleCongresses} from './LocalPeopleCongresses';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LocalPeopleCongresses"
    component={withAnimationTypography(
      LocalPeopleCongresses,
      getAnimationTypographyConfiguration('local-people-congresses'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
