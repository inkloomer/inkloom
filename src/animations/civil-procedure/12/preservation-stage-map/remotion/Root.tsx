import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PreservationStageMap} from './PreservationStageMap';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="PreservationStageMap" component={withAnimationTypography(PreservationStageMap, getAnimationTypographyConfiguration('preservation-stage-map'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
