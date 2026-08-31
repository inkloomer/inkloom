import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {AntiUnfairCompetitionLaw} from './AntiUnfairCompetitionLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="AntiUnfairCompetitionLaw" component={withAnimationTypography(AntiUnfairCompetitionLaw,getAnimationTypographyConfiguration('anti-unfair-competition-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
