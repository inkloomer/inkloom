import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ExclusionCustomsGate} from './ExclusionCustomsGate';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ExclusionCustomsGate" component={withAnimationTypography(ExclusionCustomsGate, getAnimationTypographyConfiguration('exclusion-customs-gate'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
