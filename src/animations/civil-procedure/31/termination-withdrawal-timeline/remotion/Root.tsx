import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {TerminationWithdrawalTimeline} from './TerminationWithdrawalTimeline';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="TerminationWithdrawalTimeline" component={withAnimationTypography(TerminationWithdrawalTimeline,getAnimationTypographyConfiguration('termination-withdrawal-timeline'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
