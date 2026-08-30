import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {SupervisoryOrgans} from './SupervisoryOrgans';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="SupervisoryOrgans"
    component={withAnimationTypography(
      SupervisoryOrgans,
      getAnimationTypographyConfiguration('supervisory-organs'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
