import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {RevocationActionExecutionChain} from './RevocationActionExecutionChain';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="RevocationActionExecutionChain" component={withAnimationTypography(RevocationActionExecutionChain,getAnimationTypographyConfiguration('revocation-action-execution-chain'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
