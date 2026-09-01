import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {TrademarkRightsTermination} from './TrademarkRightsTermination';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="TrademarkRightsTermination" component={withAnimationTypography(TrademarkRightsTermination,getAnimationTypographyConfiguration('trademark-rights-termination'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
