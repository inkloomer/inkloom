import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PreSuitPreservationTransfer} from './PreSuitPreservationTransfer';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="PreSuitPreservationTransfer" component={withAnimationTypography(PreSuitPreservationTransfer, getAnimationTypographyConfiguration('pre-suit-preservation-transfer'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
