import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {AttachedSuitViaduct} from './AttachedSuitViaduct';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="AttachedSuitViaduct"
    component={withAnimationTypography(
      AttachedSuitViaduct,
      getAnimationTypographyConfiguration('attached-suit-viaduct'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
