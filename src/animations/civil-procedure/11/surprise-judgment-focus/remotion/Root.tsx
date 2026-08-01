import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {SurpriseJudgmentFocus} from './SurpriseJudgmentFocus';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="SurpriseJudgmentFocus" component={withAnimationTypography(SurpriseJudgmentFocus, getAnimationTypographyConfiguration('surprise-judgment-focus'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
