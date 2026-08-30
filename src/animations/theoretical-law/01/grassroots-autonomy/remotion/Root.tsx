import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {GrassrootsAutonomy} from './GrassrootsAutonomy';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="GrassrootsAutonomy"
    component={withAnimationTypography(
      GrassrootsAutonomy,
      getAnimationTypographyConfiguration('grassroots-autonomy'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
