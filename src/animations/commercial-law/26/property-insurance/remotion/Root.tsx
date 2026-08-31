import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {PropertyInsurance} from './PropertyInsurance';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="PropertyInsurance" component={withAnimationTypography(PropertyInsurance,getAnimationTypographyConfiguration('property-insurance'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
