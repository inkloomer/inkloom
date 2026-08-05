import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {SubrogationLitigationNetwork} from './SubrogationLitigationNetwork';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="SubrogationLitigationNetwork" component={withAnimationTypography(SubrogationLitigationNetwork,getAnimationTypographyConfiguration('subrogation-litigation-network'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
