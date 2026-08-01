import {Composition} from 'remotion';
import {EvidenceReview} from './EvidenceReview';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="EvidenceReview" component={EvidenceReview} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
