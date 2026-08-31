import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {InsurancePrinciples} from './InsurancePrinciples';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="InsurancePrinciples" component={withAnimationTypography(InsurancePrinciples,getAnimationTypographyConfiguration('insurance-principles'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
