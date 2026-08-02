import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {typography} from '../animation.meta';
import {ProvisionalExecutionGates} from './ProvisionalExecutionGates';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="ProvisionalExecutionGates" component={withAnimationTypography(ProvisionalExecutionGates, {metadata: typography, scope: {animationId: 'provisional-execution-gates', subject: 'civil-procedure', topic: '12'}})} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
