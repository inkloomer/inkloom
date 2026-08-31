import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {DeliveryRegistryHall} from './DeliveryRegistryHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="DeliveryRegistryHall"
    component={withAnimationTypography(
      DeliveryRegistryHall,
      getAnimationTypographyConfiguration('delivery-registry-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
