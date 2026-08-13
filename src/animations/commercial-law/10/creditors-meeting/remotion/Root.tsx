import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {CreditorsMeeting} from './CreditorsMeeting';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="CreditorsMeeting" component={withAnimationTypography(CreditorsMeeting,getAnimationTypographyConfiguration('creditors-meeting'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
