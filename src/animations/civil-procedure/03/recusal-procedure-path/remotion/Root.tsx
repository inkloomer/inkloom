import {Composition} from 'remotion';
import {RecusalProcedurePath} from './RecusalProcedurePath';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="RecusalProcedurePath"
    component={RecusalProcedurePath}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
