import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion'; import {AppraisalOpinion} from './AppraisalOpinion'; import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="AppraisalOpinion" component={withAnimationTypography(AppraisalOpinion, getAnimationTypographyConfiguration('appraisal-opinion'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
