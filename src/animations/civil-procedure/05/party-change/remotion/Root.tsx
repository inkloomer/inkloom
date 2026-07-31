import {Composition} from 'remotion';
import {PartyChange} from './PartyChange';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="PartyChange"
    component={PartyChange}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
