import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {BurdenOfProofSteps} from './BurdenOfProofSteps';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="BurdenOfProofSteps" component={withAnimationTypography(BurdenOfProofSteps, getAnimationTypographyConfiguration('burden-of-proof-steps'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
