import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {EnvironmentalProtectionLaw} from './EnvironmentalProtectionLaw';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="EnvironmentalProtectionLaw" component={withAnimationTypography(EnvironmentalProtectionLaw,getAnimationTypographyConfiguration('environmental-protection-law'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
