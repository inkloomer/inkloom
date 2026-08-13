import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {RecoveryRight} from './RecoveryRight';
import {DURATION_FRAMES,FPS} from './storyboard';
export const RemotionRoot=()=> <Composition id="RecoveryRight" component={withAnimationTypography(RecoveryRight,getAnimationTypographyConfiguration('recovery-right'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080}/>;
