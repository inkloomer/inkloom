import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ProvisionalExecutionGates} from './ProvisionalExecutionGates';
import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="ProvisionalExecutionGates" component={withAnimationTypography(ProvisionalExecutionGates, getAnimationTypographyConfiguration('provisional-execution-gates'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
