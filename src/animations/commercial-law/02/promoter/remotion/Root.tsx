import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Promoter} from './Promoter';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="Promoter" component={withAnimationTypography(Promoter,getAnimationTypographyConfiguration('promoter'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
