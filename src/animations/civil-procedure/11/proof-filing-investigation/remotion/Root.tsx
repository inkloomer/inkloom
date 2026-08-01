import {getAnimationTypographyConfiguration} from '../../../../../typography/animation-registry';
import {withAnimationTypography} from '../../../../../typography/animation-provider';
import {Composition} from 'remotion';
import {ProofFilingInvestigation} from './ProofFilingInvestigation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ProofFilingInvestigation" component={withAnimationTypography(ProofFilingInvestigation, getAnimationTypographyConfiguration('proof-filing-investigation'))} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
