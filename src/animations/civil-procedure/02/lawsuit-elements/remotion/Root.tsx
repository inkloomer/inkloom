import {Composition} from 'remotion';
import {LawsuitElements} from './LawsuitElements';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="LawsuitElements"
    component={LawsuitElements}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
