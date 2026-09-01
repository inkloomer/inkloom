import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LaborDisputeResolution} from './LaborDisputeResolution';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="LaborDisputeResolution" component={withAnimationTypography(LaborDisputeResolution,getAnimationTypographyConfiguration('labor-dispute-resolution'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
