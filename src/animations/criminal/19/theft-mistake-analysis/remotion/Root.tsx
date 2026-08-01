import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {TheftMistakeAnalysis} from './TheftMistakeAnalysis';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="TheftMistakeAnalysis" component={withAnimationTypography(TheftMistakeAnalysis, getAnimationTypographyConfiguration('theft-mistake-analysis'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
