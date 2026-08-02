import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {typography} from '../animation.meta';
import {PreservationStageMap} from './PreservationStageMap';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="PreservationStageMap" component={withAnimationTypography(PreservationStageMap, {metadata: typography, scope: {animationId: 'preservation-stage-map', subject: 'civil-procedure', topic: '12'}})} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
