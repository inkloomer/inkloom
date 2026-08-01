import {Composition} from 'remotion'; import {AppraisalOpinion} from './AppraisalOpinion'; import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="AppraisalOpinion" component={AppraisalOpinion} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
