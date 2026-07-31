import {Composition} from 'remotion';
import {PartyCapacity} from './PartyCapacity';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="PartyCapacity"
    component={PartyCapacity}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
