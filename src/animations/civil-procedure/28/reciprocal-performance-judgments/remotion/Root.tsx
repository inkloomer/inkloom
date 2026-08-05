import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ReciprocalPerformanceJudgments} from './ReciprocalPerformanceJudgments';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ReciprocalPerformanceJudgments" component={withAnimationTypography(ReciprocalPerformanceJudgments,getAnimationTypographyConfiguration('reciprocal-performance-judgments'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
