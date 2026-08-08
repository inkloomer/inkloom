import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {InstanceClaimCounterclaimMap} from './InstanceClaimCounterclaimMap';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="InstanceClaimCounterclaimMap" component={withAnimationTypography(InstanceClaimCounterclaimMap,getAnimationTypographyConfiguration('instance-claim-counterclaim-map'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
