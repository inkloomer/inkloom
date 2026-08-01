import {Composition} from 'remotion';
import {StatutoryAgent} from './StatutoryAgent';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => <Composition id="StatutoryAgent" component={StatutoryAgent} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;

