import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {typography} from '../animation.meta';
import {PreservationAssetMeasures} from './PreservationAssetMeasures';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="PreservationAssetMeasures" component={withAnimationTypography(PreservationAssetMeasures, {metadata: typography, scope: {animationId: 'preservation-asset-measures', subject: 'civil-procedure', topic: '12'}})} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
