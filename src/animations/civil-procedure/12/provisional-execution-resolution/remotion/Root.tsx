import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ProvisionalExecutionResolution} from './ProvisionalExecutionResolution';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="ProvisionalExecutionResolution" component={withAnimationTypography(ProvisionalExecutionResolution, getAnimationTypographyConfiguration('provisional-execution-resolution'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
