import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {CommencementThresholdMap} from './CommencementThresholdMap';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="CommencementThresholdMap" component={withAnimationTypography(CommencementThresholdMap, getAnimationTypographyConfiguration('commencement-threshold-map'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
