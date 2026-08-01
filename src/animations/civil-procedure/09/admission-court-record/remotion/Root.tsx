import {Composition} from 'remotion';
import {AdmissionCourtRecord} from './AdmissionCourtRecord';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="AdmissionCourtRecord" component={AdmissionCourtRecord} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
