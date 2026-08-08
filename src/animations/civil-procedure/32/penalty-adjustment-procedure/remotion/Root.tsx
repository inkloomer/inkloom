import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {PenaltyAdjustmentProcedure} from './PenaltyAdjustmentProcedure';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="PenaltyAdjustmentProcedure" component={withAnimationTypography(PenaltyAdjustmentProcedure, getAnimationTypographyConfiguration('penalty-adjustment-procedure'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
