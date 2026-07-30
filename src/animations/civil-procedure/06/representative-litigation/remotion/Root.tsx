import {Composition} from 'remotion';
import {RepresentativeLitigation} from './RepresentativeLitigation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="RepresentativeLitigation"
    component={RepresentativeLitigation}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
