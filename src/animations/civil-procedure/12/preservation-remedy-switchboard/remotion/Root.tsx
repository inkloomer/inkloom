import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {typography} from '../animation.meta';
import {PreservationRemedySwitchboard} from './PreservationRemedySwitchboard';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="PreservationRemedySwitchboard" component={withAnimationTypography(PreservationRemedySwitchboard, {metadata: typography, scope: {animationId: 'preservation-remedy-switchboard', subject: 'civil-procedure', topic: '12'}})} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
