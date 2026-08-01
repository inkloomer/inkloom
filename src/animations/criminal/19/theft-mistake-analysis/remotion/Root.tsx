import {Composition} from 'remotion';
import {TheftMistakeAnalysis} from './TheftMistakeAnalysis';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="TheftMistakeAnalysis" component={TheftMistakeAnalysis} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
