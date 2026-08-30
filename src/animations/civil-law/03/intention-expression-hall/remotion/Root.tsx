import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {IntentionExpressionHall} from './IntentionExpressionHall';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="IntentionExpressionHall"
    component={withAnimationTypography(
      IntentionExpressionHall,
      getAnimationTypographyConfiguration('intention-expression-hall'),
    )}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
