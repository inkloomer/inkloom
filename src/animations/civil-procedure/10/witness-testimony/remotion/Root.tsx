import {Composition} from 'remotion'; import {WitnessTestimony} from './WitnessTestimony'; import {DURATION_FRAMES, FPS} from './storyboard';
export const RemotionRoot = () => <Composition id="WitnessTestimony" component={WitnessTestimony} durationInFrames={DURATION_FRAMES} fps={FPS} width={1920} height={1080} />;
