import {Composition} from 'remotion';
import {SurpriseJudgmentFocus} from './SurpriseJudgmentFocus';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="SurpriseJudgmentFocus" component={SurpriseJudgmentFocus} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
