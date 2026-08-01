import {Composition} from 'remotion';
import {DocumentaryEvidenceRules} from './DocumentaryEvidenceRules';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="DocumentaryEvidenceRules" component={DocumentaryEvidenceRules} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
