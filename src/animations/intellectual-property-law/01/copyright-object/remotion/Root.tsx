import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CopyrightObject} from './CopyrightObject';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CopyrightObject" component={withAnimationTypography(CopyrightObject,getAnimationTypographyConfiguration('copyright-object'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
