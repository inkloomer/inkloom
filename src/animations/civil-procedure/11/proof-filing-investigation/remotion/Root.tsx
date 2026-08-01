import {Composition} from 'remotion';
import {ProofFilingInvestigation} from './ProofFilingInvestigation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="ProofFilingInvestigation" component={ProofFilingInvestigation} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
