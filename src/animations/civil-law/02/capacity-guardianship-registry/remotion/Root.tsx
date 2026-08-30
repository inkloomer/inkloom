import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CapacityGuardianshipRegistry} from './CapacityGuardianshipRegistry';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="CapacityGuardianshipRegistry"
    component={withAnimationTypography(
      CapacityGuardianshipRegistry,
      getAnimationTypographyConfiguration('capacity-guardianship-registry'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
