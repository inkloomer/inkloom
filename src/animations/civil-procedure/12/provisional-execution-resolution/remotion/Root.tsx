import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {typography} from '../animation.meta';
import {ProvisionalExecutionResolution} from './ProvisionalExecutionResolution';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="ProvisionalExecutionResolution" component={withAnimationTypography(ProvisionalExecutionResolution, {metadata: typography, scope: {animationId: 'provisional-execution-resolution', subject: 'civil-procedure', topic: '12'}})} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
