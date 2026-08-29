import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ExecutionDispatchBoard} from './ExecutionDispatchBoard';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ExecutionDispatchBoard"
    component={withAnimationTypography(
      ExecutionDispatchBoard,
      getAnimationTypographyConfiguration('execution-dispatch-board'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
