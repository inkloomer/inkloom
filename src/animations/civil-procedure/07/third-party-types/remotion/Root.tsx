import {Composition} from 'remotion';
import {ThirdPartyTypes} from './ThirdPartyTypes';
import {DURATION_FRAMES, FPS} from './storyboard';

export const RemotionRoot = () => (
  <Composition
    id="ThirdPartyTypes"
    component={ThirdPartyTypes}
    durationInFrames={DURATION_FRAMES}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
