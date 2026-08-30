import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ExecutionExpiryStation} from './ExecutionExpiryStation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ExecutionExpiryStation" component={withAnimationTypography(ExecutionExpiryStation, getAnimationTypographyConfiguration('execution-expiry-station'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
