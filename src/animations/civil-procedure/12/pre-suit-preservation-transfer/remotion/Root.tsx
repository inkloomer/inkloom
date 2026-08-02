import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {typography} from '../animation.meta';
import {PreSuitPreservationTransfer} from './PreSuitPreservationTransfer';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="PreSuitPreservationTransfer" component={withAnimationTypography(PreSuitPreservationTransfer, {metadata: typography, scope: {animationId: 'pre-suit-preservation-transfer', subject: 'civil-procedure', topic: '12'}})} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
