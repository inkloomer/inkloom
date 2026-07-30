import {Composition} from 'remotion';
import {JointLitigation} from './JointLitigation';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="JointLitigation"
    component={JointLitigation}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
