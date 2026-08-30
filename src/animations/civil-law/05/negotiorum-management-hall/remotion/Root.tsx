import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {NegotiorumManagementHall} from './NegotiorumManagementHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="NegotiorumManagementHall"
    component={withAnimationTypography(
      NegotiorumManagementHall,
      getAnimationTypographyConfiguration('negotiorum-management-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
