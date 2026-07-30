import {Composition} from 'remotion';
import {CounterclaimVsDefense} from './CounterclaimVsDefense';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="CounterclaimVsDefense"
    component={CounterclaimVsDefense}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
