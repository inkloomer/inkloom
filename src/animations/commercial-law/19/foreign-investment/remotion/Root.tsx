import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {ForeignInvestment} from './ForeignInvestment';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="ForeignInvestment" component={withAnimationTypography(ForeignInvestment,getAnimationTypographyConfiguration('foreign-investment'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
