import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Draft} from './Draft';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="Draft" component={withAnimationTypography(Draft,getAnimationTypographyConfiguration('draft'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
