import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LlcEquityTransfer} from './LlcEquityTransfer';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="LlcEquityTransfer" component={withAnimationTypography(LlcEquityTransfer,getAnimationTypographyConfiguration('llc-equity-transfer'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
