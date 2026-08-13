import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {DividendRight} from './DividendRight';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="DividendRight" component={withAnimationTypography(DividendRight,getAnimationTypographyConfiguration('dividend-right'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
