import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ResolutionValidity} from './ResolutionValidity';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ResolutionValidity" component={withAnimationTypography(ResolutionValidity,getAnimationTypographyConfiguration('resolution-validity'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
