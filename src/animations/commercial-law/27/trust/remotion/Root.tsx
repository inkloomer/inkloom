import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Trust} from './Trust';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="Trust" component={withAnimationTypography(Trust,getAnimationTypographyConfiguration('trust'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
