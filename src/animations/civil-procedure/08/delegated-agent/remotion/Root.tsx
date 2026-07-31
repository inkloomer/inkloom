import {Composition} from 'remotion';
import {DelegatedAgent} from './DelegatedAgent';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="DelegatedAgent"
    component={DelegatedAgent}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
