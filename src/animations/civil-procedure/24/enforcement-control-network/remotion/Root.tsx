import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {EnforcementControlNetwork} from './EnforcementControlNetwork';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="EnforcementControlNetwork" component={withAnimationTypography(EnforcementControlNetwork,getAnimationTypographyConfiguration('enforcement-control-network'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
