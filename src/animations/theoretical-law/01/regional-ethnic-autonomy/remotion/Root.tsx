import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {RegionalEthnicAutonomy} from './RegionalEthnicAutonomy';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="RegionalEthnicAutonomy"
    component={withAnimationTypography(
      RegionalEthnicAutonomy,
      getAnimationTypographyConfiguration('regional-ethnic-autonomy'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
