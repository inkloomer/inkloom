import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {TrademarkOverview} from './TrademarkOverview';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="TrademarkOverview" component={withAnimationTypography(TrademarkOverview,getAnimationTypographyConfiguration('trademark-overview'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
