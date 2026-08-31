import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ContractPerformanceHall} from './ContractPerformanceHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ContractPerformanceHall"
    component={withAnimationTypography(
      ContractPerformanceHall,
      getAnimationTypographyConfiguration('contract-performance-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
