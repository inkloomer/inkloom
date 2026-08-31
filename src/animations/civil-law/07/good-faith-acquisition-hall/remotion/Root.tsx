import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {GoodFaithAcquisitionHall} from './GoodFaithAcquisitionHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="GoodFaithAcquisitionHall"
    component={withAnimationTypography(
      GoodFaithAcquisitionHall,
      getAnimationTypographyConfiguration('good-faith-acquisition-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
