import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {LifeInsurance} from './LifeInsurance';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="LifeInsurance" component={withAnimationTypography(LifeInsurance,getAnimationTypographyConfiguration('life-insurance'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
