import {Composition} from 'remotion';
import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {BehaviorPreservation} from './BehaviorPreservation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="BehaviorPreservation" component={withAnimationTypography(BehaviorPreservation, getAnimationTypographyConfiguration('behavior-preservation'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
