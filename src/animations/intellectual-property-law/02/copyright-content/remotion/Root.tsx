import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CopyrightContent} from './CopyrightContent';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CopyrightContent" component={withAnimationTypography(CopyrightContent,getAnimationTypographyConfiguration('copyright-content'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
