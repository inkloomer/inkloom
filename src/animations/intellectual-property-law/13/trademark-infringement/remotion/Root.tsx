import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {TrademarkInfringement} from './TrademarkInfringement';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="TrademarkInfringement" component={withAnimationTypography(TrademarkInfringement,getAnimationTypographyConfiguration('trademark-infringement'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
