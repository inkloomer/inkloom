import {Composition} from 'remotion';
import {EvidencePreservation} from './EvidencePreservation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="EvidencePreservation" component={EvidencePreservation} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
