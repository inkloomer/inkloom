import {Composition} from 'remotion';
import {EvidenceClassification} from './EvidenceClassification';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="EvidenceClassification" component={EvidenceClassification} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
