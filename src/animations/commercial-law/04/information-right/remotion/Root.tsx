import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {InformationRight} from './InformationRight';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="InformationRight" component={withAnimationTypography(InformationRight,getAnimationTypographyConfiguration('information-right'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
