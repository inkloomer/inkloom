import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CopyrightLimitations} from './CopyrightLimitations';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CopyrightLimitations" component={withAnimationTypography(CopyrightLimitations,getAnimationTypographyConfiguration('copyright-limitations'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
