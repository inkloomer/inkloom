import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Securities} from './Securities';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="Securities" component={withAnimationTypography(Securities,getAnimationTypographyConfiguration('securities'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
