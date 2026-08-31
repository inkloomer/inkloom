import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ContractRescissionHall} from './ContractRescissionHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ContractRescissionHall"
    component={withAnimationTypography(
      ContractRescissionHall,
      getAnimationTypographyConfiguration('contract-rescission-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
